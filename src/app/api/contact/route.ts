import { google } from 'googleapis';
import { NextRequest } from 'next/server';

// Build the Google Sheets auth client from environment variables.
// The private key is stored with literal \n sequences in .env.local so we
// replace them back into real newlines at runtime.
function getAuthClient() {
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '';

  return new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, businessType, otherService, locale } = body;

    // Basic server-side validation
    if (!name || !phone || !email || !businessType) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME ?? 'Contact_Form_Data';

    if (!sheetId) {
      console.error('GOOGLE_SHEET_ID is not set');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const auth = getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    // Determine the displayed business type value
    const displayedBusinessType =
      businessType === 'other' && otherService ? otherService : businessType;

    // Timestamp formatted as a readable string
    const timestamp = new Date().toLocaleString('en-GB', {
      timeZone: 'Africa/Casablanca',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Row order must match your sheet columns EXACTLY:
    // A: Timestamp | B: Name | C: Phone | D: Email | E: Business Type | F: Locale
    const row = [timestamp, name, phone, email, displayedBusinessType, locale ?? ''];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    return Response.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

const SPREADSHEET_ID = '1t8pRIO-aBlyKBqQOzOQTN0jSVfoEaiC8yMBQOzXjsXY';
const SHEET_NAMES = {
  rsvp: 'RSVP',
  wishes: 'Wishes',
};

function doPost(e) {
  try {
    const payloadJson = (e && e.parameter && e.parameter.payload) || '{}';
    const payload = JSON.parse(payloadJson);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    let processed = false;
    
    // Auto-create sheets if they don't exist
    const rsvpSheet = spreadsheet.getSheetByName(SHEET_NAMES.rsvp) || spreadsheet.insertSheet(SHEET_NAMES.rsvp);
    const wishesSheet = spreadsheet.getSheetByName(SHEET_NAMES.wishes) || spreadsheet.insertSheet(SHEET_NAMES.wishes);

    // Process RSVP (if attending status is provided)
    if (payload.status) {
      ensureHeaders('rsvp', rsvpSheet);
      rsvpSheet.appendRow(buildRow('rsvp', payload));
      processed = true;
    }
    
    // Process Wishes (if a message was typed)
    if (payload.message && payload.message.trim() !== '') {
      ensureHeaders('wishes', wishesSheet);
      wishesSheet.appendRow(buildRow('wishes', payload));
      processed = true;
    }

    if (!processed) {
       return jsonResponse({ ok: false, error: 'No valid RSVP or message data provided.' });
    }

    return jsonResponse({ ok: true, message: 'Processed successfully' });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: String(error && error.message ? error.message : error),
    });
  }
}

function doGet(e) {
  return jsonResponse({ ok: true, service: 'wedding-forms', timestamp: new Date().toISOString() });
}

function ensureHeaders(sheetKey, sheet) {
  // If there are already rows, we don't need to add headers
  if (sheet.getLastRow() > 0) {
    return;
  }

  let numCols = 4;
  if (sheetKey === 'rsvp') {
    sheet.appendRow(['Timestamp', 'Name', 'Status', 'Submitted At (ISO)']);
  } else if (sheetKey === 'wishes') {
    sheet.appendRow(['Timestamp', 'Name', 'Wish', 'Submitted At (ISO)']);
  }
  
  // Format the header row to make it bold and add a background color
  const headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#f3f3f3");
  
  // Auto-resize columns for better readability
  sheet.autoResizeColumns(1, numCols);
}

function buildRow(sheetKey, payload) {
  const now = new Date();

  if (sheetKey === 'rsvp') {
    return [
      now,
      sanitize(payload.name),
      sanitize(payload.status),
      sanitize(payload.submittedAt),
    ];
  } else if (sheetKey === 'wishes') {
    return [
      now,
      sanitize(payload.name),
      sanitize(payload.message),
      sanitize(payload.submittedAt),
    ];
  }

  return [now, JSON.stringify(payload)];
}

function sanitize(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).trim();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

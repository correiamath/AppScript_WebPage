function doGet() {
 return HtmlService.createHtmlOutputFromFile("index");
}

function alterarCelula_A1(){
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let db = ss.getSheetByName("db");
  db.getRange('a1').setValue(1)
}

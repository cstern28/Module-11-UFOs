// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// clear out existing data
function buildTable(data) {
    tbody.html("");
}

// Loop thru each object in the data
// Append a row and cells for each value in the row
data.forEach((dataRow) => {
    //Append a row to the table body
    let row = tbody.append("tr");
    // Loop thru each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).ForEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
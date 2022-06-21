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

function handleClick() {
    // Grab datatime value from the filer
    let date = d3.select("#datetime").property("value");
        let filteredData = tableData;
        
        // Check to see if a date was entered and filter the data using that date
        // Apply filter to the table to only keep rows where the datetime value matches the filter value
        if (date) {
            filteredData = filteredData.filter(row => row.datetime === date);
        };

        // Rebuild the table using filtered data
        buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads/
buildTable(tableData);

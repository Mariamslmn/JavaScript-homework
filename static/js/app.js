// from data.js
var tableData = data;

// Select the filter button
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    //console.log(inputElement);
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    //console.log(tableData);
  
    var filteredData = tableData.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);
    //appendDataToTable(d3.select("#ufo-table"), filteredData);

    d3.select("tbody")
    .selectAll("tr")
    .data(filteredData)
    .enter()
    .append("tr")
    .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  })
});

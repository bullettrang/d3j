var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style( "width", function(d) { return d *  2  + "px"; }
    ).text(function(d){return '$'+d});
    




    // d3.select(".chart")
    // .selectAll("div")
    // .data(data)
    //   .enter()
    //   .append("div")
    //   .style({"background-color", function(d) { return "rgb(" + d + ","+ d + ","+d+")"; }});


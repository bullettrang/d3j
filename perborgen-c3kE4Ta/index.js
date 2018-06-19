var data = [30, 86, 168, 281, 303, 565];
var numbers = [4,8,15,16,23,42];

//we need a scale
var scale = d3.scale.linear()
.domain([0,42])
.range([0,300])


d3.select(".chart")
  .selectAll("div")
  .data(numbers)
    .enter()
    .append("div")
    .style("width", function(d) { return scale(d) + 'px' })
    .text(function(d) { return '$ ' + d; })
    .style("background-color", function(d) { return 'rgb('+d*2+','+d*4+','+d*3+')' });
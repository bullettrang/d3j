function gridData() {
	var data = new Array();
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 10;
	var height = 10;
	//add this to the gridData function
    var click= 0;
	// iterate for rows	
	for (var row = 0; row < 100; row++) {
		data.push( new Array() );
		
		// iterate for cells/columns inside rows
		for (var column = 0; column < 100; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
                height: height,
                click:click
                
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 1;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;	
	}
	return data;
}

//we need to assign our data to a variable so we can access it
var gridData = gridData();

//next let's appened an SVG to the div we made and set its width and height attributes
var grid = d3.select("#grid")
                .append("svg")
                .attr("width","510px")
                .attr("height","510px");


//we need to make ROWS now

//Why do you have to select elements that you know don’t exist in order to create new ones? 
//WAT.
//Here’s the deal. Instead of telling D3 how to do something, 
//tell D3 what you want. 
//You want the circle elements to correspond to data.


//.enter() creates one <g> for each element in gridData
var row = grid.selectAll(".row")
            .data(gridData)
            .enter().append("g")
            .attr("class","row");                




var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("class","square")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.style("fill", "#fff")
    .style("stroke", "#222")
    .on('mouseover', function(d) {
        d.click ++;
        if ((d.click)%4 == 0 ) { d3.select(this).style("fill","#fff"); }
        if ((d.click)%4 == 1 ) { d3.select(this).style("fill","#2C93E8"); }
        if ((d.click)%4 == 2 ) { d3.select(this).style("fill","#F56C4E"); }
        if ((d.click)%4 == 3 ) { d3.select(this).style("fill","#838690"); }
     });            


//lets add click EVENTS



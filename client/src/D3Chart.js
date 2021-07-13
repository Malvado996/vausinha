import * as d3 from 'd3';

const url = "/api/v1/foodpantries";

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append('svg')
                .attr('width', 800)
                .attr('height', 500)

        d3.json(url).then(data =>  {
            const rects = svg.selectAll('rect')
                .data(data.data[0].inventory) 
                
            rects.enter().append('rect')
                .attr("x", (d, i) => i * 100)
                .attr("y", 0)
                .attr("width", 50)
                .attr("height", d => d.quantity * 5)
                .attr("fill", "red" )
        })
    }
}
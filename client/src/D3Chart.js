import * as d3 from 'd3';

const url = "/api/v1/foodpantries";

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append('svg')
                .attr('width', 800)
                .attr('height', 500)

        d3.json(url).then(data =>  {

            const foo = [data.data[0].inventory];
            console.log(foo)
            // console.log(foo.forEach(x => console.log(x)))

            // const y = d3.scaleLinear()
            //     .domain([0, 100])
            //     .range([0, 500])

            // const x = d3.scaleBand()
            //     .domain(foo.map(d => d.type))
            //     .range([0, 800])
            //     .padding(0.2)


            // const rects = svg.selectAll('rect')
            //     .data(data.data[0].inventory) 
                
            // rects.enter().append('rect')
            //     .attr("x", d => x(d.type))
            //     .attr("y", 0)
            //     .attr("width", 50)
            //     .attr("height", d => y(d.quantity))
            //     .attr("fill", "red" )

        })
    }
}
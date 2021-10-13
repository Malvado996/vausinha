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
           

        })
    }
}
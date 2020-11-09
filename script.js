const dataSource = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

let xScale;
let yScale;

const w = 800;
const h = 600;
const padding = 50;

const r = 5; //sets the global for the circle radius

fetch(dataSource)
    .then(res => {
        if (!res.ok) {
            throw new Error("HTTP status " + res.status);
        }
            return res.json();
        })
    .then(data => {
        let xExtent = d3.extent(data, d => d.Year);
        let yExtent = d3.extent(data, d => d.Time)
        xScale = d3.scaleLinear().domain(xExtent).range([padding, w-padding]);
        yScale = d3.scaleTime().domain(yExtent).range([h-padding, padding]);
        svg.selectAll("circle")
        .data(data) //binds the data to non-existent yet circles
        .enter() //creates one circle element for every datum in the array
        .append("circle") //appends actual svg circles
        .attr('class', 'dot') // passes dot class test
        .attr('cx', d => xScale(d.Year))
        .attr('cy', d => yScale(d.Time))
        .attr('r', d=> r)
        .attr('fill', 'yellow')

    });

const drawAxis = () => {

}

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

const toolTip = d3.select("body")
    .append("div")



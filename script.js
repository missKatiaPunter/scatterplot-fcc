console.log("hello");
const dataSource = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

let xScale;
let yScale;

let width = 800;
let height = 600;
let padding = 50;

fetch(dataSource)
    .then(res => res.json())
    .then(res => console.log(res));
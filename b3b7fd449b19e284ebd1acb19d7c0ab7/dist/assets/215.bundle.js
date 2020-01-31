(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1326:function(r,n,e){"use strict";e.r(n),n.default="import * as d3 from 'd3';\r\nimport * as _ from 'underscore';\r\n\r\nimport {XYChartContextProps} from '../XYChart';\r\n\r\nexport const XYChartContextMock: XYChartContextProps = {\r\n    width: 10,\r\n    height: 50,\r\n    xDomain: [0, 5],\r\n    yDomain: [100, 0],\r\n    series: [\r\n        {\r\n            label: 'First',\r\n            data: [\r\n                {x: 0, y: 3},\r\n                {x: 1, y: 3},\r\n                {x: 2, y: 6},\r\n                {x: 3, y: 2},\r\n                {x: 4, y: 12},\r\n                {x: 5, y: 8},\r\n            ],\r\n        },\r\n        {\r\n            label: 'Second',\r\n            data: [\r\n                {x: 0, y: 5},\r\n                {x: 1, y: 4},\r\n                {x: 2, y: 0},\r\n                {x: 3, y: 6},\r\n                {x: 4, y: 7},\r\n                {x: 5, y: 4},\r\n            ],\r\n        },\r\n    ],\r\n    colorPattern: ['blue', 'green', 'yellow'],\r\n    color: (serie: number, pattern: string[]) => pattern[serie],\r\n    xScale: d3.scale\r\n        .ordinal<number, number>()\r\n        .domain([20, 30, 40, 50, 60])\r\n        .range([0, 10]),\r\n    yScale: d3.scale\r\n        .linear()\r\n        .domain([100, 0])\r\n        .range([50, 0]),\r\n    xFormat: _.identity,\r\n    yFormat: _.identity,\r\n    xTicksCount: 2,\r\n    yTicksCount: 10,\r\n};\r\n\r\nexport const XYChartOnePointContextMock = {\r\n    width: 341.5,\r\n    height: 240,\r\n    xDomain: [1559880000, 1559880000],\r\n    yDomain: [0, 500],\r\n    colorPattern: ['#0d80ef', '#26e8cc', '#4ed6ff', '#94a9bf'],\r\n    series: [{label: 'First', data: [{x: 1559880000, y: 500}]}],\r\n    xTicksCount: 0.5,\r\n    yTicksCount: 0.5,\r\n    color: (serie: number, pattern: string[]) => pattern[serie],\r\n    xScale: d3.scale\r\n        .ordinal<number, number>()\r\n        .domain([1559880000])\r\n        .range([0, 10]),\r\n    yScale: d3.scale\r\n        .linear()\r\n        .domain([500])\r\n        .range([50, 0]),\r\n};\r\n"}}]);
//# sourceMappingURL=215.bundle.js.map
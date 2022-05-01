const { Graph } = require('./graph');
const { Vertex } = require('./vertex');

const toothpaste = new Vertex('toothpaste');
const toothbrush = new Vertex('toothbrush');
const toothbrushHolder = new Vertex('toothbrushHolder');
const floss = new Vertex('floss');

toothpaste.addEdge(toothbrush);
toothpaste.addEdge(floss);
toothbrush.addEdge(toothbrushHolder);
toothbrushHolder.addEdge(toothbrush);

const pharmacyRecommendationsGraph = new Graph();

pharmacyRecommendationsGraph.BST(toothpaste)

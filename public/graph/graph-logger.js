"use strict";
class GraphLogger {
    static logBSTInit(vertexName) {
        console.log('BST started', {
            entryPoint: vertexName,
        });
    }
    static logBSTTick(vertexName) {
        console.log('A BST tick', {
            target: vertexName,
        });
    }
}
module.exports = {
    GraphLogger,
};

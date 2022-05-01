var Queue = /** @class */ (function () {
    function Queue(data) {
        if (data === void 0) {
            data = [];
        }
        this.data = data;
    }
    Queue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    // O(N)
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    // Check what is the standard name
    Queue.prototype.peek = function () {
        return this.data[0];
    };
    return Queue;
}());
module.exports = {
    Queue: Queue
};

"use strict";
class Utils {
    constructor() {
        this.previousId = 0;
    }
    generateUniqueId() {
        return ++this.previousId;
    }
}
module.exports = { Utils };

"use strict";
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Point(this.x, this.y);
    }
    toString() {
        return this.x + "," + this.y;
    }
}
exports.Point = Point;
//# sourceMappingURL=Point.js.map
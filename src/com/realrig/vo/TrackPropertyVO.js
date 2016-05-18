"use strict";
/**
 * Created by shino on 2016/5/14.
 */
/// <reference path="CurvePropertyVO.ts"/>
const UUID = require("UUID");
class TrackPropertyVO {
    constructor() {
        this.curves = [];
        this.backGridColor = "#000000";
        this.backGridBorderColor = "#000000";
        this.backGridThick = 1;
        this.uuid = UUID.generate();
    }
}
exports.TrackPropertyVO = TrackPropertyVO;
//# sourceMappingURL=TrackPropertyVO.js.map
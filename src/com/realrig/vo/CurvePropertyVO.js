"use strict";
/**
 * Created by shino on 2016/5/14.
 */
const UUID = require("UUID");
class CurvePropertyVO {
    constructor() {
        this.precision = 3;
        this.multiple = 1;
        this.ratio = 1;
        this.labelFontSize = 12;
        this.labelFontFamily = "宋体";
        this.formulaType = 0;
        this.formulaA = 1;
        this.formulaB = 0;
        this.precision = 3;
        this.uuid = UUID.generate();
    }
}
exports.CurvePropertyVO = CurvePropertyVO;
//# sourceMappingURL=CurvePropertyVO.js.map
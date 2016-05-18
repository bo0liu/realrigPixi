"use strict";
/**
 * Created by shino on 2016/5/14.
 */
const UUID = require("UUID");
class DigitPropertyVO {
    constructor() {
        this.precision = 3;
        this.uuid = UUID.generate();
    }
}
exports.DigitPropertyVO = DigitPropertyVO;
//# sourceMappingURL=DigitPropertyVO.js.map
"use strict";
/// <reference path="../../../../typings/tsd.d.ts"/>
var UUID = require("UUID");
var realrig;
(function (realrig) {
    var DigitPropertyVO = (function () {
        function DigitPropertyVO(options) {
            this.precision = 3;
            this.uuid = UUID.generate();
        }
        return DigitPropertyVO;
    }());
    realrig.DigitPropertyVO = DigitPropertyVO;
    var CurvePropertyVO = (function () {
        function CurvePropertyVO() {
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
        return CurvePropertyVO;
    }());
    realrig.CurvePropertyVO = CurvePropertyVO;
    var TrackPropertyVO = (function () {
        function TrackPropertyVO() {
            this.curves = [];
            this.backGridColor = "#000000";
            this.backGridBorderColor = "#000000";
            this.backGridThick = 1;
            this.uuid = UUID.generate();
        }
        return TrackPropertyVO;
    }());
    realrig.TrackPropertyVO = TrackPropertyVO;
    var TemplateContainerVO = (function () {
        function TemplateContainerVO() {
            this.tracks = [];
            this.initContainerWidth = 380;
            this.initContainerHeight = 730;
            this.templateWidth = 730;
            this.templateHeight = 380;
            this.cellHeight = 180;
            this.cellConvertHeight = 50;
        }
        return TemplateContainerVO;
    }());
    realrig.TemplateContainerVO = TemplateContainerVO;
    var CurveSelect = (function () {
        function CurveSelect() {
        }
        return CurveSelect;
    }());
    realrig.CurveSelect = CurveSelect;
    var Point = (function () {
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Point.prototype.clone = function () {
            return new realrig.Point(this.x, this.y);
        };
        Point.prototype.toString = function () {
            return this.x + "," + this.y;
        };
        return Point;
    }());
    realrig.Point = Point;
})(realrig || (realrig = {}));
//# sourceMappingURL=TemplateVO.js.map
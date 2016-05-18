"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const $ = require("jquery");
class DrawPixi {
    constructor() {
        this.trackHeadMap = {};
        this.trackBodyMap = {};
        var self = this;
        var bodyheight = window.innerHeight;
        if (bodyheight == 0) {
            bodyheight = screen.availHeight;
        }
        var bodyWidth = window.innerWidth;
        if (bodyWidth == 0) {
            bodyWidth = screen.availWidth;
        }
        var dhstr = $("#navbar-main")[0].style("height");
        var navHeight = (dhstr.replace("px", ""));
        $("#digitContainer")[0].style("position", "absolute").style("width", "380px")
            .style("height", (bodyheight - navHeight).toString() + "px").style("left", "10px").style("flow-y", "auto");
        $("#templateHead")[0].style("position", "relative").style("width", (bodyWidth - 440).toString() + "px").style("left", "410px");
        $("#templateBody")[0].style("position", "relative").style("width", (bodyWidth - 440).toString() + "px").style("left", "410px");
        var p = getMudlogTime();
        p.then((data) => {
            var digitList = data.digites;
            self.initDigitItems(digitList);
            var container = data.container;
            self.initTemplateContainer(container);
            self.createTrack();
        });
    }
}
function getMudlogTime() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            $.getJSON('data/mudlogtime.json', function (error, data) {
                if (data) {
                    resolve(data);
                }
            });
        });
    });
}
//# sourceMappingURL=main.js.map
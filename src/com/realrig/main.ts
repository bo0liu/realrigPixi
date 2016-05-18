/**
 * Created by shino on 2016/5/14.
 */
"use strict";
/// <reference path="../../../typings/tsd.d.ts"/>

import {TemplateContainerVO} from "./vo/TemplateContainerVO";

class DrawPixi
{
    public templateContainerVO:TemplateContainerVO;
    public trackHeadMap:any = {};
    public trackBodyMap:any = {};

    constructor() {
        var self = this;
        var bodyheight:number = window.innerHeight;
        if (bodyheight == 0) {
            bodyheight = screen.availHeight;
        }
        var bodyWidth:number = window.innerWidth;
        if (bodyWidth == 0) {
            bodyWidth = screen.availWidth;
        }
        var dhstr:string = document.getElementById("navbar-main")[0].style("height");
        var navHeight:number = <number><any>(dhstr.replace("px", ""));
        document.getElementById("digitContainer")[0].style("position","absolute").style("width","380px")
            .style("height",(bodyheight-navHeight).toString() + "px").style("left","10px").style("flow-y","auto");
        document.getElementById("templateHead")[0].style("position","relative").style("width", (bodyWidth - 440).toString() + "px").style("left", "410px");
        document.getElementById("templateBody")[0].style("position","relative").style("width", (bodyWidth - 440).toString() + "px").style("left", "410px");

        var p:Promise<any> = self.getMudlogTime();
        p.then((data:any)=>{
            var digitList:any = data.digites;
            console.log(data);
            // self.initDigitItems(digitList);
            // var container:any = data.container;
            // self.initTemplateContainer(container);
            // self.createTrack();
        })
    }

    async getMudlogTime():Promise<any>
    {
        return new Promise<any>(resolve => {
            $.getJSON('data/mudlogtime.json', function (error, data) {
                if(data)
                {
                    resolve(data);
                }
                else
                {
                    console.log("1");
                }
            });
        });
    }
}
new DrawPixi();
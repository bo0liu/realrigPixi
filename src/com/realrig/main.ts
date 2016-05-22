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
        let self = this;
        let bodyheight:number = window.innerHeight;
        if (bodyheight == 0) {
            bodyheight = screen.availHeight;
        }
        let bodyWidth:number = window.innerWidth;
        if (bodyWidth == 0) {
            bodyWidth = screen.availWidth;
        }
        // let element:HTMLElement = $("#navbar-main")[0];
        let navHeight:number = $("#navbar-main").height();
        //var navHeight:number = <number><any>(dhstr.replace("px", ""));
        $("#digitContainer").css("position","absolute").width(380).height(bodyheight-navHeight).css("left","10px").css("flow-y","auto");
        $("#templateHead").css("position","relative").width(bodyWidth - 440).css("left", "410px");
        $("#templateBody").css("position","relative").width(bodyWidth - 440).css("left", "410px");

        self.initMudlogTime();
    }

    initMudlogTime()
    {
        // let mudlogData:any = await this.getMudlogTime();
        // if(mudlogData)
        // {
        //     console.log("md:" + mudlogData);
        // }
        let p:Promise<any> = this.getMudlogTime();

        p.then((data:any)=>{
            let digitList:any = data.digites;
            self.initDigitItems(digitList);
            let container:any = data.container;
            self.initTemplateContainer(container);
            self.createTrack();
        });
    }

    getMudlogTime()
    {
        return new Promise<any>((resolve,reject) => {
            $.getJSON('src/com/realrig/data/mudlogtime.json', function (data, status) {
                if(data!= null && status == "success")
                {
                    resolve(data);
                }
                else
                {
                    reject("111");
                }
            });
        });
    }
}
new DrawPixi();
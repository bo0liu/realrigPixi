/**
 * Created by shino on 2016/5/14.
 */
"use strict";
/// <reference path="../../../typings/tsd.d.ts"/>

import {TemplateContainerVO} from "./vo/TemplateContainerVO";
import {DigitPropertyVO} from "./vo/DigitPropertyVO";
import {DigitParameterDIV} from "./view/DigitParameterDIV";

class DrawPixi
{
    public digitParameterDives:DigitParameterDIV[];
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

    async initMudlogTime()
    {
        let mudlogData:any = await this.getMudlogTime();
        if(mudlogData)
        {
            console.log("md:" + mudlogData);
        }

        let digitList:any = mudlogData.digites;
        this.initDigitItems(digitList);
        let container:any = mudlogData.container;
        this.initTemplateContainer(container);
        this.createTrack();
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

    /**
     * 解析数字显示块
     * @param digites
     */
    public initDigitItems(digites:any):void {
        this.digitParameterDives = [];
        var i:number = 0;
        for (var index in digites) {
            var digit:any;
            digit = digites[index].digitalItem;
            var digitProperty:DigitPropertyVO = new DigitPropertyVO();
            digitProperty.lineName = digit.lineName;
            digitProperty.showName = digit.showName;
            digitProperty.formulaType = digit.formulaType;
            digitProperty.formulaA = digit.formulaA;
            digitProperty.formulaB = digit.formulaB;
            digitProperty.precision = digit.precision;
            var dv:DigitParameterDIV = new DigitParameterDIV(digitProperty, number(index));
            this.digitParameterDives.push(dv);
            i++;
        }
//            var id0:string = this.digitNumberDives[0].attr("id");
//            var dd:any = d3.select("#" + id0).datum();
    }
}
new DrawPixi();
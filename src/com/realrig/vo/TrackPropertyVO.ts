/**
 * Created by shino on 2016/5/14.
 */
/// <reference path="CurvePropertyVO.ts"/>
"use strict";

import * as UUID from "UUID";
import {CurvePropertyVO} from "./CurvePropertyVO";

export class TrackPropertyVO {
    //模板编号
    templateIndex:number;
    //当前的曲线头的高度
    headerHeight:number;
    allHeaderHeight:number;
    startX:number;
    endX:number;
    backGridColor:string;
    backGridBorderColor:string;
    backGridThick:number;
    backGridBorderThick:number;
    backGridWidth:number;//整个模板的宽度
    cellHeight:number;//每一个大格子的高度
    horizontalCount:number;//y轴上的线数
    verticalCount:number;//x轴上的线数
    isLogLine:boolean;
    endRange:number;
    startRange:number;
    //模板类型
    type:string;
    //模板状态
    templateTitle:string;
    uuid:string;
    thuid:string;//对应的head的uuid
    tbuid:string;//对应的body的uuid
    curves:CurvePropertyVO[];
    startScale:number;//开始刻度
    constructor() {
        this.curves = [];
        this.backGridColor = "#000000";
        this.backGridBorderColor = "#000000";
        this.backGridThick = 1;
        this.uuid = UUID.generate();
    }
}
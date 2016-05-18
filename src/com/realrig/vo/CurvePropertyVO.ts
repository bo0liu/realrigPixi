/**
 * Created by shino on 2016/5/14.
 */
"use strict";

import * as UUID from "UUID";

export class CurvePropertyVO {
    templateIndex:number;
    recordid:string;
    itemid:number;
    linename:string;
    //显示名称
    showname:string;
    //取值的时候父节点的名称（只对LWD有效）
    parentname:string;
    //曲线单位
    unit:string;
    //左边值
    leftvalue:number;
    //右边值
    rightvalue:number;
    //倍数用于调整对数曲线的显示
    multiple:number;
    //系数
    ratio:number;
    //线的颜色
    linecolor:string;
    //虚线颜色
    lineVitualColor:number;
    //线条粗细
    lineThick:number;
    //是否是对数曲线
    isLogLine:boolean;
    //是否是直线
    linetype:number;//0 Polyline 1 Square Line
    //字体大小
    labelFontSize:number;
    //字体
    labelFontFamily:string;
    //相对高度变量
    relativeDepth:string;
    //是否显示密度道
    drawDensity:boolean;
    //是否要曲线断开
    isIntercept:boolean;
    //曲线断开
    intercept:number;
    //截取左边数据
    isLeftWarp:boolean;
    //左边的值
    leftWarp:number;
    //截取左边数据
    isRightWarp:boolean;
    //左边的值
    rightWarp:number;
    //显示仪表盘
    showMeter:boolean;
    //转换类型
    formulaType:number;
    formulaA:number;
    formulaB:number;
    precision:number = 3;
    uuid:string;
    chuid:string;//对应head的显示对象的uuid
    buid:string;//对应画线部分的uuid
    constructor() {
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
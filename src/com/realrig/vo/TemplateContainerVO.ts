/**
 * Created by shino on 2016/5/14.
 */
"use strict";

import {TrackPropertyVO} from "./TrackPropertyVO"
export class TemplateContainerVO {
    /**
     * 默认容器的宽度
     */
    initContainerWidth:number;
    /**
     * 默认容器的高度
     */
    initContainerHeight:number;
    /**
     * 实际模板的宽度
     */
    templateWidth:number;
    /**
     * 实际模板的高度
     */
    templateHeight:number;
    /**
     * 模板中的有效宽度（去掉深度道和时间道）
     */
    actualTemplateWidth:number;
    /**
     * 每个单元格的高度
     */
    cellHeight:number;
    /**
     * 对应的深度或者时间长度
     */
    cellConvertHeight:number;

    yAxis:string;

    tracks:TrackPropertyVO[];

    constructor() {
        this.tracks = [];
        this.initContainerWidth = 380;
        this.initContainerHeight = 730;
        this.templateWidth = 730;
        this.templateHeight = 380;
        this.cellHeight = 180;
        this.cellConvertHeight = 50;
    }
}
/**
 * Created by shino on 2016/5/14.
 */
"use strict";

import * as UUID from "UUID";

export class DigitPropertyVO {
    showName:string;
    lineName:string;
    parentName:string;
    unit:string;
    formulaType:number;
    formulaA:number;
    formulaB:number;
    precision:number;
    uuid:string;

    constructor() {
        this.precision = 3;
        this.uuid = UUID.generate();
    }
}
"use strict";

import {DigitPropertyVO} from "../vo/DigitPropertyVO";

export class ModelLocator {
    private static _instance:ModelLocator = null;
    public digites:DigitPropertyVO[];

    constructor() {
        if (ModelLocator._instance) {
            throw "ModelLocator Error";
        }
        ModelLocator._instance = this;
        this.digites = new Array();
    }

    public static getInstance():ModelLocator {
        return ModelLocator._instance;
    }
}


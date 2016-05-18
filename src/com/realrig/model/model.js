"use strict";
class ModelLocator {
    constructor() {
        if (ModelLocator._instance) {
            throw "ModelLocator Error";
        }
        ModelLocator._instance = this;
        this.digites = new Array();
    }
    static getInstance() {
        return ModelLocator._instance;
    }
}
ModelLocator._instance = null;
exports.ModelLocator = ModelLocator;
//# sourceMappingURL=model.js.map
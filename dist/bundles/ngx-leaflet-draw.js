/*! @asymmetrik/ngx-leaflet-draw - 2.5.0 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@asymmetrik/ngx-leaflet'), require('leaflet'), require('leaflet-draw')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@asymmetrik/ngx-leaflet', 'leaflet', 'leaflet-draw'], factory) :
	(factory((global.ngxLeafletDraw = global.ngxLeafletDraw || {}),global.ng.core,global.ngxLeaflet,global.L));
}(this, (function (exports,_angular_core,_asymmetrik_ngxLeaflet,L) { 'use strict';

var LeafletDrawDirective = (function () {
    function LeafletDrawDirective(leafletDirective) {
        this.drawOptions = null;
        this.leafletDirective = new _asymmetrik_ngxLeaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletDrawDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        // Initialize the draw options (in case they weren't provided)
        this.drawOptions = this.initializeDrawOptions(this.drawOptions);
        // Create the control
        this.drawControl = new L.Control.Draw(this.drawOptions);
        // Pull out the feature group for convenience
        this.featureGroup = this.drawOptions.edit.featureGroup;
        // Add the control to the map
        this.leafletDirective.getMap().addControl(this.drawControl);
        // Register the main handler for events coming from the draw plugin
        this.leafletDirective.getMap().on(L.Draw.Event.CREATED, function (e) {
            var layer = e.layer;
            _this.featureGroup.addLayer(layer);
        });
    };
    LeafletDrawDirective.prototype.ngOnDestroy = function () {
        this.leafletDirective.getMap().removeControl(this.drawControl);
    };
    LeafletDrawDirective.prototype.ngOnChanges = function (changes) {
        // No changes being handled currently
    };
    LeafletDrawDirective.prototype.initializeDrawOptions = function (options) {
        // Ensure the options have a featureGroup
        if (null == options) {
            options = {
                edit: null
            };
        }
        if (null == options.edit) {
            options.edit = {
                featureGroup: null
            };
        }
        if (null == options.edit.featureGroup) {
            // No feature group was provided, so we're going to add it ourselves
            options.edit.featureGroup = L.featureGroup();
            this.leafletDirective.getMap().addLayer(options.edit.featureGroup);
        }
        return options;
    };
    return LeafletDrawDirective;
}());
LeafletDrawDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[leafletDraw]'
            },] },
];
/** @nocollapse */
LeafletDrawDirective.ctorParameters = function () { return [
    { type: _asymmetrik_ngxLeaflet.LeafletDirective, },
]; };
LeafletDrawDirective.propDecorators = {
    'drawOptions': [{ type: _angular_core.Input, args: ['leafletDrawOptions',] },],
};

var LeafletDrawModule = (function () {
    function LeafletDrawModule() {
    }
    LeafletDrawModule.forRoot = function () {
        return { ngModule: LeafletDrawModule, providers: [] };
    };
    return LeafletDrawModule;
}());
LeafletDrawModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _asymmetrik_ngxLeaflet.LeafletModule
                ],
                exports: [
                    LeafletDrawDirective
                ],
                declarations: [
                    LeafletDrawDirective
                ]
            },] },
];
/** @nocollapse */
LeafletDrawModule.ctorParameters = function () { return []; };

exports.LeafletDrawModule = LeafletDrawModule;
exports.LeafletDrawDirective = LeafletDrawDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-leaflet-draw.js.map

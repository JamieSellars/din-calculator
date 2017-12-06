webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/age/age.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Skier Age</h4>\n<mat-radio-group fxLayout=\"column\" (change)=\"onUpdate($event)\">\n  <mat-radio-button *ngFor=\"let age of ages\" [value]=\"age\" required>\n    {{ age.description }}\n  </mat-radio-button>\n</mat-radio-group>\n  "

/***/ }),

/***/ "../../../../../src/app/age/age.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/age/age.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgeComponent = (function () {
    function AgeComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.ages = [
            { description: 'Under 16 Years', value: 'Under 16 Years', index: 0 },
            { description: '16 - 50 Years', value: '16 - 50 Years', index: 1 },
            { description: 'Over 50 Years', value: 'Over 50 Years', index: 2 }
        ];
    }
    AgeComponent.prototype.ngOnInit = function () {
    };
    AgeComponent.prototype.onUpdate = function ($event) {
        this.selected.emit($event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], AgeComponent.prototype, "selected", void 0);
    AgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-age',
            template: __webpack_require__("../../../../../src/app/age/age.component.html"),
            styles: [__webpack_require__("../../../../../src/app/age/age.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgeComponent);
    return AgeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n <div class=\"title\">DIN Calculator    \n </div>\n</mat-toolbar>\n\n<div class=\"container\">\n\n    <p>\n        <app-skill (selected)=\"onSkillUpdate($event)\"></app-skill>\n    </p>\n\n    <p>\n        <app-age (selected)=\"onAgeUpdate($event)\"></app-age>\n    </p>\n\n    <p>\n        <app-weight (selected)=\"onWeightUpdate($event)\"></app-weight>\n    </p>\n\n    <p>\n        <app-height (selected)=\"onHeightUpdate($event)\"></app-height>\n    </p>\n\n    <p>\n        <app-solelength (selected)=\"onSoleLengthUpdate($event)\"></app-solelength>\n    </p>\n    \n    <p>\n        <button class=\"generate-button\" color=\"primary\" mat-raised-button (click)=\"calculateDINSetting()\">Calculate</button> \n    </p>\n\n</div>\n\n<app-result #results></app-result>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  text-align: center;\n  width: 100%; }\n\n.container {\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dinSetting__ = __webpack_require__("../../../../../src/app/models/dinSetting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = (function () {
    function AppComponent(document) {
        this.document = document;
        this.din = new __WEBPACK_IMPORTED_MODULE_1__models_dinSetting__["a" /* DINSetting */]();
    }
    AppComponent.prototype.onSkillUpdate = function (skill) {
        this.din.skill = skill;
    };
    AppComponent.prototype.onAgeUpdate = function (age) {
        this.din.age = age;
    };
    AppComponent.prototype.onWeightUpdate = function (weight) {
        this.din.weight = weight;
    };
    AppComponent.prototype.onHeightUpdate = function (height) {
        this.din.height = height;
    };
    AppComponent.prototype.onSoleLengthUpdate = function (soleLength) {
        this.din.soleLength = soleLength;
    };
    AppComponent.prototype.calculateDINSetting = function () {
        this.results.calculateDIN(this.din);
    };
    AppComponent.prototype.toggleFullscreen = function () {
        if (!document.fullscreenElement)
            document.fullscreenElement.requestFullscreen();
        if (document.fullscreenElement)
            document.exitFullscreen();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('results'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__result_result_component__["a" /* ResultComponent */])
    ], AppComponent.prototype, "results", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_design_module__ = __webpack_require__("../../../../../src/app/material/material-design.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skill_skill_component__ = __webpack_require__("../../../../../src/app/skill/skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__age_age_component__ = __webpack_require__("../../../../../src/app/age/age.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weight_weight_component__ = __webpack_require__("../../../../../src/app/weight/weight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__height_height_component__ = __webpack_require__("../../../../../src/app/height/height.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__solelength_solelength_component__ = __webpack_require__("../../../../../src/app/solelength/solelength.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__result_dialog_result_dialog_component__ = __webpack_require__("../../../../../src/app/result-dialog/result-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_din_calculator_service__ = __webpack_require__("../../../../../src/app/services/din-calculator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__skill_skill_component__["a" /* SkillComponent */],
                __WEBPACK_IMPORTED_MODULE_5__age_age_component__["a" /* AgeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__weight_weight_component__["a" /* WeightComponent */],
                __WEBPACK_IMPORTED_MODULE_7__height_height_component__["a" /* HeightComponent */],
                __WEBPACK_IMPORTED_MODULE_8__solelength_solelength_component__["a" /* SolelengthComponent */],
                __WEBPACK_IMPORTED_MODULE_11__result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_13__result_dialog_result_dialog_component__["a" /* ResultDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_material_design_module__["a" /* MaterialDesignModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__result_dialog_result_dialog_component__["a" /* ResultDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_din_calculator_service__["a" /* DinCalculatorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/height/height.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field fxFlex=\"100\">\n    <mat-select placeholder=\"Skier Height\" (change)=\"onUpdate($event)\">\n\n\n    <mat-option *ngFor=\"let height of heights\" [value]=\"height\">\n      <strong fxFlex>{{ height.metric }}cm</strong>&nbsp;\n      <small fxFlex>{{ height.imperial }}</small>\n    </mat-option>\n\n  </mat-select>\n</mat-form-field>"

/***/ }),

/***/ "../../../../../src/app/height/height.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-option-text {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/height/height.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeightComponent = (function () {
    function HeightComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.heights = [
            { metric: '< 148', imperial: '< 4\'10"', skierCode: 'H', index: 7 },
            { metric: '149 - 157', imperial: '4\'11" - 5\'1"', skierCode: 'I', index: 8 },
            { metric: '158 - 166', imperial: '5\'2" - 5\'5"', skierCode: 'J', index: 9 },
            { metric: '167 - 178', imperial: '5\'6" - 5\'10"', skierCode: 'K', index: 10 },
            { metric: '179 - 194', imperial: '5\'11" - 6\'4"', skierCode: 'L', index: 11 },
            { metric: '> 195', imperial: '> 6\'5"', skierCode: 'M', index: 12 },
        ];
    }
    HeightComponent.prototype.ngOnInit = function () {
    };
    HeightComponent.prototype.onUpdate = function (event) {
        this.selected.emit(event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], HeightComponent.prototype, "selected", void 0);
    HeightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-height',
            template: __webpack_require__("../../../../../src/app/height/height.component.html"),
            styles: [__webpack_require__("../../../../../src/app/height/height.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeightComponent);
    return HeightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material-design.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */],
];
var MaterialDesignModule = (function () {
    function MaterialDesignModule() {
    }
    MaterialDesignModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                MATERIAL_MODULES
            ],
            exports: [
                MATERIAL_MODULES
            ],
            declarations: []
        })
    ], MaterialDesignModule);
    return MaterialDesignModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/dinSetting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DINSetting; });
var DINSetting = (function () {
    function DINSetting() {
    }
    return DINSetting;
}());



/***/ }),

/***/ "../../../../../src/app/result-dialog/result-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>DIN Setting</h1>\n\n<span class=\"din-result\">\n  {{ data.result }}\n</span>\n\n<span *ngIf=\"data.result == null\">\n  Unable to determine DIN value. Please check the allocated settings.\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/result-dialog/result-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".din-result {\n  display: block;\n  width: 100%;\n  font-size: 6em;\n  text-align: center; }\n\nh1 {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result-dialog/result-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ResultDialogComponent = (function () {
    function ResultDialogComponent(_matDialogRef, data) {
        this._matDialogRef = _matDialogRef;
        this.data = data;
    }
    ResultDialogComponent.prototype.ngOnInit = function () {
    };
    ResultDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-result-dialog',
            template: __webpack_require__("../../../../../src/app/result-dialog/result-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result-dialog/result-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], ResultDialogComponent);
    return ResultDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/result/result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_din_calculator_service__ = __webpack_require__("../../../../../src/app/services/din-calculator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_dialog_result_dialog_component__ = __webpack_require__("../../../../../src/app/result-dialog/result-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = (function () {
    function ResultComponent(_dinCalculatorService, _matDialog) {
        this._dinCalculatorService = _dinCalculatorService;
        this._matDialog = _matDialog;
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent.prototype.calculateDIN = function (dinSetting) {
        // Skier code
        var skierCode = this._dinCalculatorService.getSkierCodeByHeight(dinSetting);
        skierCode = this._dinCalculatorService.getSkierCodeByAgeAndSkierType(dinSetting, skierCode);
        this.result = this._dinCalculatorService.getDINBySkierCodeAndSoleLength(dinSetting, skierCode);
        this.displayResult();
    };
    ResultComponent.prototype.displayResult = function () {
        this._matDialog.open(__WEBPACK_IMPORTED_MODULE_3__result_dialog_result_dialog_component__["a" /* ResultDialogComponent */], {
            data: {
                result: this.result
            }
        });
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__("../../../../../src/app/result/result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_din_calculator_service__["a" /* DinCalculatorService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/din-calculator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DinCalculatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DinCalculatorService = (function () {
    function DinCalculatorService() {
        this._dins = new Array();
        this._skierCodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '0'];
        this.setDINs();
    }
    // Height or Weight determins whether the Skier code should be demoted or promoted.
    // If weight has a lower index than height, use the weight
    // If height has a lower index than weight, use the height
    DinCalculatorService.prototype.getSkierCodeByHeight = function (dinSetting) {
        var heightSkierCode = dinSetting.height.index;
        var weightSkierCode = dinSetting.weight.index;
        if (heightSkierCode > weightSkierCode)
            return dinSetting.weight.skierCode;
        if (weightSkierCode > heightSkierCode)
            return dinSetting.height.skierCode;
        // they're equal return either
        return dinSetting.height.skierCode;
    };
    DinCalculatorService.prototype.getSkierCodeByAgeAndSkierType = function (dinSetting, skierCode) {
        var skierCodeIndex = this._skierCodes.indexOf(skierCode);
        // if skier type 1 (cautious) remain (DO NOTHING)
        // if skier type 2 (moderate) move index up one skier code
        if (dinSetting.skill.index == 1)
            skierCodeIndex = skierCodeIndex + 1;
        // if skier type 3 (aggresive) move index up two skier codes
        if (dinSetting.skill.index == 2)
            skierCodeIndex = skierCodeIndex + 2;
        // If age > 50 years move up demote skier code
        if (dinSetting.age.index == 2)
            skierCodeIndex = skierCodeIndex - 1;
        return skierCode = this._skierCodes[skierCodeIndex];
    };
    DinCalculatorService.prototype.getDINBySkierCodeAndSoleLength = function (dinSetting, skierCode) {
        var skierCodeIndex = this._skierCodes.indexOf(skierCode);
        return this._dins[skierCodeIndex][dinSetting.soleLength.index];
    };
    DinCalculatorService.prototype.setDINs = function () {
        // A
        this._dins.push([0.75, 0.75, 0.75, null, null, null, null, null]);
        // B
        this._dins.push([1, 0.75, 0.75, 0.75, null, null, null, null]);
        // C 
        this._dins.push([1.5, 1.25, 1.25, 1, null, null, null, null]);
        // D
        this._dins.push([2, 1.75, 1.5, 1.5, 1.25, null, null, null]);
        // E
        this._dins.push([2.5, 2.25, 2, 1.75, 1.5, 1.25, null, null]);
        // F 
        this._dins.push([3, 2.75, 2.5, 2.25, 2, 1.75, 1.75, null]);
        // G
        this._dins.push([null, 3.5, 3, 2.75, 2.5, 2.25, 2, null]);
        // H 
        this._dins.push([null, null, 3.5, 3, 3, 2.75, 2.5, null]);
        // I
        this._dins.push([null, null, 4.5, 4, 3.5, 3.5, 3, null]);
        // J
        this._dins.push([null, null, 5.5, 5, 4.5, 4, 3.5, 3]);
        // K
        this._dins.push([null, null, 6.5, 6, 5.5, 5, 4.5, 4]);
        // L 
        this._dins.push([null, null, 7.5, 7, 6.5, 6, 5.5, 5]);
        // M
        this._dins.push([null, null, null, 8.5, 8, 7, 6.5, 6]);
        // N 
        this._dins.push([null, null, null, 10, 9.5, 8.5, 8, 7.5]);
        // 0
        this._dins.push([null, null, null, 11.5, 11, 10, 9.5, 9]);
        // P
        this._dins.push([null, null, null, null, null, 12, 11.5, 10.5]);
    };
    DinCalculatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DinCalculatorService);
    return DinCalculatorService;
}());



/***/ }),

/***/ "../../../../../src/app/skill/skill.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Skier Type</h4>\n<mat-radio-group fxLayout=\"column\" (change)=\"onUpdate($event)\" required>\n  <mat-radio-button *ngFor=\"let skill of skills\" [value]=\"skill\">\n    {{ skill.description }}\n  </mat-radio-button>\n</mat-radio-group>\n\n"

/***/ }),

/***/ "../../../../../src/app/skill/skill.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skill/skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = (function () {
    function SkillComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.skills = [
            { description: 'Cautious', value: 'cautious', index: 0 },
            { description: 'Average / Moderate', value: 'moderate', index: 1 },
            { description: 'Aggressive', value: 'aggressive', index: 2 }
        ];
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent.prototype.onUpdate = function ($event) {
        this.selected.emit($event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SkillComponent.prototype, "selected", void 0);
    SkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-skill',
            template: __webpack_require__("../../../../../src/app/skill/skill.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skill/skill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solelength/solelength.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field fxFlex=\"100\">\n    <mat-select placeholder=\"Sole Length\" (change)=\"onUpdate($event)\">\n  \n      <mat-option *ngFor=\"let soleLength of soleLengths\" [value]=\"soleLength\">\n        {{ soleLength.metric }} mm\n      </mat-option>\n  \n    </mat-select>\n  </mat-form-field>"

/***/ }),

/***/ "../../../../../src/app/solelength/solelength.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solelength/solelength.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolelengthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SolelengthComponent = (function () {
    function SolelengthComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.soleLengths = [
            { metric: 'Less or equal to 230', index: 0, value: '< 230' },
            { metric: '231 - 250', index: 1, value: '231 - 250' },
            { metric: '251 - 270', index: 2, value: '251 - 270' },
            { metric: '271 - 290', index: 3, value: '271 - 290' },
            { metric: '291 - 310', index: 4, value: '291 - 310' },
            { metric: '311 - 330', index: 5, value: '311 - 330' },
            { metric: '311 - 330', index: 6, value: '311 - 330' },
            { metric: '331 - 350', index: 7, value: '331 - 350' },
            { metric: 'Greater than 351', index: 8, value: '> 351' }
        ];
    }
    SolelengthComponent.prototype.ngOnInit = function () {
    };
    SolelengthComponent.prototype.onUpdate = function (event) {
        this.selected.emit(event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SolelengthComponent.prototype, "selected", void 0);
    SolelengthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-solelength',
            template: __webpack_require__("../../../../../src/app/solelength/solelength.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solelength/solelength.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SolelengthComponent);
    return SolelengthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weight/weight.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field fxFlex=\"100\">\n  <mat-select placeholder=\"Skier Weight\" (change)=\"onUpdate($event)\">\n\n    <mat-option *ngFor=\"let weight of weights\" [value]=\"weight\">\n        <strong fxFlex>{{ weight.metric }} kg</strong>&nbsp;\n        <small fxFlex>{{ weight.imperial }} lb</small>\n    </mat-option>\n\n  </mat-select>\n</mat-form-field>"

/***/ }),

/***/ "../../../../../src/app/weight/weight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weight/weight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeightComponent = (function () {
    function WeightComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.weights = [
            { metric: '10 - 13', imperial: '22 - 29', skierCode: 'A', index: 0 },
            { metric: '14 - 17', imperial: '30 - 38', skierCode: 'B', index: 1 },
            { metric: '18 - 21', imperial: '39 - 47', skierCode: 'C', index: 2 },
            { metric: '22 - 25', imperial: '48 - 56', skierCode: 'D', index: 3 },
            { metric: '26 - 30', imperial: '57 - 66', skierCode: 'E', index: 3 },
            { metric: '31 - 35', imperial: '67 - 78', skierCode: 'F', index: 4 },
            { metric: '36 - 41', imperial: '79 - 91', skierCode: 'G', index: 5 },
            { metric: '42 - 48', imperial: '92 - 107', skierCode: 'H', index: 6 },
            { metric: '49 - 57', imperial: '108 - 125', skierCode: 'I', index: 7 },
            { metric: '58 - 66', imperial: '126 - 147', skierCode: 'J', index: 8 },
            { metric: '67 - 78', imperial: '148 - 174', skierCode: 'K', index: 9 },
            { metric: '79 - 94', imperial: '175 - 209', skierCode: 'L', index: 10 },
            { metric: '95+', imperial: '210+', skierCode: 'M', index: 11 },
        ];
    }
    WeightComponent.prototype.ngOnInit = function () {
    };
    WeightComponent.prototype.onUpdate = function (event) {
        this.selected.emit(event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], WeightComponent.prototype, "selected", void 0);
    WeightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-weight',
            template: __webpack_require__("../../../../../src/app/weight/weight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weight/weight.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WeightComponent);
    return WeightComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
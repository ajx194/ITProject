(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ajx/Documents/project/src/main.ts */"zUnb");


/***/ }),

/***/ "639M":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/quote/quote.component.ts ***!
  \**************************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ "RktG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function QuoteComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "firstName is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuoteComponent_div_11_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f == null ? null : ctx_r0.f.firstName == null ? null : ctx_r0.f.firstName.errors.required);
} }
function QuoteComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "lastName is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuoteComponent_div_17_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f == null ? null : ctx_r1.f.lastName == null ? null : ctx_r1.f.lastName.errors.required);
} }
function QuoteComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is not formatted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuoteComponent_div_22_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuoteComponent_div_22_div_2_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : ctx_r2.f.email == null ? null : ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : ctx_r2.f.email == null ? null : ctx_r2.f.email.errors.email);
} }
function QuoteComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuoteComponent_div_27_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.required);
} }
function QuoteComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var size_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", size_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", size_r10, " ");
} }
var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(backend) {
        this.backend = backend;
        this.removals = ['Local resident removal', 'Inter-city removal', 'Inter-state removal'];
        this.sizes = ['Few things', 'Apartment', 'House', 'Business', 'Warehouse', 'Large equipment'];
        this.quoteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('demo@example.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('ten digits', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'removal': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Local resident removal', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'suburb': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'post': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'size': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('House', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'destAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'destSuburb': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'destPost': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'destCity': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    ;
    QuoteComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(QuoteComponent.prototype, "f", {
        get: function () {
            return this.quoteForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    QuoteComponent.prototype.submit = function () {
        if (this.quoteForm.status === 'VALID') {
            console.log(this.quoteForm.value);
            var response = this.backend.postQuoteSubmission(this.quoteForm.value);
            console.log(response);
        }
    };
    QuoteComponent.prototype.setValue = function () {
        this.quoteForm.setValue({ firstName: 'Hardik', lastName: 'Savani', email: 'itsolutionstuff@gmail.com', phone: '9191919191', removal: 'Local resident removal', address: '43 bds street', suburb: 'kofiled', post: '1212', date: '2019-02-02', size: 'House', destAddress: '1212 sds', destSuburb: 'asass', destPost: '212', destCity: 'sydney' });
    };
    // resetValue(){
    //     this.quoteForm.reset({firstName: '', lastName: '', email: '', phone: '', removal: '', address: '', suburb: '', post: '', date:'', size: '', destAddress: '', destSuburb: '', destPost: '', destDate: ''});
    // }
    QuoteComponent.prototype.onCost = function (event) {
        // this.costHour= this.initialPrice + this.hourRate*(this.noHour);
        this.costHour = event.target.value * 110 + 100;
    };
    QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
    QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], decls: 136, vars: 7, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xs-12", "col-sm-10", "col-md-8", "col-sm-offset-1", "col-md-offset-2"], [1, "column", "col-md-6", 2, "float", "left"], [1, "form-group"], ["for", "firstName", 2, "color", "rgb(33, 16, 143)"], ["formControlName", "firstName", "type", "text", "id", "firstName", "required", "required", "data-error", "First Name is required.", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "lastName", 2, "color", "darkslateblue"], ["formControlName", "lastName", "type", "text", "id", "lastName", "required", "required", "data-error", "Last Name is required.", 1, "form-control"], ["for", "email", 2, "color", "darkslateblue"], ["formControlName", "email", "type", "email", "id", "email", "required", "required", "data-error", "email is required.", 1, "form-control"], ["for", "phone"], ["formControlName", "phone", "type", "tel", "id", "phone", "name", "phone", 1, "form-control"], [1, "form-group", 2, "float", "left"], [2, "font-size", "22px"], [2, "font-size", "20px"], ["type", "radio", "name", "test", "value", "value1"], ["type", "radio", "name", "test", "value", "value2"], ["type", "radio", "name", "test", "value", "value3"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "address"], ["formControlName", "address", "type", "text", "id", "address", "required", "", 1, "form-control"], ["for", "suburb"], ["formControlName", "suburb", "type", "text", "id", "Suburb", "required", "", 1, "form-control"], ["for", "post"], ["formControlName", "post", "type", "text", "id", "Post", "required", "", 1, "form-control"], ["for", "date"], ["formControlName", "date", "type", "date", "id", "date", "required", "", 1, "form-control"], [2, "font-size", "25px"], ["for", "destAddress"], ["formControlName", "destAddress", "type", "text", "id", "destAddress", "required", "", 1, "form-control"], ["for", "destSuburb"], ["formControlName", "destSuburb", "type", "text", "id", "destSuburb", "required", "", 1, "form-control"], ["for", "destPost"], ["formControlName", "destSuburb", "type", "text", "id", "destPost", "required", "", 1, "form-control"], ["for", "destCity"], ["formControlName", "destCity", "type", "text", "id", "destCity", "required", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-info", 2, "float", "centre", "size", "30px", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 2, "float", "centre", "size", "30px"], ["type", "reset", 1, "btn", "btn-danger", 2, "float", "right"], [2, "border", "3px solid black", "margin-left", "25px", "padding-left", "16px"], [1, "display"], ["type", "number", 3, "keyup"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Online Quote:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function QuoteComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, QuoteComponent_div_11_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, QuoteComponent_div_17_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, QuoteComponent_div_22_Template, 3, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Phone no");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, QuoteComponent_div_27_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " What is the nature of your enquiry? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Local resident removal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Inter-city removal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Inter-state removal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "What is the size of the move?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Please select the option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, QuoteComponent_option_51_Template, 2, 2, "option", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Origin:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Street Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Suburb");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Post Code");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Estimate Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h2", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Destination:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Street Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Suburb");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Post Code");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "City/State");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuoteComponent_Template_button_click_100_listener() { return ctx.setValue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Set Default Value");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Reset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Quick Quote Calculator:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Please enter the number of hours required to do the job: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "input", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function QuoteComponent_Template_input_keyup_122_listener($event) { return ctx.onCost($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "br");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.quoteForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.firstName == null ? null : ctx.f.firstName.touched) && (ctx.f == null ? null : ctx.f.firstName == null ? null : ctx.f.firstName.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.lastName == null ? null : ctx.f.lastName.touched) && (ctx.f == null ? null : ctx.f.lastName == null ? null : ctx.f.lastName.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.touched) && (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.phone == null ? null : ctx.f.phone.touched) && (ctx.f == null ? null : ctx.f.phone == null ? null : ctx.f.phone.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sizes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Estimated cost : ", ctx.costHour, "");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: darkblue;\n  font-size: 40px;\n  font-style: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.radio[_ngcontent-%COMP%] {\n  size: 150%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #1e3480;\n  color: white;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.display[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1b3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoicXVvdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgY29sb3I6ZGFya2JsdWU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLmNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxubGFiZWx7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnJhZGlve1xuICBzaXplIDogMTUwJVxufVxuXG4vLyBidXR0b24ge2ZvbnQtc2l6ZTogMjZweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCA0OSwgMTc5KTtjb2xvcjp3aGl0ZX1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTM0ODA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxucHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZGlzcGxheXtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4iXX0= */"] });
    return QuoteComponent;
}());



/***/ }),

/***/ "6eW9":
/*!**************************************************!*\
  !*** ./src/app/theme/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-config */ "K7hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/scroll-spy/scroll-spy.service */ "QpnW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_sections_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/sections/auth.service */ "HkD1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "Hicy");










function LayoutComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clickOutside", function LayoutComponent_header_0_Template_header_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openClass = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.openClass = ctx_r5.openClass === "open" ? "" : "open"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r0.openClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.mobileHeaderClass);
} }
function LayoutComponent_header_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 26);
} }
function LayoutComponent_header_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_13_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function LayoutComponent_header_1_li_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "active": a0 }; };
function LayoutComponent_header_1_li_13_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.scrollTo("user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_header_1_li_13_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_13_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r8.currentSection === "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r8.currentSection === "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function LayoutComponent_header_1_li_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_14_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.scrollTo("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_header_1_li_14_i_2_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_14_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r9.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r9.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_15_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 32);
} }
function LayoutComponent_header_1_li_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_15_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_15_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.scrollTo("services"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_header_1_li_15_i_2_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_15_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r10.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r10.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
} }
function LayoutComponent_header_1_li_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_16_Template(rf, ctx) { if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_16_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.scrollTo("gallery"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_header_1_li_16_i_2_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_16_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r11.currentSection === "gallery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r11.currentSection === "gallery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_17_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_17_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.scrollTo("quote"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_17_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r12.currentSection === "quote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r12.currentSection === "quote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_18_Template(rf, ctx) { if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_18_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r38.scrollTo("testimonials"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_18_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r13.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r13.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enquiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_19_Template(rf, ctx) { if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_19_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r41.scrollTo("enquiry"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_19_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r14.currentSection === "enquiry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r14.currentSection === "enquiry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_20_Template(rf, ctx) { if (rf & 1) {
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_20_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r44.scrollTo("quote-requests"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_20_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r15.currentSection === "quote-requests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r15.currentSection === "quote-requests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_21_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_21_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_21_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r47.scrollTo("user-details"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_21_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r16.currentSection === "user-details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r16.currentSection === "user-details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_li_22_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_1_li_22_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_li_22_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r50.scrollTo("contact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_1_li_22_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r17.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r17.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function LayoutComponent_header_1_Template_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nav", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r54.collapsedCardToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_1_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r55.scrollTo("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LayoutComponent_header_1_i_11_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LayoutComponent_header_1_span_12_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LayoutComponent_header_1_li_13_Template, 4, 8, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LayoutComponent_header_1_li_14_Template, 4, 8, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LayoutComponent_header_1_li_15_Template, 4, 8, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LayoutComponent_header_1_li_16_Template, 4, 8, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LayoutComponent_header_1_li_17_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LayoutComponent_header_1_li_18_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LayoutComponent_header_1_li_19_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LayoutComponent_header_1_li_20_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, LayoutComponent_header_1_li_21_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LayoutComponent_header_1_li_22_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.horizontalNavClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@collapsedCard", ctx_r1.collapsedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx_r1.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ctx_r1.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAuthenticated && !ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin);
} }
function LayoutComponent_header_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_10_Template(rf, ctx) { if (rf & 1) {
    var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69); var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r68.scrollTo("user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_10_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r57.currentSection === "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r57.currentSection === "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r57.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_11_Template(rf, ctx) { if (rf & 1) {
    var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r72); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r71.scrollTo("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_11_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r58.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r58.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r58.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_12_Template(rf, ctx) { if (rf & 1) {
    var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_12_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r75); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r74.scrollTo("services"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_12_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r59.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r59.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r59.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_13_Template(rf, ctx) { if (rf & 1) {
    var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r77.scrollTo("gallery"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_13_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r60.currentSection === "gallery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r60.currentSection === "gallery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_14_Template(rf, ctx) { if (rf & 1) {
    var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r81); var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r80.scrollTo("quote"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_14_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r61.currentSection === "quote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r61.currentSection === "quote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_15_Template(rf, ctx) { if (rf & 1) {
    var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_15_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84); var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r83.scrollTo("testimonials"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_15_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r62.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r62.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r62.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enquiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_16_Template(rf, ctx) { if (rf & 1) {
    var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_16_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r87); var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r86.scrollTo("enquiry"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_16_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r63.currentSection === "enquiry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r63.currentSection === "enquiry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r63.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_17_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_17_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r89.scrollTo("quote-requests"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_17_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r64.currentSection === "quote-requests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r64.currentSection === "quote-requests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r64.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_18_Template(rf, ctx) { if (rf & 1) {
    var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_18_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93); var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r92.scrollTo("user-details"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_18_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r65.currentSection === "user-details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r65.currentSection === "user-details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r65.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_li_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_header_2_li_19_Template(rf, ctx) { if (rf & 1) {
    var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_li_19_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r96); var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r95.scrollTo("contact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_header_2_li_19_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r66.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r66.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r66.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_Template(rf, ctx) { if (rf & 1) {
    var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_header_2_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r98); var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r97.scrollTo("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LayoutComponent_header_2_span_9_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LayoutComponent_header_2_li_10_Template, 4, 7, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LayoutComponent_header_2_li_11_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LayoutComponent_header_2_li_12_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LayoutComponent_header_2_li_13_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LayoutComponent_header_2_li_14_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LayoutComponent_header_2_li_15_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LayoutComponent_header_2_li_16_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LayoutComponent_header_2_li_17_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LayoutComponent_header_2_li_18_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LayoutComponent_header_2_li_19_Template, 4, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u00A9 Singh Movers And Packers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u00A9 Developed by Team 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("d-flex align-items-start flex-column ", ctx_r2.openClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx_r2.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ctx_r2.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.auth.isAuthenticated && !ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.auth.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.auth.isAdmin);
} }
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(scrollSpy, location, auth) {
        this.scrollSpy = scrollSpy;
        this.location = location;
        this.auth = auth;
        this.openClass = '';
        this.contentClass = 'content';
        this.mobileHeaderClass = 'mobile-header-1';
        this.desktopHeaderClass = 'desktop-header-1';
        this.horizontalNavClass = 'navbar-dark';
        this.desktopLogo = 'assets/images/landing/singh-packers-logo.png';
        this.collapsedCard = 'collapsed';
        this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].config;
        this.windowWidth = window.innerWidth;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollSpy.count.subscribe(function (c) {
            _this.currentSection = c;
        });
        document.querySelector('body').classList.add(this.themeConfig.themeType);
        switch (this.themeConfig.theme) {
            case 'vertical':
                this.mobileHeaderClass = 'mobile-header-1';
                this.desktopHeaderClass = 'desktop-header-1';
                switch (this.themeConfig.themeType) {
                    case 'light':
                        this.desktopLogo = 'assets/images/singh-packers-logo.png';
                        break;
                    default:
                        this.desktopLogo = 'aassets/images/singh-packers-logo.png';
                }
                break;
            case 'collapsed':
                this.mobileHeaderClass = 'mobile-header-2';
                this.desktopHeaderClass = 'desktop-header-2';
                this.contentClass = 'content-2';
                switch (this.themeConfig.themeType) {
                    case 'light':
                        this.desktopLogo = 'assets/images/singh-packers-logo.png';
                        break;
                    default:
                        this.desktopLogo = 'assets/images/singh-packers-logo.png';
                }
                break;
            case 'horizontal':
                this.desktopHeaderClass = 'desktop-header-3 fixed-top';
                this.contentClass = 'content-3';
                switch (this.themeConfig.themeType) {
                    case 'light':
                        this.horizontalNavClass = 'navbar-light';
                        this.desktopLogo = 'assets/images/singh-packers-logo.png';
                        break;
                    default:
                        this.desktopLogo = 'assets/images/singh-packers-logo.png';
                }
                break;
        }
        this.mobileHeaderClass = this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
        this.desktopHeaderClass = this.desktopHeaderClass + ' ' + this.themeConfig.themeType;
        if (this.windowWidth > 991) {
            this.collapsedCard = 'false';
        }
    };
    LayoutComponent.prototype.onResize = function (e) {
        if (this.windowWidth > 991) {
            this.collapsedCard = 'false';
        }
        else {
            this.collapsedCard = 'collapsed';
        }
    };
    LayoutComponent.prototype.scrollTo = function (section) {
        this.currentSection = section;
        var sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };
    LayoutComponent.prototype.collapsedCardToggle = function () {
        this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    };
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSpyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_components_sections_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDropdownConfig"]])], decls: 7, vars: 7, consts: [[3, "class", "ngClass", "clickOutside", 4, "ngIf"], [3, "ngClass", "resize", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["href", "javascript:", "id", "return-to-top", 3, "click"], [1, "fas", "fa-arrow-up"], [3, "ngClass", "clickOutside"], [1, "container"], [1, "menu-icon", "d-inline-flex", "mr-4"], [3, "click"], [1, "site-logo"], ["routerLink", "/"], [3, "ngClass", "resize"], [1, "navbar", "navbar-expand-lg", 3, "ngClass"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/images/landing/singh-packers-logo.png", "alt", "singh"], ["aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarNavDropdown", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto", "scrollspy"], [1, "nav-item", 3, "ngClass", "click"], ["href", "javascript:", 1, "nav-link", 3, "ngClass"], ["class", "icon-home", 4, "ngIf"], [4, "ngIf"], ["class", "nav-item", 3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [1, "icon-home"], ["class", "icon-user", 4, "ngIf"], [1, "icon-user"], ["class", "icon-user-following", 4, "ngIf"], [1, "icon-user-following"], ["class", "icon-briefcase", 4, "ngIf"], [1, "icon-briefcase"], ["class", "icon-graduation", 4, "ngIf"], [1, "icon-graduation"], [3, "ngClass", "click"], [1, "icon-credit-card"], [1, "icon-user-follow"], [1, "icon-book-open"], [1, "icon-note"], [1, "icon-people"], [1, "icon-bubbles"], [1, "vertical-menu", "scrollspy"], [1, "footer"], [1, "copyright"], [1, "icon-picture"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LayoutComponent_header_0_Template, 7, 4, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LayoutComponent_header_1_Template, 23, 21, "header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_header_2_Template, 26, 21, "header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "main", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_5_listener() { return ctx.scrollTo("home"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme !== "horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme === "horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme !== "horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.openClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.contentClass);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbNavbar"]], styles: ["li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuc3BhbntcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuIl19 */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapsedCard', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        overflow: 'hidden',
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                    ])
                ])
            ] } });
    return LayoutComponent;
}());



/***/ }),

/***/ "AaF/":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/ui-modal/ui-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: UiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModalComponent", function() { return UiModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function UiModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UiModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];
var _c1 = function (a0) { return { "in": a0 }; };
var _c2 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
var _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];
var UiModalComponent = /** @class */ (function () {
    function UiModalComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = true;
        this.visible = false;
        this.visibleAnimate = false;
    }
    UiModalComponent.prototype.ngOnInit = function () { };
    UiModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
        document.querySelector('body').classList.add('modal-open');
    };
    UiModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        document.querySelector('body').classList.remove('modal-open');
    };
    UiModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
        }
    };
    UiModalComponent.ɵfac = function UiModalComponent_Factory(t) { return new (t || UiModalComponent)(); };
    UiModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiModalComponent, selectors: [["app-ui-modal"]], inputs: { dialogClass: "dialogClass", hideHeader: "hideHeader", hideFooter: "hideFooter", containerClick: "containerClick" }, ngContentSelectors: _c3, decls: 7, vars: 10, consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]], template: function UiModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiModalComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dialogClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VpLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUdBLGdDQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUdJO0VBSUUsMEJBQUE7QUFETjtBQUdJO0VBR0UsNkJBQUE7RUFJQSw2QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoidWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xyXG4gICYubW9kYWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA1MDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gICYuZmFkZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAmLmluIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5tb2RhbC5mYWRlIHtcclxuICAgICYuaW4gLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iYXNpYy1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMXB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
    return UiModalComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B+xq":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sections/admin/user-details/user-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend.service */ "RktG");




function UserDetailsComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10.email, " ");
} }
function UserDetailsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.password, " ");
} }
function UserDetailsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.firstName, " ");
} }
function UserDetailsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.lastName, " ");
} }
function UserDetailsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 12);
} }
function UserDetailsComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(backend) {
        var _this = this;
        this.backend = backend;
        this.displayedColumns = ['email', 'password', 'firstName', 'lastName'];
        this.backend.getSignUpDetails()
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](data);
        });
    }
    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 16, vars: 3, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "email"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "password"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserDetailsComponent_th_3_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserDetailsComponent_td_4_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserDetailsComponent_th_6_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserDetailsComponent_td_7_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserDetailsComponent_th_9_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserDetailsComponent_td_10_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserDetailsComponent_th_12_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserDetailsComponent_td_13_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserDetailsComponent_tr_14_Template, 1, 0, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserDetailsComponent_tr_15_Template, 1, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"] });
    return UserDetailsComponent;
}());



/***/ }),

/***/ "B/bl":
/*!****************************************************************************!*\
  !*** ./src/app/components/sections/testimonials/testimonials.component.ts ***!
  \****************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
    TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], inputs: { themeType: "themeType" }, decls: 32, vars: 0, consts: [[1, "container", 2, "background-color", "rgb(206, 186, 132)"], [1, "section-title", "wow", "fadeInUp", 2, "font-size", "xxx-large"], [1, "snip1533"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Testimonials");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "blockquote");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "An extremely happy customer. These two men helped my sister and her partner move homes and they made the task at hand extremely easy couldn\u2019t have done it without them. Would definitely recommend Singh Movers and Packers. Thank yous once again.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lewis the creator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Google Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "blockquote");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Singh Movers were absolutely amazing, stuck to their words, great with our furniture, dedicated hard working and honest I recommend Singh movers for your next move");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Carlos Cespedes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "blockquote");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Great movers. Another mover had bailed on me last minute, and these guys really saved the day. I called them on the day and they were able to squeeze me in only a few hours later. Very honest and hard working people, they did the move at normal rates (some movers charge penalty rates on last minute callouts) and within reasonable time frame. Even when they were tired after working at another and our job, they kept going and didn't complain. Would recommend to everyone, as we will definitely be using Singh Movers and Packers in the future. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Saad Ali");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Google Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["@charset \"UTF-8\";\n@import url(https://fonts.googleapis.com/css?family=Roboto:300,400);\n@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);\n.snip1533[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  color: #9e9e9e;\n  display: inline-block;\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-size: 16px;\n  margin: 35px 10px 10px;\n  max-width: 310px;\n  min-width: 250px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 5px;\n  border-top: 5px solid #d2652d;\n}\n.snip1533[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .snip1533[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n  transition: all 0.1s ease-out;\n}\n.snip1533[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  padding: 13% 10% 12%;\n}\n.snip1533[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: translateX(-50%);\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n  color: #d2652d;\n  content: \"\uF10E\";\n  font-family: \"FontAwesome\";\n  font-size: 32px;\n  font-style: normal;\n  left: 50%;\n  line-height: 60px;\n  position: absolute;\n  top: -30px;\n  width: 60px;\n}\n.snip1533[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #3c3c3c;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 24px;\n  margin: 10px 0 5px;\n}\n.snip1533[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin: 0;\n  opacity: 0.5;\n}\n.snip1533[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 300;\n  margin: 0 0 20px;\n}\n.snip1533[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #251f1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUixtRUFBQTtBQUNBLHdGQUFBO0FBQ1I7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRUY7QUFDQTs7RUFHRSxzQkFBQTtFQUVBLDZCQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0FBRUY7QUFDQTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDApO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC40LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzKTtcbi5zbmlwMTUzMyB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDM1cHggMTBweCAxMHB4O1xuICBtYXgtd2lkdGg6IDMxMHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkMjY1MmQ7XG59XG5cbi5zbmlwMTUzMyAqLFxuLnNuaXAxNTMzICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbn1cblxuLnNuaXAxNTMzIGZpZ2NhcHRpb24ge1xuICBwYWRkaW5nOiAxMyUgMTAlIDEyJTtcbn1cblxuLnNuaXAxNTMzIGZpZ2NhcHRpb246YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogI2QyNjUyZDtcbiAgY29udGVudDogXCJcXGYxMGVcIjtcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZWZ0OiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uc25pcDE1MzMgaDMge1xuICBjb2xvcjogIzNjM2MzYztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAxMHB4IDAgNXB4O1xufVxuXG4uc25pcDE1MzMgaDQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnNuaXAxNTMzIGJsb2NrcXVvdGUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG59XG5cblxuLnNuaXAxNTMzIHAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMjUxZjFmO1xufVxuXG5cbiJdfQ== */"] });
    return TestimonialsComponent;
}());



/***/ }),

/***/ "Db1w":
/*!****************************************************************************************!*\
  !*** ./src/app/components/sections/admin/enquiry-message/enquiry-message.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EnquiryMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryMessageComponent", function() { return EnquiryMessageComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend.service */ "RktG");




function EnquiryMessageComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EnquiryMessageComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10.inputName, " ");
} }
function EnquiryMessageComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EnquiryMessageComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.email, " ");
} }
function EnquiryMessageComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EnquiryMessageComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.subject, " ");
} }
function EnquiryMessageComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EnquiryMessageComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.message, " ");
} }
function EnquiryMessageComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 11);
} }
function EnquiryMessageComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 12);
} }
var EnquiryMessageComponent = /** @class */ (function () {
    function EnquiryMessageComponent(backend) {
        var _this = this;
        this.backend = backend;
        this.displayedColumns = ['inputName', 'email', 'subject', 'message'];
        this.backend.getContactExtraction()
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](data);
        });
    }
    EnquiryMessageComponent.prototype.ngOnInit = function () {
        //call this method on component load
        // this.getEnquiry();
    };
    EnquiryMessageComponent.ɵfac = function EnquiryMessageComponent_Factory(t) { return new (t || EnquiryMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
    EnquiryMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnquiryMessageComponent, selectors: [["app-enquiry-message"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "inputName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "subject"], ["matColumnDef", "message"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function EnquiryMessageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EnquiryMessageComponent_th_2_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EnquiryMessageComponent_td_3_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EnquiryMessageComponent_th_5_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EnquiryMessageComponent_td_6_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EnquiryMessageComponent_th_8_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EnquiryMessageComponent_td_9_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EnquiryMessageComponent_th_11_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EnquiryMessageComponent_td_12_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EnquiryMessageComponent_tr_13_Template, 1, 0, "tr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EnquiryMessageComponent_tr_14_Template, 1, 0, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VucXVpcnktbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJlbnF1aXJ5LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"] });
    return EnquiryMessageComponent;
}());



/***/ }),

/***/ "HkD1":
/*!*****************************************************!*\
  !*** ./src/app/components/sections/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isAdmin = false;
        this.isAuthenticated = false;
        this.isAdmin = localStorage.getItem('isAdmin');
        this.isAuthenticated = localStorage.getItem('isAuthenticated');
    }
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());



/***/ }),

/***/ "IN/g":
/*!************************************************************!*\
  !*** ./src/app/components/sections/user/user.component.ts ***!
  \************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend.service */ "RktG");


var UserComponent = /** @class */ (function () {
    function UserComponent(backend) {
        this.backend = backend;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 16, vars: 0, consts: [[1, "col-xs-12", "col-sm-10", "col-md-8", "col-sm-offset-1", "col-md-offset-2"], [2, "border", "3px solid black", "margin-left", "25px", "padding-left", "16px"], ["src", "https://calendar.google.com/calendar/embed?src=singhmoverpackers%40gmail.com&ctz=Australia%2FSydney", "width", "1070", "height", "600", "frameborder", "0", "scrolling", "no", 2, "border", "0"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Check the Mover's availability for the week, month or the whole year.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tip! : Click the plus (+) icon on the bottom-right of calender to add the Mover's calender to your personal calender.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "iframe", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["h1[_ngcontent-%COMP%] {\n  color: darkblue;\n  font-size: 40px;\n  font-style: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoidXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGNvbG9yOmRhcmtibHVlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICB9Il19 */"] });
    return UserComponent;
}());



/***/ }),

/***/ "K7hc":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.config = {
        theme: 'vertical',
        themeType: 'default' // default, dark, light
    };
    return Config;
}());



/***/ }),

/***/ "QpnW":
/*!*************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.service.ts ***!
  \*************************************************************/
/*! exports provided: ScrollSpyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyService", function() { return ScrollSpyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ScrollSpyService = /** @class */ (function () {
    function ScrollSpyService() {
        this.counter = 'home';
        this.count = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.counter);
    }
    ScrollSpyService.prototype.nextCount = function (value) {
        this.count.next(value);
    };
    ScrollSpyService.ɵfac = function ScrollSpyService_Factory(t) { return new (t || ScrollSpyService)(); };
    ScrollSpyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollSpyService, factory: ScrollSpyService.ɵfac, providedIn: 'root' });
    return ScrollSpyService;
}());



/***/ }),

/***/ "RX07":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.directive.ts ***!
  \***************************************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScrollSpyDirective.prototype.onScroll = function (event) {
        var currentSection = '';
        var children = this._el.nativeElement.children;
        var scrollTop = event.target.scrollTop;
        var parentOffset = event.target.offsetTop;
        var _loop_1 = function (i) {
            var element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection && currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
        if (currentSection === 'home' && document.querySelector('#return-to-top').hasAttribute('style')) {
            document.querySelector('#return-to-top').removeAttribute('style');
        }
        else if (!(document.querySelector('#return-to-top').hasAttribute('style'))) {
            document.querySelector('#return-to-top').style.display = 'block';
        }
    };
    ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) { return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollSpyDirective, selectors: [["", "scrollSpy", ""]], hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });
    return ScrollSpyDirective;
}());



/***/ }),

/***/ "RktG":
/*!********************************************************!*\
  !*** ./src/app/components/sections/backend.service.ts ***!
  \********************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var BackendService = /** @class */ (function () {
    // publicPath = `http://localhost:3000`;
    function BackendService(http) {
        this.http = http;
        this.publicPath = "https://23706190.it.scu.edu.au";
    }
    BackendService.prototype.postQuoteSubmission = function (payload) {
        return this.http.post(this.publicPath + "/api/quote-submission", payload)
            .subscribe(function (data) { return data; });
    };
    BackendService.prototype.postSignUpSubmission = function (payload) {
        return this.http.post(this.publicPath + "/api/signup", payload)
            .subscribe(function (data) { return data; });
    };
    BackendService.prototype.postSignIn = function (payload) {
        return this.http.post(this.publicPath + "/api/signin", payload);
    };
    BackendService.prototype.postContactSubmission = function (payload) {
        return this.http.post(this.publicPath + "/api/contact", payload);
    };
    BackendService.prototype.getContactExtraction = function () {
        return this.http.get(this.publicPath + "/api/contact-details");
    };
    BackendService.prototype.getQuotes = function () {
        return this.http.get(this.publicPath + "/api/quote-list");
    };
    BackendService.prototype.getSignUpDetails = function () {
        return this.http.get(this.publicPath + "/api/signup-details");
    };
    BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac });
    return BackendService;
}());



/***/ }),

/***/ "RntK":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 111, vars: 0, consts: [[1, "container", 2, "background-color", "rgb(206, 186, 132)"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-3"], ["src", "assets/images/landing/truck-small.png", "alt", "truck-small"], [1, "col-md-9", "triangle-left-md", "triangle-top-sm"], [1, "rounded", "bg-white", "shadow-dark", "padding-30"], [1, "col-md-6"], [2, "text-align", "justify", "font-size", "large"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "elementor-heading-title", "elementor-size-default", 2, "text-align", "justify", "font-size", "large"], [1, "h3-accent", 2, "text-align", "justify", "font-size", "large"], [1, "spacer-70"], [1, "col-lg-6", "col-md-6", "col-sm-6", "no-padding", 2, "background", "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('assets/01.jpg')"], [1, "_any_tm_lft"], [1, "_any_tm_lft_txt"], [2, "text-transform", "uppercase", "margin-left", "10%", "margin-top", "23%", "text-align", "justify", "font-size", "x-large"], [2, "color", "rgb(14, 97, 89)", "text-align", "justify", "font-size", "x-large"], [2, "width", "83%", "margin-left", "9%", "text-align", "justify", "font-size", "large"], [1, "col-lg-6", "col-md-6", "col-sm-6", "no-padding", 2, "background", "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8))"], [1, "_any_tm_rft"], [1, "_any_tm_rft_txt"], [1, "text-animation1", 2, "text-transform", "uppercase", "margin-left", "20%", "margin-top", "1%"], [2, "color", "rgb(14, 97, 89)"], [1, "_choose_list", 2, "list-style-type", "none"], [1, "_w_icon", "wow", "slideInRight", "animated", 2, "visibility", "visible", "animation-name", "slideInRight", "margin-left", "-13%", "margin-top", "41px"], [2, "margin-top", "-11%", "margin-left", "23px", "text-align", "justify", "font-size", "large"], [1, "_d_txt", 2, "margin-left", "23px", "text-align", "justify", "font-size", "large"], [1, "_w_icon", "wow", "slideInRight", "animated", 2, "visibility", "visible", "animation-name", "slideInRight", "margin-left", "-13%", "margin-top", "88px"], [2, "margin-top", "-10%", "margin-left", "23px", "text-align", "justify", "font-size", "large"], [1, "_fea_txt_bx", 2, "background", "linear-gradient((rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('assets/feature_bg.png'))", "color", "white"], [2, "text-align", "center", "margin-top", "40px", "font-size", "xx-large"], [2, "text-align", "center", "margin-top", "20px", "font-size", "large"], [1, "cleafixed"], [1, "col-lg-3", "col-md-3", "col-sm-3"], [1, "_fea_txt_3rd", 2, "width", "500%", "margin-top", "50%", "padding-bottom", "40px"], [1, "f_icon"], ["src", "assets/f_icon01.png", "alt", "", 1, "wow", "zoomIn", "animated", 2, "visibility", "visible"], ["src", "assets/f_icon02.png", "alt", "", 1, "wow", "zoomIn", "animated", 2, "visibility", "visible"], ["src", "assets/f_icon03.png", "alt", "", 1, "wow", "zoomIn", "animated", 2, "visibility", "visible"], ["src", "assets/f_icon04.png", "alt", "", 1, "wow", "zoomIn", "animated", 2, "visibility", "visible"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "When Singh Movers & Packers was founded in 2017, we strived to change the way people move. In the process, we wanted to innovate the moving industry. We established the all-included flat rate pricing model in Sydney and shifted the way people relocated locally and nationwide. With 20+ agents stationed nationally in Sydney and major cities in Australia, Singh Movers & Packers is now a leading name in the business with a 5% moving claim rate \u2014 beating the industry\u2019s average of over 20 years.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Best-in-class Service and Technology");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Singh Movers & Packers first-class service and sophisticated technology are unsurpassed in the moving industry, enabling the company to deliver a superior level of quality to our customers. Here\u2019s how we do it:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upfront Estimates & Free Quoting");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dispatch & Fleet Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Move any where ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "any time ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " With Singh Movers and Packers by your side, you can easily relocate to anywhere and at anytime without any issues. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Just book the truck that you want to relocate your chattels, get your belongings packed by the packers and movers of your choice and you are all set to relocate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Why Choose ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Us ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Variety of Transport Vehicles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "You can easily choose the type of truck that will be best suited for the transportation of your chattels as per their quantity. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Budget-Friendly Transportation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "To transport your goods, you can select a transport provider that not only has good reviews but also is also budget-friendly.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Guaranteed Security");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "All the transportation and packers & movers on our website are highly reliable and ensure complete security of your chattels.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Our Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "With Singh Movers & Packers, you get an array of features that are impossible to fund anywhere else.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Let's have a look at some of the unmatched features that we offer- ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "100% Safe Delivery");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Get your belongings packed and transported in a totally secure manner with us.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Weather Insuarance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "We give complete insurance to all your belongings against the weather conditions.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Fast & On Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Fast and doorstep delivery of all your belongings, in the least possible time.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Support For Your Vehicles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Complete support to both 2-wheeler and 4-wheeler vehicles while their relocation.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */", ".text-animation[_ngcontent-%COMP%] {\n    border-right: solid 5px rgba(255,255,255,.90);\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 18px;\n    color: rgba(0,0,0,1);\n  }\n  .text-animation[_ngcontent-%COMP%]{\n    animation: animated-text 4s linear 1s 1 normal both,\n               animated-cursor 600ms linear infinite;\n  }\n  @keyframes animated-text{\n    from{width: 0%;}\n    to{width: 50%;}\n  }\n  @keyframes animated-cursor{\n    from{border-right-color: rgba(0,0,0,.75);}\n    to{border-right-color: transparent;}\n  }\n  .text-animation1[_ngcontent-%COMP%] {\n    border-right: solid 5px rgba(255,255,255,.90);\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 26px;\n    color: rgba(0,0,0,1);\n  }\n  .text-animation1[_ngcontent-%COMP%]{\n    animation: animated-text1 4s linear 1s 1 normal both,\n               animated-cursor1 600ms linear infinite;\n  }\n\n  ._fea_txt_3rd[_ngcontent-%COMP%]{\n    font-size: 17px;\n    text-align: left;\n  }\n\n  h4[_ngcontent-%COMP%]{\n    color: rgb(74, 22, 87);\n    font-size:x-large;\n  }\n  @keyframes animated-text1{\n    from{width: 0%;}\n    to{width: 240px;}\n  }\n  @keyframes animated-cursor1{\n    from{border-right-color: rgba(0,0,0,.75);}\n    to{border-right-color: transparent;}\n  }"] });
    return AboutComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Movers and Packers';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AppComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/layout/layout.component */ "6eW9");
/* harmony import */ var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader/loader.module */ "mRNh");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_1__["ClickOutsideModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_1__["ClickOutsideModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]] }); })();


/***/ }),

/***/ "cpwU":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/services/services.component.ts ***!
  \********************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.prototype.scrollTo = function (section) {
        var sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };
    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 43, vars: 0, consts: [[1, "container", 2, "background-color", "rgb(196, 169, 184)"], [1, "tm-container", "masonry"], ["data-desktop-seq-no", "1", "data-mobile-seq-no", "1", 1, "item", "tm-bg-white", "tm-block", "tm-block-left"], [1, "tm-hero-text"], [1, "tm-block-brand"], [1, "tm-bg-primary-dark", "tm-text-white", "tm-block-brand-inner"], [1, "fas", "fa-braille", "fa-3x"], [1, "tm-brand-name"], ["data-desktop-seq-no", "2", "data-mobile-seq-no", "4", 1, "item"], ["src", "assets/images/interstate2.jpeg", "alt", "Image", 1, "tm-img-another"], ["data-desktop-seq-no", "3", "data-mobile-seq-no", "5", 1, "item", "tm-bg-secondary", "tm-text-white", "tm-block", "tm-block-wider", "tm-block-pad", "tm-block-left-2"], [1, "fas", "fa-award", "fa-4x", "tm-block-icon"], [2, "font-size", "xx-large"], ["data-desktop-seq-no", "4", "data-mobile-seq-no", "8", 1, "item"], ["src", "assets/images/packaging.jpg", "alt", "Image", 1, "tm-img-left"], ["id", "tmFooter", "data-desktop-seq-no", "5", "data-mobile-seq-no", "9", 1, "tm-footer"], ["data-desktop-seq-no", "6", "data-mobile-seq-no", "2", 1, "item"], ["src", "assets/images/background-image.jpg", "alt", "Image", 1, "tm-img-right"], ["data-desktop-seq-no", "7", "data-mobile-seq-no", "3", 1, "item", "tm-block-right"], [1, "tm-block-right-inner", "tm-bg-primary-light", "tm-text-white", "tm-block", "tm-block-wider", "tm-block-pad"], [1, "tm-mt", "tm-mb-small"], [1, "mt-4"], ["href", "javascript:", 1, "btn", "button5", 3, "click"], ["data-desktop-seq-no", "8", "data-mobile-seq-no", "6", 1, "item"], ["src", "assets/images/commercial.png", "alt", "Image", 1, "tm-img-left"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u201CSpecializing in local operations for the past 5 years, Singh Movers & Packers has moved over 300 customers in Australia and is a leading provider of residential moving services in Sydney, Melbourne and Brisbane. With a broad national network and a high-quality moving team, Singh Movers & Packers focuses on local knowledge and meticulous planning \u2014 key factors that always guarantee a flawless move.\u201D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "INTERSTATE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "COMMERCIAL REMOVAL");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We know downtime means lost income so guaranteeing that your business runs smoothly while relocating is top priority for Singh Movers and Packers. With our detailed logistics, team of commercial movers, specialized services and unmatched packing expertise \u2014 Singh Movers and Packers always plans, executes and delivers your commercial moving with perfection.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "header", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LOCAL REMOVAL");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "At Singh Movers & Packers we take long distance moving seriously. From the initial sales consultation to arriving safely at your new home, our team of moving experts provide detailed planning for every step of the moving process so your transition is as smooth as it can be. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesComponent_Template_a_click_33_listener() { return ctx.scrollTo("quote"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Get Quote");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "PACKAGING SUPPLIES");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Singh Movers and Packers uses only the best packing materials, high quality blankets, boxes & tape. We pre-plan every packing job, and bring specialized materials. We use specific procedures for each item \u2013 lamps go in special boxes, mattresses are inserted in special bags, and flat screen TVs have special packing procedures. We also use heavy duty boxes for longer cross country or international moves. Call us to get the same professional materials we use. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 20px;\n  color: #666666;\n  -webkit-font-smoothing: antialiased;\n  padding: 80px;\n  overflow-x: hidden;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  color: #FF0;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 2;\n  margin: 0;\n}\n\n.tm-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n}\n\n\n\n.masonry[_ngcontent-%COMP%] {\n  \n  -moz-column-count: 2;\n       column-count: 2;\n  -moz-column-gap: 0;\n       column-gap: 0;\n}\n\n.item[_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  margin: 0;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.tm-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.tm-block[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  max-width: 500px;\n}\n\n.tm-block-wider[_ngcontent-%COMP%] {\n  max-width: 640px;\n  width: calc(100% + 40px);\n}\n\n.tm-block-left[_ngcontent-%COMP%] {\n  right: 20px;\n  bottom: 10px;\n  max-height: 810px;\n}\n\n.tm-block-left-2[_ngcontent-%COMP%] {\n  right: 60px;\n  top: 15px;\n}\n\n.tm-block-right[_ngcontent-%COMP%] {\n  padding: 15px 0 20px 20px;\n}\n\n.tm-img-left[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 0;\n  margin-left: auto;\n  height: 500px;\n  width: 650px;\n}\n\n.tm-img-right[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 0;\n  margin-left: auto;\n  height: 450px;\n  width: 650px;\n}\n\n.tm-img-another[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 0;\n  margin-left: auto;\n  height: 550px;\n  width: 650px;\n}\n\n.tm-hero-text[_ngcontent-%COMP%] {\n  padding: 140px 95px 0;\n}\n\n.tm-block-pad[_ngcontent-%COMP%] {\n  padding: 67px 63px;\n}\n\n.tm-block-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin: 0 20px 20px;\n}\n\n.tm-block-brand[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 147px;\n  margin-bottom: 27px;\n}\n\n.tm-block-brand-inner[_ngcontent-%COMP%] {\n  position: relative;\n  right: 50px;\n  padding: 70px 48px;\n  display: flex;\n  align-items: center;\n}\n\n.tm-brand-name[_ngcontent-%COMP%] {\n  margin: 0 40px 0;\n  font-size: 2.5rem;\n  font-weight: 400;\n}\n\n.tm-bg-dark[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n\n.tm-bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.tm-btn[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n  display: inline-block;\n  font-size: 1em;\n}\n\n.tm-btn-small[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  padding: 15px 35px;\n}\n\n.tm-btn-pad-big[_ngcontent-%COMP%] {\n  padding: 17px 45px;\n}\n\n.tm-btn-primary[_ngcontent-%COMP%] {\n  color: #9999cc;\n  background-color: #ffffff;\n}\n\n.tm-btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #c5c5e6;\n}\n\n.tm-btn-secondary[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #9999cc;\n}\n\n.tm-btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background-color: #5b5bb2;\n}\n\n.tm-text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.tm-text-gray-light[_ngcontent-%COMP%] {\n  color: #999999;\n}\n\n.tm-bg-primary-light[_ngcontent-%COMP%] {\n  background-color: #cc9999;\n}\n\n.tm-bg-primary-dark[_ngcontent-%COMP%] {\n  background-color: #996666;\n}\n\n.tm-bg-secondary[_ngcontent-%COMP%] {\n  background-color: #9999cc;\n}\n\n.tm-mt[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.tm-mt-big[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.tm-mb[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n\n.tm-mb-small[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  min-height: 480px;\n  max-height: 550px;\n}\n\n.tm-text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.tm-text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.tm-form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #958ec0;\n  padding: 18px 20px;\n  font-size: 1em;\n}\n\n.tm-contact-form[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n}\n\n.tm-form-section[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n\n.tm-form-section-tag[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.tm-form-section-tag[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.tm-form-section-tag-inner[_ngcontent-%COMP%] {\n  position: relative;\n  left: 40px;\n  right: -40px;\n  bottom: -40px;\n  width: 100%;\n  max-width: 600px;\n  box-sizing: border-box;\n  padding: 55px 47px;\n}\n\n.tm-pb-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.tm-img-qr[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin: 30px 20px 30px 0;\n}\n\n.tm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 600px;\n  margin-right: 0;\n  margin-left: auto;\n}\n\n.tm-footer[_ngcontent-%COMP%], .tm-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cbcbcb;\n}\n\n.tm-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #996666;\n}\n\n.tm-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n@media (max-width: 1232px) {\n  body[_ngcontent-%COMP%] {\n    padding: 60px;\n  }\n}\n\n@media (max-width: 1199px) {\n  .masonry[_ngcontent-%COMP%] {\n    \n    -moz-column-count: 1;\n         column-count: 1;\n  }\n\n  .tm-container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media (max-width: 540px) {\n  .tm-block-brand-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 35px;\n    right: 30px;\n  }\n\n  .tm-brand-name[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .tm-contact-form[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n}\n\n@media (max-width: 520px) {\n  body[_ngcontent-%COMP%] {\n    padding: 50px;\n  }\n\n  .tm-block-pad[_ngcontent-%COMP%] {\n    padding: 45px;\n  }\n\n  .tm-hero-text[_ngcontent-%COMP%] {\n    padding: 50px 45px 0;\n  }\n\n  .tm-block-brand[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n}\n\n@media (max-width: 417px) {\n  .tm-block-left[_ngcontent-%COMP%], .tm-block-left-2[_ngcontent-%COMP%] {\n    right: 0;\n  }\n\n  .tm-block-wider[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .tm-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 390px) {\n  body[_ngcontent-%COMP%] {\n    padding: 40px 20px 10px;\n  }\n\n  .tm-form-section-tag-inner[_ngcontent-%COMP%] {\n    left: 25px;\n    right: -25px;\n    bottom: -25px;\n  }\n}\n\n.button5[_ngcontent-%COMP%] {\n  font-size: 35px;\n  background-color: #6931b3;\n  color: white;\n}\n\n.button5[_ngcontent-%COMP%]:hover {\n  background-color: #1e3480;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxvQ0FBQTtBQURGOztBQUlBO0VBQ0MsV0FBQTtFQUNDLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7O0VBSUUseUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUEsbUNBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUVBLG9CQUFBO09BQUEsZUFBQTtFQUVBLGtCQUFBO09BQUEsYUFBQTtBQURGOztBQUlBO0VBQ0UscUNBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFHQSxhQUFBO0VBR0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7O0VBRUUsV0FBQTtFQUVBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLHdCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLDRCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBRkY7O0FBS0E7RUFHRSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBOztFQUVFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLHNCQUFBO0lBRUEsb0JBQUE7U0FBQSxlQUFBO0VBSEY7O0VBTUE7SUFDRSxnQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFKRjs7RUFPQTtJQUNFLGdCQUFBO0VBSkY7O0VBT0E7SUFDRSx3QkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGFBQUE7RUFMRjs7RUFRQTtJQUNFLGFBQUE7RUFMRjs7RUFRQTtJQUNFLG9CQUFBO0VBTEY7O0VBUUE7SUFDRSxnQkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTs7SUFFRSxRQUFBO0VBTkY7O0VBU0E7SUFDRSxXQUFBO0VBTkY7O0VBU0E7SUFDRSxzQkFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLHVCQUFBO0VBUEY7O0VBVUE7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFQRjtBQUNGOztBQVVBO0VBQVUsZUFBQTtFQUFnQix5QkFBQTtFQUFvQyxZQUFBO0FBTDlEOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBSEYiLCJmaWxlIjoic2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgcGFkZGluZzogODBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcblx0Y29sb3I6ICNGRjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hLFxuYnV0dG9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtYXJnaW46IDA7XG59XG5cbi50bS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogaHR0cDovL3czYml0cy5jb20vY3NzLW1hc29ucnkvICovXG4ubWFzb25yeSB7XG4gIC8qIE1hc29ucnkgY29udGFpbmVyICovXG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tY291bnQ6IDI7XG4gIC13ZWJraXQtY29sdW1uLWdhcDogMDtcbiAgY29sdW1uLWdhcDogMDtcbn1cblxuLml0ZW0ge1xuICAvKiBNYXNvbnJ5IGJyaWNrcyBvciBjaGlsZCBlbGVtZW50cyAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRtLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG0tYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcblxufVxuXG4udG0tYmxvY2std2lkZXIge1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgNDBweCk7XG59XG5cbi50bS1ibG9jay1sZWZ0IHtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgbWF4LWhlaWdodDogODEwcHg7XG59XG5cbi50bS1ibG9jay1sZWZ0LTIge1xuICByaWdodDogNjBweDtcbiAgdG9wOiAxNXB4O1xufVxuXG4udG0tYmxvY2stcmlnaHQge1xuICBwYWRkaW5nOiAxNXB4IDAgMjBweCAyMHB4O1xufVxuXG4udG0taW1nLWxlZnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDY1MHB4O1xufVxuXG4udG0taW1nLXJpZ2h0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA2NTBweDtcbn1cblxuLnRtLWltZy1hbm90aGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGhlaWdodDogNTUwcHg7XG4gIHdpZHRoOiA2NTBweDtcbn1cblxuLnRtLWhlcm8tdGV4dCB7XG4gIHBhZGRpbmc6IDE0MHB4IDk1cHggMDtcbn1cblxuLnRtLWJsb2NrLXBhZCB7XG4gIHBhZGRpbmc6IDY3cHggNjNweDtcbn1cblxuLnRtLWJsb2NrLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMjBweCAyMHB4O1xufVxuXG4udG0tYmxvY2stYnJhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAyN3B4O1xufVxuXG4udG0tYmxvY2stYnJhbmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA3MHB4IDQ4cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRtLWJyYW5kLW5hbWUge1xuICBtYXJnaW46IDAgNDBweCAwO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRtLWJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG4udG0tYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udG0tYnRuIHtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udG0tYnRuLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxNXB4IDM1cHg7XG59XG5cbi50bS1idG4tcGFkLWJpZyB7XG4gIHBhZGRpbmc6IDE3cHggNDVweDtcbn1cblxuLnRtLWJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICM5OTk5Y2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50bS1idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1ZTY7XG59XG5cbi50bS1idG4tc2Vjb25kYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OWNjO1xufVxuXG4udG0tYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI1YmIyO1xufVxuXG4udG0tdGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udG0tdGV4dC1ncmF5LWxpZ2h0IHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi50bS1iZy1wcmltYXJ5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjOTk5OTtcbn1cblxuLnRtLWJnLXByaW1hcnktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTY2NjY7XG59XG5cbi50bS1iZy1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OWNjO1xufVxuXG4udG0tbXQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udG0tbXQtYmlnIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRtLW1iIHtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuLnRtLW1iLXNtYWxsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWluLWhlaWdodDogNDgwcHg7XG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xufVxuXG4udG0tdGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udG0tdGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udG0tZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTU4ZWMwO1xuICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udG0tY29udGFjdC1mb3JtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xufVxuXG4udG0tZm9ybS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnRtLWZvcm0tc2VjdGlvbi10YWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50bS1mb3JtLXNlY3Rpb24tdGFnIGgyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi50bS1mb3JtLXNlY3Rpb24tdGFnLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0MHB4O1xuICByaWdodDogLTQwcHg7XG4gIGJvdHRvbTogLTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1NXB4IDQ3cHg7XG59XG5cbi50bS1wYi0wIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnRtLWltZy1xciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAwO1xufVxuXG4udG0tZm9vdGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udG0tZm9vdGVyLFxuLnRtLWZvb3RlciBhIHtcbiAgY29sb3I6ICNjYmNiY2I7XG59XG5cbi50bS1mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTk2NjY2O1xufVxuXG4udG0tZm9vdGVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjMycHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogNjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5tYXNvbnJ5IHtcbiAgICAvKiBNYXNvbnJ5IGNvbnRhaW5lciAqL1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAxO1xuICAgIGNvbHVtbi1jb3VudDogMTtcbiAgfVxuXG4gIC50bS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC50bS1ibG9jay1icmFuZC1pbm5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLnRtLWJyYW5kLW5hbWUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAudG0tY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuICAudG0tYmxvY2stcGFkIHtcbiAgICBwYWRkaW5nOiA0NXB4O1xuICB9XG5cbiAgLnRtLWhlcm8tdGV4dCB7XG4gICAgcGFkZGluZzogNTBweCA0NXB4IDA7XG4gIH1cblxuICAudG0tYmxvY2stYnJhbmQge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQxN3B4KSB7XG4gIC50bS1ibG9jay1sZWZ0LFxuICAudG0tYmxvY2stbGVmdC0yIHtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC50bS1ibG9jay13aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudG0tZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggMTBweDtcbiAgfVxuXG4gIC50bS1mb3JtLXNlY3Rpb24tdGFnLWlubmVyIHtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgICBib3R0b206IC0yNXB4O1xuICB9XG59XG5cbi5idXR0b241IHtmb250LXNpemU6IDM1cHg7YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgNDksIDE3OSk7Y29sb3I6d2hpdGV9XG4uYnV0dG9uNTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTM0ODA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxuXG4iXX0= */"] });
    return ServicesComponent;
}());



/***/ }),

/***/ "hGdz":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-spy/scroll-spy.directive */ "RX07");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/sections.module */ "k9h8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]
            ], _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]], exports: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"],
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]] }); })();


/***/ }),

/***/ "hHwi":
/*!**************************************************************************************!*\
  !*** ./src/app/components/sections/admin/quote-requests/quote-requests.component.ts ***!
  \**************************************************************************************/
/*! exports provided: QuoteRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteRequestsComponent", function() { return QuoteRequestsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend.service */ "RktG");




function QuoteRequestsComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r30.firstName, " ");
} }
function QuoteRequestsComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r31.lastName, " ");
} }
function QuoteRequestsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r32.email, " ");
} }
function QuoteRequestsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r33.phone, " ");
} }
function QuoteRequestsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Removal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r34.removal, " ");
} }
function QuoteRequestsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r35.address, " ");
} }
function QuoteRequestsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Suburb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r36.suburb, " ");
} }
function QuoteRequestsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r37.post, " ");
} }
function QuoteRequestsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r38.date, " ");
} }
function QuoteRequestsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r39.size, " ");
} }
function QuoteRequestsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Destination Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r40.destAddress, " ");
} }
function QuoteRequestsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Destination Suburb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r41.destSuburb, " ");
} }
function QuoteRequestsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Destination Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r42.destPost, " ");
} }
function QuoteRequestsComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Destination City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuoteRequestsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r43.destCity, " ");
} }
function QuoteRequestsComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function QuoteRequestsComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
var QuoteRequestsComponent = /** @class */ (function () {
    function QuoteRequestsComponent(backend) {
        var _this = this;
        this.backend = backend;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'phone', 'removal', 'address', 'suburb', 'post', 'date', 'size', 'destAddress', 'destSuburb', 'destPost', 'destCity'];
        this.backend.getQuotes()
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](data);
        });
    }
    QuoteRequestsComponent.ɵfac = function QuoteRequestsComponent_Factory(t) { return new (t || QuoteRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
    QuoteRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuoteRequestsComponent, selectors: [["app-quote-requests"]], decls: 45, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "firstName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastName"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "removal"], ["matColumnDef", "address"], ["matColumnDef", "suburb"], ["matColumnDef", "post"], ["matColumnDef", "date"], ["matColumnDef", "size"], ["matColumnDef", "destAddress"], ["matColumnDef", "destSuburb"], ["matColumnDef", "destPost"], ["matColumnDef", "destCity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function QuoteRequestsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuoteRequestsComponent_th_2_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuoteRequestsComponent_td_3_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QuoteRequestsComponent_th_5_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuoteRequestsComponent_td_6_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, QuoteRequestsComponent_th_8_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QuoteRequestsComponent_td_9_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, QuoteRequestsComponent_th_11_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, QuoteRequestsComponent_td_12_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, QuoteRequestsComponent_th_14_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, QuoteRequestsComponent_td_15_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, QuoteRequestsComponent_th_17_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QuoteRequestsComponent_td_18_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, QuoteRequestsComponent_th_20_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, QuoteRequestsComponent_td_21_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, QuoteRequestsComponent_th_23_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, QuoteRequestsComponent_td_24_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, QuoteRequestsComponent_th_26_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, QuoteRequestsComponent_td_27_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, QuoteRequestsComponent_th_29_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, QuoteRequestsComponent_td_30_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](31, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, QuoteRequestsComponent_th_32_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, QuoteRequestsComponent_td_33_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](34, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, QuoteRequestsComponent_th_35_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, QuoteRequestsComponent_td_36_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, QuoteRequestsComponent_th_38_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, QuoteRequestsComponent_td_39_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](40, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, QuoteRequestsComponent_th_41_Template, 2, 0, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, QuoteRequestsComponent_td_42_Template, 2, 1, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, QuoteRequestsComponent_tr_43_Template, 1, 0, "tr", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, QuoteRequestsComponent_tr_44_Template, 1, 0, "tr", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3F1b3RlLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InF1b3RlLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"] });
    return QuoteRequestsComponent;
}());



/***/ }),

/***/ "k9h8":
/*!********************************************************!*\
  !*** ./src/app/components/sections/sections.module.ts ***!
  \********************************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "sWZ+");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "RntK");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "cpwU");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "xp7a");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote/quote.component */ "639M");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "B/bl");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "sRMV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ "AaF/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./backend.service */ "RktG");
/* harmony import */ var _admin_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/user-details/user-details.component */ "B+xq");
/* harmony import */ var _admin_quote_requests_quote_requests_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/quote-requests/quote-requests.component */ "hHwi");
/* harmony import */ var _admin_enquiry_message_enquiry_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/enquiry-message/enquiry-message.component */ "Db1w");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "IN/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: SectionsModule });
    SectionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function SectionsModule_Factory(t) { return new (t || SectionsModule)(); }, providers: [
            _backend_service__WEBPACK_IMPORTED_MODULE_15__["BackendService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxModule"],
                ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderModule"],
                angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            ], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]] });
    return SectionsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](SectionsModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__["QuoteComponent"],
        _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__["TestimonialsComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
        _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__["UiModalComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["DialogContentDialog"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["SignInDialog"],
        _admin_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"],
        _admin_quote_requests_quote_requests_component__WEBPACK_IMPORTED_MODULE_17__["QuoteRequestsComponent"],
        _admin_enquiry_message_enquiry_message_component__WEBPACK_IMPORTED_MODULE_18__["EnquiryMessageComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__["QuoteComponent"],
        _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__["TestimonialsComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _admin_enquiry_message_enquiry_message_component__WEBPACK_IMPORTED_MODULE_18__["EnquiryMessageComponent"],
        _admin_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"],
        _admin_quote_requests_quote_requests_component__WEBPACK_IMPORTED_MODULE_17__["QuoteRequestsComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"]] }); })();


/***/ }),

/***/ "mRNh":
/*!****************************************************!*\
  !*** ./src/app/components/loader/loader.module.ts ***!
  \****************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.component */ "vPOg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoaderModule });
    LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ]] });
    return LoaderModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]] }); })();


/***/ }),

/***/ "sRMV":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/gallery/gallery.component.ts ***!
  \******************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(lightbox, lightboxEvent, lighboxConfig, sanitizer) {
        this.lightbox = lightbox;
        this.lightboxEvent = lightboxEvent;
        this.lighboxConfig = lighboxConfig;
        this.sanitizer = sanitizer;
    }
    GalleryComponent.prototype.ngOnInit = function () { };
    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { albums: "albums" }, decls: 9, vars: 0, consts: [[1, "image-grid"], ["src", "assets/images/truck-5.JPG", "alt", "left", 1, "image-grid-col-2", "image-grid-row-2"], ["src", "assets/images/truck-1.jpeg", "alt", "first"], ["src", "assets/images/truck-3.JPG", "alt", "second"], ["src", "assets/images/truck-6.JPG", "alt", "third"], ["src", "assets/images/truck-2.jpg", "alt", "fourth"], ["src", "assets/images/truck-7.JPG"], ["src", "assets/images/customers.jpg"], ["src", "assets/images/truck-4.JPG", 1, "image-grid-col-2", "image-grid-row-1"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n  --gap: 16px;\n  --num-cols: 4;\n  --row-height: 300px;\n  box-sizing: border-box;\n  padding: var(--gap);\n  display: grid;\n  grid-template-columns: repeat(var(--num-cols), 1fr);\n  grid-auto-rows: var(--row-height);\n  gap: var(--gap);\n}\n\n.image-grid[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.image-grid-col-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.image-grid-row-2[_ngcontent-%COMP%] {\n  grid-row: span 2;\n}\n\n.image-grid-row-1[_ngcontent-%COMP%] {\n  grid-row: span 1;\n}\n\n\n\n@media screen and (max-width: 1024px) {\n  .image-grid[_ngcontent-%COMP%] {\n    --num-cols: 2;\n    --row-height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtREFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUEsMEJBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbWFnZS1ncmlkIHtcbiAgLS1nYXA6IDE2cHg7XG4gIC0tbnVtLWNvbHM6IDQ7XG4gIC0tcm93LWhlaWdodDogMzAwcHg7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogdmFyKC0tZ2FwKTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1udW0tY29scyksIDFmcik7XG4gIGdyaWQtYXV0by1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KTtcbiAgZ2FwOiB2YXIoLS1nYXApO1xufVxuXG4uaW1hZ2UtZ3JpZCA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW1hZ2UtZ3JpZC1jb2wtMiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbi5pbWFnZS1ncmlkLXJvdy0yIHtcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbn1cblxuLmltYWdlLWdyaWQtcm93LTF7XG4gIGdyaWQtcm93OiBzcGFuIDE7XG59XG5cbi8qIEFueXRoaW5nIHVkbmVyIDEwMjRweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5pbWFnZS1ncmlkIHtcbiAgICAtLW51bS1jb2xzOiAyO1xuICAgIC0tcm93LWhlaWdodDogMjAwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return GalleryComponent;
}());



/***/ }),

/***/ "sWZ+":
/*!************************************************************!*\
  !*** ./src/app/components/sections/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent, DialogContentDialog, SignInDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentDialog", function() { return DialogContentDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInDialog", function() { return SignInDialog; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-animate */ "5Rqa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "HkD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../backend.service */ "RktG");









function HomeComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "inter-city removalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bounce", undefined);
} }
function HomeComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "inter-state removalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bounce", undefined);
} }
function HomeComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "commercial removalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bounce", undefined);
} }
function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.openDialogTwo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.onClickLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "light": a0 }; };
function DialogContentDialog_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DialogContentDialog_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DialogContentDialog_div_12_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f == null ? null : ctx_r0.f.firstName == null ? null : ctx_r0.f.firstName.errors.required);
} }
function DialogContentDialog_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DialogContentDialog_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DialogContentDialog_div_18_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f == null ? null : ctx_r1.f.lastName == null ? null : ctx_r1.f.lastName.errors.required);
} }
function DialogContentDialog_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DialogContentDialog_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is not formatted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DialogContentDialog_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DialogContentDialog_div_23_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DialogContentDialog_div_23_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : ctx_r2.f.email == null ? null : ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : ctx_r2.f.email == null ? null : ctx_r2.f.email.errors.email);
} }
function DialogContentDialog_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DialogContentDialog_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DialogContentDialog_div_29_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f == null ? null : ctx_r3.f.password == null ? null : ctx_r3.f.password.errors.required);
} }
function SignInDialog_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignInDialog_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "email is not formatted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignInDialog_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignInDialog_div_11_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SignInDialog_div_11_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f == null ? null : ctx_r0.f.email == null ? null : ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f == null ? null : ctx_r0.f.email == null ? null : ctx_r0.f.email.errors.email);
} }
function SignInDialog_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignInDialog_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignInDialog_div_17_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f == null ? null : ctx_r1.f.password == null ? null : ctx_r1.f.password.errors.required);
} }
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, auth) {
        var _this = this;
        this.dialog = dialog;
        this.auth = auth;
        this.bounce = 1;
        setInterval(function () {
            _this.bounce = _this.bounce < 3 ? _this.bounce + 1 : 1;
        }, 3000);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        setTimeout(function () {
            var Parallax = __webpack_require__(/*! parallax-js */ "patp");
            var scene = document.getElementById('scene');
            var parallaxInstance1 = new Parallax(scene, {
                relativeInput: false
            });
        }, 2000);
    };
    HomeComponent.prototype.scrollTo = function (section) {
        var sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogContentDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result:", result);
            _this.auth.isAdmin = result.authenticated;
            console.log(_this.auth.isAdmin);
            dialogRef.close();
        });
    };
    HomeComponent.prototype.openDialogTwo = function () {
        var _this = this;
        var dialogRef = this.dialog.open(SignInDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result:", result);
            localStorage.setItem('isAdmin', result.admin);
            localStorage.setItem('isAuthenticated', result.authenticated);
            _this.auth.isAdmin = result.admin;
            _this.auth.isAuthenticated = result.authenticated;
            localStorage.getItem('isAdmin');
            localStorage.getItem('isAuthenticated');
            console.log(_this.auth.isAdmin);
        });
    };
    HomeComponent.prototype.onClickLogOut = function () {
        this.auth.isAuthenticated = false;
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('isAuthenticated');
        this.auth.isAdmin = false;
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], inputs: { themeType: "themeType" }, decls: 32, vars: 9, consts: [[1, "container"], [1, "intro"], [1, "mb-2", "mt-2"], [1, "text-rotating", "morphext"], [4, "ngIf"], [1, "social-icons", "light", "list-inline", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "https://www.instagram.com/singh.movers.and.packers/", "target", "_blank"], [1, "fab", "fa-instagram"], ["href", "https://www.facebook.com/SinghMoversAndPackers", "target", "_blank"], [1, "fab", "fa-facebook"], [1, "mt-4"], ["href", "javascript:", 1, "btn", "btn-default", 3, "click"], ["class", "mt-4", 4, "ngIf"], [1, "scroll-down", 3, "ngClass"], ["href", "javascript:", 1, "mouse-wrapper", 3, "click"], [1, "mouse"], [1, "wheel"], ["id", "scene", "data-relative-input", "true", 1, "parallax"], ["src", "assets/images/landing/cover-image.jpeg", "alt", "singh", 1, "image_full"], ["href", "javascript:", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Singh Movers & Packers");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "We are ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HomeComponent_span_8_Template, 3, 1, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HomeComponent_span_9_Template, 3, 1, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HomeComponent_span_10_Template, 3, 1, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_19_listener() { return ctx.scrollTo("contact"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Contact us");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 3, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 3, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 3, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_25_listener() { return ctx.scrollTo("about"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Scroll Down");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bounce === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bounce === 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bounce === 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.themeType === "light"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".image_full[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBREYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZV9mdWxse1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuaDEge1xuICBjb2xvcjogYmx1ZTtcbn1cbi50b3BuYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICBcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTcwcHg7XG59XG4iXX0= */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('bounce', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_1__["bounceIn"], {
                        // Set the duration to 5seconds and delay to 2seconds
                        params: {
                            timing: 3,
                            delay: 0,
                            a: '3000px',
                            b: '-25px',
                            c: '10px',
                            d: '-5px',
                        }
                    }))])
            ] } });
    return HomeComponent;
}());

var DialogContentDialog = /** @class */ (function () {
    function DialogContentDialog(dialogRef, backend) {
        this.dialogRef = dialogRef;
        this.backend = backend;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    }
    Object.defineProperty(DialogContentDialog.prototype, "f", {
        get: function () {
            return this.signupForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    DialogContentDialog.prototype.signUp = function () {
        if (this.signupForm.status === 'VALID') {
            console.log(this.signupForm.value);
            var signupResponse = this.backend.postSignUpSubmission(this.signupForm.value);
            console.log(signupResponse);
            this.dialogRef.close(signupResponse);
        }
    };
    DialogContentDialog.ɵfac = function DialogContentDialog_Factory(t) { return new (t || DialogContentDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"])); };
    DialogContentDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DialogContentDialog, selectors: [["dialog-animations-signup"]], decls: 34, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup", "ngSubmit"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-10", "col-md-8", "col-sm-offset-1", "col-md-offset-2"], [1, "column", "col-md-6", 2, "float", "left"], [1, "form-group"], ["for", "firstName", 2, "color", "rgb(33, 16, 143)"], ["formControlName", "firstName", "type", "text", "id", "firstName", "required", "required", "data-error", "First Name is required.", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "lastName", 2, "color", "darkslateblue"], ["formControlName", "lastName", "type", "text", "id", "lastName", "required", "required", "data-error", "Last Name is required.", 1, "form-control"], ["for", "email", 2, "color", "darkslateblue"], ["formControlName", "email", "type", "email", "id", "email", "required", "required", "data-error", "email is required.", 1, "form-control"], ["for", "password", 2, "color", "darkslateblue"], ["formControlName", "password", "type", "text", "id", "password", "required", "required", "data-error", "Password is required.", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 2, "float", "centre", "size", "30px"], ["type", "reset", 1, "btn", "btn-danger", 2, "float", "centre"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function DialogContentDialog_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sign Up");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DialogContentDialog_Template_form_ngSubmit_3_listener() { return ctx.signUp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DialogContentDialog_div_12_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DialogContentDialog_div_18_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DialogContentDialog_div_23_Template, 3, 2, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DialogContentDialog_div_29_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Reset");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.firstName == null ? null : ctx.f.firstName.touched) && (ctx.f == null ? null : ctx.f.firstName == null ? null : ctx.f.firstName.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.lastName == null ? null : ctx.f.lastName.touched) && (ctx.f == null ? null : ctx.f.lastName == null ? null : ctx.f.lastName.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.touched) && (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.password == null ? null : ctx.f.password.touched) && (ctx.f == null ? null : ctx.f.password == null ? null : ctx.f.password.invalid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
    return DialogContentDialog;
}());

var SignInDialog = /** @class */ (function () {
    function SignInDialog(dialogRef, backend) {
        this.dialogRef = dialogRef;
        this.backend = backend;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    }
    Object.defineProperty(SignInDialog.prototype, "f", {
        // submit(){
        //   if(this.signInForm.status === 'VALID')
        //   {
        //     console.log(this.signInForm.value);
        //     const signinResponse = this.signinBackend.postSignIn(this.signInForm.value);
        //     console.log(signinResponse);
        //   }
        // }
        get: function () {
            return this.signInForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SignInDialog.prototype.signIn = function () {
        var _this = this;
        if (this.signInForm.status === 'VALID') {
            this.backend.postSignIn(this.signInForm.value).subscribe(function (data) {
                console.log(data);
                _this.dialogRef.close(data);
            });
        }
    };
    SignInDialog.ɵfac = function SignInDialog_Factory(t) { return new (t || SignInDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"])); };
    SignInDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignInDialog, selectors: [["dialog-animations-signin"]], decls: 20, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup", "ngSubmit"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-14", "col-md-14", "col-sm-offset-1", "col-md-offset-2"], [1, "column", "col-md-6", 2, "float", "left"], ["for", "email", 2, "color", "darkslateblue"], ["formControlName", "email", "type", "email", "id", "email", "required", "required", "data-error", "email is required.", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "password", 2, "color", "darkslateblue"], ["formControlName", "password", "type", "text", "id", "password", "required", "required", "data-error", "Password is required.", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 2, "float", "centre", "size", "30px"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SignInDialog_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignInDialog_Template_form_ngSubmit_3_listener() { return ctx.signIn(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SignInDialog_div_11_Template, 3, 2, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SignInDialog_div_17_Template, 2, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signInForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.touched) && (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.password == null ? null : ctx.f.password.touched) && (ctx.f == null ? null : ctx.f.password == null ? null : ctx.f.password.invalid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
    return SignInDialog;
}());



/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-config */ "K7hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* spinner */






var _c0 = function (a0) { return { "light": a0 }; };
function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "filter", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "feGaussianBlur", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "feColorMatrix", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "feBlend", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.themeConfig.themeType === "light"));
} }
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(router, document, activatedRoute) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.activatedRoute = activatedRoute;
        this.isSpinnerVisible = true;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
        this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].config;
    }
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["id", "preloader", 3, "ngClass", 4, "ngIf"], ["id", "preloader", 3, "ngClass"], [1, "outer"], [1, "infinityChrome"], [1, "infinity"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 1, "goo-outer"], ["id", "goo"], ["in", "SourceGraphic", "stdDeviation", "6", "result", "blur"], ["in", "blur", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", "result", "goo"], ["in", "SourceGraphic", "in2", "goo"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 19, 3, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LoaderComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/layout/layout.component */ "6eW9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        redirectTo: '/theme/view',
        pathMatch: 'full'
    },
    {
        path: 'theme',
        component: _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            {
                path: 'view',
                loadChildren: function () { return __webpack_require__.e(/*! import() | view-view-module */ "view-view-module").then(__webpack_require__.bind(null, /*! ./view/view.module */ "B4v+")).then(function (module) { return module.ViewModule; }); }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xp7a":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ "RktG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ContactComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_21_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f == null ? null : ctx_r0.f.inputName == null ? null : ctx_r0.f.inputName.errors.required);
} }
function ContactComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is not formatted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_26_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactComponent_div_26_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f == null ? null : ctx_r1.f.email == null ? null : ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f == null ? null : ctx_r1.f.email == null ? null : ctx_r1.f.email.errors.email);
} }
function ContactComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Subject is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_31_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : ctx_r2.f.subject == null ? null : ctx_r2.f.subject.errors.required);
} }
var ContactComponent = /** @class */ (function () {
    function ContactComponent(backend) {
        this.backend = backend;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'inputName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('demo@example.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'subject': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
        });
    }
    ;
    Object.defineProperty(ContactComponent.prototype, "f", {
        get: function () {
            return this.contactForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ContactComponent.prototype.submit = function () {
        if (this.contactForm.status === 'VALID') {
            this.backend.postContactSubmission(this.contactForm.value).subscribe(function (data) {
                console.log(data);
            });
        }
    };
    ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 45, vars: 4, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-4"], [1, "contact-info"], [1, "wow", "fadeInUp"], ["href", "mailto:info@singhmoversandpackers.com"], [1, "col-md-8"], ["id", "contactForm", "method", "post", "action", "javascript:", 1, "contact-form", "mt-6", 3, "formGroup", "ngSubmit"], [1, "messages"], [1, "column", "col-md-6"], [1, "form-group"], ["formControlName", "inputName", "type", "text", "name", "inputName", "id", "inputName", "placeholder", "Your name", "required", "required", "data-error", "Name is required.", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "help-block", "with-errors"], ["formControlName", "email", "type", "email", "id", "email", "name", "email", "placeholder", "Email address", "required", "required", "data-error", "Email is required.", 1, "form-control"], [1, "column", "col-md-12"], ["formControlName", "subject", "type", "text", "id", "subject", "name", "subject", "placeholder", "Subject", "required", "required", "data-error", "Subject is required.", 1, "form-control"], ["formControlName", "message", "name", "message", "id", "message", "rows", "3", "placeholder", "Message", "required", "required", "data-error", "Message is required.", 1, "form-control"], ["type", "submit", "name", "submit", "id", "submit", "value", "Submit", 1, "btn", "btn-default"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.457109291748!2d150.87172681501116!3d-33.6712261807113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129e65427c649f%3A0x116cc7278fc1c467!2s43%20Denise%20Cres%2C%20Riverstone%20NSW%202765!5e0!3m2!1sen!2sau!4v1653970799688!5m2!1sen!2sau", "width", "1070", "height", "500", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Get In Touch");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Let's talk about everything!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Don't like forms? Send me an ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ". \uD83D\uDC4B");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_15_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ContactComponent_div_21_Template, 2, 1, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ContactComponent_div_26_Template, 3, 2, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ContactComponent_div_31_Template, 2, 1, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "textarea", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Send Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "iframe", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.inputName == null ? null : ctx.f.inputName.touched) && (ctx.f == null ? null : ctx.f.inputName == null ? null : ctx.f.inputName.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.touched) && (ctx.f == null ? null : ctx.f.email == null ? null : ctx.f.email.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.f == null ? null : ctx.f.subject == null ? null : ctx.f.subject.touched) && (ctx.f == null ? null : ctx.f.subject == null ? null : ctx.f.subject.invalid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ContactComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
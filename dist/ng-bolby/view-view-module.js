(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "B4v+":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-routing.module */ "ffxz");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component */ "FJD2");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ViewModule });
    ViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ViewModule_Factory(t) { return new (t || ViewModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewRoutingModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ]] });
    return ViewModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewModule, { declarations: [_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _view_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "FJD2":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config */ "K7hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.service */ "QpnW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sections_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/auth.service */ "HkD1");
/* harmony import */ var _components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.directive */ "RX07");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/home/home.component */ "sWZ+");
/* harmony import */ var _components_sections_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/user/user.component */ "IN/g");
/* harmony import */ var _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/about/about.component */ "RntK");
/* harmony import */ var _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/services/services.component */ "cpwU");
/* harmony import */ var _components_sections_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/gallery/gallery.component */ "sRMV");
/* harmony import */ var _components_sections_quote_quote_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/quote/quote.component */ "639M");
/* harmony import */ var _components_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/testimonials/testimonials.component */ "B/bl");
/* harmony import */ var _components_sections_admin_enquiry_message_enquiry_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/admin/enquiry-message/enquiry-message.component */ "Db1w");
/* harmony import */ var _components_sections_admin_quote_requests_quote_requests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/sections/admin/quote-requests/quote-requests.component */ "hHwi");
/* harmony import */ var _components_sections_admin_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sections/admin/user-details/user-details.component */ "B+xq");
/* harmony import */ var _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/sections/contact/contact.component */ "xp7a");


















function ViewComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-about");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-testimonials", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("themeType", ctx_r5.themeConfig.themeType);
} }
function ViewComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-enquiry-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-quote-requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-user-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["SECTION"]; };
var _c1 = function (a0) { return { "light": a0 }; };
var ViewComponent = /** @class */ (function () {
    function ViewComponent(scrollSpy, activatedRoute, auth) {
        this.scrollSpy = scrollSpy;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_0__["Config"].config;
        console.log(this.themeConfig);
    }
    ViewComponent.prototype.ngOnInit = function () { };
    ViewComponent.prototype.onSectionChange = function (sectionId) {
        this.currentSection = sectionId;
        this.scrollSpy.nextCount(sectionId);
    };
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_sections_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 14, vars: 16, consts: [["id", "parentDiv", "scrollSpy", "", 1, "main-content", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "home", "d-flex", "align-items-center", 3, "ngClass"], [1, "w-100", 3, "themeType"], ["id", "user", 4, "ngIf"], ["id", "about", 4, "ngIf"], ["id", "services", 4, "ngIf"], ["id", "gallery", 4, "ngIf"], ["id", "quote", 4, "ngIf"], ["id", "testimonials", 4, "ngIf"], ["id", "enquiry", 4, "ngIf"], ["id", "quote-requests", 4, "ngIf"], ["id", "user-details", 4, "ngIf"], ["id", "contact", 4, "ngIf"], [1, "spacer-96"], ["id", "user"], ["id", "about"], ["id", "services"], ["id", "gallery"], ["id", "quote"], ["id", "testimonials"], [3, "themeType"], ["id", "enquiry"], ["id", "quote-requests"], ["id", "user-details"], ["id", "contact"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sectionChange", function ViewComponent_Template_div_sectionChange_0_listener($event) { return ctx.onSectionChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-home", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewComponent_section_3_Template, 2, 0, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ViewComponent_section_4_Template, 2, 0, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewComponent_section_5_Template, 2, 0, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ViewComponent_section_6_Template, 2, 0, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewComponent_section_7_Template, 2, 0, "section", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewComponent_section_8_Template, 2, 1, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewComponent_section_9_Template, 2, 0, "section", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ViewComponent_section_10_Template, 2, 0, "section", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ViewComponent_section_11_Template, 2, 0, "section", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ViewComponent_section_12_Template, 2, 0, "section", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.themeConfig.themeType === "light"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated && !ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAdmin);
        } }, directives: [_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollSpyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_sections_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], _components_sections_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"], _components_sections_quote_quote_component__WEBPACK_IMPORTED_MODULE_12__["QuoteComponent"], _components_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialsComponent"], _components_sections_admin_enquiry_message_enquiry_message_component__WEBPACK_IMPORTED_MODULE_14__["EnquiryMessageComponent"], _components_sections_admin_quote_requests_quote_requests_component__WEBPACK_IMPORTED_MODULE_15__["QuoteRequestsComponent"], _components_sections_admin_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"], _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ViewComponent;
}());



/***/ }),

/***/ "ffxz":
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.component */ "FJD2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"]
    }
];
var ViewRoutingModule = /** @class */ (function () {
    function ViewRoutingModule() {
    }
    ViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewRoutingModule });
    ViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ViewRoutingModule_Factory(t) { return new (t || ViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ViewRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=view-view-module.js.map
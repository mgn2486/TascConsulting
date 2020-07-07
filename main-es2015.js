(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>customer-profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>customer-footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-toolbar class=\"toolbar-container\" color=\"primary\">\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                Current User -  <span style=\" font-size: 0.8em;\">Welcome: {{firstName}} {{lastName}} {{initials}}</span>\n            </div>\n        </div>\n    </mat-toolbar>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row col-lg\">\n        <app-customer-header  [firstName] = \"firstName\"  [lastName] = \"lastName\"  [initials] = \"initials\"></app-customer-header>\n    </div>\n</div>\n<mat-sidenav-container>\n  <mat-sidenav mode=\"push\" [(opened)]=\"opened\">\n  <mat-nav-list>\n     <app-customer-sidebar></app-customer-sidebar>\n  </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n  <mat-toolbar color=\"primary\">\n      <span class=\"MyMenuIcon\">\n          <button (click)=\"opened=!opened\">\n          <mat-icon matPrefix >reorder</mat-icon>\n          Menu\n          </button>\n      </span>\n      <span style=\"margin-left: 20px;\">Tasc Training Member</span> \n      <span class=\"MylogoutIcon\">\n          <button mat-icon-button><mat-icon matPrefix (click)=\"onLogout()\" >power_settings_new</mat-icon></button>\n      </span>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n  </mat-sidenav-content>\n  <div class=\"row\" style=\"margin: 5px;\">\n  <div class=\"col-lg-12\">\n      <app-customer-footer></app-customer-footer>\n  </div>\n  </div>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column\" style=\"background: lightsteelblue; margin-left: 5px;\">\n  <div class=\"p-1 align-self-center my-flex-item\"><h4>Menu</h4></div>\n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-home\"></i><a routerLink=\"/admin/doctors\"> Profile</a></div> \n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-film\"></i><a routerLink=\"/women-gallery\">  Appointments</a></div>\n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-users\"></i><a routerLink=\"/users\">Send Mail</a></div>\n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-cogs\"></i><a routerLink=\"/account-settings\"> Account Settings</a></div>\n  <br>\n  <div class=\"p-2 align-self-center my-flex-item\"><span class=\"btn btn-primary\"><i class=\"fa fa-angle-double-left\"></i> <i class=\"fa fa-angle-double-left\"></i></span></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=row>\r\n      <div class=\"col-xs-12 col-lg-12\">\r\n        <h2>About Us</h2>\r\n        <hr class=\"section-hr-line\">\r\n      </div>\r\n    </div>\r\n    <div class=row>\r\n      <div class=\"col-xs-12\">\r\n        <p>\r\n          Tasc Business Consulting and training is a 100% black owned company. We specialize in training, business consulting, and research. \r\n          We offer training to government departments, municipalities, private institutions and NGOs.\r\n           <br><br>\r\n           We offer flexibility to our clients by offering both in-house and offsite training. We have build a network facilitators in all the \r\n           provinces in South Africa and beyond the borders for your convenience and accessibility. Our flexibility and desire to meet client \r\n           needs means we can provide courses anytime, anywhere and for any number. We strive for quality and excellence through offering practical \r\n           trainings.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=row>\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n          <img src=\"assets/images/aboutus/about_1.jpg\" width=\"100%\" class=\"img-responsive img-thumbnail\" />\r\n        </div>\r\n        <div class=\"col-xs-12 col-lg-8\">\r\n          <p> We are recognized for our reliability and our years of experience within the industry has given us the \r\n              knowledge that is needed to ensure that jobs  are run professionally, to schedule and are cost effective. This gives our \r\n              clients comfort, confidence and less stress when engaging in our services. Our highly skilled facilitators are backed by \r\n              a professional administration team which further enhances our overall services. We take pride in our team that possesses \r\n              a judicious blend of knowledge in training, business consulting and research. We strive for quality and excellence-to be \r\n              above the rest. \r\n          </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n          <h3>OUR MISSION</h3>\r\n          <p>\r\n            Our mission as an organization is to provide hands-on and pertinent business consulting and training that positively impact \r\n            the society and equip employees with relevant skills for their personal development which will translate to high productivity \r\n            in the organization.\r\n          </p>\r\n          <h3>OUR VISION</h3>\r\n          <p>\r\n            Our vision is to excel in what we do and be above the rest in offering our clients with exceptional training and consulting \r\n            ervices. We aim to be one of the biggest global firm for training and business consulting in South Africa and beyond our borders.\r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <h3>CORE VALUES</h3>\r\n        </div>\r\n    </div> \r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n          <p>\r\n            At Tasc business consulting and training we see things differently. We see our strengths in the quality of our people and our \r\n            genuine relationships with clients, partners and communities. We see our success linked to our ability to deliver certainty \r\n            through consistent performance. We see our future shaped by all that has made us successful in the past.\r\n          </p>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n          <img src=\"assets/images/aboutus/about_2.jpg\" width=\"100%\" class=\"img-responsive img-thumbnail\" />\r\n      </div>\r\n    </div>\r\n        \r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n          <h4>OUR BELIEF IS DRIVEN BY EMBEDDED VALUES</h4>\r\n          <div class=\"col-xs-12\">\r\n            <p>\r\n                &nbsp;TASC is focused on providing a conducive environment for both our employees and clients that is driven & supported by the following core values;\r\n            </p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>INTEGRITY</small></h4>\r\n          <p>Its in all that we do</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>FAIRNESS</small></h4>\r\n          <p>And concern for our employees</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>CORPORATE CITIZENSHIP</small></h4> \r\n          <p>To the communities within which we operate</p>\t\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>EXCELLENCE</small> </h4>\r\n          <p>To our products, services and initiatives</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>TRANSPARENCY</small></h4>\r\n          <p>To our employees and clients</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>SHARING</small></h4>\r\n          <p>Our success</p>\r\n          </div>            \r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-lg-12\">\r\n          <img src=\"assets/images/aboutus/base_2.jpg\" width=\"100%\" class=\"img-responsive img-thumbnail\"/>\r\n      </div>\r\n    </div>\r\n        \r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home/admin-home.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home/admin-home.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin-home works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-footer/admin-footer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-footer/admin-footer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin-footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-header/admin-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-header/admin-header.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <div class=\"row\">\n        <div class=\"col-lg\">\n            User Profile <br>\n            <span style=\" font-size: 0.8em;\">Welcome: {{firstName}} {{lastName}} {{initials}}</span>\n        </div>\n    </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row col-lg\">\n      <app-admin-header  [firstName] = \"firstName\"  [lastName] = \"lastName\"  [initials] = \"initials\"></app-admin-header>\n    </div>\n  </div>\n  <mat-sidenav-container>\n      <mat-sidenav mode=\"push\" [(opened)]=\"opened\">\n        <mat-nav-list>\n          <app-admin-sidebar></app-admin-sidebar>\n        </mat-nav-list>\n      </mat-sidenav>\n  \n      <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n            <span class=\"MyMenuIcon\">\n              <button (click)=\"opened=!opened\">\n                <mat-icon matPrefix >reorder</mat-icon>\n                Menu\n              </button>\n            </span>\n            <span style=\"margin-left: 20px;\">Abour-Medical Administration</span> \n            <span class=\"MylogoutIcon\">\n                <button mat-icon-button><mat-icon matPrefix (click)=\"onLogout()\" >power_settings_new</mat-icon></button>\n            </span>\n        </mat-toolbar>\n        <router-outlet></router-outlet>\n      </mat-sidenav-content>\n  \n      <div class=\"row\" style=\"margin: 5px;\">\n        <div class=\"col-lg-12\">\n          <app-admin-footer></app-admin-footer>\n        </div>\n      </div>  \n  \n  </mat-sidenav-container>\n\n    \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-sidebar/admin-sidebar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-sidebar/admin-sidebar.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin-sidebar works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n      <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"assets/images/banner/banner_1.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/banner/banner_2.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/banner/banner_3.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n  </div>\n  <br>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h4>CONTACT US</h4>  \r\n<hr class=\"section-hr-line\">\r\n<p>Please use any of the following options</p>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-8\">\r\n      <mat-card style=\"margin-bottom: 15px;\"  color=\"primary\">\r\n          <mat-card-header  color=\"primary\">\r\n             <mat-card-title> <h4 class=\"site-text\">Send Us a Message</h4></mat-card-title>\r\n             <hr>\r\n         </mat-card-header>\r\n         <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n         <mat-card-content>\r\n          <form [formGroup]=\"ContactForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(ContactForm)\" (blur)=\"logValidationErrors()\">\r\n                <div class=\"input-field-class\">\r\n        \r\n                  <div class=\"row\">\r\n                    <mat-form-field  class=\"col-12\">\r\n                      <mat-label>Full Name</mat-label>\r\n                      <input matInput placeholder=\"Full Name\" #fullName ngModel formControlName=\"fullName\" (blur)=\"logValidationErrors()\">\r\n                      <mat-icon matPrefix>person_outline</mat-icon>\r\n                      <mat-error *ngIf=\"formErrors.fullName\"><b>{{formErrors.fullName}}</b></mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row\">\r\n                    <mat-form-field  class=\"col\">\r\n                      <mat-label>Email Address</mat-label>    \r\n                      <input matInput placeholder=\"Email Address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\r\n                      <mat-icon matPrefix>mail</mat-icon>\r\n                      <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row\">\r\n                    <mat-form-field class=\"col\">\r\n                      <mat-label>Subject</mat-label>      \r\n                      <input matInput placeholder=\"Subject\" #subject ngModel formControlName=\"subject\" (blur)=\"logValidationErrors()\">\r\n                      <mat-icon matPrefix>mail</mat-icon>\r\n                      <mat-error *ngIf=\"formErrors.subject\"><b>{{formErrors.subject}}</b></mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row\">\r\n                      <mat-form-field class=\"col stretch-height\" >\r\n                          <mat-label>Message</mat-label>\r\n                          <textarea matInput rows=\"10\" placeholder=\"Message\" formControlName=\"message\" (blur)=\"logValidationErrors()\"></textarea>\r\n                          <mat-error *ngIf=\"formErrors.message\"><b>{{formErrors.message}}</b></mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <mat-progress-spinner *ngIf=\"isLoading\" style=\"margin:0 auto;\" mode=\"indeterminate\" diameter='20' strokeWidth='50'></mat-progress-spinner>\r\n                  </div>\r\n        \r\n                  <div class=\"row s12\">\r\n                    <button color=\"primary\" [disabled]=\"!ContactForm.valid\" mat-raised-button>Send - Message</button>\r\n                    \r\n                  </div>\r\n                </div>\r\n             </form>\r\n         </mat-card-content>\r\n        </mat-card> \r\n    </div>\r\n    <div class=\"col-12 col-md-4\">\r\n      <h4>Call Us</h4>\r\n    <hr>\r\n    <p>\r\n      <b>Landline : </b> +27 (0)31 261 1907 <br>\r\n      <b>Mobile : </b>+27 (0)78 253 9442  <br>\r\n      <b>Email  : </b> info@tascconsulting.co.za <br>       \r\n  \r\n      <br>\r\n      tau@tascconsulting.co.za\r\n      <br>\r\n      info@tascconsulting.co.za\r\n      <br>       \r\n    </p>\r\n    <br>\r\n    <h4>Physical Address : </h4>\r\n    <hr>\r\n    <p> \r\n      1 Helston Road <br>Manor Gardens <br>Durban,<br> 4001     \r\n    </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\r\n    <h4>Send Us a Message</h4>\r\n    <hr>      \r\n    <form [formGroup]=\"ContactForm\" novalidate>\r\n      \r\n        <div class=\"form-group\">\r\n            <label>Full Name:</label>\r\n            <input class=\"form-control\" formControlName=\"FullName\" type=\"text\">\r\n        </div>        \r\n        <div *ngIf=\"ContactForm.controls['FullName'].invalid && (ContactForm.controls['FullName'].dirty || ContactForm.controls['FullName'].touched)\" class=\"alert alert-danger\">\r\n           <div *ngIf=\"ContactForm.controls['FullName'].errors.required\">\r\n              Your full name is required.\r\n           </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Your Email:</label>\r\n            <input class=\"form-control\" formControlName=\"EmailFrom\" type=\"text\">\r\n        </div>        \r\n        <div *ngIf=\"ContactForm.controls['EmailFrom'].invalid && (ContactForm.controls['EmailFrom'].dirty || ContactForm.controls['EmailFrom'].touched)\" class=\"alert alert-danger\">\r\n           <div *ngIf=\"ContactForm.controls['EmailFrom'].errors.required\">\r\n              Your email is required.\r\n           </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Subject To:</label>\r\n            <input class=\"form-control\" formControlName=\"Subject\" type=\"text\">\r\n        </div>\r\n        <div *ngIf=\"ContactForm.controls['Subject'].invalid && (ContactForm.controls['Subject'].dirty || ContactForm.controls['Subject'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"ContactForm.controls['Subject'].errors.required\">\r\n              Subject is required.\r\n            </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group\">\r\n            <label>Message :</label>\r\n            <textarea class=\"form-control\" formControlName=\"Message\" type=\"textarea\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div *ngIf=\"ContactForm.controls['Message'].invalid && (ContactForm.controls['Message'].dirty || ContactForm.controls['Message'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"ContactForm.controls['Message'].errors.required\">\r\n              Message is required.\r\n            </div>\r\n        </div>\r\n  \r\n        <button type=\"submit\"\r\n            [disabled]=\"ContactForm.pristine || ContactForm.invalid\" class=\"btn btn-success\" (click)= 'SendMail()'>\r\n            Send Mail\r\n        </button>\r\n        <div class=\"form-group message\">\r\n            <p style=\" text-align: center; font-weight: bold;\" [style.color]=\"hasErrors ? 'red': 'green'\">\r\n              {{ responseSent }}\r\n            </p>\r\n        </div>\r\n         <div *ngIf=\"isLoading\" class=\"relative\">\r\n            <app-spinner></app-spinner>\r\n        </div>          \r\n    </form>\r\n    <br />\r\n    \r\n     <p>Form value: {{ emailUsForm.value | json }}</p>\r\n    <p>Form status: {{ emailUsForm.status | json }}</p>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n    <h4>Call Us</h4>\r\n    <hr>\r\n    <p>\r\n      <b>Landline : </b> +27 (0) 31 261 1907 <br> <b>Or     : </b> +27 (0) 31 829 9130 <br>\r\n      <b>Mobile : </b>+27 (0) 78 253 9442  <br>\r\n      <b>Or     : </b>+27 (0) 65 822 3164  <br><br>\r\n      <b>Email  : </b>tau@tascconsulting.co.za / info@tascconsulting.co.za  <br>       \r\n    </p>\r\n    <br>\r\n    <h4>Physical Address : </h4>\r\n    <hr>\r\n    <p>\r\n      1 Helston Road,<br> Westridge,<br> Berea,<br>Durban, <br> 4091      \r\n    </p>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <h4>Find Us</h4>\r\n  <hr>\r\n  <br>\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <p>\r\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\r\n  </p>\r\n  </div>\r\n  \r\n\r\n</div> -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" id=\"footer\" >\r\n    <div class=\"container\" style=\"padding:10px;\">\r\n        <div class=\"container\">\r\n              <div id=\"footer\" class=\"row\" style=\"margin-top: 50px;\">\r\n                <div class=\"col-lg-12 col-xs-12\">\r\n                <hr class=\"one\">\r\n                </div>\r\n\r\n                  <div class=\"col-lg-4 col-xs-12\">\r\n                      <p>OUR VISION</p>               \r\n                      <hr class=\"section-hr-line\"/>\r\n                      <p>Our vision is to excel in what we do and be above the rest in offering our clients with exceptional training and consulting \r\n            ervices. We aim to be one of the biggest global firm for training and business consulting in South Africa and beyond our borders.\r\n                      </p>       \r\n                  </div>\r\n              \r\n                  <div class=\"col-lg-4 col-xs-12  \">\r\n                      <p>OUR MISSION</p>\r\n                      <hr class=\"section-hr-line\"/>\r\n                      <p>\r\n                          <b>TASC Consulting</b> is committed to provide hands-on and pertinent business consulting and training that positively impact \r\n                          the society and equip employees with relevant skills for their personal development which will translate to high productivity \r\n                          in the organization.\r\n                      </p>   \r\n                  </div>\r\n              \r\n                  <div class=\"col-lg-4 col-xs-12  \">\r\n                      <p>CONTACT US</p>\r\n                      <hr class=\"section-hr-line\"/> \r\n                      <p>\r\n                        For any information regarding the companies services. </p>                   \r\n                       <div class=\"row\">\r\n                           <div class=\"col-lg-4\">\r\n                           <p>   Visit Us At :</p> \r\n                           </div>\r\n                           <div class=\"col-lg-8\">\r\n                              <p>1 Helston Road,<br> Westridge, Berea,<br>Durban, 4091.</p>\r\n                          </div>\r\n                       </div>  \r\n  \r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                           <p> \r\n                             <b>Landline : </b> +27 (0) 31 261 1907 <br>\r\n                             <b>Mobile : </b>+27 (0) 78 253 9442  <br>\r\n                             <b>Or     : </b>+27 (0) 65 822 3164  <br>\r\n                             <b>Email  : </b> info@tascconsulting.co.za <br> \r\n                           </p> \r\n                        </div>\r\n                      </div>                              \r\n                                                               \r\n                  </div>  \r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                    <p> &copy; TASC - Business Consultancy : Copyright &copy; 2020 - All rights reserved</p>\r\n                </div>\r\n              </div>\r\n          </div>\r\n  \r\n    </div>  \r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forbiden/forbiden.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forbiden/forbiden.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>403 - ACCESS DENIED</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"assets/images/403.png\" alt=\"Access Denied\">\n        <mat-card-content>\n            <p>You don't have the permission to access this resource.</p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button>Close</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"column\" fxFlexAlign=\"stretch\">\r\n <div fxFlexAlign=\"center\">\r\n   <h3>Welcome to TASC - Consulting</h3>\r\n </div>\r\n <app-banner></app-banner>\r\n <div class=\"row\">\r\n        <div class=\"col-sm\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"example-header-image\"></div>\r\n                    <mat-card-title>Programmes</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <p>\r\n                        TASC training programmes assist our clients to enable and empower employees to become competitive differentiators \r\n                        for their company. WE positively impact the society and equip employees with relevant skills for their personal \r\n                        development which will translate to high productivity in the organization\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                  <button class=\"card-button\" mat-icon-button color=\"primary\">\r\n                    <mat-icon>favorite</mat-icon> Like\r\n                  </button>\r\n                  <button class=\"card-button\" mat-button color=\"accent\">Share</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n\r\n        <div class=\"col-sm\" class=\"col-md\">\r\n            <mat-card>\r\n                <mat-card-header >\r\n                    <div mat-card-avatar class=\"example-header-image\"></div>\r\n                    <mat-card-title>Courses</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/home/home_3.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <p>\r\n                        We offer a wide range of courses across all SETAs, from one week to one year courses. We are\r\n                        accredited with over 20 qualifications and over 200 short courses. All our courses are part-time\r\n                        based, offered either face to face or online. For more information on other range of courses not\r\n                        listed above please kindly contact our offices.\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                   <button class=\"card-button\" mat-icon-button color=\"primary\">\r\n                     <mat-icon>favorite</mat-icon> Like\r\n                   </button>\r\n                   <button class=\"card-button\" mat-button color=\"accent\">Share</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <mat-card-title>Business Consulting</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/home/home_1.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <b>We Do it ALL</b><br>\r\n                        <ul>\r\n                            <li>You want to register a company? </li>\r\n                            <li>You are a startup and want to have all compliance documents? </li>\r\n                            <li>You want to improve and make your supply chain efficient and save money? </li>\r\n                            <li>You want to expand into new markets? </li>\r\n                            <li>You want to launch a new product/solution? </li>\r\n                        </ul>\r\n                    <p> <b>DID YOU KNOW: Research and Data matters?</b>    <br>\r\n                            We are experts in research and data analysis to identify and recommend the\r\n                            right strategy for your business and put it into action! We will grow your\r\n                            business!\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                   <button class=\"card-button\" mat-icon-button color=\"primary\">\r\n                     <mat-icon>favorite</mat-icon> Like\r\n                   </button>\r\n                   <button class=\"card-button\" mat-button color=\"accent\">Share</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n     </div>\r\n\r\n    <div class=\"row\"> \r\n       <br> \r\n       <div class=\"col-lg content\">\r\n         <img src=\"assets/images/home/try_me_2.jpg\" class=\"img-responsive\"/>\r\n         <button class=\"btn\" color=\"warn\"  routerLink=\"/contactus\">Enroll</button>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\"> \r\n       <br> \r\n       <div class=\"col-lg\">\r\n         <img src=\"assets/images/home/try_me_3.jpg\" width=\"100%\" class=\"img-responsive\"/>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\"> \r\n        <br> \r\n        <div class=\"col-lg\">\r\n            <button mat-raised-button color=\"warn\" class=\"bottom-button-class\" routerLink=\"/contactus\">\r\n                <br>\r\n                    <mat-icon>school</mat-icon>\r\n                         ....... ENROLL NOW !!!....... \r\n                         <mat-icon>school</mat-icon>\r\n\r\n                         <br>\r\n                         <span style=\"color: darkblue; text-transform: uppercase; font-weight: bold;\">National Certificate In Banking <br>\r\n                         Duration : 1 Year - Online</span><br>\r\n                         <span>DURATION: 1 YEAR ONLINE </span><br>\r\n                         <span  style=\"color: darkblue;\">STUDY PART-TIME </span>\r\n\r\n\r\n                    <br> \r\n                    <mat-icon>favorite</mat-icon>\r\n                         ....... ENQUIRE  !!!......\r\n                    <mat-icon>favorite</mat-icon>\r\n                <br>\r\n            </button>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-md\">\r\n            <img src=\"assets/images/home/rsz_flyer_1a.jpg\" width=\"100%\" class=\"imag-responsive\" alt=\"Photo of a Shiba Inu\">\r\n        </div>\r\n        <div class=\"col-md\">\r\n            <img src=\"assets/images/home/rsz_flyer_1b.jpg\" width=\"100%\" class=\"imag-responsive\" alt=\"Photo of a Shiba Inu\">\r\n        </div> -->\r\n    </div>\r\n\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\n   <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n      <ng-content></ng-content>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n    </div>\n    <div>\n        <a routerLink=\"/home\">Tasc-Consulting</a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n            <li>\n                <a routerLink=\"/aboutus\">About-Us</a>\n            </li>\n            <li>\n                <mat-list-item [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>unfold_more</mat-icon>\n                    <a matline>Tasc-Services</a>\n                  </mat-list-item>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item routerLink=\"/courses\" (click)=\"onSidenavClose()\">Courses</button>\n                    <button mat-menu-item routerLink=\"/tutorials\" (click)=\"onSidenavClose()\">Tutorials</button>\n                  </mat-menu>\n            </li>\n            <li>\n                <a routerLink=\"/images\">Tasc-Gallery</a>\n            </li>\n            <li>\n                <a routerLink=\"/tascusers\">Members-Area</a>\n            </li>\n            <li>\n                <a routerLink=\"/team\">Management</a>\n            </li>\n            <li>\n                <a routerLink=\"/contactus\">Contact-Us</a>\n            </li>\n        </ul>\n    </div>\n  </mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n  <a mat-list-item routerLink=\"/home\" (click)=\"onSidenavClose()\">\n    <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n  </a>\n  <a mat-list-item routerLink=\"/aboutus\" (click)=\"onSidenavClose()\">\n    <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">About-Us</span>\n  </a>\n\n  <mat-list-item [matMenuTriggerFor]=\"menu\">\n    <mat-icon>unfold_more</mat-icon>\n    <a matline>Tasc-Services</a>\n  </mat-list-item>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/courses\" (click)=\"onSidenavClose()\">Courses</button>\n    <button mat-menu-item routerLink=\"/tutorials\" (click)=\"onSidenavClose()\">Tutorials</button>\n  </mat-menu>\n\n\n  <a mat-list-item routerLink=\"/images\" (click)=\"onSidenavClose()\">\n    <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Tasc-Gallery</span>\n  </a>\n  <a mat-list-item routerLink=\"/tascusers\" (click)=\"onSidenavClose()\">\n    <mat-icon>group</mat-icon><span class=\"nav-caption\">Members-Area</span>\n  </a>\n  <a mat-list-item routerLink=\"/team\" (click)=\"onSidenavClose()\">\n    <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Management</span>\n  </a>\n  <a mat-list-item routerLink=\"/contactus\" (click)=\"onSidenavClose()\">\n    <mat-icon>local_post_office</mat-icon><span class=\"nav-caption\">Contact-Us</span>\n  </a>  \n</mat-nav-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-list/course-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-list/course-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <br>\r\n    <mat-card *ngFor='let course of CourseList; let i = index' class=\"col-lg-3 col-md-3 col-sm-12\" style=\"margin: 10px;\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>{{course.name}}</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content style=\"text-align: justify;\">\r\n            \r\n                {{course.description[0]  | slice: 0: 100 }}....<a href=\"\" (click)=\"MoreCourseInfo()\">..Read More</a>\r\n            \r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button>LIKE</button>\r\n            <button mat-button>SHARE</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-navigation/course-navigation.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-navigation/course-navigation.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <div fxHide.gt-xs>\n        <button mat-icon-button [matMenuTriggerFor]=\"aboveMenu\">\n            <mat-icon>menu</mat-icon><span style=\"font-size: 20px; margin-left: 10px;\"><b>Courses List</b></span>\n        </button>\n        <mat-menu #aboveMenu=\"matMenu\" yPosition=\"below\">\n            <span  *ngFor=\"let dept of departments\">\n                <button mat-menu-item [routerLink]=\"['/courses', dept.department]\">{{dept.department}}</button>\n            </span>          \n        </mat-menu>\n    </div>\n    <div fxFlex fxLayout  fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"5px\" class=\"navigation-items\" style=\"list-style-type:none\">\n            <div class=\"row\">\n                <li *ngFor=\"let dept of departments\"  class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <button  mat-raised-button style=\"margin: 4px;\" color=\"primary\" [routerLink]=\"['/courses', dept.department]\">{{dept.department}}</button>\n                </li>\n            </div>\n        </ul>\n        <hr>\n    </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/courses/courses.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/courses/courses.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3>TASC - Courses</h3>\n  <hr class=\"section-hr-line\">\n\n  <p>\n        We offer a wide range of courses across all SETAs, from one week to one year courses. We are accredited with over 20 qualifications and over 200 short courses. All our courses are part-time based, offered either face to face or online. For more information on other range of courses not listed above please kindly contact our offices.\n  </p>\n  <h4>Our Qualification Programmes</h4>\n\n  <br>\n      <h5>We are fully acredited in the following courses with <b>BANK SETA</b></h5> \n  <br>\n    <p>  \n        <b>\n            <ul>\n                <li>12086 - National Certificate: Banking</li>\n            </ul>\n        </b>\n    </p>\n  <br>\n      <h5>We are fully acredited in the following courses with <b>LG SETA</b></h5> \n  <br>               \n    <p>  \n        <b>\n            <ul>\n                <li>57823 - National Certificate: Ward Committee Governance</li>\n                <li>50081 - Further Education and Training Certificate: Leadership</li>\n                <li>49605 - National Certificate: Environmental Practice</li>\n                <li>49554 - National Diploma: Public Finance Management and Administration</li>\n                <li>48965 - Certificate: Municipal Financial Management</li>\n            </ul>\n        </b>\n    </p>    \n <br>\n    <h5>We are fully acredited in the following courses with <b>SERVICES SETA</b></h5> \n <br>\n    <p>  \n        <b>\n            <ul>\n                <li>21787 - National Certificate: Funeral Services Practice</li>\n                <li>66249 - Further Education and Training Certificate: New Venture Creation </li>\n                <li>61595 - Further education and training certificate: Business Administration Services</li>\n                <li>50080 - Further Education and Training Certificate: Project management </li>\n            </ul>\n        </b>\n    </p>\n<br>\n\n<br>\n    <h5>We are fully acredited in the following courses with <b>MICT SETA</b></h5> \n <br>\n    <p>  \n        <b>\n            <ul>\n                <li>49077 - National Certificate: Information Technology: End user computing</li>\n            </ul>\n        </b>\n    </p>\n<br>\n\n  <h4>Short Skills Programmes</h4>\n  <br>\n  <p>We are accredited with over 20 qualifications across all SETAS and over 200 short courses. Below are some of our accredited qualifications. \n    On other qualifications please kindly contact our office. <br><br>\n    <b>Please click on ANY of the following links to see more on each of the categories of courses we offer</b> </p>\n    <br>\n   <app-course-navigation></app-course-navigation> \n   <hr>\n   <app-course-list [department]=department >{{department}}</app-course-list>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/gallery/gallery.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/gallery/gallery.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h4>Our Gallery</h4>\r\n<hr class=\"section-hr-line\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <h4>Places we have been</h4>\r\n        <br>\r\n         <app-image-navigation></app-image-navigation> \r\n         <app-image-list [category]=category >{{category}}</app-image-list>\r\n    </div> \r\n  </div>\r\n</div>\r\n<hr>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-list/image-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-list/image-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <br>\n    <mat-card class=\"custom\" *ngFor='let image of ImageList' class=\"col-lg-3 col-md-3 col-sm-12\" style=\"margin: 10px;\">\n        <!-- <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n        </mat-card-header> -->\n        <mat-card-content>\n            <div class=\"col-sm\">\n                <img src={{image.Src}} class=\"img-responsive\"  height=\"100%\" width=\"100%\"/>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n        </mat-card-actions>\n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-navigation/image-navigation.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-navigation/image-navigation.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"padding-top: 10px;\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button [matMenuTriggerFor]=\"aboveMenu\">\n            <mat-icon>menu</mat-icon> Images List\n        </button>\n        <mat-menu #aboveMenu=\"matMenu\" yPosition=\"below\">\n            <span  *ngFor=\"let categ of imageCategories\">\n                <button mat-menu-item [routerLink]=\"['/courses', categ.Category]\">{{categ.category}}</button>\n            </span>          \n        </mat-menu>\n    </div>\n    <div fxFlex fxLayout  fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"5px\" class=\"navigation-items\" style=\"list-style-type:none\">\n            <div class=\"row\">\n                <li style=\"margin: 10px;\"  class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <button  mat-raised-button style=\"margin: 4px;\" color=\"primary\" [routerLink]=\"['/images', 'all']\">All</button>\n                </li>\n                <li *ngFor=\"let categ of imageCategories\" style=\"margin: 10px;\"  class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <button  mat-raised-button style=\"margin: 4px;\" color=\"primary\" [routerLink]=\"['/images', categ.category]\">{{categ.category}}</button>\n                </li>\n            </div>\n        </ul>\n        <hr>\n    </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-tutorials/tutorials/tutorials.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-tutorials/tutorials/tutorials.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3>TASC - Tutorials</h3>\n  <hr class=\"section-hr-line\">\n\n  <h5>There Is Just No Need To Fail!!</h5>\n    \n  <p>\n    Tasc Business Consulting and Training would like to interest you with the superb services, to elevate you even further with your studies \n    especially during this COVID 19 period. \n    <br>We specialise in helping distance learning and part-time student.\n  </p>\n  <ul>\n    <li>We have 100% success rate in helping students pass their exams and complete their degrees.</li>\n    <li>Flexibility: We will be able to quickly match the services that we offer to your needs.</li>\n    <li>We have experienced tutors most are lecturers in top distance learning colleges in Durban. We know your needs.</li>\n  </ul>\n\n  <p>We focus on the following subjects</p>\n\n  \n\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n      <img src=\"assets/images/courses-images/tutorial_1.jpg\" width=\"100%\" class=\"img-responsive\"/>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n      <ul>\n        <li>Economics</li>\n        <li>Accounting</li>\n        <li>Business management</li>\n        <li>Statistics / Quantitative methods</li>\n        <li>Managerial finance and  many more</li>\n      </ul>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n      <img src=\"assets/images/courses-images/tutorial_3.jpg\" width=\"100%\" class=\"img-responsive\"/>\n    </div>    \n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <mat-card>\n        Contact Us (Insert a whats app button)\n        <br>\n        Tutorials are charged at <b>R 150.00</b> per head per Session  <br>\n        Kindly call me after 09-am weekdays, or send an email at your convenient time to discuss just how effective I can make your studying to be. <br>\n        <b>Cell: </b> +27 (0) 78 253 9442 (call or whats-up).\n      </mat-card>\n    </div>\n  </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h4>Management</h4>\n  <hr class=\"section-hr-line\">\n\n  <div class=\"row\">\n        <div class=\"col-sm\" *ngFor= 'let member of Members'>\n            <mat-card>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>{{member.CoPosition}}</mat-card-title>\n                </mat-card-header>\n                <img mat-card-image src={{member.ImagePath}} alt=\"Photo of a Shiba Inu\">\n                <mat-card-content>\n                    <p><b>{{member.Title}}. {{member.Fname}} {{member.Lname}}</b><br>\n                        {{member.Profile  | slice:0: 100}}....<a href=\"\" (click)=\"MoreInfoOnMember()\">..Read More</a>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <hr>\n                    <button mat-button>Contact</button>\n                    <button mat-button>SHARE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\r\n     <mat-card-header  color=\"primary\">\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Tasc - System Login</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\r\n            <i class=\"material-icons\">error</i> Incorrect username or password\r\n        </div>\r\n        <form [formGroup]=\"TascLoginForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(TascLoginForm)\">\r\n\r\n          <div class=\"input-field-class\">            \r\n            <mat-form-field>\r\n              <mat-label>User name</mat-label>      \r\n              <input matInput placeholder=\"email address\" #username ngModel formControlName=\"username\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.username\"><b>{{formErrors.username}}</b></mat-error>\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field> \r\n              <mat-label>Account Password</mat-label>      \r\n              <input type=\"password\" matInput  #password ngModel formControlName=\"password\" placeholder=\"Password\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.password\"><b>{{formErrors.password}}</b></mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row s12\">\r\n            <button color=\"primary\" [disabled]=\"!TascLoginForm.valid\" mat-raised-button>Sign - In</button>\r\n          </div>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\" color=\"primary\">\r\n  <mat-card-header  color=\"primary\">\r\n     <div mat-card-avatar class=\"example-header-image\"></div>\r\n     <mat-card-title>Tasc - System Registration</mat-card-title>\r\n </mat-card-header>\r\n <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n <mat-card-content>\r\n     <div *ngIf=\"isRegistrationError\" class=\"red-text center error-message\">\r\n         <i class=\"material-icons\">error</i> Incorrect username or password\r\n     </div>\r\n     <form [formGroup]=\"TascRegForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(TascRegForm)\">\r\n        <div class=\"input-field-class\">\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field  class=\"col s4\">\r\n              <mat-label>First name</mat-label>\r\n              <input matInput placeholder=\"First Name\" #firstName ngModel formControlName=\"firstName\"  (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.firstName\"><b>{{formErrors.firstName}}</b></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col s4\">\r\n              <mat-label>Last name</mat-label>\r\n              <input matInput placeholder=\"Last Name\" #lastName ngModel formControlName=\"lastName\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.lastName\"><b>{{formErrors.lastName}}</b></mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field  class=\"col s4\">\r\n              <mat-label>Initials</mat-label>    \r\n              <input matInput placeholder=\"Initials\" #Initials ngModel formControlName=\"Initials\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col s4\">\r\n              <mat-label>Email Address</mat-label>      \r\n              <input matInput placeholder=\"Email address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>mail</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div formGroupName=\"passwordGroup\">\r\n                <mat-form-field  class=\"col s4\">\r\n                  <mat-label>Account Password</mat-label> \r\n                  <input type=\"password\" matInput placeholder=\"Password\" #password ngModel formControlName=\"password\" (blur)=\"logValidationErrors()\">\r\n                  <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n                  <mat-error *ngIf=\"formErrors.password\"><b>{{formErrors.password}}</b></mat-error>\r\n                </mat-form-field> \r\n                <mat-form-field class=\"col s4\">\r\n                  <mat-label>Confirm Password</mat-label> \r\n                  <input type=\"password\" matInput placeholder=\"Confirm-Password\" #confirmPassword ngModel formControlName=\"confirmPassword\" (blur)=\"logValidationErrors()\">\r\n                  <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n                  <mat-error *ngIf=\"formErrors.passwordGroup || formErrors.confirmPassword\">\r\n                    <b>{{formErrors.passwordGroup ? formErrors.passwordGroup : formErrors.confirmPassword}}</b>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row s12\">\r\n            <button color=\"primary\" [disabled]=\"!TascRegForm.valid\" mat-raised-button>Sign - UP</button>\r\n          </div>\r\n\r\n\r\n        </div>\r\n     </form>\r\n </mat-card-content>\r\n</mat-card>\r\n\r\n<!-- <form class=\"col m12 white\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">  \r\n  <div class=\"row\">\r\n    <div class=\"input-field col m12\">\r\n      <input class=\"validate\" type=\"text\" name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"user.UserName\" required>\r\n      <label data-error=\"Required field!\">UserName</label>\r\n    </div>\r\n    <div class=\"input-field col s6\">\r\n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.Password\" required minlength=\"3\">\r\n      <label [attr.data-error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"user.Email\" [pattern]=\"emailPattern\">\r\n      <label data-error=\"Invalid email!\">Email</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s6\">\r\n      <input type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"user.FirstName\">\r\n      <label>First Name</label>\r\n    </div>\r\n    <div class=\"input-field col s6\">\r\n      <input type=\"text\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"user.LastName\">\r\n      <label>Last Name</label>\r\n    </div>\r\n  </div>\r\n  <mat-form-field>\r\n                          <textarea matInput placeholder=\"Textarea\"></textarea>\r\n                        </mat-form-field>\r\n                      \r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Select\">\r\n                              <mat-option value=\"option\">Option</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <button [disabled]=\"!userRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col m12 offset-s2\">\r\n      <div class=\"card primary\">\r\n\r\n        <mat-tab-group mat-stretch-tabs  color=\"primary\">\r\n          <mat-tab label = \"Sign-In\">\r\n            <app-sign-in></app-sign-in>\r\n          </mat-tab>\r\n          <mat-tab label = \"Sign-Up\"> \r\n            <app-sign-up></app-sign-up>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Admin-customer/customer-profile/customer-profile-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Admin-customer/customer-profile/customer-profile-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileRoutingModule", function() { return CustomerProfileRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_customer_admin_layout_customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/customer-admin-layout/customer-main-layout/customer-main-layout.component */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts");
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts");
/* harmony import */ var src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/authGuard/auth.guard */ "./src/app/auth/authGuard/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    { path: 'delegate', component: _layout_customer_admin_layout_customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["CustomerMainLayoutComponent"],
        children: [
            { path: '', component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileComponent"], canActivate: [src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { permittedRoles: ['Customer'] } },
            { path: 'profile', component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileComponent"], canActivate: [src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { permittedRoles: ['Customer'] } }
        ]
    }
];
let CustomerProfileRoutingModule = class CustomerProfileRoutingModule {
};
CustomerProfileRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    })
], CustomerProfileRoutingModule);



/***/ }),

/***/ "./src/app/Admin-customer/customer-profile/customer-profile.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Admin-customer/customer-profile/customer-profile.module.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileModule", function() { return CustomerProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts");
/* harmony import */ var _customer_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-profile-routing.module */ "./src/app/Admin-customer/customer-profile/customer-profile-routing.module.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CustomerProfileModule = class CustomerProfileModule {
};
CustomerProfileModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerProfileRoutingModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
        ]
    })
], CustomerProfileModule);



/***/ }),

/***/ "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2N1c3RvbWVyLXByb2ZpbGUvY3VzdG9tZXItcHJvZmlsZS9jdXN0b21lci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CustomerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileComponent", function() { return CustomerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CustomerProfileComponent = class CustomerProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-customer-profile',
        template: __importDefault(__webpack_require__(/*! raw-loader!./customer-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./customer-profile.component.css */ "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CustomerProfileComponent);



/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-admin-layout.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-admin-layout.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomerAdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAdminLayoutModule", function() { return CustomerAdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-footer/customer-footer.component */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.ts");
/* harmony import */ var _customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-header/customer-header.component */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.ts");
/* harmony import */ var _customer_sidebar_customer_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-sidebar/customer-sidebar.component */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.ts");
/* harmony import */ var _customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-main-layout/customer-main-layout.component */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let CustomerAdminLayoutModule = class CustomerAdminLayoutModule {
};
CustomerAdminLayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerFooterComponent"], _customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_3__["CustomerHeaderComponent"], _customer_sidebar_customer_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["CustomerSidebarComponent"], _customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["CustomerMainLayoutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([]),
        ]
    })
], CustomerAdminLayoutModule);



/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItZm9vdGVyL2N1c3RvbWVyLWZvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFooterComponent", function() { return CustomerFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CustomerFooterComponent = class CustomerFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerFooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-customer-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./customer-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./customer-footer.component.css */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CustomerFooterComponent);



/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItaGVhZGVyL2N1c3RvbWVyLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHeaderComponent", function() { return CustomerHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CustomerHeaderComponent = class CustomerHeaderComponent {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.initials = "";
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], CustomerHeaderComponent.prototype, "firstName", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], CustomerHeaderComponent.prototype, "lastName", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], CustomerHeaderComponent.prototype, "initials", void 0);
CustomerHeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-customer-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./customer-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./customer-header.component.css */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CustomerHeaderComponent);



/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItbWFpbi1sYXlvdXQvY3VzdG9tZXItbWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CustomerMainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMainLayoutComponent", function() { return CustomerMainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/User-Service/user.service */ "./src/app/shared/services/User-Service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CustomerMainLayoutComponent = class CustomerMainLayoutComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUserProfileDetails();
    }
    getUserProfileDetails() {
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res;
            this.firstName = this.userDetails.firstName;
            this.lastName = this.userDetails.lastName;
            this.initials = this.userDetails.initials;
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        localStorage.removeItem('token');
        this.route.navigate(['./login']);
    }
};
CustomerMainLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
CustomerMainLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-customer-main-layout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./customer-main-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./customer-main-layout.component.css */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], CustomerMainLayoutComponent);



/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.css ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItc2lkZWJhci9jdXN0b21lci1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CustomerSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSidebarComponent", function() { return CustomerSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CustomerSidebarComponent = class CustomerSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerSidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-customer-sidebar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./customer-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./customer-sidebar.component.css */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CustomerSidebarComponent);



/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AboutusComponent = class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-aboutus',
        template: __importDefault(__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);



/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeModule", function() { return AdminHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home/admin-home.component.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AdminHomeModule = class AdminHomeModule {
};
AdminHomeModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_2__["AdminHomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([]),
        ]
    })
], AdminHomeModule);



/***/ }),

/***/ "./src/app/admin/admin-home/admin-home/admin-home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home/admin-home.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home/admin-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home/admin-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AdminHomeComponent = class AdminHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home/admin-home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/admin-home/admin-home/admin-home.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AdminHomeComponent);



/***/ }),

/***/ "./src/app/admin/layout/admin-footer/admin-footer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/layout/admin-footer/admin-footer.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1mb290ZXIvYWRtaW4tZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/layout/admin-footer/admin-footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/layout/admin-footer/admin-footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function() { return AdminFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AdminFooterComponent = class AdminFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminFooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-footer/admin-footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-footer.component.css */ "./src/app/admin/layout/admin-footer/admin-footer.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AdminFooterComponent);



/***/ }),

/***/ "./src/app/admin/layout/admin-header/admin-header.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/layout/admin-header/admin-header.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/layout/admin-header/admin-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/layout/admin-header/admin-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AdminHeaderComponent = class AdminHeaderComponent {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.initials = "";
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], AdminHeaderComponent.prototype, "firstName", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], AdminHeaderComponent.prototype, "lastName", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], AdminHeaderComponent.prototype, "initials", void 0);
AdminHeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-header/admin-header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-header.component.css */ "./src/app/admin/layout/admin-header/admin-header.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AdminHeaderComponent);



/***/ }),

/***/ "./src/app/admin/layout/admin-layout.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/layout/admin-layout.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-footer/admin-footer.component */ "./src/app/admin/layout/admin-footer/admin-footer.component.ts");
/* harmony import */ var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-header/admin-header.component */ "./src/app/admin/layout/admin-header/admin-header.component.ts");
/* harmony import */ var _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-sidebar/admin-sidebar.component */ "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _admin_mainlayout_admin_mainlayout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-mainlayout/admin-mainlayout.component */ "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_2__["AdminFooterComponent"], _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__["AdminHeaderComponent"], _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["AdminSidebarComponent"], _admin_mainlayout_admin_mainlayout_component__WEBPACK_IMPORTED_MODULE_5__["AdminMainlayoutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([]),
        ]
    })
], AdminLayoutModule);



/***/ }),

/***/ "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1tYWlubGF5b3V0L2FkbWluLW1haW5sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminMainlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainlayoutComponent", function() { return AdminMainlayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/User-Service/user.service */ "./src/app/shared/services/User-Service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AdminMainlayoutComponent = class AdminMainlayoutComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUserProfileDetails();
    }
    getUserProfileDetails() {
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res;
            this.firstName = this.userDetails.firstName;
            this.lastName = this.userDetails.lastName;
            this.initials = this.userDetails.initials;
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        localStorage.removeItem('token');
        this.route.navigate(['./login']);
    }
};
AdminMainlayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AdminMainlayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-mainlayout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-mainlayout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-mainlayout.component.css */ "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AdminMainlayoutComponent);



/***/ }),

/***/ "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/layout/admin-sidebar/admin-sidebar.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/layout/admin-sidebar/admin-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AdminSidebarComponent = class AdminSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminSidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-sidebar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-sidebar/admin-sidebar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AdminSidebarComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasc-images/gallery/gallery.component */ "./src/app/tasc-images/gallery/gallery.component.ts");
/* harmony import */ var _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasc-courses/courses/courses.component */ "./src/app/tasc-courses/courses/courses.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/authGuard/auth.guard */ "./src/app/auth/authGuard/auth.guard.ts");
/* harmony import */ var _tasc_tutorials_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasc-tutorials/tutorials/tutorials.component */ "./src/app/tasc-tutorials/tutorials/tutorials.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








;





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'tascusers', redirectTo: '/login', pathMatch: 'full' },
    { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"] },
    { path: 'courses', component: _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"] },
    { path: 'courses/:department', component: _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"] },
    { path: 'tutorials', component: _tasc_tutorials_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_12__["TutorialsComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"] },
    { path: 'images', component: _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"] },
    { path: 'images/:category', component: _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"] },
    { path: 'admin', redirectTo: 'admin/home', canActivate: [_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"] }]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 250px;\r\n}\r\n\r\nmain {\r\n    padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/User-Service/user.service */ "./src/app/shared/services/User-Service/user.service.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tasc-images/gallery/gallery.component */ "./src/app/tasc-images/gallery/gallery.component.ts");
/* harmony import */ var _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tasc-courses/courses/courses.component */ "./src/app/tasc-courses/courses/courses.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _auth_Interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/Interceptor/auth.interceptor */ "./src/app/auth/Interceptor/auth.interceptor.ts");
/* harmony import */ var _shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/services/course-service/course.service */ "./src/app/shared/services/course-service/course.service.ts");
/* harmony import */ var _tasc_courses_course_navigation_course_navigation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tasc-courses/course-navigation/course-navigation.component */ "./src/app/tasc-courses/course-navigation/course-navigation.component.ts");
/* harmony import */ var _tasc_courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tasc-courses/course-list/course-list.component */ "./src/app/tasc-courses/course-list/course-list.component.ts");
/* harmony import */ var _tasc_images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tasc-images/image-list/image-list.component */ "./src/app/tasc-images/image-list/image-list.component.ts");
/* harmony import */ var _tasc_images_image_navigation_image_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tasc-images/image-navigation/image-navigation.component */ "./src/app/tasc-images/image-navigation/image-navigation.component.ts");
/* harmony import */ var _shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/services/image-service/image.service */ "./src/app/shared/services/image-service/image.service.ts");
/* harmony import */ var _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forbiden/forbiden.component */ "./src/app/forbiden/forbiden.component.ts");
/* harmony import */ var _admin_admin_home_admin_home_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin-home/admin-home.module */ "./src/app/admin/admin-home/admin-home.module.ts");
/* harmony import */ var _Admin_customer_layout_customer_admin_layout_customer_admin_layout_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Admin-customer/layout/customer-admin-layout/customer-admin-layout.module */ "./src/app/Admin-customer/layout/customer-admin-layout/customer-admin-layout.module.ts");
/* harmony import */ var _Admin_customer_customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Admin-customer/customer-profile/customer-profile.module */ "./src/app/Admin-customer/customer-profile/customer-profile.module.ts");
/* harmony import */ var _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/layout/admin-layout.module */ "./src/app/admin/layout/admin-layout.module.ts");
/* harmony import */ var _tasc_tutorials_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tasc-tutorials/tutorials/tutorials.component */ "./src/app/tasc-tutorials/tutorials/tutorials.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"],
            _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"],
            _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
            _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
            _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_21__["AboutusComponent"],
            _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"],
            _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_23__["CoursesComponent"],
            _team_team_component__WEBPACK_IMPORTED_MODULE_24__["TeamComponent"],
            _tasc_courses_course_navigation_course_navigation_component__WEBPACK_IMPORTED_MODULE_27__["CourseNavigationComponent"],
            _tasc_courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_28__["CourseListComponent"],
            _tasc_images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_29__["ImageListComponent"],
            _tasc_images_image_navigation_image_navigation_component__WEBPACK_IMPORTED_MODULE_30__["ImageNavigationComponent"], _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_32__["ForbidenComponent"], _tasc_tutorials_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_37__["TutorialsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_36__["AdminLayoutModule"], _admin_admin_home_admin_home_module__WEBPACK_IMPORTED_MODULE_33__["AdminHomeModule"],
            _Admin_customer_layout_customer_admin_layout_customer_admin_layout_module__WEBPACK_IMPORTED_MODULE_34__["CustomerAdminLayoutModule"], _Admin_customer_customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_35__["CustomerProfileModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                progressBar: true
            })
        ],
        providers: [_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_31__["ImageService"], _shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_26__["CourseService"], _shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _auth_Interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
                multi: true
            },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_38__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_38__["HashLocationStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/Interceptor/auth.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/Interceptor/auth.interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthInterceptor = class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(succ => { }, err => {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('/user/login');
                }
                else if (err.status == 403)
                    this.router.navigateByUrl('/forbidden');
            }));
        }
        else
            return next.handle(req.clone());
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth/authGuard/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/authGuard/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/User-Service/user.service */ "./src/app/shared/services/User-Service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthGuard = class AuthGuard {
    /**
     *
     */
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token') != null) {
            let roles = next.data['permittedRoles'];
            if (roles) {
                if (this.service.roleMatch(roles))
                    return true;
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
BannerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-banner',
        template: __importDefault(__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], BannerComponent);



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-field-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  /* ::ng-deep .mat-card-header{\r\n  padding-top: 3px;\r\n  background-color: #5f0310 !important;\r\n  color: white;\r\n}  */\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #5f0310 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTs7OztJQUlJOztFQUVKO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0VBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0VBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmllbGQtY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmxvZ2luLWljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXNlY3Rpb257XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiA6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjAzMTAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gICovXHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYwMzEwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudHtcclxuICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_emailService_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/emailService/email.service */ "./src/app/shared/services/emailService/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ContactusComponent = class ContactusComponent {
    constructor(toastr, fb, emailService) {
        this.toastr = toastr;
        this.fb = fb;
        this.emailService = emailService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'fullName': '',
            'emailAddress': '',
            'subject': '',
            'message': ''
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'fullName': {
                'required': 'Full name is required.',
                'minlength': 'Full name must be greater than 2 characters.',
                'maxlength': 'Full name must be less than 100 characters.'
            },
            'emailAddress': {
                'required': 'Email address is required.',
                'minlength': 'Email address address must be greater than 11 characters.',
                'maxlength': 'Email address address must be less than 150 characters.',
                'emailDomain': 'Email address domian should be devine-tech.com'
            },
            'subject': {
                'required': 'Subject is required.',
                'minlength': 'Subject must be greater than 5 characters.',
                'maxlength': 'Subject must be less than 150 characters.',
            },
            'message': {
                'required': 'Message is required.',
                'minlength': 'Message must be greater than 5 characters.',
                'maxlength': 'Message must be less than 150 characters.',
            }
        };
        this.isLoading = false;
        this.hasError = (controlName, errorName) => {
            return this.ContactForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.ContactForm = this.fb.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]),
            mailToAddress: "info@tascconsulting.co.za"
        });
        this.ContactForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.ContactForm);
        });
    }
    logValidationErrors(group = this.ContactForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.logValidationErrors(abstractControl);
            }
        });
    }
    OnSubmit(form) {
        var formData = form.value;
        this.isLoading = true;
        this.emailService.SendMail(formData)
            .subscribe((response) => {
            if (response == 200) {
                this.isLoading = false;
                this.resetForm(form);
                this.toastr.success('Email Successfully Sent !!!', "Success!");
            }
            else {
                this.isLoading = false;
                this.toastr.error('Sorry Error in sending mail...', 'Sending failed.');
            }
        });
    }
    getUserInformation(formData) {
        return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
        };
    }
    resetForm(form) {
        if (form != null)
            form.reset();
        this.contactData = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    }
};
ContactusComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_emailService_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
];
ContactusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contactus',
        template: __importDefault(__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")).default]
    }),
    __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_emailService_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
], ContactusComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Flaired edges, by Tomas Theunissen */\r\n\r\n.one {\r\n    overflow: visible; /* For IE */\r\n    padding: 0;\r\n    height: 30px;\r\n    border: none;\r\n    border-top: medium double #333;\r\n    color: #5f0310;\r\n    text-align: center;\r\n    border-width: 1px 0 0 0;\r\n    border-radius: 20px;\r\n}\r\n\r\n.one:before { /* Not really supposed to work, but does */\r\n    content: \"§\";\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -0.7em;\r\n    font-size: 1.5em;\r\n    padding: 0 0.25em;\r\n    background: white;\r\n    border-color: #5f0310;\r\n    border-width: 0 0 1px 0;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7QUFFdkM7SUFDSSxpQkFBaUIsRUFBRSxXQUFXO0lBQzlCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0EsY0FBYywwQ0FBMEM7SUFDcEQsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmxhaXJlZCBlZGdlcywgYnkgVG9tYXMgVGhldW5pc3NlbiAqL1xyXG5cclxuLm9uZSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRm9yIElFICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbWVkaXVtIGRvdWJsZSAjMzMzO1xyXG4gICAgY29sb3I6ICM1ZjAzMTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLm9uZTpiZWZvcmUgeyAvKiBOb3QgcmVhbGx5IHN1cHBvc2VkIHRvIHdvcmssIGJ1dCBkb2VzICovXHJcbiAgICBjb250ZW50OiBcIsKnXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0wLjdlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWYwMzEwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/forbiden/forbiden.component.css":
/*!*************************************************!*\
  !*** ./src/app/forbiden/forbiden.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-card-header{\r\n    background-color: red !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yYmlkZW4vZm9yYmlkZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JiaWRlbi9mb3JiaWRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/forbiden/forbiden.component.ts":
/*!************************************************!*\
  !*** ./src/app/forbiden/forbiden.component.ts ***!
  \************************************************/
/*! exports provided: ForbidenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbidenComponent", function() { return ForbidenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ForbidenComponent = class ForbidenComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForbidenComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-forbiden',
        template: __importDefault(__webpack_require__(/*! raw-loader!./forbiden.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forbiden/forbiden.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./forbiden.component.css */ "./src/app/forbiden/forbiden.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ForbidenComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section div h3{\r\n    color: #3f51b5;\r\n    font-size: 30px;\r\n    text-shadow: 2px 3px 5px grey;\r\n    margin: 30px 0;\r\n}\r\n\r\nsection div + h3{\r\n    color: #3f51b5;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\nmat-tab-group {\r\n    text-align: center;\r\n}\r\n\r\nmat-tab-group p {\r\n    padding-top: 20px;\r\n}\r\n\r\n::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n  }\r\n\r\n::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  }\r\n\r\n::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n\r\n.card-button{\r\n    margin: 15px;\r\n  }\r\n\r\n.image {\r\n     background-color: transparent;\r\n     background-repeat: no-repeat;\r\n     background-size: cover;\r\n     background-position: center center;\r\n     width: 100%;\r\n     height: 90%;\r\n    \r\n  }\r\n\r\n.photo {\r\n    background-image: url('http://www.thinksnaps.com/wp-content/uploads/2014/07/images-background.jpg');\r\n    background-size: 300px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 50%;\r\n    background-clip: border-box;\r\n    transition: background-size 0.2s;\r\n    transition-timing-function: cubic-bezier(.07,1.41,.82,1.41);\r\n\r\n    display: block;\r\n    width: 190px;\r\n    height: 190px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    text-indent: 100%;\r\n    white-space:nowrap;\r\n}\r\n\r\n.photo:hover {\r\n    background-size: 500px;\r\n}\r\n\r\n.bottom-button-class {\r\n  width: 100% !important;\r\n  min-width: unset!important;\r\n  background-color: #004A7F;\r\n  border-radius: 10px;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  -webkit-animation: glowing 1500ms infinite;\r\n  animation: glowing 1500ms infinite;\r\n}\r\n\r\n@-webkit-keyframes glowing {\r\n  0% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }\r\n  50% { background-color: #5f0310; -webkit-box-shadow: 0 0 15px rgb(117, 33, 33); }\r\n  100% { background-color: rgb(92, 23, 23); -webkit-box-shadow: 0 0 3px #B20000; }\r\n}\r\n\r\n@keyframes glowing {\r\n  0% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }\r\n  50% { background-color: rgb(92, 20, 20); box-shadow: 0 0 15px rgb(105, 23, 23); }\r\n  100% { background-color: rgb(110, 24, 24); box-shadow: 0 0 3px #B20000; }\r\n}\r\n\r\n/*   image with link */\r\n\r\n.content{ \r\n  position:relative;\r\n}\r\n\r\n.content img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Style the button and place it in the middle of the container/image */\r\n\r\n.content .btn {\r\n  position: absolute;\r\n  top: 65%;\r\n  right: 10%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  background-color: rgb(51, 10, 10);\r\n  color: white;\r\n  padding: 12px 24px;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n  -webkit-animation: glowing 1500ms infinite;\r\n  animation: glowing 1500ms infinite;\r\n}\r\n\r\n@-webkit-keyframes glowing {\r\n  0% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }\r\n  50% { background-color: #FF0000; -webkit-box-shadow: 0 0 40px #FF0000; }\r\n  100% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }\r\n}\r\n\r\n@keyframes glowing {\r\n  0% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }\r\n  50% { background-color: #FF0000; box-shadow: 0 0 40px #FF0000; }\r\n  100% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVDO0lBQ0csb0NBQW9DO0VBQ3RDOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtLQUNHLDZCQUE2QjtLQUM3Qiw0QkFBNEI7S0FDNUIsc0JBQXNCO0tBQ3RCLGtDQUFrQztLQUNsQyxXQUFXO0tBQ1gsV0FBVzs7RUFFZDs7QUFFQTtJQUNFLG1HQUFtRztJQUNuRyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQywyREFBMkQ7O0lBRTNELGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUV6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMENBQTBDO0VBRzFDLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLEtBQUsseUJBQXlCLEVBQUUsbUNBQW1DLEVBQUU7RUFDckUsTUFBTSx5QkFBeUIsRUFBRSw2Q0FBNkMsRUFBRTtFQUNoRixPQUFPLGlDQUFpQyxFQUFFLG1DQUFtQyxFQUFFO0FBQ2pGOztBQWNBO0VBQ0UsS0FBSyx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRTtFQUM3RCxNQUFNLGlDQUFpQyxFQUFFLHFDQUFxQyxFQUFFO0VBQ2hGLE9BQU8sa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUU7QUFDMUU7O0FBR0Esc0JBQXNCOztBQUN0QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsdUVBQXVFOztBQUN2RTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFFZixtQkFBbUI7RUFDbkIsMENBQTBDO0VBRzFDLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLEtBQUsseUJBQXlCLEVBQUUsbUNBQW1DLEVBQUU7RUFDckUsTUFBTSx5QkFBeUIsRUFBRSxvQ0FBb0MsRUFBRTtFQUN2RSxPQUFPLHlCQUF5QixFQUFFLG1DQUFtQyxFQUFFO0FBQ3pFOztBQWNBO0VBQ0UsS0FBSyx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRTtFQUM3RCxNQUFNLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFO0VBQy9ELE9BQU8seUJBQXlCLEVBQUUsMkJBQTJCLEVBQUU7QUFDakUiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24gZGl2IGgze1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCA1cHggZ3JleTtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiArIGgze1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXRhYi1ncm91cCBwIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4gOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYwMzEwICFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1idXR0b257XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogOTAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAucGhvdG8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vd3d3LnRoaW5rc25hcHMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA3L2ltYWdlcy1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4ycztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjA3LDEuNDEsLjgyLDEuNDEpO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxufVxyXG5cclxuLnBob3RvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tYnV0dG9uLWNsYXNzIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRBN0Y7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93aW5nIDE1MDBtcyBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBnbG93aW5nIDE1MDBtcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGdsb3dpbmcgMTUwMG1zIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBnbG93aW5nIHtcclxuICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMDsgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMTE3LCAzMywgMzMpOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMjMsIDIzKTsgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGdsb3dpbmcge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyMDAwMDsgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAyOSwgMjkpOyAtbW96LWJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYigxMTcsIDMwLCAzMCk7IH1cclxuICAxMDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyMDAwMDsgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBnbG93aW5nIHtcclxuICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE3LCAxNywgMC4zNjMpOyBib3gtc2hhZG93OiAwIDAgMTVweCAjRkYwMDAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsb3dpbmcge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyMDAwMDsgYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAyMCwgMjApOyBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMTA1LCAyMywgMjMpOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDI0LCAyNCk7IGJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG59XHJcblxyXG5cclxuLyogICBpbWFnZSB3aXRoIGxpbmsgKi9cclxuLmNvbnRlbnR7IFxyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJ1dHRvbiBhbmQgcGxhY2UgaXQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgY29udGFpbmVyL2ltYWdlICovXHJcbi5jb250ZW50IC5idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1JTtcclxuICByaWdodDogMTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDEwLCAxMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93aW5nIDE1MDBtcyBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBnbG93aW5nIDE1MDBtcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGdsb3dpbmcgMTUwMG1zIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBnbG93aW5nIHtcclxuICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDsgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNDBweCAjRkYwMDAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBnbG93aW5nIHtcclxuICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDsgLW1vei1ib3gtc2hhZG93OiAwIDAgNDBweCAjRkYwMDAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgZ2xvd2luZyB7XHJcbiAgMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQjIwMDAwOyBib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyBib3gtc2hhZG93OiAwIDAgNDBweCAjRkYwMDAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsb3dpbmcge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyMDAwMDsgYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDsgYm94LXNoYWRvdzogMCAwIDQwcHggI0ZGMDAwMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQjIwMDAwOyBib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxufVxyXG5cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
    constructor() {
        this.executeSelectedChange = (event) => {
            console.log(event);
        };
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-layout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




const materialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [materialComponents],
        exports: [materialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 0.8em;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nmat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n\r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HeaderComponent = class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidenavToggle", void 0);
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.nav-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXYtY2FwdGlvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SidenavListComponent = class SidenavListComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], SidenavListComponent.prototype, "sidenavClose", void 0);
SidenavListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidenav-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SidenavListComponent);



/***/ }),

/***/ "./src/app/shared/services/User-Service/user.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/User-Service/user.service.ts ***!
  \**************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let UserService = class UserService {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
        this.rootUrl = 'https://localhost:44394/';
        this.formModel = this.fb.group({
            FirstName: [''],
            LastName: [''],
            Initials: [''],
            UserName: [''],
            Passwords: this.fb.group({
                Password: [''],
                ConfirmPassword: ['']
            })
        });
    }
    registerUser(user) {
        const body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + 'api/ApplicationUser/Register', body, { headers: reqHeader });
    }
    userAuthentication(formData) {
        return this.http.post(this.rootUrl + 'api/applicationUser/Login', formData);
    }
    getUserProfile() {
        var token = localStorage.getItem('token');
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': ' Bearer ' + token });
        return this.http.get(this.rootUrl + 'api/UserProfile', { headers: tokenHeader });
    }
    roleMatch(allowedRoles) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(element => {
            if (userRole == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], UserService);



/***/ }),

/***/ "./src/app/shared/services/course-service/course.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/course-service/course.service.ts ***!
  \******************************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CourseService = class CourseService {
    constructor(http) {
        this.http = http;
        this.courseUrl = "assets/api/courses/courses.json";
    }
    getCourses() {
        return this.http.get(this.courseUrl);
    }
    // getCourses2(): Promise<CourseModel[]> {
    //   return this.getCourses().toPromise<CourseModel[]>()
    //     .then(courses => courses.map(course => course));
    // }
    getDepartments() {
        return this.getCourses().toPromise()
            .then(courses => courses.map(course => course.Category));
    }
    getCourseForDepartment(departmentName) {
        return this.getCourses().toPromise().then(courses => courses.filter(course => course.Category === departmentName));
    }
    getCoursesForDepartment() {
        const coursesForDepartment = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getDepartments().then(depts => {
            const departmentSet = new Set(depts);
            departmentSet.forEach(dept => {
                this.getCourses().toPromise()
                    .then(courses => courses.filter(course => course.Category === dept))
                    .then(courses => coursesForDepartment.next({ department: dept, courses: courses }));
            });
        });
        return coursesForDepartment;
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }
};
CourseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CourseService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CourseService);



/***/ }),

/***/ "./src/app/shared/services/emailService/email.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/emailService/email.service.ts ***!
  \***************************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
        this.rootUrl = 'https://161.35.154.180:5000/';
    }
    SendMail(mailData) {
        const body = {
            FullName: mailData.fullName,
            ContactEmailAddress: mailData.emailAddress,
            Subject: mailData.subject,
            Message: mailData.message,
            MailToAddress: mailData.mailToAddress
        };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + 'api/Email/sendMail', body, { headers: reqHeader });
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EmailService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], EmailService);



/***/ }),

/***/ "./src/app/shared/services/image-service/image.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/image-service/image.service.ts ***!
  \****************************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ImageService = class ImageService {
    constructor(http) {
        this.http = http;
        this.imageUrl = "assets/api/images/image.json";
    }
    getAllImages() {
        return this.http.get(this.imageUrl);
    }
    getImageById(imageId) {
        return this.getAllImages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(images => images.find(image => image.ImageId == imageId)));
    }
    getCategories() {
        return this.getAllImages().toPromise()
            .then(images => images.map(image => image.Category));
    }
    getImagesByCategory(category) {
        if (category === 'all') {
            return this.getAllImages().toPromise();
        }
        return this.getAllImages().toPromise().then(images => images.filter(image => image.Category === category));
    }
    getImagesForCategory() {
        const imagesForCategory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCategories().then(depts => {
            const departmentSet = new Set(depts);
            departmentSet.forEach(categ => {
                this.getAllImages().toPromise()
                    .then(images => images.filter(image => image.Category === categ))
                    .then(images => imagesForCategory.next({ category: categ, images: images }));
            });
        });
        return imagesForCategory;
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ImageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ImageService);



/***/ }),

/***/ "./src/app/shared/services/team-service/team.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/team-service/team.service.ts ***!
  \**************************************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TeamService = class TeamService {
    constructor() { }
    GetTeamMembers() {
        return [
            {
                'Title': 'Mr',
                'Fname': 'Taurayi',
                'Lname': 'Sihamba',
                'CoPosition': 'Managing Director ',
                'Qualification': 'PhD in Economics',
                'ProfilPicture': 'assets/images/profile_pics/male_user.png',
                'Profile': 'Mr Sihamba is a qualified Economist, with vast experience in economic development ',
                'ImagePath': 'assets/images/users/Mr_Tau_2.jpg'
            },
            {
                'Title': 'Mr',
                'Fname': 'Joseph',
                'Lname': 'Maveneka',
                'CoPosition': 'Business Development Manager',
                'Qualification': 'National Foundation Certificate: C.O.P (HEXCO Zimbabwe) \
            National Diploma in Management (D.U.T) \
            Bachelor of Technology in Management (D.U.T)',
                'ProfilPicture': 'assets/images/profile_pics/female_user.png',
                'Profile': 'Mr. Maveneka is our Business Development Manager. He is employed in the apacity of an Accounts Coordinator at TASC. He has committed and delivered impressive\
             results during his experiential learning –the reason he was been brought on board on\
             a full time basis. Mr Maveneka is responsible for the coordination of training assignments, \
             organization development activities, SMME support as well as small enterprise mentorship. \
             He has passion in the areas of finance, human resources, administration, strategic \
             management and research. He cut his teeth in student leadership during his under-graduate \
             and post-graduate studies; he was part of the Events Committee of International Students \
             Organization as the Projects Officer and currently holds a position of Vice President in the \
             same organization ',
                'ImagePath': 'assets/images/users/user-male-icon.png'
            },
            {
                'Title': 'Ms.',
                'Fname': 'Ayanda',
                'Lname': 'Malimela',
                'CoPosition': 'Marketing and Public Relations Manager',
                'Qualification': 'Durban University of Technology (National Diploma in Marketing)',
                'ProfilPicture': 'assets/images/profile_pics/female_user.png',
                'Profile': 'Ms. Malimela is a the Marketing and Public Relations Manager at TASC. She has two years’ experience \
            in client services and marketing. Her expertise is in small business consulting, tax affairs \
            and bookkeeping of small businesses. Phumelele has worked for Intergated Data Expertz as a \
            Sales Adminitrator for 2 years. She has interest in marketing, business management and helping \
            the needy in her community. ',
                'ImagePath': 'assets/images/users/user-female-icon.png'
            }
        ];
    }
};
TeamService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TeamService);



/***/ }),

/***/ "./src/app/tasc-courses/course-list/course-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tasc-courses/course-list/course-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzYy1jb3Vyc2VzL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtY291cnNlcy9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMCAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/tasc-courses/course-list/course-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tasc-courses/course-list/course-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/course-service/course.service */ "./src/app/shared/services/course-service/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CourseListComponent = class CourseListComponent {
    constructor(courseService) {
        this.courseService = courseService;
        this.department = '';
        this.CourseList = [];
        this.CourseDescription = [];
    }
    getCoursesPerDepartment() {
        return this.courseService.getCourseForDepartment(this.department).then(courses => {
            this.CourseList = courses;
        });
    }
    ngOnChanges() {
        this.getCoursesPerDepartment();
    }
    ngOnInit() {
    }
};
CourseListComponent.ctorParameters = () => [
    { type: src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], CourseListComponent.prototype, "department", void 0);
CourseListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-course-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./course-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-list/course-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./course-list.component.css */ "./src/app/tasc-courses/course-list/course-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
], CourseListComponent);



/***/ }),

/***/ "./src/app/tasc-courses/course-navigation/course-navigation.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/tasc-courses/course-navigation/course-navigation.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtY291cnNlcy9jb3Vyc2UtbmF2aWdhdGlvbi9jb3Vyc2UtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tasc-courses/course-navigation/course-navigation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tasc-courses/course-navigation/course-navigation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CourseNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigationComponent", function() { return CourseNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/course-service/course.service */ "./src/app/shared/services/course-service/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CourseNavigationComponent = class CourseNavigationComponent {
    constructor(service) {
        this.service = service;
        this.departments = [];
        this.navbarOpen = false;
    }
    getDepartments() {
        return this.service.getCoursesForDepartment()
            .subscribe(response => this.departments.push(response));
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        this.getDepartments();
    }
};
CourseNavigationComponent.ctorParameters = () => [
    { type: src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"] }
];
CourseNavigationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-course-navigation',
        template: __importDefault(__webpack_require__(/*! raw-loader!./course-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-navigation/course-navigation.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./course-navigation.component.css */ "./src/app/tasc-courses/course-navigation/course-navigation.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
], CourseNavigationComponent);



/***/ }),

/***/ "./src/app/tasc-courses/courses/courses.component.css":
/*!************************************************************!*\
  !*** ./src/app/tasc-courses/courses/courses.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtY291cnNlcy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/tasc-courses/courses/courses.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tasc-courses/courses/courses.component.ts ***!
  \***********************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/course-service/course.service */ "./src/app/shared/services/course-service/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CoursesComponent = class CoursesComponent {
    constructor(route, courseService) {
        this.route = route;
        this.courseService = courseService;
        this.department = '';
        this.CourseList = [];
    }
    getCourses() {
        this.courseService.getCourses().subscribe(response => {
            this.CourseList = response;
        });
    }
    ngOnInit() {
        this.route.params.subscribe(p => this.department = p['department']);
    }
};
CoursesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }
];
CoursesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-courses',
        template: __importDefault(__webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/courses/courses.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./courses.component.css */ "./src/app/tasc-courses/courses/courses.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])
], CoursesComponent);



/***/ }),

/***/ "./src/app/tasc-images/gallery/gallery.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tasc-images/gallery/gallery.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtaW1hZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tasc-images/gallery/gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tasc-images/gallery/gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/image-service/image.service */ "./src/app/shared/services/image-service/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let GalleryComponent = class GalleryComponent {
    constructor(route, router, imageService) {
        this.route = route;
        this.router = router;
        this.imageService = imageService;
        this.category = '';
        this.ImageList = [];
    }
    getImages() {
        this.imageService.getAllImages().subscribe(response => {
            this.ImageList = response;
        });
    }
    ngOnInit() {
        this.router.navigateByUrl('/images/all');
        this.route.params.subscribe(p => this.category = p['category']);
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
GalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/gallery/gallery.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./gallery.component.css */ "./src/app/tasc-images/gallery/gallery.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
], GalleryComponent);



/***/ }),

/***/ "./src/app/tasc-images/image-list/image-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tasc-images/image-list/image-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom.mat-card{\r\n    padding: 0;\r\n   }\r\n\r\n.mat-card-content {\r\n    font-size: 24px;\r\n    padding: 0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzYy1pbWFnZXMvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0dBQ1g7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdGFzYy1pbWFnZXMvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgfVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tasc-images/image-list/image-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tasc-images/image-list/image-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/image-service/image.service */ "./src/app/shared/services/image-service/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ImageListComponent = class ImageListComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.category = '';
        this.ImageList = [];
    }
    getImagesPerCategory() {
        return this.imageService.getImagesByCategory(this.category).then(images => {
            this.ImageList = images;
        });
    }
    ngOnChanges() {
        this.getImagesPerCategory();
    }
    ngOnInit() {
    }
};
ImageListComponent.ctorParameters = () => [
    { type: src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ImageListComponent.prototype, "category", void 0);
ImageListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-image-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./image-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-list/image-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./image-list.component.css */ "./src/app/tasc-images/image-list/image-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
], ImageListComponent);



/***/ }),

/***/ "./src/app/tasc-images/image-navigation/image-navigation.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/tasc-images/image-navigation/image-navigation.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtaW1hZ2VzL2ltYWdlLW5hdmlnYXRpb24vaW1hZ2UtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tasc-images/image-navigation/image-navigation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/tasc-images/image-navigation/image-navigation.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImageNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageNavigationComponent", function() { return ImageNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/image-service/image.service */ "./src/app/shared/services/image-service/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ImageNavigationComponent = class ImageNavigationComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.imageCategories = [];
    }
    getImageCategories() {
        return this.imageService.getImagesForCategory()
            .subscribe(response => this.imageCategories.push(response));
    }
    ngOnInit() {
        this.getImageCategories();
    }
};
ImageNavigationComponent.ctorParameters = () => [
    { type: src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] }
];
ImageNavigationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-image-navigation',
        template: __importDefault(__webpack_require__(/*! raw-loader!./image-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-navigation/image-navigation.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./image-navigation.component.css */ "./src/app/tasc-images/image-navigation/image-navigation.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
], ImageNavigationComponent);



/***/ }),

/***/ "./src/app/tasc-tutorials/tutorials/tutorials.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tasc-tutorials/tutorials/tutorials.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card:not([class*=mat-elevation-z]) {\r\n    box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n                0 1px 1px 0 rgba(0,0,0,1), \r\n                0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzYy10dXRvcmlhbHMvdHV0b3JpYWxzL3R1dG9yaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O3lDQUVxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtdHV0b3JpYWxzL3R1dG9yaWFscy90dXRvcmlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgICAgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwxKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tasc-tutorials/tutorials/tutorials.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tasc-tutorials/tutorials/tutorials.component.ts ***!
  \*****************************************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TutorialsComponent = class TutorialsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TutorialsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tutorials',
        template: __importDefault(__webpack_require__(/*! raw-loader!./tutorials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-tutorials/tutorials/tutorials.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./tutorials.component.css */ "./src/app/tasc-tutorials/tutorials/tutorials.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], TutorialsComponent);



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjAzMTAgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/team-service/team.service */ "./src/app/shared/services/team-service/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let TeamComponent = class TeamComponent {
    constructor(teamService) {
        this.teamService = teamService;
        this.Members = [];
    }
    ngOnInit() {
        this.Members = this.teamService.GetTeamMembers();
    }
};
TeamComponent.ctorParameters = () => [
    { type: _shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"] }
];
TeamComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-team',
        template: __importDefault(__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")).default]
    }),
    __metadata("design:paramtypes", [_shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
], TeamComponent);



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-field-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #5f0310 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7RUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmllbGQtY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmxvZ2luLWljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXNlY3Rpb257XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYwMzEwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmR7XHJcbiAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudHtcclxuICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/User-Service/user.service */ "./src/app/shared/services/User-Service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let SignInComponent = class SignInComponent {
    constructor(userService, toastr, fb, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.isLoginError = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'username': '',
            'password': ''
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'username': {
                'required': 'User-name is required.',
                'minlength': 'Please enter a valid username.',
                'maxlength': 'This is not realistic '
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Please enter a valid password',
                'maxlength': 'This is not realistic '
            }
        };
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            var localStorageData = localStorage.getItem('token');
            this.navigateUserBasedOnRole(localStorageData);
        }
        this.TascLoginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)])
        });
        this.TascLoginForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.TascLoginForm);
        });
    }
    // Logs validation error messages
    logValidationErrors(group = this.TascLoginForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
        });
    }
    OnSubmit(form) {
        var formData = form.value;
        this.userService.userAuthentication(formData).subscribe((data) => {
            form.reset();
            localStorage.setItem('token', data.token);
            var localStorageData = localStorage.getItem('token');
            this.navigateUserBasedOnRole(localStorageData);
        }, err => {
            this.isLoginError = true;
            if (err.status == 400) {
                this.toastr.error('Username or password is incorrect.', 'Authentication failed.');
            }
            else {
                console.log("DATA" + formData);
                form.reset();
            }
        });
    }
    resetForm(form) {
        if (form != null) {
            form.reset();
        }
    }
    navigateUserBasedOnRole(localStorage) {
        let jwtData = localStorage.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let jwtUserRole = JSON.parse(decodedJwtJsonData).role;
        if (jwtUserRole === 'Customer') {
            this.router.navigateByUrl('/delegate/profile');
        }
        else if (jwtUserRole === 'Admin' || jwtUserRole === 'SuperAdmin') {
            this.router.navigateByUrl('/admin/tasc-admin');
        }
        else {
            //localStorage.removeItem('token');
            // this.router.navigate(['./login'])
            console.log("Can not find this role " + jwtUserRole);
        }
    }
};
SignInComponent.ctorParameters = () => [
    { type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignInComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sign-in',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignInComponent);



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n    color: white;\r\n    padding:5px !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card{\r\n    padding:0 !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/User-Service/user.service */ "./src/app/shared/services/User-Service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let SignUpComponent = class SignUpComponent {
    constructor(userService, toastr, fb) {
        this.userService = userService;
        this.toastr = toastr;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'emailAddress': '',
            'password': '',
            'confirmPassword': '',
            'passwordGroup': '',
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'firstName': {
                'required': 'First name is required.',
                'minlength': 'First name must be greater than 2 characters.',
                'maxlength': 'First name must be less than 100 characters.'
            },
            'lastName': {
                'required': 'Last name is required.',
                'minlength': 'Last name must be greater than 2 characters.',
                'maxlength': 'Last name must be less than 100 characters.'
            },
            'emailAddress': {
                'required': 'Email is required.',
                'minlength': 'Email address must be greater than 11 characters.',
                'maxlength': 'Email address must be less than 150 characters.',
                'emailDomain': 'Email domian should be devine-tech.com'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password must be greater than 5 characters.',
                'maxlength': 'Password must be less than 150 characters.',
            },
            'confirmPassword': {
                'required': 'Confirm Password is required.',
                'minlength': 'Confirm Password must be greater than 5 characters.',
                'maxlength': 'Confirm Password must be less than 150 characters.',
            },
            'passwordGroup': {
                'passwordMisMatch': 'Password and confirm Password do not match'
            }
        };
        this.hasError = (controlName, errorName) => {
            return this.TascRegForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.TascRegForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            Initials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            passwordGroup: this.fb.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            }, { validators: matchPassword }),
        });
        this.TascRegForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.TascRegForm);
        });
    }
    // Logs validation error messages
    logValidationErrors(group = this.TascRegForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.logValidationErrors(abstractControl);
            }
        });
    }
    OnSubmit(form) {
        var formData = form.value;
        const userData = this.getUserInformation(formData);
        this.userService.registerUser(userData)
            .subscribe((data) => {
            if (data.succeeded == true) {
                this.resetForm(form);
                this.toastr.success('User registration successful', "Success!");
            }
            else {
                data.errors.forEach(element => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
            ;
        });
    }
    getUserInformation(formData) {
        return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
        };
    }
    resetForm(form) {
        if (form != null)
            form.reset();
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    }
};
SignUpComponent.ctorParameters = () => [
    { type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignUpComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sign-up',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SignUpComponent);

function matchPassword(group) {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
    console.log(`Value of password is : ${passwordControl.value} and confirm Password : ${confirmPasswordControl.value}`);
    if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
        console.log("Matched");
        return null;
    }
    else {
        console.log("Mis-Matched");
        return { 'passwordMisMatch': true };
    }
}


/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\PracticeDev\Vabereki\MrTau\CoursesWebSite\TascConsulting_DotNet_Core\TascConsulting_DotNet_Core\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomerCustomerProfileCustomerProfileCustomerProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>customer-profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomerLayoutCustomerAdminLayoutCustomerFooterCustomerFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>customer-footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomerLayoutCustomerAdminLayoutCustomerHeaderCustomerHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <mat-toolbar class=\"toolbar-container\" color=\"primary\">\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                Current User -  <span style=\" font-size: 0.8em;\">Welcome: {{firstName}} {{lastName}} {{initials}}</span>\n            </div>\n        </div>\n    </mat-toolbar>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomerLayoutCustomerAdminLayoutCustomerMainLayoutCustomerMainLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row col-lg\">\n        <app-customer-header  [firstName] = \"firstName\"  [lastName] = \"lastName\"  [initials] = \"initials\"></app-customer-header>\n    </div>\n</div>\n<mat-sidenav-container>\n  <mat-sidenav mode=\"push\" [(opened)]=\"opened\">\n  <mat-nav-list>\n     <app-customer-sidebar></app-customer-sidebar>\n  </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n  <mat-toolbar color=\"primary\">\n      <span class=\"MyMenuIcon\">\n          <button (click)=\"opened=!opened\">\n          <mat-icon matPrefix >reorder</mat-icon>\n          Menu\n          </button>\n      </span>\n      <span style=\"margin-left: 20px;\">Tasc Training Member</span> \n      <span class=\"MylogoutIcon\">\n          <button mat-icon-button><mat-icon matPrefix (click)=\"onLogout()\" >power_settings_new</mat-icon></button>\n      </span>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n  </mat-sidenav-content>\n  <div class=\"row\" style=\"margin: 5px;\">\n  <div class=\"col-lg-12\">\n      <app-customer-footer></app-customer-footer>\n  </div>\n  </div>\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomerLayoutCustomerAdminLayoutCustomerSidebarCustomerSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-column\" style=\"background: lightsteelblue; margin-left: 5px;\">\n  <div class=\"p-1 align-self-center my-flex-item\"><h4>Menu</h4></div>\n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-home\"></i><a routerLink=\"/admin/doctors\"> Profile</a></div> \n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-film\"></i><a routerLink=\"/women-gallery\">  Appointments</a></div>\n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-users\"></i><a routerLink=\"/users\">Send Mail</a></div>\n  <div class=\"p-1 linkTitle\"><i class=\"fa fa-cogs\"></i><a routerLink=\"/account-settings\"> Account Settings</a></div>\n  <br>\n  <div class=\"p-2 align-self-center my-flex-item\"><span class=\"btn btn-primary\"><i class=\"fa fa-angle-double-left\"></i> <i class=\"fa fa-angle-double-left\"></i></span></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutusAboutusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=row>\r\n      <div class=\"col-xs-12 col-lg-12\">\r\n        <h2>About Us</h2>\r\n        <hr class=\"section-hr-line\">\r\n      </div>\r\n    </div>\r\n    <div class=row>\r\n      <div class=\"col-xs-12\">\r\n        <p>\r\n          Tasc Business Consulting and training is a 100% black owned company. We specialize in training, business consulting, and research. \r\n          We offer training to government departments, municipalities, private institutions and NGOs.\r\n           <br><br>\r\n           We offer flexibility to our clients by offering both in-house and offsite training. We have build a network facilitators in all the \r\n           provinces in South Africa and beyond the borders for your convenience and accessibility. Our flexibility and desire to meet client \r\n           needs means we can provide courses anytime, anywhere and for any number. We strive for quality and excellence through offering practical \r\n           trainings.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=row>\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n          <img src=\"assets/images/aboutus/about_1.jpg\" width=\"100%\" class=\"img-responsive img-thumbnail\" />\r\n        </div>\r\n        <div class=\"col-xs-12 col-lg-8\">\r\n          <p> We are recognized for our reliability and our years of experience within the industry has given us the \r\n              knowledge that is needed to ensure that jobs  are run professionally, to schedule and are cost effective. This gives our \r\n              clients comfort, confidence and less stress when engaging in our services. Our highly skilled facilitators are backed by \r\n              a professional administration team which further enhances our overall services. We take pride in our team that possesses \r\n              a judicious blend of knowledge in training, business consulting and research. We strive for quality and excellence-to be \r\n              above the rest. \r\n          </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n          <h3>OUR MISSION</h3>\r\n          <p>\r\n            Our mission as an organization is to provide hands-on and pertinent business consulting and training that positively impact \r\n            the society and equip employees with relevant skills for their personal development which will translate to high productivity \r\n            in the organization.\r\n          </p>\r\n          <h3>OUR VISION</h3>\r\n          <p>\r\n            Our vision is to excel in what we do and be above the rest in offering our clients with exceptional training and consulting \r\n            ervices. We aim to be one of the biggest global firm for training and business consulting in South Africa and beyond our borders.\r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <h3>CORE VALUES</h3>\r\n        </div>\r\n    </div> \r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n          <p>\r\n            At Tasc business consulting and training we see things differently. We see our strengths in the quality of our people and our \r\n            genuine relationships with clients, partners and communities. We see our success linked to our ability to deliver certainty \r\n            through consistent performance. We see our future shaped by all that has made us successful in the past.\r\n          </p>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n          <img src=\"assets/images/aboutus/about_2.jpg\" width=\"100%\" class=\"img-responsive img-thumbnail\" />\r\n      </div>\r\n    </div>\r\n        \r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n          <h4>OUR BELIEF IS DRIVEN BY EMBEDDED VALUES</h4>\r\n          <div class=\"col-xs-12\">\r\n            <p>\r\n                &nbsp;TASC is focused on providing a conducive environment for both our employees and clients that is driven & supported by the following core values;\r\n            </p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>INTEGRITY</small></h4>\r\n          <p>Its in all that we do</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>FAIRNESS</small></h4>\r\n          <p>And concern for our employees</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>CORPORATE CITIZENSHIP</small></h4> \r\n          <p>To the communities within which we operate</p>\t\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>EXCELLENCE</small> </h4>\r\n          <p>To our products, services and initiatives</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>TRANSPARENCY</small></h4>\r\n          <p>To our employees and clients</p>\r\n          </div>\r\n  \r\n          <div class=\"col-xs-12\">\r\n          <h4><small>SHARING</small></h4>\r\n          <p>Our success</p>\r\n          </div>            \r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-lg-12\">\r\n          <img src=\"assets/images/aboutus/base_2.jpg\" width=\"100%\" class=\"img-responsive img-thumbnail\"/>\r\n      </div>\r\n    </div>\r\n        \r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home/admin-home.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home/admin-home.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminHomeAdminHomeAdminHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admin-home works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-footer/admin-footer.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-footer/admin-footer.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLayoutAdminFooterAdminFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admin-footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-header/admin-header.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-header/admin-header.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLayoutAdminHeaderAdminHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <div class=\"row\">\n        <div class=\"col-lg\">\n            User Profile <br>\n            <span style=\" font-size: 0.8em;\">Welcome: {{firstName}} {{lastName}} {{initials}}</span>\n        </div>\n    </div>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLayoutAdminMainlayoutAdminMainlayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row col-lg\">\n      <app-admin-header  [firstName] = \"firstName\"  [lastName] = \"lastName\"  [initials] = \"initials\"></app-admin-header>\n    </div>\n  </div>\n  <mat-sidenav-container>\n      <mat-sidenav mode=\"push\" [(opened)]=\"opened\">\n        <mat-nav-list>\n          <app-admin-sidebar></app-admin-sidebar>\n        </mat-nav-list>\n      </mat-sidenav>\n  \n      <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n            <span class=\"MyMenuIcon\">\n              <button (click)=\"opened=!opened\">\n                <mat-icon matPrefix >reorder</mat-icon>\n                Menu\n              </button>\n            </span>\n            <span style=\"margin-left: 20px;\">Abour-Medical Administration</span> \n            <span class=\"MylogoutIcon\">\n                <button mat-icon-button><mat-icon matPrefix (click)=\"onLogout()\" >power_settings_new</mat-icon></button>\n            </span>\n        </mat-toolbar>\n        <router-outlet></router-outlet>\n      </mat-sidenav-content>\n  \n      <div class=\"row\" style=\"margin: 5px;\">\n        <div class=\"col-lg-12\">\n          <app-admin-footer></app-admin-footer>\n        </div>\n      </div>  \n  \n  </mat-sidenav-container>\n\n    \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-sidebar/admin-sidebar.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-sidebar/admin-sidebar.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLayoutAdminSidebarAdminSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admin-sidebar works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n      <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBannerBannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"assets/images/banner/banner_1.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/banner/banner_2.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/banner/banner_3.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n  </div>\n  <br>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h4>CONTACT US</h4>  \r\n<hr class=\"section-hr-line\">\r\n<p>Please use any of the following options</p>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-8\">\r\n      <mat-card style=\"margin-bottom: 15px;\"  color=\"primary\">\r\n          <mat-card-header  color=\"primary\">\r\n             <mat-card-title> <h4 class=\"site-text\">Send Us a Message</h4></mat-card-title>\r\n             <hr>\r\n         </mat-card-header>\r\n         <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n         <mat-card-content>\r\n          <form [formGroup]=\"ContactForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(ContactForm)\" (blur)=\"logValidationErrors()\">\r\n                <div class=\"input-field-class\">\r\n        \r\n                  <div class=\"row\">\r\n                    <mat-form-field  class=\"col-12\">\r\n                      <mat-label>Full Name</mat-label>\r\n                      <input matInput placeholder=\"Full Name\" #fullName ngModel formControlName=\"fullName\" (blur)=\"logValidationErrors()\">\r\n                      <mat-icon matPrefix>person_outline</mat-icon>\r\n                      <mat-error *ngIf=\"formErrors.fullName\"><b>{{formErrors.fullName}}</b></mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row\">\r\n                    <mat-form-field  class=\"col\">\r\n                      <mat-label>Email Address</mat-label>    \r\n                      <input matInput placeholder=\"Email Address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\r\n                      <mat-icon matPrefix>mail</mat-icon>\r\n                      <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row\">\r\n                    <mat-form-field class=\"col\">\r\n                      <mat-label>Subject</mat-label>      \r\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Subject\" #subject ngModel formControlName=\"subject\" (blur)=\"logValidationErrors()\">\r\n                      <mat-icon matPrefix>mail</mat-icon>\r\n                      <mat-error *ngIf=\"formErrors.subject\"><b>{{formErrors.subject}}</b></mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row\">\r\n                      <mat-form-field class=\"col stretch-height\" >\r\n                          <mat-label>Message</mat-label>\r\n                          <textarea matInput rows=\"10\" (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Message\" formControlName=\"message\" (blur)=\"logValidationErrors()\"></textarea>\r\n                          <mat-error *ngIf=\"formErrors.message\"><b>{{formErrors.message}}</b></mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n        \r\n                  <div class=\"row s12\">\r\n                    <button color=\"primary\" [disabled]=\"!ContactForm.valid\" mat-raised-button>Sign - UP</button>\r\n                  </div>\r\n                </div>\r\n             </form>\r\n         </mat-card-content>\r\n        </mat-card> \r\n    </div>\r\n    <div class=\"col-12 col-md-4\">\r\n      <h4>Call Us</h4>\r\n    <hr>\r\n    <p>\r\n      <b>Landline : </b> +27 (0)31 261 1907 <br>\r\n      <b>Mobile : </b>+27 (0)78 253 9442  <br>\r\n      <b>Email  : </b> info@tascconsulting.co.za <br>       \r\n  \r\n      <br>\r\n      tau@tascconsulting.co.za\r\n      <br>\r\n      info@tascconsulting.co.za\r\n      <br>       \r\n    </p>\r\n    <br>\r\n    <h4>Physical Address : </h4>\r\n    <hr>\r\n    <p> \r\n      1 Helston Road <br>Manor Gardens <br>Durban,<br> 4001     \r\n    </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\r\n    <h4>Send Us a Message</h4>\r\n    <hr>      \r\n    <form [formGroup]=\"ContactForm\" novalidate>\r\n      \r\n        <div class=\"form-group\">\r\n            <label>Full Name:</label>\r\n            <input class=\"form-control\" formControlName=\"FullName\" type=\"text\">\r\n        </div>        \r\n        <div *ngIf=\"ContactForm.controls['FullName'].invalid && (ContactForm.controls['FullName'].dirty || ContactForm.controls['FullName'].touched)\" class=\"alert alert-danger\">\r\n           <div *ngIf=\"ContactForm.controls['FullName'].errors.required\">\r\n              Your full name is required.\r\n           </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Your Email:</label>\r\n            <input class=\"form-control\" formControlName=\"EmailFrom\" type=\"text\">\r\n        </div>        \r\n        <div *ngIf=\"ContactForm.controls['EmailFrom'].invalid && (ContactForm.controls['EmailFrom'].dirty || ContactForm.controls['EmailFrom'].touched)\" class=\"alert alert-danger\">\r\n           <div *ngIf=\"ContactForm.controls['EmailFrom'].errors.required\">\r\n              Your email is required.\r\n           </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Subject To:</label>\r\n            <input class=\"form-control\" formControlName=\"Subject\" type=\"text\">\r\n        </div>\r\n        <div *ngIf=\"ContactForm.controls['Subject'].invalid && (ContactForm.controls['Subject'].dirty || ContactForm.controls['Subject'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"ContactForm.controls['Subject'].errors.required\">\r\n              Subject is required.\r\n            </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group\">\r\n            <label>Message :</label>\r\n            <textarea class=\"form-control\" formControlName=\"Message\" type=\"textarea\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div *ngIf=\"ContactForm.controls['Message'].invalid && (ContactForm.controls['Message'].dirty || ContactForm.controls['Message'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"ContactForm.controls['Message'].errors.required\">\r\n              Message is required.\r\n            </div>\r\n        </div>\r\n  \r\n        <button type=\"submit\"\r\n            [disabled]=\"ContactForm.pristine || ContactForm.invalid\" class=\"btn btn-success\" (click)= 'SendMail()'>\r\n            Send Mail\r\n        </button>\r\n        <div class=\"form-group message\">\r\n            <p style=\" text-align: center; font-weight: bold;\" [style.color]=\"hasErrors ? 'red': 'green'\">\r\n              {{ responseSent }}\r\n            </p>\r\n        </div>\r\n         <div *ngIf=\"isLoading\" class=\"relative\">\r\n            <app-spinner></app-spinner>\r\n        </div>          \r\n    </form>\r\n    <br />\r\n    \r\n     <p>Form value: {{ emailUsForm.value | json }}</p>\r\n    <p>Form status: {{ emailUsForm.status | json }}</p>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n    <h4>Call Us</h4>\r\n    <hr>\r\n    <p>\r\n      <b>Landline : </b> +27 (0) 31 261 1907 <br> <b>Or     : </b> +27 (0) 31 829 9130 <br>\r\n      <b>Mobile : </b>+27 (0) 78 253 9442  <br>\r\n      <b>Or     : </b>+27 (0) 65 822 3164  <br><br>\r\n      <b>Email  : </b>tau@tascconsulting.co.za / info@tascconsulting.co.za  <br>       \r\n    </p>\r\n    <br>\r\n    <h4>Physical Address : </h4>\r\n    <hr>\r\n    <p>\r\n      1 Helston Road,<br> Westridge,<br> Berea,<br>Durban, <br> 4091      \r\n    </p>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <h4>Find Us</h4>\r\n  <hr>\r\n  <br>\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <p>\r\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\r\n  </p>\r\n  </div>\r\n  \r\n\r\n</div> -->\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" id=\"footer\" >\r\n    <div class=\"container\" style=\"padding:10px;\">\r\n        <div class=\"container\">\r\n            <br>\r\n              <div id=\"footer\" class=\"row\" style=\"margin-top: 50px;\">\r\n                <div class=\"col-lg-12 col-xs-12\">\r\n                <hr class=\"one\">\r\n                </div>\r\n\r\n                  <div class=\"col-lg-4 col-xs-12\">\r\n                      <p>OUR VISION</p>               \r\n                      <hr class=\"section-hr-line\"/>\r\n                      <p>Our vision is to excel in what we do and be above the rest in offering our clients with exceptional training and consulting \r\n            ervices. We aim to be one of the biggest global firm for training and business consulting in South Africa and beyond our borders.\r\n                      </p>       \r\n                  </div>\r\n              \r\n                  <div class=\"col-lg-4 col-xs-12  \">\r\n                      <p>OUR MISSION</p>\r\n                      <hr class=\"section-hr-line\"/>\r\n                      <p>\r\n                          <b>TASC Consulting</b> is committed to provide hands-on and pertinent business consulting and training that positively impact \r\n                          the society and equip employees with relevant skills for their personal development which will translate to high productivity \r\n                          in the organization.\r\n                      </p>   \r\n                  </div>\r\n              \r\n                  <div class=\"col-lg-4 col-xs-12  \">\r\n                      <p>CONTACT US</p>\r\n                      <hr class=\"section-hr-line\"/> \r\n                      <p>\r\n                        For any information regarding the companies services. </p>                   \r\n                       <div class=\"row\">\r\n                           <div class=\"col-lg-4\">\r\n                           <p>   Visit Us At :</p> \r\n                           </div>\r\n                           <div class=\"col-lg-8\">\r\n                              <p>1 Helston Road,<br> Westridge, Berea,<br>Durban, 4091.</p>\r\n                          </div>\r\n                       </div>  \r\n  \r\n                      <div class=\"row\">\r\n                              <div class=\"col-lg-12\">\r\n                                  <p> \r\n                                  <b>Landline : </b> +27 (0) 31 261 1907 <br>\r\n                                  <b>Mobile : </b>+27 (0) 78 253 9442  <br>\r\n                                  <b>Or     : </b>+27 (0) 65 822 3164  <br>\r\n                                  <b>Email  : </b> info@tascconsulting.co.za <br> \r\n                              </p> \r\n                             </div>\r\n                          </div>                              \r\n                                                               \r\n                  </div>  \r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                    <p> &copy; TASC - Business Consultancy : Copyright &copy; 2020 - All rights reserved</p>\r\n                </div>\r\n              </div>\r\n          </div>\r\n  \r\n    </div>  \r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forbiden/forbiden.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forbiden/forbiden.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForbidenForbidenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>403 - ACCESS DENIED</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"assets/images/403.png\" alt=\"Access Denied\">\n        <mat-card-content>\n            <p>You don't have the permission to access this resource.</p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button>Close</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section fxLayout=\"column\" fxFlexAlign=\"stretch\">\r\n <div fxFlexAlign=\"center\">\r\n   <h3>Welcome to TASC - Consulting</h3>\r\n </div>\r\n <app-banner></app-banner>\r\n <div class=\"row\">\r\n        <div class=\"col-sm\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"example-header-image\"></div>\r\n                    <mat-card-title>Programmes</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <p>\r\n                        TASC training programmes assist our clients to enable and empower employees to become competitive differentiators \r\n                        for their company. WE positively impact the society and equip employees with relevant skills for their personal \r\n                        development which will translate to high productivity in the organization\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-button>LIKE</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n\r\n        <div class=\"col-sm\" class=\"col-md\">\r\n            <mat-card>\r\n                <mat-card-header >\r\n                    <div mat-card-avatar class=\"example-header-image\"></div>\r\n                    <mat-card-title>Courses</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/home/home_3.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <p>\r\n                        We offer a wide range of courses across all SETAs, from one week to one year courses. We are\r\n                        accredited with over 20 qualifications and over 200 short courses. All our courses are part-time\r\n                        based, offered either face to face or online. For more information on other range of courses not\r\n                        listed above please kindly contact our offices.\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-button>LIKE</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <mat-card-title>Business Consulting</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/home/home_1.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                    <p>\r\n                        Our strategic offerings are simple, integrated and complete in every aspect, catering for a fast \r\n                        changing dynamic workplace. Our main consulting services are but not limited to;\r\n                        \r\n\r\n                    </p>\r\n                    <ul>\r\n                        <li>Performance management system</li>\r\n                        <li>BEE verification</li>\r\n                        <li>Material Development </li>\r\n                    </ul>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-button>LIKE</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n     </div>\r\n    <div class=\"row\"> \r\n        <br>       \r\n        <div class=\"col-md\">\r\n            <img src=\"assets/images/home/rsz_flyer_1a.jpg\" width=\"100%\" class=\"imag-responsive\" alt=\"Photo of a Shiba Inu\">\r\n        </div>\r\n        <div class=\"col-md\">\r\n            <img src=\"assets/images/home/rsz_flyer_1b.jpg\" width=\"100%\" class=\"imag-responsive\" alt=\"Photo of a Shiba Inu\">\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\n   <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n      <ng-content></ng-content>\n   </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n    </div>\n    <div>\n        <a routerLink=\"/home\">Tasc-Consulting</a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n            <li>\n                <a routerLink=\"/aboutus\">About-Us</a>\n            </li>\n            <li>\n                <a routerLink=\"/courses\">Our-Courses</a>\n            </li>\n            <li>\n                <a routerLink=\"/images\">Tasc-Gallery</a>\n            </li>\n            <li>\n                <a routerLink=\"/tascusers\">Members-Area</a>\n            </li>\n            <li>\n                <a routerLink=\"/team\">Management</a>\n            </li>\n            <li>\n                <a routerLink=\"/contactus\">Contact-Us</a>\n            </li>\n        </ul>\n    </div>\n  </mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationSidenavListSidenavListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-nav-list>\n  <a mat-list-item routerLink=\"/home\" (click)=\"onSidenavClose()\">\n    <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n  </a>\n  <a mat-list-item routerLink=\"/aboutus\" (click)=\"onSidenavClose()\">\n    <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">About-Us</span>\n  </a>\n  <a mat-list-item routerLink=\"/courses\" (click)=\"onSidenavClose()\">\n    <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Our-Courses</span>\n  </a>\n  <a mat-list-item routerLink=\"/images\" (click)=\"onSidenavClose()\">\n    <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Tasc-Gallery</span>\n  </a>\n  <a mat-list-item routerLink=\"/tascusers\" (click)=\"onSidenavClose()\">\n    <mat-icon>group</mat-icon><span class=\"nav-caption\">Members-Area</span>\n  </a>\n  <a mat-list-item routerLink=\"/team\" (click)=\"onSidenavClose()\">\n    <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Management</span>\n  </a>\n  <a mat-list-item routerLink=\"/contactus\" (click)=\"onSidenavClose()\">\n    <mat-icon>local_post_office</mat-icon><span class=\"nav-caption\">Contact-Us</span>\n  </a>\n  <mat-list-item [matMenuTriggerFor]=\"menu\">\n    <mat-icon>unfold_more</mat-icon>\n    <a matline>Tasc-New</a>\n  </mat-list-item>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"onSidenavClose()\">View profile</button>\n    <button mat-menu-item (click)=\"onSidenavClose()\">Add contact</button>\n  </mat-menu>\n</mat-nav-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-list/course-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-list/course-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTascCoursesCourseListCourseListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <br>\r\n    <mat-card *ngFor='let course of CourseList; let i = index' class=\"col-lg-3 col-md-3 col-sm-12\" style=\"margin: 10px;\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>{{course.name}}</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content style=\"text-align: justify;\">\r\n            \r\n                {{course.description[0]  | slice: 0: 100 }}....<a href=\"\" (click)=\"MoreCourseInfo()\">..Read More</a>\r\n            \r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button>LIKE</button>\r\n            <button mat-button>SHARE</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-navigation/course-navigation.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-navigation/course-navigation.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTascCoursesCourseNavigationCourseNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n    <div fxHide.gt-xs>\n        <button mat-icon-button [matMenuTriggerFor]=\"aboveMenu\">\n            <mat-icon>menu</mat-icon><span style=\"font-size: 20px; margin-left: 10px;\"><b>Courses List</b></span>\n        </button>\n        <mat-menu #aboveMenu=\"matMenu\" yPosition=\"below\">\n            <span  *ngFor=\"let dept of departments\">\n                <button mat-menu-item [routerLink]=\"['/courses', dept.department]\">{{dept.department}}</button>\n            </span>          \n        </mat-menu>\n    </div>\n    <div fxFlex fxLayout  fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"5px\" class=\"navigation-items\" style=\"list-style-type:none\">\n            <div class=\"row\">\n                <li *ngFor=\"let dept of departments\"  class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <button  mat-raised-button style=\"margin: 4px;\" color=\"primary\" [routerLink]=\"['/courses', dept.department]\">{{dept.department}}</button>\n                </li>\n            </div>\n        </ul>\n        <hr>\n    </div>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/courses/courses.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/courses/courses.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTascCoursesCoursesCoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h3>TASC - Courses</h3>\n  <hr class=\"section-hr-line\">\n\n  <p>\n        We offer a wide range of courses across all SETAs, from one week to one year courses. We are accredited with over 20 qualifications and over 200 short courses. All our courses are part-time based, offered either face to face or online. For more information on other range of courses not listed above please kindly contact our offices.\n  </p>\n  <h4>Our Qualification Programmes</h4>\n\n  <br>\n      <h5>We are fully acredited in the following courses with <b>BANK SETA</b></h5> \n  <br>\n    <p>  \n        <b>\n            <ul>\n                <li>12086 - National Certificate: Banking</li>\n            </ul>\n        </b>\n    </p>\n  <br>\n      <h5>We are fully acredited in the following courses with <b>LG SETA</b></h5> \n  <br>               \n    <p>  \n        <b>\n            <ul>\n                <li>57823 - National Certificate: Ward Committee Governance</li>\n                <li>50081 - Further Education and Training Certificate: Leadership</li>\n                <li>49605 - National Certificate: Environmental Practice</li>\n                <li>49554 - National Diploma: Public Finance Management and Administration</li>\n                <li>48965 - Certificate: Municipal Financial Management</li>\n            </ul>\n        </b>\n    </p>    \n <br>\n    <h5>We are fully acredited in the following courses with <b>SERVICES SETA</b></h5> \n <br>\n    <p>  \n        <b>\n            <ul>\n                <li>21787 - National Certificate: Funeral Services Practice</li>\n                <li>66249 - Further Education and Training Certificate: New Venture Creation </li>\n                <li>61595 - Further education and training certificate: Business Administration Services</li>\n                <li>50080 - Further Education and Training Certificate: Project management </li>\n            </ul>\n        </b>\n    </p>\n<br>\n\n<br>\n    <h5>We are fully acredited in the following courses with <b>MICT SETA</b></h5> \n <br>\n    <p>  \n        <b>\n            <ul>\n                <li>49077 - National Certificate: Information Technology: End user computing</li>\n            </ul>\n        </b>\n    </p>\n<br>\n\n  <h4>Short Skills Programmes</h4>\n  <br>\n  <p>We are accredited with over 20 qualifications across all SETAS and over 200 short courses. Below are some of our accredited qualifications. \n    On other qualifications please kindly contact our office. <br><br>\n    <b>Please click on ANY of the following links to see more on each of the categories of courses we offer</b> </p>\n    <br>\n   <app-course-navigation></app-course-navigation> \n   <hr>\n   <app-course-list [department]=department >{{department}}</app-course-list>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/gallery/gallery.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/gallery/gallery.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTascImagesGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h4>Our Gallery</h4>\r\n<hr class=\"section-hr-line\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <h4>Places we have been</h4>\r\n        <br>\r\n         <app-image-navigation></app-image-navigation> \r\n         <app-image-list [category]=category >{{category}}</app-image-list>\r\n    </div> \r\n  </div>\r\n</div>\r\n<hr>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-list/image-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-list/image-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTascImagesImageListImageListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <br>\n    <mat-card class=\"custom\" *ngFor='let image of ImageList' class=\"col-lg-3 col-md-3 col-sm-12\" style=\"margin: 10px;\">\n        <!-- <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n        </mat-card-header> -->\n        <mat-card-content>\n            <div class=\"col-sm\">\n                <img src={{image.Src}} class=\"img-responsive\"  height=\"100%\" width=\"100%\"/>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n        </mat-card-actions>\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-navigation/image-navigation.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-navigation/image-navigation.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTascImagesImageNavigationImageNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar style=\"padding-top: 10px;\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button [matMenuTriggerFor]=\"aboveMenu\">\n            <mat-icon>menu</mat-icon> Images List\n        </button>\n        <mat-menu #aboveMenu=\"matMenu\" yPosition=\"below\">\n            <span  *ngFor=\"let categ of imageCategories\">\n                <button mat-menu-item [routerLink]=\"['/courses', categ.Category]\">{{categ.category}}</button>\n            </span>          \n        </mat-menu>\n    </div>\n    <div fxFlex fxLayout  fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"5px\" class=\"navigation-items\" style=\"list-style-type:none\">\n            <div class=\"row\">\n                <li style=\"margin: 10px;\"  class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <button  mat-raised-button style=\"margin: 4px;\" color=\"primary\" [routerLink]=\"['/images', 'all']\">All</button>\n                </li>\n                <li *ngFor=\"let categ of imageCategories\" style=\"margin: 10px;\"  class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <button  mat-raised-button style=\"margin: 4px;\" color=\"primary\" [routerLink]=\"['/images', categ.category]\">{{categ.category}}</button>\n                </li>\n            </div>\n        </ul>\n        <hr>\n    </div>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeamTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h4>Management</h4>\n  <hr class=\"section-hr-line\">\n\n  <div class=\"row\">\n        <div class=\"col-sm\" *ngFor= 'let member of Members'>\n            <mat-card>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>{{member.CoPosition}}</mat-card-title>\n                </mat-card-header>\n                <img mat-card-image src={{member.ImagePath}} alt=\"Photo of a Shiba Inu\">\n                <mat-card-content>\n                    <p><b>{{member.Title}}. {{member.Fname}} {{member.Lname}}</b><br>\n                        {{member.Profile  | slice:0: 100}}....<a href=\"\" (click)=\"MoreInfoOnMember()\">..Read More</a>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <hr>\n                    <button mat-button>Contact</button>\n                    <button mat-button>SHARE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"example-card\">\r\n     <mat-card-header  color=\"primary\">\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Tasc - System Login</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\r\n            <i class=\"material-icons\">error</i> Incorrect username or password\r\n        </div>\r\n        <form [formGroup]=\"TascLoginForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(TascLoginForm)\">\r\n\r\n          <div class=\"input-field-class\">            \r\n            <mat-form-field>\r\n              <mat-label>User name</mat-label>      \r\n              <input matInput placeholder=\"email address\" #username ngModel formControlName=\"username\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.username\"><b>{{formErrors.username}}</b></mat-error>\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field> \r\n              <mat-label>Account Password</mat-label>      \r\n              <input type=\"password\" matInput  #password ngModel formControlName=\"password\" placeholder=\"Password\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.password\"><b>{{formErrors.password}}</b></mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row s12\">\r\n            <button color=\"primary\" [disabled]=\"!TascLoginForm.valid\" mat-raised-button>Sign - In</button>\r\n          </div>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"example-card\" color=\"primary\">\r\n  <mat-card-header  color=\"primary\">\r\n     <div mat-card-avatar class=\"example-header-image\"></div>\r\n     <mat-card-title>Tasc - System Registration</mat-card-title>\r\n </mat-card-header>\r\n <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n <mat-card-content>\r\n     <div *ngIf=\"isRegistrationError\" class=\"red-text center error-message\">\r\n         <i class=\"material-icons\">error</i> Incorrect username or password\r\n     </div>\r\n     <form [formGroup]=\"TascRegForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(TascRegForm)\">\r\n        <div class=\"input-field-class\">\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field  class=\"col s4\">\r\n              <mat-label>First name</mat-label>\r\n              <input matInput placeholder=\"First Name\" #firstName ngModel formControlName=\"firstName\"  (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.firstName\"><b>{{formErrors.firstName}}</b></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col s4\">\r\n              <mat-label>Last name</mat-label>\r\n              <input matInput placeholder=\"Last Name\" #lastName ngModel formControlName=\"lastName\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.lastName\"><b>{{formErrors.lastName}}</b></mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field  class=\"col s4\">\r\n              <mat-label>Initials</mat-label>    \r\n              <input matInput placeholder=\"Initials\" #Initials ngModel formControlName=\"Initials\">\r\n              <mat-icon matPrefix>person_outline</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col s4\">\r\n              <mat-label>Email Address</mat-label>      \r\n              <input matInput placeholder=\"Email address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\r\n              <mat-icon matPrefix>mail</mat-icon>\r\n              <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div formGroupName=\"passwordGroup\">\r\n                <mat-form-field  class=\"col s4\">\r\n                  <mat-label>Account Password</mat-label> \r\n                  <input type=\"password\" matInput placeholder=\"Password\" #password ngModel formControlName=\"password\" (blur)=\"logValidationErrors()\">\r\n                  <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n                  <mat-error *ngIf=\"formErrors.password\"><b>{{formErrors.password}}</b></mat-error>\r\n                </mat-form-field> \r\n                <mat-form-field class=\"col s4\">\r\n                  <mat-label>Confirm Password</mat-label> \r\n                  <input type=\"password\" matInput placeholder=\"Confirm-Password\" #confirmPassword ngModel formControlName=\"confirmPassword\" (blur)=\"logValidationErrors()\">\r\n                  <mat-icon matPrefix>enhanced_encryption</mat-icon>\r\n                  <mat-error *ngIf=\"formErrors.passwordGroup || formErrors.confirmPassword\">\r\n                    <b>{{formErrors.passwordGroup ? formErrors.passwordGroup : formErrors.confirmPassword}}</b>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row s12\">\r\n            <button color=\"primary\" [disabled]=\"!TascRegForm.valid\" mat-raised-button>Sign - UP</button>\r\n          </div>\r\n\r\n\r\n        </div>\r\n     </form>\r\n </mat-card-content>\r\n</mat-card>\r\n\r\n<!-- <form class=\"col m12 white\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">  \r\n  <div class=\"row\">\r\n    <div class=\"input-field col m12\">\r\n      <input class=\"validate\" type=\"text\" name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"user.UserName\" required>\r\n      <label data-error=\"Required field!\">UserName</label>\r\n    </div>\r\n    <div class=\"input-field col s6\">\r\n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.Password\" required minlength=\"3\">\r\n      <label [attr.data-error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"user.Email\" [pattern]=\"emailPattern\">\r\n      <label data-error=\"Invalid email!\">Email</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s6\">\r\n      <input type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"user.FirstName\">\r\n      <label>First Name</label>\r\n    </div>\r\n    <div class=\"input-field col s6\">\r\n      <input type=\"text\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"user.LastName\">\r\n      <label>Last Name</label>\r\n    </div>\r\n  </div>\r\n  <mat-form-field>\r\n                          <textarea matInput placeholder=\"Textarea\"></textarea>\r\n                        </mat-form-field>\r\n                      \r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Select\">\r\n                              <mat-option value=\"option\">Option</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <button [disabled]=\"!userRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col m12 offset-s2\">\r\n      <div class=\"card primary\">\r\n\r\n        <mat-tab-group mat-stretch-tabs  color=\"primary\">\r\n          <mat-tab label = \"Sign-In\">\r\n            <app-sign-in></app-sign-in>\r\n          </mat-tab>\r\n          <mat-tab label = \"Sign-Up\"> \r\n            <app-sign-up></app-sign-up>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Admin-customer/customer-profile/customer-profile-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/Admin-customer/customer-profile/customer-profile-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: CustomerProfileRoutingModule */

  /***/
  function srcAppAdminCustomerCustomerProfileCustomerProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerProfileRoutingModule", function () {
      return CustomerProfileRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_customer_admin_layout_customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../layout/customer-admin-layout/customer-main-layout/customer-main-layout.component */
    "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts");
    /* harmony import */


    var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer-profile/customer-profile.component */
    "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts");
    /* harmony import */


    var src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/authGuard/auth.guard */
    "./src/app/auth/authGuard/auth.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'delegate',
      component: _layout_customer_admin_layout_customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["CustomerMainLayoutComponent"],
      children: [{
        path: '',
        component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileComponent"],
        canActivate: [src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          permittedRoles: ['Customer']
        }
      }, {
        path: 'profile',
        component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileComponent"],
        canActivate: [src_app_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          permittedRoles: ['Customer']
        }
      }]
    }];

    var CustomerProfileRoutingModule = function CustomerProfileRoutingModule() {
      _classCallCheck(this, CustomerProfileRoutingModule);
    };

    CustomerProfileRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    })], CustomerProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/Admin-customer/customer-profile/customer-profile.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Admin-customer/customer-profile/customer-profile.module.ts ***!
    \****************************************************************************/

  /*! exports provided: CustomerProfileModule */

  /***/
  function srcAppAdminCustomerCustomerProfileCustomerProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerProfileModule", function () {
      return CustomerProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer-profile/customer-profile.component */
    "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts");
    /* harmony import */


    var _customer_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-profile-routing.module */
    "./src/app/Admin-customer/customer-profile/customer-profile-routing.module.ts");
    /* harmony import */


    var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/material/material.module */
    "./src/app/material/material.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerProfileModule = function CustomerProfileModule() {
      _classCallCheck(this, CustomerProfileModule);
    };

    CustomerProfileModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_2__["CustomerProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerProfileRoutingModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]
    })], CustomerProfileModule);
    /***/
  },

  /***/
  "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomerCustomerProfileCustomerProfileCustomerProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2N1c3RvbWVyLXByb2ZpbGUvY3VzdG9tZXItcHJvZmlsZS9jdXN0b21lci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: CustomerProfileComponent */

  /***/
  function srcAppAdminCustomerCustomerProfileCustomerProfileCustomerProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerProfileComponent", function () {
      return CustomerProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerProfileComponent =
    /*#__PURE__*/
    function () {
      function CustomerProfileComponent() {
        _classCallCheck(this, CustomerProfileComponent);
      }

      _createClass(CustomerProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerProfileComponent;
    }();

    CustomerProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./customer-profile.component.css */
      "./src/app/Admin-customer/customer-profile/customer-profile/customer-profile.component.css")).default]
    }), __metadata("design:paramtypes", [])], CustomerProfileComponent);
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-admin-layout.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-admin-layout.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CustomerAdminLayoutModule */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerAdminLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAdminLayoutModule", function () {
      return CustomerAdminLayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer-footer/customer-footer.component */
    "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.ts");
    /* harmony import */


    var _customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-header/customer-header.component */
    "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.ts");
    /* harmony import */


    var _customer_sidebar_customer_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customer-sidebar/customer-sidebar.component */
    "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.ts");
    /* harmony import */


    var _customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer-main-layout/customer-main-layout.component */
    "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts");
    /* harmony import */


    var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerAdminLayoutModule = function CustomerAdminLayoutModule() {
      _classCallCheck(this, CustomerAdminLayoutModule);
    };

    CustomerAdminLayoutModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerFooterComponent"], _customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_3__["CustomerHeaderComponent"], _customer_sidebar_customer_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["CustomerSidebarComponent"], _customer_main_layout_customer_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["CustomerMainLayoutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([])]
    })], CustomerAdminLayoutModule);
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.css":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.css ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerFooterCustomerFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItZm9vdGVyL2N1c3RvbWVyLWZvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: CustomerFooterComponent */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerFooterCustomerFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerFooterComponent", function () {
      return CustomerFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerFooterComponent =
    /*#__PURE__*/
    function () {
      function CustomerFooterComponent() {
        _classCallCheck(this, CustomerFooterComponent);
      }

      _createClass(CustomerFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerFooterComponent;
    }();

    CustomerFooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./customer-footer.component.css */
      "./src/app/Admin-customer/layout/customer-admin-layout/customer-footer/customer-footer.component.css")).default]
    }), __metadata("design:paramtypes", [])], CustomerFooterComponent);
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.css":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.css ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerHeaderCustomerHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItaGVhZGVyL2N1c3RvbWVyLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: CustomerHeaderComponent */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerHeaderCustomerHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerHeaderComponent", function () {
      return CustomerHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerHeaderComponent =
    /*#__PURE__*/
    function () {
      function CustomerHeaderComponent() {
        _classCallCheck(this, CustomerHeaderComponent);

        this.firstName = "";
        this.lastName = "";
        this.initials = "";
      }

      _createClass(CustomerHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerHeaderComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], CustomerHeaderComponent.prototype, "firstName", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], CustomerHeaderComponent.prototype, "lastName", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], CustomerHeaderComponent.prototype, "initials", void 0);

    CustomerHeaderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer-header',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./customer-header.component.css */
      "./src/app/Admin-customer/layout/customer-admin-layout/customer-header/customer-header.component.css")).default]
    }), __metadata("design:paramtypes", [])], CustomerHeaderComponent);
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.css":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.css ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerMainLayoutCustomerMainLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItbWFpbi1sYXlvdXQvY3VzdG9tZXItbWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: CustomerMainLayoutComponent */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerMainLayoutCustomerMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerMainLayoutComponent", function () {
      return CustomerMainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/User-Service/user.service */
    "./src/app/shared/services/User-Service/user.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerMainLayoutComponent =
    /*#__PURE__*/
    function () {
      function CustomerMainLayoutComponent(route, userService) {
        _classCallCheck(this, CustomerMainLayoutComponent);

        this.route = route;
        this.userService = userService;
      }

      _createClass(CustomerMainLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserProfileDetails();
        }
      }, {
        key: "getUserProfileDetails",
        value: function getUserProfileDetails() {
          var _this = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;
            _this.firstName = _this.userDetails.firstName;
            _this.lastName = _this.userDetails.lastName;
            _this.initials = _this.userDetails.initials;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.removeItem('token');
          this.route.navigate(['./login']);
        }
      }]);

      return CustomerMainLayoutComponent;
    }();

    CustomerMainLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    CustomerMainLayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer-main-layout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer-main-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./customer-main-layout.component.css */
      "./src/app/Admin-customer/layout/customer-admin-layout/customer-main-layout/customer-main-layout.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], CustomerMainLayoutComponent);
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.css":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.css ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerSidebarCustomerSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluLWN1c3RvbWVyL2xheW91dC9jdXN0b21lci1hZG1pbi1sYXlvdXQvY3VzdG9tZXItc2lkZWJhci9jdXN0b21lci1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: CustomerSidebarComponent */

  /***/
  function srcAppAdminCustomerLayoutCustomerAdminLayoutCustomerSidebarCustomerSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerSidebarComponent", function () {
      return CustomerSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerSidebarComponent =
    /*#__PURE__*/
    function () {
      function CustomerSidebarComponent() {
        _classCallCheck(this, CustomerSidebarComponent);
      }

      _createClass(CustomerSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerSidebarComponent;
    }();

    CustomerSidebarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer-sidebar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./customer-sidebar.component.css */
      "./src/app/Admin-customer/layout/customer-admin-layout/customer-sidebar/customer-sidebar.component.css")).default]
    }), __metadata("design:paramtypes", [])], CustomerSidebarComponent);
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.css":
  /*!***********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutusAboutusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AboutusComponent =
    /*#__PURE__*/
    function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-aboutus',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./aboutus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./aboutus.component.css */
      "./src/app/aboutus/aboutus.component.css")).default]
    }), __metadata("design:paramtypes", [])], AboutusComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-home/admin-home.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/admin-home/admin-home.module.ts ***!
    \*******************************************************/

  /*! exports provided: AdminHomeModule */

  /***/
  function srcAppAdminAdminHomeAdminHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomeModule", function () {
      return AdminHomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin/admin-home/admin-home/admin-home.component.ts");
    /* harmony import */


    var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminHomeModule = function AdminHomeModule() {
      _classCallCheck(this, AdminHomeModule);
    };

    AdminHomeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_2__["AdminHomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([])]
    })], AdminHomeModule);
    /***/
  },

  /***/
  "./src/app/admin/admin-home/admin-home/admin-home.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-home/admin-home/admin-home.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminHomeAdminHomeAdminHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-home/admin-home/admin-home.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-home/admin-home/admin-home.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminHomeComponent */

  /***/
  function srcAppAdminAdminHomeAdminHomeAdminHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function () {
      return AdminHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminHomeComponent =
    /*#__PURE__*/
    function () {
      function AdminHomeComponent() {
        _classCallCheck(this, AdminHomeComponent);
      }

      _createClass(AdminHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminHomeComponent;
    }();

    AdminHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home/admin-home.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-home.component.css */
      "./src/app/admin/admin-home/admin-home/admin-home.component.css")).default]
    }), __metadata("design:paramtypes", [])], AdminHomeComponent);
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-footer/admin-footer.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/layout/admin-footer/admin-footer.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLayoutAdminFooterAdminFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1mb290ZXIvYWRtaW4tZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-footer/admin-footer.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/layout/admin-footer/admin-footer.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminFooterComponent */

  /***/
  function srcAppAdminLayoutAdminFooterAdminFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function () {
      return AdminFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminFooterComponent =
    /*#__PURE__*/
    function () {
      function AdminFooterComponent() {
        _classCallCheck(this, AdminFooterComponent);
      }

      _createClass(AdminFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminFooterComponent;
    }();

    AdminFooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-footer/admin-footer.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-footer.component.css */
      "./src/app/admin/layout/admin-footer/admin-footer.component.css")).default]
    }), __metadata("design:paramtypes", [])], AdminFooterComponent);
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-header/admin-header.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/layout/admin-header/admin-header.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLayoutAdminHeaderAdminHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-header/admin-header.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/layout/admin-header/admin-header.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminHeaderComponent */

  /***/
  function srcAppAdminLayoutAdminHeaderAdminHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function () {
      return AdminHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminHeaderComponent =
    /*#__PURE__*/
    function () {
      function AdminHeaderComponent() {
        _classCallCheck(this, AdminHeaderComponent);

        this.firstName = "";
        this.lastName = "";
        this.initials = "";
      }

      _createClass(AdminHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminHeaderComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], AdminHeaderComponent.prototype, "firstName", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], AdminHeaderComponent.prototype, "lastName", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], AdminHeaderComponent.prototype, "initials", void 0);

    AdminHeaderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-header',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-header/admin-header.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-header.component.css */
      "./src/app/admin/layout/admin-header/admin-header.component.css")).default]
    }), __metadata("design:paramtypes", [])], AdminHeaderComponent);
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-layout.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin/layout/admin-layout.module.ts ***!
    \*****************************************************/

  /*! exports provided: AdminLayoutModule */

  /***/
  function srcAppAdminLayoutAdminLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function () {
      return AdminLayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-footer/admin-footer.component */
    "./src/app/admin/layout/admin-footer/admin-footer.component.ts");
    /* harmony import */


    var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-header/admin-header.component */
    "./src/app/admin/layout/admin-header/admin-header.component.ts");
    /* harmony import */


    var _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-sidebar/admin-sidebar.component */
    "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.ts");
    /* harmony import */


    var _admin_mainlayout_admin_mainlayout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-mainlayout/admin-mainlayout.component */
    "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.ts");
    /* harmony import */


    var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminLayoutModule = function AdminLayoutModule() {
      _classCallCheck(this, AdminLayoutModule);
    };

    AdminLayoutModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_2__["AdminFooterComponent"], _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__["AdminHeaderComponent"], _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["AdminSidebarComponent"], _admin_mainlayout_admin_mainlayout_component__WEBPACK_IMPORTED_MODULE_5__["AdminMainlayoutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([])]
    })], AdminLayoutModule);
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLayoutAdminMainlayoutAdminMainlayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1tYWlubGF5b3V0L2FkbWluLW1haW5sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdminMainlayoutComponent */

  /***/
  function srcAppAdminLayoutAdminMainlayoutAdminMainlayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMainlayoutComponent", function () {
      return AdminMainlayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/User-Service/user.service */
    "./src/app/shared/services/User-Service/user.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminMainlayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminMainlayoutComponent(route, userService) {
        _classCallCheck(this, AdminMainlayoutComponent);

        this.route = route;
        this.userService = userService;
      }

      _createClass(AdminMainlayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserProfileDetails();
        }
      }, {
        key: "getUserProfileDetails",
        value: function getUserProfileDetails() {
          var _this2 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this2.userDetails = res;
            _this2.firstName = _this2.userDetails.firstName;
            _this2.lastName = _this2.userDetails.lastName;
            _this2.initials = _this2.userDetails.initials;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.removeItem('token');
          this.route.navigate(['./login']);
        }
      }]);

      return AdminMainlayoutComponent;
    }();

    AdminMainlayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AdminMainlayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-mainlayout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-mainlayout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-mainlayout.component.css */
      "./src/app/admin/layout/admin-mainlayout/admin-mainlayout.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], AdminMainlayoutComponent);
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/admin/layout/admin-sidebar/admin-sidebar.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLayoutAdminSidebarAdminSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/layout/admin-sidebar/admin-sidebar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminSidebarComponent */

  /***/
  function srcAppAdminLayoutAdminSidebarAdminSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function () {
      return AdminSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminSidebarComponent =
    /*#__PURE__*/
    function () {
      function AdminSidebarComponent() {
        _classCallCheck(this, AdminSidebarComponent);
      }

      _createClass(AdminSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminSidebarComponent;
    }();

    AdminSidebarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-sidebar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/admin-sidebar/admin-sidebar.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-sidebar.component.css */
      "./src/app/admin/layout/admin-sidebar/admin-sidebar.component.css")).default]
    }), __metadata("design:paramtypes", [])], AdminSidebarComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/sign-up/sign-up.component */
    "./src/app/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/sign-in/sign-in.component */
    "./src/app/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tasc-images/gallery/gallery.component */
    "./src/app/tasc-images/gallery/gallery.component.ts");
    /* harmony import */


    var _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tasc-courses/courses/courses.component */
    "./src/app/tasc-courses/courses/courses.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth/authGuard/auth.guard */
    "./src/app/auth/authGuard/auth.guard.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    ;
    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'tascusers',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'aboutus',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"]
    }, {
      path: 'courses',
      component: _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"]
    }, {
      path: 'courses/:department',
      component: _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"]
    }, {
      path: 'team',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"]
    }, {
      path: 'contactus',
      component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"]
    }, {
      path: 'images',
      component: _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"]
    }, {
      path: 'images/:category',
      component: _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"]
    }, {
      path: 'admin',
      redirectTo: 'admin/home',
      canActivate: [_auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'signup',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      children: [{
        path: '',
        component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
      }]
    }, {
      path: 'login',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      children: [{
        path: '',
        component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 250px;\r\n}\r\n\r\nmain {\r\n    padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navigation/header/header.component */
    "./src/app/navigation/header/header.component.ts");
    /* harmony import */


    var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navigation/sidenav-list/sidenav-list.component */
    "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user/sign-in/sign-in.component */
    "./src/app/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user/sign-up/sign-up.component */
    "./src/app/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/services/User-Service/user.service */
    "./src/app/shared/services/User-Service/user.service.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./tasc-images/gallery/gallery.component */
    "./src/app/tasc-images/gallery/gallery.component.ts");
    /* harmony import */


    var _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./tasc-courses/courses/courses.component */
    "./src/app/tasc-courses/courses/courses.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _auth_Interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./auth/Interceptor/auth.interceptor */
    "./src/app/auth/Interceptor/auth.interceptor.ts");
    /* harmony import */


    var _shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/services/course-service/course.service */
    "./src/app/shared/services/course-service/course.service.ts");
    /* harmony import */


    var _tasc_courses_course_navigation_course_navigation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./tasc-courses/course-navigation/course-navigation.component */
    "./src/app/tasc-courses/course-navigation/course-navigation.component.ts");
    /* harmony import */


    var _tasc_courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./tasc-courses/course-list/course-list.component */
    "./src/app/tasc-courses/course-list/course-list.component.ts");
    /* harmony import */


    var _tasc_images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./tasc-images/image-list/image-list.component */
    "./src/app/tasc-images/image-list/image-list.component.ts");
    /* harmony import */


    var _tasc_images_image_navigation_image_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./tasc-images/image-navigation/image-navigation.component */
    "./src/app/tasc-images/image-navigation/image-navigation.component.ts");
    /* harmony import */


    var _shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./shared/services/image-service/image.service */
    "./src/app/shared/services/image-service/image.service.ts");
    /* harmony import */


    var _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./forbiden/forbiden.component */
    "./src/app/forbiden/forbiden.component.ts");
    /* harmony import */


    var _admin_admin_home_admin_home_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/admin-home/admin-home.module */
    "./src/app/admin/admin-home/admin-home.module.ts");
    /* harmony import */


    var _Admin_customer_layout_customer_admin_layout_customer_admin_layout_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./Admin-customer/layout/customer-admin-layout/customer-admin-layout.module */
    "./src/app/Admin-customer/layout/customer-admin-layout/customer-admin-layout.module.ts");
    /* harmony import */


    var _Admin_customer_customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./Admin-customer/customer-profile/customer-profile.module */
    "./src/app/Admin-customer/customer-profile/customer-profile.module.ts");
    /* harmony import */


    var _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./admin/layout/admin-layout.module */
    "./src/app/admin/layout/admin-layout.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"], _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"], _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"], _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_21__["AboutusComponent"], _tasc_images_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"], _tasc_courses_courses_courses_component__WEBPACK_IMPORTED_MODULE_23__["CoursesComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_24__["TeamComponent"], _tasc_courses_course_navigation_course_navigation_component__WEBPACK_IMPORTED_MODULE_27__["CourseNavigationComponent"], _tasc_courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_28__["CourseListComponent"], _tasc_images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_29__["ImageListComponent"], _tasc_images_image_navigation_image_navigation_component__WEBPACK_IMPORTED_MODULE_30__["ImageNavigationComponent"], _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_32__["ForbidenComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_36__["AdminLayoutModule"], _admin_admin_home_admin_home_module__WEBPACK_IMPORTED_MODULE_33__["AdminHomeModule"], _Admin_customer_layout_customer_admin_layout_customer_admin_layout_module__WEBPACK_IMPORTED_MODULE_34__["CustomerAdminLayoutModule"], _Admin_customer_customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_35__["CustomerProfileModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
        progressBar: true
      })],
      providers: [_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_31__["ImageService"], _shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_26__["CourseService"], _shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _auth_Interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/Interceptor/auth.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/Interceptor/auth.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthInterceptorAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this3 = this;

          if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) {}, function (err) {
              if (err.status == 401) {
                localStorage.removeItem('token');

                _this3.router.navigateByUrl('/user/login');
              } else if (err.status == 403) _this3.router.navigateByUrl('/forbidden');
            }));
          } else return next.handle(req.clone());
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/auth/authGuard/auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/authGuard/auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/User-Service/user.service */
    "./src/app/shared/services/User-Service/user.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthGuard =
    /*#__PURE__*/
    function () {
      /**
       *
       */
      function AuthGuard(router, service) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.service = service;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token') != null) {
            var roles = next.data['permittedRoles'];

            if (roles) {
              if (this.service.roleMatch(roles)) return true;else {
                this.router.navigate(['/forbidden']);
                return false;
              }
            }

            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/banner/banner.component.css":
  /*!*********************************************!*\
    !*** ./src/app/banner/banner.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBannerBannerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/banner/banner.component.ts":
  /*!********************************************!*\
    !*** ./src/app/banner/banner.component.ts ***!
    \********************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BannerComponent =
    /*#__PURE__*/
    function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-banner',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./banner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./banner.component.css */
      "./src/app/banner/banner.component.css")).default]
    }), __metadata("design:paramtypes", [])], BannerComponent);
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.css":
  /*!***************************************************!*\
    !*** ./src/app/contactus/contactus.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactusContactusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-field-class {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  /* ::ng-deep .mat-card-header{\r\n  padding-top: 3px;\r\n  background-color: #5f0310 !important;\r\n  color: white;\r\n}  */\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #5f0310 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUE7Ozs7SUFJSTs7RUFFSjtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztFQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztFQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5sb2dpbi1pY29ue1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1zZWN0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYwMzEwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59ICAqL1xyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJke1xyXG4gIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactus/contactus.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_emailService_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/emailService/email.service */
    "./src/app/shared/services/emailService/email.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ContactusComponent =
    /*#__PURE__*/
    function () {
      function ContactusComponent(toastr, fb, emailService) {
        var _this4 = this;

        _classCallCheck(this, ContactusComponent);

        this.toastr = toastr;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control

        this.formErrors = {
          'fullName': '',
          'emailAddress': '',
          'subject': '',
          'message': ''
        }; // This object contains all the validation messages for this form

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
            'maxlength': 'Subject must be less than 150 characters.'
          },
          'message': {
            'required': 'Message is required.',
            'minlength': 'Message must be greater than 5 characters.',
            'maxlength': 'Message must be less than 150 characters.'
          }
        };

        this.hasError = function (controlName, errorName) {
          return _this4.ContactForm.controls[controlName].hasError(errorName);
        };
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.ContactForm = this.fb.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)])
          });
          this.ContactForm.valueChanges.subscribe(function (data) {
            _this5.logValidationErrors(_this5.ContactForm);
          });
        }
      }, {
        key: "logValidationErrors",
        value: function logValidationErrors() {
          var _this6 = this;

          var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ContactForm;
          Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this6.formErrors[key] = '';

            if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
              var messages = _this6.validationMessages[key];

              for (var errorKey in abstractControl.errors) {
                if (errorKey) {
                  _this6.formErrors[key] += messages[errorKey] + ' ';
                }
              }
            }

            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
              _this6.logValidationErrors(abstractControl);
            }
          });
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {// var formData = form.value;
          // const userData: User = this.getUserInformation(formData)
          // this.userService.registerUser(userData)
          //   .subscribe((data: any) => {
          //     if (data.succeeded == true) {
          //       this.resetForm(form);
          //       this.toastr.success('User registration successful', "Success!");
          //     }
          //     else
          //       this.toastr.error(data.errors[0].description);
          //   });
        }
      }, {
        key: "getUserInformation",
        value: function getUserInformation(formData) {
          return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
          };
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form != null) form.reset();
          this.contactData = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
          };
        }
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_emailService_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]
      }];
    };

    ContactusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-contactus',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./contactus.component.css */
      "./src/app/contactus/contactus.component.css")).default]
    }), __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_emailService_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Flaired edges, by Tomas Theunissen */\r\n\r\n.one {\r\n    overflow: visible; /* For IE */\r\n    padding: 0;\r\n    height: 30px;\r\n    border: none;\r\n    border-top: medium double #333;\r\n    color: #5f0310;\r\n    text-align: center;\r\n    border-width: 1px 0 0 0;\r\n    border-radius: 20px;\r\n}\r\n\r\n.one:before { /* Not really supposed to work, but does */\r\n    content: \"§\";\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -0.7em;\r\n    font-size: 1.5em;\r\n    padding: 0 0.25em;\r\n    background: white;\r\n    border-color: #5f0310;\r\n    border-width: 0 0 1px 0;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7QUFFdkM7SUFDSSxpQkFBaUIsRUFBRSxXQUFXO0lBQzlCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0EsY0FBYywwQ0FBMEM7SUFDcEQsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmxhaXJlZCBlZGdlcywgYnkgVG9tYXMgVGhldW5pc3NlbiAqL1xyXG5cclxuLm9uZSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRm9yIElFICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbWVkaXVtIGRvdWJsZSAjMzMzO1xyXG4gICAgY29sb3I6ICM1ZjAzMTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLm9uZTpiZWZvcmUgeyAvKiBOb3QgcmVhbGx5IHN1cHBvc2VkIHRvIHdvcmssIGJ1dCBkb2VzICovXHJcbiAgICBjb250ZW50OiBcIsKnXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0wLjdlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWYwMzEwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    }), __metadata("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/forbiden/forbiden.component.css":
  /*!*************************************************!*\
    !*** ./src/app/forbiden/forbiden.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForbidenForbidenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-card-header{\r\n    background-color: red !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yYmlkZW4vZm9yYmlkZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JiaWRlbi9mb3JiaWRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/forbiden/forbiden.component.ts":
  /*!************************************************!*\
    !*** ./src/app/forbiden/forbiden.component.ts ***!
    \************************************************/

  /*! exports provided: ForbidenComponent */

  /***/
  function srcAppForbidenForbidenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbidenComponent", function () {
      return ForbidenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ForbidenComponent =
    /*#__PURE__*/
    function () {
      function ForbidenComponent() {
        _classCallCheck(this, ForbidenComponent);
      }

      _createClass(ForbidenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForbidenComponent;
    }();

    ForbidenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-forbiden',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./forbiden.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forbiden/forbiden.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./forbiden.component.css */
      "./src/app/forbiden/forbiden.component.css")).default]
    }), __metadata("design:paramtypes", [])], ForbidenComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section div h3{\r\n    color: #3f51b5;\r\n    font-size: 30px;\r\n    text-shadow: 2px 3px 5px grey;\r\n    margin: 30px 0;\r\n}\r\n\r\nsection div + h3{\r\n    color: #3f51b5;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\nmat-tab-group {\r\n    text-align: center;\r\n}\r\n\r\nmat-tab-group p {\r\n    padding-top: 20px;\r\n}\r\n\r\n::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n  }\r\n\r\n::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  }\r\n\r\n::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n\r\n.image {\r\n     background-color: transparent;\r\n     background-repeat: no-repeat;\r\n     background-size: cover;\r\n     background-position: center center;\r\n     width: 100%;\r\n     height: 90%;\r\n    \r\n  }\r\n\r\n.photo {\r\n    background-image: url('http://www.thinksnaps.com/wp-content/uploads/2014/07/images-background.jpg');\r\n    background-size: 300px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 50%;\r\n    background-clip: border-box;\r\n    -webkit-transition: background-size 0.2s;\r\n    transition: background-size 0.2s;\r\n    -webkit-transition-timing-function: cubic-bezier(.07,1.41,.82,1.41);\r\n            transition-timing-function: cubic-bezier(.07,1.41,.82,1.41);\r\n\r\n    display: block;\r\n    width: 190px;\r\n    height: 190px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    text-indent: 100%;\r\n    white-space:nowrap;\r\n}\r\n\r\n.photo:hover {\r\n    background-size: 500px;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVDO0lBQ0csb0NBQW9DO0VBQ3RDOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtLQUNHLDZCQUE2QjtLQUM3Qiw0QkFBNEI7S0FDNUIsc0JBQXNCO0tBQ3RCLGtDQUFrQztLQUNsQyxXQUFXO0tBQ1gsV0FBVzs7RUFFZDs7QUFFQTtJQUNFLG1HQUFtRztJQUNuRyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFDaEMsbUVBQTJEO1lBQTNELDJEQUEyRDs7SUFFM0QsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiBkaXYgaDN7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtc2hhZG93OiAycHggM3B4IDVweCBncmV5O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gZGl2ICsgaDN7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHAge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiA6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjAzMTAgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5waG90byB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly93d3cudGhpbmtzbmFwcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDcvaW1hZ2VzLWJhY2tncm91bmQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMDcsMS40MSwuODIsMS40MSk7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG59XHJcblxyXG4ucGhvdG86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MDBweDtcclxufVxyXG5cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.executeSelectedChange = function (event) {
          console.log(event);
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    }), __metadata("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.component.css":
  /*!*********************************************!*\
    !*** ./src/app/layout/layout.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-layout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./layout.component.css */
      "./src/app/layout/layout.component.css")).default]
    }), __metadata("design:paramtypes", [])], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var materialComponents = [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [materialComponents],
      exports: [materialComponents]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/navigation/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/navigation/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 0.8em;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nmat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n\r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navigation/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/navigation/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppNavigationHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        var _this7 = this;

        _classCallCheck(this, HeaderComponent);

        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.onToggleSidenav = function () {
          _this7.sidenavToggle.emit();
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], HeaderComponent.prototype, "sidenavToggle", void 0);

    HeaderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-header',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./header.component.css */
      "./src/app/navigation/header/header.component.css")).default]
    }), __metadata("design:paramtypes", [])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/navigation/sidenav-list/sidenav-list.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationSidenavListSidenavListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.nav-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXYtY2FwdGlvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SidenavListComponent */

  /***/
  function srcAppNavigationSidenavListSidenavListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function () {
      return SidenavListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SidenavListComponent =
    /*#__PURE__*/
    function () {
      function SidenavListComponent() {
        var _this8 = this;

        _classCallCheck(this, SidenavListComponent);

        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.onSidenavClose = function () {
          _this8.sidenavClose.emit();
        };
      }

      _createClass(SidenavListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidenavListComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], SidenavListComponent.prototype, "sidenavClose", void 0);

    SidenavListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sidenav-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sidenav-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./sidenav-list.component.css */
      "./src/app/navigation/sidenav-list/sidenav-list.component.css")).default]
    }), __metadata("design:paramtypes", [])], SidenavListComponent);
    /***/
  },

  /***/
  "./src/app/shared/services/User-Service/user.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/User-Service/user.service.ts ***!
    \**************************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, fb) {
        _classCallCheck(this, UserService);

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

      _createClass(UserService, [{
        key: "registerUser",
        value: function registerUser(user) {
          var body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
          };
          var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'No-Auth': 'True'
          });
          return this.http.post(this.rootUrl + 'api/ApplicationUser/Register', body, {
            headers: reqHeader
          });
        }
      }, {
        key: "userAuthentication",
        value: function userAuthentication(formData) {
          return this.http.post(this.rootUrl + 'api/applicationUser/Login', formData);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var token = localStorage.getItem('token');
          var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': ' Bearer ' + token
          });
          return this.http.get(this.rootUrl + 'api/UserProfile', {
            headers: tokenHeader
          });
        }
      }, {
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
          var userRole = payLoad.role;
          allowedRoles.forEach(function (element) {
            if (userRole == element) {
              isMatch = true;
              return false;
            }
          });
          return isMatch;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    UserService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], UserService);
    /***/
  },

  /***/
  "./src/app/shared/services/course-service/course.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/services/course-service/course.service.ts ***!
    \******************************************************************/

  /*! exports provided: CourseService */

  /***/
  function srcAppSharedServicesCourseServiceCourseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseService", function () {
      return CourseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CourseService =
    /*#__PURE__*/
    function () {
      function CourseService(http) {
        _classCallCheck(this, CourseService);

        this.http = http;
        this.courseUrl = "assets/api/courses/courses.json";
      }

      _createClass(CourseService, [{
        key: "getCourses",
        value: function getCourses() {
          return this.http.get(this.courseUrl);
        } // getCourses2(): Promise<CourseModel[]> {
        //   return this.getCourses().toPromise<CourseModel[]>()
        //     .then(courses => courses.map(course => course));
        // }

      }, {
        key: "getDepartments",
        value: function getDepartments() {
          return this.getCourses().toPromise().then(function (courses) {
            return courses.map(function (course) {
              return course.Category;
            });
          });
        }
      }, {
        key: "getCourseForDepartment",
        value: function getCourseForDepartment(departmentName) {
          return this.getCourses().toPromise().then(function (courses) {
            return courses.filter(function (course) {
              return course.Category === departmentName;
            });
          });
        }
      }, {
        key: "getCoursesForDepartment",
        value: function getCoursesForDepartment() {
          var _this9 = this;

          var coursesForDepartment = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.getDepartments().then(function (depts) {
            var departmentSet = new Set(depts);
            departmentSet.forEach(function (dept) {
              _this9.getCourses().toPromise().then(function (courses) {
                return courses.filter(function (course) {
                  return course.Category === dept;
                });
              }).then(function (courses) {
                return coursesForDepartment.next({
                  department: dept,
                  courses: courses
                });
              });
            });
          });
          return coursesForDepartment;
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
        }
      }]);

      return CourseService;
    }();

    CourseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CourseService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CourseService);
    /***/
  },

  /***/
  "./src/app/shared/services/emailService/email.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/services/emailService/email.service.ts ***!
    \***************************************************************/

  /*! exports provided: EmailService */

  /***/
  function srcAppSharedServicesEmailServiceEmailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailService", function () {
      return EmailService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EmailService = function EmailService() {
      _classCallCheck(this, EmailService);
    };

    EmailService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], EmailService);
    /***/
  },

  /***/
  "./src/app/shared/services/image-service/image.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/services/image-service/image.service.ts ***!
    \****************************************************************/

  /*! exports provided: ImageService */

  /***/
  function srcAppSharedServicesImageServiceImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ImageService =
    /*#__PURE__*/
    function () {
      function ImageService(http) {
        _classCallCheck(this, ImageService);

        this.http = http;
        this.imageUrl = "assets/api/images/image.json";
      }

      _createClass(ImageService, [{
        key: "getAllImages",
        value: function getAllImages() {
          return this.http.get(this.imageUrl);
        }
      }, {
        key: "getImageById",
        value: function getImageById(imageId) {
          return this.getAllImages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (images) {
            return images.find(function (image) {
              return image.ImageId == imageId;
            });
          }));
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.getAllImages().toPromise().then(function (images) {
            return images.map(function (image) {
              return image.Category;
            });
          });
        }
      }, {
        key: "getImagesByCategory",
        value: function getImagesByCategory(category) {
          if (category === 'all') {
            return this.getAllImages().toPromise();
          }

          return this.getAllImages().toPromise().then(function (images) {
            return images.filter(function (image) {
              return image.Category === category;
            });
          });
        }
      }, {
        key: "getImagesForCategory",
        value: function getImagesForCategory() {
          var _this10 = this;

          var imagesForCategory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.getCategories().then(function (depts) {
            var departmentSet = new Set(depts);
            departmentSet.forEach(function (categ) {
              _this10.getAllImages().toPromise().then(function (images) {
                return images.filter(function (image) {
                  return image.Category === categ;
                });
              }).then(function (images) {
                return imagesForCategory.next({
                  category: categ,
                  images: images
                });
              });
            });
          });
          return imagesForCategory;
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
        }
      }]);

      return ImageService;
    }();

    ImageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ImageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ImageService);
    /***/
  },

  /***/
  "./src/app/shared/services/team-service/team.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/team-service/team.service.ts ***!
    \**************************************************************/

  /*! exports provided: TeamService */

  /***/
  function srcAppSharedServicesTeamServiceTeamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamService", function () {
      return TeamService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TeamService =
    /*#__PURE__*/
    function () {
      function TeamService() {
        _classCallCheck(this, TeamService);
      }

      _createClass(TeamService, [{
        key: "GetTeamMembers",
        value: function GetTeamMembers() {
          return [{
            'Title': 'Mr',
            'Fname': 'Taurayi',
            'Lname': 'Sihamba',
            'CoPosition': 'Managing Director ',
            'Qualification': 'PhD in Economics',
            'ProfilPicture': 'assets/images/profile_pics/male_user.png',
            'Profile': 'Mr Sihamba is a qualified Economist, with vast experience in economic development ',
            'ImagePath': 'assets/images/users/user-male-icon.png'
          }, {
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
          }, {
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
          }];
        }
      }]);

      return TeamService;
    }();

    TeamService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], TeamService);
    /***/
  },

  /***/
  "./src/app/tasc-courses/course-list/course-list.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/tasc-courses/course-list/course-list.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTascCoursesCourseListCourseListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzYy1jb3Vyc2VzL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtY291cnNlcy9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMCAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tasc-courses/course-list/course-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/tasc-courses/course-list/course-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CourseListComponent */

  /***/
  function srcAppTascCoursesCourseListCourseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseListComponent", function () {
      return CourseListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/course-service/course.service */
    "./src/app/shared/services/course-service/course.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CourseListComponent =
    /*#__PURE__*/
    function () {
      function CourseListComponent(courseService) {
        _classCallCheck(this, CourseListComponent);

        this.courseService = courseService;
        this.department = '';
        this.CourseList = [];
        this.CourseDescription = [];
      }

      _createClass(CourseListComponent, [{
        key: "getCoursesPerDepartment",
        value: function getCoursesPerDepartment() {
          var _this11 = this;

          return this.courseService.getCourseForDepartment(this.department).then(function (courses) {
            _this11.CourseList = courses;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.getCoursesPerDepartment();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CourseListComponent;
    }();

    CourseListComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], CourseListComponent.prototype, "department", void 0);

    CourseListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-course-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./course-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-list/course-list.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./course-list.component.css */
      "./src/app/tasc-courses/course-list/course-list.component.css")).default]
    }), __metadata("design:paramtypes", [src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])], CourseListComponent);
    /***/
  },

  /***/
  "./src/app/tasc-courses/course-navigation/course-navigation.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/tasc-courses/course-navigation/course-navigation.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTascCoursesCourseNavigationCourseNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtY291cnNlcy9jb3Vyc2UtbmF2aWdhdGlvbi9jb3Vyc2UtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasc-courses/course-navigation/course-navigation.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/tasc-courses/course-navigation/course-navigation.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CourseNavigationComponent */

  /***/
  function srcAppTascCoursesCourseNavigationCourseNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseNavigationComponent", function () {
      return CourseNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/course-service/course.service */
    "./src/app/shared/services/course-service/course.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CourseNavigationComponent =
    /*#__PURE__*/
    function () {
      function CourseNavigationComponent(service) {
        _classCallCheck(this, CourseNavigationComponent);

        this.service = service;
        this.departments = [];
        this.navbarOpen = false;
      }

      _createClass(CourseNavigationComponent, [{
        key: "getDepartments",
        value: function getDepartments() {
          var _this12 = this;

          return this.service.getCoursesForDepartment().subscribe(function (response) {
            return _this12.departments.push(response);
          });
        }
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.navbarOpen = !this.navbarOpen;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartments();
        }
      }]);

      return CourseNavigationComponent;
    }();

    CourseNavigationComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]
      }];
    };

    CourseNavigationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-course-navigation',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./course-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/course-navigation/course-navigation.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./course-navigation.component.css */
      "./src/app/tasc-courses/course-navigation/course-navigation.component.css")).default]
    }), __metadata("design:paramtypes", [src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])], CourseNavigationComponent);
    /***/
  },

  /***/
  "./src/app/tasc-courses/courses/courses.component.css":
  /*!************************************************************!*\
    !*** ./src/app/tasc-courses/courses/courses.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTascCoursesCoursesCoursesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtY291cnNlcy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tasc-courses/courses/courses.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tasc-courses/courses/courses.component.ts ***!
    \***********************************************************/

  /*! exports provided: CoursesComponent */

  /***/
  function srcAppTascCoursesCoursesCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursesComponent", function () {
      return CoursesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/course-service/course.service */
    "./src/app/shared/services/course-service/course.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CoursesComponent =
    /*#__PURE__*/
    function () {
      function CoursesComponent(route, courseService) {
        _classCallCheck(this, CoursesComponent);

        this.route = route;
        this.courseService = courseService;
        this.department = '';
        this.CourseList = [];
      }

      _createClass(CoursesComponent, [{
        key: "getCourses",
        value: function getCourses() {
          var _this13 = this;

          this.courseService.getCourses().subscribe(function (response) {
            _this13.CourseList = response;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.params.subscribe(function (p) {
            return _this14.department = p['department'];
          });
        }
      }]);

      return CoursesComponent;
    }();

    CoursesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]
      }];
    };

    CoursesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-courses',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./courses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-courses/courses/courses.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./courses.component.css */
      "./src/app/tasc-courses/courses/courses.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_shared_services_course_service_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])], CoursesComponent);
    /***/
  },

  /***/
  "./src/app/tasc-images/gallery/gallery.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/tasc-images/gallery/gallery.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTascImagesGalleryGalleryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtaW1hZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasc-images/gallery/gallery.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/tasc-images/gallery/gallery.component.ts ***!
    \**********************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppTascImagesGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/image-service/image.service */
    "./src/app/shared/services/image-service/image.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent(route, router, imageService) {
        _classCallCheck(this, GalleryComponent);

        this.route = route;
        this.router = router;
        this.imageService = imageService;
        this.category = '';
        this.ImageList = [];
      }

      _createClass(GalleryComponent, [{
        key: "getImages",
        value: function getImages() {
          var _this15 = this;

          this.imageService.getAllImages().subscribe(function (response) {
            _this15.ImageList = response;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.router.navigateByUrl('/images/all');
          this.route.params.subscribe(function (p) {
            return _this16.category = p['category'];
          });
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]
      }];
    };

    GalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-gallery',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/gallery/gallery.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./gallery.component.css */
      "./src/app/tasc-images/gallery/gallery.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])], GalleryComponent);
    /***/
  },

  /***/
  "./src/app/tasc-images/image-list/image-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/tasc-images/image-list/image-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTascImagesImageListImageListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom.mat-card{\r\n    padding: 0;\r\n   }\r\n\r\n.mat-card-content {\r\n    font-size: 24px;\r\n    padding: 0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzYy1pbWFnZXMvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0dBQ1g7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdGFzYy1pbWFnZXMvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgfVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tasc-images/image-list/image-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/tasc-images/image-list/image-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: ImageListComponent */

  /***/
  function srcAppTascImagesImageListImageListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageListComponent", function () {
      return ImageListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/image-service/image.service */
    "./src/app/shared/services/image-service/image.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ImageListComponent =
    /*#__PURE__*/
    function () {
      function ImageListComponent(imageService) {
        _classCallCheck(this, ImageListComponent);

        this.imageService = imageService;
        this.category = '';
        this.ImageList = [];
      }

      _createClass(ImageListComponent, [{
        key: "getImagesPerCategory",
        value: function getImagesPerCategory() {
          var _this17 = this;

          return this.imageService.getImagesByCategory(this.category).then(function (images) {
            _this17.ImageList = images;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.getImagesPerCategory();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageListComponent;
    }();

    ImageListComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], ImageListComponent.prototype, "category", void 0);

    ImageListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-image-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./image-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-list/image-list.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./image-list.component.css */
      "./src/app/tasc-images/image-list/image-list.component.css")).default]
    }), __metadata("design:paramtypes", [src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])], ImageListComponent);
    /***/
  },

  /***/
  "./src/app/tasc-images/image-navigation/image-navigation.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/tasc-images/image-navigation/image-navigation.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTascImagesImageNavigationImageNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2MtaW1hZ2VzL2ltYWdlLW5hdmlnYXRpb24vaW1hZ2UtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasc-images/image-navigation/image-navigation.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/tasc-images/image-navigation/image-navigation.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ImageNavigationComponent */

  /***/
  function srcAppTascImagesImageNavigationImageNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageNavigationComponent", function () {
      return ImageNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/image-service/image.service */
    "./src/app/shared/services/image-service/image.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ImageNavigationComponent =
    /*#__PURE__*/
    function () {
      function ImageNavigationComponent(imageService) {
        _classCallCheck(this, ImageNavigationComponent);

        this.imageService = imageService;
        this.imageCategories = [];
      }

      _createClass(ImageNavigationComponent, [{
        key: "getImageCategories",
        value: function getImageCategories() {
          var _this18 = this;

          return this.imageService.getImagesForCategory().subscribe(function (response) {
            return _this18.imageCategories.push(response);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getImageCategories();
        }
      }]);

      return ImageNavigationComponent;
    }();

    ImageNavigationComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]
      }];
    };

    ImageNavigationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-image-navigation',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./image-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasc-images/image-navigation/image-navigation.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./image-navigation.component.css */
      "./src/app/tasc-images/image-navigation/image-navigation.component.css")).default]
    }), __metadata("design:paramtypes", [src_app_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])], ImageNavigationComponent);
    /***/
  },

  /***/
  "./src/app/team/team.component.css":
  /*!*****************************************!*\
    !*** ./src/app/team/team.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeamTeamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjAzMTAgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/team-service/team.service */
    "./src/app/shared/services/team-service/team.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TeamComponent =
    /*#__PURE__*/
    function () {
      function TeamComponent(teamService) {
        _classCallCheck(this, TeamComponent);

        this.teamService = teamService;
        this.Members = [];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Members = this.teamService.GetTeamMembers();
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ctorParameters = function () {
      return [{
        type: _shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]
      }];
    };

    TeamComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-team',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./team.component.css */
      "./src/app/team/team.component.css")).default]
    }), __metadata("design:paramtypes", [_shared_services_team_service_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])], TeamComponent);
    /***/
  },

  /***/
  "./src/app/user/sign-in/sign-in.component.css":
  /*!****************************************************!*\
    !*** ./src/app/user/sign-in/sign-in.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-field-class {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-icon{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .icon-section{\r\n  margin-right: 10px;\r\n}\r\n  \r\n  ::ng-deep .mat-card-header{\r\n  background-color: #5f0310 !important;\r\n  color: white;\r\n  padding:5px !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card{\r\n  padding:0 !important;\r\n}\r\n  \r\n  ::ng-deep .mat-card-content{\r\n  padding:5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVGO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0VBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0VBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5sb2dpbi1pY29ue1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1zZWN0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJke1xyXG4gIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/sign-in/sign-in.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/sign-in/sign-in.component.ts ***!
    \***************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppUserSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/User-Service/user.service */
    "./src/app/shared/services/User-Service/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(userService, toastr, fb, router) {
        _classCallCheck(this, SignInComponent);

        this.userService = userService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.isLoginError = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control

        this.formErrors = {
          'username': '',
          'password': ''
        }; // This object contains all the validation messages for this form

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

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          if (localStorage.getItem('token') != null) {
            var localStorageData = localStorage.getItem('token');
            this.navigateUserBasedOnRole(localStorageData);
          }

          this.TascLoginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)])
          });
          this.TascLoginForm.valueChanges.subscribe(function (data) {
            _this19.logValidationErrors(_this19.TascLoginForm);
          });
        } // Logs validation error messages

      }, {
        key: "logValidationErrors",
        value: function logValidationErrors() {
          var _this20 = this;

          var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.TascLoginForm;
          Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this20.formErrors[key] = '';

            if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
              var messages = _this20.validationMessages[key];

              for (var errorKey in abstractControl.errors) {
                if (errorKey) {
                  _this20.formErrors[key] += messages[errorKey] + ' ';
                }
              }
            }
          });
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this21 = this;

          var formData = form.value;
          this.userService.userAuthentication(formData).subscribe(function (data) {
            form.reset();
            localStorage.setItem('token', data.token);
            var localStorageData = localStorage.getItem('token');

            _this21.navigateUserBasedOnRole(localStorageData);
          }, function (err) {
            _this21.isLoginError = true;

            if (err.status == 400) {
              _this21.toastr.error('Username or password is incorrect.', 'Authentication failed.');
            } else {
              console.log("DATA" + formData);
              form.reset();
            }
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form != null) {
            form.reset();
          }
        }
      }, {
        key: "navigateUserBasedOnRole",
        value: function navigateUserBasedOnRole(localStorage) {
          var jwtData = localStorage.split('.')[1];
          var decodedJwtJsonData = window.atob(jwtData);
          var jwtUserRole = JSON.parse(decodedJwtJsonData).role;

          if (jwtUserRole === 'Customer') {
            this.router.navigateByUrl('/delegate/profile');
          } else if (jwtUserRole === 'Admin' || jwtUserRole === 'SuperAdmin') {
            this.router.navigateByUrl('/admin/tasc-admin');
          } else {
            //localStorage.removeItem('token');
            // this.router.navigate(['./login'])
            console.log("Can not find this role " + jwtUserRole);
          }
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignInComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sign-in',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/user/sign-in/sign-in.component.css")).default]
    }), __metadata("design:paramtypes", [src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SignInComponent);
    /***/
  },

  /***/
  "./src/app/user/sign-up/sign-up.component.css":
  /*!****************************************************!*\
    !*** ./src/app/user/sign-up/sign-up.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-card-header{\r\n    background-color: #5f0310 !important;\r\n    color: white;\r\n    padding:5px !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card{\r\n    padding:0 !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDMxMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user/sign-up/sign-up.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/sign-up/sign-up.component.ts ***!
    \***************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppUserSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/User-Service/user.service */
    "./src/app/shared/services/User-Service/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(userService, toastr, fb) {
        var _this22 = this;

        _classCallCheck(this, SignUpComponent);

        this.userService = userService;
        this.toastr = toastr;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control

        this.formErrors = {
          'firstName': '',
          'lastName': '',
          'emailAddress': '',
          'password': '',
          'confirmPassword': '',
          'passwordGroup': ''
        }; // This object contains all the validation messages for this form

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
            'maxlength': 'Password must be less than 150 characters.'
          },
          'confirmPassword': {
            'required': 'Confirm Password is required.',
            'minlength': 'Confirm Password must be greater than 5 characters.',
            'maxlength': 'Confirm Password must be less than 150 characters.'
          },
          'passwordGroup': {
            'passwordMisMatch': 'Password and confirm Password do not match'
          }
        };

        this.hasError = function (controlName, errorName) {
          return _this22.TascRegForm.controls[controlName].hasError(errorName);
        };
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.TascRegForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            Initials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            passwordGroup: this.fb.group({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)])
            }, {
              validators: matchPassword
            })
          });
          this.TascRegForm.valueChanges.subscribe(function (data) {
            _this23.logValidationErrors(_this23.TascRegForm);
          });
        } // Logs validation error messages

      }, {
        key: "logValidationErrors",
        value: function logValidationErrors() {
          var _this24 = this;

          var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.TascRegForm;
          Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this24.formErrors[key] = '';

            if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
              var messages = _this24.validationMessages[key];

              for (var errorKey in abstractControl.errors) {
                if (errorKey) {
                  _this24.formErrors[key] += messages[errorKey] + ' ';
                }
              }
            }

            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
              _this24.logValidationErrors(abstractControl);
            }
          });
        }
      }, {
        key: "OnSubmit",
        value: function OnSubmit(form) {
          var _this25 = this;

          var formData = form.value;
          var userData = this.getUserInformation(formData);
          this.userService.registerUser(userData).subscribe(function (data) {
            if (data.succeeded == true) {
              _this25.resetForm(form);

              _this25.toastr.success('User registration successful', "Success!");
            } else {
              data.errors.forEach(function (element) {
                switch (element.code) {
                  case 'DuplicateUserName':
                    _this25.toastr.error('Username is already taken', 'Registration failed.');

                    break;

                  default:
                    _this25.toastr.error(element.description, 'Registration failed.');

                    break;
                }
              });
            }

            ;
          });
        }
      }, {
        key: "getUserInformation",
        value: function getUserInformation(formData) {
          return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
          };
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form != null) form.reset();
          this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
          };
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignUpComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sign-up',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/user/sign-up/sign-up.component.css")).default]
    }), __metadata("design:paramtypes", [src_app_shared_services_User_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], SignUpComponent);

    function matchPassword(group) {
      var passwordControl = group.get('password');
      var confirmPasswordControl = group.get('confirmPassword');
      console.log("Value of password is : ".concat(passwordControl.value, " and confirm Password : ").concat(confirmPasswordControl.value));

      if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
        console.log("Matched");
        return null;
      } else {
        console.log("Mis-Matched");
        return {
          'passwordMisMatch': true
        };
      }
    }
    /***/

  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css")).default]
    }), __metadata("design:paramtypes", [])], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Dev\PracticeDev\Vabereki\MrTau\CoursesWebSite\TascConsulting_DotNet_Core\TascConsulting_DotNet_Core\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
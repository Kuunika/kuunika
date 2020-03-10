(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/terminology-api/src/app/app.controller.ts":
/*!********************************************************!*\
  !*** ./apps/terminology-api/src/app/app.controller.ts ***!
  \********************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/terminology-api/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/terminology-api/src/app/app.module.ts":
/*!****************************************************!*\
  !*** ./apps/terminology-api/src/app/app.module.ts ***!
  \****************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/terminology-api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/terminology-api/src/app/app.service.ts");
/* harmony import */ var _categories_categories_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/categories.module */ "./apps/terminology-api/src/categories/categories.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.module */ "./apps/terminology-api/src/search/search.module.ts");
/* harmony import */ var _sources_sources_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sources/sources.module */ "./apps/terminology-api/src/sources/sources.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_categories_categories_module__WEBPACK_IMPORTED_MODULE_4__["CategoriesModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_5__["SearchModule"], _sources_sources_module__WEBPACK_IMPORTED_MODULE_6__["SourcesModule"]],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/terminology-api/src/app/app.service.ts":
/*!*****************************************************!*\
  !*** ./apps/terminology-api/src/app/app.service.ts ***!
  \*****************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to terminology-api!' };
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/terminology-api/src/categories/categories-helper/categories.helper.ts":
/*!************************************************************************************!*\
  !*** ./apps/terminology-api/src/categories/categories-helper/categories.helper.ts ***!
  \************************************************************************************/
/*! exports provided: createCategoriesDescriptionsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategoriesDescriptionsArray", function() { return createCategoriesDescriptionsArray; });
/**
 * Takes string description data and parses it into an array of objects
 *  the objects key is the Category Name and the value is the description
 * @param categoriesDescriptionFromOcl
 */
function createCategoriesDescriptionsArray(categoriesDescriptionFromOcl) {
    // Begins by separating the description string into array segments based the position of the ';' character
    return categoriesDescriptionFromOcl.split(';').map(oclCategoryDescription => {
        // Mapping through each element of the array to further subdivide the array based on the ':' character
        const arrayCategoryDescriptionFromString = oclCategoryDescription.split(':');
        const categoryDescriptionObject = {};
        categoryDescriptionObject[arrayCategoryDescriptionFromString[0].trim()] = arrayCategoryDescriptionFromString[1].trim();
        return categoryDescriptionObject;
    });
}


/***/ }),

/***/ "./apps/terminology-api/src/categories/categories.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/terminology-api/src/categories/categories.controller.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesController", function() { return CategoriesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.service */ "./apps/terminology-api/src/categories/categories.service.ts");
var _a;



let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    getAllCategories() {
        return this.categoriesService.getAllCategories();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CategoriesController.prototype, "getAllCategories", null);
CategoriesController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('categories'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] !== "undefined" && _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]) === "function" ? _a : Object])
], CategoriesController);



/***/ }),

/***/ "./apps/terminology-api/src/categories/categories.module.ts":
/*!******************************************************************!*\
  !*** ./apps/terminology-api/src/categories/categories.module.ts ***!
  \******************************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.service */ "./apps/terminology-api/src/categories/categories.service.ts");
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");
/* harmony import */ var _categories_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.controller */ "./apps/terminology-api/src/categories/categories.controller.ts");





let CategoriesModule = class CategoriesModule {
};
CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_categories_controller__WEBPACK_IMPORTED_MODULE_4__["CategoriesController"]],
        providers: [_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_3__["OclService"]]
    })
], CategoriesModule);



/***/ }),

/***/ "./apps/terminology-api/src/categories/categories.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/terminology-api/src/categories/categories.service.ts ***!
  \*******************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kuunika/redis-connection */ "./libs/redis-connection/src/index.ts");
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");
/* harmony import */ var _categories_helper_categories_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories-helper/categories.helper */ "./apps/terminology-api/src/categories/categories-helper/categories.helper.ts");
var _a;





__webpack_require__(/*! dotenv */ "dotenv").config();
let CategoriesService = class CategoriesService {
    constructor(oclService) {
        this.oclService = oclService;
    }
    getAllCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (_kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__["RedisSingleton"].getInstance().connected) {
                const terminologyFromCache = yield _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__["RedisSingleton"].convertHvalsToArrayOfObjects('categories');
                return this.buildCategoriesTreeFromBreadcrumb(terminologyFromCache);
            }
            else {
                console.log('making request to OCL for categories');
                return this.buildCategoriesTreeFromBreadcrumb(yield this.oclService.requestAllCategories());
            }
        });
    }
    buildCategoriesTreeFromBreadcrumb(categoriesFromOcl) {
        const categories = [];
        const breadcrumbs = this.buildBreadcrumbObject(categoriesFromOcl);
        breadcrumbs.forEach(breadcrumb => this.buildCategoriesTree(categories, breadcrumb.breadcrumb.split('/'), breadcrumb.id, Object(_categories_helper_categories_helper__WEBPACK_IMPORTED_MODULE_4__["createCategoriesDescriptionsArray"])(breadcrumb.descriptions), breadcrumb.icons));
        return categories;
    }
    buildBreadcrumbObject(categoriesFromOcl) {
        return categoriesFromOcl.map(concept => {
            return {
                breadcrumb: concept.extras.Category,
                id: concept.id,
                descriptions: concept.extras.Descriptions,
                icons: (() => concept.extras.Icon.split(','))()
            };
        });
    }
    /*
      TODO: When adding the description and Icons copy the same thing that was done with the bread crumb where a reducing list is continually passed down.
    */
    buildCategoriesTree(categories, breadcrumbArray, id, descriptions, icons) {
        // Base Case - Checks to see if bread crumb array is complete
        if (breadcrumbArray.length === 0) {
            return categories;
        }
        // removes element from breadcrumb array
        const currentBreadcrumbPath = breadcrumbArray.shift();
        // gets description for category
        const description = descriptions.find(descriptionsArray => currentBreadcrumbPath in descriptionsArray);
        // checks to see if the current depth of the array has an element with the same name as the bread crumb element
        const existingElementIndex = categories.findIndex(category => category.categoryTitle === currentBreadcrumbPath);
        // if element does not exist then creates a new category object.
        if (existingElementIndex === -1) {
            categories.push({
                categoryTitle: currentBreadcrumbPath,
                id: breadcrumbArray.length === 0 ? id : null,
                categories: breadcrumbArray.length === 0 ? null : [],
                icons,
                description: (() => description[currentBreadcrumbPath])()
            });
            // recursive function call made with new category object,
            this.buildCategoriesTree(categories[categories.length - 1].categories, breadcrumbArray, id, descriptions, []);
        }
        else {
            // otherwise makes recursive function call made with existing category object
            this.buildCategoriesTree(categories[existingElementIndex].categories, breadcrumbArray, id, descriptions, []);
        }
    }
};
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_3__["OclService"] !== "undefined" && _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_3__["OclService"]) === "function" ? _a : Object])
], CategoriesService);



/***/ }),

/***/ "./apps/terminology-api/src/main.ts":
/*!******************************************!*\
  !*** ./apps/terminology-api/src/main.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./apps/terminology-api/src/app/app.module.ts");
/* harmony import */ var _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kuunika/redis-connection */ "./libs/redis-connection/src/index.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].getInstance();
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
        const apiVersion = 'v0';
        const globalPrefix = `api/${apiVersion}`;
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.port || 3333;
        app.enableCors({
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true
        });
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/terminology-api/src/ocl/ocl.service.ts":
/*!*****************************************************!*\
  !*** ./apps/terminology-api/src/ocl/ocl.service.ts ***!
  \*****************************************************/
/*! exports provided: OclService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OclService", function() { return OclService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



__webpack_require__(/*! dotenv */ "dotenv").config();
let OclService = class OclService {
    buildRequestHeaderForOCL() {
        return {
            headers: {
                Authorization: process.env.OCL_API_KEY,
                'Content-Type': 'application/json'
            }
        };
    }
    requestAllCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const oclCategoriesUrl = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + 'concepts?verbose=true&limit=0';
            try {
                const axiosRequest = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(oclCategoriesUrl, this.buildRequestHeaderForOCL());
                return axiosRequest.data;
            }
            catch (error) {
                console.error(error.response.statusText);
                this.responseStatus(error.response.status);
            }
        });
    }
    requestCategory(categoryId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const oclCategoriesUrl = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + `concepts/${categoryId}?verbose=true&limit=0`;
                const axiosRequest = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(oclCategoriesUrl, this.buildRequestHeaderForOCL());
                return axiosRequest.data;
            }
            catch (error) {
                console.error(error.response.statusText);
                this.responseStatus(error.response.status);
            }
        });
    }
    requestAllConceptsFromCategory(sourceUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts?verbose=true&limit=0`;
                const axiosRequest = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(oclConceptsUrl, this.buildRequestHeaderForOCL());
                return axiosRequest.data;
            }
            catch (error) {
                console.error(error.response.statusText);
                this.responseStatus(error.response.status);
            }
        });
    }
    requestConcept(sourceUrl, conceptId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts/${conceptId}` + '?verbose=true&limit=0';
                const axiosRequest = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(oclConceptsUrl, this.buildRequestHeaderForOCL());
                return axiosRequest.data;
            }
            catch (error) {
                console.error(error.response.statusText);
                this.responseStatus(error.response.status);
            }
        });
    }
    responseStatus(axiosRequest) {
        if (axiosRequest === 404) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                error: 404,
                message: 'Source/Concept Not Found',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
        }
        else if (axiosRequest !== 200) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                error: 500,
                message: 'Internal Server Error'
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
        }
    }
};
OclService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OclService);



/***/ }),

/***/ "./apps/terminology-api/src/search/search.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/terminology-api/src/search/search.controller.ts ***!
  \**************************************************************/
/*! exports provided: SearchController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchController", function() { return SearchController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "./apps/terminology-api/src/search/search.service.ts");
var _a;



let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    getSearchTerm(searchTerm) {
        return this.searchService.searchAll(searchTerm);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':searchTerm'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('searchTerm')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SearchController.prototype, "getSearchTerm", null);
SearchController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('search'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] !== "undefined" && _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]) === "function" ? _a : Object])
], SearchController);



/***/ }),

/***/ "./apps/terminology-api/src/search/search.module.ts":
/*!**********************************************************!*\
  !*** ./apps/terminology-api/src/search/search.module.ts ***!
  \**********************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.controller */ "./apps/terminology-api/src/search/search.controller.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.service */ "./apps/terminology-api/src/search/search.service.ts");
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");





let SearchModule = class SearchModule {
};
SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_search_controller__WEBPACK_IMPORTED_MODULE_2__["SearchController"]],
        providers: [_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__["OclService"]]
    })
], SearchModule);



/***/ }),

/***/ "./apps/terminology-api/src/search/search.service.ts":
/*!***********************************************************!*\
  !*** ./apps/terminology-api/src/search/search.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuse.js */ "fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kuunika/redis-connection */ "./libs/redis-connection/src/index.ts");
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");
var _a;





let SearchService = class SearchService {
    constructor(oclService) {
        this.oclService = oclService;
    }
    searchAll(searchTerm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!_kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].getInstance().connected) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                    error: 500,
                    errorMessage: 'There is a issue with the server',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
            try {
                const categoriesFromOCL = yield _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].convertHvalsToArrayOfObjects('categories');
                const searchResults = yield this.buildSearchResultsList(categoriesFromOCL, searchTerm);
                if (searchResults.length === 0)
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                        error: 'No Results Found',
                        status: 404
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
                return {
                    searchTerm,
                    searchResults
                };
            }
            catch (error) {
                console.log(error);
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({}, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    buildSearchResultsList(categoriesFromOCL, searchTerm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const searchResults = [];
            for (const category of categoriesFromOCL) {
                console.log(category.extras.Route);
                const conceptsFromCategory = yield _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].convertHvalsToArrayOfObjects(category.extras.Route);
                const searchResult = this.buildSearchResult(conceptsFromCategory, category, searchTerm);
                if (searchResult.numberOfResults > 0)
                    searchResults.push(searchResult);
            }
            return searchResults;
        });
    }
    buildSearchResult(conceptFromOCL, categoryFromOCL, searchTerm) {
        const searchSearchResult = {
            numberOfResults: 0,
            sourceId: categoryFromOCL.id,
            categoryBreadcrumb: categoryFromOCL.extras.Category
        };
        const headings = categoryFromOCL.extras.Details.split(',').map(heading => heading.trim());
        const listOfTermsToSearch = this.buildSearchableLists(conceptFromOCL, headings);
        searchSearchResult.numberOfResults = this.searchConcepts(listOfTermsToSearch, headings, searchTerm).length;
        return searchSearchResult;
    }
    searchConcepts(listOfTermsToSearch, keys, searchTerm) {
        const options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 50,
            maxPatternLength: 40,
            minMatchCharLength: 20,
            keys
        };
        const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_2__(listOfTermsToSearch, options);
        return fuse.search(searchTerm);
    }
    buildSearchableLists(conceptsFromOCL, headings) {
        return conceptsFromOCL.map(concept => this.buildSearchableList(concept, headings));
    }
    buildSearchableList(sourceObject, headings) {
        const termDescription = {};
        for (const heading of headings) {
            if (heading.toLowerCase().includes('name') || heading.toLowerCase().includes('term')) {
                termDescription[heading] = sourceObject.names.find(name => name.name_type === heading).name;
            }
            if (heading.toLowerCase().includes('description')) {
                termDescription[heading] = sourceObject.descriptions.find(description => description.description_type === heading).description;
            }
            if (sourceObject.hasOwnProperty(heading) &&
                typeof sourceObject[heading] !== 'object') {
                termDescription[heading] = sourceObject[heading];
            }
            else if (sourceObject.extras.hasOwnProperty(heading)) {
                termDescription[heading] = sourceObject.extras[heading];
            }
        }
        return termDescription;
    }
};
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__["OclService"] !== "undefined" && _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__["OclService"]) === "function" ? _a : Object])
], SearchService);



/***/ }),

/***/ "./apps/terminology-api/src/sources/concepts/concepts.service.ts":
/*!***********************************************************************!*\
  !*** ./apps/terminology-api/src/sources/concepts/concepts.service.ts ***!
  \***********************************************************************/
/*! exports provided: ConceptsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptsService", function() { return ConceptsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");
/* harmony import */ var _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kuunika/redis-connection */ "./libs/redis-connection/src/index.ts");
var _a;




__webpack_require__(/*! dotenv */ "dotenv").config();
let ConceptsService = class ConceptsService {
    constructor(oclService) {
        this.oclService = oclService;
    }
    getConceptDescription(sourceId, conceptId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let source;
            let concept;
            if (_kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].getInstance().connected) {
                source = yield _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].convertHgetToObject('categories', sourceId);
                if (source === null) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                        error: 404,
                        errorMessage: 'Source not found',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
                }
                concept = yield _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_3__["RedisSingleton"].convertHgetToObject(source.extras.Route, conceptId);
                if (concept === null) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                        error: 404,
                        errorMessage: 'Concept not found',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
                }
            }
            else {
                console.log('connection to redis failed now making request to OCL');
                source = yield this.oclService.requestCategory(sourceId);
                concept = yield this.oclService.requestConcept(source.extras.Route, conceptId);
            }
            return this.buildTermDescription(concept, source.extras.Category, source.extras.Details.split(',').map(category => category.trim()));
        });
    }
    buildTermDescription(sourceObject, breadcrumb, headings) {
        const termDescription = {
            id: sourceObject.id,
            breadcrumb,
            headings: [],
            descriptions: []
        };
        for (const heading of headings) {
            if (heading.toLowerCase().includes('name') || heading.toLowerCase().includes('term')) {
                termDescription.headings.push({
                    title: heading,
                    value: sourceObject.names.find(name => name.name_type === heading).name,
                });
            }
            if (heading.toLowerCase().includes('description')) {
                termDescription.descriptions.push({
                    title: heading,
                    value: sourceObject.descriptions.find(description => description.description_type === heading).description
                });
            }
            if (sourceObject.hasOwnProperty(heading) &&
                heading !== 'id' &&
                typeof sourceObject[heading] !== 'object') {
                termDescription.headings.push({
                    title: heading,
                    value: sourceObject[heading]
                });
            }
            else if (sourceObject.extras.hasOwnProperty(heading)) {
                termDescription.headings.push({
                    title: heading,
                    value: sourceObject.extras[heading]
                });
            }
            else {
                termDescription[heading] = sourceObject[heading];
            }
        }
        return termDescription;
    }
};
ConceptsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_2__["OclService"] !== "undefined" && _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_2__["OclService"]) === "function" ? _a : Object])
], ConceptsService);



/***/ }),

/***/ "./apps/terminology-api/src/sources/sources.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/terminology-api/src/sources/sources.controller.ts ***!
  \****************************************************************/
/*! exports provided: SourcesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesController", function() { return SourcesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.service */ "./apps/terminology-api/src/sources/sources.service.ts");
/* harmony import */ var _concepts_concepts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concepts/concepts.service */ "./apps/terminology-api/src/sources/concepts/concepts.service.ts");
var _a, _b;




let SourcesController = class SourcesController {
    constructor(sourceService, conceptService) {
        this.sourceService = sourceService;
        this.conceptService = conceptService;
    }
    getSource(sourceId, term = '') {
        return this.sourceService.getSource(sourceId.toUpperCase(), term);
    }
    getSourceConcepts(sourceId, conceptId) {
        return this.conceptService.getConceptDescription(sourceId.toUpperCase(), conceptId);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':sourceId'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('sourceId')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('filterTerm')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SourcesController.prototype, "getSource", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':sourceId/:conceptId'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('sourceId')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('conceptId')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SourcesController.prototype, "getSourceConcepts", null);
SourcesController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('sources'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _sources_service__WEBPACK_IMPORTED_MODULE_2__["SourcesService"] !== "undefined" && _sources_service__WEBPACK_IMPORTED_MODULE_2__["SourcesService"]) === "function" ? _a : Object, typeof (_b = typeof _concepts_concepts_service__WEBPACK_IMPORTED_MODULE_3__["ConceptsService"] !== "undefined" && _concepts_concepts_service__WEBPACK_IMPORTED_MODULE_3__["ConceptsService"]) === "function" ? _b : Object])
], SourcesController);



/***/ }),

/***/ "./apps/terminology-api/src/sources/sources.module.ts":
/*!************************************************************!*\
  !*** ./apps/terminology-api/src/sources/sources.module.ts ***!
  \************************************************************/
/*! exports provided: SourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesModule", function() { return SourcesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sources_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.controller */ "./apps/terminology-api/src/sources/sources.controller.ts");
/* harmony import */ var _sources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources.service */ "./apps/terminology-api/src/sources/sources.service.ts");
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");
/* harmony import */ var _concepts_concepts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concepts/concepts.service */ "./apps/terminology-api/src/sources/concepts/concepts.service.ts");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.service */ "./apps/terminology-api/src/search/search.service.ts");







let SourcesModule = class SourcesModule {
};
SourcesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_sources_controller__WEBPACK_IMPORTED_MODULE_2__["SourcesController"]],
        providers: [_sources_service__WEBPACK_IMPORTED_MODULE_3__["SourcesService"], _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__["OclService"], _concepts_concepts_service__WEBPACK_IMPORTED_MODULE_5__["ConceptsService"], _search_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]]
    })
], SourcesModule);



/***/ }),

/***/ "./apps/terminology-api/src/sources/sources.service.ts":
/*!*************************************************************!*\
  !*** ./apps/terminology-api/src/sources/sources.service.ts ***!
  \*************************************************************/
/*! exports provided: SourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesService", function() { return SourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kuunika/redis-connection */ "./libs/redis-connection/src/index.ts");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.service */ "./apps/terminology-api/src/search/search.service.ts");
/* harmony import */ var _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ocl/ocl.service */ "./apps/terminology-api/src/ocl/ocl.service.ts");
var _a, _b;





__webpack_require__(/*! dotenv */ "dotenv").config();
let SourcesService = class SourcesService {
    constructor(searchService, oclService) {
        this.searchService = searchService;
        this.oclService = oclService;
    }
    getSource(sourceId, filterTerm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let categoryFromOCL;
            let conceptsHeadings;
            let conceptsFromOCL;
            if (_kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__["RedisSingleton"].getInstance().connected) {
                categoryFromOCL = yield this.getCategoryFromCache(sourceId);
                conceptsFromOCL = yield this.getConceptsFromCache(categoryFromOCL.extras.Route);
            }
            else {
                console.log('connection to redis failed now making request to OCL');
                categoryFromOCL = yield this.oclService.requestCategory(sourceId);
                conceptsFromOCL = yield this.oclService.requestAllConceptsFromCategory(categoryFromOCL.extras.Route);
            }
            if (filterTerm !== '') {
                conceptsHeadings = this.createConceptHeadings(categoryFromOCL.extras.Table);
                return this.filterConcepts(categoryFromOCL, conceptsFromOCL, conceptsHeadings, filterTerm);
            }
            return this.createSourceObject(categoryFromOCL, conceptsFromOCL);
        });
    }
    getCategoryFromCache(field) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const category = yield _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__["RedisSingleton"].convertHgetToObject('categories', field);
            if (category === null) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                    error: 404,
                    errorMessage: 'Source Category Not Found',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
            }
            return category;
        });
    }
    getConceptsFromCache(key) {
        return _kuunika_redis_connection__WEBPACK_IMPORTED_MODULE_2__["RedisSingleton"].convertHvalsToArrayOfObjects(key);
    }
    filterConcepts(categoryFromOCL, conceptsFromOCL, conceptsHeadings, filterTerm) {
        const keys = this.createConceptHeadings(categoryFromOCL.extras.Table);
        const searchableList = this.searchService.buildSearchableLists(conceptsFromOCL, conceptsHeadings);
        const filteredTermsId = this.searchService.searchConcepts(searchableList, keys, filterTerm).map(filtered => filtered.id);
        const filteredConcepts = conceptsFromOCL.filter(concept => filteredTermsId.includes(concept.id));
        return this.createSourceObject(categoryFromOCL, filteredConcepts);
    }
    createConceptHeadings(sourceTable) {
        return sourceTable.split(',').map(tableHead => tableHead.trim());
    }
    createSourceObject(category, conceptFromOCL) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const sourceHeadings = this.createConceptHeadings(category.extras.Table);
            const results = this.buildResultsForSourcesObject(conceptFromOCL, sourceHeadings);
            return {
                sourceHeadings,
                results,
                breadcrumb: category.extras.Route
            };
        });
    }
    buildResultsForSourcesObject(conceptFromOCL, sourceHeadings) {
        return conceptFromOCL.map(concept => {
            const result = {};
            for (const field of sourceHeadings) {
                if (field.toLowerCase().includes('name') || field.toLowerCase().includes('term')) {
                    result[field] = concept.names.find(name => name.name_type === field).name;
                }
                if (field.toLowerCase().includes('description')) {
                    result[field] = concept.descriptions.find(description => description.description_type === field).description;
                }
                if (concept.hasOwnProperty(field) &&
                    typeof concept[field] !== 'object') {
                    result[field] = concept[field];
                }
                else if (concept.extras.hasOwnProperty(field)) {
                    result[field] = concept.extras[field];
                }
            }
            return result;
        });
    }
};
SourcesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] !== "undefined" && _search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]) === "function" ? _a : Object, typeof (_b = typeof _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__["OclService"] !== "undefined" && _ocl_ocl_service__WEBPACK_IMPORTED_MODULE_4__["OclService"]) === "function" ? _b : Object])
], SourcesService);



/***/ }),

/***/ "./libs/redis-connection/src/index.ts":
/*!********************************************!*\
  !*** ./libs/redis-connection/src/index.ts ***!
  \********************************************/
/*! exports provided: RedisSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redis_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/redis-singleton */ "./libs/redis-connection/src/lib/redis-singleton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedisSingleton", function() { return _lib_redis_singleton__WEBPACK_IMPORTED_MODULE_0__["RedisSingleton"]; });




/***/ }),

/***/ "./libs/redis-connection/src/lib/redis-singleton.ts":
/*!**********************************************************!*\
  !*** ./libs/redis-connection/src/lib/redis-singleton.ts ***!
  \**********************************************************/
/*! exports provided: RedisSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedisSingleton", function() { return RedisSingleton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_1__);


class RedisSingleton {
    constructor() { }
    static getInstance(port = 6379, host = '0.0.0.0') {
        if (!RedisSingleton.redisStoreInstance) {
            RedisSingleton.redisStoreInstance = redis__WEBPACK_IMPORTED_MODULE_1__["createClient"](port, host);
            RedisSingleton.redisStoreInstance.on('connect', () => console.log('Connection to Redis is successful'));
            this.redisStoreInstance.on('error', (err) => {
                console.log('Redis is OFFLINE, now using appropriate contingencies');
            });
        }
        return RedisSingleton.redisStoreInstance;
    }
    static hvals(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.getInstance().hvals(key, (err, reply) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(reply);
                    });
                }
                catch (error) {
                    reject(error);
                }
            });
        });
    }
    static hget(key, field) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getInstance().hget(key, field, (err, reply) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(reply);
                });
            });
        });
    }
    static convertCacheResultToType(cacheResultString) {
        return JSON.parse(cacheResultString);
    }
    static convertCacheResultToArrayOfType(cacheResultStrings) {
        return cacheResultStrings.map(cacheResult => {
            return this.convertCacheResultToType(cacheResult);
        });
    }
    static convertHgetToObject(key, field) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.convertCacheResultToType(yield this.hget(key, field));
        });
    }
    static convertHvalsToArrayOfObjects(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.convertCacheResultToArrayOfType(yield this.hvals(key));
        });
    }
    static hsetStoreApiResult(key, field, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.getInstance().hset(key, field, JSON.stringify(value), (err, reply) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(reply);
                    });
                }
                catch (error) {
                    reject(error);
                }
            });
        });
    }
    static flushAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getInstance().flushall();
        });
    }
}


/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./apps/terminology-api/src/main.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brettonions/Documents/GitHub/kuunika/apps/terminology-api/src/main.ts */"./apps/terminology-api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "fuse.js":
/*!**************************!*\
  !*** external "fuse.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map
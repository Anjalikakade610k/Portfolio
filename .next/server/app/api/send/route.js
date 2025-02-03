(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 3779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerHooks: () => (/* binding */ headerHooks),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   serverHooks: () => (/* binding */ serverHooks),
/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2394);
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9692);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9513);
/* harmony import */ var _Users_anjalikakade_Portfolio_src_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1553);
/* harmony import */ var _Users_anjalikakade_Portfolio_src_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_anjalikakade_Portfolio_src_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__);

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,
        page: "/api/send/route",
        pathname: "/api/send",
        filename: "route",
        bundlePath: "app/api/send/route"
    },
    resolvedPagePath: "/Users/anjalikakade/Portfolio/src/app/api/send/route.js",
    nextConfigOutput,
    userland: _Users_anjalikakade_Portfolio_src_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/send/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 1553:
/***/ (() => {

// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501], () => (__webpack_exec__(3779)));
module.exports = __webpack_exports__;

})();
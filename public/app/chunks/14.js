(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fecha_inicio: null,
      fecha_fin: null,
      dialog: false,
      search: "",
      facturas: [],
      selected_item: {},
      headers: [{
        text: "Cliente",
        align: "left",
        value: "cliente.nombre"
      }, {
        text: "Total",
        value: "total"
      }, {
        text: "Fecha",
        value: "fecha"
      }]
    };
  },
  mounted: function mounted() {
    var date = new Date();
    this.fecha_inicio = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().split("T")[0];
    this.fecha_fin = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().split("T")[0];
    this.getFacturas();
  },
  watch: {
    fecha_inicio: function fecha_inicio(val) {
      this.getFacturas();
    },
    fecha_fin: function fecha_fin(val) {
      this.getFacturas();
    }
  },
  methods: {
    deleteFactura: function deleteFactura() {
      var _this = this;

      axios.post("api/delete-factura", this.selected_item).then(function (res) {
        _this.getFacturas();

        _this.dialog = false;

        _this.$toast.sucs("Eliminado con exito");
      })["catch"](function (err) {
        _this.$toast.error("Algo ha salido mal");
      });
    },
    getFacturas: function getFacturas() {
      var _this2 = this;

      var data = "&fecha_inicio=".concat(this.fecha_inicio, "&fecha_fin=").concat(this.fecha_fin);
      axios.get("api/get-facturas-informe?temp=1" + data).then(function (res) {
        _this2.facturas = res.data.data;

        _this2.facturas.push({
          cliente: {
            nombre: "Facturado:"
          },
          total: res.data.total
        });
      }, function (err) {//this.$toast.error('Algo ha salido mal')
      });
    }
  },
  computed: {
    isloading: function isloading() {
      return this.$store.getters.getloading;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=template&id=7ab46874&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=template&id=7ab46874& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "background my-container" },
    [
      _c(
        "v-toolbar",
        { attrs: { flat: "", color: "#1d2735", dark: "" } },
        [_c("v-toolbar-title", [_vm._v("Informe Facturas")])],
        1
      ),
      _vm._v(" "),
      _vm.isloading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mt-3" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c("date-select", {
                attrs: { dense: "", outlined: "", label: "Fecha Inicio" },
                model: {
                  value: _vm.fecha_inicio,
                  callback: function($$v) {
                    _vm.fecha_inicio = $$v
                  },
                  expression: "fecha_inicio"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c("date-select", {
                attrs: { dense: "", outlined: "", label: "Fecha Fin" },
                model: {
                  value: _vm.fecha_fin,
                  callback: function($$v) {
                    _vm.fecha_fin = $$v
                  },
                  expression: "fecha_fin"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          "item-class": function() {
            return "pointer"
          },
          headers: _vm.headers,
          search: _vm.search,
          items: _vm.facturas,
          "item-key": "id"
        },
        scopedSlots: _vm._u([
          {
            key: "item.total",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            € " +
                    _vm._s(item.total.toFixed(2)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    attrs: { small: "", color: "red" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.selected_item = item
                        _vm.dialog = true
                      }
                    }
                  },
                  [_vm._v("mdi-trash-can")]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Esta Seguro de Eliminar")
              ]),
              _vm._v(" "),
              _c("v-card-text"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { loading: _vm.isloading, color: "red", dark: "" },
                      on: { click: _vm.deleteFactura }
                    },
                    [_vm._v("Eliminar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", outlined: "", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancelar")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vue_app/modulos/facturas/componentes/InformeFacturas.vue":
/*!******************************************************************!*\
  !*** ./vue_app/modulos/facturas/componentes/InformeFacturas.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InformeFacturas_vue_vue_type_template_id_7ab46874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformeFacturas.vue?vue&type=template&id=7ab46874& */ "./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=template&id=7ab46874&");
/* harmony import */ var _InformeFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformeFacturas.vue?vue&type=script&lang=js& */ "./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InformeFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformeFacturas_vue_vue_type_template_id_7ab46874___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InformeFacturas_vue_vue_type_template_id_7ab46874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue_app/modulos/facturas/componentes/InformeFacturas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformeFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InformeFacturas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformeFacturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=template&id=7ab46874&":
/*!*************************************************************************************************!*\
  !*** ./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=template&id=7ab46874& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformeFacturas_vue_vue_type_template_id_7ab46874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InformeFacturas.vue?vue&type=template&id=7ab46874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/facturas/componentes/InformeFacturas.vue?vue&type=template&id=7ab46874&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformeFacturas_vue_vue_type_template_id_7ab46874___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformeFacturas_vue_vue_type_template_id_7ab46874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
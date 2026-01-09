(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  emits: ['update:modelValue', 'canvasUpdated'],
  props: {
    modelValue: {
      type: null,
      required: true
    }
  },
  data: function data() {
    return {
      ctx: null,
      sign: false,
      prevX: 0,
      prevY: 0
    };
  },
  created: function created() {// 
  },
  methods: {
    inicializarCanvas: function inicializarCanvas() {
      // Obtener el contexto del canvas después de que el componente esté montado
      this.ctx = this.$refs.canvas.getContext('2d');
      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 2;
    },
    // Ajustar coordenadas del evento del mouse para canvas escalado
    ajustarCoordenadas: function ajustarCoordenadas(event) {
      var rect = this.$refs.canvas.getBoundingClientRect();
      var scaleX = this.$refs.canvas.width / rect.width;
      var scaleY = this.$refs.canvas.height / rect.height;
      return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
      };
    },
    mousedown: function mousedown($event) {
      var _this$ajustarCoordena = this.ajustarCoordenadas(event),
          x = _this$ajustarCoordena.x,
          y = _this$ajustarCoordena.y;

      this.sign = true;
      this.prevX = x;
      this.prevY = y;
    },
    mousemove: function mousemove($event) {
      if (this.sign) {
        var _this$ajustarCoordena2 = this.ajustarCoordenadas(event),
            x = _this$ajustarCoordena2.x,
            y = _this$ajustarCoordena2.y;

        this.draw(this.prevX, this.prevY, x, y);
        this.prevX = x;
        this.prevY = y;
      }
    },
    draw: function draw(depX, depY, destX, destY) {
      this.ctx.beginPath();
      this.ctx.moveTo(depX, depY);
      this.ctx.lineTo(destX, destY);
      this.ctx.closePath();
      this.ctx.stroke();
      var img = this.$refs.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      this.$emit('update:modelValue', img);
    },
    borrarCanvas: function borrarCanvas() {
      // Obtén el contexto del canvas y las dimensiones
      var ctx = this.$refs.canvas.getContext('2d');
      var canvasWidth = this.$refs.canvas.width;
      var canvasHeight = this.$refs.canvas.height; // Borra el contenido del canvas

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  },
  computed: {// 
  },
  mounted: function mounted() {
    // Llama al método para inicializar el canvas después del montaje del componente
    this.inicializarCanvas();
  },
  watch: {
    modelValue: function modelValue(model) {
      if (!model) {
        this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_components_dateSelect_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global_components/dateSelect.vue */ "./vue_app/global_components/dateSelect.vue");
/* harmony import */ var _Canvas_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas.vue */ "./vue_app/modulos/usuario/componentes/Canvas.vue");
/* harmony import */ var _validationRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validationRules */ "./vue_app/validationRules.js");
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
  components: {
    MyCanvasComponent: _Canvas_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DateSelect: _global_components_dateSelect_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      required: _validationRules__WEBPACK_IMPORTED_MODULE_2__["required"],
      email: _validationRules__WEBPACK_IMPORTED_MODULE_2__["email"],
      validForm: true,
      dialogFirma: false,
      search: '',
      dialog: false,
      tipo: '',
      tipos_archivo: [{
        id: 0,
        nombre: 'DIETA'
      }, {
        id: 1,
        nombre: 'ENTRENAMIENTO'
      }],
      archivos: [],
      usuario: {
        id: '',
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        adoptar: 0,
        donar: 0,
        codigo: '',
        observaciones: '',
        avatar: null,
        password: null,
        direccion: '',
        profesion: '',
        consulta: '',
        antecedentes: '',
        tratamiento: '',
        politica1: false,
        politica2: false,
        politica3: false,
        politica4: false,
        fechafirma: ''
      },
      direccion: {
        id: '',
        app_usuario_id: '',
        nombre: '',
        direccion: ''
      },
      headers: [{
        text: 'Nombre',
        align: 'left',
        value: 'nombre'
      }, {
        text: 'Tipo',
        align: 'left',
        value: 'nombre'
      }, {
        text: 'Acciones',
        value: 'action',
        sortable: false
      }],
      menu: false,
      firma: false,
      canvas: null
    };
  },
  created: function created() {
    if (this.$route.query.id) {
      this.getUsuario(this.$route.query.id);
    } //this.getDonante();


    this.getArchivos(this.$route.query.id);
  },
  methods: {
    getDonante: function getDonante() {
      if (this.$route.query.tipo == 'donante') {
        this.usuario.donar = 1;
      } else {
        this.usuario.donar = 0;
      }
    },
    getUsuario: function getUsuario(usuario_id) {
      var _this = this;

      axios.get("api/app/getusuario/".concat(usuario_id)).then(function (res) {
        _this.usuario = res.data;
      }, function (res) {
        _this.$toast.error('Algo ha salido mal');
      });
    },
    getArchivos: function getArchivos(usuario_id) {
      var _this2 = this;

      axios.get("api/app/getarchivos/".concat(usuario_id)).then(function (res) {
        _this2.archivos = res.data;
      }, function (res) {
        _this2.$toast.error('Error al cargar archivos');
      });
    },
    saveUsuario: function saveUsuario() {
      var _this3 = this;

      this.$refs.form.validate();

      if (this.validForm) {
        axios.post('api/app/saveusuario', this.usuario).then(function (res) {
          _this3.$router.push('lista-usuarios-app');
        }, function (res) {
          _this3.$toast.error('Algo ha salido mal');
        });
      }
    },

    /*saveDireccion() {
        this.direccion.app_usuario_id = this.usuario.id
        axios.post('api/app/save-direccion-from-user', this.direccion).then(res => {
            this.usuario.direccion = res.data
            this.resertFormDireccion();
        }, res => {
            this.$toast.error('Algo ha salido mal')
        })
    },*/
    setDireccion: function setDireccion(direccion) {
      this.direccion = direccion;
    },
    resertFormDireccion: function resertFormDireccion() {
      this.direccion = {
        id: '',
        app_usuario_id: '',
        nombre: '',
        direccion: ''
      };
    },
    deleteUsuario: function deleteUsuario() {
      var _this4 = this;

      axios.get("api/app/deleteusuario/".concat(this.usuario.id)).then(function (res) {
        _this4.dialog = false;

        _this4.$router.push('lista-usuarios-app');
      }, function (res) {
        _this4.$toast.error('Algo ha salido mal');
      });
    },

    /*deleteDireccion(direccion) {
        axios.get(`api/app/delete-direccion/${direccion.id}`).then(res => {
            let i = this.usuario.direccion.findIndex(x => x.id == direccion.id)
            this.usuario.direccion.splice(i, 1)
        }, res => {
            this.$toast.error('Algo ha salido mal')
        })
    },*/
    fileChanged: function fileChanged(base_64) {
      this.usuario.avatar = base_64;
    },
    closeDialogFirma: function closeDialogFirma() {
      this.dialogFirma = false;
    },
    handleCanvasUpdate: function handleCanvasUpdate(updatedCanvas) {
      this.canvas = updatedCanvas;
    },
    firmarConsentimiento: function firmarConsentimiento() {
      var _this5 = this;

      var data = {
        usuario: this.usuario,
        id: this.usuario.id,
        // consentimiento1: this.usuario.consentimiento1,
        // consentimiento2: this.usuario.consentimiento2,
        // consentimiento3: this.usuario.consentimiento3,
        // consentimiento4: this.usuario.consentimiento4,
        firma: this.canvas
      }; // Envía la imagen al servidor

      axios.post('api/app/firmar-consentimiento', data).then(function (response) {
        // console.log('Imagen guardada en el servidor:', response.data.url);
        // Actualiza la URL de la firma en tu componente o en tu base de datos
        // this.rutaFirma = response.data.url;
        _this5.firma = false;

        _this5.closeDialogFirma();

        _this5.usuario = response.data.user; // this.$router.push(`/guardar-usuario-app?id=${this.usuario.id}`);
      })["catch"](function (error) {
        console.error('Error, por favor, revisa la información', error);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\ncanvas[data-v-27c47178] {\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    cursor: crosshair;\r\n    width: 100%;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\ndiv.v-messages.theme--light,\r\ndiv.v-text-field__details\r\n{\r\n    display: none !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_style_index_0_id_27c47178_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_style_index_0_id_27c47178_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_style_index_0_id_27c47178_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuarios.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=template&id=27c47178&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=template&id=27c47178&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c("canvas", {
        ref: "canvas",
        on: {
          mousedown: _vm.mousedown,
          mousemove: _vm.mousemove,
          mouseup: function($event) {
            _vm.sign = false
          },
          mouseout: function($event) {
            _vm.sign = false
          }
        }
      }),
      _vm._v(" "),
      _c("v-btn", { on: { click: _vm.borrarCanvas } }, [_vm._v("Borrar")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=template&id=15449b56&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=template&id=15449b56& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _vm.isloading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "offset-md-1", attrs: { cols: "12", md: "10" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "", color: "#1d2735", dark: "" } },
                    [
                      _c("v-toolbar-title", [
                        _vm._v("Guardar / Editar Cliente")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs",
                    { attrs: { horizontal: "", color: "#1d2735" } },
                    [
                      _c("v-tab", [
                        _vm._v(
                          "\n                        DATOS DE USUARIO\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-tab", [
                        _vm._v(
                          "\n                        HISTORIAL\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-tab", [
                        _vm._v(
                          "\n                        PROTECCIÓN DE DATOS\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { staticClass: "pa-3 ma-1" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pl-5 pr-5 pt-4 pb-0 mb-0 mt-3",
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        {
                                          ref: "form",
                                          model: {
                                            value: _vm.validForm,
                                            callback: function($$v) {
                                              _vm.validForm = $$v
                                            },
                                            expression: "validForm"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            { attrs: { dense: "" } },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "3" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Nombre",
                                                      rules: [_vm.required]
                                                    },
                                                    model: {
                                                      value: _vm.usuario.nombre,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "nombre",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.nombre"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "3" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Apellidos",
                                                      rules: [_vm.required]
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.usuario.apellidos,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "apellidos",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.apellidos"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "3" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "DNI",
                                                      rules: [_vm.required]
                                                    },
                                                    model: {
                                                      value: _vm.usuario.dni,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "dni",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "usuario.dni"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "3" }
                                                },
                                                [
                                                  _c("DateSelect", {
                                                    attrs: {
                                                      label:
                                                        "Fecha de nacimiento",
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.usuario
                                                          .fecha_nacimiento,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "fecha_nacimiento",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.fecha_nacimiento"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            { attrs: { dense: "" } },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "4" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Teléfono",
                                                      rules: [_vm.required]
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.usuario.telefono,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "telefono",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.telefono"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "4" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Email",
                                                      rules: [
                                                        _vm.required,
                                                        _vm.email
                                                      ]
                                                    },
                                                    model: {
                                                      value: _vm.usuario.email,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "email",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.email"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "4" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Profesión"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.usuario.profesion,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "profesion",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.profesion"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            { attrs: { dense: "" } },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "6" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Ciudad",
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value: _vm.usuario.ciudad,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "ciudad",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.ciudad"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", md: "6" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "País",
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value: _vm.usuario.pais,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "pais",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "usuario.pais"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    md: "12"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Dirección"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.usuario.direccion,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "direccion",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.direccion"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            { attrs: { dense: "" } },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    md: "12"
                                                  }
                                                },
                                                [
                                                  _c("v-textarea", {
                                                    staticClass: "pb-0 mb-0",
                                                    attrs: {
                                                      dense: "",
                                                      height: "100px",
                                                      outlined: "",
                                                      label: "Observaciones"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.usuario
                                                          .observaciones,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.usuario,
                                                          "observaciones",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "usuario.observaciones"
                                                    }
                                                  })
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "white--text pt-0 mt-0",
                                                  attrs: {
                                                    disabled: _vm.isloading,
                                                    color: "success"
                                                  },
                                                  on: { click: _vm.saveUsuario }
                                                },
                                                [_vm._v("Guardar")]
                                              ),
                                              _vm._v(" "),
                                              _vm.usuario.id
                                                ? _c(
                                                    "v-btn",
                                                    {
                                                      staticClass:
                                                        "white--text",
                                                      attrs: {
                                                        disabled: _vm.isloading,
                                                        color: "red"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialog = true
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Eliminar")]
                                                  )
                                                : _vm._e()
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
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { staticClass: "pa-3 ma-1" },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "offset-md-1",
                              attrs: { cols: "12", md: "10" }
                            },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pl-5 pr-5 pt-4 pb-0 mb-0 mt-3",
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  dense: "",
                                                  height: "100px",
                                                  outlined: "",
                                                  label: "Motivo de Consulta"
                                                },
                                                model: {
                                                  value: _vm.usuario.consulta,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.usuario,
                                                      "consulta",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "usuario.consulta"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  dense: "",
                                                  height: "300px",
                                                  outlined: "",
                                                  label:
                                                    "Valoración y Tratamiento"
                                                },
                                                model: {
                                                  value:
                                                    _vm.usuario.tratamiento,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.usuario,
                                                      "tratamiento",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "usuario.tratamiento"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  dense: "",
                                                  height: "100px",
                                                  outlined: "",
                                                  label: "Antecedentes Médicos"
                                                },
                                                model: {
                                                  value:
                                                    _vm.usuario.antecedentes,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.usuario,
                                                      "antecedentes",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "usuario.antecedentes"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  dense: "",
                                                  height: "60px",
                                                  outlined: "",
                                                  label: "Alergias"
                                                },
                                                model: {
                                                  value: _vm.usuario.alergias,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.usuario,
                                                      "alergias",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "usuario.alergias"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  dense: "",
                                                  height: "60px",
                                                  outlined: "",
                                                  label: "Ejercicio"
                                                },
                                                model: {
                                                  value: _vm.usuario.ejercicio,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.usuario,
                                                      "ejercicio",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "usuario.ejercicio"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { dense: "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "white--text pt-0 mt-0",
                                                  attrs: {
                                                    disabled: _vm.isloading,
                                                    color: "success"
                                                  },
                                                  on: { click: _vm.saveUsuario }
                                                },
                                                [_vm._v("Guardar")]
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
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { staticClass: "pa-3 ma-1" },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "offset-md-1",
                              attrs: { cols: "12", md: "10" }
                            },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "pl-5 pr-5 pt-4 mt-3",
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _vm.usuario.firma == null ||
                                      _vm.usuario.firma == 0
                                        ? _c(
                                            "v-row",
                                            { attrs: { dense: "" } },
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      staticClass:
                                                        "white--text pt-0 mt-0",
                                                      attrs: {
                                                        disabled: _vm.isloading,
                                                        color: "success"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogFirma = true
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Firmar")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _c(
                                            "v-row",
                                            { attrs: { dense: "" } },
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: _vm.usuario.pdf,
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass:
                                                            "white--text pt-0 mt-0",
                                                          attrs: {
                                                            color: "success"
                                                          }
                                                        },
                                                        [_vm._v("Ver PDF")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { height: "750" },
          on: { "click:outside": _vm.closeDialogFirma },
          model: {
            value: _vm.dialogFirma,
            callback: function($$v) {
              _vm.dialogFirma = $$v
            },
            expression: "dialogFirma"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "headline primary white--text",
                  attrs: { dark: "", "primary-title": "" }
                },
                [
                  _vm._v(
                    "\n                Política de privacidad\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "px-3 py-3" }, [
                _c("p", [
                  _vm._v(
                    "\n                    Respetando lo establecido en la legislación vigente, (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y \n                    organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v("LEYES QUE INCORPORA ESTA POLÍTICA DE PRIVACIDAD")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "    \n                    La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE). \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(
                    "IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO DE LOS DATOS PERSONALES"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(" \n                    Dirección: "),
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Calle Lope de Rueda 80, Málaga 29190")
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("\n                    Teléfono de contacto: "),
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v(" 604163588")
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("\n                    Email de contacto: "),
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("info@marianaranjopsicologa.es  ")
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [_vm._v("REGISTRO DE DATOS DE CARÁCTER PERSONAL")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por \n                    "
                  ),
                  _c(
                    "a",
                    { attrs: { href: "http://www.marianaranjopsicologa.es/" } },
                    [_vm._v("www.marianaranjopsicologa.es")]
                  ),
                  _vm._v(
                    ", mediante los formularios en sus páginas quedarán incorporados y \n                    serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre y el Usuario o el \n                    mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. \n                    Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, \n                    se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y \n                    las demás circunstancias establecidas en el RGPD. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(
                    "PRINCIPIOS APLICABLES AL TRATAMIENTO DE LOS DATOS PERSONALES"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 \n                    y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente \n                    transparente de los fines para los cuales se recogen los datos personales.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines \n                    para los que son tratados.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "    \n                    Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del \n                    Usuario durante el tiempo necesario para los fines de su tratamiento.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Principio de responsabilidad proactiva: el responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [_vm._v("CATEGORÍAS DE DATOS PERSONALES")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Base legal para el tratamiento de los datos personales\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    La base legal para el tratamiento de los datos personales es el consentimiento. se compromete a recabar el consentimiento expreso y \n                    verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. \n                    Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información \n                    o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea \n                    obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Fines del tratamiento a que se destinan los datos personales\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Los datos personales son recabados y gestionados por con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre \n                    el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una \n                    solicitud o consulta.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del \n                    objeto social de www.marianaranjopsicologa.es , así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar \n                    el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se \n                    destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v("PERÍODOS DE RETENCIÓN DE LOS DATOS PERSONALES")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, \n                    únicamente durante el plazo legal establecido, o hasta que el Usuario solicite su supresión.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [_vm._v("DESTINATARIOS DE LOS DATOS PERSONALES")]),
                _vm._v(" "),
                _c("h4", [_vm._v("DATOS PERSONALES DE MENORES DE EDAD")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y \n                    garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de \n                    forma lícita por "
                  ),
                  _c(
                    "a",
                    { attrs: { href: "http://www.marianaranjopsicologa.es/" } },
                    [_vm._v("www.marianaranjopsicologa.es")]
                  ),
                  _vm._v(
                    ". Si se trata de un menor de 14 años, será necesario \n                    el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v("SECRETO Y SEGURIDAD DE LOS DATOS PERSONALES")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, \n                    de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de \n                    datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Sin embargo, debido a que no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan \n                    de modo fraudulento a los datos personales, el responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando \n                    ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las \n                    personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda \n                    violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o \n                    tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Los datos personales serán tratados como confidenciales por el responsable del tratamiento, quien se compromete a informar de y a garantizar \n                    por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual \n                    le haga accesible la información. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(
                    "DERECHOS DERIVADOS DEL TRATAMIENTO DE LOS DATOS PERSONALES"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    El Usuario podrá, por tanto, ejercer frente al responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018,\n                    de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Derecho de acceso:")
                  ]),
                  _vm._v(
                    " Es el derecho del Usuario a obtener confirmación de si está tratando o no sus datos \n                    personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que haya realizado o realice, \n                    así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o \n                    previstas de los mismos.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Derecho de rectificación:")
                  ]),
                  _vm._v(
                    " Es el derecho del Usuario a que se modifiquen sus datos personales que resulten \n                    ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Derecho de supresión («el derecho al olvido»):")
                  ]),
                  _vm._v(
                    " Es el derecho del Usuario, siempre que la legislación \n                    vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los \n                    cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; \n                    el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados \n                    ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos \n                    producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, \n                    el responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables \n                    para informar a los responsables que estén tratando los datos personales de la solicitud del inT.do de supresión de cualquier enlace a \n                    esos datos personales.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Derecho a la limitación del tratamiento:")
                  ]),
                  _vm._v(
                    " Es el derecho del Usuario a limitar el tratamiento de sus datos \n                    personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; \n                    el tratamiento sea ilícito; el responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer \n                    reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Derecho a la portabilidad de los datos:")
                  ]),
                  _vm._v(
                    " En caso de que el tratamiento se efectúe por medios automatizados, \n                    el Usuario tendrá derecho a recibir del responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura \n                    mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el responsable del tratamiento transmitirá \n                    directamente los datos a ese otro responsable.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v("Derecho de oposición:")
                  ]),
                  _vm._v(
                    " Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos \n                    de carácter personal o se cese el tratamiento de los mismos por parte de www.marianaranjopsicologa.es .\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticStyle: { "font-weight": "bold" } }, [
                    _vm._v(
                      "\n                        Derecho a no ser a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles:\n                    "
                    )
                  ]),
                  _vm._v(
                    " \n                    Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, \n                    incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al responsable del tratamiento con la referencia «RGPD-«, especificando:\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por \n                    el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser \n                    sustituida, por cualquier otro medio válido en derecho que acredite la identidad.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _vm._v(
                      "Petición con los motivos específicos de la solicitud o información a la que se quiere acceder."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [_vm._v("Domicilio a efecto de notificaciones.")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("Fecha y firma del solicitante.")]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Todo documento que acredite la petición que formula."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [_vm._v("Dirección postal:")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("Correo electrónico:")])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [_vm._v("ENLACES A SITIOS WEB DE TERCEROS")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de \n                    "
                  ),
                  _c(
                    "a",
                    { attrs: { href: "http://www.marianaranjopsicologa.es/" } },
                    [_vm._v("www.marianaranjopsicologa.es")]
                  ),
                  _vm._v(
                    ", y que por tanto no son operados por Maria T. Naranjo Navarro. \n                    Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de \n                    sus propios ficheros y de sus propias prácticas de privacidad. \n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v("RECLAMACIONES ANTE LA AUTORIDAD DE CONTROL")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus \n                    datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, \n                    en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de \n                    control es la Agencia Española de Protección de Datos (http://www.agpd.es).\n                "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(
                    "II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal \n                    contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el responsable del tratamiento \n                    pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación \n                    de la Política de Privacidad de este.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Se reserva el derecho a modificar su Política de Privacidad, de acuerdo con su propio criterio, o motivado por un cambio legislativo, \n                    jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no \n                    serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos \n                    cambios o actualizaciones.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril \n                    de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de \n                    estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          _vm.firma = true
                        }
                      }
                    },
                    [_vm._v("Firmar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: { click: _vm.closeDialogFirma }
                    },
                    [_vm._v("Cerrar")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "600" },
          model: {
            value: _vm.firma,
            callback: function($$v) {
              _vm.firma = $$v
            },
            expression: "firma"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c("MyCanvasComponent", {
                    attrs: { modelValue: _vm.canvas },
                    on: { "update:modelValue": _vm.handleCanvasUpdate }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.firmarConsentimiento }
                    },
                    [_vm._v("Guardar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: {
                        click: function($event) {
                          _vm.firma = false
                        }
                      }
                    },
                    [_vm._v("Cerrar")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
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
                _vm._v("Eliminar Usuario")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("p", [_vm._v("Se eliminaran todas las citas asociadas")])
              ]),
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
                      on: { click: _vm.deleteUsuario }
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

/***/ "./vue_app/modulos/usuario/componentes/Canvas.vue":
/*!********************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/Canvas.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Canvas_vue_vue_type_template_id_27c47178_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.vue?vue&type=template&id=27c47178&scoped=true& */ "./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=template&id=27c47178&scoped=true&");
/* harmony import */ var _Canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas.vue?vue&type=script&lang=js& */ "./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Canvas_vue_vue_type_style_index_0_id_27c47178_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css& */ "./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Canvas_vue_vue_type_template_id_27c47178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Canvas_vue_vue_type_template_id_27c47178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27c47178",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue_app/modulos/usuario/componentes/Canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Canvas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_style_index_0_id_27c47178_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=style&index=0&id=27c47178&scoped=true&lang=css&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_style_index_0_id_27c47178_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=template&id=27c47178&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=template&id=27c47178&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_template_id_27c47178_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Canvas.vue?vue&type=template&id=27c47178&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/Canvas.vue?vue&type=template&id=27c47178&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_template_id_27c47178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Canvas_vue_vue_type_template_id_27c47178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue":
/*!**************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/FormUsuarios.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormUsuarios_vue_vue_type_template_id_15449b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormUsuarios.vue?vue&type=template&id=15449b56& */ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=template&id=15449b56&");
/* harmony import */ var _FormUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormUsuarios.vue?vue&type=script&lang=js& */ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormUsuarios.vue?vue&type=style&index=0&lang=css& */ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormUsuarios_vue_vue_type_template_id_15449b56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormUsuarios_vue_vue_type_template_id_15449b56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue_app/modulos/usuario/componentes/FormUsuarios.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuarios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuarios.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=template&id=15449b56&":
/*!*********************************************************************************************!*\
  !*** ./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=template&id=15449b56& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_template_id_15449b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormUsuarios.vue?vue&type=template&id=15449b56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vue_app/modulos/usuario/componentes/FormUsuarios.vue?vue&type=template&id=15449b56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_template_id_15449b56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUsuarios_vue_vue_type_template_id_15449b56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vue_app/validationRules.js":
/*!************************************!*\
  !*** ./vue_app/validationRules.js ***!
  \************************************/
/*! exports provided: required, minLength, maxLength, email, alphaNumeric, numeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNumeric", function() { return alphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
var required = function required(value) {
  return !!value || 'Este campo es requerido.';
};
var minLength = function minLength(min) {
  return function (value) {
    return value.length >= min || "M\xEDnimo ".concat(min, " caracteres requeridos.");
  };
};
var maxLength = function maxLength(max) {
  return function (value) {
    return value.length <= max || "M\xE1ximo ".concat(max, " caracteres permitidos.");
  };
};
var email = function email(value) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) || 'El correo no es válido.';
};
var alphaNumeric = function alphaNumeric(value) {
  var pattern = /^[a-z0-9 áéíóú]+$/i;
  return pattern.test(value) || 'Este campo solo permite letras y numeros';
};
var numeric = function numeric(value) {
  var pattern = /^\d+$/;
  return pattern.test(value) || 'Este campo debe ser numérico.';
};

/***/ })

}]);
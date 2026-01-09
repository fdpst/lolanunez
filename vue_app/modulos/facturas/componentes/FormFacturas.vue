<template>
    <v-container>
        <loader v-if="isloading"></loader>
        <v-row>
            <v-col cols="12" md="10" class="offset-md-1">
                <v-card style="padding:5px;">
                    <v-toolbar flat color="#1d2735" dark>
                        <v-toolbar-title>Guardar / Editar Factura</v-toolbar-title>
                    </v-toolbar>
                
                    <v-form>
                        <v-row>
                            <v-col cols="12" md="8">
                                <cliente-select
                                    v-model="factura.id_cliente"
                                    label="Cliente"
                                >
                                </cliente-select>
                            </v-col>
                            <v-col cols="12" md="4">
                                <date-select label="Fecha" v-model="factura.fecha">
                                </date-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <h3>Datos del servicio a facturar</h3>
                            </v-col>
                            <v-col cols="12">
                            <v-row v-if="empleado.id != null">
                                <v-col cols="12">
                                    <v-row dense align="center">
                                        <v-col cols="12" md="3">
                                            <v-select
                                                dense outlined
                                                label="Servicio"
                                                :items="servicios"
                                                item-text="nombre"
                                                item-value="id"
                                                v-model="linea.id_articulo"
                                                @change="addServicio()"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="3">
                                            <v-text-field
                                                dense outlined
                                                label="Cantidad"
                                                v-model="linea.cantidad"
                                                type="number"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3">
                                            <v-text-field
                                                dense outlined
                                                label="Precio"
                                                v-model="linea.precio"
                                                type="number"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3">
                                            <v-btn
                                                @click="pushHorario"
                                                rounded
                                                depressed
                                                color="blue"
                                                class="white--text"
                                                >Agregar</v-btn
                                            >
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" >
                                    <v-data-table
                                        sort-by="dia"
                                        :headers="headers"
                                        :items="factura.items"
                                        disable-pagination
                                        hide-default-footer
                                        item-key="id"
                                        class="elevation-1"
                                    >
                                        <template v-slot:item.dia="{ item }">{{
                                            item.dia | getday
                                        }}</template>
                                        <template v-slot:item.action="{ item }">
                                            <v-icon small color="blue" @click="editItem(item)"
                                                >mdi-pencil</v-icon
                                            >
                                            <v-icon small color="red" @click="removeItem(item)"
                                                >mdi-trash-can</v-icon
                                            >
                                        </template>
                                        <template v-slot:item.subtotal="{ item }">
                                            {{ (item.precio * item.cantidad).toFixed(2) }}
                                        </template>
                                    </v-data-table>
                                </v-col>
                                <v-col cols="12">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                dense outlined
                                                label="Descuento (%)"
                                                v-model="factura.descuento"
                                                @change="calcula_total()"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-card class="px-2 py-2">
                                                <span class="font-weight-bold">SubTotal: {{ parseFloat(subTotal()).toFixed(2) }}€</span><br/>
                                                <span class="font-weight-bold">Descuento: {{ parseFloat(descuento()).toFixed(2) }}€</span><br/>
                                                <span class="font-weight-bold">15% IRPF: {{ parseFloat(HandlerIrpf()).toFixed(2) }}€</span><br/>
                                                <span class="font-weight-bold">Total: {{ parseFloat(this.factura.total).toFixed(2) }}€</span>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        dense outlined
                                        label="Observaciones"
                                        v-model="factura.comentario"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            </v-col>
                        </v-row>
                    
                    </v-form>
                
                </v-card>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12">
                <v-btn color="success" class="white--text" @click="SaveFactura"
                    >Guardar</v-btn
                >
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ClienteSelect from "../../../global_components/clienteSelect.vue";
export default {
    components: {
        ClienteSelect
    },
    data() {
        return {
            tiendas: [],
            total: 0,
            linea: {
                edit:false,
                cantidad:1,
                total:0
            },
            servicios: [],
            contador: 1,
            mask: "##:##",
            factura: {
                items: []
            },
            dias: [
                { dia: 1, text: "Lunes" },
                { dia: 2, text: "Martes" },
                { dia: 3, text: "Miercoles" },
                { dia: 4, text: "Jueves" },
                { dia: 5, text: "Viernes" },
                { dia: 6, text: "Sabado" },
                { dia: 0, text: "Domingo" }
            ],
            headers: [
                { text: "Servicio", align: "left", value: "servicio.nombre" },
                { text: "Cantidad", align: "left", value: "cantidad" },
                { text: "Precio", value: "precio" },
                { text: "Importe", value: "subtotal" },
                { text: "Acciones", value: "action", sortable: false }
            ],
            tipos: [],
            dialog: false,
            tipo_libre: "L",
            color: { hex: "#000" },
            empleado: {
                id: "",
                nombre: "",
                email: "",
                telefono: "",
                is_active: true,
                color: "#000",
                tipo_id: 1,
                lista_libres: [],
                lista_vacaciones: [],
                horario: [],
                tienda: [],
                tipo_libre: "L"
            },
            horario: {
                id: `temp-${new Date().getTime()}`,
                dia: null,
                app_tienda_id: null,
                entrada: "00:00",
                salida: "00:00",
                entrada2: "00:00",
                salida2: "00:00"
            }
        };
    },
    watch: {
        "color.hex"(n) {
            this.empleado.color = n;
        }
    },
    created() {
        if (this.$route.query.id) {
            this.getFactura(this.$route.query.id);
        }else{
            this.factura.descuento = 0;
            this.calcula_total();
        }
        this.getServicios();
        
    },

    methods: {
        removeItem(item) {
            this.factura.items.splice(this.factura.items.indexOf(item), 1);
            this.calcula_total();
        },
        editItem(item) {
            this.linea = item;
            this.linea.edit = true;
        },
        getFactura() {
            axios.get(`api/get-factura/${this.$route.query.id}`).then(res => {
                this.factura = res.data;
                this.calcula_total();
            });
        },
        pushHorario() {
            this.linea.total = this.linea.cantidad*this.linea.precio;
            if (this.linea.edit) {
                
            }else{

                this.factura.items.push(this.linea);
            }
            
            this.linea= {
                cantidad : 1,
                edit: false,
                total:0
            };
            
            this.calcula_total();
              
        },
        addServicio() {
            const articulo = this.servicios.find(
                element => element.id == this.linea.id_articulo
            );
            if (articulo) {
                this.linea.servicio = articulo;
                this.linea.precio = articulo.precio;
            }
        },
        getServicios() {
            axios.get("api/app/getservicios").then(
                res => {
                    this.servicios = res.data;
                },
                err => {
                    this.$toast.error("Algo ha salido mal");
                }
            );
        },
        SaveFactura() {
            axios
                .post("api/save-factura", this.factura)
                .then(res => {
                    // console.log('res', res.data)
                    this.$router.push("lista-facturas");
                    this.$toast.sucs("Factura Guardada Con Exito");
                })
                .catch(err => {
                    this.$toast.error("Algo ha salido mal", err);
                });
        },
        HandlerIrpf() {
            const number = parseFloat(this.subTotal()).toFixed(2) - parseFloat(this.descuento()).toFixed(2);
            const mult = number * 15/100;
                
            return mult;
        },
        subTotal() {
            
            const total = this.factura.items.reduce((acc, arr) => {
                acc = parseFloat(acc) + parseFloat(arr.total);
                acc = parseFloat(acc).toFixed(2);
                return acc;
            }, 0);

            //this.calcula_total()
            return total;
        },
        descuento() {
            let descuentoNeto = this.subTotal() * this.factura.descuento/100;
            return descuentoNeto;
        },
        calcula_total(){
            console.log("Entra");
            let subtotal = this.subTotal();
            subtotal = parseFloat(subtotal).toFixed(2);
            let descuento = this.descuento();
            descuento = parseFloat(descuento).toFixed(2);
            let iva = this.HandlerIrpf(false);
            this.factura.total = subtotal - descuento + iva;
            return parseFloat(this.factura.total).toFixed(2);
        },
    },
    filters: {},
    computed: {
        isloading() {
            return this.$store.getters.getloading;
        },
        filter_days() {
            return this.empleado.horario.filter(element => {
                return element.app_tienda_id == this.horario.app_tienda_id;
            });
        }
    }
};
</script>

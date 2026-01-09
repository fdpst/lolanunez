<template>

    <div>

        <div :class="[type == 'week' ? 'week' : 'day', { 'hide-column': !horario }]" class="empleado-column">
            <div class="empleado-nombre">
                <v-chip :color="empleado.color" :to="{ path: `/guardar-empleado-app?id=${empleado.id}` }" small class="white--text">
                    {{ empleado.nombre }} - {{empleado.id}}
                </v-chip>
            </div>

            <template v-for="(intervalo, i) in intervalos">

                <div @click="openForm(intervalo)" class="empleado-row" :style="{ height: interval_height + 'px' }" :ref="(el) => (div_intervalos[`${empleado.nombre}_${dia_actual}_${intervalo}`] = el)" :data-dia="dia_actual"
                  :data-empleado="empleado.id" :data-hora="intervalo" @dragover.prevent @dragenter.prevent v-if="horario && empleadoHorario(`${empleado.nombre}_${dia_actual}_${intervalo}`)">
                    {{ intervalo }}
                </div>

                <div v-else :style="{ height: interval_height + 'px' }" class="empleado-row disabled-row">
                    {{ intervalo }}
                </div>

            </template>

            <div class="cita-element" @click="openForm(cita)" v-for="cita in local_citas" :ref="(el) => (div_citas[`${empleado.nombre}_${dia_actual}`] = el)" :style="[timeToY(cita)]" @dragstart="event => startDrag(event, cita)"
              @dragend="event => onDrop(event)" data-draggable="true" draggable="true">
                <VIcon v-if="!cita.confirmada" small>ri-error-warning-fill</VIcon>
                <i style="text-transform:capitalize;">{{ cita.usuario }} - {{ cita.telefono }}</i>
            </div>
            <!-- seccion de la cita de la mascota del color del empleado que tiene el servicio asignado -->
            <!--  <div @click="setCita(cita)" @dragstart="event => startDrag(event, cita)" @dragend="event => onDrop(event)" v-for="cita in local_citas" :key="cita.id" :ref="`${empleado.nombre}_${dia_actual}`" :style="[timeToY(cita)]"
              data-draggable="true" draggable="true" @touchmove="event => touchMove(event, cita)" @touchend="event => touchEnd(event)" class="cita-element">
                <v-icon v-if="!cita.confirmada" small color="white">mdi-alert-circle</v-icon>
                <i style="text-transform:capitalize;">{{ cita.usuario }} - {{ cita.telefono }}</i>
            </div>
          -->
        </div>

    </div>

</template>

<script setup>
    import {
        ref,
        watch,
        computed
    } from "vue"

    import {
        EventBus
    } from "@/utils/eventbus"

    import moment from "moment"

    import _ from "lodash"

    const props = defineProps({
        intervalos: Array,
        empleado: Object,
        citas: Array,
        horario: Object,
        dia_actual: String,
        interval_height: Number,
        fechas: Array,
        type: String,
        app_tienda_id: [String, Number]
    })

    const local_citas = ref([])

    var local_intervalos = ref({})

    const div_citas = ref({});
    const div_intervalos = ref({});

    const cita = ref({})

    const agregarHorarioPorEmpleado = (n, dia_actual) => {
        if (props.fechas && props.fechas.length > 0) {
            local_intervalos.value = {};
            return crearIntervalos(props.fechas, dia_actual);
        }
        crearIntervalos(n, dia_actual);
    };

    // Methods
    const startDrag = (evt, item) => {
        cita.value = item
    }

    const onDrop = ev => {
        let par = ev.target

        while (par.getAttribute("data-draggable") != "true") {
            par = par.parentElement
        }

        par.style.zIndex = -1

        if (!cita.value) {
            return null
        }

        const touchEndTarget = document.elementFromPoint(ev.clientX, ev.clientY)

        if (!touchEndTarget) {
            return null
        }

        const citaDragged = JSON.parse(JSON.stringify(cita.value))

        citaDragged.fecha = touchEndTarget.getAttribute("data-dia")
        citaDragged.hora = touchEndTarget.getAttribute("data-hora")
        citaDragged.app_empleado_id = touchEndTarget.getAttribute("data-empleado")
        citaDragged.start = `${citaDragged.fecha} ${citaDragged.hora}`
        citaDragged.tipo = 'peluqueria'
        cita.value = null
        par.style.zIndex = 100

        EventBus.emit("edit_cita", citaDragged)
    };

    /*  const touchMove = (ev, citaItem) => {
          cita.value = citaItem;
          ev.preventDefault();
          const touch = ev.touches[0];

          let par = ev.target;
          while (par.getAttribute("data-draggable") != "true") {
              par = par.parentElement;
          }

          const ref_date = `${citaItem.start.substring(0, 10)}_${citaItem.start.substring(11)}`;
          const ref_name = `${props.empleado.nombre}_${ref_date}`;

          if (refs[ref_name] && refs[ref_name][0]) {
              par.style.position = "fixed";
              par.style.zIndex = "100";
              par.style.width = refs[ref_name][0].clientWidth + "px";
              par.style.left = touch.clientX + "px";
              par.style.top = touch.clientY + "px";
          }
      };

      const touchEnd = ev => {
          ev.preventDefault();

          let par = ev.target;
          while (par.getAttribute("data-draggable") != "true") {
              par = par.parentElement;
          }
          par.style.zIndex = -1;

          if (!cita.value) return;

          const touchEndTarget = document.elementFromPoint(
              ev.changedTouches[0].clientX,
              ev.changedTouches[0].clientY
          );
          if (!touchEndTarget) return;

          const citaToSave = cita.value;
          citaToSave.fecha = touchEndTarget.getAttribute("data-dia");
          citaToSave.hora = touchEndTarget.getAttribute("data-hora");
          citaToSave.start = `${citaToSave.fecha} ${citaToSave.hora}`;
          citaToSave.app_empleado_id = touchEndTarget.getAttribute("data-empleado");

          par.style = timeToYStr(citaToSave);
          par.style.position = "absolute";
          par.style.zIndex = 100;

          EventBus.emit("save_cita", citaToSave);
          cita.value = null;
      };*/

    const crearIntervalos = (n, dia_actual) => {
        n.forEach(element => {
            const start = moment(`${dia_actual} ${element.entrada}`, "YYYY-MM-DD HH:mm");

            const end = moment(`${dia_actual} ${element.salida}`, "YYYY-MM-DD HH:mm");

            const diff = end.diff(start, "minutes")

            const intervalos = _.range(diff / 30)

            intervalos.forEach((element, index) => {
                const n = start.clone().add(index * 30, "minutes").format("YYYY-MM-DD_HH:mm");

                const ref = `${props.empleado.nombre}_${n}`

                if (!local_intervalos.value[ref]) {
                    local_intervalos.value[ref] = []
                }

                local_intervalos.value[ref].push(ref)
            })
        });
    };

    const empleadoHorario = ref => local_intervalos.value[ref]

    const openForm = (cita = null) => {
        if (cita && cita.id) {
            return EventBus.emit("open_form", cita)
        }
        EventBus.emit("open_form", {
            app_empleado_id: props.empleado.id,
            fecha: props.dia_actual,
            intervalo: cita
        })
    }

    const setCita = citaItem => EventBus.emit("set_cita", citaItem)

    const timeToY = citaItem => {
        const ref_date = `${citaItem.start.substring(0,10)}_${citaItem.start.substring(11)}`
        const ref_name = `${props.empleado.nombre}_${ref_date}`

        if (div_intervalos.value[ref_name]) {
            return {
                display: "block",
                top: `${div_intervalos.value[ref_name].offsetTop}px`,
                height: `${(citaItem.duracion / 30) * props.interval_height}px`,
                backgroundColor: citaItem.color,
                position: 'absolute',
                width: 'auth'
            }
        }
        return {
            display: "none"
        }
    };

    const timeToYStr = citaItem => {
        const ref_date = `${citaItem.start.substring(0, 10)}_${citaItem.start.substring(11)}`;
        const ref_name = `${props.empleado.nombre}_${ref_date}`;

        if (refs[ref_name] && refs[ref_name][0]) {
            return `
            display: block;
            top: ${refs[ref_name][0].offsetTop}px;
            height: ${(citaItem.duracion / 30) * props.interval_height}px;
            backgroundColor: ${citaItem.color}
        `;
        }
        return "display:none";
    };

    watch(cita, newValue => {}, {
        deep: true
    });

    watch(() => props.citas, newValue => {
        nextTick(() => {
            local_citas.value = newValue;
        });
    }, {
        immediate: true
    })

    watch(() => props.horario, newValue => {
        if (newValue) {
            agregarHorarioPorEmpleado(newValue, props.dia_actual);
        }
    }, {
        immediate: true
    });

    watch(() => props.dia_actual, newValue => {
        if (props.horario) {
            agregarHorarioPorEmpleado(props.horario, newValue);
        }
    });


    /*watch(
        () => props.app_tienda_id,
        () => {
            local_intervalos.value = {};
        }, {
            immediate: true
        }
    );*/
</script>


<style media="screen">
    .hide-column {
        display: none !important;
    }

    .empleado-nombre {
        width: 100%;
        padding: 0.1rem;
        text-align: center;
        text-transform: uppercase;
        font-size: 4px;
    }

    .empleado-column {
        min-height: 100vh;
        position: relative;
    }

    .week {
        /*width: 100px;*/
        width: inherit;
    }

    .day {
        width: inherit;
    }

    .empleado-row {
        border-right: #e0e0e0 1px solid;
        border-bottom: #e0e0e0 1px solid;
        height: 40px;
        width: auto;
        font-size: 12px;
    }

    .empleado-row1 {
        border-right: #e0e0e0 1px solid;
        border-bottom: #e0e0e0 1px solid;
        height: 90px;
        width: 292px;
        font-size: 19px;
    }

    .disabled-row {
        background-color: #d9d9d9;
        color: #909090 !important;
    }

    .cita-element {
        position: absolute;
        left: 0px;
        width: 99%;
        background-color: #1e5dbf;
        border-radius: 8px;
        border: solid 1px #fff;
        padding: 3px;
        color: #fff;
        font-size: 12px;
    }
</style>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
    modelValue: {
        type: null,
        required: true
    }
});

const emit = defineEmits(["update:modelValue", "canvasUpdated"]);

const canvas = ref(null);
const ctx = ref(null);
const sign = ref(false);
const prevX = ref(0);
const prevY = ref(0);

const inicializarCanvas = () => {
    // Obtener el contexto del canvas después de que el componente esté montado
    ctx.value = canvas.value.getContext("2d");
    ctx.value.strokeStyle = "black";
    ctx.value.lineWidth = 2;
};

// Ajustar coordenadas del evento del mouse para canvas escalado
const ajustarCoordenadas = event => {
    const rect = canvas.value.getBoundingClientRect();
    const scaleX = canvas.value.width / rect.width;
    const scaleY = canvas.value.height / rect.height;
    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };
};
const mousedown = $event => {
    const { x, y } = ajustarCoordenadas(event);
    sign.value = true;
    prevX.value = x;
    prevY.value = y;
};
const mousemove = $event => {
    if (sign.value) {
        const { x, y } = ajustarCoordenadas(event);
        draw(prevX.value, prevY.value, x, y);
        prevX.value = x;
        prevY.value = y;
    }
};
const draw = (depX, depY, destX, destY) => {
    ctx.value.beginPath();
    ctx.value.moveTo(depX, depY);
    ctx.value.lineTo(destX, destY);
    ctx.value.closePath();
    ctx.value.stroke();

    const img = canvas.value
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    emit("update:modelValue", img);
};
const borrarCanvas = () => {
    // Obtén el contexto del canvas y las dimensiones
    const ctx = canvas.value.getContext("2d");
    const canvasWidth = canvas.value.width;
    const canvasHeight = canvas.value.height;

    // Borra el contenido del canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
};

// Llama al método para inicializar el canvas después del montaje del componente
onMounted(inicializarCanvas);

watch(props, () => {
    if (!props.modelValue) {
        ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
    }
});
</script>

<template>
    <VContainer>
        <canvas
            ref="canvas"
            @mousedown="mousedown"
            @mousemove="mousemove"
            @mouseup="sign = false"
            @mouseout="sign = false"
        >
        </canvas>
        <VBtn @click="borrarCanvas">Borrar</VBtn>
    </VContainer>
</template>

<style scoped>
canvas {
    border: 1px solid black;
    background-color: white;
    cursor: crosshair;
    width: 100%;
}
</style>

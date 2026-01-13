import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as u,c as _,b as e,al as s,r as f,n as v,ag as V,e as a,d as o,x as L,f as y,I as k,aI as B,w as $,v as t}from"./main-DXTHM_Z4.js";import{_ as M}from"./AppCardCode-B8sgTGrc.js";import{V as x,a as p}from"./VRow-U9BCKMf6.js";import"./VCard-BBjecQUS.js";import"./VAvatar-QubjHI1z.js";import"./VImg-DTTLi8N3.js";import"./VCardText-DGP4d7zZ.js";import"./VDivider-CVdsTcIK.js";/* empty css              */const I={},D={class:"demo-space-y"};function U(m,l){return u(),_("div",D,[e(s,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(s,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(s,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const j=g(I,[["render",U]]),R={class:"demo-space-y"},T={__name:"DemoProgressLinearSlots",setup(m){const l=f(20),r=f(33),i=f(78);return(d,c)=>(u(),_("div",R,[e(s,{modelValue:v(i),"onUpdate:modelValue":c[0]||(c[0]=n=>V(i)?i.value=n:null),color:"primary",height:"8"},null,8,["modelValue"]),e(s,{modelValue:v(l),"onUpdate:modelValue":c[1]||(c[1]=n=>V(l)?l.value=n:null),color:"primary",height:"20"},{default:a(({value:n})=>[o("span",null,L(Math.ceil(n))+"%",1)]),_:1},8,["modelValue"]),e(s,{modelValue:v(r),"onUpdate:modelValue":c[2]||(c[2]=n=>V(r)?r.value=n:null),height:"20",color:"primary"},{default:a(()=>[o("span",null,L(Math.ceil(v(r)))+"%",1)]),_:1},8,["modelValue"])]))}},C={},S={class:"demo-space-y"};function N(m,l){return u(),_("div",S,[e(s,{"model-value":"78",height:"8",color:"primary",rounded:""}),e(s,{"model-value":"20",color:"primary",height:"20",rounded:""}),e(s,{"model-value":"33",height:"20",color:"primary",rounded:""})])}const A=g(C,[["render",N]]),E={};function Y(m,l){return u(),y(s,{color:"primary",indeterminate:"",reverse:""})}const q=g(E,[["render",Y]]),z={};function F(m,l){return u(),y(s,{indeterminate:"",color:"primary"})}const G=g(z,[["render",F]]),H={class:"demo-space-y"},J={__name:"DemoProgressLinearBuffering",setup(m){const l=f(10),r=f(20),i=f(),d=()=>{clearInterval(i.value),i.value=setInterval(()=>{l.value+=Math.random()*10+5,r.value+=Math.random()*10+6},2e3)};return k(d),B(()=>{clearInterval(i.value)}),$(l,()=>{if(l.value<100)return!1;l.value=0,r.value=10,d()}),(c,n)=>(u(),_("div",H,[e(s,{modelValue:v(l),"onUpdate:modelValue":n[0]||(n[0]=h=>V(l)?l.value=h:null),color:"primary",height:"8","buffer-value":v(r)},null,8,["modelValue","buffer-value"])]))}},K={},O={class:"demo-space-y"};function Q(m,l){return u(),_("div",O,[e(s,{"model-value":"15","bg-color":"primary",color:"primary"}),e(s,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(s,{"model-value":"45","bg-color":"success",color:"success"})])}const W=g(K,[["render",Q]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},re={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},oe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`},le={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},ae={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},fe={__name:"progress-linear",setup(m){return(l,r)=>{const i=W,d=M,c=J,n=G,h=q,P=A,b=T,w=j;return u(),y(x,{class:"match-height"},{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Color",code:Z},{default:a(()=>[r[0]||(r[0]=o("p",null,[t("Use the props "),o("code",null,"color"),t(" and "),o("code",null,"background-color"),t(" to set colors.")],-1)),e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Buffering",code:X},{default:a(()=>[r[1]||(r[1]=o("p",null,[t("The primary value is controlled by "),o("code",null,"v-model"),t(", whereas the buffer is controlled by the "),o("code",null,"buffer-value"),t(" prop.")],-1)),e(c)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Indeterminate",code:ee},{default:a(()=>[r[2]||(r[2]=o("p",null,[t("for continuously animating progress bar,use prop "),o("code",null,"indeterminate"),t(". This indicates continuous process. ")],-1)),e(n)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Reversed",code:re},{default:a(()=>[r[3]||(r[3]=o("p",null,[t("Use prop "),o("code",null,"reverse"),t(" to animate continuously in reverse direction. The component also has RTL support.")],-1)),e(h)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Rounded",code:oe},{default:a(()=>[r[4]||(r[4]=o("p",null,[t("The "),o("code",null," rounded "),t(" prop is used to apply a border radius to the v-progress-linear component.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Slots",code:le},{default:a(()=>[r[5]||(r[5]=o("p",null,[t("we can bind user input using "),o("code",null,"v-model"),t(".You can also use the default slot for the same.")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(d,{title:"Striped",code:ae},{default:a(()=>[r[6]||(r[6]=o("p",null,[t(" The "),o("code",null,"striped"),t(" prop is used to apply striped background.")],-1)),e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{fe as default};

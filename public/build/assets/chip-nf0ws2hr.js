import{V as l}from"./VChip-CoWdbaPm.js";import{V as P,a as w,b as E,d as W}from"./VList-5epMYaPo.js";import{V as $}from"./VListItemAction-SagmgMXF.js";import{r as C,a as L,o as c,f,e as r,b as e,aK as M,aL as z,v as o,a0 as A,n,ag as x,c as h,d as s,aw as T,ax as j,ay as B,an as N,z as b}from"./main-DXTHM_Z4.js";import{V as J}from"./VMenu-D1AAVsYt.js";import{V as U}from"./VCombobox-Dces0OjC.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as F}from"./AppCardCode-B8sgTGrc.js";import{V as R,a as V}from"./VRow-U9BCKMf6.js";import"./VAvatar-QubjHI1z.js";import"./VImg-DTTLi8N3.js";import"./ssrBoot-BzQpit4r.js";import"./VDivider-CVdsTcIK.js";import"./dialog-transition-CqXIoDZd.js";import"./VSelect-DDGWU2xG.js";import"./VTextField-BfMLnCIA.js";/* empty css                   */import"./VCounter-CfjE-LQa.js";import"./VField-B2YWi8oL.js";import"./form-ijrz4ipO.js";import"./VInput-BZH6jw62.js";import"./VCheckboxBtn-DNkfUJpf.js";import"./VSelectionControl-DqCfd3An.js";import"./filter-B81R-Kvh.js";import"./VCard-BBjecQUS.js";import"./VCardText-DGP4d7zZ.js";/* empty css              */const Y={__name:"DemoChipExpandable",setup(m){const i=C(!1);return(a,d)=>{const p=L("IconBtn");return c(),f(J,{modelValue:n(i),"onUpdate:modelValue":d[1]||(d[1]=u=>x(i)?i.value=u:null),transition:"scale-transition"},{activator:r(({props:u})=>[e(l,M(z(u)),{default:r(()=>d[2]||(d[2]=[o(" VueJS ")])),_:2},1040)]),default:r(()=>[e(P,null,{default:r(()=>[e(w,null,{append:r(()=>[e($,{class:"ms-1"},{default:r(()=>[e(p,{onClick:d[0]||(d[0]=u=>i.value=!1)},{default:r(()=>[e(A,{size:"20",icon:"ri-close-line"})]),_:1})]),_:1})]),default:r(()=>[e(E,null,{default:r(()=>d[3]||(d[3]=[o("VueJS")])),_:1}),e(W,null,{default:r(()=>d[4]||(d[4]=[o("The Progressive JavaScript Framework")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},O={__name:"DemoChipInSelects",setup(m){const i=C(["Programming","Playing games","Sleeping"]),a=C(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(d,p)=>(c(),f(U,{modelValue:n(i),"onUpdate:modelValue":p[0]||(p[0]=u=>x(i)?i.value=u:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"ri-close-circle-line",items:n(a),label:"Your favorite hobbies","prepend-icon":"ri-filter-3-line"},null,8,["modelValue","items"]))}},K={},q={class:"demo-space-x"};function G(m,i){return c(),h("div",q,[e(l,{size:"x-small"},{default:r(()=>i[0]||(i[0]=[o(" x-small chip ")])),_:1}),e(l,{size:"small"},{default:r(()=>i[1]||(i[1]=[o(" small chip ")])),_:1}),e(l,null,{default:r(()=>i[2]||(i[2]=[o("Default")])),_:1}),e(l,{size:"large"},{default:r(()=>i[3]||(i[3]=[o(" large chip ")])),_:1}),e(l,{size:"x-large"},{default:r(()=>i[4]||(i[4]=[o(" x-large chip ")])),_:1})])}const H=g(K,[["render",G]]),Q={class:"demo-space-x"},X={__name:"DemoChipWithAvatar",setup(m){return(i,a)=>(c(),h("div",Q,[e(l,{"prepend-avatar":n(T)},{default:r(()=>a[0]||(a[0]=[s("span",null,"Chip",-1)])),_:1},8,["prepend-avatar"]),e(l,{"prepend-avatar":n(j)},{default:r(()=>a[1]||(a[1]=[s("span",null,"Darcy Nooser",-1)])),_:1},8,["prepend-avatar"]),e(l,{"prepend-avatar":n(B)},{default:r(()=>a[2]||(a[2]=[s("span",null,"Felicia Risker",-1)])),_:1},8,["prepend-avatar"]),e(l,{"prepend-avatar":n(N)},{default:r(()=>a[3]||(a[3]=[s("span",null,"Minnie Mostly",-1)])),_:1},8,["prepend-avatar"])]))}},Z={},ii={class:"demo-space-x"};function ei(m,i){return c(),h("div",ii,[e(l,{"prepend-icon":"ri-user-line"},{default:r(()=>i[0]||(i[0]=[o(" Account ")])),_:1}),e(l,{color:"primary","prepend-icon":"ri-star-line"},{default:r(()=>i[1]||(i[1]=[o(" Premium ")])),_:1}),e(l,{color:"secondary","prepend-icon":"ri-cake-line"},{default:r(()=>i[2]||(i[2]=[o(" 1 Year ")])),_:1}),e(l,{color:"success","prepend-icon":"ri-notification-line"},{default:r(()=>i[3]||(i[3]=[o(" Notification ")])),_:1}),e(l,{color:"info","prepend-icon":"ri-message-line"},{default:r(()=>i[4]||(i[4]=[o(" Message ")])),_:1}),e(l,{color:"warning","prepend-icon":"ri-error-warning-line"},{default:r(()=>i[5]||(i[5]=[o(" Warning ")])),_:1}),e(l,{color:"error","prepend-icon":"ri-error-warning-line"},{default:r(()=>i[6]||(i[6]=[o(" Error ")])),_:1})])}const ri=g(Z,[["render",ei]]),oi={class:"demo-space-x"},li={__name:"DemoChipClosable",setup(m){const i=C(!0),a=C(!0),d=C(!0),p=C(!0),u=C(!0),y=C(!0),S=C(!0);return(_,t)=>(c(),h("div",oi,[n(i)?(c(),f(l,{key:0,closable:"","onClick:close":t[0]||(t[0]=v=>i.value=!n(i))},{default:r(()=>t[7]||(t[7]=[o(" Default ")])),_:1})):b("",!0),n(a)?(c(),f(l,{key:1,closable:"",color:"primary","onClick:close":t[1]||(t[1]=v=>a.value=!n(a))},{default:r(()=>t[8]||(t[8]=[o(" Primary ")])),_:1})):b("",!0),n(d)?(c(),f(l,{key:2,closable:"",color:"secondary","onClick:close":t[2]||(t[2]=v=>d.value=!n(d))},{default:r(()=>t[9]||(t[9]=[o(" Secondary ")])),_:1})):b("",!0),n(p)?(c(),f(l,{key:3,closable:"",color:"success","onClick:close":t[3]||(t[3]=v=>p.value=!n(p))},{default:r(()=>t[10]||(t[10]=[o(" Success ")])),_:1})):b("",!0),n(u)?(c(),f(l,{key:4,closable:"",color:"info","onClick:close":t[4]||(t[4]=v=>u.value=!n(u))},{default:r(()=>t[11]||(t[11]=[o(" Info ")])),_:1})):b("",!0),n(y)?(c(),f(l,{key:5,closable:"",color:"warning","onClick:close":t[5]||(t[5]=v=>y.value=!n(y))},{default:r(()=>t[12]||(t[12]=[o(" Warning ")])),_:1})):b("",!0),n(S)?(c(),f(l,{key:6,closable:"",color:"error","onClick:close":t[6]||(t[6]=v=>S.value=!n(S))},{default:r(()=>t[13]||(t[13]=[o(" Error ")])),_:1})):b("",!0)]))}},ai={},ti={class:"demo-space-x"};function si(m,i){return c(),h("div",ti,[e(l,{label:""},{default:r(()=>i[0]||(i[0]=[o(" Default ")])),_:1}),e(l,{label:"",color:"primary"},{default:r(()=>i[1]||(i[1]=[o(" Primary ")])),_:1}),e(l,{label:"",color:"secondary"},{default:r(()=>i[2]||(i[2]=[o(" Secondary ")])),_:1}),e(l,{label:"",color:"success"},{default:r(()=>i[3]||(i[3]=[o(" Success ")])),_:1}),e(l,{label:"",color:"info"},{default:r(()=>i[4]||(i[4]=[o(" Info ")])),_:1}),e(l,{label:"",color:"warning"},{default:r(()=>i[5]||(i[5]=[o(" Warning ")])),_:1}),e(l,{label:"",color:"error"},{default:r(()=>i[6]||(i[6]=[o(" Error ")])),_:1})])}const ni=g(ai,[["render",si]]),pi={},ci={class:"demo-space-x"};function di(m,i){return c(),h("div",ci,[e(l,{variant:"outlined"},{default:r(()=>i[0]||(i[0]=[o(" Default ")])),_:1}),e(l,{color:"primary",variant:"outlined"},{default:r(()=>i[1]||(i[1]=[o(" Primary ")])),_:1}),e(l,{color:"secondary",variant:"outlined"},{default:r(()=>i[2]||(i[2]=[o(" Secondary ")])),_:1}),e(l,{color:"success",variant:"outlined"},{default:r(()=>i[3]||(i[3]=[o(" Success ")])),_:1}),e(l,{color:"info",variant:"outlined"},{default:r(()=>i[4]||(i[4]=[o(" Info ")])),_:1}),e(l,{color:"warning",variant:"outlined"},{default:r(()=>i[5]||(i[5]=[o(" Warning ")])),_:1}),e(l,{color:"error",variant:"outlined"},{default:r(()=>i[6]||(i[6]=[o(" Error ")])),_:1})])}const ui=g(pi,[["render",di]]),mi={},Vi={class:"demo-space-x"};function Ci(m,i){return c(),h("div",Vi,[e(l,{variant:"elevated"},{default:r(()=>i[0]||(i[0]=[o(" Default ")])),_:1}),e(l,{color:"primary",variant:"elevated"},{default:r(()=>i[1]||(i[1]=[o(" Primary ")])),_:1}),e(l,{color:"secondary",variant:"elevated"},{default:r(()=>i[2]||(i[2]=[o(" Secondary ")])),_:1}),e(l,{color:"success",variant:"elevated"},{default:r(()=>i[3]||(i[3]=[o(" Success ")])),_:1}),e(l,{color:"info",variant:"elevated"},{default:r(()=>i[4]||(i[4]=[o(" Info ")])),_:1}),e(l,{color:"warning",variant:"elevated"},{default:r(()=>i[5]||(i[5]=[o(" Warning ")])),_:1}),e(l,{color:"error",variant:"elevated"},{default:r(()=>i[6]||(i[6]=[o(" Error ")])),_:1})])}const fi=g(mi,[["render",Ci]]),vi={},hi={class:"demo-space-x"};function bi(m,i){return c(),h("div",hi,[e(l,null,{default:r(()=>i[0]||(i[0]=[o(" Default ")])),_:1}),e(l,{color:"primary"},{default:r(()=>i[1]||(i[1]=[o(" Primary ")])),_:1}),e(l,{color:"secondary"},{default:r(()=>i[2]||(i[2]=[o(" Secondary ")])),_:1}),e(l,{color:"success"},{default:r(()=>i[3]||(i[3]=[o(" Success ")])),_:1}),e(l,{color:"info"},{default:r(()=>i[4]||(i[4]=[o(" Info ")])),_:1}),e(l,{color:"warning"},{default:r(()=>i[5]||(i[5]=[o(" Warning ")])),_:1}),e(l,{color:"error"},{default:r(()=>i[6]||(i[6]=[o(" Error ")])),_:1})])}const gi=g(vi,[["render",bi]]),yi={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},Si={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},_i={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},xi={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Ii={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`},ki={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Di={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Pi={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},wi={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip :prepend-avatar="avatar3">
      <span>Felicia Risker</span>
    </VChip>

    <VChip :prepend-avatar="avatar4">
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip :prepend-avatar="avatar3">
      <span>Felicia Risker</span>
    </VChip>

    <VChip :prepend-avatar="avatar4">
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ei={ts:`<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`},le={__name:"chip",setup(m){return(i,a)=>{const d=gi,p=F,u=fi,y=ui,S=ni,_=li,t=ri,v=X,I=H,k=O,D=Y;return c(),f(R,{class:"match-height"},{default:r(()=>[e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Color",code:Si},{default:r(()=>[a[0]||(a[0]=s("p",null,[o("Use "),s("code",null,"color"),o(" prop to change the background color of chips.")],-1)),e(d)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Elevated",code:_i},{default:r(()=>[a[1]||(a[1]=s("p",null,[o("Use "),s("code",null,"elevated"),o(" variant option to create filled chips.")],-1)),e(u)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Outlined",code:Di},{default:r(()=>[a[2]||(a[2]=s("p",null,[o("Use "),s("code",null,"outlined"),o(" variant option to create outline border chips.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Label",code:ki},{default:r(()=>[a[3]||(a[3]=s("p",null,[o("Label chips use the "),s("code",null,"v-card"),o(" border-radius. Use "),s("code",null,"label"),o(" prop to create label chips.")],-1)),e(S)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Closable",code:yi},{default:r(()=>[a[4]||(a[4]=s("p",null,[o("Closable chips can be controlled with a "),s("code",null,"v-model"),o(".")],-1)),e(_)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"With Icon",code:Ei},{default:r(()=>[a[5]||(a[5]=s("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),e(t)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"With Avatar",code:wi},{default:r(()=>[a[6]||(a[6]=s("p",null,[o("Use "),s("code",null,"pill"),o(" prop to remove the "),s("code",null,"v-avatar"),o(" padding.")],-1)),e(v)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Sizes",code:Pi},{default:r(()=>[a[7]||(a[7]=s("p",null,[o("The "),s("code",null,"v-chip"),o(" component can have various sizes from "),s("code",null,"x-small"),o(" to "),s("code",null,"x-large"),o(".")],-1)),e(I)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"In Selects",code:Ii},{default:r(()=>[a[8]||(a[8]=s("p",null,[o("Selects can use "),s("code",null,"chips"),o(" to display the selected data. Try adding your own tags below.")],-1)),e(k)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:r(()=>[e(p,{title:"Expandable",code:xi},{default:r(()=>[a[9]||(a[9]=s("p",null,[o("Chips can be combined with "),s("code",null,"v-menu"),o(" to enable a specific set of actions for a chip.")],-1)),e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{le as default};

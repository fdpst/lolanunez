import{a,V as C}from"./VRow-CFasNknx.js";import{V as d}from"./VTextField-DG88OKPn.js";import{r as f,o as h,f as V,e as l,b as e,n as p,ag as _,d as t,v as n}from"./main-XhKa_9tU.js";import{r as I,e as M}from"./validators-CrSGMxiT.js";import{V as $}from"./VForm-BH9swDaI.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as D}from"./AppCardCode-BWgbS9V9.js";/* empty css              *//* empty css                   */import"./VCounter-zOsFyD3o.js";import"./VField-CvyOoNAD.js";import"./form-BsyuclTd.js";import"./VInput-DCf9aRQz.js";import"./VImg-BWevH90G.js";import"./helpers-DK5QwNv0.js";import"./VCard-Eaj0dfV-.js";import"./VAvatar-BgIHgX1n.js";import"./VCardText-B_O88IhU.js";import"./VDivider-C4lH0ooT.js";const q={__name:"DemoTextfieldPasswordInput",setup(x){const r=f(!1),o=f(!0),u=f("Password"),i=f("wqfasds"),m={required:s=>!!s||"Required.",min:s=>s.length>=8||"Min 8 characters"};return(s,c)=>(h(),V(C,null,{default:l(()=>[e(a,{cols:"12",sm:"6"},{default:l(()=>[e(d,{modelValue:p(u),"onUpdate:modelValue":c[0]||(c[0]=T=>_(u)?u.value=T:null),"append-inner-icon":p(r)?"ri-eye-off-line":"ri-eye-line",rules:[m.required,m.min],type:p(r)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":c[1]||(c[1]=T=>r.value=!p(r))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(d,{modelValue:p(i),"onUpdate:modelValue":c[2]||(c[2]=T=>_(i)?i.value=T:null),rules:[m.required,m.min],"append-inner-icon":p(o)?"ri-eye-off-line":"ri-eye-line",type:p(o)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":c[3]||(c[3]=T=>o.value=!p(o))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1}))}},U={__name:"DemoTextfieldIconEvents",setup(x){const r=f("Hey!"),o=f(!0),u=f(0),i=()=>{o.value=!o.value},m=()=>{r.value=""},s=()=>{u.value=0},c=()=>{s(),m()};return(T,g)=>(h(),V(d,{modelValue:p(r),"onUpdate:modelValue":g[0]||(g[0]=w=>_(r)?r.value=w:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"ri-close-line","append-icon":p(r)?"ri-send-plane-2-line":"ri-mic-line","append-inner-icon":p(o)?"ri-pushpin-line":"ri-unpin-line","onClick:appendInner":i,"onClick:append":c,"onClick:clear":m},null,8,["modelValue","append-icon","append-inner-icon"]))}},A={__name:"DemoTextfieldValidation",setup(x){const r=f("");return(o,u)=>(h(),V($,null,{default:l(()=>[e(d,{modelValue:p(r),"onUpdate:modelValue":u[0]||(u[0]=i=>_(r)?r.value=i:null),rules:["requiredValidator"in o?o.requiredValidator:p(I),"emailValidator"in o?o.emailValidator:p(M)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}},j={};function S(x,r){return h(),V(d,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const E=b(j,[["render",S]]),L={__name:"DemoTextfieldPrefixesAndSuffixes",setup(x){const r=f(10.05),o=f(28.02),u=f("example"),i=f("04:56");return(m,s)=>(h(),V(C,null,{default:l(()=>[e(a,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(r),"onUpdate:modelValue":s[0]||(s[0]=c=>_(r)?r.value=c:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(o),"onUpdate:modelValue":s[1]||(s[1]=c=>_(o)?o.value=c:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(u),"onUpdate:modelValue":s[2]||(s[2]=c=>_(u)?u.value=c:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(i),"onUpdate:modelValue":s[3]||(s[3]=c=>_(i)?i.value=c:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1}))}},H={};function N(x,r){return h(),V(C,null,{default:l(()=>[e(a,{cols:"12"},{default:l(()=>[e(d,{label:"Prepend","prepend-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{label:"Prepend Inner","prepend-inner-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{label:"Append","append-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{label:"Append Inner","append-inner-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const B=b(H,[["render",N]]),W={};function O(x,r){return h(),V(d,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const z=b(W,[["render",O]]),Y={};function G(x,r){return h(),V(d,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const J=b(Y,[["render",G]]),K={__name:"DemoTextfieldCounter",setup(x){const r=f("Preliminary report"),o=f("California is a state in the western United States"),u=[i=>i.length<=25||"Max 25 characters"];return(i,m)=>(h(),V(C,null,{default:l(()=>[e(a,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(r),"onUpdate:modelValue":m[0]||(m[0]=s=>_(r)?r.value=s:null),rules:u,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(o),"onUpdate:modelValue":m[1]||(m[1]=s=>_(o)?o.value=s:null),rules:u,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}},Q={};function X(x,r){return h(),V(C,null,{default:l(()=>[e(a,null,{default:l(()=>[e(d,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(d,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const Z=b(Q,[["render",X]]),ee={};function le(x,r){return h(),V(C,null,{default:l(()=>[e(a,{cols:"12",md:"6"},{default:l(()=>[e(d,{label:"Outlined",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(d,{label:"Filled",variant:"filled",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(d,{label:"Solo",variant:"solo",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(d,{label:"Plain",variant:"plain",placeholder:"Placeholder Text"})]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(d,{label:"Underlined",variant:"underlined",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const oe=b(ee,[["render",le]]),te={};function ne(x,r){return h(),V(d,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const ae=b(te,[["render",ne]]),re={};function ie(x,r){return h(),V(d,{label:"Regular",placeholder:"Placeholder Text"})}const de=b(re,[["render",ie]]),se={ts:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},ce={ts:`<template>
  <VTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},pe={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},ue={ts:`<template>
  <VTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},me={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},fe={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="ri-close-line"
    :append-icon="message ? 'ri-send-plane-2-line' : 'ri-mic-line'"
    :append-inner-icon="marker ? 'ri-pushpin-line' : 'ri-unpin-line'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="ri-close-line"
    :append-icon="message ? 'ri-send-plane-2-line' : 'ri-mic-line'"
    :append-inner-icon="marker ? 'ri-pushpin-line' : 'ri-unpin-line'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},he={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},Ve={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},xe={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},_e={ts:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Te={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},be={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},Ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},He={__name:"textfield",setup(x){return(r,o)=>{const u=de,i=D,m=ae,s=oe,c=Z,T=K,g=J,w=z,v=B,P=L,y=E,F=A,R=U,k=q;return h(),V(C,{class:"match-height"},{default:l(()=>[e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Basic",code:se},{default:l(()=>[o[0]||(o[0]=t("p",null,"Text fields components are used for collecting user provided information.",-1)),e(u)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Density",code:me},{default:l(()=>[o[1]||(o[1]=t("p",null,[n("The "),t("code",null,"density"),n(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("code",null,"default"),n(", "),t("code",null,"comfortable"),n(", and "),t("code",null,"compact"),n(".")],-1)),e(m)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:l(()=>[e(i,{title:"Variant",code:Ce},{default:l(()=>[o[2]||(o[2]=t("p",null,[n("Use "),t("code",null,"solo"),n(", "),t("code",null,"filled"),n(", "),t("code",null,"outlined"),n(", "),t("code",null,"plain"),n(" and "),t("code",null,"underlined"),n(" option of "),t("code",null,"variant"),n(" prop to change the look of the textfield. ")],-1)),e(s)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"State",code:Te},{default:l(()=>[o[3]||(o[3]=t("p",null,"Text fields can be disabled or readonly.",-1)),e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Counter",code:pe},{default:l(()=>[o[4]||(o[4]=t("p",null,[n("Use a "),t("code",null,"counter"),n(" prop to inform a user of the character limit.")],-1)),e(T)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Clearable",code:ce},{default:l(()=>[o[5]||(o[5]=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1)),e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Custom Colors",code:ue},{default:l(()=>[o[6]||(o[6]=t("p",null,[n("Use "),t("code",null,"color"),n(" prop to change the input border color.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icons",code:he},{default:l(()=>[o[7]||(o[7]=t("p",null,[n("You can add icons to the text field with "),t("code",null,"prepend-icon"),n(", "),t("code",null,"append-icon"),n(" and "),t("code",null,"append-inner-icon"),n(" and "),t("code",null,"prepend-inner-icon"),n(" props.")],-1)),e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Prefixes and suffixes",code:xe},{default:l(()=>[o[8]||(o[8]=t("p",null,[n("The "),t("code",null,"prefix"),n(" and "),t("code",null,"suffix"),n(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Single line",code:_e},{default:l(()=>[o[9]||(o[9]=t("p",null,[t("code",null,"single-line"),n(" text fields do not float their label on focus or with data.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Validation",code:be},{default:l(()=>[o[10]||(o[10]=t("p",null,[n("Vuetify includes simple validation through the "),t("code",null,"rules"),n(" prop.")],-1)),e(F)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icon events",code:fe},{default:l(()=>[o[11]||(o[11]=t("p",null,[t("code",null,"click:prepend"),n(", "),t("code",null,"click:append"),n(", "),t("code",null,"click:append-inner"),n(", and "),t("code",null,"click:clear"),n(" will be emitted when you click on the respective icon")],-1)),e(R)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Password input",code:Ve},{default:l(()=>[o[12]||(o[12]=t("p",null,[n("Using the HTML input "),t("code",null,"type"),n(" password can be used with an appended icon and callback to control the visibility.")],-1)),e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{He as default};

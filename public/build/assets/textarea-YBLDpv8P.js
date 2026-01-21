import{V as s}from"./VTextarea-Cj3nH6DE.js";import{r as m,o as i,f as p,n as x,ag as V,e as l,b as e,d as o,v as a}from"./main-XhKa_9tU.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as r,V as T}from"./VRow-CFasNknx.js";import{_ as y}from"./AppCardCode-BWgbS9V9.js";/* empty css                   */import"./VCounter-zOsFyD3o.js";import"./VField-CvyOoNAD.js";import"./form-BsyuclTd.js";import"./VInput-DCf9aRQz.js";import"./VImg-BWevH90G.js";/* empty css              */import"./VCard-Eaj0dfV-.js";import"./VAvatar-BgIHgX1n.js";import"./VCardText-B_O88IhU.js";import"./VDivider-C4lH0ooT.js";const k={__name:"DemoTextareaValidation",setup(u){const n=m("Hello!"),t=[d=>d.length<=25||"Max 25 characters"];return(d,c)=>(i(),p(s,{modelValue:x(n),"onUpdate:modelValue":c[0]||(c[0]=w=>V(n)?n.value=w:null),label:"Validation",rules:t,rows:"2",placeholder:"Placeholder Text"},null,8,["modelValue"]))}},j={__name:"DemoTextareaNoResize",setup(u){const n=m("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(t,d)=>(i(),p(s,{modelValue:x(n),"onUpdate:modelValue":d[0]||(d[0]=c=>V(n)?n.value=c:null),label:"Text","no-resize":"",rows:"2",placeholder:"Placeholder Text"},null,8,["modelValue"]))}},z={};function $(u,n){return i(),p(T,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"One row","auto-grow":"",rows:"1","row-height":"15",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{"auto-grow":"",label:"Two rows",rows:"2",placeholder:"Placeholder Text","row-height":"20"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Three rows","auto-grow":"",rows:"3",placeholder:"Placeholder Text","row-height":"25"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{"auto-grow":"",label:"Four rows",placeholder:"Placeholder Text",rows:"4","row-height":"30"})]),_:1})]),_:1})}const H=h(z,[["render",$]]),U={};function A(u,n){return i(),p(T,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(s,{label:"prepend-icon",rows:"1",placeholder:"Placeholder Text","prepend-icon":"ri-chat-2-line"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(s,{"append-icon":"ri-chat-2-line",placeholder:"Placeholder Text",label:"append-icon",rows:"1"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(s,{"prepend-inner-icon":"ri-chat-2-line",label:"prepend-inner-icon",placeholder:"Placeholder Text",rows:"1"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(s,{"append-inner-icon":"ri-chat-2-line",label:"append-inner-icon",placeholder:"Placeholder Text",rows:"1"})]),_:1})]),_:1})}const M=h(U,[["render",A]]),B={__name:"DemoTextareaCounter",setup(u){const n=m("Hello!");return(t,d)=>(i(),p(s,{modelValue:x(n),"onUpdate:modelValue":d[0]||(d[0]=c=>V(n)?n.value=c:null),counter:"",label:"Text",placeholder:"Placeholder Text"},null,8,["modelValue"]))}},G={__name:"DemoTextareaClearable",setup(u){const n=m("This is clearable text.");return(t,d)=>(i(),p(s,{modelValue:x(n),"onUpdate:modelValue":d[0]||(d[0]=c=>V(n)?n.value=c:null),clearable:"","clear-icon":"ri-close-line",label:"Text",placeholder:"Placeholder Text"},null,8,["modelValue"]))}},F={};function N(u,n){return i(),p(s,{autocomplete:"email",label:"Email",placeholder:"johndoe@email.com"})}const O=h(F,[["render",N]]),S={};function W(u,n){return i(),p(T,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(s,{disabled:"",label:"Disabled",hint:"Hint text",placeholder:"Placeholder Text",rows:"2"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(s,{readonly:"",rows:"2",label:"Readonly",placeholder:"Placeholder Text",hint:"Hint text"})]),_:1})]),_:1})}const E=h(S,[["render",W]]),I={};function Y(u,n){return i(),p(T,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Default",rows:"2",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Solo",placeholder:"Placeholder Text",rows:"2",variant:"solo"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Filled",rows:"2",placeholder:"Placeholder Text",variant:"filled"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Outlined",rows:"2",placeholder:"Placeholder Text",variant:"outlined"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Underlined",rows:"2",placeholder:"Placeholder Text",variant:"underlined"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Plain",rows:"2",placeholder:"Placeholder Text",variant:"plain"})]),_:1})]),_:1})}const q=h(I,[["render",Y]]),J={__name:"DemoTextareaAutoGrow",setup(u){const n=m("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(t,d)=>(i(),p(s,{modelValue:x(n),"onUpdate:modelValue":d[0]||(d[0]=c=>V(n)?n.value=c:null),label:"Auto Grow",placeholder:"Placeholder Text","auto-grow":""},null,8,["modelValue"]))}},K={};function L(u,n){return i(),p(s,{label:"Default",placeholder:"Placeholder Text"})}const Q=h(K,[["render",L]]),X={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`},Z={ts:`<template>
  <VTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`},ee={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`},le={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="ri-close-line"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="ri-close-line"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`},oe={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`},ae={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="ri-chat-2-line"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="ri-chat-2-line"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="ri-chat-2-line"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="ri-chat-2-line"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="ri-chat-2-line"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="ri-chat-2-line"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="ri-chat-2-line"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="ri-chat-2-line"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},te={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`},re={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},ne={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},se={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`},ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},ve={__name:"textarea",setup(u){return(n,t)=>{const d=Q,c=y,w=J,_=q,f=E,b=O,g=G,C=B,P=M,v=H,R=j,D=k;return i(),p(T,{class:"match-height"},{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Basic",code:Z},{default:l(()=>[t[0]||(t[0]=o("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1)),e(d)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Auto Grow",code:X},{default:l(()=>[t[1]||(t[1]=o("p",null,[a("When using the "),o("code",null,"auto-grow"),a(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(c,{title:"Variant",code:ce},{default:l(()=>[t[2]||(t[2]=o("p",null,[a("Use "),o("code",null,"filled"),a(", "),o("code",null,"plain"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"solo"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of file input.")],-1)),e(_)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"States",code:ne},{default:l(()=>[t[3]||(t[3]=o("p",null,[a("Use "),o("code",null,"disabled"),a(" and "),o("code",null,"readonly"),a(" prop to change the state of textarea.")],-1)),e(f)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Browser autocomplete",code:ee},{default:l(()=>[t[4]||(t[4]=o("p",null,[a(" The "),o("code",null,"autocomplete"),a(" prop gives you the option to enable the browser to predict user input. ")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Clearable",code:le},{default:l(()=>[t[5]||(t[5]=o("p",null,[a("You can clear the text from a "),o("code",null,"v-textarea"),a(" by using the "),o("code",null,"clearable"),a(" prop, and customize the icon used with the "),o("code",null,"clearable-icon"),a(" prop.")],-1)),e(g)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Counter",code:oe},{default:l(()=>[t[6]||(t[6]=o("p",null,[a(" The "),o("code",null,"counter"),a(" prop informs the user of a character limit for the "),o("code",null,"v-textarea"),a(". ")],-1)),e(C)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Icons",code:ae},{default:l(()=>[t[7]||(t[7]=o("p",null,[a("The "),o("code",null,"append-icon"),a(", "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props help add context to v-textarea.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Rows",code:re},{default:l(()=>[t[8]||(t[8]=o("p",null,[a("The "),o("code",null,"rows"),a(" prop allows you to define how many rows the textarea has, when combined with the "),o("code",null,"row-height"),a(" prop you can further customize your rows by defining their height.")],-1)),e(v)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"No resize",code:te},{default:l(()=>[t[9]||(t[9]=o("p",null,[o("code",null,"v-textarea"),a("'s have the option to remain the same size regardless of their content's size, using the "),o("code",null,"no-resize"),a(" prop.")],-1)),e(R)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{title:"Validation",code:se},{default:l(()=>[t[10]||(t[10]=o("p",null,[a("Use "),o("code",null,"rules"),a(" prop to validate the textarea.")],-1)),e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ve as default};

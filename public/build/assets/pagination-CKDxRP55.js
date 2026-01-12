import{V as u}from"./VPagination-CdWCEz8X.js";import{r as p,o as g,c as v,b as n,n as d,ag as m,f as _,e as s,d as o,v as a}from"./main-C1cSucNj.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as w}from"./AppCardCode-DshpRWUE.js";import{V as C,a as P}from"./VRow-DdYzItfl.js";import"./VCard-DoJ7OvEk.js";import"./VAvatar-BpNw3P6_.js";import"./VImg-D1aAeOw8.js";import"./VCardText-iOQ31nyo.js";import"./VDivider-BS9Tllbl.js";/* empty css              */const z={class:"d-flex flex-column gap-6"},S={__name:"DemoPaginationSize",setup(f){const e=p(1),t=p(2),l=p(3);return(i,r)=>(g(),v("div",z,[n(u,{modelValue:d(e),"onUpdate:modelValue":r[0]||(r[0]=c=>m(e)?e.value=c:null),length:7,size:"small"},null,8,["modelValue"]),n(u,{modelValue:d(t),"onUpdate:modelValue":r[1]||(r[1]=c=>m(t)?t.value=c:null),length:7},null,8,["modelValue"]),n(u,{modelValue:d(l),"onUpdate:modelValue":r[2]||(r[2]=c=>m(l)?l.value=c:null),length:7,size:"large"},null,8,["modelValue"])]))}},j={class:"d-flex flex-column gap-6"},I={__name:"DemoPaginationColor",setup(f){const e=p(1),t=p(2),l=p(3);return(i,r)=>(g(),v("div",j,[n(u,{modelValue:d(e),"onUpdate:modelValue":r[0]||(r[0]=c=>m(e)?e.value=c:null),length:7,color:"success"},null,8,["modelValue"]),n(u,{modelValue:d(t),"onUpdate:modelValue":r[1]||(r[1]=c=>m(t)?t.value=c:null),length:7,color:"error"},null,8,["modelValue"]),n(u,{modelValue:d(l),"onUpdate:modelValue":r[2]||(r[2]=c=>m(l)?l.value=c:null),length:7,color:"info"},null,8,["modelValue"])]))}},T={__name:"DemoPaginationTotalVisible",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:15,"total-visible":t.$vuetify.display.mdAndUp?4:t.$vuetify.display.sm?2:1},null,8,["modelValue","total-visible"]))}},B={__name:"DemoPaginationLength",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:15},null,8,["modelValue"]))}},E={__name:"DemoPaginationIcons",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5,"prev-icon":"ri-arrow-left-s-fill","next-icon":"ri-arrow-right-s-fill"},null,8,["modelValue"]))}},O={};function A(f,e){return g(),_(u,{length:5,disabled:""})}const k=y(O,[["render",A]]),L={__name:"DemoPaginationOutlineCircle",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),variant:"outlined",length:5,rounded:"circle"},null,8,["modelValue"]))}},N={__name:"DemoPaginationCircle",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5,rounded:"circle"},null,8,["modelValue"]))}},R={__name:"DemoPaginationOutline",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),variant:"outlined",length:5},null,8,["modelValue"]))}},Y={__name:"DemoPaginationBasic",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5},null,8,["modelValue"]))}},q={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},F={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},G={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      color="info"
    />
  </div>
</template>
`},H={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},J={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="ri-arrow-left-s-fill"
    next-icon="ri-arrow-right-s-fill"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="ri-arrow-left-s-fill"
    next-icon="ri-arrow-right-s-fill"
  />
</template>
`},K={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},M={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`},Q={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`},W={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
  />
</template>
`},ce={__name:"pagination",setup(f){return(e,t)=>{const l=Y,i=w,r=R,c=N,V=L,h=k,x=E,b=B,D=T,U=I,$=S;return g(),_(C,{class:"match-height"},{default:s(()=>[n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Basic",code:q},{default:s(()=>[t[0]||(t[0]=o("p",null,[a("The "),o("code",null,"v-pagination"),a(" component is used to separate long sets of data.")],-1)),n(l)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Outline",code:M},{default:s(()=>[t[1]||(t[1]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" prop is used to give outline to pagination item.")],-1)),n(r)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Circle",code:F},{default:s(()=>[t[2]||(t[2]=o("p",null,[a("The "),o("code",null,"rounded"),a(" prop allows you to render pagination buttons with alternative styles.")],-1)),n(c)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Outline Circle",code:Q},{default:s(()=>[t[3]||(t[3]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" and "),o("code",null,"rounded"),a(" prop is used to give rounded outline to pagination item.")],-1)),n(V)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Disabled",code:H},{default:s(()=>[t[4]||(t[4]=o("p",null,[a("Pagination items can be manually deactivated using the "),o("code",null,"disabled"),a(" prop.")],-1)),n(h)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Icons",code:J},{default:s(()=>[t[5]||(t[5]=o("p",null,[a("Previous and next page icons can be customized with the "),o("code",null,"prev-icon"),a(" and "),o("code",null,"next-icon"),a(" props.")],-1)),n(x)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Length",code:K},{default:s(()=>[t[6]||(t[6]=o("p",null,[a("Using the "),o("code",null,"length"),a(" prop you can set the length of "),o("code",null,"v-pagination"),a(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1)),n(b)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Total visible",code:X},{default:s(()=>[t[7]||(t[7]=o("p",null,[a("You can also manually set the maximum number of visible page buttons with the "),o("code",null,"total-visible"),a(" prop.")],-1)),n(D)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Color",code:G},{default:s(()=>[t[8]||(t[8]=o("p",null,[a("Use "),o("code",null,"color"),a(" prop for create different color pagination.")],-1)),n(U)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Size",code:W},{default:s(()=>[t[9]||(t[9]=o("p",null,[a("Use "),o("code",null,"size"),a(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),o("strong",null,"x-small"),a(", "),o("strong",null,"small"),a(", "),o("strong",null,"default"),a(", "),o("strong",null,"large"),a(", and "),o("strong",null,"x-large"),a(".")],-1)),n($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ce as default};

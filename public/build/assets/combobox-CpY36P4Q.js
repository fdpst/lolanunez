import{V as u}from"./VCombobox-58vpk9iu.js";import{r as c,o as V,f as b,n,ag as d,w as v,ak as x,e as s,b as m,v as a,d as i,x as _}from"./main-XhKa_9tU.js";import{a as P,b as D}from"./VList-DjfFgeFe.js";import{a as p,V as C}from"./VRow-CFasNknx.js";import{_ as I}from"./AppCardCode-BWgbS9V9.js";import"./VSelect-BBvcpHuX.js";import"./VTextField-DG88OKPn.js";/* empty css                   */import"./VCounter-zOsFyD3o.js";import"./VField-CvyOoNAD.js";import"./form-BsyuclTd.js";import"./VInput-DCf9aRQz.js";import"./VImg-BWevH90G.js";import"./dialog-transition-B2pKVHb-.js";import"./VMenu-D_PRx64v.js";import"./VCheckboxBtn-CKjjSpr9.js";import"./VSelectionControl-BXoDVL8N.js";import"./VChip-BBE3Enfq.js";import"./VAvatar-BgIHgX1n.js";import"./filter-Bi6u83zm.js";import"./ssrBoot-BEJ69UV0.js";import"./VDivider-C4lH0ooT.js";/* empty css              */import"./VCard-Eaj0dfV-.js";import"./VCardText-B_O88IhU.js";const w={__name:"DemoComboboxClearable",setup(g){const e=c(["Vuetify","Programming"]),l=["Programming","Design","Vue","Vuetify"];return(r,o)=>(V(),b(u,{modelValue:n(e),"onUpdate:modelValue":o[0]||(o[0]=t=>d(e)?e.value=t:null),items:l,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"]))}},L={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],l=c(["Vuetify"]),r=c(null);return v(l,o=>{o.length>5&&x(()=>l.value.pop())}),(o,t)=>(V(),b(u,{modelValue:n(l),"onUpdate:modelValue":t[0]||(t[0]=f=>d(l)?l.value=f:null),"search-input":n(r),"onUpdate:searchInput":t[1]||(t[1]=f=>d(r)?r.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":s(()=>[m(P,null,{default:s(()=>[m(D,null,{default:s(()=>[t[2]||(t[2]=a(' No results matching "')),i("strong",null,_(n(r)),1),t[3]||(t[3]=a('". Press ')),t[4]||(t[4]=i("kbd",null,"enter",-1)),t[5]||(t[5]=a(" to create a new one "))]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}},U={__name:"DemoComboboxVariant",setup(g){const e=c(["Programming"]),l=["Programming","Design","Vue","Vuetify"];return(r,o)=>(V(),b(C,null,{default:s(()=>[m(p,{cols:"12"},{default:s(()=>[m(u,{modelValue:n(e),"onUpdate:modelValue":o[0]||(o[0]=t=>d(e)?e.value=t:null),items:l,multiple:"",chips:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),m(p,{cols:"12"},{default:s(()=>[m(u,{modelValue:n(e),"onUpdate:modelValue":o[1]||(o[1]=t=>d(e)?e.value=t:null),multiple:"",chips:"",items:l,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),m(p,{cols:"12"},{default:s(()=>[m(u,{modelValue:n(e),"onUpdate:modelValue":o[2]||(o[2]=t=>d(e)?e.value=t:null),multiple:"",chips:"",items:l,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),m(p,{cols:"12"},{default:s(()=>[m(u,{modelValue:n(e),"onUpdate:modelValue":o[3]||(o[3]=t=>d(e)?e.value=t:null),multiple:"",chips:"",items:l,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),m(p,{cols:"12"},{default:s(()=>[m(u,{modelValue:n(e),"onUpdate:modelValue":o[4]||(o[4]=t=>d(e)?e.value=t:null),multiple:"",chips:"",items:l,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},k={__name:"DemoComboboxDensity",setup(g){const e=c(["Vuetify","Programming"]),l=["Programming","Design","Vue","Vuetify"];return(r,o)=>(V(),b(u,{modelValue:n(e),"onUpdate:modelValue":o[0]||(o[0]=t=>d(e)?e.value=t:null),items:l,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"]))}},N={__name:"DemoComboboxBasic",setup(g){const e=c("Programming"),l=["Programming","Design","Vue","Vuetify"];return(r,o)=>(V(),b(u,{modelValue:n(e),"onUpdate:modelValue":o[0]||(o[0]=t=>d(e)?e.value=t:null),items:l,placeholder:"deployment"},null,8,["modelValue"]))}},T={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},R={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},$={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},j={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},ne={__name:"combobox",setup(g){return(e,l)=>{const r=N,o=I,t=k,f=U,h=L,y=w;return V(),b(C,{class:"match-height"},{default:s(()=>[m(p,{cols:"12",md:"6"},{default:s(()=>[m(o,{title:"Basic",code:T},{default:s(()=>[l[0]||(l[0]=i("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1)),m(r)]),_:1},8,["code"])]),_:1}),m(p,{cols:"12",md:"6"},{default:s(()=>[m(o,{title:"Density",code:R},{default:s(()=>[l[1]||(l[1]=i("p",null,[a(" You can use "),i("code",null,"Density"),a(" prop to reduce combobox height and lower max height of list items. Available options are: "),i("code",null,"default"),a(", "),i("code",null,"comfortable"),a(", and "),i("code",null,"compact"),a(". ")],-1)),m(t)]),_:1},8,["code"])]),_:1}),m(p,{cols:"12",md:"6"},{default:s(()=>[m(o,{title:"Variant",code:j},{default:s(()=>[l[2]||(l[2]=i("p",null,[a("Use "),i("code",null,"solo"),a(", "),i("code",null,"outlined"),a(", "),i("code",null,"underlined"),a(", "),i("code",null,"filled"),a(" and "),i("code",null,"plain"),a(" options of "),i("code",null,"variant"),a(" prop to change the look of combobox. ")],-1)),m(f)]),_:1},8,["code"])]),_:1}),m(p,{cols:"12",md:"6"},{default:s(()=>[m(o,{title:"No data with chips",code:$},{default:s(()=>[l[3]||(l[3]=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),m(h)]),_:1},8,["code"])]),_:1}),m(p,{cols:"12",md:"6"},{default:s(()=>[m(o,{title:"Clearable",code:B},{default:s(()=>[l[4]||(l[4]=i("p",null,[a("Use "),i("code",null,"clearable"),a(" prop to clear combobox.")],-1)),m(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ne as default};

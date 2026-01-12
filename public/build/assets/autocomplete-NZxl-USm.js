import{V as c}from"./VAutocomplete-AOfJDvsu.js";import{r as S,o as d,f,n as C,ag as _,w as x,e as l,b as e,d as o,v as s}from"./main-C1cSucNj.js";import{a as r,V as v}from"./VRow-DdYzItfl.js";import{_ as w}from"./AppCardCode-DshpRWUE.js";import"./VSelect-C8_y3N-_.js";import"./VTextField-BDUmA4Cs.js";/* empty css                   */import"./VCounter-tCKPKrdk.js";import"./VField-BymScPN-.js";import"./form-BJwA8ai1.js";import"./VInput-wvAgDqIB.js";import"./VImg-D1aAeOw8.js";import"./VList-CJtIzW8v.js";import"./ssrBoot-DfsiD9ny.js";import"./VAvatar-BpNw3P6_.js";import"./VDivider-BS9Tllbl.js";import"./dialog-transition-apDHIwZf.js";import"./VMenu-D5ZOve3c.js";import"./VCheckboxBtn-DqgUuTHD.js";import"./VSelectionControl-CM7Gd7lS.js";import"./VChip-Js2ye3Ji.js";import"./filter-DDqFtplM.js";/* empty css              */import"./VCard-DoJ7OvEk.js";import"./VCardText-iOQ31nyo.js";const T={__name:"DemoAutocompleteValidation",setup(h){const a=["foo","bar","fizz","buzz"],t=S(["foo"]),n=[i=>!!i.length||"Select at least one option."];return(i,m)=>(d(),f(c,{modelValue:C(t),"onUpdate:modelValue":m[0]||(m[0]=b=>_(t)?t.value=b:null),items:a,rules:n,placeholder:"Select Option",multiple:""},null,8,["modelValue"]))}},F={__name:"DemoAutocompleteAsyncItems",setup(h){const a=S(!1),t=S(),n=S(null),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],m=S(i),b=p=>{a.value=!0,setTimeout(()=>{m.value=i.filter(u=>(u||"").toLowerCase().includes((p||"").toLowerCase())),a.value=!1},500)};return x(t,p=>{p&&p!==n.value&&b(p)}),(p,u)=>(d(),f(c,{modelValue:C(n),"onUpdate:modelValue":u[0]||(u[0]=g=>_(n)?n.value=g:null),search:C(t),"onUpdate:search":u[1]||(u[1]=g=>_(t)?t.value=g:null),loading:C(a),items:C(m),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},N={__name:"DemoAutocompleteCustomFilter",setup(h){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function t(n,i,m){const b=m.raw.name.toLowerCase(),p=m.raw.abbr.toLowerCase(),u=i.toLowerCase();return b.includes(u)||p.includes(u)}return(n,i)=>(d(),f(c,{label:"States",items:a,"custom-filter":t,"item-title":"name","item-value":"abbr",placeholder:"Select State"}))}},M={__name:"DemoAutocompleteChips",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(t,n)=>(d(),f(c,{label:"States",items:a,placeholder:"Select State",chips:"",multiple:""}))}},k={__name:"DemoAutocompleteClearable",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(t,n)=>(d(),f(c,{label:"States",items:a,multiple:"",placeholder:"Select State",clearable:""}))}},D={__name:"DemoAutocompleteMultiple",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(t,n)=>(d(),f(c,{label:"States",items:a,placeholder:"Select State",multiple:""}))}},W={__name:"DemoAutocompleteVariant",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(t,n)=>(d(),f(v,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{variant:"solo",label:"solo",items:a,placeholder:"Select State"})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{variant:"outlined",label:"outlined",placeholder:"Select State",items:a})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{variant:"underlined",label:"underlined",placeholder:"Select State",items:a})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{variant:"filled",label:"filled",placeholder:"Select State",items:a})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(c,{variant:"plain",label:"plain",placeholder:"Select State",items:a})]),_:1})]),_:1}))}},G={__name:"DemoAutocompleteDensity",setup(h){const a=S("Florida"),t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(n,i)=>(d(),f(c,{modelValue:C(a),"onUpdate:modelValue":i[0]||(i[0]=m=>_(a)?a.value=m:null),label:"States",density:"compact",placeholder:"Select State",items:t},null,8,["modelValue"]))}},I={__name:"DemoAutocompleteBasic",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(t,n)=>(d(),f(c,{label:"States",items:a,placeholder:"Select State"}))}},q={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},L={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},O={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`},R={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},z={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},j={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},U={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`},P={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},Y={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},be={__name:"autocomplete",setup(h){return(a,t)=>{const n=I,i=w,m=G,b=W,p=D,u=k,g=M,V=N,y=F,A=T;return d(),f(v,{class:"match-height"},{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Basic",code:L},{default:l(()=>[t[0]||(t[0]=o("p",null,[s(" The "),o("code",null," v-autocomplete "),s(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1)),e(n)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Density",code:j},{default:l(()=>[t[1]||(t[1]=o("p",null,[s(" You can use "),o("code",null," density "),s(" prop to adjusts vertical spacing within the component. Available options are: "),o("code",null,"default"),s(", "),o("code",null,"comfortable"),s(", and "),o("code",null,"compact"),s(". ")],-1)),e(m)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"12"},{default:l(()=>[e(i,{title:"Variant",code:Y},{default:l(()=>[t[2]||(t[2]=o("p",null,[s("Use "),o("code",null,"solo"),s(", "),o("code",null,"outlined"),s(", "),o("code",null,"underlined"),s(", "),o("code",null,"filled"),s(" and "),o("code",null,"plain"),s(" options of "),o("code",null,"variant"),s(" prop to change the look of Autocomplete. ")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Multiple",code:U},{default:l(()=>[t[3]||(t[3]=o("p",null,[s("Use "),o("code",null,"multiple"),s(" prop to select multiple. Accepts array for value")],-1)),e(p)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Clearable",code:R},{default:l(()=>[t[4]||(t[4]=o("p",null,[s("Use "),o("code",null,"clearable"),s(" prop to add input clear functionality.")],-1)),e(u)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Chips",code:O},{default:l(()=>[t[5]||(t[5]=o("p",null,[s("Use "),o("code",null," chips "),s(" prop to use chips in select.")],-1)),e(g)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Custom-Filter",code:z},{default:l(()=>[t[6]||(t[6]=o("p",null,[s("The "),o("code",null," custom-filter "),s(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1)),e(V)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Async items",code:q},{default:l(()=>[t[7]||(t[7]=o("p",null,"Sometimes you need to load data externally based upon a search query. ",-1)),e(y)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"validation",code:P},{default:l(()=>[t[8]||(t[8]=o("p",null,[s("Use "),o("code",null,"rules"),s(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1)),e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{be as default};

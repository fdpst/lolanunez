import{a as s,V as c}from"./VRadioGroup-BH49rIo1.js";import{r as m,o as u,f as G,e as t,c as f,F as _,i as b,b as o,n as p,ag as R,d as i,v as n}from"./main-XhKa_9tU.js";import{V as y}from"./VDivider-C4lH0ooT.js";import{_ as L}from"./AppCardCode-BWgbS9V9.js";import{V as $,a as V}from"./VRow-CFasNknx.js";import"./VSelectionControl-BXoDVL8N.js";import"./form-BsyuclTd.js";import"./VInput-DCf9aRQz.js";import"./VCard-Eaj0dfV-.js";import"./VAvatar-BgIHgX1n.js";import"./VImg-BWevH90G.js";import"./VCardText-B_O88IhU.js";/* empty css              */const C={__name:"DemoRadioValidation",setup(v){const a=m(1),l=[r=>r!==3?!0:"Do not select the third one!"];return(r,e)=>(u(),G(c,{modelValue:p(a),"onUpdate:modelValue":e[0]||(e[0]=d=>R(a)?a.value=d:null),inline:"",rules:l},{default:t(()=>[(u(),f(_,null,b(3,d=>o(s,{key:d,error:p(a)===3,label:`Radio ${d}`,value:d},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}},U={__name:"DemoRadioIcon",setup(v){const a=m(1);return(l,r)=>(u(),G(c,{modelValue:p(a),"onUpdate:modelValue":r[0]||(r[0]=e=>R(a)?a.value=e:null),"false-icon":"ri-notification-off-line","true-icon":"ri-notification-3-line"},{default:t(()=>[(u(),f(_,null,b(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}},w={__name:"DemoRadioLabelSlot",setup(v){const a=m("DuckDuckGo");return(l,r)=>(u(),G(c,{modelValue:p(a),"onUpdate:modelValue":r[0]||(r[0]=e=>R(a)?a.value=e:null)},{label:t(()=>r[1]||(r[1]=[i("div",null,[n("Your favorite "),i("strong",null,"search engine")],-1)])),default:t(()=>[o(s,{value:"Google"},{label:t(()=>r[2]||(r[2]=[i("div",null,[n(" Of course it's "),i("span",{class:"text-success"}," Google ")],-1)])),_:1}),o(s,{value:"DuckDuckGo"},{label:t(()=>r[3]||(r[3]=[i("div",null,[n(" Definitely "),i("span",{class:"text-primary"}," DuckDuckGo ")],-1)])),_:1})]),_:1},8,["modelValue"]))}},S={__name:"DemoRadioDensity",setup(v){const a=m("radio-1"),l=m("radio-1");return(r,e)=>(u(),f(_,null,[o(c,{modelValue:p(a),"onUpdate:modelValue":e[0]||(e[0]=d=>R(a)?a.value=d:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(y,{class:"my-3"}),o(c,{modelValue:p(l),"onUpdate:modelValue":e[1]||(e[1]=d=>R(l)?l.value=d:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}},I={__name:"DemoRadioInline",setup(v){const a=m("radio-1"),l=m("radio-1");return(r,e)=>(u(),f(_,null,[o(c,{modelValue:p(a),"onUpdate:modelValue":e[0]||(e[0]=d=>R(a)?a.value=d:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(y,{class:"my-4"}),o(c,{modelValue:p(l),"onUpdate:modelValue":e[1]||(e[1]=d=>R(l)?l.value=d:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}},j={__name:"DemoRadioColors",setup(v){const a=m("primary"),l=["Primary","Secondary","Success","Info","Warning","Error"];return(r,e)=>(u(),G(c,{modelValue:p(a),"onUpdate:modelValue":e[0]||(e[0]=d=>R(a)?a.value=d:null),inline:""},{default:t(()=>[(u(),f(_,null,b(l,d=>o(s,{key:d,label:d,color:d.toLocaleLowerCase(),value:d.toLocaleLowerCase()},null,8,["label","color","value"])),64))]),_:1},8,["modelValue"]))}},B={class:""},E={__name:"DemoRadioBasic",setup(v){const a=m(1);return(l,r)=>(u(),f("div",B,[o(c,{modelValue:p(a),"onUpdate:modelValue":r[0]||(r[0]=e=>R(a)?a.value=e:null)},{default:t(()=>[(u(),f(_,null,b(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}},A={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`},N={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},P={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="ri-notification-off-line"
    true-icon="ri-notification-3-line"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="ri-notification-off-line"
    true-icon="ri-notification-3-line"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},lo={__name:"radio",setup(v){return(a,l)=>{const r=E,e=L,d=j,D=I,g=S,k=w,O=U,x=C;return u(),G($,{class:"match-height"},{default:t(()=>[o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Basic",code:A},{default:t(()=>[l[0]||(l[0]=i("p",null,[n("The "),i("code",null,"v-radio"),n(" component is a simple radio button.")],-1)),o(r)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Colors",code:F},{default:t(()=>[l[1]||(l[1]=i("p",null,[n("Radios can be colored by using any of the built-in colors and contextual names using the "),i("code",null,"color"),n(" prop.")],-1)),o(d)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Inline",code:T},{default:t(()=>[l[2]||(l[2]=i("p",null,[n("Use "),i("code",null,"inline"),n(" prop to displays radio buttons in row.")],-1)),o(D)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Density",code:N},{default:t(()=>[l[3]||(l[3]=i("p",null,[n("Use "),i("code",null,"density"),n(" prop to adjusts the spacing within the component. Available options are: "),i("code",null,"default"),n(", "),i("code",null,"comfortable"),n(", and "),i("code",null,"compact"),n(".")],-1)),o(g)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Label Slot",code:W},{default:t(()=>[l[4]||(l[4]=i("p",null,[n("Radio Group labels can be defined in "),i("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1)),o(k)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Icon",code:P},{default:t(()=>[l[5]||(l[5]=i("p",null,[n("Use "),i("code",null,"false-icon"),n(" and "),i("code",null,"true-icon"),n(" prop to set icon on inactive and active state.")],-1)),o(O)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Validation",code:Y},{default:t(()=>[l[6]||(l[6]=i("p",null,[n("Use "),i("code",null,"rules"),n(" prop to validate a radio. Accepts a mixed array of types "),i("code",null,"function"),n(", "),i("code",null,"boolean"),n(" and "),i("code",null,"string"),n(". Functions pass an input value as an argument and must return either "),i("code",null,"true"),n(" / "),i("code",null,"false"),n(" or a string containing an error message.")],-1)),o(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{lo as default};

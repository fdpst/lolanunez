import{r as _,o as d,f as v,e as o,b as n,af as r,n as B,ag as j,f7 as D,c as p,v as e,a0 as m,d as i}from"./main-XhKa_9tU.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as s,V as x}from"./VRow-CFasNknx.js";import{_ as z}from"./AppCardCode-BWgbS9V9.js";import{V as g}from"./VAlert-DbZKXW0k.js";/* empty css              */import"./VCard-Eaj0dfV-.js";import"./VAvatar-BgIHgX1n.js";import"./VImg-BWevH90G.js";import"./VCardText-B_O88IhU.js";import"./VDivider-C4lH0ooT.js";const N={__name:"DemoButtonGroup",setup(c){const t=_(1);return(l,V)=>(d(),v(D,{modelValue:B(t),"onUpdate:modelValue":V[0]||(V[0]=a=>j(t)?t.value=a:null),density:"compact"},{default:o(()=>[n(r,{icon:"ri-align-left"}),n(r,{icon:"ri-align-center"}),n(r,{icon:"ri-align-right"}),n(r,{icon:"ri-align-justify"})]),_:1},8,["modelValue"]))}},R={},U={class:"demo-space-x"};function O(c,t){return d(),p("div",U,[n(r,{href:"https://themeselection.com/"},{default:o(()=>t[0]||(t[0]=[e(" String Literal ")])),_:1}),n(r,{href:"https://themeselection.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>t[1]||(t[1]=[e(" Open New Tab ")])),_:1})])}const A=u(R,[["render",O]]),q={},G={class:"demo-space-x"};function Q(c,t){return d(),p("div",G,[n(r,{to:"/components/alert"},{default:o(()=>t[0]||(t[0]=[e(" String Literal ")])),_:1}),n(r,{color:"warning",to:{path:"/components/alert"}},{default:o(()=>t[1]||(t[1]=[e(" Object Path ")])),_:1}),n(r,{color:"success",to:{name:"components-alert"}},{default:o(()=>t[2]||(t[2]=[e(" Named Router ")])),_:1}),n(r,{color:"secondary",to:{path:"/components/alert",query:{plan:"private"}}},{default:o(()=>t[3]||(t[3]=[e(" With Query ")])),_:1})])}const Y=u(q,[["render",Q]]),F={class:"demo-space-x"},H={class:"custom-loader"},J={__name:"DemoButtonLoaders",setup(c){const t=_([]),l=V=>{t.value[V]=!0,setTimeout(()=>{t.value[V]=!1},3e3)};return(V,a)=>(d(),p("div",F,[n(r,{loading:B(t)[0],disabled:B(t)[0],color:"primary",onClick:a[0]||(a[0]=f=>l(0))},{default:o(()=>a[5]||(a[5]=[e(" Accept Terms ")])),_:1},8,["loading","disabled"]),n(r,{loading:B(t)[1],disabled:B(t)[1],color:"secondary",onClick:a[1]||(a[1]=f=>l(1))},{default:o(()=>[a[6]||(a[6]=e(" Upload ")),n(m,{end:"",icon:"ri-upload-cloud-line"})]),_:1},8,["loading","disabled"]),n(r,{loading:B(t)[2],disabled:B(t)[2],color:"success",onClick:a[2]||(a[2]=f=>l(2))},{loader:o(()=>a[7]||(a[7]=[i("span",null,"Loading...",-1)])),default:o(()=>[a[8]||(a[8]=e(" Loader slot "))]),_:1},8,["loading","disabled"]),n(r,{loading:B(t)[3],disabled:B(t)[3],color:"info",onClick:a[3]||(a[3]=f=>l(3))},{loader:o(()=>[i("span",H,[n(m,{icon:"ri-refresh-line"})])]),default:o(()=>[a[9]||(a[9]=e(" Icon Loader "))]),_:1},8,["loading","disabled"]),n(r,{loading:B(t)[4],disabled:B(t)[4],color:"warning",icon:"ri-upload-cloud-line",onClick:a[4]||(a[4]=f=>l(4))},null,8,["loading","disabled"])]))}},K=u(J,[["__scopeId","data-v-e79e981e"]]),M={};function X(c,t){return d(),v(x,null,{default:o(()=>[n(s,{cols:"12",sm:"6"},{default:o(()=>[n(r,{block:""},{default:o(()=>t[0]||(t[0]=[e(" Block Button ")])),_:1})]),_:1}),n(s,{cols:"12",sm:"6"},{default:o(()=>[n(r,{variant:"outlined",block:""},{default:o(()=>t[1]||(t[1]=[e(" Block Button ")])),_:1})]),_:1})]),_:1})}const Z=u(M,[["render",X]]),h={},tt={class:"demo-space-x"};function nt(c,t){return d(),p("div",tt,[n(r,{size:"x-large"},{default:o(()=>t[0]||(t[0]=[e(" Extra large Button ")])),_:1}),n(r,{color:"success",size:"large"},{default:o(()=>t[1]||(t[1]=[e(" Large Button ")])),_:1}),n(r,{color:"info"},{default:o(()=>t[2]||(t[2]=[e(" Normal Button ")])),_:1}),n(r,{size:"small",color:"warning"},{default:o(()=>t[3]||(t[3]=[e(" Small Button ")])),_:1}),n(r,{size:"x-small",color:"error"},{default:o(()=>t[4]||(t[4]=[e(" Extra small Button ")])),_:1})])}const ot=u(h,[["render",nt]]),et={},rt={class:"demo-space-x"};function lt(c,t){return d(),p("div",rt,[n(r,{icon:"ri-suitcase-line",variant:"text"}),n(r,{variant:"text",icon:"ri-user-add-line",color:"secondary"}),n(r,{icon:"ri-search-line",variant:"text",color:"success"}),n(r,{icon:"ri-thumb-up-line",variant:"text",color:"info"}),n(r,{icon:"ri-star-line",variant:"text",color:"warning"}),n(r,{icon:"ri-heart-line",variant:"text",color:"error"})])}const at=u(et,[["render",lt]]),it={},st={class:"demo-space-x"};function dt(c,t){return d(),p("div",st,[n(r,null,{default:o(()=>[t[0]||(t[0]=e(" Accept ")),n(m,{end:"",icon:"ri-checkbox-circle-line"})]),_:1}),n(r,{color:"secondary"},{default:o(()=>[n(m,{start:"",icon:"ri-subtract-line"}),t[1]||(t[1]=e("Cancel "))]),_:1}),n(r,{color:"success"},{default:o(()=>[t[2]||(t[2]=e(" Upload ")),n(m,{end:"",icon:"ri-upload-cloud-line"})]),_:1}),n(r,{color:"info"},{default:o(()=>[n(m,{start:"",icon:"ri-arrow-left-line"}),t[3]||(t[3]=e(" Back "))]),_:1}),n(r,{color:"warning"},{default:o(()=>[n(m,{icon:"ri-hammer-line"})]),_:1}),n(r,{color:"error"},{default:o(()=>[n(m,{icon:"ri-prohibited-line"})]),_:1})])}const ct=u(it,[["render",dt]]),ut={},pt={class:"demo-space-x"};function Bt(c,t){return d(),p("div",pt,[n(r,{variant:"tonal"},{default:o(()=>t[0]||(t[0]=[e(" Primary ")])),_:1}),n(r,{color:"secondary",variant:"tonal"},{default:o(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1}),n(r,{color:"success",variant:"tonal"},{default:o(()=>t[2]||(t[2]=[e(" Success ")])),_:1}),n(r,{color:"info",variant:"tonal"},{default:o(()=>t[3]||(t[3]=[e(" Info ")])),_:1}),n(r,{color:"warning",variant:"tonal"},{default:o(()=>t[4]||(t[4]=[e(" Warning ")])),_:1}),n(r,{color:"error",variant:"tonal"},{default:o(()=>t[5]||(t[5]=[e(" Error ")])),_:1})])}const Vt=u(ut,[["render",Bt]]),mt={},ft={class:"demo-space-x"};function vt(c,t){return d(),p("div",ft,[n(r,{variant:"plain"},{default:o(()=>t[0]||(t[0]=[e(" Primary ")])),_:1}),n(r,{color:"secondary",variant:"plain"},{default:o(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1}),n(r,{color:"success",variant:"plain"},{default:o(()=>t[2]||(t[2]=[e(" Success ")])),_:1}),n(r,{color:"info",variant:"plain"},{default:o(()=>t[3]||(t[3]=[e(" Info ")])),_:1}),n(r,{color:"warning",variant:"plain"},{default:o(()=>t[4]||(t[4]=[e(" Warning ")])),_:1}),n(r,{color:"error",variant:"plain"},{default:o(()=>t[5]||(t[5]=[e(" Error ")])),_:1})])}const gt=u(mt,[["render",vt]]),_t={},xt={class:"demo-space-x"};function yt(c,t){return d(),p("div",xt,[n(r,{variant:"text"},{default:o(()=>t[0]||(t[0]=[e(" Primary ")])),_:1}),n(r,{variant:"text",color:"secondary"},{default:o(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1}),n(r,{variant:"text",color:"success"},{default:o(()=>t[2]||(t[2]=[e(" Success ")])),_:1}),n(r,{variant:"text",color:"info"},{default:o(()=>t[3]||(t[3]=[e(" Info ")])),_:1}),n(r,{variant:"text",color:"warning"},{default:o(()=>t[4]||(t[4]=[e(" Warning ")])),_:1}),n(r,{variant:"text",color:"error"},{default:o(()=>t[5]||(t[5]=[e(" Error ")])),_:1})])}const bt=u(_t,[["render",yt]]),wt={},kt={class:"demo-space-x"};function St(c,t){return d(),p("div",kt,[n(r,null,{default:o(()=>t[0]||(t[0]=[e(" Normal Button ")])),_:1}),n(r,{rounded:"lg",color:"secondary"},{default:o(()=>t[1]||(t[1]=[e(" Rounded Button ")])),_:1}),n(r,{rounded:0,color:"success"},{default:o(()=>t[2]||(t[2]=[e(" Tile Button ")])),_:1}),n(r,{rounded:"pill",color:"info"},{default:o(()=>t[3]||(t[3]=[e(" Pill Button ")])),_:1})])}const $t=u(wt,[["render",St]]),It={},Et={class:"demo-space-x"};function Tt(c,t){return d(),p("div",Et,[n(r,{variant:"flat"},{default:o(()=>t[0]||(t[0]=[e(" Primary ")])),_:1}),n(r,{variant:"flat",color:"secondary"},{default:o(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1}),n(r,{variant:"flat",color:"success"},{default:o(()=>t[2]||(t[2]=[e(" Success ")])),_:1}),n(r,{variant:"flat",color:"info"},{default:o(()=>t[3]||(t[3]=[e(" Info ")])),_:1}),n(r,{variant:"flat",color:"warning"},{default:o(()=>t[4]||(t[4]=[e(" Warning ")])),_:1}),n(r,{variant:"flat",color:"error"},{default:o(()=>t[5]||(t[5]=[e(" Error ")])),_:1})])}const Pt=u(It,[["render",Tt]]),Lt={},Ct={class:"demo-space-x"};function Wt(c,t){return d(),p("div",Ct,[n(r,{variant:"outlined"},{default:o(()=>t[0]||(t[0]=[e(" Primary ")])),_:1}),n(r,{variant:"outlined",color:"secondary"},{default:o(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1}),n(r,{variant:"outlined",color:"success"},{default:o(()=>t[2]||(t[2]=[e(" Success ")])),_:1}),n(r,{variant:"outlined",color:"info"},{default:o(()=>t[3]||(t[3]=[e(" Info ")])),_:1}),n(r,{variant:"outlined",color:"warning"},{default:o(()=>t[4]||(t[4]=[e(" Warning ")])),_:1}),n(r,{variant:"outlined",color:"error"},{default:o(()=>t[5]||(t[5]=[e(" Error ")])),_:1})])}const jt=u(Lt,[["render",Wt]]),Dt={},zt={class:"demo-space-x"};function Nt(c,t){return d(),p("div",zt,[n(r,{color:"primary"},{default:o(()=>t[0]||(t[0]=[e(" Primary ")])),_:1}),n(r,{color:"secondary"},{default:o(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1}),n(r,{color:"success"},{default:o(()=>t[2]||(t[2]=[e(" Success ")])),_:1}),n(r,{color:"info"},{default:o(()=>t[3]||(t[3]=[e(" Info ")])),_:1}),n(r,{color:"warning"},{default:o(()=>t[4]||(t[4]=[e(" Warning ")])),_:1}),n(r,{color:"error"},{default:o(()=>t[5]||(t[5]=[e(" Error ")])),_:1})])}const Rt=u(Dt,[["render",Nt]]),Ut={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Ot={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},At={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},qt={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="compact"
  >
    <VBtn icon="ri-align-left" />
    <VBtn icon="ri-align-center" />
    <VBtn icon="ri-align-right" />
    <VBtn icon="ri-align-justify" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="compact"
  >
    <VBtn icon="ri-align-left" />
    <VBtn icon="ri-align-center" />
    <VBtn icon="ri-align-right" />
    <VBtn icon="ri-align-justify" />
  </VBtnToggle>
</template>
`},Gt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="ri-checkbox-circle-line"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="ri-subtract-line"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="ri-arrow-left-line"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="ri-hammer-line" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="ri-prohibited-line" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="ri-checkbox-circle-line"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="ri-subtract-line"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="ri-arrow-left-line"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="ri-hammer-line" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="ri-prohibited-line" />
    </VBtn>
  </div>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="ri-suitcase-line"
      variant="text"
    />

    <VBtn
      variant="text"
      icon="ri-user-add-line"
      color="secondary"
    />

    <VBtn
      icon="ri-search-line"
      variant="text"
      color="success"
    />

    <VBtn
      icon="ri-thumb-up-line"
      variant="text"
      color="info"
    />

    <VBtn
      icon="ri-star-line"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="ri-heart-line"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="ri-suitcase-line"
      variant="text"
    />

    <VBtn
      variant="text"
      icon="ri-user-add-line"
      color="secondary"
    />

    <VBtn
      icon="ri-search-line"
      variant="text"
      color="success"
    />

    <VBtn
      icon="ri-thumb-up-line"
      variant="text"
      color="info"
    />

    <VBtn
      icon="ri-star-line"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="ri-heart-line"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Yt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Ft={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="ri-refresh-line" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="ri-upload-cloud-line"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="ri-refresh-line" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="ri-upload-cloud-line"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},Mt={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="/components/alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/components/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/components/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="/components/alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/components/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/components/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},pn={__name:"button",setup(c){return(t,l)=>{const V=Rt,a=z,f=jt,y=Pt,b=$t,w=bt,k=gt,S=Vt,$=ct,I=at,E=ot,T=Z,P=K,L=Y,C=A,W=N;return d(),v(x,null,{default:o(()=>[n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Colors",code:Ot},{default:o(()=>[l[0]||(l[0]=i("p",null,[e("The "),i("code",null,"color"),e(" prop is used to change the background color of the alert.")],-1)),n(V)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Outlined",code:Ht},{default:o(()=>[l[1]||(l[1]=i("p",null,[e("The "),i("code",null,"outlined"),e(" variant option is used to create outlined buttons.")],-1)),n(f)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Flat",code:At},{default:o(()=>[l[2]||(l[2]=i("p",null,[e("The "),i("code",null,"flat"),e(" buttons still maintain their background color, but have no box shadow.")],-1)),n(y)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Rounded",code:Kt},{default:o(()=>[l[3]||(l[3]=i("p",null,[e("Use the "),i("code",null,"rounded"),e(" prop to control the border radius of buttons.")],-1)),n(b)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Text",code:Zt},{default:o(()=>[l[4]||(l[4]=i("p",null,[e("Use "),i("code",null,"text"),e(" variant option to create text button. Text buttons have no box shadow and no background.")],-1)),n(w)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Plain",code:Jt},{default:o(()=>[l[5]||(l[5]=i("p",null,[e("Use "),i("code",null,"plain"),e(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1)),n(k)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Tonal",code:ht},{default:o(()=>[l[6]||(l[6]=i("p",null,[e("Use "),i("code",null,"tonal"),e(" variant option to a create a light background button.")],-1)),n(S)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Icon",code:Gt},{default:o(()=>[l[7]||(l[7]=i("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1)),n($)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Icon Only",code:Qt},{default:o(()=>[l[8]||(l[8]=i("p",null,[e("Use "),i("code",null,"icon"),e(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")],-1)),n(I)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Sizing",code:Xt},{default:o(()=>[l[9]||(l[9]=i("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1)),n(E)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Block",code:Ut},{default:o(()=>[l[10]||(l[10]=i("p",null,[e("The "),i("code",null,"block"),e(" prop allows buttons to extend the full available width.")],-1)),n(T)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Loaders",code:Ft},{default:o(()=>[l[11]||(l[11]=i("p",null,[e("Using the "),i("code",null,"loading"),e(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),i("code",null,"v-progress-circular"),e(" component but this can be customized.")],-1)),n(P)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Router",code:Mt},{default:o(()=>[l[13]||(l[13]=i("p",null,[e("Use "),i("code",null,"to"),e(" prop to create button with router support.")],-1)),n(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>l[12]||(l[12]=[e(" Note: On click of the link button, You will get redirected to another page. ")])),_:1}),n(L)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Link",code:Yt},{default:o(()=>[l[15]||(l[15]=i("p",null,[e("Designates that the component is a link. This is automatic when using the "),i("code",null,"href"),e(" or "),i("code",null,"to"),e(" prop.")],-1)),n(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>l[14]||(l[14]=[e(" Note: On click of the link button, You will get redirected to another page. ")])),_:1}),n(C)]),_:1},8,["code"])]),_:1}),n(s,{cols:"12"},{default:o(()=>[n(a,{title:"Group",code:qt},{default:o(()=>[l[16]||(l[16]=i("p",null,[e(" Wrap buttons with the "),i("code",null,"v-btn-toggle"),e(" component to create a group button. You can add a visual divider between buttons with the "),i("code",null,"divided"),e(" prop. ")],-1)),n(W)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{pn as default};

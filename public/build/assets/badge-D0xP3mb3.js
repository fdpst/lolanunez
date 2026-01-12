import{o as f,c as u,b as t,e as a,n as r,aw as d,af as B,v as n,f as w,F as R,i as H,x as O,r as _,P as I,a0 as V,d as s}from"./main-C1cSucNj.js";import{V as l}from"./VAvatar-BpNw3P6_.js";import{V as g}from"./VImg-D1aAeOw8.js";import{V as o}from"./VBadge-CHpZe8sE.js";import{a as $,V as S}from"./VTabs-C6khb03f.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as W}from"./AppCardCode-DshpRWUE.js";import{V as E,a as v}from"./VRow-DdYzItfl.js";import"./VSlideGroup-Bl1sI-M8.js";import"./VCard-DoJ7OvEk.js";import"./VCardText-iOQ31nyo.js";import"./VDivider-BS9Tllbl.js";/* empty css              */const C={class:"demo-space-x"},N={__name:"DemoBadgeTonal",setup(p){return(c,e)=>(f(),u("div",C,[t(o,{content:"5",class:"v-badge--tonal"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{content:"1",class:"v-badge--tonal",color:"error"},{default:a(()=>[t(B,{variant:"tonal",color:"error"},{default:a(()=>e[0]||(e[0]=[n(" Default ")])),_:1})]),_:1}),t(o,{icon:"ri-lock-unlock-line",color:"info",class:"v-badge--tonal"},{default:a(()=>[t(l,null,{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1})]))}},M={class:"demo-space-x"},Y={__name:"DemoBadgeMaximumValue",setup(p){return(c,e)=>(f(),u("div",M,[t(o,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1})]))}},P={__name:"DemoBadgeTabs",setup(p){const c=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(e,m)=>(f(),w(S,{grow:"",height:"52"},{default:a(()=>[(f(),u(R,null,H(c,i=>t($,{key:i.content,value:i.content},{default:a(()=>[t(o,{content:i.badge,floating:""},{default:a(()=>[n(O(i.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},U={class:"demo-space-x"},F={__name:"DemoBadgeShowOnHover",setup(p){const c=_(),e=_(),m=_(),i=I(e),b=I(c),x=I(m);return(A,z)=>(f(),u("div",U,[t(o,{content:"3",transition:"slide-x-transition","model-value":r(i)},{default:a(()=>[t(V,{ref_key:"tRefTwitterBadge",ref:e,size:"25",icon:"ri-twitter-line"},null,512)]),_:1},8,["model-value"]),t(o,{content:"5",transition:"scale-transition","model-value":r(b)},{default:a(()=>[t(V,{ref_key:"tRefInstagramBadge",ref:c,size:"25",icon:"ri-instagram-line"},null,512)]),_:1},8,["model-value"]),t(o,{content:"1",transition:"slide-x-transition","model-value":r(x)},{default:a(()=>[t(V,{ref_key:"tRefWhatsappBadge",ref:m,size:"25",icon:"ri-whatsapp-line"},null,512)]),_:1},8,["model-value"])]))}},L={class:"d-flex align-center"},q={class:"demo-space-x"},G={__name:"DemoBadgeDynamicNotifications",setup(p){const c=_();return(e,m)=>(f(),u("div",L,[t(o,{content:r(c),"model-value":!!r(c),color:"success",class:"me-5"},{default:a(()=>[t(V,{size:"40",icon:"ri-vuejs-line"})]),_:1},8,["content","model-value"]),s("div",q,[t(B,{onClick:m[0]||(m[0]=i=>c.value=(r(c)||0)+1)},{default:a(()=>m[2]||(m[2]=[n(" Send Message ")])),_:1}),t(B,{color:"error",onClick:m[1]||(m[1]=i=>c.value=0)},{default:a(()=>m[3]||(m[3]=[n(" Clear Notifications ")])),_:1})])]))}},J={class:"demo-space-x"},K={__name:"DemoBadgeAvatarStatus",setup(p){return(c,e)=>(f(),u("div",J,[t(o,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(l,{size:"large"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(l,{size:"large"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(l,{size:"large"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1})]))}},Q={class:"demo-space-x"},X={__name:"DemoBadgeIcon",setup(p){return(c,e)=>(f(),u("div",Q,[t(o,null,{badge:a(()=>[t(V,{icon:"ri-error-warning-line"})]),default:a(()=>[t(l,null,{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{icon:"ri-lock-unlock-line"},{default:a(()=>[t(l,null,{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1})]))}},Z={class:"demo-space-x"},tt={__name:"DemoBadgePosition",setup(p){return(c,e)=>(f(),u("div",Z,[t(o,{content:"1",location:"end top"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{location:"bottom start",content:"2"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{location:"bottom end",content:"3"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{location:"top start",content:"4"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1})]))}},at={},et={class:"demo-space-x"};function ot(p,c){return f(),u("div",et,[t(o,{dot:"",color:"primary"},{default:a(()=>[t(V,{size:"25",icon:"ri-instagram-line"})]),_:1}),t(o,{dot:"",color:"secondary"},{default:a(()=>[t(V,{size:"25",icon:"ri-instagram-line"})]),_:1}),t(o,{dot:"",color:"success"},{default:a(()=>[t(V,{size:"25",icon:"ri-instagram-line"})]),_:1}),t(o,{dot:"",color:"info"},{default:a(()=>[t(V,{size:"25",icon:"ri-instagram-line"})]),_:1}),t(o,{dot:"",color:"warning"},{default:a(()=>[t(V,{size:"25",icon:"ri-instagram-line"})]),_:1}),t(o,{dot:"",color:"error"},{default:a(()=>[t(V,{size:"25",icon:"ri-instagram-line"})]),_:1})])}const nt=j(at,[["render",ot]]),st={class:"demo-space-x d-flex align-center flex-wrap"},rt={__name:"DemoBadgeStyle",setup(p){return(c,e)=>(f(),u("div",st,[t(o,{content:"1"},{default:a(()=>[t(B,{variant:"tonal"},{default:a(()=>e[0]||(e[0]=[n(" Default ")])),_:1})]),_:1}),t(o,{content:"5",bordered:""},{default:a(()=>[t(B,{variant:"tonal"},{default:a(()=>e[1]||(e[1]=[n(" Border ")])),_:1})]),_:1}),t(o,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{inline:"",content:"5"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1}),t(o,{rounded:"sm",content:"5"},{default:a(()=>[t(l,{size:"48"},{default:a(()=>[t(g,{src:r(d)},null,8,["src"])]),_:1})]),_:1})]))}},it={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ct={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>
  </div>
</template>
`},dt={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="ri-vuejs-line"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="ri-vuejs-line"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},lt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="ri-error-warning-line" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="ri-lock-unlock-line">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="ri-error-warning-line" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="ri-lock-unlock-line">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="ri-twitter-line"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="ri-whatsapp-line"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="ri-twitter-line"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="ri-whatsapp-line"
      />
    </VBadge>
  </div>
</template>
`},Vt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},pt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    height="52"
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        floating
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    height="52"
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        floating
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},vt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn
        variant="tonal"
        color="error"
      >
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="ri-lock-unlock-line"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn
        variant="tonal"
        color="error"
      >
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="ri-lock-unlock-line"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Dt={__name:"badge",setup(p){return(c,e)=>{const m=rt,i=W,b=nt,x=tt,A=X,z=K,h=G,y=F,T=P,k=Y,D=N;return f(),w(E,{class:"match-height"},{default:a(()=>[t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Style",code:Vt},{default:a(()=>[e[0]||(e[0]=s("p",null,[n("You can use various props like "),s("code",null,"bordered"),n(", "),s("code",null,"dot"),n(", "),s("code",null,"inline"),n(", "),s("code",null,"rounded"),n(" etc. to style the badge.")],-1)),t(m)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Color",code:ct},{default:a(()=>[e[1]||(e[1]=s("p",null,[n("Use "),s("code",null,"color"),n(" prop to create various background badges.")],-1)),t(b)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Position",code:mt},{default:a(()=>[e[2]||(e[2]=s("p",null,[n("You can use "),s("code",null,"location"),n(" prop to change the position of the badge. Possible values are "),s("code",null,"top-end"),n(", "),s("code",null,"bottom-end"),n(", "),s("code",null,"bottom-start"),n(", "),s("code",null,"top-start"),n(".")],-1)),t(x)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Icon",code:lt},{default:a(()=>[e[3]||(e[3]=s("p",null,[n("You can use "),s("code",null,"icon"),n(" prop or use "),s("code",null,"slot"),n(" to render the icon")],-1)),t(A)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Avatar Status",code:it},{default:a(()=>[e[4]||(e[4]=s("p",null,"You can use badge with avatar as status.",-1)),t(z)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Dynamic notifications",code:dt},{default:a(()=>[e[5]||(e[5]=s("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1)),t(h)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Show on hover",code:ft},{default:a(()=>[e[6]||(e[6]=s("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1)),t(y)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Tabs",code:pt},{default:a(()=>[e[7]||(e[7]=s("p",null,"Badges help convey information to the user in a variety of ways.",-1)),t(T)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Maximum Value",code:gt},{default:a(()=>[e[8]||(e[8]=s("p",null,[n("Use "),s("code",null,"max"),n(" prop to cap the value of the badge content")],-1)),t(k)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(i,{title:"Tonal",code:vt},{default:a(()=>[e[9]||(e[9]=s("p",null,[n("Use class "),s("code",null,"v-badge--tonal"),n(" for using tonal variant badge.")],-1)),t(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Dt as default};

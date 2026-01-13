import{a as u,V}from"./VTabs-Cs01WiBI.js";import{r as I,w as $,o as r,c as d,b as e,e as t,F as p,i as k,n as m,f as y,v as n,x as _,ag as T,d as l,af as x,a0 as W}from"./main-DXTHM_Z4.js";import{a as g,V as q}from"./VWindowItem-Ccc_dZvZ.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as b,V as P}from"./VRow-U9BCKMf6.js";import{_ as z}from"./AppCardCode-B8sgTGrc.js";import"./VSlideGroup-C1X9mQaT.js";import"./ssrBoot-BzQpit4r.js";/* empty css              */import"./VCard-BBjecQUS.js";import"./VAvatar-QubjHI1z.js";import"./VImg-DTTLi8N3.js";import"./VCardText-DGP4d7zZ.js";import"./VDivider-CVdsTcIK.js";const O={class:"text-center mt-9"},U={__name:"DemoTabsDynamic",setup(v){const a=I(3),o=I(0);return $(a,s=>{o.value=s-1}),(s,i)=>(r(),d(p,null,[e(V,{modelValue:m(o),"onUpdate:modelValue":i[0]||(i[0]=c=>T(o)?o.value=c:null)},{default:t(()=>[(r(!0),d(p,null,k(m(a),c=>(r(),y(u,{key:c,value:c},{default:t(()=>[n(" Tab "+_(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l("div",O,[e(x,{disabled:!m(a),variant:"text",onClick:i[1]||(i[1]=c=>a.value--)},{default:t(()=>i[3]||(i[3]=[n(" Remove Tab ")])),_:1},8,["disabled"]),e(x,{variant:"text",onClick:i[2]||(i[2]=c=>a.value++)},{default:t(()=>i[4]||(i[4]=[n(" Add Tab ")])),_:1})])],64))}},R={class:"text-center"},E="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",M={__name:"DemoTabsProgrammaticNavigation",setup(v){const a=I(1),o=["Appetizers","Entrees","Deserts","Cocktails"],s=o.length,i=()=>{a.value!==1&&(a.value-=1)},c=()=>{a.value!==s&&(a.value+=1)};return(D,w)=>(r(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":w[0]||(w[0]=f=>T(a)?a.value=f:null),grow:""},{default:t(()=>[(r(!0),d(p,null,k(o.length,f=>(r(),y(u,{key:f,value:f},{default:t(()=>[n(_(o[f-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":w[1]||(w[1]=f=>T(a)?a.value=f:null),class:"mt-5"},{default:t(()=>[(r(!0),d(p,null,k(o.length,f=>(r(),y(g,{key:f,value:f},{default:t(()=>[n(_(E))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l("div",R,[e(x,{variant:"text",disabled:m(a)===1,onClick:i},{default:t(()=>w[2]||(w[2]=[n(" Previous ")])),_:1},8,["disabled"]),e(x,{variant:"text",disabled:m(a)===m(s),onClick:c},{default:t(()=>w[3]||(w[3]=[n(" Next ")])),_:1},8,["disabled"])])],64))}},H="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",G={__name:"DemoTabsGrow",setup(v){const a=I("Appetizers"),o=["Appetizers","Entrees","Deserts","Cocktails"];return(s,i)=>(r(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=c=>T(a)?a.value=c:null),grow:""},{default:t(()=>[(r(),d(p,null,k(o,c=>e(u,{key:c,value:c},{default:t(()=>[n(_(c),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=c=>T(a)?a.value=c:null),class:"mt-6"},{default:t(()=>[(r(),d(p,null,k(o,c=>e(g,{key:c,value:c},{default:t(()=>[n(_(H))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},L={};function J(v,a){return r(),y(V,{"fixed-tabs":""},{default:t(()=>[e(u,null,{default:t(()=>a[0]||(a[0]=[n(" Fixed Tab 1 ")])),_:1}),e(u,null,{default:t(()=>a[1]||(a[1]=[n(" Fixed Tab 2 ")])),_:1}),e(u,null,{default:t(()=>a[2]||(a[2]=[n(" Fixed Tab 3 ")])),_:1}),e(u,null,{default:t(()=>a[3]||(a[3]=[n(" Fixed Tab 4 ")])),_:1})]),_:1})}const K=C(L,[["render",J]]),Q={};function X(v,a){return r(),y(V,{"next-icon":"ri-arrow-right-line","prev-icon":"ri-arrow-left-line","show-arrows":""},{default:t(()=>[(r(),d(p,null,k(10,o=>e(u,{key:o},{default:t(()=>[n(" Item "+_(o),1)]),_:2},1024)),64))]),_:1})}const Y=C(Q,[["render",X]]),Z={};function ee(v,a){return r(),y(V,{"show-arrows":""},{default:t(()=>[(r(),d(p,null,k(10,o=>e(u,{key:o,value:o},{default:t(()=>[n(" Item "+_(o),1)]),_:2},1032,["value"])),64))]),_:1})}const te=C(Z,[["render",ee]]),ae={};function se(v,a){return r(),d(p,null,[e(V,null,{default:t(()=>[e(u,null,{default:t(()=>a[0]||(a[0]=[n("Home")])),_:1}),e(u,null,{default:t(()=>a[1]||(a[1]=[n("Service")])),_:1}),e(u,null,{default:t(()=>a[2]||(a[2]=[n("Account")])),_:1})]),_:1}),e(V,{"align-tabs":"center"},{default:t(()=>[e(u,null,{default:t(()=>a[3]||(a[3]=[n("Home")])),_:1}),e(u,null,{default:t(()=>a[4]||(a[4]=[n("Service")])),_:1}),e(u,null,{default:t(()=>a[5]||(a[5]=[n("Account")])),_:1})]),_:1}),e(V,{"align-tabs":"end"},{default:t(()=>[e(u,null,{default:t(()=>a[6]||(a[6]=[n("Home")])),_:1}),e(u,null,{default:t(()=>a[7]||(a[7]=[n("Service")])),_:1}),e(u,null,{default:t(()=>a[8]||(a[8]=[n("Account")])),_:1})]),_:1})],64)}const ne=C(ae,[["render",se]]),ie={__name:"DemoTabsVerticalPill",setup(v){const a=I(0);return(o,s)=>(r(),y(P,null,{default:t(()=>[e(b,{cols:"12",sm:"4"},{default:t(()=>[e(V,{modelValue:m(a),"onUpdate:modelValue":s[0]||(s[0]=i=>T(a)?a.value=i:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(u,{"prepend-icon":"ri-user-line"},{default:t(()=>s[2]||(s[2]=[n(" Option 1 ")])),_:1}),e(u,{"prepend-icon":"ri-lock-line"},{default:t(()=>s[3]||(s[3]=[n(" Option 2 ")])),_:1}),e(u,{"prepend-icon":"ri-rfid-line"},{default:t(()=>s[4]||(s[4]=[n(" Option 3 ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"8"},{default:t(()=>[e(q,{modelValue:m(a),"onUpdate:modelValue":s[1]||(s[1]=i=>T(a)?a.value=i:null)},{default:t(()=>[e(g,null,{default:t(()=>s[5]||(s[5]=[l("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),l("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1)])),_:1}),e(g,null,{default:t(()=>s[6]||(s[6]=[l("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),l("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1)])),_:1}),e(g,null,{default:t(()=>s[7]||(s[7]=[l("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),l("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1)])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},oe={__name:"DemoTabsVertical",setup(v){const a=I(0);return(o,s)=>(r(),y(P,null,{default:t(()=>[e(b,{cols:"12",sm:"4"},{default:t(()=>[e(V,{modelValue:m(a),"onUpdate:modelValue":s[0]||(s[0]=i=>T(a)?a.value=i:null),direction:"vertical"},{default:t(()=>[e(u,{"prepend-icon":"ri-user-line"},{default:t(()=>s[2]||(s[2]=[n(" Option 1 ")])),_:1}),e(u,{"prepend-icon":"ri-lock-line"},{default:t(()=>s[3]||(s[3]=[n(" Option 2 ")])),_:1}),e(u,{"prepend-icon":"ri-rfid-line"},{default:t(()=>s[4]||(s[4]=[n(" Option 3 ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"8"},{default:t(()=>[e(q,{modelValue:m(a),"onUpdate:modelValue":s[1]||(s[1]=i=>T(a)?a.value=i:null)},{default:t(()=>[e(g,null,{default:t(()=>s[5]||(s[5]=[l("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),l("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1)])),_:1}),e(g,null,{default:t(()=>s[6]||(s[6]=[l("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),l("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1)])),_:1}),e(g,null,{default:t(()=>s[7]||(s[7]=[l("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),l("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1)])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},le="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",ue={__name:"DemoTabsStacked",setup(v){const a=I("tab-1");return(o,s)=>(r(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":s[0]||(s[0]=i=>T(a)?a.value=i:null),grow:"",stacked:""},{default:t(()=>[e(u,{value:"tab-1"},{default:t(()=>[e(W,{icon:"ri-phone-line",class:"mb-2"}),s[2]||(s[2]=l("span",null,"Recent",-1))]),_:1}),e(u,{value:"tab-2"},{default:t(()=>[e(W,{icon:"ri-heart-line",class:"mb-2"}),s[3]||(s[3]=l("span",null,"Favorites",-1))]),_:1}),e(u,{value:"tab-3"},{default:t(()=>[e(W,{icon:"ri-account-box-line",class:"mb-2"}),s[4]||(s[4]=l("span",null,"Nearby",-1))]),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":s[1]||(s[1]=i=>T(a)?a.value=i:null),class:"mt-5"},{default:t(()=>[(r(),d(p,null,k(3,i=>e(g,{key:i,value:`tab-${i}`},{default:t(()=>[n(_(le))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},re="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",ce={__name:"DemoTabsBasicPill",setup(v){const a=I(0);return(o,s)=>(r(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":s[0]||(s[0]=i=>T(a)?a.value=i:null),class:"v-tabs-pill"},{default:t(()=>[e(u,null,{default:t(()=>s[2]||(s[2]=[n("Tab One")])),_:1}),e(u,null,{default:t(()=>s[3]||(s[3]=[n("Tab Two")])),_:1}),e(u,null,{default:t(()=>s[4]||(s[4]=[n("Tab Three")])),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":s[1]||(s[1]=i=>T(a)?a.value=i:null),class:"mt-5"},{default:t(()=>[(r(),d(p,null,k(3,i=>e(g,{key:i},{default:t(()=>[n(_(re))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},me="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",de={__name:"DemoTabsBasic",setup(v){const a=I(0);return(o,s)=>(r(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":s[0]||(s[0]=i=>T(a)?a.value=i:null)},{default:t(()=>[e(u,null,{default:t(()=>s[2]||(s[2]=[n("Tab One")])),_:1}),e(u,null,{default:t(()=>s[3]||(s[3]=[n("Tab Two")])),_:1}),e(u,null,{default:t(()=>s[4]||(s[4]=[n("Tab Three")])),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:m(a),"onUpdate:modelValue":s[1]||(s[1]=i=>T(a)?a.value=i:null),class:"mt-5"},{default:t(()=>[(r(),d(p,null,k(3,i=>e(g,{key:i},{default:t(()=>[n(_(me))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},pe={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},be={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Te={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Ve={ts:`<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},ve={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},fe={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},ge={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},we={ts:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},ke={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},_e={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Ie={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},ye={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},ze={__name:"tabs",setup(v){return(a,o)=>{const s=de,i=z,c=ce,D=ue,w=oe,f=ie,S=ne,j=te,F=Y,B=K,h=G,N=M,A=U;return r(),y(P,{class:"match-height"},{default:t(()=>[e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Basic",code:be},{default:t(()=>[o[0]||(o[0]=l("p",null,[n("The "),l("code",null,"v-tabs"),n(" component is used for hiding content behind a selectable item.")],-1)),e(s)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Basic Pill",code:Te},{default:t(()=>[o[1]||(o[1]=l("p",null,[n("Use our custom class "),l("code",null,".v-tabs-pill"),n(" along with "),l("code",null,"v-tabs"),n(" component to style pill tabs.")],-1)),e(c)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Stacked",code:_e},{default:t(()=>[o[2]||(o[2]=l("p",null,[n("Using "),l("code",null,"stacked"),n(" prop you can have buttons that use both icons and text.")],-1)),e(D)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Vertical",code:Ie},{default:t(()=>[o[3]||(o[3]=l("p",null,[n("The "),l("code",null,"vertical"),n(" prop allows for "),l("code",null,"v-tab"),n(" components to stack vertically.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Vertical Pill",code:ye},{default:t(()=>[o[4]||(o[4]=l("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1)),e(f)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Alignment",code:pe},{default:t(()=>[o[5]||(o[5]=l("p",null,[n("Use "),l("code",null,"align-tabs"),n(" prop to change the tabs alignment.")],-1)),e(S)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Pagination",code:we},{default:t(()=>[o[6]||(o[6]=l("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1)),e(j)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Custom Icons",code:Ve},{default:t(()=>[o[7]||(o[7]=l("p",null,[l("code",null,"prev-icon"),n(" and "),l("code",null,"next-icon"),n(" props can be used for applying custom pagination icons.")],-1)),e(F)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(i,{title:"Fixed",code:fe},{default:t(()=>[o[8]||(o[8]=l("p",null,[n("The "),l("code",null,"fixed-tabs"),n(" prop forces "),l("code",null,"v-tab"),n(" to take up all available space up to the maximum width (300px).")],-1)),e(B)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(i,{title:"Grow",code:ge},{default:t(()=>[o[9]||(o[9]=l("p",null,[n("The "),l("code",null,"grow"),n(" prop will make the tab items take up all available space with no limit.")],-1)),e(h)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Programmatic Navigation",code:ke},{default:t(()=>[e(N)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Dynamic",code:ve},{default:t(()=>[o[10]||(o[10]=l("p",null,[n("Tabs can be dynamically added and removed. This allows you to update to any number and the "),l("code",null,"v-tabs"),n(" component will react.")],-1)),e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ze as default};

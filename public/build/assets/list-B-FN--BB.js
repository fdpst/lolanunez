import{a as m,b as h,V as f,d as A,c as B,e as S}from"./VList-CLtMWoGj.js";import{o as r,f as d,e as t,c as V,F as b,i as L,b as e,a0 as x,x as y,v as s,al as $,z as J,af as T,d as u,aw as P,ax as U,ay as G,an as M,r as W,s as k,n as K,ag as Q}from"./main-BwDGDDDW.js";import{V as w}from"./VAvatar-DYn3is-W.js";import{V as D}from"./VDivider-PVfbuN4-.js";import{V as E}from"./VBadge-CvK_Em4T.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as C}from"./VListItemAction-Bt-AUlIU.js";import{V as j}from"./VCheckbox-B4LfpRVf.js";import{_ as q}from"./AppCardCode-DSaBCOml.js";import{V as X,a as g}from"./VRow-DJH2tZVu.js";import{V as o}from"./VCardText-BKkdmkn-.js";import"./ssrBoot-B7QpyNAy.js";import"./VImg-BYy41-F9.js";import"./VCheckboxBtn-CuvLREeJ.js";import"./VSelectionControl-D0_t5DTC.js";import"./form-BEvPHhJ7.js";import"./VInput-CVFVwJKu.js";import"./VCard-Cpw0jw9u.js";/* empty css              */const Z={__name:"DemoListShaped",setup(v){const a=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"ri-instagram-line"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"ri-facebook-circle-line"},{text:"Bonbon macaroon gummies pie jelly",icon:"ri-twitter-line"}];return(i,c)=>(r(),d(f,null,{default:t(()=>[(r(),V(b,null,L(a,(l,n)=>e(m,{key:n,value:l.text,rounded:"shaped"},{prepend:t(()=>[e(x,{icon:l.icon},null,8,["icon"])]),default:t(()=>[e(h,{textContent:y(l.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}},ee={__name:"DemoListProgressList",setup(v){const a=[{avatar:"ri-reactjs-line",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"ri-bootstrap-line",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"ri-vuejs-line",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"ri-angularjs-line",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"ri-javascript-line",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],i={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(c,l)=>(r(),d(f,{lines:"two",border:"",rounded:""},{default:t(()=>[(r(),V(b,null,L(a,(n,p)=>(r(),V(b,{key:n.language},[e(m,null,{prepend:t(()=>[e(w,{size:"36",rounded:"",variant:"tonal",icon:n.avatar,color:i[n.language]},null,8,["icon","color"])]),default:t(()=>[e(h,null,{default:t(()=>[s(y(n.title),1)]),_:2},1024),e(A,{class:"mt-2"},{default:t(()=>[e($,{height:"6",rounded:"","model-value":n.amount,"bg-color":"secondary",color:i[n.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),p!==a.length-1?(r(),d(D,{key:0})):J("",!0)],64))),64))]),_:1}))}},te={class:"ms-4"},ae={class:"text-xs text-disabled"},ie={__name:"DemoListUserList",setup(v){const a=[{avatar:P,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:U,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:G,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:M,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],i={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(c,l)=>(r(),d(f,{lines:"two",border:"",rounded:""},{default:t(()=>[(r(),V(b,null,L(a,(n,p)=>(r(),V(b,{key:n.name},[e(m,null,{prepend:t(()=>[e(w,{image:n.avatar},null,8,["image"])]),append:t(()=>[e(T,{size:"small"},{default:t(()=>l[0]||(l[0]=[s(" Add ")])),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[s(y(n.name),1)]),_:2},1024),e(A,{class:"mt-1"},{default:t(()=>[e(E,{dot:"",location:"start center","offset-x":"2",color:i[n.status],class:"me-3"},{default:t(()=>[u("span",te,y(n.status),1)]),_:2},1032,["color"]),u("span",ae,y(n.lastVisited),1)]),_:2},1024)]),_:2},1024),p!==a.length-1?(r(),d(D,{key:0})):J("",!0)],64))),64))]),_:1}))}},se=["innerHTML"],le={__name:"DemoListThreeLine",setup(v){const a=[{type:"subheader",title:"Today"},{prependAvatar:P,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:U,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:G,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:M,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(i,c)=>(r(),d(f,{lines:"three",items:a,"item-props":""},{subtitle:t(({subtitle:l})=>[u("div",{innerHTML:l},null,8,se)]),_:1}))}},ne={__name:"DemoListTwoLinesAndSubheader",setup(v){const a=[{color:"blue",icon:"ri-clipboard-line",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"ri-hard-drive-2-line",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],i=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(c,l)=>(r(),d(f,{lines:"two"},{default:t(()=>[e(B,{inset:""},{default:t(()=>l[0]||(l[0]=[s(" Folders ")])),_:1}),(r(),V(b,null,L(i,n=>e(m,{key:n.title,title:n.title,subtitle:n.subtitle},{prepend:t(()=>[e(w,{color:"secondary",variant:"tonal"},{default:t(()=>[e(x,{size:26,icon:"ri-folder-line"})]),_:1})]),append:t(()=>[e(T,{variant:"text",color:"default",icon:"ri-information-line"})]),_:2},1032,["title","subtitle"])),64)),e(D,{inset:""}),e(B,{inset:""},{default:t(()=>l[1]||(l[1]=[s(" Files ")])),_:1}),(r(),V(b,null,L(a,n=>e(m,{key:n.title,title:n.title,subtitle:n.subtitle},{prepend:t(()=>[e(w,{color:"secondary",variant:"tonal"},{default:t(()=>[e(x,{size:26,icon:n.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(T,{variant:"text",color:"default",icon:"ri-information-line"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}},re={__name:"DemoListSubGroup",setup(v){const a=W(["Users","Admin"]),i=[["Management","ri-group-line"],["Settings","ri-settings-5-line"]],c=[["Create","ri-add-line"],["Read","ri-file-line"],["Update","ri-refresh-line"],["Delete","ri-delete-bin-line"]];return(l,n)=>(r(),d(f,{opened:K(a),"onUpdate:opened":n[0]||(n[0]=p=>Q(a)?a.value=p:null)},{default:t(()=>[e(m,{"prepend-icon":"ri-home-line",title:"Home",value:"Home"}),e(S,{value:"Users"},{activator:t(({props:p})=>[e(m,k(p,{"prepend-icon":"ri-user-line",title:"Users"}),null,16)]),default:t(()=>[e(S,{value:"Admin"},{activator:t(({props:p})=>[e(m,k(p,{title:"Admin"}),null,16)]),default:t(()=>[(r(),V(b,null,L(i,([p,_],I)=>e(m,{key:I,value:p,title:p,"prepend-icon":_},null,8,["value","title","prepend-icon"])),64))]),_:1}),e(S,{value:"Actions"},{activator:t(({props:p})=>[e(m,k(p,{title:"Actions"}),null,16)]),default:t(()=>[(r(),V(b,null,L(c,([p,_],I)=>e(m,{key:I,value:p,title:p,"prepend-icon":_},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}},oe={};function pe(v,a){return r(),d(f,{lines:"three",density:"compact","select-strategy":"classic"},{default:t(()=>[e(B,null,{default:t(()=>a[0]||(a[0]=[s("General")])),_:1}),e(m,{value:"notifications"},{prepend:t(({isActive:i})=>[e(C,{start:""},{default:t(()=>[e(j,{"model-value":i,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(h,null,{default:t(()=>a[1]||(a[1]=[s("Notifications")])),_:1}),e(A,null,{default:t(()=>a[2]||(a[2]=[s("Notify me about updates to apps or games that I downloaded")])),_:1})]),_:1}),e(m,{value:"sound"},{prepend:t(({isActive:i})=>[e(C,{start:""},{default:t(()=>[e(j,{"model-value":i,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(h,null,{default:t(()=>a[3]||(a[3]=[s("Sound")])),_:1}),e(A,null,{default:t(()=>a[4]||(a[4]=[s("Auto-update apps at any time. Data charges may apply")])),_:1})]),_:1}),e(m,{value:"widgets"},{prepend:t(({isActive:i})=>[e(C,{start:""},{default:t(()=>[e(j,{"model-value":i,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(h,null,{default:t(()=>a[5]||(a[5]=[s("Auto-add widgets")])),_:1}),e(A,null,{default:t(()=>a[6]||(a[6]=[s("Automatically add home screen widgets when downloads complete")])),_:1})]),_:1})]),_:1})}const ue=Y(oe,[["render",pe]]),me={__name:"DemoListNav",setup(v){const a=[{title:"My Files",value:1,prependIcon:"ri-folder-line"},{title:"Shared with me",value:2,prependIcon:"ri-group-line"},{title:"Starred",value:3,prependIcon:"ri-star-line"},{title:"Recent",value:4,prependIcon:"ri-history-line"},{title:"Offline",value:5,prependIcon:"ri-checkbox-circle-line"},{title:"Uploads",value:6,prependIcon:"ri-upload-line"},{title:"Backups",value:7,prependIcon:"ri-upload-cloud-line"}];return(i,c)=>(r(),d(f,{nav:"",lines:!1},{default:t(()=>[(r(),V(b,null,L(a,l=>e(m,{key:l.value,value:l.value},{prepend:t(()=>[e(x,{icon:l.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(h,null,{default:t(()=>[s(y(l.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},de={__name:"DemoListDensity",setup(v){const a=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(i,c)=>(r(),d(f,{density:"compact",items:a}))}},ce={__name:"DemoListRounded",setup(v){const a=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"ri-dribbble-line",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"ri-facebook-circle-line",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"ri-twitter-line",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"ri-instagram-line",rounded:"xl"}}];return(i,c)=>(r(),d(f,{items:a}))}},ve={__name:"DemoListBasic",setup(v){const a=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(i,c)=>(r(),d(f,{items:a}))}},ge={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},fe={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},Ve={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`},be={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'ri-folder-line' },
  { title: 'Shared with me', value: 2, prependIcon: 'ri-group-line' },
  { title: 'Starred', value: 3, prependIcon: 'ri-star-line' },
  { title: 'Recent', value: 4, prependIcon: 'ri-history-line' },
  { title: 'Offline', value: 5, prependIcon: 'ri-checkbox-circle-line' },
  { title: 'Uploads', value: 6, prependIcon: 'ri-upload-line' },
  { title: 'Backups', value: 7, prependIcon: 'ri-upload-cloud-line' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'ri-folder-line',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'ri-group-line',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'ri-star-line',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'ri-history-line',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'ri-checkbox-circle-line',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'ri-upload-line',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'ri-upload-cloud-line',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},Le={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'ri-reactjs-line',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'ri-bootstrap-line',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'ri-vuejs-line',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'ri-angularjs-line',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'ri-javascript-line',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'ri-reactjs-line',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'ri-bootstrap-line',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'ri-vuejs-line',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'ri-angularjs-line',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'ri-javascript-line',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},he={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'ri-dribbble-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'ri-facebook-circle-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'ri-twitter-line',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'ri-instagram-line',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'ri-dribbble-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'ri-facebook-circle-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'ri-twitter-line',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'ri-instagram-line',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},ye={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'ri-instagram-line' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'ri-facebook-circle-line' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'ri-twitter-line' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'ri-instagram-line',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'ri-facebook-circle-line',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'ri-twitter-line',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},_e={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'ri-group-line'],
  ['Settings', 'ri-settings-5-line'],
]

const cruds = [
  ['Create', 'ri-add-line'],
  ['Read', 'ri-file-line'],
  ['Update', 'ri-refresh-line'],
  ['Delete', 'ri-delete-bin-line'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'ri-group-line',
  ],
  [
    'Settings',
    'ri-settings-5-line',
  ],
]

const cruds = [
  [
    'Create',
    'ri-add-line',
  ],
  [
    'Read',
    'ri-file-line',
  ],
  [
    'Update',
    'ri-refresh-line',
  ],
  [
    'Delete',
    'ri-delete-bin-line',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},Ie={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},Ae={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'ri-clipboard-line',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'ri-hard-drive-2-line',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="ri-folder-line"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'ri-clipboard-line',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'ri-hard-drive-2-line',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="ri-folder-line"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},xe={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},$e={__name:"list",setup(v){return(a,i)=>{const c=ve,l=q,n=ce,p=de,_=me,I=ue,z=re,H=ne,O=le,R=ie,F=ee,N=Z;return r(),d(X,{class:"match-height"},{default:t(()=>[e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Basic","no-padding":"",code:fe},{default:t(()=>[e(o,null,{default:t(()=>i[0]||(i[0]=[u("code",null,"v-list",-1),s(" component can contain an avatar, content, actions and much more.")])),_:1}),e(o,null,{default:t(()=>[e(c)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Rounded","no-padding":"",code:he},{default:t(()=>[e(o,null,{default:t(()=>i[1]||(i[1]=[s("You can make "),u("code",null,"v-list-item",-1),s(" rounded using "),u("code",null,"rounded",-1),s(" prop.")])),_:1}),e(o,null,{default:t(()=>[e(n)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Density",code:Ve,"no-padding":""},{default:t(()=>[e(o,null,{default:t(()=>i[2]||(i[2]=[s("Use "),u("code",null,"density",-1),s(" prop to adjusts the spacing within the component. Available options are: "),u("code",null,"default",-1),s(", "),u("code",null,"comfortable",-1),s(", and "),u("code",null,"compact",-1),s(".")])),_:1}),e(o,null,{default:t(()=>[e(p)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Nav","no-padding":"",code:be},{default:t(()=>[e(o,null,{default:t(()=>i[3]||(i[3]=[s("Lists can receive an alternative "),u("code",null,"nav",-1),s(" styling that reduces the width "),u("code",null,"v-list-item",-1),s(" takes up as well as adding a border radius.")])),_:1}),e(o,null,{default:t(()=>[e(_)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Action and item group","no-padding":"",code:ge},{default:t(()=>[e(o,null,{default:t(()=>i[4]||(i[4]=[s("A "),u("code",null,"three-line",-1),s(" list with actions. Utilizing "),u("code",null,"v-list-group",-1),s(", easily connect actions to your tiles.")])),_:1}),e(o,null,{default:t(()=>[e(I)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Sub Group","no-padding":"",code:_e},{default:t(()=>[e(o,null,{default:t(()=>i[5]||(i[5]=[s(" Using the "),u("code",null,"v-list-group",-1),s(" component you can create up to 2 levels in depth using the sub-group prop. ")])),_:1}),e(o,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Two lines and subheader","no-padding":"",code:Ae},{default:t(()=>[e(o,null,{default:t(()=>i[6]||(i[6]=[s("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")])),_:1}),e(o,null,{default:t(()=>[e(H)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Three Line","no-padding":"",code:Ie},{default:t(()=>[e(o,null,{default:t(()=>i[7]||(i[7]=[s("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")])),_:1}),e(o,null,{default:t(()=>[e(O)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"User List","no-padding":"",code:xe},{default:t(()=>[e(o,null,{default:t(()=>[e(R)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Progress List","no-padding":"",code:Le},{default:t(()=>[e(o,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Shaped","no-padding":"",code:ye},{default:t(()=>[e(o,null,{default:t(()=>i[8]||(i[8]=[s(" Shaped lists have rounded borders on one side of the "),u("code",null,"v-list-item",-1),s(". ")])),_:1}),e(o,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}};export{$e as default};

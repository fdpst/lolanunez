import{m as Q,u as Z,a as ee,V as le,b as W,g as Y}from"./VSliderTrack-CjAH2d6c.js";import{m as ae,V as E}from"./VInput-wvAgDqIB.js";import{m as te,u as se,V as oe}from"./form-BJwA8ai1.js";import{aX as ne,b3 as ue,r as _,c0 as re,bg as ie,a6 as X,b9 as de,b as t,F as ce,s as me,o as S,f as h,n as k,ag as $,e as c,a0 as pe,d,v}from"./main-C1cSucNj.js";import{_ as ve}from"./AppCardCode-DshpRWUE.js";import{V as Ve,a as R}from"./VRow-DdYzItfl.js";import"./VCard-DoJ7OvEk.js";import"./VAvatar-BpNw3P6_.js";import"./VImg-D1aAeOw8.js";import"./VCardText-iOQ31nyo.js";import"./VDivider-BS9Tllbl.js";/* empty css              */const fe=ne({...te(),...ae(),...Q(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),y=ue()({name:"VRangeSlider",props:fe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,o){let{slots:l,emit:n}=o;const a=_(),i=_(),g=_(),{rtlClasses:B}=re();function M(m){if(!a.value||!i.value)return;const p=Y(m,a.value.$el,e.direction),r=Y(m,i.value.$el,e.direction),u=Math.abs(p),V=Math.abs(r);return u<V||u===V&&p<0?a.value.$el:i.value.$el}const P=Z(e),s=ie(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>P.roundValue(p)):[0,0]),{activeThumbRef:f,hasLabels:q,max:I,min:j,mousePressed:G,onSliderMousedown:H,onSliderTouchstart:J,position:z,trackContainerRef:K}=ee({props:e,steps:P,onSliderStart:()=>{n("start",s.value)},onSliderEnd:m=>{var u;let{value:p}=m;const r=f.value===((u=a.value)==null?void 0:u.$el)?[p,s.value[1]]:[s.value[0],p];!e.strict&&r[0]<r[1]&&(s.value=r),n("end",s.value)},onSliderMove:m=>{var V,x,w,b;let{value:p}=m;const[r,u]=s.value;!e.strict&&r===u&&r!==j.value&&(f.value=p>r?(V=i.value)==null?void 0:V.$el:(x=a.value)==null?void 0:x.$el,(w=f.value)==null||w.focus()),f.value===((b=a.value)==null?void 0:b.$el)?s.value=[Math.min(p,u),u]:s.value=[r,Math.max(r,p)]},getActiveThumb:M}),{isFocused:U,focus:L,blur:A}=se(e),N=X(()=>z(s.value[0])),O=X(()=>z(s.value[1]));return de(()=>{const m=E.filterProps(e),p=!!(e.label||l.label||l.prepend);return t(E,me({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||q.value,"v-slider--focused":U.value,"v-slider--pressed":G.value,"v-slider--disabled":e.disabled},B.value,e.class],style:e.style,ref:g},m,{focused:U.value}),{...l,prepend:p?r=>{var u,V;return t(ce,null,[((u=l.label)==null?void 0:u.call(l,r))??(e.label?t(oe,{class:"v-slider__label",text:e.label},null):void 0),(V=l.prepend)==null?void 0:V.call(l,r)])}:void 0,default:r=>{var x,w;let{id:u,messagesId:V}=r;return t("div",{class:"v-slider__container",onMousedown:H,onTouchstartPassive:J},[t("input",{id:`${u.value}_start`,name:e.name||u.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value[0]},null),t("input",{id:`${u.value}_stop`,name:e.name||u.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value[1]},null),t(le,{ref:K,start:N.value,stop:O.value},{"tick-label":l["tick-label"]}),t(W,{ref:a,"aria-describedby":V.value,focused:U&&f.value===((x=a.value)==null?void 0:x.$el),modelValue:s.value[0],"onUpdate:modelValue":b=>s.value=[b,s.value[1]],onFocus:b=>{var D,T,F,C;L(),f.value=(D=a.value)==null?void 0:D.$el,s.value[0]===s.value[1]&&s.value[1]===j.value&&b.relatedTarget!==((T=i.value)==null?void 0:T.$el)&&((F=a.value)==null||F.$el.blur(),(C=i.value)==null||C.$el.focus())},onBlur:()=>{A(),f.value=void 0},min:j.value,max:s.value[1],position:N.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]}),t(W,{ref:i,"aria-describedby":V.value,focused:U&&f.value===((w=i.value)==null?void 0:w.$el),modelValue:s.value[1],"onUpdate:modelValue":b=>s.value=[s.value[0],b],onFocus:b=>{var D,T,F,C;L(),f.value=(D=i.value)==null?void 0:D.$el,s.value[0]===s.value[1]&&s.value[0]===I.value&&b.relatedTarget!==((T=a.value)==null?void 0:T.$el)&&((F=i.value)==null||F.$el.blur(),(C=a.value)==null||C.$el.focus())},onBlur:()=>{A(),f.value=void 0},min:s.value[0],max:I.value,position:O.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})}),{}}}),be={__name:"DemoRangeSliderVertical",setup(e){const o=_([20,40]);return(l,n)=>(S(),h(y,{modelValue:k(o),"onUpdate:modelValue":n[0]||(n[0]=a=>$(o)?o.value=a:null),direction:"vertical"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderThumbLabel",setup(e){const o=["Winter","Spring","Summer","Fall"],l=["ri-snowy-line","ri-leaf-line","ri-fire-line","ri-drop-line"],n=_([1,2]);return(a,i)=>(S(),h(y,{modelValue:k(n),"onUpdate:modelValue":i[0]||(i[0]=g=>$(n)?n.value=g:null),tick:o,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":c(({modelValue:g})=>[t(pe,{icon:l[g]},null,8,["icon"])]),_:1},8,["modelValue"]))}},ge={__name:"DemoRangeSliderStep",setup(e){const o=_([20,40]);return(l,n)=>(S(),h(y,{modelValue:k(o),"onUpdate:modelValue":n[0]||(n[0]=a=>$(o)?o.value=a:null),step:"10"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderColor",setup(e){const o=_([10,60]);return(l,n)=>(S(),h(y,{modelValue:k(o),"onUpdate:modelValue":n[0]||(n[0]=a=>$(o)?o.value=a:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderDisabled",setup(e){const o=_([30,60]);return(l,n)=>(S(),h(y,{modelValue:k(o),"onUpdate:modelValue":n[0]||(n[0]=a=>$(o)?o.value=a:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderBasic",setup(e){const o=_([10,60]);return(l,n)=>(S(),h(y,{modelValue:k(o),"onUpdate:modelValue":n[0]||(n[0]=a=>$(o)?o.value=a:null)},null,8,["modelValue"]))}},ke={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},$e={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['ri-snowy-line', 'ri-leaf-line', 'ri-fire-line', 'ri-drop-line']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'ri-snowy-line',
  'ri-leaf-line',
  'ri-fire-line',
  'ri-drop-line',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},De={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Ne={__name:"range-slider",setup(e){return(o,l)=>{const n=Re,a=ve,i=he,g=Se,B=ge,M=_e,P=be;return S(),h(Ve,null,{default:c(()=>[t(R,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Basic",code:ke},{default:c(()=>[l[0]||(l[0]=d("p",null,[v("The "),d("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1)),t(n)]),_:1},8,["code"])]),_:1}),t(R,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Disabled",code:ye},{default:c(()=>[l[1]||(l[1]=d("p",null,[v("You cannot interact with "),d("code",null,"disabled"),v(" sliders.")],-1)),t(i)]),_:1},8,["code"])]),_:1}),t(R,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Color",code:$e},{default:c(()=>[l[2]||(l[2]=d("p",null,[v("Use "),d("code",null,"color"),v(" prop to the sets the slider color. "),d("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1)),t(g)]),_:1},8,["code"])]),_:1}),t(R,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Step",code:xe},{default:c(()=>[l[3]||(l[3]=d("p",null,[d("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),t(B)]),_:1},8,["code"])]),_:1}),t(R,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Thumb label",code:we},{default:c(()=>[l[4]||(l[4]=d("p",null,[v(" Using the "),d("code",null,"tick-labels"),v(" prop along with the "),d("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1)),t(M)]),_:1},8,["code"])]),_:1}),t(R,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Vertical",code:De},{default:c(()=>[l[5]||(l[5]=d("p",null,[v("You can use the "),d("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),t(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ne as default};

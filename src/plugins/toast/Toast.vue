<template>
  <h1>{{msg}}</h1>
</template>

<script>
  /*  import {
    ref,
    computed,
    onMounted,
    onUnmounted
  } from 'vue'

  export default {
    name: "Toast",

    props: {
      msg: {
        type: String,
        required: true
      },
      color: {
        type: String
      },
    },

    setup(props) {
      let innerTimeout = ref();


      onMounted(() => {
        toClearTimeout()
      });


      onUnmounted(() => {
        toClearTimeout()
      })


      const closeHandle = () => {
        if (props.clickToClose)
          props.close();
      }


      const toClearTimeout = () => {
        if (innerTimeout.value) {
          try {
            clearTimeout(innerTimeout.value);
          } catch (e) {
            console.error(e);
          }
        }
      }

      return {
        closeHandle
      };
    },
  }*/
</script>
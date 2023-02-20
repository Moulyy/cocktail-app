<template>
  <button @click="onClick" class="rounded-xl shadow-btn-box-shadow px-6 py-2 bg-gradient-btn text-white">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
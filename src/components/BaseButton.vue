<template>
  <button
    class="btn"
    :class="'btn-' + buttonType"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BaseButton',
  props: {
    buttonType: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped></style>

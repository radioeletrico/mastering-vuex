<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped></style>

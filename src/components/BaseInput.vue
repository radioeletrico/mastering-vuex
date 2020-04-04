<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input type="text" :placeholder="placeholder" @input="updateValue" class="form-control" v-bind="$attrs"/>
    </div>
</template>

<script>
    export default {
        inheritAttrs:false,
        name: "BaseInput",
        props: {
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            }
        },
        methods:{
            updateValue(event){
                this.$emit('input',event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>
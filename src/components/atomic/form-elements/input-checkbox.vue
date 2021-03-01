<template>
    <div class="d-flex flex-row align-items-center justify-content-start">
        <input :id="'checkbox-' + name"
               class="primary-checkbox"
               :name="name"
               type="checkbox"
               v-model="model"
               @input="$emit('isChecked',$event.target.checked)"
               @change="$emit('changeEvent')">
        <label :for="'checkbox-' + name" class="primary-checkbox-label">{{label}}</label>
    </div>
</template>
<script>
    export default {
        name: 'inputCheckbox',
        props: ['label','model','name'],
    }
</script>
<style lang="scss"></style>

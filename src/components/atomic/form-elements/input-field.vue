<template>
    <div class="d-flex flex-column align-items-start justify-content-start">
        <h6 class="input-label" :class="{'not-valid':haveError}">{{label}}</h6>
        <input class="primary-input"
               :class="[classList,{'not-valid':haveError}]"
               type="text"
               placeholder="PlaceHolder"
               v-model="model"
               @change="$emit('valueChange', $event.target.value)">
    </div>
</template>
<script>
    export default {
        name: 'inputField',
        props: ['classList', 'label', 'haveError','model'],
    }
</script>
<style></style>

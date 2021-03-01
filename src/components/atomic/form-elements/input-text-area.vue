<template>
        <div class="d-flex flex-column align-items-start justify-content-start">
            <h6 class="input-label" :class="{'not-valid':haveError}">{{label}}</h6>
            <textarea class="primary-input"
                      :rows="rows"
                      :class="[classList,{'not-valid':haveError}]"
                      type="text"
                      placeholder="PlaceHolder"
                      v-model="model"
                      @input="$emit('valueChange', $event.target.value)">
            </textarea>
        </div>
</template>
<script>
    export default {
        name: 'inputTextArea',
        props: ['classList', 'label', 'haveError', 'rows','model'],
    }
</script>
<style></style>

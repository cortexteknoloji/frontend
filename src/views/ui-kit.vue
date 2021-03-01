<template>
    <section>
        <div class="container-fluid">
            <h3>Inputs</h3>
            <hr>
            <input-field class="mb-3" label="Valid Input"></input-field>
            <input-field classList="not-valid" label="Not Valid Input"></input-field>
            <hr>
            <h3>Input Groups</h3>
            <div class="d-flex">
                <input-field class="mr-3 w-100" label="Ad"></input-field>
                <input-field class="mr-3 w-100" label="Soyadı" :haveError="true"></input-field>
                <input-field class="mr-3 w-100" label="E-Posta Adresi"></input-field>
            </div>
            <hr>
            <h3>Text Area</h3>
            <input-text-area label="Text Area Label" rows="6"></input-text-area>
            <hr>
            <h3>Checkbox</h3>
            <input-checkbox></input-checkbox>
            <input-checkbox></input-checkbox>
        </div>
    </section>
</template>
<script>
    import InputField from '../components/atomic/form-elements/input-field.vue';
    import InputTextArea from '../components/atomic/form-elements/input-text-area.vue';
    import InputCheckbox from '../components/atomic/form-elements/input-checkbox.vue';

    export default {
        name: 'uiKit',
        components: {InputField, InputTextArea, InputCheckbox}
    }
</script>
<style lang="scss" scoped></style>

<template>
    <q-layout view="hHh LpR fFf">
        <q-header class="bg-primary text-white" height-hint="98">
            <Toolbar/>
        </q-header>

        <q-page-container>
            <RegisterUserForm/>
        </q-page-container>

        <q-footer elevated class="bg-grey-8 text-white">
        </q-footer>
    </q-layout>
</template>

<script>
    import RegisterUserForm from "../components/RegisterUserForm";
    import Toolbar from "../components/Toolbar";

    export default {
        components: {RegisterUserForm, Toolbar},
    }

</script>

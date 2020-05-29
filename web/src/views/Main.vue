<template>
    <div>
        <q-layout view="hHh LpR fFf">
            <q-header elevated class="bg-primary text-white" height-hint="98">
                <Toolbar/>
            </q-header>

            <q-page-container>

            </q-page-container>

            <q-footer elevated class="bg-grey-8 text-white">
                <!--<q-toolbar/>-->
            </q-footer>
        </q-layout>
    </div>
</template>

<script>
    import Toolbar from "../components/Toolbar";

    export default {
        components: {Toolbar}
    }
</script>

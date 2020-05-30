<template>
    <div>
        <q-layout view="hHh LpR fFf">
            <q-header elevated class="bg-primary text-white" height-hint="98">
                <Toolbar/>
            </q-header>
            <q-page-container class="column items-center">
                <q-list class="q-mt-sm" bordered separator>
                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label caption>ID</q-item-label>
                            <q-item-label>{{user.id}}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label caption>Username</q-item-label>
                            <q-item-label>{{user.username}}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label caption>First Name</q-item-label>
                            <q-item-label>{{user.firstName}}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label caption>Last Name</q-item-label>
                            <q-item-label>{{user.lastName}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
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
        components: {Toolbar},

        data() {
            return {
                interval: null,
                user: {
                    id: '',
                    username: '',
                    firstName: '',
                    lastName: '',
                }
            }
        },
        created() {
            this.interval = setInterval(() => {
                const {_id, username, firstName, lastName} = this.$store.getters.user;

                if (_id !== this.user.id)
                    this.user.id = _id;

                if (username !== this.user.username)
                    this.user.username = username;

                if (username !== this.user.firstName)
                    this.user.firstName = firstName;

                if (username !== this.user.lastName)
                    this.user.lastName = lastName;

            }, 1000);
        },
        destroyed() {
            clearInterval(this.interval);
        },
    }
</script>

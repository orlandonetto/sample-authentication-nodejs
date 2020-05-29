<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    const authService = require('./services/AuthService');

    export default {
        components: {},
        data() {
            return {
                interval: null
            }
        },
        mounted() {
            setInterval(this.checkLogged, 5000);
        },
        methods: {
            checkLogged() {
                const isLogged = this.$store.getters.isLogged;

                if (isLogged && this.interval == null)
                    return this.start();

                if (!isLogged && this.interval != null)
                    return this.stop();
            },
            start() {
                this.isLogged = true;
                this.interval = setInterval(this.update, 5000);
            },
            stop() {
                this.isLogged = false;
                clearInterval(this.interval);
            },
            update() {
                authService.loadSession()
                    .then(({token, user}) => this.$store.dispatch('loadSession', {token, user}))
                    .catch(err => console.log(err));
            }
        }
    }
</script>

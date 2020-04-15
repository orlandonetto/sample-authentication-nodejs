<template>
  <v-content dark>
    <v-container fill-height fluid dark>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-tabs v-model="tab" grow dark>
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">Entrar</v-tab>

              <v-tab href="#tab-2">Criar Conta</v-tab>
            </v-tabs>

            <!--login-->
            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <v-card-title class="justify-center">Acesse sua conta</v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Email" type="text" prepend-icon="mdi-email" />

                    <v-text-field label="Senha" type="password" prepend-icon="mdi-lock" />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" @click="login()">Entrar</v-btn>
                </v-card-actions>
              </v-tab-item>

              <!--register-->
              <v-tab-item value="tab-2">
                <v-card-title class="justify-center">Registre-se</v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Nome" type="text" prepend-icon="mdi-account" />

                    <v-text-field label="Sobrenome" type="text" prepend-icon="mdi-account" />

                    <v-text-field label="Email" type="text" prepend-icon="mdi-email" />

                    <v-text-field label="Senha" type="password" prepend-icon="mdi-lock" />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" @click="register()">Criar Conta</v-btn>
                </v-card-actions>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tab: "tab-1",
      formLogin: {
        username: "",
        password: ""
      },
      formRegister: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login() {},

    register() {}
  }
};
</script>

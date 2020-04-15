<template>
  <v-content dark>
    <v-container fill-height fluid dark>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card flat width="100%" class="mb-3">
            <v-row no-gutters class="title pa-3" justify="space-between">
              <span>Chat</span>

              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-row>
            <v-divider class="mx-3" />

            <v-row no-gutters>
              <v-col cols="9">
                <v-list height="300px" class="overflow-y-auto px-3">
                  <v-row
                    v-for="(msg, index) in messageList"
                    :key="index"
                    no-gutters
                    :justify="msg.id == '0'? 'start' : 'end'"
                    class="mb-1"
                  >
                    <div v-if="msg.id == '0'">
                      <v-chip label color="grey darken-3">
                        <span>{{msg.message}}</span>
                      </v-chip>
                    </div>

                    <div v-else align="right">
                      <v-chip label color="primary">
                        <span>{{msg.message}}</span>
                      </v-chip>
                    </div>
                  </v-row>
                </v-list>

                <v-row no-gutters align="center" class="pa-3">
                  <v-text-field
                    v-model="form.message"
                    outlined
                    hide-details
                    class="mr-3"
                    label="Digite uma mensagem"
                  />
                  <v-btn fab dark depressed small color="primary" @click="sendMessage()">
                    <v-icon>mdi-send</v-icon>
                  </v-btn>
                </v-row>
              </v-col>

              <v-col cols="3" class="elevation-3">
                <v-list dense height="380px" class="overflow-y-auto px-3">
                  <v-list-item v-for="user in 20" :key="user">user</v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      attendant: "Geovana",
      messageList: [{ id: "0", author: "Geovana", message: "Bom dia!" }],
      form: {
        id: "1",
        author: "Roberto",
        message: ""
      }
    };
  },

  methods: {
    sendMessage() {
      if (this.form.message != "") {
        this.messageList.push(this.form);
      }
    }
  }
};
</script>

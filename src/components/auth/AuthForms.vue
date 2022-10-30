<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field single-line  variant="outlined" hide-details v-model="login"
                        :rules="nameRules" :counter="10" label="Логин" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field single-line  variant="outlined" hide-details v-model="password"
                        :rules="passwordRules" :counter="10" label="Пароль" required>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'auth-forms',
    data: () => ({
        valid: false,
        login: '',
        password: '',
        nameRules: [
            (v: string) => !!v || 'Name is required',
            (v: string) => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        passwordRules: [
            (v: string) => !!v || 'E-mail is required',
            (v: string) => v.length <= 10 || 'E-mail must be valid',
        ],
    }),
    components: {
    }
});
</script>
  
<style lang="scss">

</style>
  
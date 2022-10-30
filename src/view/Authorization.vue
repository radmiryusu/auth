<template>
    <div class="d-flex justify-center align-center w-screen h-screen">
        <v-card border="5" color="none" width="500" class="bg-cyan-600">
            <v-card-title>Авторизация</v-card-title>
            <v-card-text class="px-2 pb-0">
                <auth-forms />
            </v-card-text>
            <v-card-actions class="flex justify-center px-6 mb-3">
                <v-btn variant="outlined" block class="w-full" color="primary">
                    Войти
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
  
<script lang="ts">
import AuthForms from '@/components/auth/AuthForms.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Authorization-component',
    components: {
        AuthForms
    }
});
</script>
  
<style lang="scss">

</style>
  
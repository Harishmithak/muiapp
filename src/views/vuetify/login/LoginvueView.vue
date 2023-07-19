<template>
    <v-form v-model="valid" id="vuetify">
        <h1 id="login">LOGIN</h1>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
                        required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name"
                        required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field label="Password" type="input"
                        hint="Enter your password to access this website"></v-text-field>
                    <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const valid = ref(false);
        const firstname = ref('');
        const lastname = ref('');

        const nameRules = [
            value => {
                if (value) return true;
                return 'Name is required.';
            },
            value => {
                if (value?.length <= 10) return true;
                return 'Name must be less than 10 characters.';
            },
        ];

        const email = ref('');

        const emailRules = [
            value => {
                if (value) return true;
                return 'E-mail is required.';
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true;
                return 'E-mail must be valid.';
            },
        ];

        return {
            valid,
            firstname,
            lastname,
            nameRules,
            email,
            emailRules,
        };
    },
};
</script>

<style>
#vuetify {
    width: 500px;
    margin-left: 500px;
    margin-top: 80px;
}

#login {
    margin-left: 180px;
}
</style>
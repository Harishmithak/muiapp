<template>
    <div class="register">
        <form class="needs-validation" novalidate @submit.prevent="checkForm">
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <MDBRow class="mb-4">
                <MDBCol>
                    <MDBInput type="text" label="First name" id="form3FirstName" v-model="form3FirstName" required />
                </MDBCol>
                <MDBCol>
                    <MDBInput type="text" label="Last name" id="form3LastName" v-model="form3LastName" required />
                </MDBCol>

            </MDBRow>
            <!-- Email input -->
            <MDBInput type="email" label="Email address" id="form3Email" v-model="form3Email" wrapperClass="mb-4"
                required />
            <!-- Password input -->
            <MDBInput type="password" label="Password" id="form3Password" v-model="form3Password" wrapperClass="mb-4"
                required />
            <MDBInput type="password" label="confirm Password" id="form3conPassword" v-model="form3conPassword"
                wrapperClass="mb-4" required />
            <MDBCol>
                <MDBRadio label="male" value="option1" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBRadio label="female" value="option2" v-model="radio2" inline name="inlineRadioOptions" />
            </MDBCol>

            <!-- Checkbox -->


            <!-- Submit button -->
            <MDBBtn color="primary" block class="mb-4" type="submit"> Sign up </MDBBtn>


        </form>
    </div>
</template>

<script>
import {
    MDBRow,
    MDBCol,
    MDBInput,

    MDBBtn,
    MDBRadio,

} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
    components: {
        MDBRow,
        MDBCol,
        MDBInput,
        MDBRadio,
        MDBBtn,

    },
    setup() {
        const checkForm = (event) => {
            event.target.classList.add('was-validated');
        };
        const form3FirstName = ref("");
        const form3LastName = ref("");
        const form3Email = ref("");
        const form3Password = ref("");
        const form3conPassword = ref("");
        const radio2 = ref('radio2');
        const form3SubscribeCheck = ref(true);

        return {
            form3FirstName,
            form3LastName,
            form3Email,
            form3Password,
            form3conPassword,
            form3SubscribeCheck,
            radio2,
            checkForm,
        };
    },
};
</script>

<style>
.register {
    width: 500px;
    margin-left: 500px;
    margin-top: 100px;
}
</style>
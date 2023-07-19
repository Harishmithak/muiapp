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
                <MDBRadio label="male" value="male" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBRadio label="female" value="female" v-model="radio2" inline name="inlineRadioOptions" />
            </MDBCol>

            <!-- Checkbox -->


            <!-- Submit button -->
            <MDBBtn color="primary" block class="mb-4" type="submit"> Sign up </MDBBtn>


        </form>
    </div>
</template>

<script>
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBRadio } from "mdb-vue-ui-kit";
import axios from "axios";
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
    const form3FirstName = ref("");
    const form3LastName = ref("");
    const form3Email = ref("");
    const form3Password = ref("");
    const form3conPassword = ref("");
    const radio2 = ref(""); 

    const checkForm = (event) => {
      event.target.classList.add("was-validated");
      if (event.target.checkValidity()) {
        saveFormDataToServer();
      }
    };

    const saveFormDataToServer = () => {
      const formData = {
        firstName: form3FirstName.value,
        lastName: form3LastName.value,
        email: form3Email.value,
        password: form3Password.value,
        gender: radio2.value,
      };

      axios
        .post("http://localhost:3000/register", formData)
        .then(() => {
          console.log("Form data sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending form data:", error);
        });
    };

    return {
      form3FirstName,
      form3LastName,
      form3Email,
      form3Password,
      form3conPassword,
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


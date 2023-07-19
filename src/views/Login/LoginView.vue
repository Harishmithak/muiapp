<template>
    <div class="logged">
    <form>
      <!-- Email input -->
      <MDBInput
        type="email"
        label="Email address"
        id="form2Email"
        v-model="form2Email"
        wrapperClass="mb-4"
      />
      <!-- Password input -->
      <MDBInput
        type="password"
        label="Password"
        id="form2Password"
        v-model="form2Password"
        wrapperClass="mb-4"
      />
      <!-- 2 column grid layout for inline styling -->
      <MDBRow class="mb-4">
        <MDBCol class="d-flex justify-content-center">
          <!-- Checkbox -->
          
        </MDBCol>
        <router-link to="/register">  <MDBCol>
          <!-- Simple link -->
       <a href="#!"> Didnt register?</a>
        </MDBCol></router-link> 
      </MDBRow>
      <!-- Submit button -->
      <MDBBtn color="primary" block> Sign in </MDBBtn>
  
      <!-- Register buttons -->
   
    </form>
</div>
  </template>

<script>
import {
  MDBRow,
  MDBCol,
  MDBInput,

  MDBBtn,

} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,

  },
  setup() {
    const form2Email = ref("");
    const form2Password = ref("");
    const form2LoginCheck = ref(true);

    return {
      form2Email,
      form2Password,
      form2LoginCheck,
    };
  },
};
</script>
<style>
.logged{
    width:500px;
    margin-left: 500px;
    margin-top: 100px;
}
</style>
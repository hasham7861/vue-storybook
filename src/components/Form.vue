<template>
  <div id="billing-form-container">
    <h1>Billing Form</h1> 
    <SimpleForm v-if="formStep === 1" :form="form.simple"/>
    <CreditCardForm v-if="formStep === 2" :form="form.creditCard"/>
    <button v-on:click="onContinue" v-if="formStep !==3">Continue</button>
    <button v-on:click="onSubmit" v-if="formStep === 3">Submit</button>
  </div>
</template>

<script>
import CreditCardForm from './forms/CreditCardForm.vue';
import SimpleForm from './forms/SimpleForm.vue';

const FORM_STATE = {
  Simple : 1,
  CreditCard: 2,
}

export default {
  name: 'Form',
  components: {
    SimpleForm,
    CreditCardForm,
  },
  data: () => {
    return {
      formStep: FORM_STATE.Simple,
      form: {
        simple: {
          name: "",
          phone: "",
        },
        creditCard: {
          number: "",
          expiry: "",
          cvc: "",
        }
      }
    }
  },
  methods: {
    onContinue(){
      if(this.formStep !== 3){
        this.formStep++;
      }
    },
    onSubmit(){
      alert('Saving Billing information...');
      this.formStep = FORM_STATE.Simple
    }
  }
}
</script>

<style scoped>
  #billing-form-container{
    margin-left:50px;
    margin-top:20px;
  }

</style>
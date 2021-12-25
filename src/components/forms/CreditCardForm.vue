<template>
<div>
    <h4>CreditCard info</h4>
    <label for="number">number</label>
    <input type="text" v-model="form.number" name="number" id="number" placeholder="xxxx xxxx xxxx xxxx">
    <label for="expiry">expiry</label>
    <input type="text" v-model="form.expiry" name="expiry" id="expiry" placeholder="MM/YY">
    <label for="cvc">cvc</label>
    <input type="text" v-model="form.cvc" name="cvc" id="number" placeholder="cvc">     
</div>

</template>

<script>
export default {
    name: 'CreditCardForm',
    props: {
        form :{
            type: Object,
            required: true,
        }
    }
}
</script>
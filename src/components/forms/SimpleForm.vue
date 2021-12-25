<template>
    <div>
        <h4>Simple info</h4>
        <label for="name">Name</label>
        <input type="text" v-model="form.name" name="name" id="name" placeholder="john doe">
        <label for="phone">phone</label>
        <input type="text" v-model="form.phone" name="phone" id="phone" placeholder="1 222 3333">
    </div>
</template>

<script>
export default {
    name:"SimpleForm",
    props: {
        form :{
            type: Object,
            required: true,
        }
    }
}
</script>
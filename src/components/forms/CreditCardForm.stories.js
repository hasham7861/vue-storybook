import CreditCardForm from './CreditCardForm.vue';

export default {
  title: 'CreditCardForm',
  component: CreditCardForm,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CreditCardForm },
    template: `
        <CreditCardForm :form=$props.form />
    `
  });

export const Primary = Template.bind({});

Primary.args = {
    form: {
        number: "",
        expiry: "",
        cvc: "",
    }
};

import SimpleForm from './SimpleForm.vue'; 

export default {
  title: 'SimpleForm',
  component: SimpleForm,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SimpleForm },
    template: `
        <SimpleForm :form=$props.form />
    `
  });

export const Primary = Template.bind({});

Primary.args = {
    form: {
       name: "",
       phone: "",
    }
};

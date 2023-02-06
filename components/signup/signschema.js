import * as yup from "yup";

const signUp_schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    name: yup.string().required(),
    country: yup.string().required(),
    marketing_email: yup.boolean().required()
  });
  export {signUp_schema}
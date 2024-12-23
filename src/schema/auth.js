import * as Yup from "yup";

export const login_schema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  
  password: Yup.string()
    .required('Password is required')
    .min(6, "Password must be at least 6 characters")
});

export const forgot_password = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

export const signup_schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  
  password: Yup.string()
    .required('Password is required')
    .min(6, "Password must be at least 6 characters"),

  confirm_password: Yup.string().required()
});

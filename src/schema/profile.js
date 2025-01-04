import * as Yup from "yup";

export const profile_schema = Yup.object().shape({
    name: Yup.string().required("Please enter your full name"),
    phone: Yup.string().required("Please enter a valid phone number"),
    about: Yup.string(),

    state: Yup.string().required("Please select your state"),
    street: Yup.string().required("Please enter street information"),
    city: Yup.string().required(),
    zipcode: Yup.number().required(),
})
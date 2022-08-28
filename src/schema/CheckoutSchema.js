import * as yup from "yup";

const CheckoutSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().min(8).required(),
    address: yup.string().required(),
    zipCode: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().min(4).required(),
    payment: yup.string().required()
})


export default CheckoutSchema;
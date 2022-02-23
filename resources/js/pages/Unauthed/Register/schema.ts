import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email must be in valid format.')
        .required('Email is a required field!'),
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters long.')
        .max(50, 'Name must be less than 50 characters long.')
        .required('Name is a required field!'),
    password: Yup.string().required('Password is a required field!'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
        .required('Password confirmation is a required field!'),
});

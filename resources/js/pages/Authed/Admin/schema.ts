import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    hotelName: Yup.string().required('Hotel name is a required field!'),
    pricePerNight: Yup.number()
        .typeError('Price per night must be a number!')
        .required('Price per night is a required field!'),
    rating: Yup.number()
        .typeError('Rating must be a number!')
        .required('Rating is a required field!'),
    country: Yup.string().required('Country is a required field!'),
    continent: Yup.string().required('Continent is a required field!'),
    city: Yup.string(),
    location: Yup.string().required('Location is a required field!'),
    category: Yup.string().required('Category is a required field!'),
    temperature: Yup.string().required('Temperature is a required field!'),
});

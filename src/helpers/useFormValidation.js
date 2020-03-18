import { useState, useEffect } from 'react';

// hook to validate all forms
const useFormValidation = (initialState, validate, runOnSubmit) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState([]);
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                setTouched([]);
                runOnSubmit();
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    useEffect(() => {
        const validationErrors = validate(values);
        const touchedErrors = Object.keys(validationErrors)
            .filter(key => touched.includes(key))
            .reduce((acc, key) => {
                if (!acc[key]) {
                    acc[key] = validationErrors[key]
                }
                return acc
            }, {});
        setErrors(touchedErrors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touched, values]);

    // handle change is run every time an input changes
    const handleChange = (event) => {
        event.preventDefault();

        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    // handle blur is run when a form is tapped or
    const handleBlur = (event) => {
        if (!touched.includes(event.target.name)) {
            setTouched([
                ...touched,
                event.target.name
            ])
        }
    };

    // function for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    };

    // return values from hook to be used in react form component
    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    };
};

export default useFormValidation;
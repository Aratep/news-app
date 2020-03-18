function rand() {
    return Math.random().toString(36).substr(2);
}

export function token() {
    return rand() + rand() + rand(); // to make it longer
}


export const validateExample = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    // if (!values.name) {
    //     errors.name = "Username is required";
    // }
    // if (!values.email) {
    //     errors.email = "Password is required";
    // }

    return errors;
};


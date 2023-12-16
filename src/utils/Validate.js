export const checkValidateData = (email, password) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) {
        return "Invalid email address";
    } else if (!isPasswordValid) {
        return "Invalid password. It must be at least 8 characters long and contain at least one letter and one digit.";
    }

    return null;
};

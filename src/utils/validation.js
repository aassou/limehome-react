import validator from 'validator';

export const validatePhoneNumber = (number) => {
    return number && validator.isMobilePhone(number)
}

export const validateEmail = (email) => {
    return email && validator.isEmail(email)
}

export const validatePostalCode = (postalCode) => {
    return postalCode && validator.isPostalCode(postalCode, 'DE')
}

export const validateGuestNumber = (guestNumber) => {
    return guestNumber > 0 && validator.isNumeric(guestNumber)
}
export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/
 
    return regex.test(password)
}
 
export const validatePasswordMessage = 'The password need to have min 6 and max 12 characters with no spaces'
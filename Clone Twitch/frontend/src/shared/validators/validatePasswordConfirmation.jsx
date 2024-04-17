export const validatePasswordConfirm = (pass, confPass) => {
    return pass === confPass
}
 
export const validatePasswordConfirmMessage = 'The password doesnt match'
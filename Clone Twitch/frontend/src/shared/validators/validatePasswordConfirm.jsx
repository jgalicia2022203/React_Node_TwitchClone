export const validatePasswordConfirm = (pass, confPass) => {
    return pass === confPass
}
 
export const validatePasswordConfirmMessage = 'The passwords doesnt match'
import { useState } from "react"
import { Logo } from './Logo'
import { Input } from './Input'
import { emailValidationMessage, validatePasswordMessage, validateEmail, validatePassword, validateUsername, validateUsernameMessage } from "../shared/validators"
import { useRegister } from "../shared/hooks/useRegister"
export const Register = () => {
  const {register, isLoading} = useRegister()

  const[formState, setFormState] = useState({
    email:{
      value:'',
      isValid: false,
      showError: false
    },
    password:{
      value:'',
      isValid: false,
      showError: false
    },
    username:{
      value:'',
      isValid: false,
      showError: false
    }
  })

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
        ...prevState,
        [field]: {
            ...prevState[field],
            value
        }
    }))
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false
    switch(field){
        case 'email': 
            isValid = validateEmail(value)
            break;

        case 'password': 
            isValid = validatePassword(value)
            break;
        case 'username':
            isValid = validateUsername(value)
          break;
        default:
            break;
    }
    setFormState((prevState) =>({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
}

const handleRegister = (event) => {
  event.preventDefault()

  register(formState.email.value, formState.password.value, formState.username.value)
}
const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid || !formState.username.isValid
return (
  <div className="login-container">
      <Logo text={'Login Kinal Cast'}/>
      <form className="auth-form">
          <Input
              field='email'
              label='Email'
              value={formState.email.value}
              onChangeHandler={handleInputValueChange}
              type='text'
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.email.showError}
              validationMessage={emailValidationMessage}
          />  
          <Input
              field='password'
              label='Password'
              value={formState.password.value}
              onChangeHandler={handleInputValueChange}
              type='password'
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.password.showError}
              validationMessage={validatePasswordMessage}
          />  
          <Input
              field='password'
              label='Password'
              value={formState.username.value}
              onChangeHandler={handleInputValueChange}
              type='text'
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.username.showError}
              validationMessage={validateUsernameMessage}
          />  
          <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
              Register
          </button>  
      </form>
  </div>
)
}

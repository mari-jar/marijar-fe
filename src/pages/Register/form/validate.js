export default function validate(values) {
  const { email, name, confirmPassword, phoneNumber, password } = values;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return {
    email: !email
      ? "Please enter your email!"
      : !validateEmail(email) && "Your email is not a valid email",
    name: !name && "Please enter your name!",
    password: !password && "Please enter your password!",
    confirmPassword: !confirmPassword
      ? "Please enter your password confirmation!"
      : confirmPassword !== password && "Confirmation password is not same",
    phoneNumber: !phoneNumber && "Please enter your phone number!",
  };
}

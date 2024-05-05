const statusMessages = {
  500: 'Something went wrong, please try again',
  status: 'Email or password incorrect',
  default: 'Email or password incorrect',
  EMPTY_FIELD: 'Rellena todos los campos',
  BAG_EMAIL_FORMAT: 'El formato del email es inválido',
}

const ErrorFormMessage = ({ status }) => {
  if (!status || status < 300) return null;
  return (
    <p className="text-error text-center mb-4 font-bold">
      {
        statusMessages[status] || statusMessages.default
      }
    </p>
  )
}

export default ErrorFormMessage;

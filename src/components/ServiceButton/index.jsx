const ServiceButton = ({service})=> {
  const services = {
    google: {
      text: 'Continue with Google',
      icon: 'fab fa-google',
      color: 'bg-google',
    },
    default: this.google,
  }; 
  return (
    <button className="btn btn-block">
      {services[service]}
    </button>
  );
}
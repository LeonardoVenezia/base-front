import { useState } from "react";

const Modal = ({ modalRef, callback }) => {
  // const [ formData, setFormData ] = useState({
  //   email: '',
  //   password: '',
  // });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const bodyPost = {
    "name": "fake user",
    "email": "fakeuser@example.com",
    "password": "password1"
  }

  const submit = (e)=> {
    e.preventDefault();
    console.log(JSON.stringify({email, password}))
    // fetch('http://localhost:8000/auth/sign-up', {
    fetch('http://localhost:3000/v1/auth/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyPost),
      // body: JSON.stringify({user: 'leo', email, password}),
    })
      .then((res)=> res.json)
      .then((res)=> res)
      .then(response => console.log(response))
  }
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Pop in your email to get started</p>
        <div className="pb-3">
          <form className="modal-action justify-center align-center">
            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})} /> */}
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button className="btn bg-primary" onClick={submit}>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal;

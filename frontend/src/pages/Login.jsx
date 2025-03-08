import { useState } from "react"

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className="min-h-[80vh] flex items-center">
      <div>
        <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Login"} to book an appointment</p>
        <div>
          <p>Full name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>
        <div>
          <p>Email</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>
        <div>
          <p>Pass word</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>
      </div>
    </form>
  )
}

export default Login
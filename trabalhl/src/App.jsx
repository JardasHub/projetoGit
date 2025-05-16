import axios from 'axios'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const logar = async () => {
    try {
      const res = await axios.post('http://localhost:3000/login', {
        email,
        senha,
      })
      localStorage.setItem('token', res.data.token)
      alert('Login realizado!')
    } catch (err) {
      alert('Erro no login')
    }
  }

  return (
    <div>
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
      <button onClick={logar}>Entrar</button>
    </div>
  )
}

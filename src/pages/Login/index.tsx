import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.scss'
import type { FormEventHandler } from "react";

const Login = () => {
  const navigate = useNavigate()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const values = new FormData(event.target as HTMLFormElement)
        
    const body = {
      email: values.get('email'),
      password: values.get('password'),
    }

    const request = await fetch('http://localhost:8000/auth/login', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const { token } = await request.json();

    localStorage.setItem('token', token);

    const profileRequest = await fetch('http://localhost:8000/auth/profile', {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
    const jsonProfileResponse = await profileRequest.json()

    console.log(jsonProfileResponse);
    
    // navigate('/')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="login-form">
        <Input 
          placeholder="email@email.com" 
          label="E-mail"
          name="email"
          type="email"
        />
        <Input 
          placeholder="*********"
          label="Senha"
          name="password"
          type="password"
        />

        <div className="actions">
          <Link to="/auth/forgot-password">
            <Button
              variant="link" 
              role="link" 
            >
              Esqueci minha senha
            </Button>
          </Link>

          <Button type={'submit'}>
            Enviar
          </Button>
        </div>

        <Link to={'/auth/register'} className="register-link text-decoration-none">
          <Button
            variant={"secondary"}
          >
            Registre-se
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Login;

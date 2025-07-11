import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.scss'
import type { FormEventHandler } from "react";

const Register = () => {
  const navigate = useNavigate()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const values = new FormData(event.target as HTMLFormElement)
    
    // Validações vão aqui
    
    const body = {
      name: values.get('name'),
      email: values.get('email'),
      password: values.get('password'),
      document: values.get('document'),
    }

    await fetch('http://localhost:8000/auth/register', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });

    navigate('/auth/login')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="login-form">
        <Input 
          placeholder="Nome" 
          label="Nome"
          name="name"
        />
        <Input 
          placeholder="11155566688" 
          label="CPF"
          name="document"
        />
        <Input 
          placeholder="email@email.com" 
          label="E-mail"
          type="email"
          name="email"
        />
        <Input 
          placeholder="*********"
          label="Senha"
          type="password"
          name="password"
        />
        <Input 
          placeholder="*********"
          label="Confirmar senha"
          type="password"
          name="password_confirmation"
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

          <Button type="submit">
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

export default Register;

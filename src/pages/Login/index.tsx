import { Link } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.scss'

const Login = () => {
  return (
    <div className="login-form">
      <Input 
        placeholder="email@email.com" 
        label="E-mail"
      />
      <Input 
        placeholder="*********"
        label="Senha"
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

        <Link to={'/'} className="text-decoration-none">
          <Button
            role={'link'}
          >
            Enviar
          </Button>
        </Link>
      </div>

      <Link to={'/auth/register'} className="register-link text-decoration-none">
        <Button
          variant={"secondary"}
        >
          Registre-se
        </Button>
      </Link>
    </div>
  );
};

export default Login;

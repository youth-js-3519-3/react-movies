import { Link } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.css'

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
        <Button
          variant="link" 
          role="link" 
        >
          Esqueci minha senha
        </Button>

        <Link to={'/'}>
          <Button>
            Enviar
          </Button>
        </Link>
      </div>

      <Button
        variant={"secondary"}
      >
        Registre-se
      </Button>
    </div>
  );
};

export default Login;

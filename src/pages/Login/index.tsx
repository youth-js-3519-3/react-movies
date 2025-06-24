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
        <a href="/forgot-password">
          Esqueci minha senha
        </a>

        <Button>
          Enviar
        </Button>
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

import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input/input';

export function Login() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="container max-w-[900px]">
        <form action="#" method="post" className="text-center">
          <h1 className="dark:text-yellow-300 pb-6 text-3xl">
            Realize seu login
          </h1>

          <p className="mb-8">Acesse para jogar ou gerenciar suas quadras!</p>

          <div className="flex flex-col gap-2 mb-5 items-center">
            <div className="relative sm:w-96 md:w-2/5 w-80">
              <Input type="text" name="email" label="E-mail" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8 items-center">
            <div className="relative sm:w-96 md:w-2/5 w-80">
              <Input type="password" name="password" label="Senha" />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button onClick={handleBack}>Voltar</Button>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

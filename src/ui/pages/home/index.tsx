import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap flex-row justify-center items-center h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center p-5">
        <img className="w-10/12" src="images/logo.png" alt="Logo" />
      </div>

      <div className="w-full md:w-1/2 p-5">
        <h1 className="pb-6 text-xl sm:text-3xl text-wrap w-[500px] text-slate-900 dark:text-slate-200">
          Sistema para Formação de Grupos de Prática de Esportes Coletivos
        </h1>
        <h4 className="pb-7 text-lg md:text-xl dark:text-yellow-300 text-purple-800 font-bold">
          Encontre, Reserve e Jogue!
        </h4>

        <p className="md:text-xl mb-6 sm:mr-8 text-slate-900 dark:text-slate-200">
          Junte-se ao Peladas e descubra uma nova forma de
          <br />
          se divertir jogando! Cadastre-se para encontrar
          <br />
          parceiros de jogo ou inscreva sua quadra e aumente
          <br />
          suas reservas. Venha fazer parte dessa revolução
          <br />
          esportiva!
        </p>

        <div className="flex flex-row pb-10 justify-center md:justify-start gap-7">
          <Button onClick={() => navigate('/login')}>Entrar</Button>
          <Button onClick={() => navigate('/cadastro')}>Criar Conta</Button>
        </div>
      </div>
    </div>
  );
}

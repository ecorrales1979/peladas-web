export function Login() {
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
              <input
                type="text"
                id="email"
                name="email"
                className="peer w-full h-10 px-2 border-b-2 dark:border-amber-300 placeholder-transparent dark:bg-[#18181b]"
                placeholder=""
                value=""
              />
              <label
                htmlFor="email"
                className="absolute left-2 -top-3 text-gray-500 transition-all duration-200 transform origin-left scale-75 bg-slate-100 dark:bg-[#18181b] px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100"
              >
                E-mail
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8 items-center">
            <div className="relative sm:w-96 md:w-2/5 w-80">
              <input
                type="password"
                id="password"
                name="password"
                className="peer w-full h-10 px-2 border-b-2 dark:border-amber-300 placeholder-transparent dark:bg-[#18181b]"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute left-2 -top-3 text-gray-500 transition-all duration-200 transform origin-left scale-75 bg-slate-100 dark:bg-[#1c1917] px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100"
              >
                Senha
              </label>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="rounded-full hover:scale-105 bg-transparent dark:text-white border border-gray-300 px-4 py-2 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-400 hover:shadow-lg transform transition-all duration-300"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

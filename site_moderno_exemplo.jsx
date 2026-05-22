export default function SiteExemplo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-700 text-white font-sans">
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">MeuSite</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#inicio" className="hover:underline">Início</a>
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section id="inicio" className="text-center py-20">
          <h2 className="text-6xl font-extrabold mb-6">Bem-vindo ao Meu Site</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Um exemplo de site moderno criado com React e Tailwind.
          </p>

          <button className="mt-10 bg-white text-purple-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg hover:scale-105 transition">
            Explorar
          </button>
        </section>

        <section id="sobre" className="grid md:grid-cols-3 gap-8 py-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Design Moderno</h3>
            <p>
              Layout bonito com cores vibrantes e visual elegante.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Responsivo</h3>
            <p>
              Funciona bem em celular, tablet e computador.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Rápido</h3>
            <p>
              Criado usando tecnologias modernas para alta performance.
            </p>
          </div>
        </section>

        <section id="contato" className="text-center py-20">
          <h2 className="text-4xl font-bold mb-6">Contato</h2>
          <p className="mb-8 opacity-90">meusite@email.com</p>

          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl text-lg font-bold transition">
            Enviar Mensagem
          </button>
        </section>
      </main>

      <footer className="text-center py-8 border-t border-white/20 opacity-80">
        © 2026 MeuSite — Todos os direitos reservados.
      </footer>
    </div>
  )
}

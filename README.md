<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meu Site</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: white;
      min-height: 100vh;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 50px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
    }

    header h1 {
      color: #38bdf8;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-left: 20px;
      transition: 0.3s;
    }

    nav a:hover {
      color: #38bdf8;
    }

    .hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 80vh;
      padding: 20px;
    }

    .hero h2 {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .hero p {
      max-width: 600px;
      font-size: 1.1rem;
      color: #cbd5e1;
    }

    .btn {
      margin-top: 25px;
      padding: 14px 28px;
      background: #38bdf8;
      border: none;
      border-radius: 12px;
      color: #0f172a;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
      text-decoration: none;
    }

    .btn:hover {
      transform: scale(1.05);
      background: #0ea5e9;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 50px;
    }

    .card {
      background: rgba(255,255,255,0.08);
      padding: 25px;
      border-radius: 20px;
      transition: 0.3s;
      backdrop-filter: blur(8px);
    }

    .card:hover {
      transform: translateY(-8px);
    }

    .card h3 {
      margin-bottom: 10px;
      color: #38bdf8;
    }

    footer {
      text-align: center;
      padding: 20px;
      background: rgba(255,255,255,0.05);
      margin-top: 40px;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      header {
        flex-direction: column;
        gap: 10px;
      }

      .hero h2 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>MeuSite</h1>
    <nav>
      <a href="#inicio">Início</a>
      <a href="#servicos">Serviços</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <section class="hero" id="inicio">
    <h2>Bem-vindo ao seu novo site</h2>
    <p>
      Um exemplo moderno feito em HTML e CSS. Você pode editar tudo: cores, textos, imagens e muito mais.
    </p>
    <a class="btn" href="#servicos">Explorar</a>
  </section>

  <section class="cards" id="servicos">
    <div class="card">
      <h3>Design Moderno</h3>
      <p>Layout bonito, limpo e responsivo para celular e computador.</p>
    </div>

    <div class="card">
      <h3>Fácil de Editar</h3>
      <p>Você pode trocar textos, imagens e cores rapidamente.</p>
    </div>

    <div class="card">
      <h3>Rápido</h3>
      <p>Site leve e rápido carregando direto no navegador.</p>
    </div>
  </section>

  <footer id="contato">
    <p>© 2026 MeuSite - Criado em HTML e CSS</p>
  </footer>

</body>
</html>

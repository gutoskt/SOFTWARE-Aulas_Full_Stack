import { Link } from 'react-router-dom';

function Erro() {
  return (
    <div>
      <h1>Erro 404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">Voltar para a Página Inicial</Link>
    </div>
  );
}

export default Erro;

// <Route path="*" element={<Erro/>}/> {/* Rota curinga para capturar todas as rotas não definidas. */}
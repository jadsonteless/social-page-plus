```jsx
// # Exeplo: fazendo pesquisa se string existe dentro da array
import { useState } from 'react';
import './home.css'

export const Home = () => {
  const [buscarTerm, setBuscarTerm] = useState(''); // realiza a pesquisa
  const [nomes, setNomes] = useState([
    'João',
    'Maria',
    'Pedro',
    'Ana',
    'Carlos',
    'Sofia',
    'Miguel',
    'Laura',
  ]); // para criar a api na mão

  // pega o valor digitado pelo usuario
  const handleBuscarAgora = (recebeEventoDoInput) => {
    setBuscarTerm(recebeEventoDoInput.target.value);
  }

  // filtrando nomes dentro do state
  const filtrandoConteudo = nomes.filter((nome) => nome.toLowerCase().includes(buscarTerm.toLowerCase())
  ); /* 
  - filter = realiza a o filtro dentro do state 
  - toLowerCase = deixa ambas string no estdo de minuscula
  - includes = verificar se na array "nomes" existe o mesmo valor que na array "bucarTerm"
  */

  return (
    <section>
      <h1>Demonstração de buscador</h1>
      <input 
      type='text' 
      placeholder='Buscar nomes...'
      value={buscarTerm}
      onChange={handleBuscarAgora}
      />
      <ul>
        {filtrandoConteudo.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </section>
  );
}

export default Home;

```
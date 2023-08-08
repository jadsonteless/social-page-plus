```jsx
// # EBuscardor mostra apenas 2 itens da array na tela antes do user digitar a pesquisar
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

  // limita a quantidade de dados da array mostrada na tela
  const [mostrarNomes, setmostrarNomes] = useState(nomes.slice(0, 2));

  // pega o valor digitado pelo usuario
  const handleBuscarAgora = (recebeEventoDoInput) => {
    // criando uma var para criar um condicional
    const newBuscarTerm = recebeEventoDoInput.target.value;
    setBuscarTerm(newBuscarTerm);

    if (newBuscarTerm === '') {
      setmostrarNomes(nomes.slice(0, 2))
    } else {
      // filtrando nomes dentro do state
      const filtrandoConteudo = nomes.filter((nome) => nome.toLowerCase().includes(buscarTerm.toLowerCase())
      ); /* 
      - filter = realiza a o filtro dentro do state 
      - toLowerCase = deixa ambas string no estdo de minuscula
      - includes = verificar se na array "nomes" existe o mesmo valor que na array "bucarTerm"
      */
     setmostrarNomes(filtrandoConteudo)
    }
  }
  
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
        {mostrarNomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </section>
  );
}

export default Home;

```
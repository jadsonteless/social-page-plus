```jsx
// # Exeplo de utilização de this.
import './home.css'
import { Component } from 'react';


export class Home extends Component {
  state = {
    contador: 0,
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        console.log('PREVIA', prevProps.numberTeste)
        return {contador: prevState.contador + 1}
      }, 
      () => {
      console.log('Setado',this.state.contador)
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1> {/* saída: 0 */}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
export default Home;
```
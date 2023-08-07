import './styles.css'
// import { Component } from "react";

// export class Button extends Component {
//   render() {
//     const { text, onClick, disabled  } = this.props
//     return (
//       <button disabled={disabled} className="button-componets" onClick={onClick}>
//         {text}
//       </button>
//     )
//   }
// };

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button 
    className='button-componets'
    disabled={ disabled } 
    onClick={onClick} 
    >
      {text}
      </button >
  )
}
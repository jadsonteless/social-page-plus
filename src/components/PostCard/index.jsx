// export const PostCard = () => {
//   // estrutura root
//   // pode ser uma função q retorna jsx ou uma classe com o metodo render
// }
import './styles.css'
export const PostCard = ({ posts }) => {
  return (
    <div className='post'>
    <img src={posts.cover} alt={posts.title} />
    <div className='post-content'>
      <h1>{posts.title} {posts.id}</h1>
      <p>{posts.body}</p>
    </div>
  </div>
  )
}
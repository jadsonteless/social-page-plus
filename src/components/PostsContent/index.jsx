import './styles.css'
import { PostCard } from '../PostCard'

export const PostsContent = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(posts => (
        <PostCard posts={posts} key={posts.id} />
      ))}
    </div>
  )
}
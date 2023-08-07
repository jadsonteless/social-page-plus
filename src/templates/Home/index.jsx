import './home.css'
import { useEffect, useState, useCallback } from 'react';
import { LoadPost } from '../../components/LoadPost'
import { PostsContent } from '../../components/PostsContent'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState([0]);
  const [postsPerPage] = useState([10]);
  const [searchValue, setSearchValue] = useState('');

  const noMorePost = posts >= allPosts; // logica para desabilitar o button quando quantidade de post for igual ou superiro ao total de post da api

  const filterPosts = !!searchValue ? allPosts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase())
  }) : posts;
  
  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndFotos = await LoadPost();

    setPosts(postsAndFotos.slice(page, postsPerPage));
    setAllPosts(postsAndFotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);


  const loadMorePosts = () => {
    const nextPage = page + postsPerPage; // > 2 > 6
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage); // > (2, 4) 
    posts.push(...nextPosts) // ... utilizado para concatena aproveita o resto dos posta dentro da array

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  }

  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && ( // !! = true, ou seja se tiver alguem digitando
          <h1>{searchValue}</h1>
        )}
        <TextInput
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </div>

      {filterPosts.length > 0 ? ( // se a quantidade de post for maior q 0 entao mostre ()
        <PostsContent posts={filterPosts} />
      ) : ( // se não
        <p>Post não encontrado!</p>)}

      <div className='container-button'>
        {!searchValue && ( // ! false, se nao tiver busca
          <Button disabled={noMorePost} text={'botao'} onClick={loadMorePosts} />
        )}
      </div>
    </section>
  );
}

// class Home2 extends Component {
//   async componentDidMount() {
//     await this.loadPosts()
//   };



//   render() {


//   }
// }

export default Home;

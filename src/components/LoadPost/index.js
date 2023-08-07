export const LoadPost = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const fotosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

  const [posts, fotos] = await Promise.all([postsResponse, fotosResponse]);

  const postsJson = await posts.json();
  const fotosJson = await fotos.json();
  
  // unindo a mesma quantidade de fotos a mesma quantidade de posts
  // 1 parametro do map() para cada api ou seja para cada json()
  // ex: post recebe postsJson e index recebe fotosJson
  const postsAndFotos = postsJson.map((post, index) => {
  return { ...post, cover: fotosJson[index].url }
  });
  console.log(postsAndFotos)
  return postsAndFotos;
}
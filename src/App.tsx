import { useState } from "react";
import { Movie } from "./types/movies";
import styles from "./style.module.css";
const App = () => {
  const [movie, setMovie] = useState<Movie[]>([]);

  const handlerMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMovie(json);
      })
  }


  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={handlerMovies}>Mostrar filmes.</button>
        <p>Quantidade de filmes em cartaz: {movie.length}</p>
        <div className={styles.containerTableMovies}>
          {movie.map((item, index) => (
            <div className={styles.containerMovies}>
              <img src={item.avatar} className={styles.img} />
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;

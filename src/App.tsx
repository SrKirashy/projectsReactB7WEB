import { useState, useEffect } from "react";
import { Movie } from "./types/movies";
import styles from "./style.module.css";
const App = () => {

  useEffect(() => {
    handlerMovies();
  }, [])

  const [movie, setMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handlerMovies = async () => {
    setLoading(true);
    let res = await fetch('https://api.b7web.com.br/cinema/');
    let json = await res.json();
    setLoading(false);
    setMovie(json);
  }


  return (
    <>
      {loading &&
        <>
          <div className={styles.container}>
            <div className={styles.circle}></div>
          </div>
        </>
      }

      {!loading &&
        <div className={styles.container}>
          <p>Quantidade de filmes em cartaz: {movie.length}</p>
          <div className={styles.containerTableMovies}>
            {movie.map((item, index) => (
              <div className={styles.containerBlock}>
                <div className={styles.containerMovies}>
                  <div className={styles.description}>
                    <h1>{item.titulo}</h1>
                    <p className={styles.p} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <img src={item.avatar} className={styles.img} />
                  <p>{item.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default App;

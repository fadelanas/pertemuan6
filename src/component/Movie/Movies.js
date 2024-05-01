import Movie from '../Movie/Movie'
import styles from './Movie.module.css'
import data from '../../utils/constants/data'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function Movies() {
  const [movies, setMovies] = useState(data)

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: 'Jigsaw Spiral',
      year: 2021,
      type: 'Movie',
      poster: 'https://picsum.photos/300/400',
    }

    setMovies([...movies, movie])
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies_title}>Latest Movies</h2>
          <div className={styles.movie_container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />
            })}
          </div>
          <button onClick={handleClick}>Add Movie</button>
        </section>
      </div>
    </div>
  )
}

export default Movies

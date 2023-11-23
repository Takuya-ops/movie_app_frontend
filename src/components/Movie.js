import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Movie = () => {
  const [movie, setMovie] = useState({})
  let {id} = useParams()

  useEffect(() => {
    let myMovie = {
        id: 1,
        title: "もののけ姫",
        release_date: "1996年03月01日",
        runtime: 116,
        mpaa_rating : "PG12",
        description: "人間と森の共生",
      }
      setMovie(myMovie)
  },[id])

  return (
    <div>
      <h2>映画：{movie.title}</h2>
      <small><em>公開日：{movie.release_date}、時間：{movie.runtime} 分、 映倫：{movie.mpaa_rating}</em></small>
      <hr/>
      <p>{movie.description}</p>
    </div>
  )
}

export default Movie
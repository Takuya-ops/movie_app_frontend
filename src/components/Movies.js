import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "もののけ姫",
        release_date: "1996-03-01",
        runtime: 116,
        mpaa_rating : "R",
        description: "人間と森の共生",
      },
      {
        id: 2,
        title: "千と千尋の神隠し",
        release_date: "2001-07-23",
        runtime: 116,
        mpaa_rating : "R",
        description: "主人公の成長の物語",
      },
    ];
    setMovies(moviesList)
  },[])
  
  return (
     <div>
      <h2>映画</h2>
      <hr/>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>映画</th>
            <th>公開日</th>
            <th>評価</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>
                  {m.title}
                </Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
  )
}

export default Movies
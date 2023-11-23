import Ticket from "../images/movie_tickets.jpg"

const Home = () => {
  return (
    <>
    <div className="text-center">
      <h2>今夜見る映画を探す。</h2>
      <hr/>
      <img src={Ticket} alt="movie tickets"></img>
    </div>
    </>
  )
}

export default Home;
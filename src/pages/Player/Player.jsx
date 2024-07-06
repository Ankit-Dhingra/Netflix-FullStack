import React , {useState , useEffect}from 'react'
import "./Player.css"
import back_arrow_icon from"../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
  const {id} = useParams(); 
  const navigate = useNavigate();

  const [apiData , setApiData] = useState({
    name:"",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjY1M2QzODdkOWQ5MDlmNDcxZjZhZjBhOTcyMTI0MiIsInN1YiI6IjY2NDJkYjU3NzM1YWYxN2E2MjM1YWU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5vGy8k4DQ-N8_qNOMx3DGkh64ar5YC4Bu2JDMhucHs'
    }
  };
  

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  


  return (
    <div className = "player">
      <img src= {back_arrow_icon} alt="" onClick={() => navigate('/')}/>
      <iframe width='90%' height = '90%' src={`https://www.youtube.com/embed/${apiData.key}`} title = 'trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player

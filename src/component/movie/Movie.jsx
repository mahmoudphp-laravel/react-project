import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Movie() {
  const [movie, setMovie] = useState([])
  const [inputvalue, setinputvalue] = useState(null)

  let showData=inputvalue? "search":"discover"
  async function getdataapi() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${showData}/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, {
      params: {
        query:inputvalue
      }
    }

    )

    console.log(data.results);
    setMovie(data.results)

  }
  useEffect(() => {
    getdataapi();
  }, [
    inputvalue
  ])
  function displayinput(e) {
    console.log("alaa");
    setinputvalue(e)
  }
  return (<>
    {movie ? <div className='container text-center text-white pt-5 bg-black'>
      <input type="text" onChange={(e)=> displayinput(e.target.value)} placeholder='search' className='form-control w-25 m-auto' name='' id="" />
      <div className="row pt-4">
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <h1>trending</h1>
          <h2>movie</h2>
          <h6>to watch now</h6>
          <h6>{inputvalue}</h6>

        </div>


        {movie.map((x, index) =>
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div>
              <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" />
              <h6 className='py-2'>{x.title}</h6>
            </div>
          </div>

        )}
      </div>
    </div> : <div className=' d-flex justify-content-center align-items-center vh-100 bg-black '>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>    </div>
    }

  </>
  )
}

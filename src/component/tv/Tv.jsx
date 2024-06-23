import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Tv() {
  const [Tv, setTv] = useState([])
  async function getdataapi() {
    let { data } = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

    )

    console.log(data.results);
    setTv(data.results)

  }
  useEffect(() => {
    getdataapi();
  }, [])
  return (<>
    {Tv ? <div className='container text-center text-white pt-5 bg-black'>
      <div className="row">
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <h1>trending</h1>
          <h2>tv</h2>
          <h6>to watch now</h6>
        </div>


        {Tv.map((x, index) =>
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

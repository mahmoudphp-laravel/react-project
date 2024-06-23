import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Movie() {
  const [Eat, setEat] = useState([])
  async function getdataapi() {
    let { data } = await axios.get("https://forkify-api.herokuapp.com/api/search?q=ice cream"
    )

    console.log(data.recipes);
    setEat(data.recipes)

  }
  useEffect(() => {
    getdataapi();
  }, [])
  return (<>
    {Eat ? <div className='container text-center text-white pt-5 bg-black'>
      <div className="row">
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <h1>trending</h1>
          <h2>eat</h2>
          <h6>to watch now</h6>
        </div>


        {Eat.map((x, index) =>
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div>
              <img className='w-100' src={x.image_url} alt="" />
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

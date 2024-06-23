import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Movie from './component/movie/Movie'
import Tv from './component/tv/Tv'
import Eat from './component/eat/Eat'
import Home from './component/home/Home'

export default function App() {
 let routers= createBrowserRouter([{
    path: "/", element: <Layout />, children: [
      { path: "movie", element: <Movie /> },
      { path: "tv", element: <Tv /> },
     { path: "eat", element: <Eat /> },
     { path: "home", element: <Home /> },


      
    ]
  }])
  return <RouterProvider router={routers}/>
}

let apimoviee = "https://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
let apitv = "https://api.themoviedb.org/3/discover/tv?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

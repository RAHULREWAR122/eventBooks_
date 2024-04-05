import React from 'react'
import style from "./hero.module.css"
import img from "./Banner.jpg"

function Hero() {
  return (<>
    <main>
    <img src={img} alt="Hero Image" />
    <div className={style.content}>
          <h1>Discover Exciting Events Happening
          Near You - Stay Tuned for Update!</h1>
          <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputaye libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, pr </p>
    </div>
    </main>
    </> 
  )
}

export default Hero
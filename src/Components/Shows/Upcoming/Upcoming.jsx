import style from "./upcoming.module.css"
import React, { useEffect } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector , useDispatch } from "react-redux";
import { fetchUpcoming , selector } from "../../Reducers/UpcomingReducer";
import img1 from "./images/A1.png"
import img2 from "./images/A2.jpg"
import img3 from "./images/A3.jpg"
import img4 from "./images/A4.jpg"
import img5 from "./images/A5.png"
import img6 from "./images/A6.png"
import img7 from "./images/A7.jpg"
import img8 from "./images/A8.jpg"
import img9 from "./images/A9.jpg"
import img10 from "./images/A10.jpg"



function UpcomingEvents() {

      const dispatch = useDispatch();
      const Data = useSelector(selector)
     
      const showData = Data.data.events
        
      const imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]

      useEffect(()=>{
         dispatch(fetchUpcoming())
      },[dispatch])


  return (
    <div className={style.upcoming}>
      <div className={style.upcomingShows}>
           <h3>Upcoming events <GrLinkNext/></h3>
           <div className={style.cards}>
             {Data.status === "loading" && <p>Loading...</p>}

             {Data.status === "succeeded" && showData.map((data ,i)=>{
               return (
                
              <div key={i} className={style.card}>
              <div className={style.image}>
                  <img src={imgs[i]} alt="" />
                  <p>March {data.date.slice(0,10)}</p>  
              </div>
            <div className={style.about}>
                <h5>{data.eventName}</h5>
                <div className={style.information}>
                    <p><span className={style.loc}><FaLocationDot/></span>{data.cityName}</p>
                    <p>{data.weather}</p>
                </div>
            </div>
          
          </div>
               )
             })}

           </div>
      </div>
       

    </div>
  )
}

export default UpcomingEvents;
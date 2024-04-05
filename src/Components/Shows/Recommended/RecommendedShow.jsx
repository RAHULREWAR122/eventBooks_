import React, { useRef, useState } from 'react';
import style from "./Recommended.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import { useEffect   } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selector ,fetchRecommended } from '../../Reducers/RecommendedReducer';
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.jpg"
import img8 from "./images/8.jpg"




function RecommendedShow() {
  const showDataRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
 
  const imgs = [img1 ,img2 ,img3 ,img4 ,img5 ,img6 ,img7 ,img8];

  const dispatch = useDispatch()
  const data = useSelector(selector);
  
  const showData = data.data.events


  useEffect(()=>{
     dispatch(fetchRecommended())
  },[dispatch])
  

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      && data.status !== "loading"
    ) {
      dispatch(fetchRecommended());
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.status]); 



  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(showDataRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const distance = x - startX;
    showDataRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  
  return (
  <div className={style.showsRecommended}>
      <div className={style.shows}>
    
        <div className={style.topShow}>
          <div className={style.topLeft}>
            <h3>Recommended</h3>
            <FaArrowRight />
          </div>
          <div className={style.topRight}>
            <NavLink to="/">See All</NavLink>
          </div>
        </div>
        <div className={style.showData}
             ref={showDataRef}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             onMouseLeave={handleMouseUp}
        >
          {data.status === "loading" && <p>Loading...</p>}
          {showData && showData.map((data ,i)=>{
  
  return ( 
          <div key={i} className={style.card}>
        
          <div className={style.imgInfo}>
              <div className={style.location}>
                  <p >{data.eventName}</p>
                  <span><SlLocationPin/> {data.cityName}</span>
              </div>
            <div className={style.date}>
                 <p>March {data.date.slice(0 ,10)}</p>
                 <span>{data.weather}</span>
               </div> 
           </div>
           <img src={imgs[i]} alt={""} />
          
     </div>
        
        )
          })}
        </div>
      </div>
    </div>
  );
}

export default RecommendedShow;


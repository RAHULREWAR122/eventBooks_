import Hero from "../Hero/Hero";
import RecommendedShow from "./Recommended/RecommendedShow";

import React from 'react'
import UpcomingEvents from "./Upcoming/Upcoming";

function AllShows() {
  return (
   <>
    <Hero/>
    <RecommendedShow/>
    <UpcomingEvents/>
   </>
  )
}

export default AllShows
import React from 'react'
import Footer from './components/Footer';
import News from './components/News';
import Recruiters from "./components/Recruiters";
import Labs from "./components/Labs";
import AIAssistant from "./components/AIAssistant/AIAssistant";

import PlacementsOverview from "./components/PlacementsOverview";
import RankingsAccreditations from "./components/RankingsAccreditations";
import ResearchAndDevelopment from "./components/ResearchAndDevelopment";
// import Main from "./components/Main";
import Hero from "./components/Hero";
import Extracurricular from "./components/Extracurricular"
import VirtualTour from "./components/VirtualTour";

const page = () => {
  return (
    <div>
            < Hero />
        {/* < Main /> */}
       < PlacementsOverview />
      < RankingsAccreditations />
        <Labs />
        <News />
       < VirtualTour />
        < Recruiters />
       < ResearchAndDevelopment />
       < Extracurricular />
        <Footer />
        <AIAssistant />
    </div>
  )
}

export default page

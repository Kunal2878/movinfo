import IconPositionTabs from './IconPositionTabs';
import HollyWood from './HollyWood';
import BollyWood from './BollyWood';
import Anime from './Anime';
import Info from './Info';
import Manga from './Manga';
import LandingPage from './LandingPage';
import BtmNav from './BtmNav'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black-900 flex-col items-center justify-between ">
     
              <span className="ml-3 text-xl bg-gradient-to-r from-green-800 to-red-600 bg-clip-text text-transparent  " style={{fontFamily:'Neon Energy X'}}>MOVINFO</span>          
     {/* <Manga/> */}
    
     {/* <LandingPage/> */}
     {/* <IconPositionTabs/> */}
     {/* <HollyWood/> */}
     <Anime/>
     {/* <Info/> */}
     {/* <BtmNav/>  */}
     {/* <BollyWood/> */}

  


    </main>
  );
}


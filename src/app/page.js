import IconPositionTabs from './IconPositionTabs';
import HollyWood from './HollyWood';
import Anime from './Anime';
import Manga from './Manga';
import LandingPage from './LandingPage';
import BtmNav from './BtmNav'
import Bolly from './Bolly'
import GlobalSearch from './GlobalSearch'



const Home = () => {
 

  return (
  
    <main className=" w-full flex min-h-screen  flex-col items-center justify-between bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black">
     
     <LandingPage/>
     <BtmNav/> 
    
      <GlobalSearch/>
    <IconPositionTabs hollyWood={<HollyWood />} bollyWood={<Bolly />} manga={<Manga />} anime={<Anime />} />



    </main>
  );
}
export default Home;

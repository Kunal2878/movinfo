import IconPositionTabs from './IconPositionTabs';
import HollyWood from './HollyWood';
import Anime from './Anime';
import Manga from './Manga';
// import LandingPage from './LandingPage';
import BtmNav from './BtmNav'
import Bolly from './Bolly'
import GlobalSearch from './GlobalSearch'
import LandingPage from './mainpage/page';
import Navbar from './navbar/page';

const Home = () => {
 

  return (
    // bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black
    <main className=" w-full flex min-h-screen  flex-col items-center justify-between ">
    <div className=" sticky top-0 w-full  backdrop-blur-sm bg-white/20 mb-0" style={{zIndex:1000}}> <Navbar /></div>
    <div className="  w-full" >   <LandingPage/></div>
   
     {/* <BtmNav/>  */}
    
      {/* <GlobalSearch/> */}
    <IconPositionTabs hollyWood={<HollyWood />} bollyWood={<Bolly />} manga={<Manga />} anime={<Anime />} />



    </main>
  );
}
export default Home;

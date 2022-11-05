import BottomArea from './components/BottomArea';
import Drawer from './components/Drawer';
import Education from './components/Education';
import Header from './components/Header';
import MyServices from './components/MyServices';
import Stack from './components/Stack';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className='px-0' >
      <Drawer/>
      <Header />
      <Stack />
      <div className="w-full" >
          <div className='relative '>
            <img className='absolute -right-44 mt-60 top-96 p-0 h-72 rotate-90  pointer-events-none'  src={process.env.PUBLIC_URL + '/icons/Shape.svg'} alt="gmail"/> 
          </div>
      </div>
     
      <Timeline />     

      <Education />
      
      <MyServices />
      <BottomArea /> 
    </div>
  );
}

export default App;

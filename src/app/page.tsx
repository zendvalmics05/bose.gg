import SideBar from './sidebar';
import MainScreen from './mainscreen';

export default function Home() {
  return (
      <div className='flex flex-row'>
          <SideBar/>
          <main className={'pl-[4.6vw]'}>
              <MainScreen/>
          </main>
      </div>
  );
}
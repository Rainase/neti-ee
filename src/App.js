// import logo from './logo.svg';
import './App.css';
import CatalogItem from './components/CatalogItem';
import Footer from './components/Footer';
import Search from './components/Search';
import TopBar from './components/TopBar';
import { cat_urls } from './data/cat_urls';
const {
  RiikJaYhis,
  HaridusJaKult,
  MeelelahutusJaHobid,
  TervisJaSport,
  InfoJaMeedia,
  AriJaReisimine,
  KoduJaKeskkond,
  TehnikaJaEhitus,
} = cat_urls;

function App() {
  return (
    <div className='font-Titi select-none h-screen'>
      <TopBar />
      <Search />
      <div className='grid sm:grid-cols-2 gap-2 container sm:mx-auto'>
        <div className='grid gap-4'>
              <CatalogItem key="Riik Ja Ühiskond" title={'Riik Ja Ühiskond'} items={RiikJaYhis} />
              <CatalogItem key="Haridus ja kultuur" title={'Haridus ja kultuur'} items={HaridusJaKult} />
              <CatalogItem key="Meelelahutus ja hobid" title={'Meelelahutus ja hobid'} items={MeelelahutusJaHobid} />
              <CatalogItem key="Tervis ja sport" title={'Tervis ja sport'} items={TervisJaSport} />
        </div>
        <div className='grid gap-4'>
              <CatalogItem key="Info ja meedia" title={'Info ja meedia'} items={InfoJaMeedia} />
              <CatalogItem key="Äri ja reisimine" title={'Äri ja reisimine'} items={AriJaReisimine} />
              <CatalogItem key="Tehinka ja ehitus" title={'Tehinka ja ehitus'} items={TehnikaJaEhitus} />
              <CatalogItem key="Kodu ja keskkond" title={'Kodu ja keskkond'} items={KoduJaKeskkond} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

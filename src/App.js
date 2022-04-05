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
    <div className='h-screen select-none font-Titi'>
      <TopBar />
      <Search />
      <div className='container grid gap-2 sm:grid-cols-3 lg:grid-cols-4 sm:mx-auto'>
        <CatalogItem
          key='Riik Ja Ühiskond'
          title={'Riik Ja Ühiskond'}
          items={RiikJaYhis}
        />
        <CatalogItem
          key='Haridus ja kultuur'
          title={'Haridus ja kultuur'}
          items={HaridusJaKult}
        />
        <CatalogItem
          key='Meelelahutus ja hobid'
          title={'Meelelahutus ja hobid'}
          items={MeelelahutusJaHobid}
        />
        <CatalogItem
          key='Tervis ja sport'
          title={'Tervis ja sport'}
          items={TervisJaSport}
        />
        <CatalogItem
          key='Info ja meedia'
          title={'Info ja meedia'}
          items={InfoJaMeedia}
        />
        <CatalogItem
          key='Äri ja reisimine'
          title={'Äri ja reisimine'}
          items={AriJaReisimine}
        />
        <CatalogItem
          key='Tehinka ja ehitus'
          title={'Tehinka ja ehitus'}
          items={TehnikaJaEhitus}
        />
        <CatalogItem
          key='Kodu ja keskkond'
          title={'Kodu ja keskkond'}
          items={KoduJaKeskkond}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

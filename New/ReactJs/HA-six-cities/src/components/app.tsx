import MainPage from "../pages/main-page/main-page";

type AppProps = {
    places: number;
    cities: string[];
    cardsData: {
        title: string;
        price: number;
        src: string;
        premium: boolean;
    }[];
  }
  
function App({places, cities, cardsData} :AppProps) :JSX.Element {
    return(
        <MainPage places={places} cardsData={cardsData} cities={cities}/>
    )
}

export default App;
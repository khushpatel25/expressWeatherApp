import './App.css';
import CakeShop from './components/CakeShop';
import { Provider } from "react-redux"
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamShop from './components/IceCreamShop';
import NewCakeShop from './components/NewCakeShop';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <CakeShop />
        <HooksCakeContainer></HooksCakeContainer>
        <IceCreamShop></IceCreamShop>
        <NewCakeShop></NewCakeShop>
      </div>
    </Provider>
  );
}

export default App;

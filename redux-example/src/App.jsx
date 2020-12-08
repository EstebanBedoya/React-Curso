import Pokemons from './components/Pokemons'
import ShowNanme from './components/ShowNanme'
import { Provider } from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Pokemons />
      <ShowNanme username='bedoya' />
    </Provider>
  );
}

export default App;

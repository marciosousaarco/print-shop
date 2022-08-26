
import { RoutesComponent } from './routes';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RoutesComponent />
      <GlobalStyle />
    </Provider>
  )
}

export default App

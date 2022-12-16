import { Counter } from './Counter.js';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;

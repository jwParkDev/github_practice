import { Counter } from './Counter.js';
import { Provider } from 'react-redux';
import { store } from './Store';
import styled from 'styled-components';

const MainBody = styled.div`
  width:100%;
`;

function App() {
  return (
    <MainBody>
      <Provider store={store}>
        <Counter />
      </Provider>
    </MainBody>
  );
}

export default App;

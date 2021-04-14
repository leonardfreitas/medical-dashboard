import GlobalStyle from './styles/global';

import { NavBar } from './components/NavBar';
import { Dashboard } from './pages/Dashboard';
import { Aside } from './components/Aside';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Dashboard />
      <Aside />
    </>
  );
}

export default App;

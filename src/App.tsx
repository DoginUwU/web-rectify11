import Header from "./components/Header";
import { GlobalStyle } from "./styles/globals";
import Home from "./views/Home";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Home />
  </>
);

export default App;

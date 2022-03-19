import { ThemeProvider } from "styled-components";
import DownloadModal from "./components/DownloadModal";
import GoToTop from "./components/GoToTop";
import Header from "./components/Header";
import { DownloadModalProvider } from "./contexts/DownloadModalContext";
import { GlobalStyle } from "./styles/globals";
import { lightTheme } from "./styles/theme";
import Home from "./views/Home";

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <DownloadModalProvider>
      <GlobalStyle />
      <Header />
      <Home />
      <DownloadModal />
      <GoToTop />
    </DownloadModalProvider>
  </ThemeProvider>
);

export default App;

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DownloadModal from "./components/DownloadModal";
import GoToTop from "./components/GoToTop";
import Header from "./components/Header";
import { DownloadModalProvider } from "./contexts/DownloadModalContext";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globals";
import { lightTheme } from "./styles/theme";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <DownloadModalProvider>
        <GlobalStyle />
        <Header />
        <DownloadModal />
        <GoToTop />
        <Router />
      </DownloadModalProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;

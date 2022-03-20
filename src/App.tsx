import { PrismicProvider } from "@prismicio/react";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DownloadModal from "./components/DownloadModal";
import GoToTop from "./components/GoToTop";
import Header from "./components/Header";
import { DownloadModalProvider } from "./contexts/DownloadModalContext";
import { client } from "./services/prismic";
import { GlobalStyle } from "./styles/globals";
import { lightTheme } from "./styles/theme";

const App: FunctionComponent = ({ children }) => (
  <PrismicProvider client={client}>
    <ThemeProvider theme={lightTheme}>
      <DownloadModalProvider>
        <GlobalStyle />
        <Header />
        <DownloadModal />
        <GoToTop />
        {children}
        <Outlet />
      </DownloadModalProvider>
    </ThemeProvider>
  </PrismicProvider>
);

export default App;

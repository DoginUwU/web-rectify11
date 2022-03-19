import React, { createContext, useMemo, useState, useContext } from "react";

interface IDownloadModalContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DownloadModalContext = createContext<IDownloadModalContext>({} as IDownloadModalContext);

const DownloadModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return <DownloadModalContext.Provider value={value}>{children}</DownloadModalContext.Provider>;
};

const useDownloadModal = () => {
  const context = useContext(DownloadModalContext);
  if (context === undefined) {
    throw new Error("useDownloadModalContext must be used within a DownloadModalProvider");
  }
  return context;
};

export { DownloadModalProvider, useDownloadModal };

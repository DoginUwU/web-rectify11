interface IDownload {
  informations: string[];
  file_hash: string;
  downloads: {
    name: string;
    link: string;
  }[];
}

export type { IDownload };

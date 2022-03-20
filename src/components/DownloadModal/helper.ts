import { IDownload } from "../../@types/download";

const convertPrismicDocument = (document: any): IDownload => ({
  file_hash: document?.data.file_hash[0]?.text,
  downloads: document?.data.body[1]?.items.map((item: any) => ({
    name: item.title[0].text,
    link: item.link.url,
  })),
  informations: document?.data.body[0]?.items.map((item: any) => item.info[0].text as string),
});

export { convertPrismicDocument };

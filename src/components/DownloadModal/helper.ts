import * as prismicH from "@prismicio/helpers";
import { IDownload } from "../../@types/download";

const convertPrismicDocument = (document: any): IDownload => ({
  file_hash: prismicH.asText(document?.data.file_hash) || "",
  downloads: document?.data.body[1]?.items.map((item: any) => ({
    name: prismicH.asText(item.title),
    link: item.link.url,
  })),
  informations: document?.data.body[0]?.items.map((item: any) => prismicH.asText(item.info)),
});

export { convertPrismicDocument };

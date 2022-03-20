import * as prismicH from "@prismicio/helpers";
import { IChangelog } from "../../@types/changelog";

const convertPrismicDocuments = (documents: any[]): IChangelog[] =>
  documents
    .map((document: any) => ({
      version: prismicH.asText(document?.data.version) || "",
      date: document?.data.date,
      description: prismicH.asText(document?.data.description) || "",
      changes: document?.data.body[0].items.map((item: any) => prismicH.asText(item.description1)),
      timestamp: prismicH.asDate(document?.data.date)?.getTime() || 0,
    }))
    .sort((a, b) => b.timestamp - a.timestamp);

export { convertPrismicDocuments };

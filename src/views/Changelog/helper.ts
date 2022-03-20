import { IChangelog } from "../../@types/changelog";

const convertPrismicDocuments = (documents: any): IChangelog[] =>
  documents.map((document: any) => ({
    version: document?.data.version[0]?.text,
    date: document?.data.date,
    description: document?.data.description[0]?.text,
    changes: document?.data.body[0].items.map((item: any) => item.description1[0].text as string),
  }));

export { convertPrismicDocuments };

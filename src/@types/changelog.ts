interface IChangelog {
  version: string;
  date: string;
  description: string;
  changes: string[];
}

export type { IChangelog };

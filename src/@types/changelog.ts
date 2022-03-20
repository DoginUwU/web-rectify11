interface IChangelog {
  version: string;
  date: string;
  description: string;
  changes: string[];
  timestamp: number;
}

export type { IChangelog };

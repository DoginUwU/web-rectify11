interface ILandingPageItem {
  title: string;
  description: string;
  type: "default" | "dark_mode" | "comparation";
  images: string[];
}

interface ILandingPagePrismic {
  title: string;
  description: string;
  primary_image: string;
  items: ILandingPageItem[];
}

export type { ILandingPagePrismic, ILandingPageItem };

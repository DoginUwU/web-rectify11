import * as prismicH from "@prismicio/helpers";
import { ILandingPagePrismic, ILandingPageItem } from "../../@types/landingPage";

const convertPrismicDocument = (document: any): ILandingPagePrismic => ({
  title: prismicH.asHTML(document?.data.title) || "",
  description: prismicH.asHTML(document?.data.description) || "",
  primary_image: document?.data.primary_image?.url || "",
  items: document?.data.body.map(
    (item: any) =>
      ({
        title: prismicH.asText(item.primary.title1) || "",
        description: prismicH.asText(item.primary.description1) || "",
        type: item.primary.type || "",
        images: item.items.map((image: any) => image.image.url) || [],
      } as ILandingPageItem)
  ),
});

export { convertPrismicDocument };

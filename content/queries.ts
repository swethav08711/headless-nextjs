import { HeroQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getContentForHero = async () => {
  const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
            title
            subTitle
            preTitle
            callToActionCollection {
                    items {
                        link
                        text
                    }
                }
            }
        }
    }`;

  const data = await contentGqlFetcher<HeroQuery>({ query });
  if (!data) {
    throw Error("Opps no data");
  }
  return data;
};

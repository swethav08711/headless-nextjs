export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      subTitle: string;
      preTitle: string;
      callToActionCollection: {
        items: {
          link: string;
          text: string;
        }[];
      };
    }[];
  };
};

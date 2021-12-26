export default interface ISeason {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  webChannel?: null;
  image?: null;
  summary?: null;
  _links: {
    self: {
      href: string;
    };
  };
}

import IEpisode from './Episode';
import ISeason from './Season';
import IShow from './Show';

export default class IShowContext {
  episodes: IEpisode[] = [];

  seasons: ISeason[] = [];

  show: IShow | null = null;

  showId: string = '1955';
}

// MODELS
import IShow from '../interfaces/Show';
import IFetchResult from '../interfaces/FetchResult';
import IEpisode from '../interfaces/Episode';
import ISeason from '../interfaces/Season';

// HOOKS
import useFetch from './useFetch';

function useFetchShow(showId: string = '1955'): IFetchResult<IShow | null> {
  return useFetch(`https://api.tvmaze.com/shows/${showId}`);
}

function useFetchShowSeasons(
  showId: string = '1955'
): IFetchResult<ISeason[] | null> {
  return useFetch(`https://api.tvmaze.com/shows/${showId}/seasons`);
}

function useFetchEpisodes(
  showId: string = '1955'
): IFetchResult<IEpisode[] | null> {
  return useFetch(`https://api.tvmaze.com/shows/${showId}/episodes`);
}

function useFetchEpisode(
  showId: string = '1955',
  seasonNumber: string = '1',
  episodeNumber: string = '1'
): any {
  return useFetch(
    `https://api.tvmaze.com/shows/${showId}/episodebynumber?season=${seasonNumber}&number=${episodeNumber}`
  );
}

export { useFetchShow, useFetchEpisodes, useFetchShowSeasons, useFetchEpisode };

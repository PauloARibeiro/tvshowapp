export default interface IFetchResult<T> extends Array<T | any> {
  0: T;
  1: any;
}

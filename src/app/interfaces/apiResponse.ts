export interface ApiResponse<T> {
  '@context': string;
  '@id': string;
  '@type': 'Collection';
  totalItems: number;
  member: T[];
}

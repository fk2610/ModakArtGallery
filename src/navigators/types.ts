import { ArtworkItemApiProps } from '../api/types';

export interface DetailsParamsProps {
  route: {
    params: {
      data: ArtworkItemApiProps;
    };
  };
}

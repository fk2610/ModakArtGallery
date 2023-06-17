export interface ArtworkItemApiProps {
  id: number;
  title: string;
  artist_title: string;
  thumbnail: {
    lqip: string;
  };
  image_id: string;
  exhibition_history: string;
  provenance_text: string;
}

export type ArtworkListProps = Array<ArtworkItemApiProps>;

export interface ArtworkListApiResponseProps {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: ArtworkListProps;
  config: {
    iiif_url: string;
    website_url: string;
  };
}

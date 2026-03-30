export type ReleaseType = 'lp' | 'ep' | 'single';

export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtubeMusic?: string;
  soundcloud?: string;
  deezer?: string;
  tidal?: string;
  vkMusic?: string;
  amazonMusic?: string;
  yandexMusic?: string;
  zvuk?: string;
}

export interface Track {
  number: number;
  name: string;
  duration?: { minutes: number; seconds: number };
}

export interface Release {
  author: string;
  year: number;
  name: string;
  slug: string;
  type: ReleaseType;
  tracks: Track[];
  coverPath: string;
  links: StreamingLinks;
}

import type { StreamingLinks } from './types';
import { asset } from '../utils/asset';

export interface Platform {
  key: string;
  name: string;
  icon: string;
  getUrl: (links: StreamingLinks) => string | undefined;
}

export const platforms: Platform[] = [
  { key: 'yandexMusic', name: 'Яндекс Музыка', icon: asset('icons/yandexmusic.svg'), getUrl: (l) => l.yandexMusic },
  { key: 'vkMusic', name: 'VK Music', icon: asset('icons/vk.svg'), getUrl: (l) => l.vkMusic },
  { key: 'spotify', name: 'Spotify', icon: asset('icons/spotify.svg'), getUrl: (l) => l.spotify },
  { key: 'appleMusic', name: 'Apple Music', icon: asset('icons/applemusic.svg'), getUrl: (l) => l.appleMusic },
  { key: 'youtubeMusic', name: 'YouTube Music', icon: asset('icons/youtubemusic.svg'), getUrl: (l) => l.youtubeMusic },
  { key: 'tidal', name: 'Tidal', icon: asset('icons/tidal.svg'), getUrl: (l) => l.tidal },
  { key: 'soundcloud', name: 'SoundCloud', icon: asset('icons/soundcloud.svg'), getUrl: (l) => l.soundcloud },
  { key: 'deezer', name: 'Deezer', icon: asset('icons/deezer.svg'), getUrl: (l) => l.deezer },
  { key: 'amazonMusic', name: 'Amazon Music', icon: asset('icons/amazonmusic.svg'), getUrl: (l) => l.amazonMusic },
  { key: 'zvuk', name: 'Звук', icon: asset('icons/zvuk.svg'), getUrl: (l) => l.zvuk },
];

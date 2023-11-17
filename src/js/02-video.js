import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

const getCurrentTime = currentTime => {
  const seconds = currentTime.seconds;
  localStorage.setItem(localStorageKey, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 100));

player.setCurrentTime(JSON.parse(localStorage.getItem(localStorageKey)) || 0);

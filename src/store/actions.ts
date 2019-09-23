import { ADD_TRACK } from './actionTypes';
import { Track } from './track/types';

export const addTrack = (track: Track) => ({
  type: ADD_TRACK,
  payload: {
    track
  }
});

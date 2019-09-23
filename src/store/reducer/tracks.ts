import { ADD_TRACK, TrackActionTypes } from '../actionTypes';
import { TrackState } from '../track/types';

const initialTrackState: TrackState = {
  currentTrack: {
    artist: '',
    trackname: ''
  },
  trackChart: [],
  playedTracks: [],
  tracks: []
};

export default function(state = initialTrackState, action: TrackActionTypes) {
  switch (action.type) {
    case ADD_TRACK: {
      return {
        ...state
      };
    }
  }
}

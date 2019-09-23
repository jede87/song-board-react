export interface Track {
  artist: string;
  trackname: string;
}

export interface TrackState {
  currentTrack: Track;
  trackChart: Track[];
  playedTracks: Track[];
  tracks: Track[];
}

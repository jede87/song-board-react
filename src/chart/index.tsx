import React from 'react';
import NextTrack from './NextTrack';
import TopRatedTracks from './TopRatedTracks';
import RecentTracks from './RecentTracks';
const Chart = () => {
  return (
    <div className="song-board">
      <header className="header">
        <NextTrack />
      </header>
      <div className="song-board-body">
        <div className="container">
          <div className="row">
            <TopRatedTracks />
            <RecentTracks />
          </div>
        </div>
      </div>
      <footer className="song-board-footer">
        <div className="container text-right">
          <div className="row">
            <div className="col-12">
              <p>use tag #ourfantasticparty on socialmedia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chart;

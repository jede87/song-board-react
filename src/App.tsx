import React from "react";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="song-board">
      <header className="header">
        <div className="container text-center py-4">
          <div className="row">
            <div className="col-12">
              <h1>song board</h1>
              <h2>
                next track: <u>Audion - Mouth to Mouth</u>
              </h2>
            </div>
          </div>
        </div>
      </header>
      <div className="song-board-body">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>top rated track</h2>
              <div className="row">
                <div className="col-6">
                  <h3>track</h3>
                </div>
                <div className="col-6">
                  <h3>artist</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h4>Your mind</h4>
                </div>
                <div className="col-6">
                  <h4>Adam Beyer</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h5>Your mind</h5>
                </div>
                <div className="col-6">
                  <h5>Adam Beyer</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h6>Your mind</h6>
                </div>
                <div className="col-6">
                  <h6>Adam Beyer</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h2>recent track</h2>
              <div className="row">
                <div className="col-3">
                  <h3>played</h3>
                </div>
                <div className="col-9">
                  <h3>track</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <h4>3s</h4>
                </div>
                <div className="col-9">
                  <h4>Protocol - Wehbba</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <h5>4m</h5>
                </div>
                <div className="col-9">
                  <h5>Daddy Cool - Boney M</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <h6>8m</h6>
                </div>
                <div className="col-9">
                  <h6>Daddy Cool - Boney M</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p>14m</p>
                </div>
                <div className="col-9">
                  <p>Daddy Cool - Boney M</p>
                </div>
              </div>
            </div>
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

export default App;

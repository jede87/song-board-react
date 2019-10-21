import React, { Component } from 'react';

export default class TopRatedTracks extends Component {
  render() {
    return (
      <div className="col-6">
        <h2>top rated tracks</h2>
        <div className="row">
          <div className="col-3">
            <h3>votes</h3>
          </div>
          <div className="col-9">
            <h3>track</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h4>59</h4>
          </div>
          <div className="col-9">
            <h4>Your mind - Adam Beyer</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h5>22</h5>
          </div>
          <div className="col-9">
            <h5>Your mind - Adam Beyer</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h6>12</h6>
          </div>
          <div className="col-9">
            <h6>Your mind - Adam Beyer</h6>
          </div>
        </div>
      </div>
    );
  }
}

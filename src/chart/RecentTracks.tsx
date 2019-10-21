import React, { Component } from 'react';

export default class RecentTracks extends Component {
  render() {
    return (
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
    );
  }
}

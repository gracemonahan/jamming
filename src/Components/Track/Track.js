import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if(this.isRemoval === true) {
      return <div onClick={this.removeTrack}>-</div>; //console.log
    } else {
      return <div onClick={this.addTrack}>+</div>;
      }
    }

addTrack() { //fix this

}

removeTrack() { //fix this

}


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        <button className="Track-action">{this.renderAction}</button>
      </div>
    );
  }
}

export default Track;

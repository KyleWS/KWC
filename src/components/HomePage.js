import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="HomePage">
          <h1 className="mobileOnly"> 
            Kyle is building
          </h1>
          <h3>
            Enjoy your stay.
            Certain features not available on mobile.
          </h3>
      </div>
    );
  }
}
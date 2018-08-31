import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Component from './shared/component';
import NavBar from './shared/navbar';

const container = document.getElementById('app');

class SecondPage extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
            <NavBar />
              <div className="container">    
                  <div className="col-md-12">
                      <div>Second Page</div>
                      <Component />
                  </div>
              </div>
          </div>
      );
  }
}

ReactDOM.render(
  <SecondPage />,
  container
);

// module.hot.accept();
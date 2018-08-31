import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Component from './shared/component';
import NavBar from './shared/navbar';


const container = document.getElementById('app');

class MainPage extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
              <div className="container">
                <NavBar />
                  <div className="col-md-12">
                      <div>Main Page</div>
                      <Component />
                  </div>
              </div>
          </div>
      );
  }
}

ReactDOM.render(
  <MainPage />,
  container
);

// module.hot.accept();
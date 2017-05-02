import React  from 'react';
import Header from './commons/Header';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header/>
          <AppRouter/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

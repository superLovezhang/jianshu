import React from 'react';
import Loadable from 'react-loadable';

const Write = Loadable({
  loader: () => import('./'),
  loading: ()=> {
    return <div>Loading</div>
  }
});

export default class App extends React.Component {
  render() {
    return <Write/>;
  }
}
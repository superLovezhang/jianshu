import React from 'react';
import Loadable from 'react-loadable';

const Detail = Loadable({
  loader: ()=> import('./'),
  loading: ()=> {
      return <div>正在记载中,请稍后。。。</div>
  }
});

export default class App extends React.Component {
  render() {
    return <Detail/>;
  }
};
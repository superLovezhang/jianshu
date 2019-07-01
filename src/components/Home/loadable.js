import React from 'react';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: ()=> import('./'),
  loading: ()=> {
      return <div>正在记载中,请稍后。。。</div>
  }
});

// const Board = Loadable({
//   loader: ()=> import('./Board')
// });

// const DownloadApp = Loadable({
//   loader: ()=> import('./DownloadApp')
// });

// const Homelist = Loadable({
//   loader: ()=> import('./Homelist'),
// });

// const RecommedWriter = Loadable({
//   loader: ()=> import('./RecommedWriter'),
// });

export default class App extends React.Component {
  render() {
    return <Home/>
  }
};
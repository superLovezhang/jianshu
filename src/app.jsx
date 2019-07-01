import React, { Fragment } from 'react';
import { HashRouter, Route, Link, Redirect  } from 'react-router-dom';

import Headers from '@/components/Headers/loadable';
import Home from '@/components/Home/loadable';
import Detail from '@/components/Detail/loadable';
import Login from '@/components/Login/loadable';
import Write from '@/components/Write/loadable';


export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <HashRouter>
                    <Headers></Headers>
                    {/* <Redirect to='/Home'></Redirect> */}
                    <Route path="/Home" exact component={Home}></Route>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/Detail/:index" exact component={Detail}></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route path="/Write" component={Write}></Route>
                </HashRouter>
            </Fragment>
        )
    }
}
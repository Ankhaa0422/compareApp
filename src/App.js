import React, { useState } from 'react'
import {
  Nav, INavStyles, INavLinkGroup, initializeIcons
} from '@fluentui/react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import { PageHeader, Button, Descriptions, Menu } from 'antd';
import Zagwar from './view/zagwar/Zagwar';
import Favicon from './unnamed.png'
import Appartment from './view/huudas/Appartment'
import NewtrehHuudas from './view/huudas/NewtrehHuudas';
import './App.css'
import "antd/dist/antd.css"
import { useWindowDimensions } from './view/component/Utilities';

function GolHuudas() {
  const classes = Zagwar()
  const hemjee = useWindowDimensions()
  initializeIcons()
  const [state, setState] = useState({ current: 'mail' });
  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };

  return (
    <Router>
      <div className={classes.Row}>
        <PageHeader
          className={classes.HeaderMenu}
          ghost={false}
          title="HomePare"
          tags={[
            <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
              <Menu.Item key="Appartments">
                <Link to='/appartment'>
                  Appartment
                </Link>
              </Menu.Item>
              <Menu.Item key="Houses">
                <Link to='/house'>
                  House
                </Link>
              </Menu.Item>
            </Menu>
          ]}
          extra={[
            <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
              <Menu.Item key="Favourites">
                <Link to='/favourites'>
                  My Favourites
                </Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to='/login'>
                  Login
                </Link>
              </Menu.Item>
            </Menu>
          ]}
        >
        </PageHeader>
        <Switch>
          <Route exact path="/login" component={NewtrehHuudas} />
          <Route exact path="/appartment" component={Appartment} />
        </Switch>
      </div>
    </Router>
  )
}
export default GolHuudas

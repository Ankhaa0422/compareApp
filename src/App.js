import React, { useState, useContext } from 'react'
import { initializeIcons } from '@fluentui/react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import { PageHeader, Button, Descriptions, Menu } from 'antd';
import Zagwar from './view/zagwar/Zagwar';
import Favicon from './unnamed.png'
import Appartment from './view/huudas/Appartment'
import NewtrehHuudas from './view/huudas/NewtrehHuudas';
import './App.css'
import "antd/dist/antd.css"
import { useWindowDimensions } from './view/component/Utilities';
import House from './view/huudas/House';
import { AguulagchCtx } from './view/aguulagch/Aguulagch';
function GolHuudas() {
  initializeIcons()
  const aguulagchCtx = useContext(AguulagchCtx)
  const classes = Zagwar()
  const hemjee = useWindowDimensions()

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
            <>
              {
                aguulagchCtx.tomState.session.newtersenEseh ?
                  <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
                    <Menu.Item key="Favourites">
                      <Link to='/favourites'>
                        My Favourites
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                      <Link to='/qwsfefdvxcdz'>
                        {aguulagchCtx.tomState.session.KhereglegchiinKhoch}
                      </Link>
                    </Menu.Item>
                  </Menu>
                  :
                  <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
                    <Menu.Item key="login">
                      <Link to='/login'>
                        Login
                      </Link>
                    </Menu.Item>
                  </Menu>
              }
            </>
          ]}
        >
        </PageHeader>
        <Switch>
          <Route exact path="/login" component={NewtrehHuudas} />
          <Route exact path="/appartment" component={Appartment} />
          <Route exact path="/house" component={House} />
        </Switch>
      </div>
    </Router>
  )
}
export default GolHuudas

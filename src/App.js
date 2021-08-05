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
import Logout from './view/component/logout';
import Qwerty from './view/component/keyTanih';
import { AguulagchCtx } from './view/aguulagch/Aguulagch';

function GolHuudas() {
  initializeIcons()
  const aguulagchCtx = useContext(AguulagchCtx)
  const classes = Zagwar()
  const hemjee = useWindowDimensions()
  const SubMenu = Menu
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
            <Menu onClick={handleClick} selectedKeys={[state.current]} style={{ width: '50vw' }} mode="horizontal">
              <Menu.Item key="Appartments">
                <Link to='/appartment'>
                  Орон сууц
                </Link>
              </Menu.Item>
              <Menu.Item key="Houses">
                <Link to='/house'>
                  Байшин
                </Link>
              </Menu.Item>
            </Menu>
          ]}
          extra={[
            <>
              {
                aguulagchCtx.tomState.session.newtersenEseh ?
                  <Menu onClick={handleClick} style={{ width: 'auto', minWidth: '10vw' }} selectedKeys={[state.current]} mode="horizontal">
                    <Menu.Item key="Favourites">
                      <Link to='/favourites'>
                        Таалагдсан
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <Link to='/logout'>
                        Гарах
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
          <Route exact path="/logout" component={Logout} />
        </Switch>
        <Qwerty />
      </div>
    </Router>
  )
}
export default GolHuudas

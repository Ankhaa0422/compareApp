import React, { useState } from 'react'
import { Menu } from 'antd'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { useLocation } from 'react-router'
import Zagwar from './zagwar/Zagwar'
import "antd/dist/antd.css"
import NewtrehHuudas from './huudas/NewtrehHuudas'
import Appartment from './huudas/Appartment'

function GolHuudas() {
 const classes = Zagwar()
 const { SubMenu } = Menu;
 const [state, setState] = useState({
  current: 'Appartments',
 })

 const handleClick = e => {
  console.log('click ', e);
  setState({ current: e.key });
 }

 return (
  <div className={classes.container}>
   <Router>
    <div className={classes.Col12}>

     <Menu onClick={handleClick} className={classes.HeaderMenu} selectedKeys={[state.current]} mode="horizontal" style={{ width: "100%" }}>

      <Menu.Item key="Logo" >
       <Link to="/">
        <b>HomePare</b>
       </Link>
      </Menu.Item>

      <Menu.Item key="Appartments">
       <Link to="/">
        Appartments
       </Link>
      </Menu.Item>

      <Menu.Item key="Houses">
       <Link to="/houses">
        Houses
       </Link>
      </Menu.Item>

      <Menu.Item key="Favourites">
       <Link to="/favourites">
        My Favourites
       </Link>
      </Menu.Item>

      <Menu.Item key="Login">
       <Link to="/login">
        Login
       </Link>
      </Menu.Item>
     </Menu>

     <div className={classes.Col12}>
      <div className={classes.containerFluid}>
       <Switch>
        <Route exact path="/login" component={NewtrehHuudas} />
        <Route exact path="/appartments" component={Appartment} />
        {/* <Route exact path="/calendar" component={TaskCalendar} /> */}
       </Switch>
      </div>
     </div>
    </div>
   </Router>
  </div >
 )
}

export default GolHuudas

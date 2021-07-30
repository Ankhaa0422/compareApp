import React from 'react'
import {
 Label, Pivot, PivotItem, ICommandBarItemProps,
 CommandBar, IButtonProps, initializeIcons
} from '@fluentui/react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router';
import Zagwar from './zagwar/Zagwar';
import Favicon from '../unnamed.png'
import Appartment from './huudas/Appartment';
import NewtrehHuudas from './huudas/NewtrehHuudas';

function GolHuudas() {
 const classes = Zagwar()
 let history = useHistory()
 const routes = {

 }

 initializeIcons()
 const menuBaruun: ICommandBarItemProps[] = [
  {
   key: 'share',
   text: 'Таалагдсан',
   accessKey: '/favourited',
   name: '/favourited',
   iconProps: { iconName: 'Heart' },
   href: '/favourited'
  },
  {
   key: 'download',
   accessKey: NewtrehHuudas,
   name: '/login',
   text: 'Нэвтрэх',
   iconProps: { iconName: 'Signin' },
   href: '/login'
  },
 ];

 const menuZvvn: ICommandBarItemProps[] = [
  {
   key: 'share',
   text: 'Байр',
   href: '/appartment'
  },
  {
   key: 'download',
   text: 'Байшин',
   href: '/house'
  },
 ];

 function pivotDarah(item) {
  const zam = item
  console.log(zam)
  // return (
  //  <Switch>
  //   <Route exact path="/appartments" component={Appartment} />
  //  </Switch>
  // )

 }

 return (
  <div className={classes.containerFluid}>
   <Router>
    <div className={`${classes.Row} ${classes.HeaderMenu}`}>
     <div className={classes.Col2}>
      <div className={`${classes.Logo}`}>
       <img src={Favicon} />
       <h2 className={classes.Logo}>HomePare</h2>
      </div>
     </div>
     <div className={classes.Col5}>
      <CommandBar
       style={{ height: '43px' }}
       items={menuZvvn}
       ariaLabel="Use left and right arrow keys to navigate between commands"
      />
      {/* <Pivot
       headersOnly
       aria-label="Large Link Size Pivot"
       onClick={pivotDarah}
       style={{ width: "100%" }}>
       <PivotItem headerText="Appartments">
        <Appartment />
       </PivotItem>
       <PivotItem headerText="House" itemKey="/house" name="/house">
       </PivotItem>
      </Pivot> */}
     </div>
     <div className={classes.Col5}>
      <CommandBar
       style={{ height: '43px' }}
       farItems={menuBaruun}
       ariaLabel="Use left and right arrow keys to navigate between commands"
      />
     </div>
    </div>
    <div className={classes.Row}>
     <div className={classes.Col12}>
      <Switch>
       <Route exact path="/login" component={NewtrehHuudas} />
       <Route exact path="/appartment" component={Appartment} />
      </Switch>
     </div>
    </div>
   </Router>
  </div >
 )
}
export default GolHuudas

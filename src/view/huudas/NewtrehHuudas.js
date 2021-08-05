import React from 'react'
import Zagwar from '../zagwar/Zagwar'
import '../../App.css'
import { useWindowDimensions } from '../component/Utilities'
import { TextField, initializeIcons, PrimaryButton, ActionButton } from '@fluentui/react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { AguulagchCtx } from '../aguulagch/Aguulagch';



function NewtrehHuudas() {
 initializeIcons()
 const aguulagchCtx = React.createContext(AguulagchCtx)
 const Hemjee = useWindowDimensions()
 const classes = Zagwar()
 const LgnBtnClick = (e) => {
  alert("Login Button Clicked")
 }

 const mouseDownHandler = (event) => {
  if (event.button === 2) {
   console.log(aguulagchCtx)
  }
 }

 return (
  <div className={classes.NewtrehHuudas} onMouseDown={mouseDownHandler} style={{ height: Hemjee.height - 46, width: Hemjee.width }}>
   <div className={classes.Row}>
    <div className={`${classes.Col12}`}>
     <div className={classes.NewtrehCard}>
      <h3 className={classes.NewtrehCardTitle}>HomePare</h3>
      <div>
       <TextField
        label="UserName or Email"
        placeholder='UserName or Email'
        onChange={e => aguulagchCtx.shalgalt(e)}
       />
       <TextField
        label="Password"
        type="password"
        canRevealPassword
        placeholder='Password'
        revealPasswordAriaLabel="Show password"
       />
       <div className={`${classes.NewtrehBtnSection} ${classes.Col12}`}>
        <PrimaryButton type='submit' text="Login" onClick={e => LgnBtnClick(e)} allowDisabledFocus className={classes.NewtrehBtn} />
       </div>
       <div className={`${classes.NewtrehCardFooter} ${classes.Col12}`}>
        <ActionButton iconProps={'AddFriend'} allowDisabledFocus>
         Create account
        </ActionButton>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default NewtrehHuudas

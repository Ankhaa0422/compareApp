import React, { useState, useContext } from 'react'
import Zagwar from '../zagwar/Zagwar'
import '../../App.css'
import { useWindowDimensions } from '../component/Utilities'
import { TextField, initializeIcons, PrimaryButton, ActionButton } from '@fluentui/react'
import { AguulagchCtx } from '../aguulagch/Aguulagch'
import { Redirect, useHistory } from 'react-router-dom'
import { Alert, message } from 'antd'

function NewtrehHuudas() {
 initializeIcons()
 const history = useHistory()
 const aguulagchCtx = useContext(AguulagchCtx)
 const Hemjee = useWindowDimensions()
 const classes = Zagwar()
 const [state, setState] = useState({
  khereglegchNer: '',
  khereglegchPassword: '',
 })

 const LgnBtnClick = (e) => {
  if (state.khereglegchNer === null || state.khereglegchNer === undefined || state.khereglegchNer === '') {
   error('Хэрэглэгчийн нэрээ оруулна уу')
  } else if (state.khereglegchPassword === null || state.khereglegchPassword === undefined || state.khereglegchPassword === '') {
   error('Хэрэглэгчийн нууц үгээ оруулна уу')
  } else {
   console.log(aguulagchCtx.tomState.khereglegchData)
   aguulagchCtx.tomState.khereglegchData.map((e, i) => {
    if (e.khereglegchKhoch === state.khereglegchNer && e.khereglegchPassword === state.khereglegchPassword) {
     aguulagchCtx.setTomState(tom => {
      tom = { ...tom }
      tom.session.newtersenEseh = true;
      tom.session.KhereglegchiinKhoch = state.khereglegchNer
      return tom
     })
     return history.push('/appartment')
    }
   })
  }


 }

 const error = (medee) => {
  message.error(medee);
 };

 const onChange = (e) => {
  setState(state => {
   state = { ...state }
   state[e.target.name] = e.target.value
   return state
  })
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
        name="khereglegchNer"
        onChange={e => onChange(e)}
       />
       <TextField
        label="Password"
        type="password"
        name="khereglegchPassword"
        canRevealPassword
        onChange={e => onChange(e)}
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

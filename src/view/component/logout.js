import { useHistory } from "react-router-dom"
import React, { useContext } from 'react'
import { AguulagchCtx } from "../aguulagch/Aguulagch"

function Logout() {
 const aguulagchCtx = useContext(AguulagchCtx)
 const history = useHistory()
 aguulagchCtx.setTomState(tom => {
  tom = { ...tom }
  tom.session.newtersenEseh = false;
  tom.session.KhereglegchiinKhoch = null
  return tom
 })
 history.push('/appartment')

}

export default Logout

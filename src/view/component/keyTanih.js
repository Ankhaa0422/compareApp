import React, { useState, CSSProperties } from 'react'
import tinykeys from 'tinykeys'
import { Fireworks, FireworksOptions } from 'fireworks-js';
import { message, Modal } from 'antd'

export default function Qwerty() {

 const [haragdah, setHaragdah] = useState(false);
 tinykeys(window, {
  "f i r e w o r k": () => {
   Haruulah()
  }
 })
 const Haruulah = () => {
  setHaragdah(!haragdah);
 };

 const Gargah = () => {
  setHaragdah(!haragdah);
 };

 const options = {
  speed: 3,
  mouse: {
   max: 3,
   move: false,
   click: true
  }
 }

 const style = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  position: 'fixed',
  background: 'transparent',
  zIndex: '3',
  transition: '2s ease-in',
 }
 return (
  <>
   {
    haragdah
     ?
     <div style={style} onClick={Gargah}>
      < div className="pyro" >
       <div className="before"></div>
       <div className="after"></div>
      </div >
     </div > :
     null
   }
  </>
 )


}

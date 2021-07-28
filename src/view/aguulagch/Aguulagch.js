import React, { createContext, useState } from 'react'
import GolHuudas from '../GolHuudas'

export const AguulagchCtx = createContext()

function Aguulagch() {
 const [tomState, setTomState] = useState({})
 return (
  <AguulagchCtx.Provider>
   <GolHuudas />
  </AguulagchCtx.Provider>
 )
}

export default Aguulagch

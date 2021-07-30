import React, { createContext, useState } from 'react'
import GolHuudas from '../GolHuudas'
import App from '../../App'

export const AguulagchCtx = createContext()

function Aguulagch(props) {
 const [tomState, setTomState] = useState({
  sad: 'null',
 })

 function shalgalt(e) {
  setTomState((tom) => {
   tom = { ...tom }
   tom.sad = e.target.value
   return tom
  })
  console.log(tomState.sad)
 }

 const [toggledTovch, setToggledTovch] = React.useState({
  tovch: {
   'Amenities': {
    songoson: false,
   },
   'Location': {
    songoson: false,
   },
   'Meals': {
    songoson: false,
   },
   'Food Area': {
    songoson: false,
   },
   'Bedrooms': {
    songoson: false,
   },
   'Bathrooms': {
    songoson: false,
   },
   'Max number of people': {
    songoson: false,
   },
   'Dining': {
    songoson: false,
   },
   'Entertainment': {
    songoson: false,
   },
   'Floor': {
    songoson: false,
   },
   'Outside': {
    songoson: false,
   },
  }
 }
 )

 const SongohFunction = e => {
  // setToggledTovch((toggled) => {
  //  toggled.tovch[e.target.innerText].songoson = !toggled.tovch[e.target.innerText].songoson
  //  return toggled
  // })
  const tvrAwah = { ...toggledTovch }
  tvrAwah.tovch[e.target.innerText].songoson = !tvrAwah.tovch[e.target.innerText].songoson
  setToggledTovch(tvrAwah)
  console.log(e.target.innerText, ': ', toggledTovch.tovch[e.target.innerText])
  console.log(toggledTovch)
 }

 return (
  <AguulagchCtx.Provider value={{ shalgalt, toggledTovch, SongohFunction, tomState, setTomState }}>
   <App props={props} />
  </AguulagchCtx.Provider>
 )
}

export default Aguulagch

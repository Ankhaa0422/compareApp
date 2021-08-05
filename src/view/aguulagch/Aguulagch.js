import React, { createContext, useState } from 'react'
import App from '../../App'
import { baishinData } from './baishinData'
import { khereglegch } from './khereglegch'
export const AguulagchCtx = createContext()

function Aguulagch(props) {
 const [tomState, setTomState] = useState({
  sad: 'null',
  baishinData: baishinData,
  khereglegchData: khereglegch,
  session: {
   newtersenEseh: false,
   KhereglegchiinKhoch: null,
  }
 })

 function shalgalt(e) {
  setTomState((tom) => {
   tom = { ...tom }
   tom.sad = e.target.value
   return tom
  })
  console.log(tomState.sad)
 }
 const [songogdson, setSongogdson] = useState([])
 const [toggledTovch, setToggledTovch] = React.useState({
  tovch: {
   'price': {
    id: 'price',
    songoson: true,
   },
   'Bedrooms': {
    id: 'bedroom',
    songoson: true,
   },
   'Bathrooms': {
    id: 'bathroom',
    songoson: true,
   },
   'Max number of people': {
    id: 'maxPeople',
    songoson: true,
   },
   'Dining': {
    id: 'dining',
    songoson: false,
   },
   'Entertainment': {
    id: 'entertainment',
    songoson: false,
   },
   'Floor': {
    id: 'floor',
    songoson: false,
   },
   'Outside': {
    id: 'outside',
    songoson: false,
   },
   'Amenities': {
    id: 'amenities',
    songoson: false,
   },
   'Location': {
    id: 'location',
    songoson: true,
   },
   'Meals': {
    id: 'meals',
    songoson: false,
   },
   'Food Area': {
    id: 'foodArea',
    songoson: false,
   },
  }
 }
 )



 const [columns, setColumns] = useState([])

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

 const cardSongoh = (e) => {
  const tvrAwah = tomState.baishinData
  tvrAwah[Number(e.target.accessKey)].checked = !tvrAwah[Number(e.target.accessKey)].checked
  setTomState((tom) => {
   tom = { ...tom }
   tomState.baishinData = tvrAwah
   return tom
  })
 }

 return (
  <AguulagchCtx.Provider value={{ shalgalt, toggledTovch, cardSongoh, songogdson, setSongogdson, SongohFunction, tomState, setTomState, columns, setColumns }}>
   <App props={props} />
  </AguulagchCtx.Provider>
 )
}

export default Aguulagch

import React from 'react'
import { Label, Pivot, PivotItem } from '@fluentui/react';
import Zagwar from './zagwar/Zagwar';

function GolHuudas() {
 const classes = Zagwar()
 return (
  <div className={classes.container}>
   <div className={classes.Row} style={{ alignContent: "center", }}>
    <div className={`${classes.Logo} ${classes.Row}`}>
     <img src="https://lh3.googleusercontent.com/proxy/TmUdHslslw-aIlMU6ys_mwaWJvSKUEysj_2du_SwTVG1WZ11-LQivv3co1rvOKETfeoh7IcYL50i8cwyGYDXtRRqXbTl6GdmMx9_M7UT7UhIkMIxyGjIKuMRzdxUN5NAUeEhGlsMhOTu1_jkd-a6nQw" />
     <h2 className={classes.Logo}>Logo</h2>
    </div>
    <Pivot aria-label="Large Link Size Pivot Example" linkSize="large" style={{ width: "100%" }}>
     <h2>HomePare</h2>
     <PivotItem headerText="My Files">
     </PivotItem>
     <PivotItem headerText="Recent">
     </PivotItem>
     <PivotItem headerText="Shared with me">
     </PivotItem>
    </Pivot>
   </div>
  </div >
 )
}

export default GolHuudas

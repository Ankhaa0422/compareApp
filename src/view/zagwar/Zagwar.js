import { makeStyles } from "@fluentui/react";
const Zagwar = makeStyles({
 container: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 containerFluid: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 containerXxl: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 containerXl: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 containerLg: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 containerMd: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 containerSm: {
  width: '100%',
  paddingRight: "var(--bs - gutter - x, 0.75rem)",
  paddingLeft: " var(--bs - gutter - x, 0.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
 },

 '@media(min-width: 576px)': {
  container: {
   maxWidth: '540px',
  },
  containerSm: {
   maxWidth: '540px',
  },
 },
 '@media(min-width: 768px)': {
  containerMd: {
   maxWidth: '720px',
  },
  containerSm: {
   maxWidth: '720px',
  },
  container: {
   maxWidth: '720px',
  }
 },
 '@media(min-width: 992px)': {
  containerLg: {
   maxWidth: '960px',
  },
  containerMd: {
   maxWidth: '960px',
  },
  containerSm: {
   maxWidth: '960px',
  },
  container: {
   maxWidth: '960px',
  }
 },
 '@media(min-width: 1200px)': {
  containerXl: {
   maxWidth: '1140px',
  },
  containerLg: {
   maxWidth: '1140px',
  },
  containerMd: {
   maxWidth: '1140px',
  },
  containerSm: {
   maxWidth: '1140px',
  },
  container: {
   maxWidth: '1140px',
  }
 },
 '@media(min-width: 1400px)': {
  containerXxl: {
   maxWidth: '1320px',
  },
  containerXl: {
   maxWidth: '1320px',
  },
  containerLg: {
   maxWidth: '1320px',
  },
  containerMd: {
   maxWidth: '1320px',
  },
  containerSm: {
   maxWidth: '1320px',
  },
  container: {
   maxWidth: '1320px',
  }
 },

 Row: {
  '--bs-gutter-x': '1.5rem',
  '--bs-gutter-y': '0',
  display: 'flex',
  flexWrap: 'wrap',

 },
 '.Row-65 > *': {
  flexShrink: 0,
  width: "100%",
  maxWidth: "100%",
  paddingRight: "calc(var(--bs-gutter-x) / 2)",
  paddingLeft: "calc(var(--bs-gutter-x) / 2)",
  marginTop: "var(--bs-gutter-y)"
 },
 Col: {
  flex: '1 0 0%',
 },

 ColAuto: {
  flex: '0 0 auto',
  width: 'auto',
 },

 Col1: {
  flex: '0 0 auto',
  width: '8.3333333333%',
 },

 Col2: {
  flex: '0 0 auto',
  width: '16.6666666667%',
 },

 Col3: {
  flex: '0 0 auto',
  width: '25%',
 },

 Col4: {
  flex: '0 0 auto',
  width: '33.3333333333%',
 },

 Col5: {
  flex: '0 0 auto',
  width: '41.6666666667%',
 },

 Col6: {
  flex: '0 0 auto',
  width: '50%',
 },

 Col7: {
  flex: '0 0 auto',
  width: '58.3333333333%',
 },

 Col8: {
  flex: '0 0 auto',
  width: '66.6666666667%',
 },

 Col9: {
  flex: '0 0 auto',
  width: '75%',
 },

 Col10: {
  flex: '0 0 auto',
  width: '83.3333333333 %',
 },

 Col11: {
  flex: '0 0 auto',
  width: '91.6666666667%',
 },

 Col12: {
  flex: '0 0 auto',
  width: '100%',
 },

 '@media(min-width: 576px)': {
  ColSm: {
   flex: '1 0 0%',
  },

  ColSmAuto: {
   flex: '0 0 auto',
   width: 'auto',
  },

  ColSm1: {
   flex: '0 0 auto',
   width: '8.3333333333%',
  },

  ColSm2: {
   flex: '0 0 auto',
   width: '16.6666666667%',
  },

  ColSm3: {
   flex: '0 0 auto',
   width: '25%',
  },

  ColSm4: {
   flex: '0 0 auto',
   width: '33.3333333333%',
  },

  ColSm5: {
   flex: '0 0 auto',
   width: '41.6666666667%',
  },

  ColSm6: {
   flex: '0 0 auto',
   width: '50%',
  },

  ColSm7: {
   flex: '0 0 auto',
   width: '58.3333333333%',
  },

  ColSm8: {
   flex: '0 0 auto',
   width: '66.6666666667%',
  },

  ColSm9: {
   flex: '0 0 auto',
   width: '75%',
  },

  ColSm10: {
   flex: '0 0 auto',
   width: '83.3333333333 %',
  },

  ColSm11: {
   flex: '0 0 auto',
   width: '91.6666666667%',
  },

  ColSm12: {
   flex: '0 0 auto',
   width: '100%',
  },
 },

 '@media(min-width: 768px)': {
  ColMd: {
   flex: '1 0 0%',
  },

  ColMdAuto: {
   flex: '0 0 auto',
   width: 'auto',
  },

  ColMd1: {
   flex: '0 0 auto',
   width: '8.3333333333%',
  },

  ColMd2: {
   flex: '0 0 auto',
   width: '16.6666666667%',
  },

  ColMd3: {
   flex: '0 0 auto',
   width: '25%',
  },

  ColMd4: {
   flex: '0 0 auto',
   width: '33.3333333333%',
  },

  ColMd5: {
   flex: '0 0 auto',
   width: '41.6666666667%',
  },

  ColMd6: {
   flex: '0 0 auto',
   width: '50%',
  },

  ColMd7: {
   flex: '0 0 auto',
   width: '58.3333333333%',
  },

  ColMd8: {
   flex: '0 0 auto',
   width: '66.6666666667%',
  },

  ColMd9: {
   flex: '0 0 auto',
   width: '75%',
  },

  ColMd10: {
   flex: '0 0 auto',
   width: '83.3333333333 %',
  },

  ColMd11: {
   flex: '0 0 auto',
   width: '91.6666666667%',
  },

  ColMd12: {
   flex: '0 0 auto',
   width: '100%',
  },
 },

 '@media(min-width: 992px)': {
  ColLg: {
   flex: '1 0 0%',
  },

  ColLgAuto: {
   flex: '0 0 auto',
   width: 'auto',
  },

  ColLg1: {
   flex: '0 0 auto',
   width: '8.3333333333%',
  },

  ColLg2: {
   flex: '0 0 auto',
   width: '16.6666666667%',
  },

  ColLg3: {
   flex: '0 0 auto',
   width: '25%',
  },

  ColLg4: {
   flex: '0 0 auto',
   width: '33.3333333333%',
  },

  ColLg5: {
   flex: '0 0 auto',
   width: '41.6666666667%',
  },

  ColLg6: {
   flex: '0 0 auto',
   width: '50%',
  },

  ColLg7: {
   flex: '0 0 auto',
   width: '58.3333333333%',
  },

  ColLg8: {
   flex: '0 0 auto',
   width: '66.6666666667%',
  },

  ColLg9: {
   flex: '0 0 auto',
   width: '75%',
  },

  ColLg10: {
   flex: '0 0 auto',
   width: '83.3333333333 %',
  },

  ColLg11: {
   flex: '0 0 auto',
   width: '91.6666666667%',
  },

  ColLg12: {
   flex: '0 0 auto',
   width: '100%',
  },
 },

 '@media(min-width: 1200px)': {
  ColXl: {
   flex: '1 0 0%',
  },

  ColXlAuto: {
   flex: '0 0 auto',
   width: 'auto',
  },

  ColXl1: {
   flex: '0 0 auto',
   width: '8.3333333333%',
  },

  ColXl2: {
   flex: '0 0 auto',
   width: '16.6666666667%',
  },

  ColXl3: {
   flex: '0 0 auto',
   width: '25%',
  },

  ColXl4: {
   flex: '0 0 auto',
   width: '33.3333333333%',
  },

  ColXl5: {
   flex: '0 0 auto',
   width: '41.6666666667%',
  },

  ColXl6: {
   flex: '0 0 auto',
   width: '50%',
  },

  ColXl7: {
   flex: '0 0 auto',
   width: '58.3333333333%',
  },

  ColXl8: {
   flex: '0 0 auto',
   width: '66.6666666667%',
  },

  ColXl9: {
   flex: '0 0 auto',
   width: '75%',
  },

  ColXl10: {
   flex: '0 0 auto',
   width: '83.3333333333 %',
  },

  ColXl11: {
   flex: '0 0 auto',
   width: '91.6666666667%',
  },

  ColXl12: {
   flex: '0 0 auto',
   width: '100%',
  },
 },

 '@media(min-width: 1400px)': {
  ColXxl: {
   flex: '1 0 0%',
  },

  ColXxlAuto: {
   flex: '0 0 auto',
   width: 'auto',
  },

  ColXxl1: {
   flex: '0 0 auto',
   width: '8.3333333333%',
  },

  ColXxl2: {
   flex: '0 0 auto',
   width: '16.6666666667%',
  },

  ColXxl3: {
   flex: '0 0 auto',
   width: '25%',
  },

  ColXxl4: {
   flex: '0 0 auto',
   width: '33.3333333333%',
  },

  ColXxl5: {
   flex: '0 0 auto',
   width: '41.6666666667%',
  },

  ColXxl6: {
   flex: '0 0 auto',
   width: '50%',
  },

  ColXxl7: {
   flex: '0 0 auto',
   width: '58.3333333333%',
  },

  ColXxl8: {
   flex: '0 0 auto',
   width: '66.6666666667%',
  },

  ColXxl9: {
   flex: '0 0 auto',
   width: '75%',
  },

  ColXxl10: {
   flex: '0 0 auto',
   width: '83.3333333333 %',
  },

  ColXxl11: {
   flex: '0 0 auto',
   width: '91.6666666667%',
  },

  ColXxl12: {
   flex: '0 0 auto',
   width: '100%',
  },
 },

 Logo: {
  height: '47px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  background: '#fff',

  "& img": {
   width: "auto",
   height: "100%",
   marginTop: "-5px",
  },
  textAlign: "center",
  alignItems: "center",
 },

 HeaderMenu: {
  position: "fixed",
  alignItems: "center",
  height: "46px",
  width: '100%',
  top: "0",
  padding: '0px 24px !important',
  borderBottom: "1px solid #f0f0f0",
  "&:after": {
   content: '""',
   position: "relative",
   height: "20px",
   width: "100%",
  },
 },

 HuudasRender: {
  width: '100%'
 },

 NewtrehHuudas: {
  background: "url(https://images3.alphacoders.com/290/thumb-1920-29025.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "fixed",
  display: 'flex',
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
 },

 NewtrehCard: {
  position: 'relative',
  width: '350px',
  height: 'auto',
  padding: '12px 15px',
  background: 'rgba(255, 255, 255, 0.35)',
  boxShadow: '0 4px 12px 0 #D3D3D3',
  backdropFilter: 'blur( 3px)',
  webkitBackdropFilter: 'blur(3px)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
 },

 NewtrehCardTitle: {
  textAlign: 'center',
  fontSize: '23px',
  fontWeight: '700',
 },

 NewtrehBtnSection: {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
 },

 NewtrehBtn: {
  width: '250px',
  marginTop: '10px',
 },

 ShilenEffect: {
  background: 'rgba(255, 255, 255, 0.35)',
  boxShadow: '0 4px 12px 0 #D3D3D3',
  backdropFilter: 'blur( 3px)',
  webkitBackdropFilter: 'blur(3px)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
 },

 NewtrehCardFooter: {
  display: 'flex',
  borderTop: '1px solid #D3D3D3',
  marginTop: '10px',
  color: '#036ffc',
  justifyContent: 'center',
  alignContent: 'center',
 },

 FloatingRight: {
  float: 'right',
 },

 TovchZagwar: {
  margin: '12px 6px !important',
  marginTop: '0px',
 },

 hvsnegt: {
  width: '100%',
 },

 hvsnegTolgoi: {

  '& tr:nth-child(odd)': {
   border: 'none',
   background: '#48755e',
   '& th': {
    padding: '12px',
   }
  },
  '& tr': {
   background: '#71a68b',
   color: '#FFF',
   borderBottom: '2px solid #DDDDDD',
   '& th': {
    padding: '12px',
    paddingTop: '15px',
    fontSize: '13px',
    paddingBottom: '15px',
    fontWeight: '600',
    textAlign: 'left',
   }
  },
 },

 hvsnegtBiye: {
  '& tr': {
   background: '#FFF',
   cursor: 'normal',
   borderBottom: '1px solid #DDDDDD',
   '& td': {
    padding: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'left',
   },
  },
  '& tr:nth-child(even)': {
   background: '#f5e9e9',
  },
  '& tr:hover': {
   borderBottom: '1px solid #00a2ff',
  },
 },

 textGolloh: {
  textAlign: 'center !important',
 },

 clickableCard: {
  position: 'relative',
  display: 'block',
  transition: '0.3s ease-in',
  '&::before': {
   content: '""',
   position: 'absolute',
   width: '238px',
   height: '100%',
   zIndex: '1',
  },
  '&:hover': {
   boxShadow: '0px 3px 8px -4px #03f8ec',
   transition: '0.3s ease-in',
   '.ant-card': {
   },
  }
 },
 cardCheckBox: {
  float: 'right',
  height: '16px !important',
  width: '16px !important',
  minWidth: '16px !important',
  margin: '6px 0 !important',
  fontSize: '8px !important',
 },

 HaritsuulahHeseg: {
  position: 'relative',
  width: '100%',
  height: '700px',
 },

 compareHeader: {
  top: '0',
  position: 'sticky',
  height: '338px',
  background: '#fff',
  borderBottom: '1px solid #dfdfdf',
 },
 NemekhBtnZone: {
  width: '200px',
  height: '338px',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  textAlign: 'center !important',
  backgroundColor: '#F5F5F5',
  boxShadow: '2px 2px 8px 0 #d3d3d3 !important',
  '& ::before': {
   content: '""',
   boxShadow: '2px 2px 8px 0 #d3d3d3'
  },
 },

 cardBairlah: {
  // display: 'inline-block',
  height: '360px',
  borderBottom: '1px solid #DEDEDE',
  overflowX: 'auto',
  overflowY: 'hidden',
 },

 HaritsuulahHesegCard: {
  display: 'inline-block',
 },

 muriinTolgoi: {
  width: '248px',
  height: '50px',
  marginLeft: '50px',
  position: 'relative',
  textAlign: 'left !imporant',
  justifyContent: 'left',
  alignContent: 'left',
  background: '#FFFFFF !important',
  '& .muriinGarchig': {
   width: '100%',
   height: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   alignItems: 'center',
   textAlign: 'left'
  },
  '& .MuriinKhoch': {
   position: 'relative'
  },
 },
 ModalRow: {
  justifyContent: 'center',
  alignContent: 'center',
 },
});
export default Zagwar;
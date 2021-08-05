import React, { useContext, useState, useEffect, } from 'react'
import { AguulagchCtx } from '../aguulagch/Aguulagch'
import { Button, Collapse, Tooltip, Card, Modal } from 'antd'
import Zagwar from '../zagwar/Zagwar'
import { FilterOutlined, MenuOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons'
import '../../App.css'
import "antd/dist/antd.css"
import { sortableHandle } from 'react-sortable-hoc';
import { useWindowDimensions } from '../component/Utilities'
import Table from 'react-bootstrap/Table'

function House() {
  const hemjee = useWindowDimensions()
  const btnRef = React.useRef()
  const { Meta } = Card;
  const AntCell = 'ant-table-cell'
  const Tbody = 'ant-table-tbody'
  const aguulagchCtx = useContext(AguulagchCtx)
  const classes = Zagwar()
  const { Panel } = Collapse
  const [shvvhTovch, setShvvhTovch] = React.useState(false)

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const data = []
    console.log(aguulagchCtx.tomState.baishinData)
    aguulagchCtx.tomState.baishinData.map((x, i) => {
      aguulagchCtx.songogdson.map((n, m) => {
        if (Number(n) === i) {
          if (x.turul === 'house') {
            data.push({
              title: <Card
                style={{ width: 242, margin: '12px 14px' }}
                title={<b>{x.barilgaNer}</b>}
                cover={
                  <img
                    src={x.zurag}
                  />
                }
                actions={[
                  <Button type='link' key="detail">More details</Button>
                ]}
              >
                <Meta
                  title={<b>${x.price} &nbsp;<button className='ant-btn ant-btn-sm' color="magenta" style={{ borderRadius: '20px', padding: '0px 16px' }}>book</button></b>}
                  description="Twenty-five square meter studio on fifth floor with lift an old building..."
                />
              </Card>,
              dataIndex: x.id,
              fixed: 'top',
              width: 242,
              turul: x.turul,
            })
            aguulagchCtx.setColumns(data)
          }
        }
      })
    })
  }, [aguulagchCtx.songogdson])

  const modalHaah = () => {
    const list = []
    aguulagchCtx.tomState.baishinData.map((x, i) => {
      if (x.checked) {
        list.push(String(i))
      }
    })
    aguulagchCtx.setSongogdson(list)
    setVisible(false);
  }

  const cardSongoh = (e) => {
    debugger;
    aguulagchCtx.setTomState((tom) => {
      tom = { ...tom }
      const baishinData = aguulagchCtx.tomState.baishinData
      aguulagchCtx.tomState.baishinData[Number(e.target.accessKey)].checked = !aguulagchCtx.tomState.baishinData[Number(e.target.accessKey)].checked
      return tom
    })
  }

  const filterTovch = () => {
    return (
      <Tooltip placement="bottom" title='Filter'>
        <Button
          shape='circle'
          onClick={e => {
            setShvvhTovch(!shvvhTovch)
          }}
          type={!shvvhTovch ? 'default' : 'primary'}
          icon={<FilterOutlined />}
        />
      </Tooltip>
    )
  }
  return (
    <div className={classes.HuudasRender}>

      <div className={classes.Row}>
        <div className={classes.Col12}>
          <Collapse
            ghost
            activeKey={!shvvhTovch ? '0' : '1'}
            style={{ width: '100%', borderBottom: '1px solid #f0f0f0', padding: '18px 30px' }}>
            <Panel
              header="Compare House"
              key="1"
              collapsible='header'
              showArrow={false}
              extra={filterTovch()}>
              <div className={classes.Row}>
                {
                  Object.keys(aguulagchCtx.toggledTovch.tovch).map((x, i) => {
                    return (
                      <Button ref={btnRef}
                        size='small'
                        onClick={aguulagchCtx.SongohFunction}
                        accessKey={String(aguulagchCtx.toggledTovch.tovch[x].songoson)}
                        type={!aguulagchCtx.toggledTovch.tovch[x].songoson ? 'default' : 'primary'}
                        className={classes.TovchZagwar}>
                        {x}
                      </Button>
                    )
                  })
                }

              </div>
            </Panel>
          </Collapse>
        </div>
        <div style={{ margin: '24px 30px', width: hemjee.width - 65, overflowY: 'auto' }}>
          <Table responsive >
            <thead className='ant-table-thead' style={{ position: 'sticky', top: '0', zIndex: 2 }}>
              <tr style={{ backgroundColor: '#F5F5F5' }}>
                <th className={`${classes.NemekhBtnZone} ${AntCell}`} style={{ position: 'sticky', left: 0, zIndex: 2 }}><Button shape='circle' type='primary' icon={<PlusOutlined />} onClick={e => setVisible(true)} /></th>
                {
                  aguulagchCtx.columns.map((row, index) => {
                    return (
                      <>
                        {
                          row.turul === 'house' &&
                          <th className={`${classes.cardBairlah} ${AntCell}`}>
                            {row.title}
                          </th>
                        }
                      </>
                    )
                  })
                }
              </tr>
            </thead>
            {
              aguulagchCtx.columns.length > 1 &&
              <tbody className={`${classes.hvsnegtBiye} ${Tbody}`} style={{ overflowY: 'scroll' }}>
                {
                  Object.keys(aguulagchCtx.toggledTovch.tovch).map((row, index) => {
                    return (
                      <>
                        {
                          aguulagchCtx.toggledTovch.tovch[row].songoson ?
                            <tr data-row-key={index} className={classes.hvsnegtMur}>
                              <th
                                className={`${classes.muriinTolgoi} ${AntCell}`}
                                style={{ position: 'sticky', left: 0, zIndex: 1 }}>
                                <div className='muriinGarchig'>
                                  <MenuOutlined style={{ cursor: 'grab', color: '#999' }} /> &nbsp;&nbsp;<span className="MuriinKhoch">{row}</span>
                                </div>
                              </th>
                              {
                                aguulagchCtx.tomState.baishinData.map((mur, idx) => {
                                  return (
                                    <>
                                      {
                                        aguulagchCtx.columns.map((col, i) => {
                                          const key = Object.keys(mur)
                                          return (
                                            <>
                                              {
                                                mur.id === col.dataIndex && mur.turul === 'house' &&
                                                <td className={`${classes.textGolloh} ${AntCell}`} style={{ width: '270px' }}><b>{mur[aguulagchCtx.toggledTovch.tovch[row].id]}</b></td>
                                              }
                                            </>
                                          )
                                        })
                                      }
                                    </>
                                  )
                                })
                              }
                            </tr> : null
                        }
                      </>
                    )
                  })
                }
              </tbody>
            }
          </Table>
        </div>
      </div>
      <Modal
        title="Choose Houses"
        centered
        visible={visible}
        onCancel={modalHaah}
        width={1000}
        footer={[]}
        maskClosable={false}
      >
        <div className={classes.Row}>
          {
            aguulagchCtx.tomState.baishinData.map((x, i) => {
              return (
                <>
                  {
                    x.turul === 'house' &&
                    <div className={classes.Col3} style={{ margin: '12px 14px' }}>
                      <div
                        onClick={aguulagchCtx.cardSongoh}
                        accessKey={i}
                        checked={x.checked}
                        className={classes.clickableCard}
                      >
                        <Card
                          style={{ width: 238 }}
                          title={<b>{x.barilgaNer}<Button className={classes.cardCheckBox} shape="circle" size='small' icon={<CheckOutlined />} type={x.checked ? 'primary' : 'default'} /></b>}
                          cover={
                            <img
                              src={x.zurag}
                            />
                          }
                          className={x.checked ? 'cardActive' : null}
                          actions={[
                            <Button type='link' key="detail">More details</Button>
                          ]}
                        >
                          <Meta
                            title={<b>${x.price}</b>}
                            description="Twenty-five square meter studio on fifth floor with lift an old building..."
                          />
                        </Card>
                      </div>
                    </div>
                  }
                </>
              )
            })
          }
        </div>
      </Modal>
    </div >
  )
}

export default House

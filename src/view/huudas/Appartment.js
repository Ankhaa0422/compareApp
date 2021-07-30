import React, { useContext } from 'react'
import { AguulagchCtx } from '../aguulagch/Aguulagch'
import { Button, Collapse, Tooltip, Table, Card, Tag } from 'antd'
import Zagwar from '../zagwar/Zagwar'
import { FilterOutlined, MenuOutlined, PlusOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import '../../App.css'
import "antd/dist/antd.css"
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { useWindowDimensions } from '../component/Utilities'

function Appartment() {
 const hemjee = useWindowDimensions()
 const btnRef = React.useRef()
 const { Meta } = Card;
 const DragHandle = sortableHandle(() => {
  return (
   <div>
    <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />
    {
     Object.keys(aguulagchCtx.toggledTovch.tovch).map((x, i) => {
      return (
       <b>{x}</b>
      )
     })
    }
   </div>
  )
 })

 const data = [
  {
   key: '1',
   ASDASDASD: <DragHandle />,
   name: 'John Brown',
   age: 32,
   address: 'New York No. 1 Lake Park',
   index: 0,
  },
  {
   key: '2',
   ASDASDASD: <DragHandle />,
   name: 'Jim Green',
   age: 42,
   address: 'London No. 1 Lake Park',
   index: 1,
  },
  {

   key: '3',
   ASDASDASD: <DragHandle />,
   name: 'Joe Black',
   age: 32,
   address: 'Sidney No. 1 Lake Park',
   index: 2,
  },
 ];
 const aguulagchCtx = useContext(AguulagchCtx)
 const classes = Zagwar()
 const { Panel } = Collapse
 const [shvvhTovch, setShvvhTovch] = React.useState(false)
 const [state, setState] = React.useState({ dataSource: data })
 const SortableItem = sortableElement(props => <tr {...props} />);
 const SortableContainer = sortableContainer(props => <tbody {...props} />);

 const columns = [
  {
   title: <Button shape='circle' type='primary' icon={<PlusOutlined />} />,
   dataIndex: 'ASDASDASD',
   width: 150,
   className: 'drag-visible',
   fixed: 'left',
  },
  {
   title: 'Name',
   dataIndex: 'name',
   className: 'drag-visible',
  },
 ];




 const onSortEnd = ({ oldIndex, newIndex }) => {
  const { dataSource } = state;
  if (oldIndex !== newIndex) {
   const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
   console.log('Sorted items: ', newData);
   setState({ dataSource: newData });
  }
 };

 const DraggableContainer = props => (
  <SortableContainer
   useDragHandle
   disableAutoscroll
   helperClass="row-dragging"
   onSortEnd={onSortEnd}
   {...props}
  />
 );

 const DraggableBodyRow = ({ className, style, ...restProps }) => {
  const { dataSource } = state;
  const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
  return <SortableItem index={index} {...restProps} />;
 };


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
       header="Compare"
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
    <div className={classes.Col12} style={{ padding: '12px 14px' }}>
     <Table
      pagination={false}
      // dataSource={state.dataSource}
      // columns={columns}
      rowKey="index"
      scroll={{ x: hemjee.width, y: hemjee.height - 235 }}
      mode='vertical'
      components={{
       body: {
        wrapper: DraggableContainer,
        row: DraggableBodyRow,
       },
      }}
     >
      <Table.Column title={<Button shape='circle' type='primary' icon={<PlusOutlined />} />} render={<DragHandle />} />
      <Table.Column
       title={
        <Card
         style={{ width: 242 }}
         cover={
          <img
           src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
         }
         actions={[
          <Button type='link' key="detail">See more...</Button>
         ]}
        >
         <Meta
          title={<b>$160/per night &nbsp;<Tag color="magenta">magenta</Tag></b>}
          description="Twenty-five square meter studio on fifth floor with lift an old building..."
         />
        </Card>
       }
       dataIndex='Amenities'
      />
      <Table.Column title='sad' dataIndex='Floor' />
      <Table.Column title='sad' dataIndex='Meals' />

     </Table>
    </div>
   </div>
  </div >
 )
}

export default Appartment

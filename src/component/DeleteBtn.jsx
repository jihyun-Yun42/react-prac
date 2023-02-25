
const DeleteBtn = ({clickDeleteBtn, item}) => {
  return <button onClick={()=> clickDeleteBtn(item.id)}>x</button>
} 
export default DeleteBtn;
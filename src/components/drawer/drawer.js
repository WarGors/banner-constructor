import './drawer.css'

const Drawer = props => {
  const drawer = `drawer ${props.isCopyed ? null : 'closed'}`
  return (
    <div className={drawer}>
      Скопировано в буфер обмена
    </div>
  )
}

export default Drawer
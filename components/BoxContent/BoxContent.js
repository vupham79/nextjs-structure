import './styles.scss'

function BoxContent({ title, children, titlePosition = 'center', style }) {
  return (
    <div className="box-content" style={style}>
      <div className="title" style={{ textAlign: titlePosition }}>
        {title}
      </div>
      <div className="box-content-body">{children}</div>
    </div>
  )
}

export default BoxContent

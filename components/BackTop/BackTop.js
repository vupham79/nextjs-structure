import { BackTop } from 'antd'
import ArrowUpIcon from '~/assets/svg/arrow-up.svg'

const style = {
  borderRadius: '100%',
  fontWeight: '600',
  fontSize: '14px',
  bottom: '100px',
  color: '#333333',
  cursor: 'pointer',
  display: 'flex',
  height: '3.5rem',
  width: '3.5rem',
  textAlign: 'center',
  boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#fff',
  textTransform: 'uppercase',
}

function CustomBackTop() {
  return (
    <BackTop visibilityHeight={0}>
      <div className="backtop" style={style}>
        <ArrowUpIcon width="12px" height="12px" fill="#000" />
        Top
      </div>
    </BackTop>
  )
}

export default CustomBackTop

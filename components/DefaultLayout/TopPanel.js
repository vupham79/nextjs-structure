import { Col, Divider, Row } from 'antd'
import ChatUsIcon from '~/assets/svg/t1.svg'
import './styles.scss'

function TopPanel() {
  return (
    <Row justify={'end'} id="top-panel" className="top-panel">
      <Col className="top-panel-wrapper">
        <span>HOTLINE</span>
        <span className="hotline">028 777 02 614</span>
        <Divider className="divider" type={'vertical'} />
        <div className="chat-us-wrapper">
          <ChatUsIcon className="chat-us-icon" />
          Chat với chúng tôi
        </div>
      </Col>
    </Row>
  )
}

export default TopPanel

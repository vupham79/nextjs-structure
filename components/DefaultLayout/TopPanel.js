import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Divider, Row } from 'antd'
import './styles.scss'

function TopPanel() {
  return (
    <Row justify={'end'} className="top-panel">
      <Col className="top-panel-wrapper">
        <span>HOTLINE</span>
        <span className="hotline">028 777 02 614</span>
        <Divider className="divider" type={'vertical'} />
        <span className="chat-us-wrapper">
          <FontAwesomeIcon className="chat-us-icon" size="lg" icon={faCommentDots} />
          <span>Chat với chúng tôi</span>
        </span>
      </Col>
    </Row>
  )
}

export default TopPanel

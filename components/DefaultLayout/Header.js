import { faBell, faMap, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Input, Row } from 'antd'
import Link from 'next/link'
import './styles.scss'

function Header() {
  return (
    <header id="header">
      <div className="container">
        <Row justify={'space-between'}>
          <Col lg={6}>
            <Link href="/">
              <img
                style={{ maxHeight: '28px' }}
                src="https://food-map.s3.amazonaws.com/assets/images/logo.png"
              />
            </Link>
          </Col>
          <Col lg={6}>
            <Input
              placeholder="Nhập nội dung tìm kiếm"
              suffix={<FontAwesomeIcon color="#0a923c" icon={faSearch} />}
            />
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <div className="group-item">
              <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faMap} />
              <span className="title">Theo dõi đơn hàng</span>
            </div>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <div className="group-item">
              <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faBell} />
              <span className="title">Thông báo mới nhận</span>
            </div>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <div className="group-item">
              <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faUserCircle} />
              <span className="title">Sale Foodmap</span>
            </div>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <div className="widget-mini-cart">
              <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faShoppingCart} />
              <span className="title">Giỏ hàng</span>
              <span className="count">2</span>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header

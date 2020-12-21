import { Col, Input, Row } from 'antd'
import Link from 'next/link'
import CartIcon from '~/assets/svg/cart.svg'
import SearchIcon from '~/assets/svg/search-2.svg'
import TrackingOrderIcon from '~/assets/svg/t2.svg'
import NotificationIcon from '~/assets/svg/t3.svg'
import SaleFoodmapIcon from '~/assets/svg/t4.svg'
import './styles.scss'

function Header() {
  return (
    <header id="header">
      <div className="container">
        <Row justify={'space-between'}>
          <Col lg={6}>
            <Link href="/">
              <img id="logo" src="https://food-map.s3.amazonaws.com/assets/images/logo.png" />
            </Link>
          </Col>
          <Col lg={6} md={0} sm={0} xs={0}>
            <Input
              placeholder="Nhập nội dung tìm kiếm"
              suffix={<SearchIcon className="search-icon" />}
            />
          </Col>
          <Col className="header-item">
            <div className="group-item">
              <TrackingOrderIcon className="icon" />
              <span className="title">Theo dõi đơn hàng</span>
            </div>
          </Col>
          <Col md={0} sm={0} xs={0} className="header-item header-notification">
            <div className="group-item">
              <NotificationIcon className="icon" />
              <span className="title">Thông báo mới nhận</span>
            </div>
          </Col>
          <Col className="header-item">
            <div className="group-item">
              <SaleFoodmapIcon className="icon" />
              <span className="title">Sale Foodmap</span>
            </div>
          </Col>
          <Col className="header-item">
            <div className="widget-mini-cart">
              <CartIcon className="icon" />
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

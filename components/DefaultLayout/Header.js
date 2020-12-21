import { Col, Row } from 'antd'
import Link from 'next/link'
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
        </Row>
      </div>
    </header>
  )
}

export default Header

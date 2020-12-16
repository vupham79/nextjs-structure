import { Col, Row } from 'antd'
import '~/styles/globals.css'
import './styles.scss'

const footerRows = [
  {
    icon: 'https://d1s7zba1b4dg4m.cloudfront.net/assets/images/svg/building.svg',
    text: <div className="text">CÔNG TY TNHH CÔNG NGHỆ VÀ THƯƠNG MẠI UFO</div>,
    href: 'https://goo.gl/maps/QAEPbQtkrCR2',
  },
  {
    icon: 'https://d1s7zba1b4dg4m.cloudfront.net/assets/images/svg/location.svg',
    text: (
      <div className="text">
        Địa chỉ: 284/5b Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú, TPHCM
      </div>
    ),
    href: 'https://goo.gl/maps/QAEPbQtkrCR2',
  },
  {
    icon: 'https://d1s7zba1b4dg4m.cloudfront.net/assets/images/svg/mail.svg',
    text: <div className="text">Email: info@foodmap.asia</div>,
    href: 'mailto:info@foodmap.asia',
  },
  {
    icon: 'https://d1s7zba1b4dg4m.cloudfront.net/assets/images/svg/call.svg',
    text: <div className="text">Hotline: 02877702614</div>,
    href: 'tel:02877702614',
  },
  {
    icon: 'https://d1s7zba1b4dg4m.cloudfront.net/assets/images/svg/tag.svg',
    text: (
      <div className="text">
        Giấy chứng nhận Đăng ký Kinh doanh số <b>0314592854</b> do Sở Kế hoạch và Đầu tư Thành phố
        Hồ Chí Minh cấp ngày 24/08/2017
      </div>
    ),
    href:
      'tel:Giấy chứng nhận Đăng ký Kinh doanh số <b>0314592854</b> do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 24/08/2017',
  },
]
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <img
              className="logo"
              src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/ru32WHmCu3dJLNM8U2JxIHhuMhSRRcLudkBUEkbD.png"
            />
          </div>
          <div className="row">
            <Row justify={'space-between'}>
              <Col lg={6} md={6} sm={24}>
                {footerRows.map((row, index) => (
                  <a
                    href={row.href}
                    target={'_blank'}
                    rel="noreferrer"
                    className="item"
                    key={index}
                  >
                    <img className="icon" src={row.icon} />
                    {row.text}
                  </a>
                ))}
              </Col>
              <Col lg={2} md={2} sm={0} />
              <Col lg={4} md={4} sm={24}>
                <div className="widget">
                  <div className="widget-title">TÀI KHOẢN</div>
                  <ul className="widget-menu">
                    <li>
                      <a href="https://foodmap.asia/account/profile">Tài khoản của tôi</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Điểm thưởng của bạn</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Giỏ hàng</a>
                    </li>
                  </ul>
                </div>
                <div className="widget mt1">
                  <div className="widget-title">THÔNG TIN</div>
                  <ul className="widget-menu">
                    <li>
                      <a href="https://foodmap.asia/account/profile">Thông tin về FoodMap</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Đăng ký bán hàng</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={5} md={5} sm={24}>
                <div className="widget">
                  <div className="widget-title">HỖ TRỢ</div>
                  <ul className="widget-menu">
                    <li>
                      <a href="https://foodmap.asia/account/profile">
                        Điều khoản và quy định chung
                      </a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Hình thức thanh toán</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Đổi trả và hoàn tiền</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Bảo mật thông tin</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Chính sách điểm thưởng</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Hợp tác</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Liên hệ</a>
                    </li>
                    <li>
                      <a href="https://foodmap.asia/account/profile">Tuyển dụng</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={5} md={5} sm={24}>
                <div className="widget">
                  <div className="widget-title">KẾT NỐI VỚI FOODMAP</div>
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Foodmap.asia">
                    {/* <img
                      style={{ width: '100%' }}
                      data-lazy-type="image"
                      data-lazy-src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/EtNErBtYlmuS6bW0TEjbrTNzMABKHGECmnSR23Ri.jpeg"
                      src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/EtNErBtYlmuS6bW0TEjbrTNzMABKHGECmnSR23Ri.jpeg"
                    /> */}
                    <div
                      style={{ width: '100%' }}
                      className="fb-page"
                      data-href="https://www.facebook.com/Foodmap.asia/"
                      data-width=""
                      data-height=""
                      data-small-header="false"
                      data-adapt-container-width="true"
                      data-hide-cover="false"
                      data-show-facepile="true"
                    />
                  </a>
                  <Row className="widget-connect">
                    <Col span={11}>
                      <img
                        style={{ width: '100%' }}
                        data-lazy-type="image"
                        data-lazy-src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/I0JIdE6S4lHrr916uQrqc7QBwr6HgAMd3d9RkKVt.webp"
                        src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/I0JIdE6S4lHrr916uQrqc7QBwr6HgAMd3d9RkKVt.webp"
                      />
                    </Col>
                    <Col span={2} />
                    <Col span={11}>
                      <a href="https://www.youtube.com/channel/UC3l6NrzB0lKGvu29MH2qSnQ">
                        <img
                          style={{ width: '100%' }}
                          data-lazy-type="image"
                          data-lazy-src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/h7VtG56DDey1OpYBnklRJnrjKTNh0jLrUsUmcCsX.png"
                          src="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/h7VtG56DDey1OpYBnklRJnrjKTNh0jLrUsUmcCsX.png"
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div id="copyright">
            <div className="copyright-wrapper">
              Copyright © Know Your Farmer - Know Your Food 2020. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

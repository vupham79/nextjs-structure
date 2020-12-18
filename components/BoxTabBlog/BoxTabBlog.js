import { Col, Row } from 'antd'
import Link from 'next/link'
import Slider from 'react-slick'
import ArrowLeftIcon from '~/assets/svg/arrow-left.svg'
import ArrowRightIcon from '~/assets/svg/arrow-right.svg'
import './styles.scss'

const listBlog = [
  {
    title: '1001 sự thật thú vị về cây thốt nốt mà bạn sẽ phải bất ngờ',
    author: 'Foodmap',
    date: 'Ngày 08/10/2020',
    banner: 'https://food-map.s3.amazonaws.com/news/2020/10/loi-ich-suc-khoe-cay-thot-not.jpg',
  },
  {
    title: '1001 sự thật thú vị về cây thốt nốt mà bạn sẽ phải bất ngờ',
    author: 'Foodmap',
    date: 'Ngày 08/10/2020',
    banner: 'https://food-map.s3.amazonaws.com/news/2020/10/loi-ich-suc-khoe-cay-thot-not.jpg',
  },
  {
    title: '1001 sự thật thú vị về cây thốt nốt mà bạn sẽ phải bất ngờ',
    author: 'Foodmap',
    date: 'Ngày 08/10/2020',
    banner: 'https://food-map.s3.amazonaws.com/news/2020/10/loi-ich-suc-khoe-cay-thot-not.jpg',
  },
  {
    title: '1001 sự thật thú vị về cây thốt nốt mà bạn sẽ phải bất ngờ',
    author: 'Foodmap',
    date: 'Ngày 08/10/2020',
    banner: 'https://food-map.s3.amazonaws.com/news/2020/10/loi-ich-suc-khoe-cay-thot-not.jpg',
  },
]
function ListType() {
  return (
    <div className="blogs-list">
      <Link href="#">
        <div className="main-blog">
          <img className="banner" src={listBlog[0].banner} />
          <div className="blog-meta">
            <p className="title">{listBlog[0].title}</p>
            <p className="description">
              <span className="author">{listBlog[0].author}</span>
              <span className="date">{listBlog[0].date}</span>
            </p>
          </div>
        </div>
      </Link>
      <div className="sub-blogs">
        {listBlog.map((blog) => (
          <Link key={blog.title} href="#">
            <div className="blog">
              <div className="banner-wrapper">
                <img className="banner" src={blog.banner} />
              </div>
              <div className="blog-meta">
                <p className="title">{blog.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function SlideType() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: listBlog.length > 3 ? 3 : listBlog.length,
    slidesToScroll: listBlog.length > 3 ? 3 : listBlog.length,
    nextArrow: <ArrowRightIcon width={4} height={4} fill={'#000'} />,
    prevArrow: <ArrowLeftIcon width={4} height={4} fill={'#000'} />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: listBlog.length > 2 ? 2 : listBlog.length,
          slidesToScroll: listBlog.length > 2 ? 2 : listBlog.length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="blogs-slide">
      <Slider className="slider" {...settings} dotsClass="slick-dots">
        {listBlog.map((blog) => (
          <div key={blog.title} className="slider-item">
            <div className="blog-card">
              <img className="banner" src={listBlog[0].banner} />
              <div className="blog-meta">
                <p className="title">{listBlog[0].title}</p>
                <p className="description">
                  <span className="author">{listBlog[0].author}</span>
                  <span className="date">{listBlog[0].date}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

function BoxTabBlog({ type = 'list' }) {
  return (
    <div className="box-tab-blog">
      <Row className="tabs">
        <Col span={5} className="item active title">
          <Link href="#">Câu chuyện nông sản</Link>
        </Col>
        <Col span={19} className="list">
          <div className="item">
            <Link href="#">Bỏ phố về vườn</Link>
          </div>
          <div className="item">
            <Link href="#">Đặc sản Việt</Link>
          </div>
          <div className="item">
            <Link href="#">Những sự thật thú vị</Link>
          </div>
          <div className="item">
            <Link href="#">Nông nghiệp 4.0</Link>
          </div>
          <div className="item">
            <Link href="#">Thuơng hiệu tử tế</Link>
          </div>
          <div className="item">
            <Link href="#">Bỏ phố về vườn</Link>
          </div>
          <div className="item">
            <Link href="#">Đặc sản Việt</Link>
          </div>
          <div className="item">
            <Link href="#">Những sự thật thú vị</Link>
          </div>
          <div className="item">
            <Link href="#">Nông nghiệp 4.0</Link>
          </div>
          <div className="item">
            <Link href="#">Thuơng hiệu tử tế</Link>
          </div>
        </Col>
      </Row>
      <div className="tab-content">{type === 'list' ? <ListType /> : <SlideType />}</div>
      <div className="view-more">
        <Link href="#">
          <span className="view-more-link">
            <span className="text">Xem tất cả</span>
            <ArrowRightIcon fill="#0A923C" width="14px" height="14px" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BoxTabBlog

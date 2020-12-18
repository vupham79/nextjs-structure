import { Col, Row } from 'antd'
import Link from 'next/link'
import PropTypes from 'prop-types'
import FacebookIcon from '~/assets/svg/facebook.svg'
import LinkedinIcon from '~/assets/svg/linkedin.svg'
import YoutubeIcon from '~/assets/svg/youtube.svg'
import BannerBlogWidget from '~/components/BannerBlogWidget'
import BoxContent from '~/components/BoxContent'
import BoxTabBlog from '~/components/BoxTabBlog'
import ProductBox from '~/components/ProductBox'
import { withTranslation } from '~/i18n'
import './styles.scss'

function News() {
  return (
    <div className="news-section">
      <div className="menu">
        <Link href="#">
          <span className="active">Mới nhất</span>
        </Link>
        <Link href="#">Câu chuyện nông sản</Link>
        <Link href="#">Hỏi đáp nghề nông</Link>
        <Link href="#">Kiến thức nông nghiệp</Link>
        <Link href="#">Rì viu</Link>
        <Link href="#">Thông tin hữu ích</Link>
        <Link href="#">Cách chế biến thực phẩm</Link>
        <Link href="#">Mẹo hay cuộc sống</Link>
      </div>
      <section className="banner-blogs">
        <div className="left-side">
          <BannerBlogWidget
            imageUrl={'https://food-map.s3.ap-southeast-1.amazonaws.com/news/2020/11/Picture1.png'}
            title={'Grand Opening - Cửa hảng trải nghiệm đầu tiên của FoodMap tại TPHCM'}
            author={'Foodmap'}
            date={'Ngày 01/12/2020'}
          />
        </div>
        <div className="right-side">
          <div className="top-side">
            <BannerBlogWidget
              imageUrl={
                'https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/llXAAZWWEf2r4gP2joKdbuflI8LVZQBRLwcl9ZYv.png'
              }
            />
          </div>
          <div className="bottom-side">
            <div style={{ display: 'flex' }}>
              <div className="left-side">
                <BannerBlogWidget
                  imageUrl={
                    'https://food-map.s3.ap-southeast-1.amazonaws.com/news/2020/11/Foodmap_campaign-Quang-Nam-1200x800.jpg'
                  }
                  title={
                    'Tăng trưởng mạnh mùa dịch, startup sàn nông sản Foodmap được nhà đầu tư ngoại rót 500.000 USD'
                  }
                  size="small"
                />
              </div>
              <div className="right-side">
                <BannerBlogWidget
                  imageUrl={
                    'https://food-map.s3.ap-southeast-1.amazonaws.com/news/2020/12/20201130_183335-scaled-e16067875-1200x541.jpg'
                  }
                  title={'Lập liên minh đưa Tết Việt... ra thế giới'}
                  size={'small'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Row>
          <Col style={{ paddingRight: '0.25rem' }} lg={16}>
            <BoxTabBlog />
            <BoxTabBlog type="slide" />
            <BoxTabBlog />
          </Col>
          <Col style={{ paddingLeft: '0.25rem' }} className="right-side" lg={8}>
            <BannerBlogWidget
              imageUrl={
                'https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/3wwc0ib6DZBWaVQqYsGVdmS8nB6GfkTqZ1AC1NTy.jpeg'
              }
              style={{ height: 'auto', marginBottom: '0.5rem' }}
            />
            <BoxContent style={{ marginBottom: '0.5rem' }} title="Cập nhật tin tức">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Theo dõi chúng tôi tại
                <a
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UC3l6NrzB0lKGvu29MH2qSnQ"
                >
                  <YoutubeIcon fill="#fff" width={16} height={16} />
                </a>
                <a
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Foodmap.asia"
                >
                  <FacebookIcon fill="#fff" width={16} height={16} />
                </a>
                <a
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/foodmapvn/"
                >
                  <LinkedinIcon fill="#fff" width={16} height={16} />
                </a>
              </div>
            </BoxContent>
            <BoxContent style={{ marginBottom: '0.5rem' }} title="Sản phẩm nổi bật">
              <ProductBox type="banner" />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox style={{ marginBottom: '0' }} />
            </BoxContent>
            <BoxContent style={{ marginBottom: '0.5rem' }} title="Tin tức đã xem"></BoxContent>
          </Col>
        </Row>
      </section>
    </div>
  )
}

News.getInitialProps = async () => ({
  namespacesRequired: ['news'],
})

News.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('news')(News)

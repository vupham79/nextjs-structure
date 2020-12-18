import Link from 'next/link'
import './styles.scss'

function BannerBox() {
  return (
    <div className="banner-box">
      <div className="banner-wrapper">
        <img
          className="banner-image"
          src="https://food-map.s3.amazonaws.com/PRODUCT/500010000012_001.jpg"
        />
      </div>
      <div className="content">
        <Link href="#">
          <span className="title">Xà Bông Lavender - 100g - Liên Minh Xanh</span>
        </Link>
        <span className="category">Liên Minh Xanh</span>
        <div className="price">
          <span>85.000 đ</span>
        </div>
      </div>
    </div>
  )
}

function CardBox() {
  return (
    <div className="card-box">
      <div className="banner-wrapper">
        <img
          className="banner-image"
          src="https://food-map.s3.amazonaws.com/PRODUCT/500010000012_001.jpg"
        />
      </div>
      <div className="content">
        <Link href="#">
          <span className="title">Xà Bông Lavender - 100g - Liên Minh Xanh</span>
        </Link>
        <div className="price">
          <span>85.000 đ</span>
          <span>145.000 đ</span>
        </div>
      </div>
    </div>
  )
}

function ProductBox({ type = 'card', style }) {
  return (
    <div className="product-box" style={style}>
      {type === 'card' ? <CardBox /> : <BannerBox />}
    </div>
  )
}

export default ProductBox

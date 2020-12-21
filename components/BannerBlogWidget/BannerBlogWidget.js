import './styles.scss'

function BannerBlogWidget({
  imageUrl,
  title,
  author,
  date,
  size = 'large',
  style,
  bannerHeight = '100%',
}) {
  let titleSize = 22
  let titleWeight = 600
  switch (size) {
    case 'small':
      titleSize = 14
      titleWeight = 700
      break
    case 'medium':
      titleSize = 18
      break
    default:
      break
  }
  return (
    <div
      className={`banner-blog-widget ${title || author || date ? 'banner-blog-with-meta' : ''}`}
      style={style}
    >
      <img className="banner" src={imageUrl} style={{ height: bannerHeight }} />
      {(title || author || date) && (
        <div className="blog-meta">
          {title && (
            <p
              className="title"
              style={{
                fontSize: titleSize,
                fontWeight: titleWeight,
              }}
            >
              {title}
            </p>
          )}
          {(author || date) && (
            <p className="description">
              <span className="author">{author}</span>
              <span className="date">{date}</span>
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default BannerBlogWidget

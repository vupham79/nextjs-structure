import Footer from './Footer'
import Header from './Header'
import './styles.scss'

function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <Header />
      {/* <Breadcrumb /> */}
      {props.children}
      <div className="cs-footer" />
      <Footer />
    </div>
  )
}

export default DefaultLayout

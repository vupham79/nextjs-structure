import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'
import MainMenu from './MainMenu'
import './styles.scss'
import TopPanel from './TopPanel'

function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <TopPanel />
      <Header />
      <MainMenu />
      <Breadcrumb />
      {props.children}
      <div className="cs-footer" />
      <Footer />
    </div>
  )
}

export default DefaultLayout

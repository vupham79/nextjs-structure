import { BackTop } from 'antd'
import App from 'next/app'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ArrowUpIcon from '~/assets/svg/arrow-up.svg'
import SnowFall from '~/components/SnowFall'
import { appWithTranslation } from '~/i18n'
import { persistor, store } from '~/redux/store'
import '~/styles/antd.less'
import '~/styles/globals.css'

const style = {
  borderRadius: '100%',
  fontWeight: '600',
  fontSize: '10px',
  bottom: '100px',
  color: '#333333',
  cursor: 'pointer',
  display: 'flex',
  height: '40px',
  width: '40px',
  textAlign: 'center',
  boxShadow: '0px 6px 14px rgba(145, 71, 68, 0.14)',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#fff',
  textTransform: 'uppercase',
}
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (() => <></>)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SnowFall />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <BackTop>
          <div className="backtop" style={style}>
            <ArrowUpIcon width="12px" height="12px" fill="#000" />
            Top
          </div>
        </BackTop>
      </PersistGate>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
})

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}
export default appWithTranslation(MyApp)

import App from 'next/app'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appWithTranslation } from '~/i18n'
import { persistor, store } from '~/redux/store'
import '~/styles/antd.less'
import '~/styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const Layout = Component.layout || (() => <></>)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext))
})

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}
export default appWithTranslation(MyApp)

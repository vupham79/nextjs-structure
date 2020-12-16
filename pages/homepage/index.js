import Head from 'next/head'
import PropTypes from 'prop-types'
import { withTranslation } from '~/i18n'
function Homepage({ t }) {
  return (
    <>
      <Head>
        <title>{t('header')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>{t('title')}</h1>
    </>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('home')(Homepage)

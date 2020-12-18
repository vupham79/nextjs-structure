import Head from 'next/head'
import PropTypes from 'prop-types'
import DefaultLayout from '~/components/DefaultLayout'
import { withTranslation } from '~/i18n'
import NewsSection from './News'
function Index({ t }) {
  return (
    <>
      <Head>
        <title>{t('header')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NewsSection />
    </>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['news'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

Index.layout = DefaultLayout

export default withTranslation('news')(Index)

import Head from 'next/head'
import PropTypes from 'prop-types'
import DefaultLayout from '~/components/DefaultLayout'
import { withTranslation } from '~/i18n'

function News({ t }) {
  return (
    <>
      <Head>
        <title>{t('header')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>{t('title')} Helllo world</h1>
      </div>
    </>
  )
}

News.getInitialProps = async () => ({
  namespacesRequired: ['news'],
})

News.propTypes = {
  t: PropTypes.func.isRequired,
}

News.layout = DefaultLayout

export default withTranslation('news')(News)

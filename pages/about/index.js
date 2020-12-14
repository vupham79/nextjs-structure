import Head from 'next/head'
import PropTypes from 'prop-types'
import CheckoutLayout from '~/components/CheckoutLayout'
import { withTranslation } from '~/i18n'

function About({ t }) {
  return (
    <div>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div>
        <h1>{t('title')}</h1>
      </div>
    </div>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['about'],
})
About.propTypes = {
  t: PropTypes.func.isRequired,
}
About.layout = CheckoutLayout
export default withTranslation('about')(About)

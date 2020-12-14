import PropTypes from 'prop-types'
import { withTranslation } from '~/i18n'

function Homepage({ t }) {
  return <h1>{t('title')}</h1>
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('home')(Homepage)

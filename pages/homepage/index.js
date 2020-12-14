import PropTypes from 'prop-types'
import { withTranslation } from '~/i18n'

function Homepage({ t }) {
  return (
    <div className="top-panel">
      <div className="container">
        <div className="group-right">
          <h1>{t('title')}</h1>
        </div>
      </div>
    </div>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('home')(Homepage)

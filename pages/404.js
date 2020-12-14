import { withTranslation } from '~/i18n'

function Page({ t }) {
  return <>{t('404')}</>
}
export default withTranslation('common')(Page)

import DefaultLayout from '~/components/DefaultLayout'
import { withTranslation } from '~/i18n'
import Homepage from './homepage'
function Index() {
  return <Homepage />
}

Index.getInitialProps = async () => ({
  namespacesRequired: [],
})
Index.layout = DefaultLayout

export default withTranslation(null)(Index)

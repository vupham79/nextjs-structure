import { Breadcrumb } from 'antd'
import './styles.scss'

function DefaultBreadcrumb() {
  return (
    <div className="breadcrumb-wrapper">
      <div className="breadcrumb">
        <Breadcrumb separator={'>'}>
          <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default DefaultBreadcrumb

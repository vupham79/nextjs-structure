import { Breadcrumb } from 'antd'
import Link from 'next/link'
import './styles.scss'

function DefaultBreadcrumb() {
  return (
    <div className="breadcrumb-wrapper">
      <div className="breadcrumb">
        <Breadcrumb separator={'>'}>
          <Breadcrumb.Item>
            <Link href="#">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="#">Tin tức</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default DefaultBreadcrumb

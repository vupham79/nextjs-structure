import Link from 'next/link'

function DefaultLayout(props) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      {props.children}
    </div>
  )
}

export default DefaultLayout

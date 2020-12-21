import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://food-map.s3.ap-southeast-1.amazonaws.com/storage/media/fngf1oRHMmalEBwmeMPtvETprZUV9PoeT5oh6mLO.png"
          />
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=393152015310844&autoLogAppEvents=1"
            nonce="bdNiRrN5"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

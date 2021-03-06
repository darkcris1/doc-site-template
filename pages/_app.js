import '../styles/global.scss'
import Layout from '../components/_layout.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import "../styles/global.css"
import { useEffect, useMemo } from "react"
import CookieConsent from "react-cookie-consent"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const data = pageProps
  const global = useMemo(() => data.global, [])

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global?.attributes?.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global?.attributes}>
        <Component {...pageProps} />
        <CookieConsent
          buttonText="J'ai compris"
          buttonStyle={{
            color: "white",
            fontSize: "13px",
            backgroundColor: "rgb(229 30 49 / var(--tw-bg-opacity))",
          }}
        >
          En poursuivant votre navigation sur ce site, vous acceptez
          l’utilisation de cookies afin d'améliorer continuellement votre
          expérience.
        </CookieConsent>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: "deep",
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp

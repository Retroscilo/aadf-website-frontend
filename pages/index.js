import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import mapToComponent from "../utils/getComponent"

const Home = ({ homepage }) => {
  console.log(homepage)
  return (
    <Layout>
      <Seo seo={homepage?.attributes?.seo} />
      {homepage?.attributes?.content?.map(mapToComponent)}
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", { populate: "deep" }),
  ])
  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home

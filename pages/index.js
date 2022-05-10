import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import getComponent from "../utils/getComponent"

function mapToComponent(element) {
  const Component = getComponent(element.__component)
  return <Component key={element.id} {...element} />
}

const Home = ({ homepage }) => {
  console.log(homepage)
  return (
    <Layout>
      <Seo seo={homepage?.attributes?.seo} />
      {homepage.attributes.Content.map(mapToComponent)}
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", { populate: "*" }),
  ])
  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 60,
  }
}

export default Home

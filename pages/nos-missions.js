import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import mapToComponent from "../utils/getComponent"

const Missions = ({ pageData }) => {
  console.log(pageData)
  return (
    <Layout>
      <Seo seo={pageData?.attributes?.seo} />
      {pageData?.attributes?.content?.map(mapToComponent)}
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [res] = await Promise.all([
    fetchAPI("/nos-mission", { populate: "deep" }),
  ])
  return {
    props: {
      pageData: res.data,
    },
    revalidate: 60,
  }
}

export default Missions

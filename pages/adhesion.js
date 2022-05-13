import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import mapToComponent from "../utils/getComponent"
import FormContainer from "../components/Form/FormContainer/FormContainer"

const Adhesion = ({ pageData }) => {
  return (
    <Layout>
      <Seo seo={pageData?.attributes?.seo} />
      {pageData?.attributes?.content?.map(mapToComponent)}
      <FormContainer
        title="Bulletin d'adhésion à l'AADF"
        subtitle={"Nous  souhaiterions mieux vous connaitre"}
        forms={[
          { label: "Prénom", required: true },
          { label: "Nom", required: true },
          { label: "Email", required: true },
          { label: "Ville de résidence", required: false },
          { label: "Numéro de téléphone", required: false },
        ]}
        buttonText="Valider"
      />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [res] = await Promise.all([fetchAPI("/adhesion", { populate: "deep" })])
  return {
    props: {
      pageData: res.data,
    },
    revalidate: 60,
  }
}

export default Adhesion

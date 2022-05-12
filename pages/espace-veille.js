import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import mapToComponent from "../utils/getComponent"
import Pill from "../components/element/Pill"
import { v4 } from "uuid"
import { useState, useEffect, createContext, useContext } from "react"

export const VeilleContext = React.createContext("Tout les articles")

const Veille = ({ pageData, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("Tout les articles")
  useEffect(() => console.log(selectedCategory), [selectedCategory])
  return (
    <Layout>
      <Seo seo={pageData?.attributes?.seo} />
      <header className="text-center my-10">
        <h1 className="mb-6">Espace veille</h1>
        <h3>Le rendez-vous des Analystes curieux</h3>
      </header>
      <div className="flex gap-6 mb-20 justify-center flex-wrap">
        <Pill
          text="Tout les articles"
          selectedCategory={selectedCategory}
          setCategory={setSelectedCategory}
        />
        {categories.data.map((cat) => (
          <Pill
            key={v4()}
            text={cat.attributes.name}
            selectedCategory={selectedCategory}
            setCategory={setSelectedCategory}
          />
        ))}
      </div>
      <VeilleContext.Provider value={selectedCategory}>
        {pageData?.attributes?.content?.map(mapToComponent)}
      </VeilleContext.Provider>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [res, categories] = await Promise.all([
    fetchAPI("/espace-veille", { populate: "deep" }),
    fetchAPI("/categories", { populate: "deep" }),
  ])
  return {
    props: {
      pageData: res.data,
      categories,
    },
    revalidate: 60,
  }
}

export default Veille

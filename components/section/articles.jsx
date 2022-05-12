import ArticleCard from "../element/Article"
import { v4 } from "uuid"
import { VeilleContext } from "../../pages/espace-veille"
import { useContext } from "react"

const Articles = ({ highlight, populars, displayed }) => {
  const selectedCat = useContext(VeilleContext)
  if (selectedCat === "Tout les articles")
    return (
      <section className="flex flex-col lg:grid justify-between lg:grid-cols-[55%_30%] max-w-[1500px] m-auto px-[20px] md:px-[100px]">
        {selectedCat === "Tout les articles" && (
          <>
            <div>
              <h4 className="mb-8">À la une</h4>
              <ArticleCard data={highlight.data} highlight />
              {populars.data.map((article) => (
                <ArticleCard key={v4()} data={article} />
              ))}
            </div>
            <aside>
              <h4 className="mb-8">Les plus consultés</h4>
              {displayed.data.map((article) => {
                return <ArticleCard key={v4()} data={article} />
              })}
            </aside>
          </>
        )}
      </section>
    )

  return (
    <section className="flex flex-wrap gap-20 max-w-[1500px] m-auto px-[20px] md:px-[100px]">
      {[highlight.data, ...populars.data, ...displayed.data].map((article) => {
        const categoryName = article.attributes.category.data.attributes.name
        if (categoryName === selectedCat)
          return (
            <ArticleCard
              key={v4()}
              data={article}
              style={{ width: "300px", heigth: "500px" }}
            />
          )
      })}
    </section>
  )
}

export default Articles

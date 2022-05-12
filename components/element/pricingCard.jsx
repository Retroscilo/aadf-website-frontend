const pricingCard = ({ data }) => {
  console.log(data)
  return (
    <article className="relative pricingCard xl:max-w-[354px] xl:min-w-[354px] flex-grow xl:shadow-md grid xl:grid-rows-[50px_100px_1fr] xl:grid-cols-[1fr] grid-rows-[50px_100px] grid-cols-[1fr_100px] gap-10 p-14">
      <h4 className="xl:text-center row-start-2 col-start-2 text-right xl:row-start-1 xl:col-start-1">
        {data.price}
      </h4>
      <h4 className="xl:text-center row-start-1 col-start-1 xl:row-start-2">
        {data.formulaTitle}
      </h4>
      <p className="text-left row-start-2 col-start-1 xl:row-start-3">
        {data.formulaDescription}
      </p>
    </article>
  )
}

export default pricingCard

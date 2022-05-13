import { useState, useEffect } from "react"

const Pill = ({ text, setCategory, selectedCategory }) => {
  const [selected, setSelected] = useState(selectedCategory === text)
  useEffect(() => setSelected(text === selectedCategory), [selectedCategory])

  return (
    <div
      onClick={() => setCategory(text)}
      className={`border rounded-3xl min-w-[75px] w-fit text-center px-5 cursor-pointer ${
        selected && "bg-[#010E88] text-white border-[#010E88]"
      }`}
    >
      {text}
    </div>
  )
}

export default Pill

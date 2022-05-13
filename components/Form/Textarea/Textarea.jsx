import { useState } from "react"

const TextArea = ({ label, required, max }) => {
  const [value, setValue] = useState("")
  return (
    <div className="text-area">
      <span>
        {label} {required ? "*" : "(optionnel)"}
      </span>

      <div className="container">
        <textarea
          onChange={(e) => setValue(e.target.value)}
          value={value}
          maxLength={max}
          rows={10}
        />
        <span>
          {value.length} sur {max} caractères maximum
        </span>
      </div>
    </div>
  )
}

export default TextArea

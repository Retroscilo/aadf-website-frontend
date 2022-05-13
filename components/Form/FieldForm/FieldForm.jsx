import React from "react"

const FieldForm = ({ label, name, type, required }) => {
  const [value, setValue] = React.useState("")

  return (
    <div className="form">
      <label htmlFor={name} className="form-field">
        {label} {required ? "*" : "(optionnel)"}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-input"
      />
    </div>
  )
}

export default FieldForm

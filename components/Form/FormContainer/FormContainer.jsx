import React from "react"

import CategoryTitle from "../../Title/CategoryTitle/CategoryTitle"
import FieldForm from "../FieldForm/FieldForm"
import ChoicesForm from "../ChoicesForm/ChoicesForm"
import TextArea from "../Textarea/Textarea"
import Dropdown from "../Dropdown/Dropdown"

const FormContainer = ({ title, subtitle, forms, buttonText }) => {
  const [selected, setSelected] = React.useState("")

  return (
    <div className="form-container container mb-48">
      <CategoryTitle title={title} />
      <h5 className="subtitle">{subtitle}</h5>

      <span className="fields">Champs obligatoires *</span>

      <div className="forms">
        {forms &&
          forms.map((form, i) => (
            <FieldForm key={i} label={form.label} required={form.required} />
          ))}
      </div>

      <div className="choices-list">
        <ChoicesForm
          label="Indiquez le type de membre d'adhérent"
          required={true}
          choices={[
            "Adhésion membre standard (30€/an)",
            "Adhésion membre statut étudiant / Demandeur d'emploi (10€/an)",
            "Adhésion membre bienfaiteur (100€/an)",
          ]}
        />
      </div>

      <div className="choice-select">
        <Dropdown
          label="Souhaitez-vous participer activement aux activités de l'AADF ?"
          choices={[
            "",
            "Oui, je suis hyper motivé",
            "Oui, cela m'intéresse",
            "Un peu, mais je ne peux pas m'engager",
          ]}
          selected={selected}
          onClick={setSelected}
        />
      </div>

      <TextArea label="Motivation pour adhérer à l'AADF" min={0} max={300} />

      <button className="form-button">{buttonText}</button>
    </div>
  )
}

export default FormContainer

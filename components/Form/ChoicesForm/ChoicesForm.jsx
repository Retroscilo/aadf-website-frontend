const ChoicesForm = ({ label, required, choices }) => (
  <div className="form-choices">
    <span>
      {label} {required ? "*" : "(optionnel)"}
    </span>

    <div className="form-input">
      {choices &&
        choices.map((choice, i) => (
          <div key={i} className="form-list">
            <input type="radio" name="form" />
            <label htmlFor="form" className="input-form">
              {choice}
            </label>
          </div>
        ))}
    </div>
  </div>
)

export default ChoicesForm

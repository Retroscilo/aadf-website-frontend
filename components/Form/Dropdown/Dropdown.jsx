const Dropdown = ({ label, choices, selected, onClick }) => (
  <div className="dropdown-container">
    <span>{label}</span>

    <div className="dropdown-select">
      <select>
        {choices &&
          choices.map((choice, i) => (
            <option
              value={label}
              key={i}
              selected={selected === label ? "selected" : null}
              onClick={() => onClick(selected)}
            >
              {choice}
            </option>
          ))}
      </select>
    </div>
  </div>
)

export default Dropdown

import './index.css'

const Box = props => {
  const {item, showPassword, deleteBox} = props
  const {website, name, password, id} = item

  const buttonClicked = () => {
    deleteBox(id)
  }
  return (
    <div className="box-styling">
      <div>
        <h1>P</h1>
      </div>
      <div>
        <p>{website}</p>
        <p>{name}</p>
        {showPassword ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-sizing"
          />
        )}
      </div>
      <div>
        <button type="button" className="button-delete" onClick={buttonClicked}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="button-sizing"
          />
        </button>
      </div>
    </div>
  )
}

export default Box

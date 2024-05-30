import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Box from './component/Box'
import './App.css'

class App extends Component {
  state = {
    userList: [],
    website: '',
    name: '',
    password: '',
    showPassword: false,
    searchInput: '',
  }

  enterWebsite = event => {
    this.setState({website: event.target.value})
  }

  enterUserName = event => {
    this.setState({name: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    const {website, name, password} = this.state
    event.preventDefault()
    const newList = {
      id: uuidV4(),
      website,
      name,
      password,
    }
    this.setState(pervState => ({
      userList: [...pervState.userList, newList],
    }))
    this.setState({name: '', website: '', password: ''})
  }

  isShownPassword = () => {
    this.setState(pervState => ({showPassword: !pervState.showPassword}))
  }

  deleteBox = id => {
    const {userList} = this.state
    const deletedList = userList.filter(eachOne => eachOne.id !== id)
    this.setState({userList: deletedList})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResult = () => {
    const {userList, searchInput} = this.state

    return userList.filter(eachOne =>
      eachOne.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {
      website,
      name,
      password,
      userList,
      showPassword,
      searchInput,
    } = this.state
    const newList = this.getSearchResult()
    // console.log(newList)
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="sizing-logo"
        />
        <div className="top-container">
          <form className="user-input-container" onSubmit={this.submitForm}>
            <h1 className="main-heading">Add new password</h1>
            <div className="website">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-logo"
              />
              <input
                className="website input"
                placeholder="Enter Website"
                onChange={this.enterWebsite}
                value={website}
              />
            </div>
            <div className="website">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-logo"
              />
              <input
                className="website input"
                placeholder="Enter Username"
                onChange={this.enterUserName}
                value={name}
              />
            </div>
            <div className="website">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="website-logo"
              />
              <input
                className="website input"
                placeholder="Enter Password"
                type="password"
                onChange={this.enterPassword}
                value={password}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="button">
                add
              </button>
            </div>
          </form>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image-sizing"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="one">
            <div className="two">
              <h1 className="main-heading">Your Passwords</h1>
              <p className="style-digit"> {userList.length} </p>
            </div>
            <div className="Search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-logo"
              />
              <input
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.changeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="new-one">
            <div className="some">
              <input
                type="checkbox"
                id="show"
                className="box"
                value={showPassword}
                onClick={this.isShownPassword}
              />
              <label
                htmlFor="show"
                className="sub-heading"
                onClick={this.isShownPassword}
              >
                Show Password
              </label>
            </div>
          </div>
          {userList.length !== 0 ? (
            <ul className="unOrdered-list">
              {newList.map(eachOne => (
                <Box
                  item={eachOne}
                  key={eachOne.id}
                  showPassword={showPassword}
                  deleteBox={this.deleteBox}
                />
              ))}
            </ul>
          ) : (
            <div className=" set-center">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="No Passwords"
                className="image-sizing"
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App

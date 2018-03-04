import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  } 

  render() {
  if (this.state.user === null) {
    return (
      <div>
        <h2>Kirjaudu sovellukseen</h2>

        <form onSubmit={this.addName}>
          <div>

            username: <input value={this.state.newName}
              onChange={this.handleNameChange}/>

            password: <input value={this.state.newNumber}
              onChange={this.handleNumberChange}/>
         
            <button type="submit">login</button>
          </div>
        </form>

      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      {this.state.blogs.map(blog =>
        <Blog key={blog._id} blog={blog} />
      )}
    </div>
  )
  }
}

export default App;

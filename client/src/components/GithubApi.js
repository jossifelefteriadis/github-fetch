import React from 'react'
import Header from './Header'
import Search from './Search'
import Card from './Card'

export default class GithubApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      avatar: '',
      followers: '',
      following: '',
      repos: '',
      finishedLoading: false
    }
  }

  handleSearch = username => {
    fetch(`http://localhost:5000/${username}`)
      .then(res => res.json())
      .then(data =>
        this.setState(() => ({
          name: data.name,
          username: data.username,
          avatar: data.avatar,
          followers: data.followers,
          following: data.following,
          repos: data.repos,
          finishedLoading: true
        }))
      )
  }

  render() {
    return (
      <section className='container'>
        <Header />
        <Search handleSearch={this.handleSearch} />
        {this.state.finishedLoading && <Card Info={this.state} />}
      </section>
    )
  }
}

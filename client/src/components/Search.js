import React from 'react'

export default class Search extends React.Component {
  handleSearch = e => {
    e.preventDefault()
    const username = e.target.elements.option.value.trim()
    this.props.handleSearch(username)

    e.target.elements.option.value = ''
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSearch} className='form'>
          <input
            className='form_input'
            type='text'
            placeholder='search here'
            name='option'
            autoComplete='off'
          />
          <input type='submit' value='Search' className='form_button' />
        </form>
      </section>
    )
  }
}

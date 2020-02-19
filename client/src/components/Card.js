import React from 'react'

const Card = props => (
  <section>
    <section className='card'>
      <section className='avatar'>
        <img src={props.Info.avatar} alt='github avatar' />
      </section>
      <section className='name'>
        <p>Name: {props.Info.name}</p>
        <p>Username: {props.Info.username}</p>
      </section>
      <section className='information'>
        <p>Following: {props.Info.following}</p>
        <p>Followers: {props.Info.followers}</p>
        <p>Repos: {props.Info.repos}</p>
      </section>
    </section>
  </section>
)

export default Card

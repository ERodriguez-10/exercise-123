import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ComponentB({ user }) {
  return (
    <div>
      <h1>Contact</h1>
      <p>Username: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.online ? 'ONLINE' : 'DISCONNECT'}</p>
    </div>
  )
}

ComponentB.propTypes = {
  user: PropTypes.instanceOf(Contact)
}

export default ComponentB

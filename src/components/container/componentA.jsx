import React from 'react'
import { Contact } from '../../models/contact.class'
import ComponentB from '../pure/componentB';

function ComponentA() {
  const userA = new Contact('Miguel', 'Raikovich', 'mraikovich@example.com', true);
  const userB = new Contact('Nacho', 'Samford', 'nSamford@example.com', false);
  const userC = new Contact('Choki', 'Kalestenia', 'chokikale@example.com', false);

  const users = [userA, userB, userC];

  return (
    <div>
      {users.map((user) => <ComponentB user={user} />)}
    </div>
  )
}

export default ComponentA
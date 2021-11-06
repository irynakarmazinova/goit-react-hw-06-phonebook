//   allContacts.some(
//     // allContacts.find(
//     ({ name, number }) =>
//       name.toLowerCase() === contact.name.toLowerCase() ||
//       number === contact.number,
//   )
//     ? alert(`${contact.name} is already in contacts.`)
//     : return [...allContacts, contact];

export function addContactFn(allContacts, contact) {
  const a = allContacts.some(
    // allContacts.find(
    ({ name, number }) =>
      name.toLowerCase() === contact.name.toLowerCase() ||
      number === contact.number,
  );

  if (a) {
    alert(`${contact.name} is already in contacts.`);
    return allContacts;
  }

  return [...allContacts, contact];
}

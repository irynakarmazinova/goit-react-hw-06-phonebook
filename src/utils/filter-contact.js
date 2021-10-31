export default function filterContacts(contacts, filter) {
  return contacts.length > 0
    ? contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
          contact.number.includes(filter.trim()),
      )
    : null;
}

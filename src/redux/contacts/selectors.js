export const selectContacts = state => state.contacts.contactList;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state).toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
};

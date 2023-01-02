import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);

const handleFetchContactsSuccess = (state, action) => {
  state.items = action.payload;
};
const handleAddContactsSuccess = (state, action) => {
  state.items.push(action.payload);
};
const handleDeleteContactsSuccess = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const anyPending = state => {
  state.isLoading = true;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducer: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
      .addCase(addContact.fulfilled, handleAddContactsSuccess)
      .addCase(deleteContact.fulfilled, handleDeleteContactsSuccess)

      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anyFulfilled)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPending)
      .addMatcher(isAnyOf(...getActionsWithType('reJected')), anyRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;

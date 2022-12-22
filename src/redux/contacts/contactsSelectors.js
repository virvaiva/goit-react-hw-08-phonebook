import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63a04d90e3113e5a5c39ac4c.mockapi.io/';

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state).toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
};
export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);
export const deleteContacts = createAsyncThunk(
  'phonebook/deleteContats',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
export const addContacts = createAsyncThunk(
  'phonebook/addContacts',
  async contact => {
    const { data } = await axios.post('/contacts/', contact);
    return data;
  }
);

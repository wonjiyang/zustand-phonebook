import { create } from 'zustand';

const usePhoneBookStore = create((set) => ({
  phoneBook: [],

  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),

  deleteContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((c) => c.id !== id),
    })),

  updateContact: (id, newName, newPhone) =>
    set((state) => ({
      phoneBook: state.phoneBook.map((c) =>
        c.id === id ? { ...c, name: newName, phoneNumber: newPhone } : c
      ),
    })),
}));

export default usePhoneBookStore;

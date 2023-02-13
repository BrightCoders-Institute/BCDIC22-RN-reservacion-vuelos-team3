import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
      flight: {
        origin: "",
        destination: "",
        date: "",
        passengers: "",
      },
      userid: "",
    },
    reducers: {
      addOrigin: (state, action) => {
        state.flight.origin = action.payload;
      },
      addDestination: (state, action) => {
        state.flight.destination = action.payload;
      },
      addDate: (state, action) => {
        state.flight.date = action.payload;
      },
      addPassengers: (state, action) => {
        state.flight.passengers = action.payload;
      },
      addUserId: (state, action) => {
        state.userid = action.payload;
      },
      clearData: (state) => {
        state.flight = {
          origin: "",
          destination: "",
          date: "",
          passengers: "",
        }
      },
    },
  });
  
  export const { addOrigin, addDestination, addDate, addPassengers, addUserId, clearData } = dataSlice.actions;
  export default dataSlice.reducer;
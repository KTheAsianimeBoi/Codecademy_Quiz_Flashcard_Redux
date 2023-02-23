import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    },
    addQuizIdToTopic: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const topicsSelect = (state) => {
  return state.topics.topics;
};

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

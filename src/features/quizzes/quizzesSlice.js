import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";
export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = { ...action.payload };
    }
  }
});
//selector
export const quizzesSelect = (state) => {
  return state.quizzes.quizzes;
};
export const createQuizAndAssociate = (quiz) => {
  return (dispatch, getState) => {
    const { id, topicId } = quiz;
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdToTopic({ quizId: id, topicId: topicId }));
  };
};

export const { addTopic } = quizzesSlice.actions;
export default quizzesSlice.reducer;

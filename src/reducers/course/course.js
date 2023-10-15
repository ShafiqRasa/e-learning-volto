export const COURSE_ACTIONS = {
  SET_COURSES: 'course/SET_COURSES',
};

const initialState = {
  courses: null,
};

/**
 * Users reducer.
 * @function courses
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function courses(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case COURSE_ACTIONS.SET_COURSES:
      return {
        ...state,
        courses: payload,
      };
    default:
      return state;
  }
}

import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
  switch (action) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values',
      }
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      }
    default:
      throw new Error(`Unexpected action: ${action}`);
  }
}

export default reducer;

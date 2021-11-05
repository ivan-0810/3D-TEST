import { spinner } from './action';

const InitialState = {
  is_spinner_loading: false
};

const  Single_Post = (state = InitialState, action) => {
  switch (action.type) {
    case spinner.IS_SPINNER_LOADING_TRUE:
      return {
        ...state,
        is_spinner_loading: true
      };
      case spinner.IS_SPINNER_LOADING_FALSE:
      return {
        ...state,
        is_spinner_loading: false
      };
      default:
        return state;
    }
  }

  export default Single_Post
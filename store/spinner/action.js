export const spinner = {
  IS_SPINNER_LOADING_FALSE: 'IS_SPINNER_LOADING_FALSE',
  IS_SPINNER_LOADING_TRUE: 'IS_SPINNER_LOADING_TRUE',
};

export const is_Spinner_loading_true = () => async dispatch => {
  dispatch({
    type: spinner.IS_SPINNER_LOADING_TRUE,
  });
};
export const is_Spinner_loading_false = () => async dispatch => {
  dispatch({
    type: spinner.IS_SPINNER_LOADING_FALSE,
  });
};

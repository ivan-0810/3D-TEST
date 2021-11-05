
export const locale = {
  ENGLISH: 'ENGLISH',
  GERMAN: 'GERMAN',
  FRENCH: 'FRENCH',
  SPANISH: 'SPANISH',
  HOLLAND: 'HOLLAND',
  CHINESE: 'CHINESE',
  CHANGE_LANG: 'CHANGE_LANG',
};

export const change_lang = data => async dispatch => {
  dispatch({
    type: locale.CHANGE_LANG,
    data
  });
};

export const elnglish_lang = () => async dispatch => {
  dispatch({
    type: locale.ENGLISH,
  });
};
export const french_lang = () => async dispatch => {
  dispatch({
    type: locale.ENGLISH,
  });
};
export const german_lang = () => async dispatch => {
  dispatch({
    type: locale.GERMAN,
  });
};
export const spanish_lang = () => async dispatch => {
  dispatch({
    type: locale.SPANISH,
  });
};
export const holland_lang = () => async dispatch => {
  dispatch({
    type: locale.HOLLAND,
  });
};
export const chinese_lang = () => async dispatch => {
  dispatch({
    type: locale.CHINESE,
  });
};


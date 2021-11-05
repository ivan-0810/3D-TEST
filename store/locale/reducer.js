import { locale } from '../locale/action';
import { fr, gb, de, es, cn, nl } from '../../constants/locale'
const InitialState = {
  selected_lang: {}
};

const  Locale = (state = InitialState, action) => {
  switch (action.type) {
    case locale.CHANGE_LANG:
      console.log(action.data, 'data');
      if(action.data === 'fr'){
        return {
          ...state,
          selected_lang: fr
        }
      }else if(action.data === 'gb') {
        return {
          ...state,
          selected_lang: gb
        }
      }
      else if(action.data === 'es') {
        return {
          ...state,
          selected_lang: es
        }
      }
      else if(action.data === 'de') {
        return {
          ...state,
          selected_lang: de
        }
      }
      else if(action.data === 'nl') {
        return {
          ...state,
          selected_lang: nl
        }
      }
      else if(action.data === 'cn') {
        return {
          ...state,
          selected_lang: cn
        }
      }
      default:
        return {
          ...state,
          selected_lang: fr
        };
    }
  }

  export default Locale;
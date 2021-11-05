import {Fragment} from 'react';
import  reactStringReplace from 'react-string-replace';

export const useBrTag = (string, word, brTag)=> {
    const replaced = reactStringReplace(string, word, (match, i) => (
       <Fragment key={i}>
         {' '}

         {match}{brTag}
       </Fragment>
     ));
     return replaced;
};

export const useAroundBrTag = (string, word, brTag)=> {
  const replaced = reactStringReplace(string, word, (match, i) => (
     <Fragment key={i}>
       {' '}

       {brTag}<mark className="cayen-color">{match}</mark>
     </Fragment>
   ));
   return replaced;
};

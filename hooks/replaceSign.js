import  reactStringReplace from 'react-string-replace';

export const useReplaceSign_R = (string, word) => {
    const replaced = reactStringReplace(string, word, (match, i) => (
       <>
        <mark className="mark-onebeer ml-2 mr-3"> One Beer<span className="r-sign">&reg;</span></mark>
       </>
    ));
    return replaced;
  }
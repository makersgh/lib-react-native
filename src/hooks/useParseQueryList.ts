import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

export const useParseQueryList = (className: string, query: Parse.Query) => {
  const newQuery = new Parse.Query(className);
  return useParseQuery(query ?? newQuery , {
    enableLiveQuery: false,
  });
};

export default useParseQueryList;

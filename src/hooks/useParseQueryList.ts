import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

interface UseParseQueryListProps {
  className: string;
  query?: Parse.Query;
}
export const useParseQueryList = (props: UseParseQueryListProps) => {
  const ParseClass = Parse.Object.extend(props.className);
  const query = new Parse.Query(ParseClass);
  return useParseQuery(props.query ?? query);
};

export default useParseQueryList;

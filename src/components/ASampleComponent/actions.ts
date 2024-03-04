import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function useActions() {
  const navigation = useNavigation();
  const [myState, setMyState] = useState();
  // const myMemo = useMemo(() => ({}), [myState]);
  const myCallback = useCallback(() => {
    // doSomething();
  }, [myState]);
  // useEffect(() => {}, [myState]);

  
  return {
    navigation,
    myState,
    myCallback
  };
}

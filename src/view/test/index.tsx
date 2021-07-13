import React, { FC, useCallback, useMemo, useState } from 'react';

const Index: FC = (props) => {
  const [count, setCount] = useState(0);

  const isEvenNumber = useMemo(() => {
      
    return count % 2 === 0;
  }, [count]);

  const onClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>{count} is {isEvenNumber ? 'even':'odd'} number</div>
      <button onClick={onClick}></button>
    </div>
  );
};

export default Index
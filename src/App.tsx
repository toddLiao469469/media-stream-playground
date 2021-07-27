import { isEmpty, isNil } from 'ramda';
import { useState } from 'react';
import { useMediaStream } from './useMediaStream';

const App = () => {
  const [errorText, setErrorText] = useState('')
  const stream = useMediaStream(setErrorText)

  return (
    <div>
      <pre>
        {errorText === '' ? 'no error' : errorText}
      </pre>
      <pre>
        {isEmpty(stream) ? 'is empty' : 'is not empty'}
      </pre>
      <pre>
        {isNil(stream) ? 'is nil' : 'is not nil'}
      </pre>
    </div>
  );
}

export default App;

import useAccessDevicesStatus from './useAccessMediaStatus';
import {  test } from 'ramda'

const App = () => {
  
  const [accessDevicesStatus]=  useAccessDevicesStatus()
  // console.log(navigator.userAgent,test(/(android)\w*(FBAV|FBAN)/gi,navigator.userAgent));
  return (
    <div>
      <pre>
      accessDevicesStatus:  {accessDevicesStatus}
      </pre>
    </div>
    
  );
}

export default App;

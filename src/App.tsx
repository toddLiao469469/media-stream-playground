import useAccessDevicesStatus from './useAccessMediaStatus';

const App = () => {
  
  const [accessDevicesStatus]=  useAccessDevicesStatus()
  // console.log(navigator.userAgent,test(/(android)\w*(FBAV|FBAN)/gi,navigator.userAgent));
  return (
    <div>
      <pre>
      accessDevicesStatus:  {accessDevicesStatus}
      </pre>
      <pre>
      navigator.userAgent:  {navigator.userAgent}
      </pre>
    </div>
    
  );
}

export default App;

import useAccessDevicesStatus from './useAccessMediaStatus';

const App = () => {
  
  const [accessDevicesStatus,log]=  useAccessDevicesStatus()
  return (
    <div>
      <pre>
      accessDevicesStatus:  {accessDevicesStatus}
      </pre>
      <pre>
      log:{log}
      </pre>
    </div>
    
  );
}

export default App;

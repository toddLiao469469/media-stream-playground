import useAccessDevicesStatus from './useAccessMediaStatus';

const App = () => {
  
  const [accessDevicesStatus,log]=  useAccessDevicesStatus()
  return (
    <div>
      <pre>
      accessDevicesStatus:  {accessDevicesStatus}
      log:{log}
      </pre>
      
    </div>
  );
}

export default App;

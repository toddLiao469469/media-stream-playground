import { useEffect, useState } from 'react'
import { isNil, isEmpty ,test } from 'ramda'
export enum AccessDevicesStatus {
  Default = 'DEFAULT',
  Success = 'SUCCESS',
  Fail = 'FAIL',
  UnCompleted = 'UNCOMPLETED'
}

const getIsAndroidFbInAppWebView = ()=>{
return test(/(android)[\w\W]*(FBAV|FBAN|Instagram)/gi,navigator.userAgent)
}

const useAccessDevicesStatus = () => {
  const [accessDevicesStatus, setAccessDevicesStatus] = useState<AccessDevicesStatus>(AccessDevicesStatus.Default)

  useEffect(() => {
    const checkMediaLabel = async () => {
      try {
        setAccessDevicesStatus(AccessDevicesStatus.UnCompleted)
      
        if(getIsAndroidFbInAppWebView()){
            setAccessDevicesStatus(AccessDevicesStatus.Fail)
        }
         await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
       

        const devices = await navigator.mediaDevices.enumerateDevices()
        const cameraList = devices.filter(device => device.kind === 'videoinput')
        const cameraOneLabel = cameraList[0].label
        if (isNil(cameraOneLabel) || isEmpty(cameraOneLabel)) {
          setAccessDevicesStatus(AccessDevicesStatus.Fail)
        } else {
          setAccessDevicesStatus(AccessDevicesStatus.Success)
        }
      } catch (err) {
        setAccessDevicesStatus(AccessDevicesStatus.Fail)
      }
    }

    checkMediaLabel()
  }, [])

  return [accessDevicesStatus]
}

export default useAccessDevicesStatus

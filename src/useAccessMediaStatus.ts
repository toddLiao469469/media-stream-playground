import { useEffect, useState } from 'react'
import { isNil, isEmpty,test } from 'ramda'
export enum AccessDevicesStatus {
  Default = 'DEFAULT',
  Success = 'SUCCESS',
  Fail = 'FAIL',
  UnCompleted = 'UNCOMPLETED'
}
const useAccessDevicesStatus = () => {
  const [accessDevicesStatus, setAccessDevicesStatus] = useState<AccessDevicesStatus>(AccessDevicesStatus.Default)
  const [log, setLog] = useState<string>('')
  const [fbUA, setfbUA] = useState<boolean>()

  useEffect(() => {
    const checkMediaLabel = async () => {
      try {
        setAccessDevicesStatus(AccessDevicesStatus.UnCompleted)
        if (!navigator.mediaDevices?.getUserMedia) {
          setAccessDevicesStatus(AccessDevicesStatus.Fail)
        }
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        setfbUA(test(/(FBAV|FBAN)/gi,navigator.userAgent))
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

  return [accessDevicesStatus,fbUA]
}

export default useAccessDevicesStatus

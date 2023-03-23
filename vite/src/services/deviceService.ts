const generateRandomPoint = () => ({
  ph: Math.random() * 14,
  tds: Math.round(Math.random() * 800),
})

// Mock function to replicate data-fetching from device.
// Would be handled over bluetooth or wifi depending on
// source and remote device capabilities
export const getDeviceMeasurements = ({
  delay = 5000,
}): Promise<{ ph: number; tds: number }> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay, generateRandomPoint())
  })
}

const deviceService = {
  getDeviceMeasurements,
}

export default deviceService


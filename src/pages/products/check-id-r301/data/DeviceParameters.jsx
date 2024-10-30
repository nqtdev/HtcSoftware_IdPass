// @ Cấu hình data thông số thiết bị
const DeviceParameters = [
  {
    itemA: 'Interface',
    specificationA: 'USB 2.0 Type A or Type C interface (12Mbps)',
    itemB: 'Working Temperature',
    specificationB: '0°C ~ 60 °C',
  },
  {
    itemA: 'Power Supply',
    specificationA: 'USB port 3 ~ 5V DC',
    itemB: 'Storage Temperature',
    specificationB: '-20°C ~ 85°C',
  },
  {
    itemA: 'CPU Card',
    specificationA:
      'ISO/IEC7816, T=0 and T=1 protocol, Class A, B, C cards, \nData transfer speed: 13440 ~ 625kbps \nPower supply: 1.8V, 3V and 5V \nFrequency of card: 5MHz ~ 12MHz \nCard size: ID1',
    itemB: 'Meantime Between Failure (MTBF)',
    specificationB: '500,000 hours',
  },
  {
    itemA: 'Working Current',
    specificationA: '≤ 12mA without card plugged < 50mA with card plugged',
    itemB: 'Connector Cable',
    specificationB: '150cm (59.1")',
  },
  {
    itemA: 'Card Slot',
    specificationA: 'ISO7816-3 standard slot >300,000 times plug/unplug',
    itemB: 'Material',
    specificationB: '	ABS+PC',
  },
  {
    itemA: 'Hardware Security',
    specificationA:
      'Support Card short circuit protection \nBuild in short-circuited / over-voltage protection',
    itemB: 'Color',
    specificationB: 'Black',
  },
  {
    itemA: 'Supported OS',
    specificationA:
      'Windows 2000 / XP / Server 2003 / Vista / Server 2008 / \nServer 2008 R2 / Server 2012 / Server 2012 R2 / 7 / 8 / \n8.1 / 10, Linux, macOS, Solaris, Android 5.0+ (OTG)',
    itemB: 'Size',
    specificationB: '67 × 57.5 × 12.5 mm',
  },
  {
    itemA: 'Certification',
    specificationA:
      'ISO9001 / ISO14001 / CE / FCC / RoHS / EMV Level 1 / ICP-Brasil / Microsoft WHQL, EN60950 / IEC60950, WEEE,REACH',
    itemB: 'Card Clock Frequency',
    specificationB: '5MHz ~ 12MHz',
  },
  {
    itemA: 'Firmware',
    specificationA: 'OEM firmware',
    itemB: 'Warranty',
    specificationB: 'Two-year warranty',
  },
  {
    itemA: 'Humidity',
    specificationA: '≤90% (non-condensed)',
    itemB: 'Transmission Speed',
    specificationB: '50g',
  },
]

export default DeviceParameters

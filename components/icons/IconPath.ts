const iconMapping: { [key: number]: string } = {
  1000: '/ruta/a/tu/icono/sunny.png',
  1003: '/svg/wi-day-cloudy.svg'
}

export function IconPath(code: number) {
  return iconMapping[code]
}

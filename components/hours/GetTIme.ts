export function GetFormatter(fecha: string) {
  // Fecha en formato "2024-01-13 10:23"
  const fechaOriginal = new Date(fecha)

  // Días de la semana en inglés
  const diasSemana = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  // Meses en inglés
  const meses = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // Obtener el día de la semana, el día del mes y el mes
  const diaSemana = diasSemana[fechaOriginal.getUTCDay()]
  const diaMes = fechaOriginal.getUTCDate()
  const mes = meses[fechaOriginal.getUTCMonth()]
  const ano = fechaOriginal.getUTCFullYear()

  // Formatear la fecha en el formato deseado
  const fechaFormateada = diaSemana + ' ' + diaMes + ', ' + mes + ' ' + ano
  const fechaFormateada2 = diaSemana + ' ' + diaMes

  return { fechaFormateada, fechaFormateada2 }
}

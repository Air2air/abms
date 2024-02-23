export const eventBrite =
  'https://www.eventbrite.com/e/2019-moasf-blackhawk-all-british-motor-show-tickets-163495711073'

const showDate = '2024-10-20'
const currentUnixDate = new Date()
const showUnixDate = new Date(showDate)

export const showDateLong = new Date(showDate).toLocaleDateString('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

const timeInMillisec = currentUnixDate.getTime() - showUnixDate.getTime()
const daysBetweenDates = -Math.ceil(timeInMillisec / (1000 * 60 * 60 * 24))

export const alertMessage = `${daysBetweenDates} days left until the show!`
export const alertMessage2 = `Celebrating 31 years in the Bay Area`

export const breakpoint = 768

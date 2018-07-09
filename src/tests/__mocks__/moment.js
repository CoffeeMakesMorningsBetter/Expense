const moment = require.requireActual('moment')

// forces moment to uses this so dates wont be off
export default (timestamp = 0) => {
  return moment(timestamp)
}
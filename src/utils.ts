import {add} from "date-fns"

export const getUTCDate2 = (date: Date) => {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes()))
}

export const getUTCDate = (date: Date) => {
  return add(date, {minutes: date.getTimezoneOffset()})
}
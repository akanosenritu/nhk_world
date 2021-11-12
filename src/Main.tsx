import React from "react"
import {format, sub} from "date-fns"
import Day from "./Day"
import Links from "./Links"

const Main: React.FC = () => {
  const today = format(
    sub(new Date(), {hours: 4}), 
    "yyyy-MM-dd"
    )
  return <div>
    <h3>Los articulos de días de NHK World Spanish</h3>
    <Links />
    <Day date={today}/>
  </div>
}

export default Main
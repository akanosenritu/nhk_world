import {format} from "date-fns-tz"
import {sub} from "date-fns"
import {getUTCDate} from "./utils"
import {Box} from "@mui/material"
import {Link} from "react-router-dom"

const Links = () => {
  const today = sub(getUTCDate(new Date()), {hours: 4})
  const week = [0, 1, 2, 3, 4, 5, 6].map(num => sub(today, {days: num}))
  return <Box sx={{display: "flex"}}>
    {week.map(date => <Box ml={1}><Link to={format(date, "yyyy-MM-dd")}>{format(date, "MM/dd")}</Link></Box>)}
  </Box>
}

export default Links
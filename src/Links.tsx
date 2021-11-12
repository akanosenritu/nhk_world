import {format, sub} from "date-fns"
import {Box} from "@mui/material"
import {Link} from "react-router-dom"

const Links = () => {
  const today = sub(new Date(), {hours: 4})
  const week = [0, 1, 2, 3, 4, 5, 6].map(num => sub(today, {days: num})).map(date => format(date, "MM/dd"))
  return <Box sx={{display: "flex"}}>
    {week.map(date => <Box ml={1}><Link to={date}>{date}</Link></Box>)}
  </Box>
}

export default Links
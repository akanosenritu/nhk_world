import React from "react"
import useSWR from "swr"
import {Box} from "@mui/material"
import Article from "./Article"
import {useParams} from "react-router-dom"

type Props = {
  date: string
}


const constructURL = (date: string) => `https://nhkworld.blob.core.windows.net/articles/${date}_info.txt`
const fetcher = (url: string) => fetch(url).then((res) => res.text());

const Day: React.FC<Props> = props => {
  const {data, error} = useSWR(
    constructURL(props.date),
    fetcher
  )

  if (error) return <p>An error has occurred.</p>
  if (!data) return <p>Loading...</p>

  return <Box m={2}>
    <h4>{props.date}</h4>
    {data.split("\n").map(title => <Article date={props.date} title={title} />)}
  </Box>
}

export const RoutedDay = () => {
  const params = useParams()
  const date = params.date
  if (!date) return <p>An error has occurred.</p>
  return <Day date={date}/> 
}

export default Day
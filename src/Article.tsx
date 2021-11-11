import React from "react"
import useSWR from "swr"
import Box from "@mui/material/Box"

type Props = {
  date: string,
  title: string,
}

const constructURL = (date: string, title: string) => `https://nhkworld.blob.core.windows.net/articles/${date}_${title}.txt`
const fetcher = (url: string) => fetch(url).then((res) => res.text());

const Article: React.FC<Props> = props => {
  const {data, error} = useSWR(
    constructURL(props.date, props.title),
    fetcher
  )

  if (error) return <p>An error has occurred.</p>
  if (!data) return <p>Loading...</p>

  return <Box m={2}>
    <h4>{props.title}</h4>
    <p>{data}</p>
  </Box>
}

export default Article
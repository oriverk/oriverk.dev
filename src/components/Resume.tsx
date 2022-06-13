import React from "react"
import useSWR from "swr"

import { readmeFetcher } from "../utils/fetcher";
import { DangerouslySetInnerHTML } from "./DangerouslySetInnerHTML";

type Props = {
  owner: string;
  repo: string;
  type: 'raw' | 'html';
}

const Component: React.FC<Props> = (props) => {
  const { owner, repo, type } = props;
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`
  const { data = ''} = useSWR([url, type], readmeFetcher)

  return <DangerouslySetInnerHTML html={data} />
}

export default Component


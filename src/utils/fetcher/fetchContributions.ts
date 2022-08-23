import { GraphQLClient } from 'graphql-request'
import { getSdk } from "../../graphql/generated/graphql"

/**
 * @param token
 * @param githubId
 * @param weedTo
 * @param weedFrom
 * weedFrom: Only contributions made at this time or later will be counted. If omitted, defaults to a year ago
 * @returns 
 */
export async function fetchContributions(token: string, githubId: string, weedTo: Date, weedFrom?: Date) {
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
  const sdk = getSdk(client)
  const response = await sdk.getGithub({ githubId, weedFrom, weedTo })

  return response
}
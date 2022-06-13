/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type ContributionCalendar = {
  __typename?: 'ContributionCalendar';
  colors: Array<Scalars['String']>;
  totalContributions: Scalars['Int'];
  weeks: Array<ContributionCalendarWeek>;
};

export type ContributionCalendarDay = {
  __typename?: 'ContributionCalendarDay';
  color: Scalars['String'];
  contributionCount: Scalars['Int'];
  contributionLevel: ContributionLevel;
  date: Scalars['Date'];
};

export type ContributionCalendarWeek = {
  __typename?: 'ContributionCalendarWeek';
  contributionDays: Array<ContributionCalendarDay>;
};

export enum ContributionLevel {
  FirstQuartile = 'FIRST_QUARTILE',
  FourthQuartile = 'FOURTH_QUARTILE',
  None = 'NONE',
  SecondQuartile = 'SECOND_QUARTILE',
  ThirdQuartile = 'THIRD_QUARTILE'
}

export type ContributionsCollection = {
  __typename?: 'ContributionsCollection';
  contributionCalendar: ContributionCalendar;
};

export type PinnableItem = Repository;

export type PinnableItemConnection = {
  __typename?: 'PinnableItemConnection';
  nodes?: Maybe<Array<Maybe<PinnableItem>>>;
};

export enum PinnableItemType {
  Gist = 'GIST',
  Issue = 'ISSUE',
  Organization = 'ORGANIZATION',
  Project = 'PROJECT',
  PullRequest = 'PULL_REQUEST',
  Repository = 'REPOSITORY',
  Team = 'TEAM',
  User = 'USER'
}

export type PrimaryLanguage = {
  __typename?: 'PrimaryLanguage';
  color: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  login: Scalars['String'];
};

export type Repository = {
  __typename?: 'Repository';
  description: Scalars['String'];
  name: Scalars['String'];
  primaryLanguage?: Maybe<PrimaryLanguage>;
  stargazerCount: Scalars['Int'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  contributionsCollection: ContributionsCollection;
  pinnedItems: PinnableItemConnection;
};


export type UserContributionsCollectionArgs = {
  from?: InputMaybe<Scalars['DateTime']>;
  to?: InputMaybe<Scalars['DateTime']>;
};


export type UserPinnedItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<PinnableItemType>>;
};

export type GetGithubQueryVariables = Exact<{
  githubId: Scalars['String'];
  weedFrom?: InputMaybe<Scalars['DateTime']>;
  weedTo: Scalars['DateTime'];
}>;


export type GetGithubQuery = { __typename?: 'Query', user: { __typename?: 'User', pinnedItems: { __typename?: 'PinnableItemConnection', nodes?: Array<{ __typename?: 'Repository', url: string, name: string, description: string, stargazerCount: number, primaryLanguage?: { __typename?: 'PrimaryLanguage', color: string, name: string } | null } | null> | null }, contributionsCollection: { __typename?: 'ContributionsCollection', contributionCalendar: { __typename?: 'ContributionCalendar', colors: Array<string>, totalContributions: number, weeks: Array<{ __typename?: 'ContributionCalendarWeek', contributionDays: Array<{ __typename?: 'ContributionCalendarDay', contributionCount: number, contributionLevel: ContributionLevel, date: any, color: string }> }> } } } };


export const GetGithubDocument = gql`
    query getGithub($githubId: String!, $weedFrom: DateTime, $weedTo: DateTime!) {
  user(login: $githubId) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          url
          name
          description
          primaryLanguage {
            color
            name
          }
          stargazerCount
        }
      }
    }
    contributionsCollection(from: $weedFrom, to: $weedTo) {
      contributionCalendar {
        colors
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
            color
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getGithub(variables: GetGithubQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGithubQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGithubQuery>(GetGithubDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGithub', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

import { gql } from 'graphql-tag';

// Define your GraphQL query
export const GET_EPISODES = gql`
  query EPISODES {
    episodes {
      results {
        characters {
          id
          name
          status
          species
          type
          image
        }
      }
    }
  }
`;

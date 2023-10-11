import { gql } from "../__generated__";




// Define your GraphQL query
export const GET_EPISODES = gql(`
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
`);

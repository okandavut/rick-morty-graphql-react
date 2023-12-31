import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
      }
  }
}`

export { GET_ALL_CHARACTERS }

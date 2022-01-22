import * as React from 'react'
import { graphql } from 'gatsby'

export const Card = ({ slice }) => "TEST";

export const query = graphql`
query MyQuery {
    prismicCard {
      data {
        body {
          ... on PrismicCardDataBodyCard {
            id
            primary {
              frequency
              bp_xp {
                text
              }
              description {
                text
              }
            }
          }
        }
      }
    }
  }  
`


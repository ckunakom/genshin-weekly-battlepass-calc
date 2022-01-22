// Need to update
import * as React from 'react'
import { graphql } from 'gatsby'

export const Component = ({ slice }) => {
    console.log('slice', slice);
    return <p></p>
};

export const query = graphql`

  fragment HomepageDataBodyComponent on PrismicHomepageDataBodyComponent {
    primary {
        component
    }
  }
`
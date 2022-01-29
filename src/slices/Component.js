// Need to update
import * as React from 'react'
import { graphql } from 'gatsby'
import { Cards } from './Cards';

export const Component = ({ slice }) => {
  const { component } = slice.primary;
  console.log('this is component.js: ', slice);
  if (component === "cards") {
    return <Cards />
  }
};

export const query = graphql`
  fragment HomepageDataBodyComponent on PrismicHomepageDataBodyComponent {
    primary {
        component
    }
  }

`
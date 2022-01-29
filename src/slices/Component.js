// Need to update
import * as React from 'react'
import { graphql } from 'gatsby'
import { Card } from './Card';

export const Component = ({ slice }) => {
  const { component } = slice.primary;
  console.log('this is component.js: ', slice);
  if (component === "cards") {
    return <Card></Card>
  }
};

export const query = graphql`
  fragment HomepageDataBodyComponent on PrismicHomepageDataBodyComponent {
    primary {
        component
    }
  }

`
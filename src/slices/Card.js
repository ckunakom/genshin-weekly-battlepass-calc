import * as React from "react";
import { graphql } from "gatsby";

export const Card = ( slice ) => {
  console.log('Show me slice result: ', slice);
  return 'something'
};

export const query = graphql`
  fragment HomepagePrismicCard on PrismicCardDataBodyCard {
    primary {
      bp_xp {
        text
      }
      description {
        text
      }
      frequency
    }
  }
`



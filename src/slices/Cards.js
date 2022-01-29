import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

export const Cards = () => {
  const render = (data) => {
    if (!data) return;

    const { body } = data.prismicCard.data;
    const cards = body.map((card) => {
      const id = card.id;
      const { bp_xp, description, frequency } = card.primary;
      const { text } = description;

      // primary = { bp_xp, description, frequency }
      // const bp_xp = card.primary.bp_xp;
      // const description = card.primary.description;
      // const frequency = card.primary.frequency;
      return {
        id,
        bp_xp,
        frequency,
        description: text,
      };
    });

    return (
      <div>
        {cards.map((card) => {
          const { id, bp_xp, description, frequency } = card;
          return (

              <div class="card">
                <div>
                  <h4>{bp_xp}</h4>
                  <h5>  {description} </h5>
                </div>
              </div>
             
          );
        })}
      </div>
    );
  };
  return (
    <StaticQuery
      query={graphql`
        {
          prismicCard {
            id
            data {
              body {
                ... on PrismicCardDataBodyCard {
                  id
                  primary {
                    bp_xp
                    description {
                      text
                    }
                    frequency
                  }
                }
              }
            }
          }
        }
      `}
      render={render}
    ></StaticQuery>
  );
};

import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import ShortHero from "../../shortHero";
import FamilyStorePic from "../../../aboutUs/familyDronePic.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  text-align: center;
`;

const Headline = styled.div`
  font-size: 27px;
  font-weight: bold;
`;

const Cancelled = () => (
  <div>
    <Helmet>
      <title>Order Cancelled :: The Meatball Stoppe</title>
    </Helmet>
    <ShortHero image={FamilyStorePic} headline="Order cancelled" />
    <Container>
      <div>
        <Headline>
          Looks like your order was cancelled{" "}
          <span role="img" aria-label="red x">
            ❌
          </span>
        </Headline>
        <div>Feel free to try again</div>
      </div>
    </Container>
  </div>
);

export default Cancelled;

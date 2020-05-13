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

const Success = () => (
  <div>
    <Helmet>
      <title>Order Successfull :: The Meatball Stoppe</title>
    </Helmet>
    <ShortHero image={FamilyStorePic} headline="Order successful" />
    <Container>
      <div>
        <Headline>
          Your order was a success{" "}
          <span role="img" aria-label="thums up">
            👍
          </span>
        </Headline>
        <div>
          Check your email for the receipt. If you have questions about your
          order, feel free to reach out to us directly at 407-270-6505.
        </div>
      </div>
    </Container>
  </div>
);

export default Success;

import InlineCluster from "@bedrock-layout/inline-cluster";
import { SpacingTypes, spacing } from "@bedrock-layout/spacing-constants";
import { select } from "@storybook/addon-knobs";
import React from "react";
import styled from "styled-components";

const BorderedBox = styled.div`
  border: 1px solid black;
`;
BorderedBox.displayName = "BorderedBox";

const title = "InlineCluster";
const name = "Basic";

function Example() {
  const gutter = select("gutter", Object.keys(spacing), "lg");
  const justify = select("justify", ["start", "end", "center"], "start");
  const align = select("align", ["start", "end", "center"], "start");
  return (
    <InlineCluster
      justify={justify}
      align={align}
      gutter={gutter as SpacingTypes}
      style={{ margin: "1rem 0" }}
    >
      <BorderedBox style={{ height: 100 }}>Lorem ipsum dolor</BorderedBox>
      <BorderedBox>sit amet consectetur adipisicing elit.</BorderedBox>
      <BorderedBox>Fuga consequuntur</BorderedBox>
      <BorderedBox>corrupti beatae commodi vitae</BorderedBox>
    </InlineCluster>
  );
}

Example.story = { name };
export const Comp = Example;
export default {
  title,
};

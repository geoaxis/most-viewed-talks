/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function MainHeading(props) {
  const {
    title = "TitleC",
    subheading = "SubheadingC",
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MainHeading")}
    >
      <Heading
        label="Most viewed talks AWS reInvent 2022"
        shrink="0"
        level="6"
        children={title}
        {...getOverrideProps(overrides, "Heading34891054")}
      ></Heading>
      <Heading
        label="Subheading"
        shrink="0"
        level="6"
        children={subheading}
        {...getOverrideProps(overrides, "Heading34891056")}
      ></Heading>
    </Flex>
  );
}

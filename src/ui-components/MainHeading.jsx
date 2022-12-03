/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, View } from "@aws-amplify/ui-react";
export default function MainHeading(props) {
  const {
    title = "TitleC",
    subheading = "SubheadingC",
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="530px"
      height="156px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MainHeading")}
    >
      <View
        width="530px"
        height="156px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Heading
        label="Most viewed talks AWS reInvent 2022"
        width="409px"
        height="104px"
        position="absolute"
        top="calc(50% - 52px - 13px)"
        left="calc(50% - 204.5px - -0.5px)"
        level="4"
        children={title}
        {...getOverrideProps(overrides, "Heading34891054")}
      ></Heading>
      <Heading
        label="Subheading"
        width="486.14px"
        height="20px"
        position="absolute"
        top="68.59%"
        bottom="18.59%"
        left="3.67%"
        right="4.6%"
        level="6"
        children={subheading}
        {...getOverrideProps(overrides, "Heading34891056")}
      ></Heading>
    </View>
  );
}

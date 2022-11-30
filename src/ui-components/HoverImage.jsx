/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function HoverImage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="330px"
      height="190px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="5px SOLID rgba(119,17,144,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(24,15,15,1)"
      {...rest}
      {...getOverrideProps(overrides, "HoverImage")}
    >
      <Image
        width="320px"
        height="180px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}

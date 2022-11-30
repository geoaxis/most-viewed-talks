/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { YoutubeVideoCardProps } from "./YoutubeVideoCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type YoutubeVideoCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => YoutubeVideoCardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function YoutubeVideoCardCollection(props: YoutubeVideoCardCollectionProps): React.ReactElement;

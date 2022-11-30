/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { PlaylistItem } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import YoutubeVideoCard from "./YoutubeVideoCard";
import { Collection } from "@aws-amplify/ui-react";
export default function YoutubeVideoCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) =>
      s
        .videoPlays(SortDirection.ASCENDING)
        .videoPlays(SortDirection.DESCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: PlaylistItem,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "YoutubeVideoCardCollection")}
    >
      {(item, index) => (
        <YoutubeVideoCard
          playlistName={item.playlistName}
          videoTitle={item.videoTitle}
          videoDescription={item.videoDescription}
          videoPlays={item.videoPlays}
          videoThumbnailUrl={item.videoThumbnail}
          id={item.id}
          height="auto"
          width="auto"
          margin="1rem 1rem 1rem 1rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></YoutubeVideoCard>
      )}
    </Collection>
  );
}

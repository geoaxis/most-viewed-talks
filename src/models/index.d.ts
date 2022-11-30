import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlaylistItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlaylistItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playlistName?: string | null;
  readonly videoTitle?: string | null;
  readonly videoDescription?: string | null;
  readonly videoPlays?: number | null;
  readonly videoThumbnail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlaylistItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlaylistItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playlistName?: string | null;
  readonly videoTitle?: string | null;
  readonly videoDescription?: string | null;
  readonly videoPlays?: number | null;
  readonly videoThumbnail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlaylistItem = LazyLoading extends LazyLoadingDisabled ? EagerPlaylistItem : LazyPlaylistItem

export declare const PlaylistItem: (new (init: ModelInit<PlaylistItem>) => PlaylistItem) & {
  copyOf(source: PlaylistItem, mutator: (draft: MutableModel<PlaylistItem>) => MutableModel<PlaylistItem> | void): PlaylistItem;
}
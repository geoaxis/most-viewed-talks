/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PlaylistItem } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PlaylistItemCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    playlistName: undefined,
    videoTitle: undefined,
    videoDescription: undefined,
    videoPlays: undefined,
    videoThumbnail: undefined,
  };
  const [playlistName, setPlaylistName] = React.useState(
    initialValues.playlistName
  );
  const [videoTitle, setVideoTitle] = React.useState(initialValues.videoTitle);
  const [videoDescription, setVideoDescription] = React.useState(
    initialValues.videoDescription
  );
  const [videoPlays, setVideoPlays] = React.useState(initialValues.videoPlays);
  const [videoThumbnail, setVideoThumbnail] = React.useState(
    initialValues.videoThumbnail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlaylistName(initialValues.playlistName);
    setVideoTitle(initialValues.videoTitle);
    setVideoDescription(initialValues.videoDescription);
    setVideoPlays(initialValues.videoPlays);
    setVideoThumbnail(initialValues.videoThumbnail);
    setErrors({});
  };
  const validations = {
    playlistName: [],
    videoTitle: [],
    videoDescription: [],
    videoPlays: [],
    videoThumbnail: [{ type: "URL" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          playlistName,
          videoTitle,
          videoDescription,
          videoPlays,
          videoThumbnail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new PlaylistItem(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PlaylistItemCreateForm")}
    >
      <TextField
        label="Playlist name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playlistName: value,
              videoTitle,
              videoDescription,
              videoPlays,
              videoThumbnail,
            };
            const result = onChange(modelFields);
            value = result?.playlistName ?? value;
          }
          if (errors.playlistName?.hasError) {
            runValidationTasks("playlistName", value);
          }
          setPlaylistName(value);
        }}
        onBlur={() => runValidationTasks("playlistName", playlistName)}
        errorMessage={errors.playlistName?.errorMessage}
        hasError={errors.playlistName?.hasError}
        {...getOverrideProps(overrides, "playlistName")}
      ></TextField>
      <TextField
        label="Video title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playlistName,
              videoTitle: value,
              videoDescription,
              videoPlays,
              videoThumbnail,
            };
            const result = onChange(modelFields);
            value = result?.videoTitle ?? value;
          }
          if (errors.videoTitle?.hasError) {
            runValidationTasks("videoTitle", value);
          }
          setVideoTitle(value);
        }}
        onBlur={() => runValidationTasks("videoTitle", videoTitle)}
        errorMessage={errors.videoTitle?.errorMessage}
        hasError={errors.videoTitle?.hasError}
        {...getOverrideProps(overrides, "videoTitle")}
      ></TextField>
      <TextField
        label="Video description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playlistName,
              videoTitle,
              videoDescription: value,
              videoPlays,
              videoThumbnail,
            };
            const result = onChange(modelFields);
            value = result?.videoDescription ?? value;
          }
          if (errors.videoDescription?.hasError) {
            runValidationTasks("videoDescription", value);
          }
          setVideoDescription(value);
        }}
        onBlur={() => runValidationTasks("videoDescription", videoDescription)}
        errorMessage={errors.videoDescription?.errorMessage}
        hasError={errors.videoDescription?.hasError}
        {...getOverrideProps(overrides, "videoDescription")}
      ></TextField>
      <TextField
        label="Video plays"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              videoPlays: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              playlistName,
              videoTitle,
              videoDescription,
              videoPlays: value,
              videoThumbnail,
            };
            const result = onChange(modelFields);
            value = result?.videoPlays ?? value;
          }
          if (errors.videoPlays?.hasError) {
            runValidationTasks("videoPlays", value);
          }
          setVideoPlays(value);
        }}
        onBlur={() => runValidationTasks("videoPlays", videoPlays)}
        errorMessage={errors.videoPlays?.errorMessage}
        hasError={errors.videoPlays?.hasError}
        {...getOverrideProps(overrides, "videoPlays")}
      ></TextField>
      <TextField
        label="Video thumbnail"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playlistName,
              videoTitle,
              videoDescription,
              videoPlays,
              videoThumbnail: value,
            };
            const result = onChange(modelFields);
            value = result?.videoThumbnail ?? value;
          }
          if (errors.videoThumbnail?.hasError) {
            runValidationTasks("videoThumbnail", value);
          }
          setVideoThumbnail(value);
        }}
        onBlur={() => runValidationTasks("videoThumbnail", videoThumbnail)}
        errorMessage={errors.videoThumbnail?.errorMessage}
        hasError={errors.videoThumbnail?.hasError}
        {...getOverrideProps(overrides, "videoThumbnail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

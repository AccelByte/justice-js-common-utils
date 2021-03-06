/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateUuidV4WithoutHyphenErrorType = Enum(
  CommonValidationErrorType.empty,
  CommonValidationErrorType.invalidFormat
);
export type ValidateUuidV4WithoutHyphenErrorType = Enum<typeof ValidateUuidV4WithoutHyphenErrorType>;

export interface ValidateUuidV4WithoutHyphenOptions {
  isRequired?: boolean;
}

export const validateUuidV4WithoutHyphen = (
  value: string,
  { isRequired = true }: ValidateUuidV4WithoutHyphenOptions = {}
) => {
  const REGEX = "^[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15}$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateUuidV4WithoutHyphenErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateUuidV4WithoutHyphenErrorType.invalidFormat;
  }

  return null;
};

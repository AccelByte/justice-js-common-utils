/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateSubdomainErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateSubdomainErrorType = Enum<typeof ValidateSubdomainErrorType>;

export interface ValidateSubdomainOptions {
  maxLength?: number;
  isRequired?: boolean;
}

export const validateSubdomain = (
  value: string,
  { maxLength = 63, isRequired = true }: ValidateSubdomainOptions = {}) => {
  const REGEX = "^\w[\w.-]+\w$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateSubdomainErrorType.empty;
  }
  if (!matches(value, REGEX) && value.length <= maxLength) {
    return ValidateSubdomainErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};

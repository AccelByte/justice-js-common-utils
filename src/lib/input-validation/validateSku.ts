/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateSkuErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateSkuErrorType = Enum<typeof ValidateSkuErrorType>;

const MAXIMUM_SKU_LENGTH = 32;

export interface ValidateSkuOptions {
  isRequired?: boolean;
  maxLength?: number;
}

export const validateSku = (
  value: string,
  { isRequired = true, maxLength = MAXIMUM_SKU_LENGTH }: ValidateSkuOptions = {}
) => {
  const REGEX = "^[a-zA-Z0-9]+([_:-]{1}[a-zA-Z0-9]+)*$|^$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateSkuErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateSkuErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};

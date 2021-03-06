/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, isNumeric } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType, ThrownErrorType } from "./constant/errorType";

export const ValidateNumericErrorType = Enum(
  CommonValidationErrorType.empty,
  CommonValidationErrorType.lessThanMinimumValue,
  CommonValidationErrorType.exceedMaximumValue,
  CommonValidationErrorType.invalidValue,
  CommonValidationErrorType.containsDecimal
);
export type ValidateNumericErrorType = Enum<typeof ValidateNumericErrorType>;

export interface ValidateNumericOption {
  min?: number;
  max?: number;
  isRequired?: boolean;
  excludedNumbers?: number[];
  allowDecimal?: boolean;
}

export const validateNumeric = (
  value: string,
  {
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    isRequired = true,
    excludedNumbers = [],
    allowDecimal = true,
  }: ValidateNumericOption = {}
) => {
  const isMaxOptionSmallerThanMinOption = max < min;
  const isDecimalNumber = Number(value) % 1 !== 0;
  if (isMaxOptionSmallerThanMinOption) {
    throw new Error(ThrownErrorType.invalidOption);
  }
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateNumericErrorType.empty;
  }
  if (!isNumeric(value) || Number(value) in excludedNumbers) {
    return ValidateNumericErrorType.invalidValue;
  }
  if (Number(value) < min) {
    return ValidateNumericErrorType.lessThanMinimumValue;
  }
  if (Number(value) > max) {
    return ValidateNumericErrorType.exceedMaximumValue;
  }
  if (!allowDecimal && isDecimalNumber) {
    return ValidateNumericErrorType.containsDecimal;
  }

  return null;
};

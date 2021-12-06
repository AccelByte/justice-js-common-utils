/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateSubdomain, ValidateSubdomainErrorType } from "./validateSubdomain";

const mockValidateSubdomain = jest.fn(validateSubdomain);
afterEach(mockValidateSubdomain.mockClear);
afterAll(mockValidateSubdomain.mockRestore);

describe("validateSubdomain returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateSubdomain("", { isRequired: false });
    expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
    expect(mockValidateSubdomain).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateSubdomain("");
    expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
    expect(mockValidateSubdomain).toHaveReturnedWith(ValidateSubdomainErrorType.empty);
  });

  it("returns error string containing `exceedLengthLimit` when given alpha with length of more than 63", () => {
    mockValidateSubdomain(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl"
    );
    expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
    expect(mockValidateSubdomain).toHaveReturnedWith(ValidateSubdomainErrorType.exceedLengthLimit);
  });

  it("returns error string `invalid format` when given alphanumeric with symbol", () => {
    mockValidateSubdomain("alpha123#!@#");
    expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
    expect(mockValidateSubdomain).toHaveReturnedWith(ValidateSubdomainErrorType.invalidFormat);
  });

  it(
    "returns error string `invalid format` when it contains valid regex alphanumeric with" +
      " dash in the beginning of the string",
    () => {
      mockValidateSubdomain("-alpha123");
      expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
      expect(mockValidateSubdomain).toHaveReturnedWith(ValidateSubdomainErrorType.invalidFormat);
  });

  it(
    "returns error string `invalid format` when it contains valid regex alphanumeric with" +
      " dash in the end of the string",
    () => {
      mockValidateSubdomain("alpha123-");
      expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
      expect(mockValidateSubdomain).toHaveReturnedWith(ValidateSubdomainErrorType.invalidFormat);
  });

});

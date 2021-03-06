/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateMemorySizeNonNomad, ValidateMemorySizeNonNomadErrorType } from "./validateMemorySizeNonNomad";

const mockValidateMemorySize = jest.fn(validateMemorySizeNonNomad);
afterEach(mockValidateMemorySize.mockClear);
afterAll(mockValidateMemorySize.mockRestore);

describe("validateMemorySize returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateMemorySize("", { isRequired: false });
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string started in numbers and ended in `Mi`", () => {
    mockValidateMemorySize("100Mi");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given a string started in numbers and ended in `Mi`, with a total max length of 9", () => {
    mockValidateMemorySize("1000000Mi");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given a string started in numbers and ended in `m`, with a total max length of more than 9", () => {
    mockValidateMemorySize("10000000Mi");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeNonNomadErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateMemorySize("");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeNonNomadErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given a string started in numbers and ended in characters other than `Mi`", () => {
    mockValidateMemorySize("10000m");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeNonNomadErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only numbers", () => {
    mockValidateMemorySize("10000");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeNonNomadErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only symbols", () => {
    mockValidateMemorySize("!!!");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeNonNomadErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only alphabets", () => {
    mockValidateMemorySize("asd");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeNonNomadErrorType.invalidFormat);
  });
});

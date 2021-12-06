"use strict";
/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateSubdomain_1 = require("./validateSubdomain");
var mockValidateSubdomain = jest.fn(validateSubdomain_1.validateSubdomain);
afterEach(mockValidateSubdomain.mockClear);
afterAll(mockValidateSubdomain.mockRestore);
describe("validateSubdomain returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateSubdomain("", { isRequired: false });
        expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
        expect(mockValidateSubdomain).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateSubdomain("");
        expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
        expect(mockValidateSubdomain).toHaveReturnedWith(validateSubdomain_1.ValidateSubdomainErrorType.empty);
    });
    it("returns error string containing `exceedLengthLimit` when given alpha with length of more than 63", function () {
        mockValidateSubdomain("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl");
        expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
        expect(mockValidateSubdomain).toHaveReturnedWith(validateSubdomain_1.ValidateSubdomainErrorType.exceedLengthLimit);
    });
    it("returns error string `invalid format` when given alphanumeric with symbol", function () {
        mockValidateSubdomain("alpha123#!@#");
        expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
        expect(mockValidateSubdomain).toHaveReturnedWith(validateSubdomain_1.ValidateSubdomainErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when it contains valid regex alphanumeric with" +
        " dash in the beginning of the string", function () {
        mockValidateSubdomain("-alpha123");
        expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
        expect(mockValidateSubdomain).toHaveReturnedWith(validateSubdomain_1.ValidateSubdomainErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when it contains valid regex alphanumeric with" +
        " dash in the end of the string", function () {
        mockValidateSubdomain("alpha123-");
        expect(mockValidateSubdomain).toHaveBeenCalledTimes(1);
        expect(mockValidateSubdomain).toHaveReturnedWith(validateSubdomain_1.ValidateSubdomainErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdWJkb21haW4udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVN1YmRvbWFpbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHlEQUFvRjtBQUVwRixJQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMscUNBQWlCLENBQUMsQ0FBQztBQUN6RCxTQUFTLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQywwQ0FBMEMsRUFBRTtJQUNuRCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYscUJBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsa0JBQWtCLENBQUMsOENBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0dBQWtHLEVBQUU7UUFDckcscUJBQXFCLENBQ25CLGtFQUFrRSxDQUNuRSxDQUFDO1FBQ0YsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsa0JBQWtCLENBQUMsOENBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyRUFBMkUsRUFBRTtRQUM5RSxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4Q0FBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FDQSxzRkFBc0Y7UUFDcEYsc0NBQXNDLEVBQ3hDO1FBQ0UscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsa0JBQWtCLENBQUMsOENBQTBCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQ0Esc0ZBQXNGO1FBQ3BGLGdDQUFnQyxFQUNsQztRQUNFLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDhDQUEwQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9GLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==
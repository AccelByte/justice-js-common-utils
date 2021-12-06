"use strict";
/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
exports.ValidateSubdomainErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateSubdomain = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? 63 : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    var REGEX = "^\w[\w.-]+\w$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateSubdomainErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX) && value.length <= maxLength) {
        return exports.ValidateSubdomainErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdWJkb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTdWJkb21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsMEJBQTBCLEdBQUcsa0JBQVUsQ0FDbEQsd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQVFXLFFBQUEsaUJBQWlCLEdBQUcsVUFDL0IsS0FBYSxFQUNiLEVBQW9FO1FBQXBFLDRCQUFvRSxFQUFsRSxpQkFBYyxFQUFkLG1DQUFjLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQjtJQUNuQyxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDOUIsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxrQ0FBMEIsQ0FBQyxLQUFLLENBQUM7S0FDekM7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7UUFDdkQsT0FBTyxrQ0FBMEIsQ0FBQyxhQUFhLENBQUM7S0FDakQ7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDIn0=
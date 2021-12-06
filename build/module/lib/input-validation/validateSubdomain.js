/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateSubdomainErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateSubdomain = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? 63 : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    var REGEX = "^\w[\w.-]+\w$";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdWJkb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTdWJkb21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsVUFBVSxDQUNsRCx1QkFBdUIsRUFDdkIseUJBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBUUYsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsVUFDL0IsS0FBYSxFQUNiLEVBQW9FO1FBQXBFLDRCQUFvRSxFQUFsRSxpQkFBYyxFQUFkLG1DQUFjLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQjtJQUNuQyxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDOUIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDBCQUEwQixDQUFDLEtBQUssQ0FBQztLQUN6QztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1FBQ3ZELE9BQU8sMEJBQTBCLENBQUMsYUFBYSxDQUFDO0tBQ2pEO0lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDIn0=
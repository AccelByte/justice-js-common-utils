import { Enum } from "../../types/types";
export declare const ValidateSubdomainErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateSubdomainErrorType = Enum<typeof ValidateSubdomainErrorType>;
export interface ValidateSubdomainOptions {
    maxLength?: number;
    isRequired?: boolean;
}
export declare const validateSubdomain: (value: string, { maxLength, isRequired }?: ValidateSubdomainOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;

// Copyright (c) 2021 Sendanor. All rights reserved.

import { isBoolean } from "../../../core/types/Boolean";
import { isNumberOrUndefined } from "../../../core/types/Number";
import { isString, isStringOrUndefined } from "../../../core/types/String";

export interface DiscordUnavailableGuildDTO {

    id                          : string;
    unavailable                 : boolean;
    approximate_member_count   ?: number;
    approximate_presence_count ?: number;
    description                ?: string;

}

export function isDiscordUnavailableGuildDTO (value: any) : value is DiscordUnavailableGuildDTO {

    return (
        !!value
        && isString(value?.id)
        && isBoolean(value?.unavailable)
        && isNumberOrUndefined(value?.approximate_member_count)
        && isNumberOrUndefined(value?.approximate_presence_count)
        && isStringOrUndefined(value?.description)
    );

}

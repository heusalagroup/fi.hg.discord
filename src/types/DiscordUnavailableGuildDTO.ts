// Copyright (c) 2021 Sendanor. All rights reserved.

import {
    isBoolean,
    isNumberOrUndefined,
    isString,
    isStringOrUndefined
} from "../hg/core/modules/lodash";

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

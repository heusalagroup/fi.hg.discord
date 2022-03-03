// Copyright (c) 2021 Sendanor. All rights reserved.

import {
    every,
    isArray,
    isString,
    isStringOrUndefined
} from "../../../core/modules/lodash";

export interface DiscordMessageDeleteBulkDTO {

    ids          : string[];
    channel_id   : string;
    guild_id    ?: string;

}

export function isDiscordMessageDeleteBulkDTO (value: any) : value is DiscordMessageDeleteBulkDTO {

    return (
        !!value
        && isArray(value?.ids) && every(value?.ids, isString)
        && isString(value?.channel_id)
        && isStringOrUndefined(value?.guild_id)
    );

}

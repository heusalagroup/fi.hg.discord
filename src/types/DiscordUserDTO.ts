// Copyright (c) 2021 Sendanor. All rights reserved.

import {
    isBooleanOrUndefined,
    isString,
    isStringOrUndefined
} from "../../../ts/modules/lodash";

export interface DiscordUserDTO {

    id             : string;
    username       : string;
    discriminator  : string;
    avatar        ?: string;
    bot           ?: boolean;
    system        ?: boolean;
    locale        ?: string;

}

export function isDiscordUserDTO (value: any) : value is DiscordUserDTO {

    return (
        !!value
        && isString(value?.id)
        && isString(value?.username)
        && isString(value?.discriminator)
        && isStringOrUndefined(value?.avatar)
        && isBooleanOrUndefined(value?.bot)
        && isBooleanOrUndefined(value?.system)
        && isBooleanOrUndefined(value?.locale)
    );

}

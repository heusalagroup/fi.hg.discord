// Copyright (c) 2021 Sendanor. All rights reserved.

import {isBoolean, isString, isStringOrUndefined} from "../../../ts/modules/lodash";

/**
 * For now, this DTO has only been partially described here.
 *
 * @see https://discord.com/developers/docs/resources/application#application-object
 */
export interface DiscordApplicationDTO {

    readonly id: string;
    readonly name: string;
    readonly icon?: string;
    readonly description: string;
    readonly bot_public: boolean;

}

export function isDiscordApplicationDTO(value: any): value is DiscordApplicationDTO {
    return (
        !!value
        && isString(value?.id)
        && isString(value?.name)
        && isStringOrUndefined(value?.icon)
        && isString(value?.description)
        && isBoolean(value?.bot_public)
    );
}

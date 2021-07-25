// Copyright (c) 2021 Sendanor. All rights reserved.

import {
    every,
    isArray,
    isBooleanOrUndefined,
    isString,
    isStringOrUndefined
} from "../nor/ts/modules/lodash";

import {DiscordUserDTO, isDiscordUserDTO} from "./DiscordUserDTO";
import {DiscordEmbedDTO, isDiscordEmbedDTO} from "./DiscordEmbedDTO";

export interface DiscordMessageUpdateDTO {

    id           : string;
    channel_id   : string;
    author      ?: DiscordUserDTO;
    content     ?: string;
    timestamp   ?: string;
    tts         ?: boolean;
    embeds      ?: DiscordEmbedDTO[];

}

export function isDiscordMessageUpdateDTO (value: any) : value is DiscordMessageUpdateDTO {

    return (
        !!value
        && isString(value?.id)
        && isString(value?.channel_id)
        && isStringOrUndefined(value?.timestamp)
        && ( value?.author === undefined || isDiscordUserDTO(value?.author) )
        && isStringOrUndefined(value?.content)
        && isBooleanOrUndefined(value?.tts)
        && ( value?.embeds === undefined || ( isArray(value?.embeds) && every(value?.embeds, isDiscordEmbedDTO) ))
    );

}

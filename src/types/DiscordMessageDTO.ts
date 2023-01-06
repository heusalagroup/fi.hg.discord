// Copyright (c) 2021 Sendanor. All rights reserved.

import {every} from "../../../core/functions/every";
import { isArray} from "../../../core/types/Array";
import { isBoolean} from "../../../core/types/Boolean";
import {isString} from "../../../core/types/String";
import {DiscordUserDTO, isDiscordUserDTO} from "./DiscordUserDTO";
import {DiscordEmbedDTO, isDiscordEmbedDTO} from "./DiscordEmbedDTO";

export interface DiscordMessageDTO {

    id          : string;
    channel_id  : string;
    author      : DiscordUserDTO;
    content     : string;
    timestamp   : string;
    tts         : boolean;
    embeds     ?: DiscordEmbedDTO[];

}

export function isDiscordMessageDTO (value: any) : value is DiscordMessageDTO {

    return (
        !!value
        && isString(value?.id)
        && isString(value?.channel_id)
        && isString(value?.timestamp)
        && isDiscordUserDTO(value?.author)
        && isString(value?.content)
        && isBoolean(value?.tts)
        && ( value?.embeds === undefined || ( isArray(value?.embeds) && every(value?.embeds, isDiscordEmbedDTO) ))
    );

}

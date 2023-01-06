// Copyright (c) 2021 Sendanor. All rights reserved.

import { isString } from "../../../core/types/String";
import { isNumber } from "../../../core/types/Number";
import {DiscordSessionStartLimitDTO, isDiscordSessionStartLimitDTO} from "./DiscordSessionStartLimitDTO";

export interface DiscordBotGatewayDTO {

    readonly url                 : string;
    readonly shards              : number;
    readonly session_start_limit : DiscordSessionStartLimitDTO;

}

export function isDiscordBotGatewayDTO (value : any) : value is DiscordBotGatewayDTO {

    return (
        !!value
        && isString(value?.url)
        && isNumber(value?.shards)
        && isDiscordSessionStartLimitDTO(value?.session_start_limit)
    );

}

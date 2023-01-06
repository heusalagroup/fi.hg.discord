// Copyright (c) 2021 Sendanor. All rights reserved.

import { isNumber } from "../hg/core/functions/isNumber";

import {DiscordGatewayOpDTO} from "./DiscordGatewayOpDTO";
import {DiscordGatewayOp} from "./DiscordGatewayOp";

export interface DiscordGatewayHeartbeatDTO extends DiscordGatewayOpDTO<number|null> {

    readonly op : DiscordGatewayOp.HEARTBEAT;

}

export function isDiscordGatewayHeartbeatDTO (value: any) : value is DiscordGatewayHeartbeatDTO {
    return (
        !!value
        && value?.op === DiscordGatewayOp.HEARTBEAT
        && ( value?.d === null || isNumber(value?.d) )
    );
}

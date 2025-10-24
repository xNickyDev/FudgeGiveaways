import { Context as BaseContext, IContextCache } from "@tryforge/forgescript";
import { IExtendedRunnable } from "../types";
import { Snowflake } from "discord.js";
import { Giveaway, MongoGiveaway } from "./Giveaway";
export interface IExtendedContextCache extends IContextCache {
    giveaway: Giveaway | MongoGiveaway | null;
}
export interface IGiveawayRequirements {
    requiredRoles?: Snowflake[];
    restrictedRoles?: Snowflake[];
    restrictedMembers?: Snowflake[];
}
export declare class Context extends BaseContext {
    #private;
    readonly runtime: IExtendedRunnable;
    requirements: Partial<IGiveawayRequirements>;
    constructor(runtime: IExtendedRunnable);
    get obj(): import("../types").ExtendedSendable;
    get extendedStates(): import("../types").ExtendedStates | undefined;
    get giveaway(): Giveaway | null;
}
//# sourceMappingURL=Context.d.ts.map
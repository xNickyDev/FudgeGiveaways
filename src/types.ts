import { Sendable, IStates, IRunnable, IArg, CompiledFunction, Context } from "@tryforge/forgescript"
import { Database, Giveaway, IGiveawayRequirements, MongoGiveaway } from "./structures"

export type ExtendedSendable = Sendable | Giveaway

export interface IExtendedStates extends IStates {
    giveaway: Giveaway
}

export type ExtendedStates = {
    [K in keyof IExtendedStates]?: {
        old?: IExtendedStates[K] | null
        new?: IExtendedStates[K] | null
    }
}

export interface IExtendedRunnable extends IRunnable {
    obj: ExtendedSendable
    states?: ExtendedStates
}

declare module "@tryforge/forgescript" {
    interface Context {
        giveaway: Giveaway | MongoGiveaway | null
        extendedStates?: ExtendedStates
        requirements?: Partial<IGiveawayRequirements>
    }

    enum ArgType {
        Giveaway
    }

    interface CompiledFunction {
        resolveGiveaway(ctx: Context, arg: IArg, str: string, ref: unknown[]): Promise<void | Giveaway | null>
    }
}

CompiledFunction.prototype.resolveGiveaway = async function (
    this: CompiledFunction,
    ctx: Context,
    arg: IArg,
    str: string,
    ref: Array<unknown>
) {
    if (!CompiledFunction.IdRegex.test(str)) return
    return await Database.get(str).catch(ctx.noop)
}
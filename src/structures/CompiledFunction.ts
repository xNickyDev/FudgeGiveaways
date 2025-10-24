import { CompiledFunction as BaseCompiledFunction, Context, IArg } from "@tryforge/forgescript"
import { Database } from "./Database"

export class CompiledFunction extends BaseCompiledFunction {
    public async resolveGiveaway(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return await Database.get(str).catch(ctx.noop)
    }
}
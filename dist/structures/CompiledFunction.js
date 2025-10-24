"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompiledFunction = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const Database_1 = require("./Database");
class CompiledFunction extends forgescript_1.CompiledFunction {
    async resolveGiveaway(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return await Database_1.Database.get(str).catch(ctx.noop);
    }
}
exports.CompiledFunction = CompiledFunction;
//# sourceMappingURL=CompiledFunction.js.map
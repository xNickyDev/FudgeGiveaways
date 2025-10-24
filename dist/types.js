"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const structures_1 = require("./structures");
forgescript_1.CompiledFunction.prototype.resolveGiveaway = async function (ctx, arg, str, ref) {
    if (!forgescript_1.CompiledFunction.IdRegex.test(str))
        return;
    return await structures_1.Database.get(str).catch(ctx.noop);
};
//# sourceMappingURL=types.js.map
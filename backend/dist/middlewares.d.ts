import type { NextFunction, Request, Response } from "express";
declare function userauth(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export default userauth;
//# sourceMappingURL=middlewares.d.ts.map
import mongoose from "mongoose";
export declare const LinkModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const contentModel: mongoose.Model<{
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    tags: mongoose.Types.ObjectId[];
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserModel: mongoose.Model<{
    password?: string | null;
    username?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    username?: string | null;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const tagModel: mongoose.Model<{
    title?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | null;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map
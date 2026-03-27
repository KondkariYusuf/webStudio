
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Build
 * 
 */
export type Build = $Result.DefaultSelection<Prisma.$BuildPayload>
/**
 * Model Breakpoints
 * 
 */
export type Breakpoints = $Result.DefaultSelection<Prisma.$BreakpointsPayload>
/**
 * Model AuthorizationToken
 * 
 */
export type AuthorizationToken = $Result.DefaultSelection<Prisma.$AuthorizationTokenPayload>
/**
 * Model DashboardProject
 * 
 */
export type DashboardProject = $Result.DefaultSelection<Prisma.$DashboardProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Location: {
  FS: 'FS',
  REMOTE: 'REMOTE'
};

export type Location = (typeof Location)[keyof typeof Location]


export const UploadStatus: {
  UPLOADING: 'UPLOADING',
  UPLOADED: 'UPLOADED'
};

export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus]


export const AuthorizationRelation: {
  viewers: 'viewers',
  editors: 'editors',
  builders: 'builders'
};

export type AuthorizationRelation = (typeof AuthorizationRelation)[keyof typeof AuthorizationRelation]

}

export type Location = $Enums.Location

export const Location: typeof $Enums.Location

export type UploadStatus = $Enums.UploadStatus

export const UploadStatus: typeof $Enums.UploadStatus

export type AuthorizationRelation = $Enums.AuthorizationRelation

export const AuthorizationRelation: typeof $Enums.AuthorizationRelation

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teams
 * const teams = await prisma.team.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.build`: Exposes CRUD operations for the **Build** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Builds
    * const builds = await prisma.build.findMany()
    * ```
    */
  get build(): Prisma.BuildDelegate<ExtArgs>;

  /**
   * `prisma.breakpoints`: Exposes CRUD operations for the **Breakpoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breakpoints
    * const breakpoints = await prisma.breakpoints.findMany()
    * ```
    */
  get breakpoints(): Prisma.BreakpointsDelegate<ExtArgs>;

  /**
   * `prisma.authorizationToken`: Exposes CRUD operations for the **AuthorizationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorizationTokens
    * const authorizationTokens = await prisma.authorizationToken.findMany()
    * ```
    */
  get authorizationToken(): Prisma.AuthorizationTokenDelegate<ExtArgs>;

  /**
   * `prisma.dashboardProject`: Exposes CRUD operations for the **DashboardProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardProjects
    * const dashboardProjects = await prisma.dashboardProject.findMany()
    * ```
    */
  get dashboardProject(): Prisma.DashboardProjectDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Team: 'Team',
    Asset: 'Asset',
    User: 'User',
    Project: 'Project',
    Build: 'Build',
    Breakpoints: 'Breakpoints',
    AuthorizationToken: 'AuthorizationToken',
    DashboardProject: 'DashboardProject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'team' | 'asset' | 'user' | 'project' | 'build' | 'breakpoints' | 'authorizationToken' | 'dashboardProject'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>,
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Build: {
        payload: Prisma.$BuildPayload<ExtArgs>
        fields: Prisma.BuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findFirst: {
            args: Prisma.BuildFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findMany: {
            args: Prisma.BuildFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          create: {
            args: Prisma.BuildCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          createMany: {
            args: Prisma.BuildCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BuildDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          update: {
            args: Prisma.BuildUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          deleteMany: {
            args: Prisma.BuildDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BuildUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BuildUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          aggregate: {
            args: Prisma.BuildAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBuild>
          }
          groupBy: {
            args: Prisma.BuildGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildCountArgs<ExtArgs>,
            result: $Utils.Optional<BuildCountAggregateOutputType> | number
          }
        }
      }
      Breakpoints: {
        payload: Prisma.$BreakpointsPayload<ExtArgs>
        fields: Prisma.BreakpointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreakpointsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreakpointsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>
          }
          findFirst: {
            args: Prisma.BreakpointsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreakpointsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>
          }
          findMany: {
            args: Prisma.BreakpointsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>[]
          }
          create: {
            args: Prisma.BreakpointsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>
          }
          createMany: {
            args: Prisma.BreakpointsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BreakpointsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>
          }
          update: {
            args: Prisma.BreakpointsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>
          }
          deleteMany: {
            args: Prisma.BreakpointsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BreakpointsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BreakpointsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BreakpointsPayload>
          }
          aggregate: {
            args: Prisma.BreakpointsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBreakpoints>
          }
          groupBy: {
            args: Prisma.BreakpointsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BreakpointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreakpointsCountArgs<ExtArgs>,
            result: $Utils.Optional<BreakpointsCountAggregateOutputType> | number
          }
        }
      }
      AuthorizationToken: {
        payload: Prisma.$AuthorizationTokenPayload<ExtArgs>
        fields: Prisma.AuthorizationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorizationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorizationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>
          }
          findFirst: {
            args: Prisma.AuthorizationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorizationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>
          }
          findMany: {
            args: Prisma.AuthorizationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>[]
          }
          create: {
            args: Prisma.AuthorizationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>
          }
          createMany: {
            args: Prisma.AuthorizationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthorizationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>
          }
          update: {
            args: Prisma.AuthorizationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>
          }
          deleteMany: {
            args: Prisma.AuthorizationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorizationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthorizationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorizationTokenPayload>
          }
          aggregate: {
            args: Prisma.AuthorizationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthorizationToken>
          }
          groupBy: {
            args: Prisma.AuthorizationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthorizationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorizationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthorizationTokenCountAggregateOutputType> | number
          }
        }
      }
      DashboardProject: {
        payload: Prisma.$DashboardProjectPayload<ExtArgs>
        fields: Prisma.DashboardProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>
          }
          findFirst: {
            args: Prisma.DashboardProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>
          }
          findMany: {
            args: Prisma.DashboardProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>[]
          }
          create: {
            args: Prisma.DashboardProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>
          }
          createMany: {
            args: Prisma.DashboardProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DashboardProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>
          }
          update: {
            args: Prisma.DashboardProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>
          }
          deleteMany: {
            args: Prisma.DashboardProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DashboardProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardProjectPayload>
          }
          aggregate: {
            args: Prisma.DashboardProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDashboardProject>
          }
          groupBy: {
            args: Prisma.DashboardProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DashboardProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<DashboardProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    users: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TeamCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }



  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    build: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    build?: boolean | ProjectCountOutputTypeCountBuildArgs
  }

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBuildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users?: boolean | Team$usersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Team$usersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }


  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Team$usersArgs<ExtArgs> = {}>(args?: Subset<T, Team$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data?: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team.users
   */
  export type Team$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
  }



  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    size: number | null
  }

  export type AssetSumAggregateOutputType = {
    size: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    format: string | null
    size: number | null
    name: string | null
    description: string | null
    location: $Enums.Location | null
    createdAt: Date | null
    meta: string | null
    status: $Enums.UploadStatus | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    format: string | null
    size: number | null
    name: string | null
    description: string | null
    location: $Enums.Location | null
    createdAt: Date | null
    meta: string | null
    status: $Enums.UploadStatus | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    projectId: number
    format: number
    size: number
    name: number
    description: number
    location: number
    createdAt: number
    meta: number
    status: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    size?: true
  }

  export type AssetSumAggregateInputType = {
    size?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    projectId?: true
    format?: true
    size?: true
    name?: true
    description?: true
    location?: true
    createdAt?: true
    meta?: true
    status?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    projectId?: true
    format?: true
    size?: true
    name?: true
    description?: true
    location?: true
    createdAt?: true
    meta?: true
    status?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    projectId?: true
    format?: true
    size?: true
    name?: true
    description?: true
    location?: true
    createdAt?: true
    meta?: true
    status?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    projectId: string
    format: string
    size: number
    name: string
    description: string | null
    location: $Enums.Location
    createdAt: Date
    meta: string
    status: $Enums.UploadStatus
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    format?: boolean
    size?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    createdAt?: boolean
    meta?: boolean
    status?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    projectId?: boolean
    format?: boolean
    size?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    createdAt?: boolean
    meta?: boolean
    status?: boolean
  }


  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      format: string
      size: number
      name: string
      description: string | null
      location: $Enums.Location
      createdAt: Date
      meta: string
      status: $Enums.UploadStatus
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }


  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Asset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
    **/
    create<T extends AssetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCreateArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Assets.
     *     @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     *     @example
     *     // Create many Assets
     *     const asset = await prisma.asset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
    **/
    delete<T extends AssetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
    **/
    upsert<T extends AssetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Asset model
   */ 
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly projectId: FieldRef<"Asset", 'String'>
    readonly format: FieldRef<"Asset", 'String'>
    readonly size: FieldRef<"Asset", 'Int'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly description: FieldRef<"Asset", 'String'>
    readonly location: FieldRef<"Asset", 'Location'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly meta: FieldRef<"Asset", 'String'>
    readonly status: FieldRef<"Asset", 'UploadStatus'>
  }
    

  // Custom InputTypes

  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }


  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
  }


  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }


  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
  }


  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    provider: string | null
    image: string | null
    username: string | null
    createdAt: Date | null
    teamId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    provider: string | null
    image: string | null
    username: string | null
    createdAt: Date | null
    teamId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    provider: number
    image: number
    username: number
    createdAt: number
    teamId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    provider?: true
    image?: true
    username?: true
    createdAt?: true
    teamId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    provider?: true
    image?: true
    username?: true
    createdAt?: true
    teamId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    provider?: true
    image?: true
    username?: true
    createdAt?: true
    teamId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    provider: string | null
    image: string | null
    username: string | null
    createdAt: Date
    teamId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    provider?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    teamId?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    provider?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    teamId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      provider: string | null
      image: string | null
      username: string | null
      createdAt: Date
      teamId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly teamId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }


  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    domain: string | null
    userId: string | null
    isDeleted: boolean | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    domain: string | null
    userId: string | null
    isDeleted: boolean | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    domain: number
    userId: number
    isDeleted: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    domain?: true
    userId?: true
    isDeleted?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    domain?: true
    userId?: true
    isDeleted?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    domain?: true
    userId?: true
    isDeleted?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    domain: string
    userId: string | null
    isDeleted: boolean
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    domain?: boolean
    userId?: boolean
    isDeleted?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
    build?: boolean | Project$buildArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    domain?: boolean
    userId?: boolean
    isDeleted?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
    build?: boolean | Project$buildArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      build: Prisma.$BuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      domain: string
      userId: string | null
      isDeleted: boolean
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Project$userArgs<ExtArgs> = {}>(args?: Subset<T, Project$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    build<T extends Project$buildArgs<ExtArgs> = {}>(args?: Subset<T, Project$buildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly title: FieldRef<"Project", 'String'>
    readonly domain: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly isDeleted: FieldRef<"Project", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.user
   */
  export type Project$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Project.build
   */
  export type Project$buildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    cursor?: BuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }


  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
  }



  /**
   * Model Build
   */

  export type AggregateBuild = {
    _count: BuildCountAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  export type BuildMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    pages: string | null
    projectId: string | null
    isDev: boolean | null
    isProd: boolean | null
    breakpoints: string | null
    styles: string | null
    styleSources: string | null
    styleSourceSelections: string | null
    props: string | null
    instances: string | null
  }

  export type BuildMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    pages: string | null
    projectId: string | null
    isDev: boolean | null
    isProd: boolean | null
    breakpoints: string | null
    styles: string | null
    styleSources: string | null
    styleSourceSelections: string | null
    props: string | null
    instances: string | null
  }

  export type BuildCountAggregateOutputType = {
    id: number
    createdAt: number
    pages: number
    projectId: number
    isDev: number
    isProd: number
    breakpoints: number
    styles: number
    styleSources: number
    styleSourceSelections: number
    props: number
    instances: number
    _all: number
  }


  export type BuildMinAggregateInputType = {
    id?: true
    createdAt?: true
    pages?: true
    projectId?: true
    isDev?: true
    isProd?: true
    breakpoints?: true
    styles?: true
    styleSources?: true
    styleSourceSelections?: true
    props?: true
    instances?: true
  }

  export type BuildMaxAggregateInputType = {
    id?: true
    createdAt?: true
    pages?: true
    projectId?: true
    isDev?: true
    isProd?: true
    breakpoints?: true
    styles?: true
    styleSources?: true
    styleSourceSelections?: true
    props?: true
    instances?: true
  }

  export type BuildCountAggregateInputType = {
    id?: true
    createdAt?: true
    pages?: true
    projectId?: true
    isDev?: true
    isProd?: true
    breakpoints?: true
    styles?: true
    styleSources?: true
    styleSourceSelections?: true
    props?: true
    instances?: true
    _all?: true
  }

  export type BuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Build to aggregate.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Builds
    **/
    _count?: true | BuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildMaxAggregateInputType
  }

  export type GetBuildAggregateType<T extends BuildAggregateArgs> = {
        [P in keyof T & keyof AggregateBuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuild[P]>
      : GetScalarType<T[P], AggregateBuild[P]>
  }




  export type BuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithAggregationInput | BuildOrderByWithAggregationInput[]
    by: BuildScalarFieldEnum[] | BuildScalarFieldEnum
    having?: BuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildCountAggregateInputType | true
    _min?: BuildMinAggregateInputType
    _max?: BuildMaxAggregateInputType
  }

  export type BuildGroupByOutputType = {
    id: string
    createdAt: Date
    pages: string
    projectId: string
    isDev: boolean
    isProd: boolean
    breakpoints: string
    styles: string
    styleSources: string
    styleSourceSelections: string
    props: string
    instances: string
    _count: BuildCountAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  type GetBuildGroupByPayload<T extends BuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildGroupByOutputType[P]>
            : GetScalarType<T[P], BuildGroupByOutputType[P]>
        }
      >
    >


  export type BuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    pages?: boolean
    projectId?: boolean
    isDev?: boolean
    isProd?: boolean
    breakpoints?: boolean
    styles?: boolean
    styleSources?: boolean
    styleSourceSelections?: boolean
    props?: boolean
    instances?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectScalar = {
    id?: boolean
    createdAt?: boolean
    pages?: boolean
    projectId?: boolean
    isDev?: boolean
    isProd?: boolean
    breakpoints?: boolean
    styles?: boolean
    styleSources?: boolean
    styleSourceSelections?: boolean
    props?: boolean
    instances?: boolean
  }

  export type BuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }


  export type $BuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Build"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      pages: string
      projectId: string
      isDev: boolean
      isProd: boolean
      breakpoints: string
      styles: string
      styleSources: string
      styleSourceSelections: string
      props: string
      instances: string
    }, ExtArgs["result"]["build"]>
    composites: {}
  }


  type BuildGetPayload<S extends boolean | null | undefined | BuildDefaultArgs> = $Result.GetResult<Prisma.$BuildPayload, S>

  type BuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuildFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuildCountAggregateInputType | true
    }

  export interface BuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Build'], meta: { name: 'Build' } }
    /**
     * Find zero or one Build that matches the filter.
     * @param {BuildFindUniqueArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BuildFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BuildFindUniqueArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Build that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BuildFindUniqueOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BuildFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Build that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BuildFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildFindFirstArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Build that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BuildFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Builds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Builds
     * const builds = await prisma.build.findMany()
     * 
     * // Get first 10 Builds
     * const builds = await prisma.build.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildWithIdOnly = await prisma.build.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BuildFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Build.
     * @param {BuildCreateArgs} args - Arguments to create a Build.
     * @example
     * // Create one Build
     * const Build = await prisma.build.create({
     *   data: {
     *     // ... data to create a Build
     *   }
     * })
     * 
    **/
    create<T extends BuildCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BuildCreateArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Builds.
     *     @param {BuildCreateManyArgs} args - Arguments to create many Builds.
     *     @example
     *     // Create many Builds
     *     const build = await prisma.build.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BuildCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Build.
     * @param {BuildDeleteArgs} args - Arguments to delete one Build.
     * @example
     * // Delete one Build
     * const Build = await prisma.build.delete({
     *   where: {
     *     // ... filter to delete one Build
     *   }
     * })
     * 
    **/
    delete<T extends BuildDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BuildDeleteArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Build.
     * @param {BuildUpdateArgs} args - Arguments to update one Build.
     * @example
     * // Update one Build
     * const build = await prisma.build.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BuildUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BuildUpdateArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Builds.
     * @param {BuildDeleteManyArgs} args - Arguments to filter Builds to delete.
     * @example
     * // Delete a few Builds
     * const { count } = await prisma.build.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BuildDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Builds
     * const build = await prisma.build.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BuildUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BuildUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Build.
     * @param {BuildUpsertArgs} args - Arguments to update or create a Build.
     * @example
     * // Update or create a Build
     * const build = await prisma.build.upsert({
     *   create: {
     *     // ... data to create a Build
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Build we want to update
     *   }
     * })
    **/
    upsert<T extends BuildUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BuildUpsertArgs<ExtArgs>>
    ): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildCountArgs} args - Arguments to filter Builds to count.
     * @example
     * // Count the number of Builds
     * const count = await prisma.build.count({
     *   where: {
     *     // ... the filter for the Builds we want to count
     *   }
     * })
    **/
    count<T extends BuildCountArgs>(
      args?: Subset<T, BuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildAggregateArgs>(args: Subset<T, BuildAggregateArgs>): Prisma.PrismaPromise<GetBuildAggregateType<T>>

    /**
     * Group by Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildGroupByArgs['orderBy'] }
        : { orderBy?: BuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Build model
   */
  readonly fields: BuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Build.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Build model
   */ 
  interface BuildFieldRefs {
    readonly id: FieldRef<"Build", 'String'>
    readonly createdAt: FieldRef<"Build", 'DateTime'>
    readonly pages: FieldRef<"Build", 'String'>
    readonly projectId: FieldRef<"Build", 'String'>
    readonly isDev: FieldRef<"Build", 'Boolean'>
    readonly isProd: FieldRef<"Build", 'Boolean'>
    readonly breakpoints: FieldRef<"Build", 'String'>
    readonly styles: FieldRef<"Build", 'String'>
    readonly styleSources: FieldRef<"Build", 'String'>
    readonly styleSourceSelections: FieldRef<"Build", 'String'>
    readonly props: FieldRef<"Build", 'String'>
    readonly instances: FieldRef<"Build", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Build findUnique
   */
  export type BuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }


  /**
   * Build findUniqueOrThrow
   */
  export type BuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }


  /**
   * Build findFirst
   */
  export type BuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }


  /**
   * Build findFirstOrThrow
   */
  export type BuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }


  /**
   * Build findMany
   */
  export type BuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Builds to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }


  /**
   * Build create
   */
  export type BuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Build.
     */
    data: XOR<BuildCreateInput, BuildUncheckedCreateInput>
  }


  /**
   * Build createMany
   */
  export type BuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Builds.
     */
    data: BuildCreateManyInput | BuildCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Build update
   */
  export type BuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Build.
     */
    data: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
    /**
     * Choose, which Build to update.
     */
    where: BuildWhereUniqueInput
  }


  /**
   * Build updateMany
   */
  export type BuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Builds.
     */
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyInput>
    /**
     * Filter which Builds to update
     */
    where?: BuildWhereInput
  }


  /**
   * Build upsert
   */
  export type BuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Build to update in case it exists.
     */
    where: BuildWhereUniqueInput
    /**
     * In case the Build found by the `where` argument doesn't exist, create a new Build with this data.
     */
    create: XOR<BuildCreateInput, BuildUncheckedCreateInput>
    /**
     * In case the Build was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
  }


  /**
   * Build delete
   */
  export type BuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter which Build to delete.
     */
    where: BuildWhereUniqueInput
  }


  /**
   * Build deleteMany
   */
  export type BuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Builds to delete
     */
    where?: BuildWhereInput
  }


  /**
   * Build without action
   */
  export type BuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildInclude<ExtArgs> | null
  }



  /**
   * Model Breakpoints
   */

  export type AggregateBreakpoints = {
    _count: BreakpointsCountAggregateOutputType | null
    _min: BreakpointsMinAggregateOutputType | null
    _max: BreakpointsMaxAggregateOutputType | null
  }

  export type BreakpointsMinAggregateOutputType = {
    buildId: string | null
    values: string | null
  }

  export type BreakpointsMaxAggregateOutputType = {
    buildId: string | null
    values: string | null
  }

  export type BreakpointsCountAggregateOutputType = {
    buildId: number
    values: number
    _all: number
  }


  export type BreakpointsMinAggregateInputType = {
    buildId?: true
    values?: true
  }

  export type BreakpointsMaxAggregateInputType = {
    buildId?: true
    values?: true
  }

  export type BreakpointsCountAggregateInputType = {
    buildId?: true
    values?: true
    _all?: true
  }

  export type BreakpointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breakpoints to aggregate.
     */
    where?: BreakpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakpoints to fetch.
     */
    orderBy?: BreakpointsOrderByWithRelationInput | BreakpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreakpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breakpoints
    **/
    _count?: true | BreakpointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreakpointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreakpointsMaxAggregateInputType
  }

  export type GetBreakpointsAggregateType<T extends BreakpointsAggregateArgs> = {
        [P in keyof T & keyof AggregateBreakpoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreakpoints[P]>
      : GetScalarType<T[P], AggregateBreakpoints[P]>
  }




  export type BreakpointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakpointsWhereInput
    orderBy?: BreakpointsOrderByWithAggregationInput | BreakpointsOrderByWithAggregationInput[]
    by: BreakpointsScalarFieldEnum[] | BreakpointsScalarFieldEnum
    having?: BreakpointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreakpointsCountAggregateInputType | true
    _min?: BreakpointsMinAggregateInputType
    _max?: BreakpointsMaxAggregateInputType
  }

  export type BreakpointsGroupByOutputType = {
    buildId: string
    values: string
    _count: BreakpointsCountAggregateOutputType | null
    _min: BreakpointsMinAggregateOutputType | null
    _max: BreakpointsMaxAggregateOutputType | null
  }

  type GetBreakpointsGroupByPayload<T extends BreakpointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreakpointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreakpointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreakpointsGroupByOutputType[P]>
            : GetScalarType<T[P], BreakpointsGroupByOutputType[P]>
        }
      >
    >


  export type BreakpointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    buildId?: boolean
    values?: boolean
  }, ExtArgs["result"]["breakpoints"]>

  export type BreakpointsSelectScalar = {
    buildId?: boolean
    values?: boolean
  }


  export type $BreakpointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breakpoints"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      buildId: string
      values: string
    }, ExtArgs["result"]["breakpoints"]>
    composites: {}
  }


  type BreakpointsGetPayload<S extends boolean | null | undefined | BreakpointsDefaultArgs> = $Result.GetResult<Prisma.$BreakpointsPayload, S>

  type BreakpointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BreakpointsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BreakpointsCountAggregateInputType | true
    }

  export interface BreakpointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Breakpoints'], meta: { name: 'Breakpoints' } }
    /**
     * Find zero or one Breakpoints that matches the filter.
     * @param {BreakpointsFindUniqueArgs} args - Arguments to find a Breakpoints
     * @example
     * // Get one Breakpoints
     * const breakpoints = await prisma.breakpoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BreakpointsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BreakpointsFindUniqueArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Breakpoints that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BreakpointsFindUniqueOrThrowArgs} args - Arguments to find a Breakpoints
     * @example
     * // Get one Breakpoints
     * const breakpoints = await prisma.breakpoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BreakpointsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BreakpointsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Breakpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsFindFirstArgs} args - Arguments to find a Breakpoints
     * @example
     * // Get one Breakpoints
     * const breakpoints = await prisma.breakpoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BreakpointsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BreakpointsFindFirstArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Breakpoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsFindFirstOrThrowArgs} args - Arguments to find a Breakpoints
     * @example
     * // Get one Breakpoints
     * const breakpoints = await prisma.breakpoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BreakpointsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BreakpointsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Breakpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breakpoints
     * const breakpoints = await prisma.breakpoints.findMany()
     * 
     * // Get first 10 Breakpoints
     * const breakpoints = await prisma.breakpoints.findMany({ take: 10 })
     * 
     * // Only select the `buildId`
     * const breakpointsWithBuildIdOnly = await prisma.breakpoints.findMany({ select: { buildId: true } })
     * 
    **/
    findMany<T extends BreakpointsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BreakpointsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Breakpoints.
     * @param {BreakpointsCreateArgs} args - Arguments to create a Breakpoints.
     * @example
     * // Create one Breakpoints
     * const Breakpoints = await prisma.breakpoints.create({
     *   data: {
     *     // ... data to create a Breakpoints
     *   }
     * })
     * 
    **/
    create<T extends BreakpointsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BreakpointsCreateArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Breakpoints.
     *     @param {BreakpointsCreateManyArgs} args - Arguments to create many Breakpoints.
     *     @example
     *     // Create many Breakpoints
     *     const breakpoints = await prisma.breakpoints.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BreakpointsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BreakpointsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Breakpoints.
     * @param {BreakpointsDeleteArgs} args - Arguments to delete one Breakpoints.
     * @example
     * // Delete one Breakpoints
     * const Breakpoints = await prisma.breakpoints.delete({
     *   where: {
     *     // ... filter to delete one Breakpoints
     *   }
     * })
     * 
    **/
    delete<T extends BreakpointsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BreakpointsDeleteArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Breakpoints.
     * @param {BreakpointsUpdateArgs} args - Arguments to update one Breakpoints.
     * @example
     * // Update one Breakpoints
     * const breakpoints = await prisma.breakpoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BreakpointsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BreakpointsUpdateArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Breakpoints.
     * @param {BreakpointsDeleteManyArgs} args - Arguments to filter Breakpoints to delete.
     * @example
     * // Delete a few Breakpoints
     * const { count } = await prisma.breakpoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BreakpointsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BreakpointsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breakpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breakpoints
     * const breakpoints = await prisma.breakpoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BreakpointsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BreakpointsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Breakpoints.
     * @param {BreakpointsUpsertArgs} args - Arguments to update or create a Breakpoints.
     * @example
     * // Update or create a Breakpoints
     * const breakpoints = await prisma.breakpoints.upsert({
     *   create: {
     *     // ... data to create a Breakpoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Breakpoints we want to update
     *   }
     * })
    **/
    upsert<T extends BreakpointsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BreakpointsUpsertArgs<ExtArgs>>
    ): Prisma__BreakpointsClient<$Result.GetResult<Prisma.$BreakpointsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Breakpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsCountArgs} args - Arguments to filter Breakpoints to count.
     * @example
     * // Count the number of Breakpoints
     * const count = await prisma.breakpoints.count({
     *   where: {
     *     // ... the filter for the Breakpoints we want to count
     *   }
     * })
    **/
    count<T extends BreakpointsCountArgs>(
      args?: Subset<T, BreakpointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreakpointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Breakpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BreakpointsAggregateArgs>(args: Subset<T, BreakpointsAggregateArgs>): Prisma.PrismaPromise<GetBreakpointsAggregateType<T>>

    /**
     * Group by Breakpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakpointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BreakpointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreakpointsGroupByArgs['orderBy'] }
        : { orderBy?: BreakpointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BreakpointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakpointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Breakpoints model
   */
  readonly fields: BreakpointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Breakpoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreakpointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Breakpoints model
   */ 
  interface BreakpointsFieldRefs {
    readonly buildId: FieldRef<"Breakpoints", 'String'>
    readonly values: FieldRef<"Breakpoints", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Breakpoints findUnique
   */
  export type BreakpointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * Filter, which Breakpoints to fetch.
     */
    where: BreakpointsWhereUniqueInput
  }


  /**
   * Breakpoints findUniqueOrThrow
   */
  export type BreakpointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * Filter, which Breakpoints to fetch.
     */
    where: BreakpointsWhereUniqueInput
  }


  /**
   * Breakpoints findFirst
   */
  export type BreakpointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * Filter, which Breakpoints to fetch.
     */
    where?: BreakpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakpoints to fetch.
     */
    orderBy?: BreakpointsOrderByWithRelationInput | BreakpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breakpoints.
     */
    cursor?: BreakpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breakpoints.
     */
    distinct?: BreakpointsScalarFieldEnum | BreakpointsScalarFieldEnum[]
  }


  /**
   * Breakpoints findFirstOrThrow
   */
  export type BreakpointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * Filter, which Breakpoints to fetch.
     */
    where?: BreakpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakpoints to fetch.
     */
    orderBy?: BreakpointsOrderByWithRelationInput | BreakpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breakpoints.
     */
    cursor?: BreakpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breakpoints.
     */
    distinct?: BreakpointsScalarFieldEnum | BreakpointsScalarFieldEnum[]
  }


  /**
   * Breakpoints findMany
   */
  export type BreakpointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * Filter, which Breakpoints to fetch.
     */
    where?: BreakpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakpoints to fetch.
     */
    orderBy?: BreakpointsOrderByWithRelationInput | BreakpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breakpoints.
     */
    cursor?: BreakpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakpoints.
     */
    skip?: number
    distinct?: BreakpointsScalarFieldEnum | BreakpointsScalarFieldEnum[]
  }


  /**
   * Breakpoints create
   */
  export type BreakpointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * The data needed to create a Breakpoints.
     */
    data: XOR<BreakpointsCreateInput, BreakpointsUncheckedCreateInput>
  }


  /**
   * Breakpoints createMany
   */
  export type BreakpointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breakpoints.
     */
    data: BreakpointsCreateManyInput | BreakpointsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Breakpoints update
   */
  export type BreakpointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * The data needed to update a Breakpoints.
     */
    data: XOR<BreakpointsUpdateInput, BreakpointsUncheckedUpdateInput>
    /**
     * Choose, which Breakpoints to update.
     */
    where: BreakpointsWhereUniqueInput
  }


  /**
   * Breakpoints updateMany
   */
  export type BreakpointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breakpoints.
     */
    data: XOR<BreakpointsUpdateManyMutationInput, BreakpointsUncheckedUpdateManyInput>
    /**
     * Filter which Breakpoints to update
     */
    where?: BreakpointsWhereInput
  }


  /**
   * Breakpoints upsert
   */
  export type BreakpointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * The filter to search for the Breakpoints to update in case it exists.
     */
    where: BreakpointsWhereUniqueInput
    /**
     * In case the Breakpoints found by the `where` argument doesn't exist, create a new Breakpoints with this data.
     */
    create: XOR<BreakpointsCreateInput, BreakpointsUncheckedCreateInput>
    /**
     * In case the Breakpoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreakpointsUpdateInput, BreakpointsUncheckedUpdateInput>
  }


  /**
   * Breakpoints delete
   */
  export type BreakpointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
    /**
     * Filter which Breakpoints to delete.
     */
    where: BreakpointsWhereUniqueInput
  }


  /**
   * Breakpoints deleteMany
   */
  export type BreakpointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breakpoints to delete
     */
    where?: BreakpointsWhereInput
  }


  /**
   * Breakpoints without action
   */
  export type BreakpointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakpoints
     */
    select?: BreakpointsSelect<ExtArgs> | null
  }



  /**
   * Model AuthorizationToken
   */

  export type AggregateAuthorizationToken = {
    _count: AuthorizationTokenCountAggregateOutputType | null
    _min: AuthorizationTokenMinAggregateOutputType | null
    _max: AuthorizationTokenMaxAggregateOutputType | null
  }

  export type AuthorizationTokenMinAggregateOutputType = {
    token: string | null
    projectId: string | null
    name: string | null
    relation: $Enums.AuthorizationRelation | null
    createdAt: Date | null
  }

  export type AuthorizationTokenMaxAggregateOutputType = {
    token: string | null
    projectId: string | null
    name: string | null
    relation: $Enums.AuthorizationRelation | null
    createdAt: Date | null
  }

  export type AuthorizationTokenCountAggregateOutputType = {
    token: number
    projectId: number
    name: number
    relation: number
    createdAt: number
    _all: number
  }


  export type AuthorizationTokenMinAggregateInputType = {
    token?: true
    projectId?: true
    name?: true
    relation?: true
    createdAt?: true
  }

  export type AuthorizationTokenMaxAggregateInputType = {
    token?: true
    projectId?: true
    name?: true
    relation?: true
    createdAt?: true
  }

  export type AuthorizationTokenCountAggregateInputType = {
    token?: true
    projectId?: true
    name?: true
    relation?: true
    createdAt?: true
    _all?: true
  }

  export type AuthorizationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorizationToken to aggregate.
     */
    where?: AuthorizationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizationTokens to fetch.
     */
    orderBy?: AuthorizationTokenOrderByWithRelationInput | AuthorizationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorizationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorizationTokens
    **/
    _count?: true | AuthorizationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorizationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorizationTokenMaxAggregateInputType
  }

  export type GetAuthorizationTokenAggregateType<T extends AuthorizationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorizationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorizationToken[P]>
      : GetScalarType<T[P], AggregateAuthorizationToken[P]>
  }




  export type AuthorizationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizationTokenWhereInput
    orderBy?: AuthorizationTokenOrderByWithAggregationInput | AuthorizationTokenOrderByWithAggregationInput[]
    by: AuthorizationTokenScalarFieldEnum[] | AuthorizationTokenScalarFieldEnum
    having?: AuthorizationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorizationTokenCountAggregateInputType | true
    _min?: AuthorizationTokenMinAggregateInputType
    _max?: AuthorizationTokenMaxAggregateInputType
  }

  export type AuthorizationTokenGroupByOutputType = {
    token: string
    projectId: string
    name: string
    relation: $Enums.AuthorizationRelation
    createdAt: Date
    _count: AuthorizationTokenCountAggregateOutputType | null
    _min: AuthorizationTokenMinAggregateOutputType | null
    _max: AuthorizationTokenMaxAggregateOutputType | null
  }

  type GetAuthorizationTokenGroupByPayload<T extends AuthorizationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorizationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorizationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorizationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorizationTokenGroupByOutputType[P]>
        }
      >
    >


  export type AuthorizationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    projectId?: boolean
    name?: boolean
    relation?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["authorizationToken"]>

  export type AuthorizationTokenSelectScalar = {
    token?: boolean
    projectId?: boolean
    name?: boolean
    relation?: boolean
    createdAt?: boolean
  }


  export type $AuthorizationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorizationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      token: string
      projectId: string
      name: string
      relation: $Enums.AuthorizationRelation
      createdAt: Date
    }, ExtArgs["result"]["authorizationToken"]>
    composites: {}
  }


  type AuthorizationTokenGetPayload<S extends boolean | null | undefined | AuthorizationTokenDefaultArgs> = $Result.GetResult<Prisma.$AuthorizationTokenPayload, S>

  type AuthorizationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorizationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorizationTokenCountAggregateInputType | true
    }

  export interface AuthorizationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorizationToken'], meta: { name: 'AuthorizationToken' } }
    /**
     * Find zero or one AuthorizationToken that matches the filter.
     * @param {AuthorizationTokenFindUniqueArgs} args - Arguments to find a AuthorizationToken
     * @example
     * // Get one AuthorizationToken
     * const authorizationToken = await prisma.authorizationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorizationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorizationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuthorizationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorizationTokenFindUniqueOrThrowArgs} args - Arguments to find a AuthorizationToken
     * @example
     * // Get one AuthorizationToken
     * const authorizationToken = await prisma.authorizationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorizationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorizationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuthorizationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenFindFirstArgs} args - Arguments to find a AuthorizationToken
     * @example
     * // Get one AuthorizationToken
     * const authorizationToken = await prisma.authorizationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorizationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorizationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuthorizationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenFindFirstOrThrowArgs} args - Arguments to find a AuthorizationToken
     * @example
     * // Get one AuthorizationToken
     * const authorizationToken = await prisma.authorizationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorizationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorizationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuthorizationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorizationTokens
     * const authorizationTokens = await prisma.authorizationToken.findMany()
     * 
     * // Get first 10 AuthorizationTokens
     * const authorizationTokens = await prisma.authorizationToken.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const authorizationTokenWithTokenOnly = await prisma.authorizationToken.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends AuthorizationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorizationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuthorizationToken.
     * @param {AuthorizationTokenCreateArgs} args - Arguments to create a AuthorizationToken.
     * @example
     * // Create one AuthorizationToken
     * const AuthorizationToken = await prisma.authorizationToken.create({
     *   data: {
     *     // ... data to create a AuthorizationToken
     *   }
     * })
     * 
    **/
    create<T extends AuthorizationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorizationTokenCreateArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuthorizationTokens.
     *     @param {AuthorizationTokenCreateManyArgs} args - Arguments to create many AuthorizationTokens.
     *     @example
     *     // Create many AuthorizationTokens
     *     const authorizationToken = await prisma.authorizationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorizationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorizationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthorizationToken.
     * @param {AuthorizationTokenDeleteArgs} args - Arguments to delete one AuthorizationToken.
     * @example
     * // Delete one AuthorizationToken
     * const AuthorizationToken = await prisma.authorizationToken.delete({
     *   where: {
     *     // ... filter to delete one AuthorizationToken
     *   }
     * })
     * 
    **/
    delete<T extends AuthorizationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorizationTokenDeleteArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuthorizationToken.
     * @param {AuthorizationTokenUpdateArgs} args - Arguments to update one AuthorizationToken.
     * @example
     * // Update one AuthorizationToken
     * const authorizationToken = await prisma.authorizationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorizationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorizationTokenUpdateArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuthorizationTokens.
     * @param {AuthorizationTokenDeleteManyArgs} args - Arguments to filter AuthorizationTokens to delete.
     * @example
     * // Delete a few AuthorizationTokens
     * const { count } = await prisma.authorizationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorizationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorizationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorizationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorizationTokens
     * const authorizationToken = await prisma.authorizationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorizationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorizationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthorizationToken.
     * @param {AuthorizationTokenUpsertArgs} args - Arguments to update or create a AuthorizationToken.
     * @example
     * // Update or create a AuthorizationToken
     * const authorizationToken = await prisma.authorizationToken.upsert({
     *   create: {
     *     // ... data to create a AuthorizationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorizationToken we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorizationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorizationTokenUpsertArgs<ExtArgs>>
    ): Prisma__AuthorizationTokenClient<$Result.GetResult<Prisma.$AuthorizationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AuthorizationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenCountArgs} args - Arguments to filter AuthorizationTokens to count.
     * @example
     * // Count the number of AuthorizationTokens
     * const count = await prisma.authorizationToken.count({
     *   where: {
     *     // ... the filter for the AuthorizationTokens we want to count
     *   }
     * })
    **/
    count<T extends AuthorizationTokenCountArgs>(
      args?: Subset<T, AuthorizationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorizationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorizationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorizationTokenAggregateArgs>(args: Subset<T, AuthorizationTokenAggregateArgs>): Prisma.PrismaPromise<GetAuthorizationTokenAggregateType<T>>

    /**
     * Group by AuthorizationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorizationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorizationTokenGroupByArgs['orderBy'] }
        : { orderBy?: AuthorizationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorizationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorizationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorizationToken model
   */
  readonly fields: AuthorizationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorizationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorizationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AuthorizationToken model
   */ 
  interface AuthorizationTokenFieldRefs {
    readonly token: FieldRef<"AuthorizationToken", 'String'>
    readonly projectId: FieldRef<"AuthorizationToken", 'String'>
    readonly name: FieldRef<"AuthorizationToken", 'String'>
    readonly relation: FieldRef<"AuthorizationToken", 'AuthorizationRelation'>
    readonly createdAt: FieldRef<"AuthorizationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AuthorizationToken findUnique
   */
  export type AuthorizationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthorizationToken to fetch.
     */
    where: AuthorizationTokenWhereUniqueInput
  }


  /**
   * AuthorizationToken findUniqueOrThrow
   */
  export type AuthorizationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthorizationToken to fetch.
     */
    where: AuthorizationTokenWhereUniqueInput
  }


  /**
   * AuthorizationToken findFirst
   */
  export type AuthorizationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthorizationToken to fetch.
     */
    where?: AuthorizationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizationTokens to fetch.
     */
    orderBy?: AuthorizationTokenOrderByWithRelationInput | AuthorizationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorizationTokens.
     */
    cursor?: AuthorizationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizationTokens.
     */
    distinct?: AuthorizationTokenScalarFieldEnum | AuthorizationTokenScalarFieldEnum[]
  }


  /**
   * AuthorizationToken findFirstOrThrow
   */
  export type AuthorizationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthorizationToken to fetch.
     */
    where?: AuthorizationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizationTokens to fetch.
     */
    orderBy?: AuthorizationTokenOrderByWithRelationInput | AuthorizationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorizationTokens.
     */
    cursor?: AuthorizationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizationTokens.
     */
    distinct?: AuthorizationTokenScalarFieldEnum | AuthorizationTokenScalarFieldEnum[]
  }


  /**
   * AuthorizationToken findMany
   */
  export type AuthorizationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthorizationTokens to fetch.
     */
    where?: AuthorizationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizationTokens to fetch.
     */
    orderBy?: AuthorizationTokenOrderByWithRelationInput | AuthorizationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorizationTokens.
     */
    cursor?: AuthorizationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizationTokens.
     */
    skip?: number
    distinct?: AuthorizationTokenScalarFieldEnum | AuthorizationTokenScalarFieldEnum[]
  }


  /**
   * AuthorizationToken create
   */
  export type AuthorizationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a AuthorizationToken.
     */
    data: XOR<AuthorizationTokenCreateInput, AuthorizationTokenUncheckedCreateInput>
  }


  /**
   * AuthorizationToken createMany
   */
  export type AuthorizationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorizationTokens.
     */
    data: AuthorizationTokenCreateManyInput | AuthorizationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AuthorizationToken update
   */
  export type AuthorizationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a AuthorizationToken.
     */
    data: XOR<AuthorizationTokenUpdateInput, AuthorizationTokenUncheckedUpdateInput>
    /**
     * Choose, which AuthorizationToken to update.
     */
    where: AuthorizationTokenWhereUniqueInput
  }


  /**
   * AuthorizationToken updateMany
   */
  export type AuthorizationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorizationTokens.
     */
    data: XOR<AuthorizationTokenUpdateManyMutationInput, AuthorizationTokenUncheckedUpdateManyInput>
    /**
     * Filter which AuthorizationTokens to update
     */
    where?: AuthorizationTokenWhereInput
  }


  /**
   * AuthorizationToken upsert
   */
  export type AuthorizationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the AuthorizationToken to update in case it exists.
     */
    where: AuthorizationTokenWhereUniqueInput
    /**
     * In case the AuthorizationToken found by the `where` argument doesn't exist, create a new AuthorizationToken with this data.
     */
    create: XOR<AuthorizationTokenCreateInput, AuthorizationTokenUncheckedCreateInput>
    /**
     * In case the AuthorizationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorizationTokenUpdateInput, AuthorizationTokenUncheckedUpdateInput>
  }


  /**
   * AuthorizationToken delete
   */
  export type AuthorizationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
    /**
     * Filter which AuthorizationToken to delete.
     */
    where: AuthorizationTokenWhereUniqueInput
  }


  /**
   * AuthorizationToken deleteMany
   */
  export type AuthorizationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorizationTokens to delete
     */
    where?: AuthorizationTokenWhereInput
  }


  /**
   * AuthorizationToken without action
   */
  export type AuthorizationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationToken
     */
    select?: AuthorizationTokenSelect<ExtArgs> | null
  }



  /**
   * Model DashboardProject
   */

  export type AggregateDashboardProject = {
    _count: DashboardProjectCountAggregateOutputType | null
    _min: DashboardProjectMinAggregateOutputType | null
    _max: DashboardProjectMaxAggregateOutputType | null
  }

  export type DashboardProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    domain: string | null
    userId: string | null
    isDeleted: boolean | null
    isPublished: boolean | null
  }

  export type DashboardProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    domain: string | null
    userId: string | null
    isDeleted: boolean | null
    isPublished: boolean | null
  }

  export type DashboardProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    domain: number
    userId: number
    isDeleted: number
    isPublished: number
    _all: number
  }


  export type DashboardProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    domain?: true
    userId?: true
    isDeleted?: true
    isPublished?: true
  }

  export type DashboardProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    domain?: true
    userId?: true
    isDeleted?: true
    isPublished?: true
  }

  export type DashboardProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    domain?: true
    userId?: true
    isDeleted?: true
    isPublished?: true
    _all?: true
  }

  export type DashboardProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardProject to aggregate.
     */
    where?: DashboardProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardProjects to fetch.
     */
    orderBy?: DashboardProjectOrderByWithRelationInput | DashboardProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardProjects
    **/
    _count?: true | DashboardProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardProjectMaxAggregateInputType
  }

  export type GetDashboardProjectAggregateType<T extends DashboardProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardProject[P]>
      : GetScalarType<T[P], AggregateDashboardProject[P]>
  }




  export type DashboardProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardProjectWhereInput
    orderBy?: DashboardProjectOrderByWithAggregationInput | DashboardProjectOrderByWithAggregationInput[]
    by: DashboardProjectScalarFieldEnum[] | DashboardProjectScalarFieldEnum
    having?: DashboardProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardProjectCountAggregateInputType | true
    _min?: DashboardProjectMinAggregateInputType
    _max?: DashboardProjectMaxAggregateInputType
  }

  export type DashboardProjectGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    domain: string
    userId: string | null
    isDeleted: boolean
    isPublished: boolean
    _count: DashboardProjectCountAggregateOutputType | null
    _min: DashboardProjectMinAggregateOutputType | null
    _max: DashboardProjectMaxAggregateOutputType | null
  }

  type GetDashboardProjectGroupByPayload<T extends DashboardProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardProjectGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardProjectGroupByOutputType[P]>
        }
      >
    >


  export type DashboardProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    domain?: boolean
    userId?: boolean
    isDeleted?: boolean
    isPublished?: boolean
  }, ExtArgs["result"]["dashboardProject"]>

  export type DashboardProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    domain?: boolean
    userId?: boolean
    isDeleted?: boolean
    isPublished?: boolean
  }


  export type $DashboardProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardProject"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      domain: string
      userId: string | null
      isDeleted: boolean
      isPublished: boolean
    }, ExtArgs["result"]["dashboardProject"]>
    composites: {}
  }


  type DashboardProjectGetPayload<S extends boolean | null | undefined | DashboardProjectDefaultArgs> = $Result.GetResult<Prisma.$DashboardProjectPayload, S>

  type DashboardProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DashboardProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DashboardProjectCountAggregateInputType | true
    }

  export interface DashboardProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardProject'], meta: { name: 'DashboardProject' } }
    /**
     * Find zero or one DashboardProject that matches the filter.
     * @param {DashboardProjectFindUniqueArgs} args - Arguments to find a DashboardProject
     * @example
     * // Get one DashboardProject
     * const dashboardProject = await prisma.dashboardProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DashboardProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DashboardProject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DashboardProjectFindUniqueOrThrowArgs} args - Arguments to find a DashboardProject
     * @example
     * // Get one DashboardProject
     * const dashboardProject = await prisma.dashboardProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DashboardProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DashboardProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectFindFirstArgs} args - Arguments to find a DashboardProject
     * @example
     * // Get one DashboardProject
     * const dashboardProject = await prisma.dashboardProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DashboardProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardProjectFindFirstArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DashboardProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectFindFirstOrThrowArgs} args - Arguments to find a DashboardProject
     * @example
     * // Get one DashboardProject
     * const dashboardProject = await prisma.dashboardProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DashboardProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DashboardProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardProjects
     * const dashboardProjects = await prisma.dashboardProject.findMany()
     * 
     * // Get first 10 DashboardProjects
     * const dashboardProjects = await prisma.dashboardProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardProjectWithIdOnly = await prisma.dashboardProject.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DashboardProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DashboardProject.
     * @param {DashboardProjectCreateArgs} args - Arguments to create a DashboardProject.
     * @example
     * // Create one DashboardProject
     * const DashboardProject = await prisma.dashboardProject.create({
     *   data: {
     *     // ... data to create a DashboardProject
     *   }
     * })
     * 
    **/
    create<T extends DashboardProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardProjectCreateArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DashboardProjects.
     *     @param {DashboardProjectCreateManyArgs} args - Arguments to create many DashboardProjects.
     *     @example
     *     // Create many DashboardProjects
     *     const dashboardProject = await prisma.dashboardProject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DashboardProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DashboardProject.
     * @param {DashboardProjectDeleteArgs} args - Arguments to delete one DashboardProject.
     * @example
     * // Delete one DashboardProject
     * const DashboardProject = await prisma.dashboardProject.delete({
     *   where: {
     *     // ... filter to delete one DashboardProject
     *   }
     * })
     * 
    **/
    delete<T extends DashboardProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardProjectDeleteArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DashboardProject.
     * @param {DashboardProjectUpdateArgs} args - Arguments to update one DashboardProject.
     * @example
     * // Update one DashboardProject
     * const dashboardProject = await prisma.dashboardProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DashboardProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardProjectUpdateArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DashboardProjects.
     * @param {DashboardProjectDeleteManyArgs} args - Arguments to filter DashboardProjects to delete.
     * @example
     * // Delete a few DashboardProjects
     * const { count } = await prisma.dashboardProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DashboardProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardProjects
     * const dashboardProject = await prisma.dashboardProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DashboardProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DashboardProject.
     * @param {DashboardProjectUpsertArgs} args - Arguments to update or create a DashboardProject.
     * @example
     * // Update or create a DashboardProject
     * const dashboardProject = await prisma.dashboardProject.upsert({
     *   create: {
     *     // ... data to create a DashboardProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardProject we want to update
     *   }
     * })
    **/
    upsert<T extends DashboardProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardProjectUpsertArgs<ExtArgs>>
    ): Prisma__DashboardProjectClient<$Result.GetResult<Prisma.$DashboardProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DashboardProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectCountArgs} args - Arguments to filter DashboardProjects to count.
     * @example
     * // Count the number of DashboardProjects
     * const count = await prisma.dashboardProject.count({
     *   where: {
     *     // ... the filter for the DashboardProjects we want to count
     *   }
     * })
    **/
    count<T extends DashboardProjectCountArgs>(
      args?: Subset<T, DashboardProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardProjectAggregateArgs>(args: Subset<T, DashboardProjectAggregateArgs>): Prisma.PrismaPromise<GetDashboardProjectAggregateType<T>>

    /**
     * Group by DashboardProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardProjectGroupByArgs['orderBy'] }
        : { orderBy?: DashboardProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardProject model
   */
  readonly fields: DashboardProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DashboardProject model
   */ 
  interface DashboardProjectFieldRefs {
    readonly id: FieldRef<"DashboardProject", 'String'>
    readonly createdAt: FieldRef<"DashboardProject", 'DateTime'>
    readonly title: FieldRef<"DashboardProject", 'String'>
    readonly domain: FieldRef<"DashboardProject", 'String'>
    readonly userId: FieldRef<"DashboardProject", 'String'>
    readonly isDeleted: FieldRef<"DashboardProject", 'Boolean'>
    readonly isPublished: FieldRef<"DashboardProject", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * DashboardProject findUnique
   */
  export type DashboardProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * Filter, which DashboardProject to fetch.
     */
    where: DashboardProjectWhereUniqueInput
  }


  /**
   * DashboardProject findUniqueOrThrow
   */
  export type DashboardProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * Filter, which DashboardProject to fetch.
     */
    where: DashboardProjectWhereUniqueInput
  }


  /**
   * DashboardProject findFirst
   */
  export type DashboardProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * Filter, which DashboardProject to fetch.
     */
    where?: DashboardProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardProjects to fetch.
     */
    orderBy?: DashboardProjectOrderByWithRelationInput | DashboardProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardProjects.
     */
    cursor?: DashboardProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardProjects.
     */
    distinct?: DashboardProjectScalarFieldEnum | DashboardProjectScalarFieldEnum[]
  }


  /**
   * DashboardProject findFirstOrThrow
   */
  export type DashboardProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * Filter, which DashboardProject to fetch.
     */
    where?: DashboardProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardProjects to fetch.
     */
    orderBy?: DashboardProjectOrderByWithRelationInput | DashboardProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardProjects.
     */
    cursor?: DashboardProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardProjects.
     */
    distinct?: DashboardProjectScalarFieldEnum | DashboardProjectScalarFieldEnum[]
  }


  /**
   * DashboardProject findMany
   */
  export type DashboardProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * Filter, which DashboardProjects to fetch.
     */
    where?: DashboardProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardProjects to fetch.
     */
    orderBy?: DashboardProjectOrderByWithRelationInput | DashboardProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardProjects.
     */
    cursor?: DashboardProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardProjects.
     */
    skip?: number
    distinct?: DashboardProjectScalarFieldEnum | DashboardProjectScalarFieldEnum[]
  }


  /**
   * DashboardProject create
   */
  export type DashboardProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * The data needed to create a DashboardProject.
     */
    data: XOR<DashboardProjectCreateInput, DashboardProjectUncheckedCreateInput>
  }


  /**
   * DashboardProject createMany
   */
  export type DashboardProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardProjects.
     */
    data: DashboardProjectCreateManyInput | DashboardProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DashboardProject update
   */
  export type DashboardProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * The data needed to update a DashboardProject.
     */
    data: XOR<DashboardProjectUpdateInput, DashboardProjectUncheckedUpdateInput>
    /**
     * Choose, which DashboardProject to update.
     */
    where: DashboardProjectWhereUniqueInput
  }


  /**
   * DashboardProject updateMany
   */
  export type DashboardProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardProjects.
     */
    data: XOR<DashboardProjectUpdateManyMutationInput, DashboardProjectUncheckedUpdateManyInput>
    /**
     * Filter which DashboardProjects to update
     */
    where?: DashboardProjectWhereInput
  }


  /**
   * DashboardProject upsert
   */
  export type DashboardProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * The filter to search for the DashboardProject to update in case it exists.
     */
    where: DashboardProjectWhereUniqueInput
    /**
     * In case the DashboardProject found by the `where` argument doesn't exist, create a new DashboardProject with this data.
     */
    create: XOR<DashboardProjectCreateInput, DashboardProjectUncheckedCreateInput>
    /**
     * In case the DashboardProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardProjectUpdateInput, DashboardProjectUncheckedUpdateInput>
  }


  /**
   * DashboardProject delete
   */
  export type DashboardProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
    /**
     * Filter which DashboardProject to delete.
     */
    where: DashboardProjectWhereUniqueInput
  }


  /**
   * DashboardProject deleteMany
   */
  export type DashboardProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardProjects to delete
     */
    where?: DashboardProjectWhereInput
  }


  /**
   * DashboardProject without action
   */
  export type DashboardProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardProject
     */
    select?: DashboardProjectSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TeamScalarFieldEnum: {
    id: 'id'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    format: 'format',
    size: 'size',
    name: 'name',
    description: 'description',
    location: 'location',
    createdAt: 'createdAt',
    meta: 'meta',
    status: 'status'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    provider: 'provider',
    image: 'image',
    username: 'username',
    createdAt: 'createdAt',
    teamId: 'teamId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    domain: 'domain',
    userId: 'userId',
    isDeleted: 'isDeleted'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const BuildScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    pages: 'pages',
    projectId: 'projectId',
    isDev: 'isDev',
    isProd: 'isProd',
    breakpoints: 'breakpoints',
    styles: 'styles',
    styleSources: 'styleSources',
    styleSourceSelections: 'styleSourceSelections',
    props: 'props',
    instances: 'instances'
  };

  export type BuildScalarFieldEnum = (typeof BuildScalarFieldEnum)[keyof typeof BuildScalarFieldEnum]


  export const BreakpointsScalarFieldEnum: {
    buildId: 'buildId',
    values: 'values'
  };

  export type BreakpointsScalarFieldEnum = (typeof BreakpointsScalarFieldEnum)[keyof typeof BreakpointsScalarFieldEnum]


  export const AuthorizationTokenScalarFieldEnum: {
    token: 'token',
    projectId: 'projectId',
    name: 'name',
    relation: 'relation',
    createdAt: 'createdAt'
  };

  export type AuthorizationTokenScalarFieldEnum = (typeof AuthorizationTokenScalarFieldEnum)[keyof typeof AuthorizationTokenScalarFieldEnum]


  export const DashboardProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    domain: 'domain',
    userId: 'userId',
    isDeleted: 'isDeleted',
    isPublished: 'isPublished'
  };

  export type DashboardProjectScalarFieldEnum = (typeof DashboardProjectScalarFieldEnum)[keyof typeof DashboardProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Location'
   */
  export type EnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location'>
    


  /**
   * Reference to a field of type 'Location[]'
   */
  export type ListEnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UploadStatus'
   */
  export type EnumUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UploadStatus'>
    


  /**
   * Reference to a field of type 'UploadStatus[]'
   */
  export type ListEnumUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UploadStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthorizationRelation'
   */
  export type EnumAuthorizationRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorizationRelation'>
    


  /**
   * Reference to a field of type 'AuthorizationRelation[]'
   */
  export type ListEnumAuthorizationRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorizationRelation[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    users?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    users?: UserListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    format?: StringFilter<"Asset"> | string
    size?: IntFilter<"Asset"> | number
    name?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    location?: EnumLocationFilter<"Asset"> | $Enums.Location
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    meta?: StringFilter<"Asset"> | string
    status?: EnumUploadStatusFilter<"Asset"> | $Enums.UploadStatus
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    format?: SortOrder
    size?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id_projectId?: AssetIdProjectIdCompoundUniqueInput
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    format?: StringFilter<"Asset"> | string
    size?: IntFilter<"Asset"> | number
    name?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    location?: EnumLocationFilter<"Asset"> | $Enums.Location
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    meta?: StringFilter<"Asset"> | string
    status?: EnumUploadStatusFilter<"Asset"> | $Enums.UploadStatus
  }, "id_projectId">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    format?: SortOrder
    size?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    projectId?: StringWithAggregatesFilter<"Asset"> | string
    format?: StringWithAggregatesFilter<"Asset"> | string
    size?: IntWithAggregatesFilter<"Asset"> | number
    name?: StringWithAggregatesFilter<"Asset"> | string
    description?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    location?: EnumLocationWithAggregatesFilter<"Asset"> | $Enums.Location
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    meta?: StringWithAggregatesFilter<"Asset"> | string
    status?: EnumUploadStatusWithAggregatesFilter<"Asset"> | $Enums.UploadStatus
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    teamId?: StringNullableFilter<"User"> | string | null
    team?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    teamId?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    provider?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    teamId?: StringNullableFilter<"User"> | string | null
    team?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    domain?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    build?: BuildListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    user?: UserOrderByWithRelationInput
    build?: BuildOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    id_isDeleted?: ProjectIdIsDeletedCompoundUniqueInput
    domain_isDeleted?: ProjectDomainIsDeletedCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    build?: BuildListRelationFilter
  }, "id" | "domain" | "id_isDeleted" | "domain_isDeleted">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    title?: StringWithAggregatesFilter<"Project"> | string
    domain?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Project"> | boolean
  }

  export type BuildWhereInput = {
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    id?: StringFilter<"Build"> | string
    createdAt?: DateTimeFilter<"Build"> | Date | string
    pages?: StringFilter<"Build"> | string
    projectId?: StringFilter<"Build"> | string
    isDev?: BoolFilter<"Build"> | boolean
    isProd?: BoolFilter<"Build"> | boolean
    breakpoints?: StringFilter<"Build"> | string
    styles?: StringFilter<"Build"> | string
    styleSources?: StringFilter<"Build"> | string
    styleSourceSelections?: StringFilter<"Build"> | string
    props?: StringFilter<"Build"> | string
    instances?: StringFilter<"Build"> | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type BuildOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    isDev?: SortOrder
    isProd?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type BuildWhereUniqueInput = Prisma.AtLeast<{
    id_projectId?: BuildIdProjectIdCompoundUniqueInput
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    id?: StringFilter<"Build"> | string
    createdAt?: DateTimeFilter<"Build"> | Date | string
    pages?: StringFilter<"Build"> | string
    projectId?: StringFilter<"Build"> | string
    isDev?: BoolFilter<"Build"> | boolean
    isProd?: BoolFilter<"Build"> | boolean
    breakpoints?: StringFilter<"Build"> | string
    styles?: StringFilter<"Build"> | string
    styleSources?: StringFilter<"Build"> | string
    styleSourceSelections?: StringFilter<"Build"> | string
    props?: StringFilter<"Build"> | string
    instances?: StringFilter<"Build"> | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id_projectId">

  export type BuildOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    isDev?: SortOrder
    isProd?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    _count?: BuildCountOrderByAggregateInput
    _max?: BuildMaxOrderByAggregateInput
    _min?: BuildMinOrderByAggregateInput
  }

  export type BuildScalarWhereWithAggregatesInput = {
    AND?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    OR?: BuildScalarWhereWithAggregatesInput[]
    NOT?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Build"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
    pages?: StringWithAggregatesFilter<"Build"> | string
    projectId?: StringWithAggregatesFilter<"Build"> | string
    isDev?: BoolWithAggregatesFilter<"Build"> | boolean
    isProd?: BoolWithAggregatesFilter<"Build"> | boolean
    breakpoints?: StringWithAggregatesFilter<"Build"> | string
    styles?: StringWithAggregatesFilter<"Build"> | string
    styleSources?: StringWithAggregatesFilter<"Build"> | string
    styleSourceSelections?: StringWithAggregatesFilter<"Build"> | string
    props?: StringWithAggregatesFilter<"Build"> | string
    instances?: StringWithAggregatesFilter<"Build"> | string
  }

  export type BreakpointsWhereInput = {
    AND?: BreakpointsWhereInput | BreakpointsWhereInput[]
    OR?: BreakpointsWhereInput[]
    NOT?: BreakpointsWhereInput | BreakpointsWhereInput[]
    buildId?: StringFilter<"Breakpoints"> | string
    values?: StringFilter<"Breakpoints"> | string
  }

  export type BreakpointsOrderByWithRelationInput = {
    buildId?: SortOrder
    values?: SortOrder
  }

  export type BreakpointsWhereUniqueInput = Prisma.AtLeast<{
    buildId?: string
    AND?: BreakpointsWhereInput | BreakpointsWhereInput[]
    OR?: BreakpointsWhereInput[]
    NOT?: BreakpointsWhereInput | BreakpointsWhereInput[]
    values?: StringFilter<"Breakpoints"> | string
  }, "buildId">

  export type BreakpointsOrderByWithAggregationInput = {
    buildId?: SortOrder
    values?: SortOrder
    _count?: BreakpointsCountOrderByAggregateInput
    _max?: BreakpointsMaxOrderByAggregateInput
    _min?: BreakpointsMinOrderByAggregateInput
  }

  export type BreakpointsScalarWhereWithAggregatesInput = {
    AND?: BreakpointsScalarWhereWithAggregatesInput | BreakpointsScalarWhereWithAggregatesInput[]
    OR?: BreakpointsScalarWhereWithAggregatesInput[]
    NOT?: BreakpointsScalarWhereWithAggregatesInput | BreakpointsScalarWhereWithAggregatesInput[]
    buildId?: StringWithAggregatesFilter<"Breakpoints"> | string
    values?: StringWithAggregatesFilter<"Breakpoints"> | string
  }

  export type AuthorizationTokenWhereInput = {
    AND?: AuthorizationTokenWhereInput | AuthorizationTokenWhereInput[]
    OR?: AuthorizationTokenWhereInput[]
    NOT?: AuthorizationTokenWhereInput | AuthorizationTokenWhereInput[]
    token?: StringFilter<"AuthorizationToken"> | string
    projectId?: StringFilter<"AuthorizationToken"> | string
    name?: StringFilter<"AuthorizationToken"> | string
    relation?: EnumAuthorizationRelationFilter<"AuthorizationToken"> | $Enums.AuthorizationRelation
    createdAt?: DateTimeFilter<"AuthorizationToken"> | Date | string
  }

  export type AuthorizationTokenOrderByWithRelationInput = {
    token?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorizationTokenWhereUniqueInput = Prisma.AtLeast<{
    token_projectId?: AuthorizationTokenTokenProjectIdCompoundUniqueInput
    AND?: AuthorizationTokenWhereInput | AuthorizationTokenWhereInput[]
    OR?: AuthorizationTokenWhereInput[]
    NOT?: AuthorizationTokenWhereInput | AuthorizationTokenWhereInput[]
    token?: StringFilter<"AuthorizationToken"> | string
    projectId?: StringFilter<"AuthorizationToken"> | string
    name?: StringFilter<"AuthorizationToken"> | string
    relation?: EnumAuthorizationRelationFilter<"AuthorizationToken"> | $Enums.AuthorizationRelation
    createdAt?: DateTimeFilter<"AuthorizationToken"> | Date | string
  }, "token_projectId">

  export type AuthorizationTokenOrderByWithAggregationInput = {
    token?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    createdAt?: SortOrder
    _count?: AuthorizationTokenCountOrderByAggregateInput
    _max?: AuthorizationTokenMaxOrderByAggregateInput
    _min?: AuthorizationTokenMinOrderByAggregateInput
  }

  export type AuthorizationTokenScalarWhereWithAggregatesInput = {
    AND?: AuthorizationTokenScalarWhereWithAggregatesInput | AuthorizationTokenScalarWhereWithAggregatesInput[]
    OR?: AuthorizationTokenScalarWhereWithAggregatesInput[]
    NOT?: AuthorizationTokenScalarWhereWithAggregatesInput | AuthorizationTokenScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"AuthorizationToken"> | string
    projectId?: StringWithAggregatesFilter<"AuthorizationToken"> | string
    name?: StringWithAggregatesFilter<"AuthorizationToken"> | string
    relation?: EnumAuthorizationRelationWithAggregatesFilter<"AuthorizationToken"> | $Enums.AuthorizationRelation
    createdAt?: DateTimeWithAggregatesFilter<"AuthorizationToken"> | Date | string
  }

  export type DashboardProjectWhereInput = {
    AND?: DashboardProjectWhereInput | DashboardProjectWhereInput[]
    OR?: DashboardProjectWhereInput[]
    NOT?: DashboardProjectWhereInput | DashboardProjectWhereInput[]
    id?: StringFilter<"DashboardProject"> | string
    createdAt?: DateTimeFilter<"DashboardProject"> | Date | string
    title?: StringFilter<"DashboardProject"> | string
    domain?: StringFilter<"DashboardProject"> | string
    userId?: StringNullableFilter<"DashboardProject"> | string | null
    isDeleted?: BoolFilter<"DashboardProject"> | boolean
    isPublished?: BoolFilter<"DashboardProject"> | boolean
  }

  export type DashboardProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    isPublished?: SortOrder
  }

  export type DashboardProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardProjectWhereInput | DashboardProjectWhereInput[]
    OR?: DashboardProjectWhereInput[]
    NOT?: DashboardProjectWhereInput | DashboardProjectWhereInput[]
    createdAt?: DateTimeFilter<"DashboardProject"> | Date | string
    title?: StringFilter<"DashboardProject"> | string
    domain?: StringFilter<"DashboardProject"> | string
    userId?: StringNullableFilter<"DashboardProject"> | string | null
    isDeleted?: BoolFilter<"DashboardProject"> | boolean
    isPublished?: BoolFilter<"DashboardProject"> | boolean
  }, "id">

  export type DashboardProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    isPublished?: SortOrder
    _count?: DashboardProjectCountOrderByAggregateInput
    _max?: DashboardProjectMaxOrderByAggregateInput
    _min?: DashboardProjectMinOrderByAggregateInput
  }

  export type DashboardProjectScalarWhereWithAggregatesInput = {
    AND?: DashboardProjectScalarWhereWithAggregatesInput | DashboardProjectScalarWhereWithAggregatesInput[]
    OR?: DashboardProjectScalarWhereWithAggregatesInput[]
    NOT?: DashboardProjectScalarWhereWithAggregatesInput | DashboardProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DashboardProject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DashboardProject"> | Date | string
    title?: StringWithAggregatesFilter<"DashboardProject"> | string
    domain?: StringWithAggregatesFilter<"DashboardProject"> | string
    userId?: StringNullableWithAggregatesFilter<"DashboardProject"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"DashboardProject"> | boolean
    isPublished?: BoolWithAggregatesFilter<"DashboardProject"> | boolean
  }

  export type TeamCreateInput = {
    id?: string
    users?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AssetCreateInput = {
    id?: string
    projectId: string
    format: string
    size: number
    name: string
    description?: string | null
    location: $Enums.Location
    createdAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    projectId: string
    format: string
    size: number
    name: string
    description?: string | null
    location: $Enums.Location
    createdAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
  }

  export type AssetCreateManyInput = {
    id?: string
    projectId: string
    format: string
    size: number
    name: string
    description?: string | null
    location: $Enums.Location
    createdAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutUsersInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    teamId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutUsersNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    teamId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    user?: UserCreateNestedOneWithoutProjectsInput
    build?: BuildCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutProjectsNestedInput
    build?: BuildUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BuildCreateInput = {
    id?: string
    createdAt?: Date | string
    pages: string
    isDev: boolean
    isProd: boolean
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    project: ProjectCreateNestedOneWithoutBuildInput
  }

  export type BuildUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    pages: string
    projectId: string
    isDev: boolean
    isProd: boolean
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
  }

  export type BuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutBuildNestedInput
  }

  export type BuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
  }

  export type BuildCreateManyInput = {
    id?: string
    createdAt?: Date | string
    pages: string
    projectId: string
    isDev: boolean
    isProd: boolean
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
  }

  export type BuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
  }

  export type BuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
  }

  export type BreakpointsCreateInput = {
    buildId: string
    values?: string
  }

  export type BreakpointsUncheckedCreateInput = {
    buildId: string
    values?: string
  }

  export type BreakpointsUpdateInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    values?: StringFieldUpdateOperationsInput | string
  }

  export type BreakpointsUncheckedUpdateInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    values?: StringFieldUpdateOperationsInput | string
  }

  export type BreakpointsCreateManyInput = {
    buildId: string
    values?: string
  }

  export type BreakpointsUpdateManyMutationInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    values?: StringFieldUpdateOperationsInput | string
  }

  export type BreakpointsUncheckedUpdateManyInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    values?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorizationTokenCreateInput = {
    token?: string
    projectId: string
    name?: string
    relation?: $Enums.AuthorizationRelation
    createdAt?: Date | string
  }

  export type AuthorizationTokenUncheckedCreateInput = {
    token?: string
    projectId: string
    name?: string
    relation?: $Enums.AuthorizationRelation
    createdAt?: Date | string
  }

  export type AuthorizationTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: EnumAuthorizationRelationFieldUpdateOperationsInput | $Enums.AuthorizationRelation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: EnumAuthorizationRelationFieldUpdateOperationsInput | $Enums.AuthorizationRelation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationTokenCreateManyInput = {
    token?: string
    projectId: string
    name?: string
    relation?: $Enums.AuthorizationRelation
    createdAt?: Date | string
  }

  export type AuthorizationTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: EnumAuthorizationRelationFieldUpdateOperationsInput | $Enums.AuthorizationRelation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: EnumAuthorizationRelationFieldUpdateOperationsInput | $Enums.AuthorizationRelation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    isPublished: boolean
  }

  export type DashboardProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    isPublished: boolean
  }

  export type DashboardProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DashboardProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DashboardProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    isPublished: boolean
  }

  export type DashboardProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DashboardProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusFilter<$PrismaModel> | $Enums.UploadStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssetIdProjectIdCompoundUniqueInput = {
    id: string
    projectId: string
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    format?: SortOrder
    size?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    format?: SortOrder
    size?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    format?: SortOrder
    size?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadStatusFilter<$PrismaModel>
  }

  export type TeamNullableRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BuildListRelationFilter = {
    every?: BuildWhereInput
    some?: BuildWhereInput
    none?: BuildWhereInput
  }

  export type BuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectIdIsDeletedCompoundUniqueInput = {
    id: string
    isDeleted: boolean
  }

  export type ProjectDomainIsDeletedCompoundUniqueInput = {
    domain: string
    isDeleted: boolean
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type BuildIdProjectIdCompoundUniqueInput = {
    id: string
    projectId: string
  }

  export type BuildCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    isDev?: SortOrder
    isProd?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
  }

  export type BuildMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    isDev?: SortOrder
    isProd?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
  }

  export type BuildMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    isDev?: SortOrder
    isProd?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
  }

  export type BreakpointsCountOrderByAggregateInput = {
    buildId?: SortOrder
    values?: SortOrder
  }

  export type BreakpointsMaxOrderByAggregateInput = {
    buildId?: SortOrder
    values?: SortOrder
  }

  export type BreakpointsMinOrderByAggregateInput = {
    buildId?: SortOrder
    values?: SortOrder
  }

  export type EnumAuthorizationRelationFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationRelation | EnumAuthorizationRelationFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationRelationFilter<$PrismaModel> | $Enums.AuthorizationRelation
  }

  export type AuthorizationTokenTokenProjectIdCompoundUniqueInput = {
    token: string
    projectId: string
  }

  export type AuthorizationTokenCountOrderByAggregateInput = {
    token?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorizationTokenMaxOrderByAggregateInput = {
    token?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorizationTokenMinOrderByAggregateInput = {
    token?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAuthorizationRelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationRelation | EnumAuthorizationRelationFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationRelationWithAggregatesFilter<$PrismaModel> | $Enums.AuthorizationRelation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthorizationRelationFilter<$PrismaModel>
    _max?: NestedEnumAuthorizationRelationFilter<$PrismaModel>
  }

  export type DashboardProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    isPublished?: SortOrder
  }

  export type DashboardProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    isPublished?: SortOrder
  }

  export type DashboardProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    isPublished?: SortOrder
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLocationFieldUpdateOperationsInput = {
    set?: $Enums.Location
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUploadStatusFieldUpdateOperationsInput = {
    set?: $Enums.UploadStatus
  }

  export type TeamCreateNestedOneWithoutUsersInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    connect?: TeamWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamUpdateOneWithoutUsersNestedInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    upsert?: TeamUpsertWithoutUsersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUsersInput, TeamUpdateWithoutUsersInput>, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type BuildCreateNestedManyWithoutProjectInput = {
    create?: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput> | BuildCreateWithoutProjectInput[] | BuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutProjectInput | BuildCreateOrConnectWithoutProjectInput[]
    createMany?: BuildCreateManyProjectInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type BuildUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput> | BuildCreateWithoutProjectInput[] | BuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutProjectInput | BuildCreateOrConnectWithoutProjectInput[]
    createMany?: BuildCreateManyProjectInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type BuildUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput> | BuildCreateWithoutProjectInput[] | BuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutProjectInput | BuildCreateOrConnectWithoutProjectInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutProjectInput | BuildUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BuildCreateManyProjectInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutProjectInput | BuildUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutProjectInput | BuildUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type BuildUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput> | BuildCreateWithoutProjectInput[] | BuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutProjectInput | BuildCreateOrConnectWithoutProjectInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutProjectInput | BuildUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BuildCreateManyProjectInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutProjectInput | BuildUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutProjectInput | BuildUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutBuildInput = {
    create?: XOR<ProjectCreateWithoutBuildInput, ProjectUncheckedCreateWithoutBuildInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutBuildNestedInput = {
    create?: XOR<ProjectCreateWithoutBuildInput, ProjectUncheckedCreateWithoutBuildInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildInput
    upsert?: ProjectUpsertWithoutBuildInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBuildInput, ProjectUpdateWithoutBuildInput>, ProjectUncheckedUpdateWithoutBuildInput>
  }

  export type EnumAuthorizationRelationFieldUpdateOperationsInput = {
    set?: $Enums.AuthorizationRelation
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusFilter<$PrismaModel> | $Enums.UploadStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthorizationRelationFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationRelation | EnumAuthorizationRelationFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationRelationFilter<$PrismaModel> | $Enums.AuthorizationRelation
  }

  export type NestedEnumAuthorizationRelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationRelation | EnumAuthorizationRelationFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationRelation[] | ListEnumAuthorizationRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationRelationWithAggregatesFilter<$PrismaModel> | $Enums.AuthorizationRelation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthorizationRelationFilter<$PrismaModel>
    _max?: NestedEnumAuthorizationRelationFilter<$PrismaModel>
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    teamId?: StringNullableFilter<"User"> | string | null
  }

  export type TeamCreateWithoutUsersInput = {
    id?: string
  }

  export type TeamUncheckedCreateWithoutUsersInput = {
    id?: string
  }

  export type TeamCreateOrConnectWithoutUsersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    build?: BuildCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutUsersInput = {
    update: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUsersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    domain?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    teamId?: string | null
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type BuildCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    pages: string
    isDev: boolean
    isProd: boolean
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
  }

  export type BuildUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    pages: string
    isDev: boolean
    isProd: boolean
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
  }

  export type BuildCreateOrConnectWithoutProjectInput = {
    where: BuildWhereUniqueInput
    create: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput>
  }

  export type BuildCreateManyProjectInputEnvelope = {
    data: BuildCreateManyProjectInput | BuildCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildUpsertWithWhereUniqueWithoutProjectInput = {
    where: BuildWhereUniqueInput
    update: XOR<BuildUpdateWithoutProjectInput, BuildUncheckedUpdateWithoutProjectInput>
    create: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput>
  }

  export type BuildUpdateWithWhereUniqueWithoutProjectInput = {
    where: BuildWhereUniqueInput
    data: XOR<BuildUpdateWithoutProjectInput, BuildUncheckedUpdateWithoutProjectInput>
  }

  export type BuildUpdateManyWithWhereWithoutProjectInput = {
    where: BuildScalarWhereInput
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyWithoutProjectInput>
  }

  export type BuildScalarWhereInput = {
    AND?: BuildScalarWhereInput | BuildScalarWhereInput[]
    OR?: BuildScalarWhereInput[]
    NOT?: BuildScalarWhereInput | BuildScalarWhereInput[]
    id?: StringFilter<"Build"> | string
    createdAt?: DateTimeFilter<"Build"> | Date | string
    pages?: StringFilter<"Build"> | string
    projectId?: StringFilter<"Build"> | string
    isDev?: BoolFilter<"Build"> | boolean
    isProd?: BoolFilter<"Build"> | boolean
    breakpoints?: StringFilter<"Build"> | string
    styles?: StringFilter<"Build"> | string
    styleSources?: StringFilter<"Build"> | string
    styleSourceSelections?: StringFilter<"Build"> | string
    props?: StringFilter<"Build"> | string
    instances?: StringFilter<"Build"> | string
  }

  export type ProjectCreateWithoutBuildInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutBuildInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
  }

  export type ProjectCreateOrConnectWithoutBuildInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBuildInput, ProjectUncheckedCreateWithoutBuildInput>
  }

  export type ProjectUpsertWithoutBuildInput = {
    update: XOR<ProjectUpdateWithoutBuildInput, ProjectUncheckedUpdateWithoutBuildInput>
    create: XOR<ProjectCreateWithoutBuildInput, ProjectUncheckedCreateWithoutBuildInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBuildInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBuildInput, ProjectUncheckedUpdateWithoutBuildInput>
  }

  export type ProjectUpdateWithoutBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyTeamInput = {
    id?: string
    email?: string | null
    provider?: string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BuildCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    pages: string
    isDev: boolean
    isProd: boolean
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
  }

  export type BuildUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
  }

  export type BuildUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
  }

  export type BuildUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    isDev?: BoolFieldUpdateOperationsInput | boolean
    isProd?: BoolFieldUpdateOperationsInput | boolean
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetDefaultArgs instead
     */
    export type AssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildDefaultArgs instead
     */
    export type BuildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BreakpointsDefaultArgs instead
     */
    export type BreakpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BreakpointsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorizationTokenDefaultArgs instead
     */
    export type AuthorizationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorizationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DashboardProjectDefaultArgs instead
     */
    export type DashboardProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DashboardProjectDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
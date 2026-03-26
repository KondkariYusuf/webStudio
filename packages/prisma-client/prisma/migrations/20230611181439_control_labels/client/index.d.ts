
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
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
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
 * Model AuthorizationToken
 * 
 */
export type AuthorizationToken = $Result.DefaultSelection<Prisma.$AuthorizationTokenPayload>
/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model ProjectDomain
 * 
 */
export type ProjectDomain = $Result.DefaultSelection<Prisma.$ProjectDomainPayload>
/**
 * Model ProjectWithDomain
 * 
 */
export type ProjectWithDomain = $Result.DefaultSelection<Prisma.$ProjectWithDomainPayload>
/**
 * Model LatestBuildPerProjectDomain
 * 
 */
export type LatestBuildPerProjectDomain = $Result.DefaultSelection<Prisma.$LatestBuildPerProjectDomainPayload>
/**
 * Model LatestBuildPerProject
 * 
 */
export type LatestBuildPerProject = $Result.DefaultSelection<Prisma.$LatestBuildPerProjectPayload>
/**
 * Model DashboardProject
 * 
 */
export type DashboardProject = $Result.DefaultSelection<Prisma.$DashboardProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UploadStatus: {
  UPLOADING: 'UPLOADING',
  UPLOADED: 'UPLOADED'
};

export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus]


export const PublishStatus: {
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]


export const AuthorizationRelation: {
  viewers: 'viewers',
  editors: 'editors',
  builders: 'builders'
};

export type AuthorizationRelation = (typeof AuthorizationRelation)[keyof typeof AuthorizationRelation]


export const DomainStatus: {
  INITIALIZING: 'INITIALIZING',
  ACTIVE: 'ACTIVE',
  ERROR: 'ERROR',
  PENDING: 'PENDING'
};

export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus]

}

export type UploadStatus = $Enums.UploadStatus

export const UploadStatus: typeof $Enums.UploadStatus

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

export type AuthorizationRelation = $Enums.AuthorizationRelation

export const AuthorizationRelation: typeof $Enums.AuthorizationRelation

export type DomainStatus = $Enums.DomainStatus

export const DomainStatus: typeof $Enums.DomainStatus

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
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

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
   * `prisma.authorizationToken`: Exposes CRUD operations for the **AuthorizationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorizationTokens
    * const authorizationTokens = await prisma.authorizationToken.findMany()
    * ```
    */
  get authorizationToken(): Prisma.AuthorizationTokenDelegate<ExtArgs>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs>;

  /**
   * `prisma.projectDomain`: Exposes CRUD operations for the **ProjectDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDomains
    * const projectDomains = await prisma.projectDomain.findMany()
    * ```
    */
  get projectDomain(): Prisma.ProjectDomainDelegate<ExtArgs>;

  /**
   * `prisma.projectWithDomain`: Exposes CRUD operations for the **ProjectWithDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectWithDomains
    * const projectWithDomains = await prisma.projectWithDomain.findMany()
    * ```
    */
  get projectWithDomain(): Prisma.ProjectWithDomainDelegate<ExtArgs>;

  /**
   * `prisma.latestBuildPerProjectDomain`: Exposes CRUD operations for the **LatestBuildPerProjectDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LatestBuildPerProjectDomains
    * const latestBuildPerProjectDomains = await prisma.latestBuildPerProjectDomain.findMany()
    * ```
    */
  get latestBuildPerProjectDomain(): Prisma.LatestBuildPerProjectDomainDelegate<ExtArgs>;

  /**
   * `prisma.latestBuildPerProject`: Exposes CRUD operations for the **LatestBuildPerProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LatestBuildPerProjects
    * const latestBuildPerProjects = await prisma.latestBuildPerProject.findMany()
    * ```
    */
  get latestBuildPerProject(): Prisma.LatestBuildPerProjectDelegate<ExtArgs>;

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
    File: 'File',
    Asset: 'Asset',
    User: 'User',
    Project: 'Project',
    Build: 'Build',
    AuthorizationToken: 'AuthorizationToken',
    Domain: 'Domain',
    ProjectDomain: 'ProjectDomain',
    ProjectWithDomain: 'ProjectWithDomain',
    LatestBuildPerProjectDomain: 'LatestBuildPerProjectDomain',
    LatestBuildPerProject: 'LatestBuildPerProject',
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
      modelProps: 'team' | 'file' | 'asset' | 'user' | 'project' | 'build' | 'authorizationToken' | 'domain' | 'projectDomain' | 'projectWithDomain' | 'latestBuildPerProjectDomain' | 'latestBuildPerProject' | 'dashboardProject'
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
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>,
            result: $Utils.Optional<FileCountAggregateOutputType> | number
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
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>,
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      ProjectDomain: {
        payload: Prisma.$ProjectDomainPayload<ExtArgs>
        fields: Prisma.ProjectDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDomainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDomainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>
          }
          findFirst: {
            args: Prisma.ProjectDomainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDomainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>
          }
          findMany: {
            args: Prisma.ProjectDomainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>[]
          }
          create: {
            args: Prisma.ProjectDomainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>
          }
          createMany: {
            args: Prisma.ProjectDomainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDomainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>
          }
          update: {
            args: Prisma.ProjectDomainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDomainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDomainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectDomainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectDomainPayload>
          }
          aggregate: {
            args: Prisma.ProjectDomainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjectDomain>
          }
          groupBy: {
            args: Prisma.ProjectDomainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDomainCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectDomainCountAggregateOutputType> | number
          }
        }
      }
      ProjectWithDomain: {
        payload: Prisma.$ProjectWithDomainPayload<ExtArgs>
        fields: Prisma.ProjectWithDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectWithDomainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectWithDomainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>
          }
          findFirst: {
            args: Prisma.ProjectWithDomainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectWithDomainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>
          }
          findMany: {
            args: Prisma.ProjectWithDomainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>[]
          }
          create: {
            args: Prisma.ProjectWithDomainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>
          }
          createMany: {
            args: Prisma.ProjectWithDomainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectWithDomainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>
          }
          update: {
            args: Prisma.ProjectWithDomainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>
          }
          deleteMany: {
            args: Prisma.ProjectWithDomainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectWithDomainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectWithDomainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectWithDomainPayload>
          }
          aggregate: {
            args: Prisma.ProjectWithDomainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjectWithDomain>
          }
          groupBy: {
            args: Prisma.ProjectWithDomainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectWithDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectWithDomainCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectWithDomainCountAggregateOutputType> | number
          }
        }
      }
      LatestBuildPerProjectDomain: {
        payload: Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>
        fields: Prisma.LatestBuildPerProjectDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LatestBuildPerProjectDomainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LatestBuildPerProjectDomainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>
          }
          findFirst: {
            args: Prisma.LatestBuildPerProjectDomainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LatestBuildPerProjectDomainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>
          }
          findMany: {
            args: Prisma.LatestBuildPerProjectDomainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>[]
          }
          create: {
            args: Prisma.LatestBuildPerProjectDomainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>
          }
          createMany: {
            args: Prisma.LatestBuildPerProjectDomainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LatestBuildPerProjectDomainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>
          }
          update: {
            args: Prisma.LatestBuildPerProjectDomainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>
          }
          deleteMany: {
            args: Prisma.LatestBuildPerProjectDomainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LatestBuildPerProjectDomainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LatestBuildPerProjectDomainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectDomainPayload>
          }
          aggregate: {
            args: Prisma.LatestBuildPerProjectDomainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLatestBuildPerProjectDomain>
          }
          groupBy: {
            args: Prisma.LatestBuildPerProjectDomainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LatestBuildPerProjectDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.LatestBuildPerProjectDomainCountArgs<ExtArgs>,
            result: $Utils.Optional<LatestBuildPerProjectDomainCountAggregateOutputType> | number
          }
        }
      }
      LatestBuildPerProject: {
        payload: Prisma.$LatestBuildPerProjectPayload<ExtArgs>
        fields: Prisma.LatestBuildPerProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LatestBuildPerProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LatestBuildPerProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>
          }
          findFirst: {
            args: Prisma.LatestBuildPerProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LatestBuildPerProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>
          }
          findMany: {
            args: Prisma.LatestBuildPerProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>[]
          }
          create: {
            args: Prisma.LatestBuildPerProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>
          }
          createMany: {
            args: Prisma.LatestBuildPerProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LatestBuildPerProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>
          }
          update: {
            args: Prisma.LatestBuildPerProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>
          }
          deleteMany: {
            args: Prisma.LatestBuildPerProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LatestBuildPerProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LatestBuildPerProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestBuildPerProjectPayload>
          }
          aggregate: {
            args: Prisma.LatestBuildPerProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLatestBuildPerProject>
          }
          groupBy: {
            args: Prisma.LatestBuildPerProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LatestBuildPerProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.LatestBuildPerProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<LatestBuildPerProjectCountAggregateOutputType> | number
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
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    assets: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | FileCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
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
    files: number
    projectDomain: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    build?: boolean | ProjectCountOutputTypeCountBuildArgs
    files?: boolean | ProjectCountOutputTypeCountFilesArgs
    projectDomain?: boolean | ProjectCountOutputTypeCountProjectDomainArgs
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
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDomainWhereInput
  }



  /**
   * Count Type DomainCountOutputType
   */

  export type DomainCountOutputType = {
    ProjectDomain: number
    projectWithDomain: number
  }

  export type DomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectDomain?: boolean | DomainCountOutputTypeCountProjectDomainArgs
    projectWithDomain?: boolean | DomainCountOutputTypeCountProjectWithDomainArgs
  }

  // Custom InputTypes

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCountOutputType
     */
    select?: DomainCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountProjectDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDomainWhereInput
  }


  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountProjectWithDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWithDomainWhereInput
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
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    name: string | null
    format: string | null
    size: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    meta: string | null
    status: $Enums.UploadStatus | null
    isDeleted: boolean | null
    uploaderProjectId: string | null
  }

  export type FileMaxAggregateOutputType = {
    name: string | null
    format: string | null
    size: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    meta: string | null
    status: $Enums.UploadStatus | null
    isDeleted: boolean | null
    uploaderProjectId: string | null
  }

  export type FileCountAggregateOutputType = {
    name: number
    format: number
    size: number
    description: number
    createdAt: number
    updatedAt: number
    meta: number
    status: number
    isDeleted: number
    uploaderProjectId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    size?: true
  }

  export type FileSumAggregateInputType = {
    size?: true
  }

  export type FileMinAggregateInputType = {
    name?: true
    format?: true
    size?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    meta?: true
    status?: true
    isDeleted?: true
    uploaderProjectId?: true
  }

  export type FileMaxAggregateInputType = {
    name?: true
    format?: true
    size?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    meta?: true
    status?: true
    isDeleted?: true
    uploaderProjectId?: true
  }

  export type FileCountAggregateInputType = {
    name?: true
    format?: true
    size?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    meta?: true
    status?: true
    isDeleted?: true
    uploaderProjectId?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    name: string
    format: string
    size: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    meta: string
    status: $Enums.UploadStatus
    isDeleted: boolean
    uploaderProjectId: string | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    format?: boolean
    size?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean
    status?: boolean
    isDeleted?: boolean
    uploaderProjectId?: boolean
    uploaderProject?: boolean | File$uploaderProjectArgs<ExtArgs>
    assets?: boolean | File$assetsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    name?: boolean
    format?: boolean
    size?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean
    status?: boolean
    isDeleted?: boolean
    uploaderProjectId?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploaderProject?: boolean | File$uploaderProjectArgs<ExtArgs>
    assets?: boolean | File$assetsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      uploaderProject: Prisma.$ProjectPayload<ExtArgs> | null
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      format: string
      size: number
      description: string | null
      createdAt: Date
      updatedAt: Date
      meta: string
      status: $Enums.UploadStatus
      isDeleted: boolean
      uploaderProjectId: string | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }


  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const fileWithNameOnly = await prisma.file.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FileCreateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    uploaderProject<T extends File$uploaderProjectArgs<ExtArgs> = {}>(args?: Subset<T, File$uploaderProjectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    assets<T extends File$assetsArgs<ExtArgs> = {}>(args?: Subset<T, File$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly name: FieldRef<"File", 'String'>
    readonly format: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly description: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
    readonly meta: FieldRef<"File", 'String'>
    readonly status: FieldRef<"File", 'UploadStatus'>
    readonly isDeleted: FieldRef<"File", 'Boolean'>
    readonly uploaderProjectId: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File.uploaderProject
   */
  export type File$uploaderProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }


  /**
   * File.assets
   */
  export type File$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
  }



  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
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
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    projectId: string
    name: string
    _count: AssetCountAggregateOutputType | null
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
    name?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
  }

  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }


  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
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

    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly name: FieldRef<"Asset", 'String'>
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetInclude<ExtArgs> | null
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
    files?: boolean | Project$filesArgs<ExtArgs>
    projectDomain?: boolean | Project$projectDomainArgs<ExtArgs>
    latestBuild?: boolean | Project$latestBuildArgs<ExtArgs>
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
    files?: boolean | Project$filesArgs<ExtArgs>
    projectDomain?: boolean | Project$projectDomainArgs<ExtArgs>
    latestBuild?: boolean | Project$latestBuildArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      build: Prisma.$BuildPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      projectDomain: Prisma.$ProjectDomainPayload<ExtArgs>[]
      latestBuild: Prisma.$LatestBuildPerProjectPayload<ExtArgs> | null
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

    files<T extends Project$filesArgs<ExtArgs> = {}>(args?: Subset<T, Project$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'> | Null>;

    projectDomain<T extends Project$projectDomainArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectDomainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findMany'> | Null>;

    latestBuild<T extends Project$latestBuildArgs<ExtArgs> = {}>(args?: Subset<T, Project$latestBuildArgs<ExtArgs>>): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Project.files
   */
  export type Project$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * Project.projectDomain
   */
  export type Project$projectDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    where?: ProjectDomainWhereInput
    orderBy?: ProjectDomainOrderByWithRelationInput | ProjectDomainOrderByWithRelationInput[]
    cursor?: ProjectDomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDomainScalarFieldEnum | ProjectDomainScalarFieldEnum[]
  }


  /**
   * Project.latestBuild
   */
  export type Project$latestBuildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    where?: LatestBuildPerProjectWhereInput
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
    _avg: BuildAvgAggregateOutputType | null
    _sum: BuildSumAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  export type BuildAvgAggregateOutputType = {
    version: number | null
  }

  export type BuildSumAggregateOutputType = {
    version: number | null
  }

  export type BuildMinAggregateOutputType = {
    id: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    pages: string | null
    projectId: string | null
    breakpoints: string | null
    styles: string | null
    styleSources: string | null
    styleSourceSelections: string | null
    props: string | null
    instances: string | null
    deployment: string | null
    publishStatus: $Enums.PublishStatus | null
  }

  export type BuildMaxAggregateOutputType = {
    id: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
    pages: string | null
    projectId: string | null
    breakpoints: string | null
    styles: string | null
    styleSources: string | null
    styleSourceSelections: string | null
    props: string | null
    instances: string | null
    deployment: string | null
    publishStatus: $Enums.PublishStatus | null
  }

  export type BuildCountAggregateOutputType = {
    id: number
    version: number
    createdAt: number
    updatedAt: number
    pages: number
    projectId: number
    breakpoints: number
    styles: number
    styleSources: number
    styleSourceSelections: number
    props: number
    instances: number
    deployment: number
    publishStatus: number
    _all: number
  }


  export type BuildAvgAggregateInputType = {
    version?: true
  }

  export type BuildSumAggregateInputType = {
    version?: true
  }

  export type BuildMinAggregateInputType = {
    id?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    pages?: true
    projectId?: true
    breakpoints?: true
    styles?: true
    styleSources?: true
    styleSourceSelections?: true
    props?: true
    instances?: true
    deployment?: true
    publishStatus?: true
  }

  export type BuildMaxAggregateInputType = {
    id?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    pages?: true
    projectId?: true
    breakpoints?: true
    styles?: true
    styleSources?: true
    styleSourceSelections?: true
    props?: true
    instances?: true
    deployment?: true
    publishStatus?: true
  }

  export type BuildCountAggregateInputType = {
    id?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    pages?: true
    projectId?: true
    breakpoints?: true
    styles?: true
    styleSources?: true
    styleSourceSelections?: true
    props?: true
    instances?: true
    deployment?: true
    publishStatus?: true
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
     * Select which fields to average
    **/
    _avg?: BuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildSumAggregateInputType
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
    _avg?: BuildAvgAggregateInputType
    _sum?: BuildSumAggregateInputType
    _min?: BuildMinAggregateInputType
    _max?: BuildMaxAggregateInputType
  }

  export type BuildGroupByOutputType = {
    id: string
    version: number
    createdAt: Date
    updatedAt: Date
    pages: string
    projectId: string
    breakpoints: string
    styles: string
    styleSources: string
    styleSourceSelections: string
    props: string
    instances: string
    deployment: string | null
    publishStatus: $Enums.PublishStatus
    _count: BuildCountAggregateOutputType | null
    _avg: BuildAvgAggregateOutputType | null
    _sum: BuildSumAggregateOutputType | null
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
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean
    projectId?: boolean
    breakpoints?: boolean
    styles?: boolean
    styleSources?: boolean
    styleSourceSelections?: boolean
    props?: boolean
    instances?: boolean
    deployment?: boolean
    publishStatus?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectScalar = {
    id?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean
    projectId?: boolean
    breakpoints?: boolean
    styles?: boolean
    styleSources?: boolean
    styleSourceSelections?: boolean
    props?: boolean
    instances?: boolean
    deployment?: boolean
    publishStatus?: boolean
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
      version: number
      createdAt: Date
      updatedAt: Date
      pages: string
      projectId: string
      breakpoints: string
      styles: string
      styleSources: string
      styleSourceSelections: string
      props: string
      instances: string
      deployment: string | null
      publishStatus: $Enums.PublishStatus
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
    readonly version: FieldRef<"Build", 'Int'>
    readonly createdAt: FieldRef<"Build", 'DateTime'>
    readonly updatedAt: FieldRef<"Build", 'DateTime'>
    readonly pages: FieldRef<"Build", 'String'>
    readonly projectId: FieldRef<"Build", 'String'>
    readonly breakpoints: FieldRef<"Build", 'String'>
    readonly styles: FieldRef<"Build", 'String'>
    readonly styleSources: FieldRef<"Build", 'String'>
    readonly styleSourceSelections: FieldRef<"Build", 'String'>
    readonly props: FieldRef<"Build", 'String'>
    readonly instances: FieldRef<"Build", 'String'>
    readonly deployment: FieldRef<"Build", 'String'>
    readonly publishStatus: FieldRef<"Build", 'PublishStatus'>
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
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
    txtRecord: string | null
    status: $Enums.DomainStatus | null
    error: string | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
    txtRecord: string | null
    status: $Enums.DomainStatus | null
    error: string | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    domain: number
    createdAt: number
    updatedAt: number
    txtRecord: number
    status: number
    error: number
    _all: number
  }


  export type DomainMinAggregateInputType = {
    id?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    txtRecord?: true
    status?: true
    error?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    txtRecord?: true
    status?: true
    error?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    txtRecord?: true
    status?: true
    error?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    domain: string
    createdAt: Date
    updatedAt: Date
    txtRecord: string | null
    status: $Enums.DomainStatus
    error: string | null
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    txtRecord?: boolean
    status?: boolean
    error?: boolean
    ProjectDomain?: boolean | Domain$ProjectDomainArgs<ExtArgs>
    projectWithDomain?: boolean | Domain$projectWithDomainArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    txtRecord?: boolean
    status?: boolean
    error?: boolean
  }

  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectDomain?: boolean | Domain$ProjectDomainArgs<ExtArgs>
    projectWithDomain?: boolean | Domain$projectWithDomainArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      ProjectDomain: Prisma.$ProjectDomainPayload<ExtArgs>[]
      projectWithDomain: Prisma.$ProjectWithDomainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domain: string
      createdAt: Date
      updatedAt: Date
      txtRecord: string | null
      status: $Enums.DomainStatus
      error: string | null
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }


  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DomainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Domain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DomainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DomainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
    **/
    create<T extends DomainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DomainCreateArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Domains.
     *     @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     *     @example
     *     // Create many Domains
     *     const domain = await prisma.domain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DomainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
    **/
    delete<T extends DomainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DomainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DomainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DomainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
    **/
    upsert<T extends DomainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
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
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ProjectDomain<T extends Domain$ProjectDomainArgs<ExtArgs> = {}>(args?: Subset<T, Domain$ProjectDomainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findMany'> | Null>;

    projectWithDomain<T extends Domain$projectWithDomainArgs<ExtArgs> = {}>(args?: Subset<T, Domain$projectWithDomainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Domain model
   */ 
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly domain: FieldRef<"Domain", 'String'>
    readonly createdAt: FieldRef<"Domain", 'DateTime'>
    readonly updatedAt: FieldRef<"Domain", 'DateTime'>
    readonly txtRecord: FieldRef<"Domain", 'String'>
    readonly status: FieldRef<"Domain", 'DomainStatus'>
    readonly error: FieldRef<"Domain", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }


  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }


  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }


  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }


  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
  }


  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }


  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
  }


  /**
   * Domain.ProjectDomain
   */
  export type Domain$ProjectDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    where?: ProjectDomainWhereInput
    orderBy?: ProjectDomainOrderByWithRelationInput | ProjectDomainOrderByWithRelationInput[]
    cursor?: ProjectDomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDomainScalarFieldEnum | ProjectDomainScalarFieldEnum[]
  }


  /**
   * Domain.projectWithDomain
   */
  export type Domain$projectWithDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    where?: ProjectWithDomainWhereInput
    orderBy?: ProjectWithDomainOrderByWithRelationInput | ProjectWithDomainOrderByWithRelationInput[]
    cursor?: ProjectWithDomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectWithDomainScalarFieldEnum | ProjectWithDomainScalarFieldEnum[]
  }


  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
  }



  /**
   * Model ProjectDomain
   */

  export type AggregateProjectDomain = {
    _count: ProjectDomainCountAggregateOutputType | null
    _min: ProjectDomainMinAggregateOutputType | null
    _max: ProjectDomainMaxAggregateOutputType | null
  }

  export type ProjectDomainMinAggregateOutputType = {
    projectId: string | null
    domainId: string | null
    createdAt: Date | null
    txtRecord: string | null
    cname: string | null
  }

  export type ProjectDomainMaxAggregateOutputType = {
    projectId: string | null
    domainId: string | null
    createdAt: Date | null
    txtRecord: string | null
    cname: string | null
  }

  export type ProjectDomainCountAggregateOutputType = {
    projectId: number
    domainId: number
    createdAt: number
    txtRecord: number
    cname: number
    _all: number
  }


  export type ProjectDomainMinAggregateInputType = {
    projectId?: true
    domainId?: true
    createdAt?: true
    txtRecord?: true
    cname?: true
  }

  export type ProjectDomainMaxAggregateInputType = {
    projectId?: true
    domainId?: true
    createdAt?: true
    txtRecord?: true
    cname?: true
  }

  export type ProjectDomainCountAggregateInputType = {
    projectId?: true
    domainId?: true
    createdAt?: true
    txtRecord?: true
    cname?: true
    _all?: true
  }

  export type ProjectDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDomain to aggregate.
     */
    where?: ProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDomains to fetch.
     */
    orderBy?: ProjectDomainOrderByWithRelationInput | ProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDomains
    **/
    _count?: true | ProjectDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDomainMaxAggregateInputType
  }

  export type GetProjectDomainAggregateType<T extends ProjectDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDomain[P]>
      : GetScalarType<T[P], AggregateProjectDomain[P]>
  }




  export type ProjectDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDomainWhereInput
    orderBy?: ProjectDomainOrderByWithAggregationInput | ProjectDomainOrderByWithAggregationInput[]
    by: ProjectDomainScalarFieldEnum[] | ProjectDomainScalarFieldEnum
    having?: ProjectDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDomainCountAggregateInputType | true
    _min?: ProjectDomainMinAggregateInputType
    _max?: ProjectDomainMaxAggregateInputType
  }

  export type ProjectDomainGroupByOutputType = {
    projectId: string
    domainId: string
    createdAt: Date
    txtRecord: string
    cname: string
    _count: ProjectDomainCountAggregateOutputType | null
    _min: ProjectDomainMinAggregateOutputType | null
    _max: ProjectDomainMaxAggregateOutputType | null
  }

  type GetProjectDomainGroupByPayload<T extends ProjectDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDomainGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDomainGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    domainId?: boolean
    createdAt?: boolean
    txtRecord?: boolean
    cname?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDomain"]>

  export type ProjectDomainSelectScalar = {
    projectId?: boolean
    domainId?: boolean
    createdAt?: boolean
    txtRecord?: boolean
    cname?: boolean
  }

  export type ProjectDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }


  export type $ProjectDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDomain"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      domain: Prisma.$DomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      domainId: string
      createdAt: Date
      txtRecord: string
      cname: string
    }, ExtArgs["result"]["projectDomain"]>
    composites: {}
  }


  type ProjectDomainGetPayload<S extends boolean | null | undefined | ProjectDomainDefaultArgs> = $Result.GetResult<Prisma.$ProjectDomainPayload, S>

  type ProjectDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectDomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectDomainCountAggregateInputType | true
    }

  export interface ProjectDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDomain'], meta: { name: 'ProjectDomain' } }
    /**
     * Find zero or one ProjectDomain that matches the filter.
     * @param {ProjectDomainFindUniqueArgs} args - Arguments to find a ProjectDomain
     * @example
     * // Get one ProjectDomain
     * const projectDomain = await prisma.projectDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectDomainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDomainFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProjectDomain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectDomainFindUniqueOrThrowArgs} args - Arguments to find a ProjectDomain
     * @example
     * // Get one ProjectDomain
     * const projectDomain = await prisma.projectDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectDomainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDomainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProjectDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainFindFirstArgs} args - Arguments to find a ProjectDomain
     * @example
     * // Get one ProjectDomain
     * const projectDomain = await prisma.projectDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectDomainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDomainFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProjectDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainFindFirstOrThrowArgs} args - Arguments to find a ProjectDomain
     * @example
     * // Get one ProjectDomain
     * const projectDomain = await prisma.projectDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectDomainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDomainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProjectDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDomains
     * const projectDomains = await prisma.projectDomain.findMany()
     * 
     * // Get first 10 ProjectDomains
     * const projectDomains = await prisma.projectDomain.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectDomainWithProjectIdOnly = await prisma.projectDomain.findMany({ select: { projectId: true } })
     * 
    **/
    findMany<T extends ProjectDomainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDomainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProjectDomain.
     * @param {ProjectDomainCreateArgs} args - Arguments to create a ProjectDomain.
     * @example
     * // Create one ProjectDomain
     * const ProjectDomain = await prisma.projectDomain.create({
     *   data: {
     *     // ... data to create a ProjectDomain
     *   }
     * })
     * 
    **/
    create<T extends ProjectDomainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDomainCreateArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProjectDomains.
     *     @param {ProjectDomainCreateManyArgs} args - Arguments to create many ProjectDomains.
     *     @example
     *     // Create many ProjectDomains
     *     const projectDomain = await prisma.projectDomain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectDomainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDomainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectDomain.
     * @param {ProjectDomainDeleteArgs} args - Arguments to delete one ProjectDomain.
     * @example
     * // Delete one ProjectDomain
     * const ProjectDomain = await prisma.projectDomain.delete({
     *   where: {
     *     // ... filter to delete one ProjectDomain
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDomainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDomainDeleteArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProjectDomain.
     * @param {ProjectDomainUpdateArgs} args - Arguments to update one ProjectDomain.
     * @example
     * // Update one ProjectDomain
     * const projectDomain = await prisma.projectDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectDomainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDomainUpdateArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProjectDomains.
     * @param {ProjectDomainDeleteManyArgs} args - Arguments to filter ProjectDomains to delete.
     * @example
     * // Delete a few ProjectDomains
     * const { count } = await prisma.projectDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDomainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDomainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDomains
     * const projectDomain = await prisma.projectDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectDomainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDomainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectDomain.
     * @param {ProjectDomainUpsertArgs} args - Arguments to update or create a ProjectDomain.
     * @example
     * // Update or create a ProjectDomain
     * const projectDomain = await prisma.projectDomain.upsert({
     *   create: {
     *     // ... data to create a ProjectDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDomain we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectDomainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDomainUpsertArgs<ExtArgs>>
    ): Prisma__ProjectDomainClient<$Result.GetResult<Prisma.$ProjectDomainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProjectDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainCountArgs} args - Arguments to filter ProjectDomains to count.
     * @example
     * // Count the number of ProjectDomains
     * const count = await prisma.projectDomain.count({
     *   where: {
     *     // ... the filter for the ProjectDomains we want to count
     *   }
     * })
    **/
    count<T extends ProjectDomainCountArgs>(
      args?: Subset<T, ProjectDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDomainAggregateArgs>(args: Subset<T, ProjectDomainAggregateArgs>): Prisma.PrismaPromise<GetProjectDomainAggregateType<T>>

    /**
     * Group by ProjectDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDomainGroupByArgs} args - Group by arguments.
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
      T extends ProjectDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDomainGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDomain model
   */
  readonly fields: ProjectDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ProjectDomain model
   */ 
  interface ProjectDomainFieldRefs {
    readonly projectId: FieldRef<"ProjectDomain", 'String'>
    readonly domainId: FieldRef<"ProjectDomain", 'String'>
    readonly createdAt: FieldRef<"ProjectDomain", 'DateTime'>
    readonly txtRecord: FieldRef<"ProjectDomain", 'String'>
    readonly cname: FieldRef<"ProjectDomain", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProjectDomain findUnique
   */
  export type ProjectDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDomain to fetch.
     */
    where: ProjectDomainWhereUniqueInput
  }


  /**
   * ProjectDomain findUniqueOrThrow
   */
  export type ProjectDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDomain to fetch.
     */
    where: ProjectDomainWhereUniqueInput
  }


  /**
   * ProjectDomain findFirst
   */
  export type ProjectDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDomain to fetch.
     */
    where?: ProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDomains to fetch.
     */
    orderBy?: ProjectDomainOrderByWithRelationInput | ProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDomains.
     */
    cursor?: ProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDomains.
     */
    distinct?: ProjectDomainScalarFieldEnum | ProjectDomainScalarFieldEnum[]
  }


  /**
   * ProjectDomain findFirstOrThrow
   */
  export type ProjectDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDomain to fetch.
     */
    where?: ProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDomains to fetch.
     */
    orderBy?: ProjectDomainOrderByWithRelationInput | ProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDomains.
     */
    cursor?: ProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDomains.
     */
    distinct?: ProjectDomainScalarFieldEnum | ProjectDomainScalarFieldEnum[]
  }


  /**
   * ProjectDomain findMany
   */
  export type ProjectDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDomains to fetch.
     */
    where?: ProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDomains to fetch.
     */
    orderBy?: ProjectDomainOrderByWithRelationInput | ProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDomains.
     */
    cursor?: ProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDomains.
     */
    skip?: number
    distinct?: ProjectDomainScalarFieldEnum | ProjectDomainScalarFieldEnum[]
  }


  /**
   * ProjectDomain create
   */
  export type ProjectDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDomain.
     */
    data: XOR<ProjectDomainCreateInput, ProjectDomainUncheckedCreateInput>
  }


  /**
   * ProjectDomain createMany
   */
  export type ProjectDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDomains.
     */
    data: ProjectDomainCreateManyInput | ProjectDomainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProjectDomain update
   */
  export type ProjectDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDomain.
     */
    data: XOR<ProjectDomainUpdateInput, ProjectDomainUncheckedUpdateInput>
    /**
     * Choose, which ProjectDomain to update.
     */
    where: ProjectDomainWhereUniqueInput
  }


  /**
   * ProjectDomain updateMany
   */
  export type ProjectDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDomains.
     */
    data: XOR<ProjectDomainUpdateManyMutationInput, ProjectDomainUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDomains to update
     */
    where?: ProjectDomainWhereInput
  }


  /**
   * ProjectDomain upsert
   */
  export type ProjectDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDomain to update in case it exists.
     */
    where: ProjectDomainWhereUniqueInput
    /**
     * In case the ProjectDomain found by the `where` argument doesn't exist, create a new ProjectDomain with this data.
     */
    create: XOR<ProjectDomainCreateInput, ProjectDomainUncheckedCreateInput>
    /**
     * In case the ProjectDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDomainUpdateInput, ProjectDomainUncheckedUpdateInput>
  }


  /**
   * ProjectDomain delete
   */
  export type ProjectDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
    /**
     * Filter which ProjectDomain to delete.
     */
    where: ProjectDomainWhereUniqueInput
  }


  /**
   * ProjectDomain deleteMany
   */
  export type ProjectDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDomains to delete
     */
    where?: ProjectDomainWhereInput
  }


  /**
   * ProjectDomain without action
   */
  export type ProjectDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDomain
     */
    select?: ProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectDomainInclude<ExtArgs> | null
  }



  /**
   * Model ProjectWithDomain
   */

  export type AggregateProjectWithDomain = {
    _count: ProjectWithDomainCountAggregateOutputType | null
    _min: ProjectWithDomainMinAggregateOutputType | null
    _max: ProjectWithDomainMaxAggregateOutputType | null
  }

  export type ProjectWithDomainMinAggregateOutputType = {
    projectId: string | null
    domainId: string | null
    txtRecord: string | null
    createdAt: Date | null
    cname: string | null
    verified: boolean | null
    userId: string | null
  }

  export type ProjectWithDomainMaxAggregateOutputType = {
    projectId: string | null
    domainId: string | null
    txtRecord: string | null
    createdAt: Date | null
    cname: string | null
    verified: boolean | null
    userId: string | null
  }

  export type ProjectWithDomainCountAggregateOutputType = {
    projectId: number
    domainId: number
    txtRecord: number
    createdAt: number
    cname: number
    verified: number
    userId: number
    _all: number
  }


  export type ProjectWithDomainMinAggregateInputType = {
    projectId?: true
    domainId?: true
    txtRecord?: true
    createdAt?: true
    cname?: true
    verified?: true
    userId?: true
  }

  export type ProjectWithDomainMaxAggregateInputType = {
    projectId?: true
    domainId?: true
    txtRecord?: true
    createdAt?: true
    cname?: true
    verified?: true
    userId?: true
  }

  export type ProjectWithDomainCountAggregateInputType = {
    projectId?: true
    domainId?: true
    txtRecord?: true
    createdAt?: true
    cname?: true
    verified?: true
    userId?: true
    _all?: true
  }

  export type ProjectWithDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectWithDomain to aggregate.
     */
    where?: ProjectWithDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWithDomains to fetch.
     */
    orderBy?: ProjectWithDomainOrderByWithRelationInput | ProjectWithDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWithDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWithDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWithDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectWithDomains
    **/
    _count?: true | ProjectWithDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectWithDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectWithDomainMaxAggregateInputType
  }

  export type GetProjectWithDomainAggregateType<T extends ProjectWithDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectWithDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectWithDomain[P]>
      : GetScalarType<T[P], AggregateProjectWithDomain[P]>
  }




  export type ProjectWithDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWithDomainWhereInput
    orderBy?: ProjectWithDomainOrderByWithAggregationInput | ProjectWithDomainOrderByWithAggregationInput[]
    by: ProjectWithDomainScalarFieldEnum[] | ProjectWithDomainScalarFieldEnum
    having?: ProjectWithDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectWithDomainCountAggregateInputType | true
    _min?: ProjectWithDomainMinAggregateInputType
    _max?: ProjectWithDomainMaxAggregateInputType
  }

  export type ProjectWithDomainGroupByOutputType = {
    projectId: string
    domainId: string
    txtRecord: string
    createdAt: Date
    cname: string
    verified: boolean
    userId: string | null
    _count: ProjectWithDomainCountAggregateOutputType | null
    _min: ProjectWithDomainMinAggregateOutputType | null
    _max: ProjectWithDomainMaxAggregateOutputType | null
  }

  type GetProjectWithDomainGroupByPayload<T extends ProjectWithDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectWithDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectWithDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectWithDomainGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectWithDomainGroupByOutputType[P]>
        }
      >
    >


  export type ProjectWithDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    domainId?: boolean
    txtRecord?: boolean
    createdAt?: boolean
    cname?: boolean
    verified?: boolean
    userId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    latestBuid?: boolean | ProjectWithDomain$latestBuidArgs<ExtArgs>
  }, ExtArgs["result"]["projectWithDomain"]>

  export type ProjectWithDomainSelectScalar = {
    projectId?: boolean
    domainId?: boolean
    txtRecord?: boolean
    createdAt?: boolean
    cname?: boolean
    verified?: boolean
    userId?: boolean
  }

  export type ProjectWithDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    latestBuid?: boolean | ProjectWithDomain$latestBuidArgs<ExtArgs>
  }


  export type $ProjectWithDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectWithDomain"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      latestBuid: Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      domainId: string
      txtRecord: string
      createdAt: Date
      cname: string
      verified: boolean
      userId: string | null
    }, ExtArgs["result"]["projectWithDomain"]>
    composites: {}
  }


  type ProjectWithDomainGetPayload<S extends boolean | null | undefined | ProjectWithDomainDefaultArgs> = $Result.GetResult<Prisma.$ProjectWithDomainPayload, S>

  type ProjectWithDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectWithDomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectWithDomainCountAggregateInputType | true
    }

  export interface ProjectWithDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectWithDomain'], meta: { name: 'ProjectWithDomain' } }
    /**
     * Find zero or one ProjectWithDomain that matches the filter.
     * @param {ProjectWithDomainFindUniqueArgs} args - Arguments to find a ProjectWithDomain
     * @example
     * // Get one ProjectWithDomain
     * const projectWithDomain = await prisma.projectWithDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectWithDomainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectWithDomainFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProjectWithDomain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectWithDomainFindUniqueOrThrowArgs} args - Arguments to find a ProjectWithDomain
     * @example
     * // Get one ProjectWithDomain
     * const projectWithDomain = await prisma.projectWithDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectWithDomainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectWithDomainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProjectWithDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainFindFirstArgs} args - Arguments to find a ProjectWithDomain
     * @example
     * // Get one ProjectWithDomain
     * const projectWithDomain = await prisma.projectWithDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectWithDomainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectWithDomainFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProjectWithDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainFindFirstOrThrowArgs} args - Arguments to find a ProjectWithDomain
     * @example
     * // Get one ProjectWithDomain
     * const projectWithDomain = await prisma.projectWithDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectWithDomainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectWithDomainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProjectWithDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectWithDomains
     * const projectWithDomains = await prisma.projectWithDomain.findMany()
     * 
     * // Get first 10 ProjectWithDomains
     * const projectWithDomains = await prisma.projectWithDomain.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectWithDomainWithProjectIdOnly = await prisma.projectWithDomain.findMany({ select: { projectId: true } })
     * 
    **/
    findMany<T extends ProjectWithDomainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectWithDomainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProjectWithDomain.
     * @param {ProjectWithDomainCreateArgs} args - Arguments to create a ProjectWithDomain.
     * @example
     * // Create one ProjectWithDomain
     * const ProjectWithDomain = await prisma.projectWithDomain.create({
     *   data: {
     *     // ... data to create a ProjectWithDomain
     *   }
     * })
     * 
    **/
    create<T extends ProjectWithDomainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectWithDomainCreateArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProjectWithDomains.
     *     @param {ProjectWithDomainCreateManyArgs} args - Arguments to create many ProjectWithDomains.
     *     @example
     *     // Create many ProjectWithDomains
     *     const projectWithDomain = await prisma.projectWithDomain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectWithDomainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectWithDomainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectWithDomain.
     * @param {ProjectWithDomainDeleteArgs} args - Arguments to delete one ProjectWithDomain.
     * @example
     * // Delete one ProjectWithDomain
     * const ProjectWithDomain = await prisma.projectWithDomain.delete({
     *   where: {
     *     // ... filter to delete one ProjectWithDomain
     *   }
     * })
     * 
    **/
    delete<T extends ProjectWithDomainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectWithDomainDeleteArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProjectWithDomain.
     * @param {ProjectWithDomainUpdateArgs} args - Arguments to update one ProjectWithDomain.
     * @example
     * // Update one ProjectWithDomain
     * const projectWithDomain = await prisma.projectWithDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectWithDomainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectWithDomainUpdateArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProjectWithDomains.
     * @param {ProjectWithDomainDeleteManyArgs} args - Arguments to filter ProjectWithDomains to delete.
     * @example
     * // Delete a few ProjectWithDomains
     * const { count } = await prisma.projectWithDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectWithDomainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectWithDomainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectWithDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectWithDomains
     * const projectWithDomain = await prisma.projectWithDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectWithDomainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectWithDomainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectWithDomain.
     * @param {ProjectWithDomainUpsertArgs} args - Arguments to update or create a ProjectWithDomain.
     * @example
     * // Update or create a ProjectWithDomain
     * const projectWithDomain = await prisma.projectWithDomain.upsert({
     *   create: {
     *     // ... data to create a ProjectWithDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectWithDomain we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectWithDomainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectWithDomainUpsertArgs<ExtArgs>>
    ): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProjectWithDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainCountArgs} args - Arguments to filter ProjectWithDomains to count.
     * @example
     * // Count the number of ProjectWithDomains
     * const count = await prisma.projectWithDomain.count({
     *   where: {
     *     // ... the filter for the ProjectWithDomains we want to count
     *   }
     * })
    **/
    count<T extends ProjectWithDomainCountArgs>(
      args?: Subset<T, ProjectWithDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectWithDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectWithDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectWithDomainAggregateArgs>(args: Subset<T, ProjectWithDomainAggregateArgs>): Prisma.PrismaPromise<GetProjectWithDomainAggregateType<T>>

    /**
     * Group by ProjectWithDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectWithDomainGroupByArgs} args - Group by arguments.
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
      T extends ProjectWithDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectWithDomainGroupByArgs['orderBy'] }
        : { orderBy?: ProjectWithDomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectWithDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectWithDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectWithDomain model
   */
  readonly fields: ProjectWithDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectWithDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectWithDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    latestBuid<T extends ProjectWithDomain$latestBuidArgs<ExtArgs> = {}>(args?: Subset<T, ProjectWithDomain$latestBuidArgs<ExtArgs>>): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the ProjectWithDomain model
   */ 
  interface ProjectWithDomainFieldRefs {
    readonly projectId: FieldRef<"ProjectWithDomain", 'String'>
    readonly domainId: FieldRef<"ProjectWithDomain", 'String'>
    readonly txtRecord: FieldRef<"ProjectWithDomain", 'String'>
    readonly createdAt: FieldRef<"ProjectWithDomain", 'DateTime'>
    readonly cname: FieldRef<"ProjectWithDomain", 'String'>
    readonly verified: FieldRef<"ProjectWithDomain", 'Boolean'>
    readonly userId: FieldRef<"ProjectWithDomain", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProjectWithDomain findUnique
   */
  export type ProjectWithDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWithDomain to fetch.
     */
    where: ProjectWithDomainWhereUniqueInput
  }


  /**
   * ProjectWithDomain findUniqueOrThrow
   */
  export type ProjectWithDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWithDomain to fetch.
     */
    where: ProjectWithDomainWhereUniqueInput
  }


  /**
   * ProjectWithDomain findFirst
   */
  export type ProjectWithDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWithDomain to fetch.
     */
    where?: ProjectWithDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWithDomains to fetch.
     */
    orderBy?: ProjectWithDomainOrderByWithRelationInput | ProjectWithDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectWithDomains.
     */
    cursor?: ProjectWithDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWithDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWithDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectWithDomains.
     */
    distinct?: ProjectWithDomainScalarFieldEnum | ProjectWithDomainScalarFieldEnum[]
  }


  /**
   * ProjectWithDomain findFirstOrThrow
   */
  export type ProjectWithDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWithDomain to fetch.
     */
    where?: ProjectWithDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWithDomains to fetch.
     */
    orderBy?: ProjectWithDomainOrderByWithRelationInput | ProjectWithDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectWithDomains.
     */
    cursor?: ProjectWithDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWithDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWithDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectWithDomains.
     */
    distinct?: ProjectWithDomainScalarFieldEnum | ProjectWithDomainScalarFieldEnum[]
  }


  /**
   * ProjectWithDomain findMany
   */
  export type ProjectWithDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * Filter, which ProjectWithDomains to fetch.
     */
    where?: ProjectWithDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectWithDomains to fetch.
     */
    orderBy?: ProjectWithDomainOrderByWithRelationInput | ProjectWithDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectWithDomains.
     */
    cursor?: ProjectWithDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectWithDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectWithDomains.
     */
    skip?: number
    distinct?: ProjectWithDomainScalarFieldEnum | ProjectWithDomainScalarFieldEnum[]
  }


  /**
   * ProjectWithDomain create
   */
  export type ProjectWithDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectWithDomain.
     */
    data: XOR<ProjectWithDomainCreateInput, ProjectWithDomainUncheckedCreateInput>
  }


  /**
   * ProjectWithDomain createMany
   */
  export type ProjectWithDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectWithDomains.
     */
    data: ProjectWithDomainCreateManyInput | ProjectWithDomainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProjectWithDomain update
   */
  export type ProjectWithDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectWithDomain.
     */
    data: XOR<ProjectWithDomainUpdateInput, ProjectWithDomainUncheckedUpdateInput>
    /**
     * Choose, which ProjectWithDomain to update.
     */
    where: ProjectWithDomainWhereUniqueInput
  }


  /**
   * ProjectWithDomain updateMany
   */
  export type ProjectWithDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectWithDomains.
     */
    data: XOR<ProjectWithDomainUpdateManyMutationInput, ProjectWithDomainUncheckedUpdateManyInput>
    /**
     * Filter which ProjectWithDomains to update
     */
    where?: ProjectWithDomainWhereInput
  }


  /**
   * ProjectWithDomain upsert
   */
  export type ProjectWithDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectWithDomain to update in case it exists.
     */
    where: ProjectWithDomainWhereUniqueInput
    /**
     * In case the ProjectWithDomain found by the `where` argument doesn't exist, create a new ProjectWithDomain with this data.
     */
    create: XOR<ProjectWithDomainCreateInput, ProjectWithDomainUncheckedCreateInput>
    /**
     * In case the ProjectWithDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectWithDomainUpdateInput, ProjectWithDomainUncheckedUpdateInput>
  }


  /**
   * ProjectWithDomain delete
   */
  export type ProjectWithDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
    /**
     * Filter which ProjectWithDomain to delete.
     */
    where: ProjectWithDomainWhereUniqueInput
  }


  /**
   * ProjectWithDomain deleteMany
   */
  export type ProjectWithDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectWithDomains to delete
     */
    where?: ProjectWithDomainWhereInput
  }


  /**
   * ProjectWithDomain.latestBuid
   */
  export type ProjectWithDomain$latestBuidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    where?: LatestBuildPerProjectDomainWhereInput
  }


  /**
   * ProjectWithDomain without action
   */
  export type ProjectWithDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectWithDomain
     */
    select?: ProjectWithDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectWithDomainInclude<ExtArgs> | null
  }



  /**
   * Model LatestBuildPerProjectDomain
   */

  export type AggregateLatestBuildPerProjectDomain = {
    _count: LatestBuildPerProjectDomainCountAggregateOutputType | null
    _min: LatestBuildPerProjectDomainMinAggregateOutputType | null
    _max: LatestBuildPerProjectDomainMaxAggregateOutputType | null
  }

  export type LatestBuildPerProjectDomainMinAggregateOutputType = {
    domainId: string | null
    buildId: string | null
    projectId: string | null
    isLatestBuild: boolean | null
    publishStatus: $Enums.PublishStatus | null
    updatedAt: Date | null
  }

  export type LatestBuildPerProjectDomainMaxAggregateOutputType = {
    domainId: string | null
    buildId: string | null
    projectId: string | null
    isLatestBuild: boolean | null
    publishStatus: $Enums.PublishStatus | null
    updatedAt: Date | null
  }

  export type LatestBuildPerProjectDomainCountAggregateOutputType = {
    domainId: number
    buildId: number
    projectId: number
    isLatestBuild: number
    publishStatus: number
    updatedAt: number
    _all: number
  }


  export type LatestBuildPerProjectDomainMinAggregateInputType = {
    domainId?: true
    buildId?: true
    projectId?: true
    isLatestBuild?: true
    publishStatus?: true
    updatedAt?: true
  }

  export type LatestBuildPerProjectDomainMaxAggregateInputType = {
    domainId?: true
    buildId?: true
    projectId?: true
    isLatestBuild?: true
    publishStatus?: true
    updatedAt?: true
  }

  export type LatestBuildPerProjectDomainCountAggregateInputType = {
    domainId?: true
    buildId?: true
    projectId?: true
    isLatestBuild?: true
    publishStatus?: true
    updatedAt?: true
    _all?: true
  }

  export type LatestBuildPerProjectDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LatestBuildPerProjectDomain to aggregate.
     */
    where?: LatestBuildPerProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjectDomains to fetch.
     */
    orderBy?: LatestBuildPerProjectDomainOrderByWithRelationInput | LatestBuildPerProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LatestBuildPerProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjectDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LatestBuildPerProjectDomains
    **/
    _count?: true | LatestBuildPerProjectDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LatestBuildPerProjectDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LatestBuildPerProjectDomainMaxAggregateInputType
  }

  export type GetLatestBuildPerProjectDomainAggregateType<T extends LatestBuildPerProjectDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateLatestBuildPerProjectDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLatestBuildPerProjectDomain[P]>
      : GetScalarType<T[P], AggregateLatestBuildPerProjectDomain[P]>
  }




  export type LatestBuildPerProjectDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LatestBuildPerProjectDomainWhereInput
    orderBy?: LatestBuildPerProjectDomainOrderByWithAggregationInput | LatestBuildPerProjectDomainOrderByWithAggregationInput[]
    by: LatestBuildPerProjectDomainScalarFieldEnum[] | LatestBuildPerProjectDomainScalarFieldEnum
    having?: LatestBuildPerProjectDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LatestBuildPerProjectDomainCountAggregateInputType | true
    _min?: LatestBuildPerProjectDomainMinAggregateInputType
    _max?: LatestBuildPerProjectDomainMaxAggregateInputType
  }

  export type LatestBuildPerProjectDomainGroupByOutputType = {
    domainId: string
    buildId: string
    projectId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date
    _count: LatestBuildPerProjectDomainCountAggregateOutputType | null
    _min: LatestBuildPerProjectDomainMinAggregateOutputType | null
    _max: LatestBuildPerProjectDomainMaxAggregateOutputType | null
  }

  type GetLatestBuildPerProjectDomainGroupByPayload<T extends LatestBuildPerProjectDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LatestBuildPerProjectDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LatestBuildPerProjectDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LatestBuildPerProjectDomainGroupByOutputType[P]>
            : GetScalarType<T[P], LatestBuildPerProjectDomainGroupByOutputType[P]>
        }
      >
    >


  export type LatestBuildPerProjectDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    buildId?: boolean
    projectId?: boolean
    isLatestBuild?: boolean
    publishStatus?: boolean
    updatedAt?: boolean
    projectWithDomain?: boolean | ProjectWithDomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["latestBuildPerProjectDomain"]>

  export type LatestBuildPerProjectDomainSelectScalar = {
    domainId?: boolean
    buildId?: boolean
    projectId?: boolean
    isLatestBuild?: boolean
    publishStatus?: boolean
    updatedAt?: boolean
  }

  export type LatestBuildPerProjectDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectWithDomain?: boolean | ProjectWithDomainDefaultArgs<ExtArgs>
  }


  export type $LatestBuildPerProjectDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LatestBuildPerProjectDomain"
    objects: {
      projectWithDomain: Prisma.$ProjectWithDomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      domainId: string
      buildId: string
      projectId: string
      isLatestBuild: boolean
      publishStatus: $Enums.PublishStatus
      updatedAt: Date
    }, ExtArgs["result"]["latestBuildPerProjectDomain"]>
    composites: {}
  }


  type LatestBuildPerProjectDomainGetPayload<S extends boolean | null | undefined | LatestBuildPerProjectDomainDefaultArgs> = $Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload, S>

  type LatestBuildPerProjectDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LatestBuildPerProjectDomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LatestBuildPerProjectDomainCountAggregateInputType | true
    }

  export interface LatestBuildPerProjectDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LatestBuildPerProjectDomain'], meta: { name: 'LatestBuildPerProjectDomain' } }
    /**
     * Find zero or one LatestBuildPerProjectDomain that matches the filter.
     * @param {LatestBuildPerProjectDomainFindUniqueArgs} args - Arguments to find a LatestBuildPerProjectDomain
     * @example
     * // Get one LatestBuildPerProjectDomain
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LatestBuildPerProjectDomainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDomainFindUniqueArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LatestBuildPerProjectDomain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LatestBuildPerProjectDomainFindUniqueOrThrowArgs} args - Arguments to find a LatestBuildPerProjectDomain
     * @example
     * // Get one LatestBuildPerProjectDomain
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LatestBuildPerProjectDomainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDomainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LatestBuildPerProjectDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainFindFirstArgs} args - Arguments to find a LatestBuildPerProjectDomain
     * @example
     * // Get one LatestBuildPerProjectDomain
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LatestBuildPerProjectDomainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDomainFindFirstArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LatestBuildPerProjectDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainFindFirstOrThrowArgs} args - Arguments to find a LatestBuildPerProjectDomain
     * @example
     * // Get one LatestBuildPerProjectDomain
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LatestBuildPerProjectDomainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDomainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LatestBuildPerProjectDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LatestBuildPerProjectDomains
     * const latestBuildPerProjectDomains = await prisma.latestBuildPerProjectDomain.findMany()
     * 
     * // Get first 10 LatestBuildPerProjectDomains
     * const latestBuildPerProjectDomains = await prisma.latestBuildPerProjectDomain.findMany({ take: 10 })
     * 
     * // Only select the `domainId`
     * const latestBuildPerProjectDomainWithDomainIdOnly = await prisma.latestBuildPerProjectDomain.findMany({ select: { domainId: true } })
     * 
    **/
    findMany<T extends LatestBuildPerProjectDomainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDomainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LatestBuildPerProjectDomain.
     * @param {LatestBuildPerProjectDomainCreateArgs} args - Arguments to create a LatestBuildPerProjectDomain.
     * @example
     * // Create one LatestBuildPerProjectDomain
     * const LatestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.create({
     *   data: {
     *     // ... data to create a LatestBuildPerProjectDomain
     *   }
     * })
     * 
    **/
    create<T extends LatestBuildPerProjectDomainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDomainCreateArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LatestBuildPerProjectDomains.
     *     @param {LatestBuildPerProjectDomainCreateManyArgs} args - Arguments to create many LatestBuildPerProjectDomains.
     *     @example
     *     // Create many LatestBuildPerProjectDomains
     *     const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LatestBuildPerProjectDomainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDomainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LatestBuildPerProjectDomain.
     * @param {LatestBuildPerProjectDomainDeleteArgs} args - Arguments to delete one LatestBuildPerProjectDomain.
     * @example
     * // Delete one LatestBuildPerProjectDomain
     * const LatestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.delete({
     *   where: {
     *     // ... filter to delete one LatestBuildPerProjectDomain
     *   }
     * })
     * 
    **/
    delete<T extends LatestBuildPerProjectDomainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDomainDeleteArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LatestBuildPerProjectDomain.
     * @param {LatestBuildPerProjectDomainUpdateArgs} args - Arguments to update one LatestBuildPerProjectDomain.
     * @example
     * // Update one LatestBuildPerProjectDomain
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LatestBuildPerProjectDomainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDomainUpdateArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LatestBuildPerProjectDomains.
     * @param {LatestBuildPerProjectDomainDeleteManyArgs} args - Arguments to filter LatestBuildPerProjectDomains to delete.
     * @example
     * // Delete a few LatestBuildPerProjectDomains
     * const { count } = await prisma.latestBuildPerProjectDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LatestBuildPerProjectDomainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDomainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LatestBuildPerProjectDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LatestBuildPerProjectDomains
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LatestBuildPerProjectDomainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDomainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LatestBuildPerProjectDomain.
     * @param {LatestBuildPerProjectDomainUpsertArgs} args - Arguments to update or create a LatestBuildPerProjectDomain.
     * @example
     * // Update or create a LatestBuildPerProjectDomain
     * const latestBuildPerProjectDomain = await prisma.latestBuildPerProjectDomain.upsert({
     *   create: {
     *     // ... data to create a LatestBuildPerProjectDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LatestBuildPerProjectDomain we want to update
     *   }
     * })
    **/
    upsert<T extends LatestBuildPerProjectDomainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDomainUpsertArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectDomainClient<$Result.GetResult<Prisma.$LatestBuildPerProjectDomainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LatestBuildPerProjectDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainCountArgs} args - Arguments to filter LatestBuildPerProjectDomains to count.
     * @example
     * // Count the number of LatestBuildPerProjectDomains
     * const count = await prisma.latestBuildPerProjectDomain.count({
     *   where: {
     *     // ... the filter for the LatestBuildPerProjectDomains we want to count
     *   }
     * })
    **/
    count<T extends LatestBuildPerProjectDomainCountArgs>(
      args?: Subset<T, LatestBuildPerProjectDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LatestBuildPerProjectDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LatestBuildPerProjectDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LatestBuildPerProjectDomainAggregateArgs>(args: Subset<T, LatestBuildPerProjectDomainAggregateArgs>): Prisma.PrismaPromise<GetLatestBuildPerProjectDomainAggregateType<T>>

    /**
     * Group by LatestBuildPerProjectDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectDomainGroupByArgs} args - Group by arguments.
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
      T extends LatestBuildPerProjectDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LatestBuildPerProjectDomainGroupByArgs['orderBy'] }
        : { orderBy?: LatestBuildPerProjectDomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LatestBuildPerProjectDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLatestBuildPerProjectDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LatestBuildPerProjectDomain model
   */
  readonly fields: LatestBuildPerProjectDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LatestBuildPerProjectDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LatestBuildPerProjectDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    projectWithDomain<T extends ProjectWithDomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectWithDomainDefaultArgs<ExtArgs>>): Prisma__ProjectWithDomainClient<$Result.GetResult<Prisma.$ProjectWithDomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the LatestBuildPerProjectDomain model
   */ 
  interface LatestBuildPerProjectDomainFieldRefs {
    readonly domainId: FieldRef<"LatestBuildPerProjectDomain", 'String'>
    readonly buildId: FieldRef<"LatestBuildPerProjectDomain", 'String'>
    readonly projectId: FieldRef<"LatestBuildPerProjectDomain", 'String'>
    readonly isLatestBuild: FieldRef<"LatestBuildPerProjectDomain", 'Boolean'>
    readonly publishStatus: FieldRef<"LatestBuildPerProjectDomain", 'PublishStatus'>
    readonly updatedAt: FieldRef<"LatestBuildPerProjectDomain", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LatestBuildPerProjectDomain findUnique
   */
  export type LatestBuildPerProjectDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProjectDomain to fetch.
     */
    where: LatestBuildPerProjectDomainWhereUniqueInput
  }


  /**
   * LatestBuildPerProjectDomain findUniqueOrThrow
   */
  export type LatestBuildPerProjectDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProjectDomain to fetch.
     */
    where: LatestBuildPerProjectDomainWhereUniqueInput
  }


  /**
   * LatestBuildPerProjectDomain findFirst
   */
  export type LatestBuildPerProjectDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProjectDomain to fetch.
     */
    where?: LatestBuildPerProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjectDomains to fetch.
     */
    orderBy?: LatestBuildPerProjectDomainOrderByWithRelationInput | LatestBuildPerProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LatestBuildPerProjectDomains.
     */
    cursor?: LatestBuildPerProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjectDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LatestBuildPerProjectDomains.
     */
    distinct?: LatestBuildPerProjectDomainScalarFieldEnum | LatestBuildPerProjectDomainScalarFieldEnum[]
  }


  /**
   * LatestBuildPerProjectDomain findFirstOrThrow
   */
  export type LatestBuildPerProjectDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProjectDomain to fetch.
     */
    where?: LatestBuildPerProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjectDomains to fetch.
     */
    orderBy?: LatestBuildPerProjectDomainOrderByWithRelationInput | LatestBuildPerProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LatestBuildPerProjectDomains.
     */
    cursor?: LatestBuildPerProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjectDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LatestBuildPerProjectDomains.
     */
    distinct?: LatestBuildPerProjectDomainScalarFieldEnum | LatestBuildPerProjectDomainScalarFieldEnum[]
  }


  /**
   * LatestBuildPerProjectDomain findMany
   */
  export type LatestBuildPerProjectDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProjectDomains to fetch.
     */
    where?: LatestBuildPerProjectDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjectDomains to fetch.
     */
    orderBy?: LatestBuildPerProjectDomainOrderByWithRelationInput | LatestBuildPerProjectDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LatestBuildPerProjectDomains.
     */
    cursor?: LatestBuildPerProjectDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjectDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjectDomains.
     */
    skip?: number
    distinct?: LatestBuildPerProjectDomainScalarFieldEnum | LatestBuildPerProjectDomainScalarFieldEnum[]
  }


  /**
   * LatestBuildPerProjectDomain create
   */
  export type LatestBuildPerProjectDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a LatestBuildPerProjectDomain.
     */
    data: XOR<LatestBuildPerProjectDomainCreateInput, LatestBuildPerProjectDomainUncheckedCreateInput>
  }


  /**
   * LatestBuildPerProjectDomain createMany
   */
  export type LatestBuildPerProjectDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LatestBuildPerProjectDomains.
     */
    data: LatestBuildPerProjectDomainCreateManyInput | LatestBuildPerProjectDomainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LatestBuildPerProjectDomain update
   */
  export type LatestBuildPerProjectDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a LatestBuildPerProjectDomain.
     */
    data: XOR<LatestBuildPerProjectDomainUpdateInput, LatestBuildPerProjectDomainUncheckedUpdateInput>
    /**
     * Choose, which LatestBuildPerProjectDomain to update.
     */
    where: LatestBuildPerProjectDomainWhereUniqueInput
  }


  /**
   * LatestBuildPerProjectDomain updateMany
   */
  export type LatestBuildPerProjectDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LatestBuildPerProjectDomains.
     */
    data: XOR<LatestBuildPerProjectDomainUpdateManyMutationInput, LatestBuildPerProjectDomainUncheckedUpdateManyInput>
    /**
     * Filter which LatestBuildPerProjectDomains to update
     */
    where?: LatestBuildPerProjectDomainWhereInput
  }


  /**
   * LatestBuildPerProjectDomain upsert
   */
  export type LatestBuildPerProjectDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the LatestBuildPerProjectDomain to update in case it exists.
     */
    where: LatestBuildPerProjectDomainWhereUniqueInput
    /**
     * In case the LatestBuildPerProjectDomain found by the `where` argument doesn't exist, create a new LatestBuildPerProjectDomain with this data.
     */
    create: XOR<LatestBuildPerProjectDomainCreateInput, LatestBuildPerProjectDomainUncheckedCreateInput>
    /**
     * In case the LatestBuildPerProjectDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LatestBuildPerProjectDomainUpdateInput, LatestBuildPerProjectDomainUncheckedUpdateInput>
  }


  /**
   * LatestBuildPerProjectDomain delete
   */
  export type LatestBuildPerProjectDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
    /**
     * Filter which LatestBuildPerProjectDomain to delete.
     */
    where: LatestBuildPerProjectDomainWhereUniqueInput
  }


  /**
   * LatestBuildPerProjectDomain deleteMany
   */
  export type LatestBuildPerProjectDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LatestBuildPerProjectDomains to delete
     */
    where?: LatestBuildPerProjectDomainWhereInput
  }


  /**
   * LatestBuildPerProjectDomain without action
   */
  export type LatestBuildPerProjectDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProjectDomain
     */
    select?: LatestBuildPerProjectDomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectDomainInclude<ExtArgs> | null
  }



  /**
   * Model LatestBuildPerProject
   */

  export type AggregateLatestBuildPerProject = {
    _count: LatestBuildPerProjectCountAggregateOutputType | null
    _min: LatestBuildPerProjectMinAggregateOutputType | null
    _max: LatestBuildPerProjectMaxAggregateOutputType | null
  }

  export type LatestBuildPerProjectMinAggregateOutputType = {
    buildId: string | null
    projectId: string | null
    domain: string | null
    isLatestBuild: boolean | null
    publishStatus: $Enums.PublishStatus | null
    updatedAt: Date | null
  }

  export type LatestBuildPerProjectMaxAggregateOutputType = {
    buildId: string | null
    projectId: string | null
    domain: string | null
    isLatestBuild: boolean | null
    publishStatus: $Enums.PublishStatus | null
    updatedAt: Date | null
  }

  export type LatestBuildPerProjectCountAggregateOutputType = {
    buildId: number
    projectId: number
    domain: number
    isLatestBuild: number
    publishStatus: number
    updatedAt: number
    _all: number
  }


  export type LatestBuildPerProjectMinAggregateInputType = {
    buildId?: true
    projectId?: true
    domain?: true
    isLatestBuild?: true
    publishStatus?: true
    updatedAt?: true
  }

  export type LatestBuildPerProjectMaxAggregateInputType = {
    buildId?: true
    projectId?: true
    domain?: true
    isLatestBuild?: true
    publishStatus?: true
    updatedAt?: true
  }

  export type LatestBuildPerProjectCountAggregateInputType = {
    buildId?: true
    projectId?: true
    domain?: true
    isLatestBuild?: true
    publishStatus?: true
    updatedAt?: true
    _all?: true
  }

  export type LatestBuildPerProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LatestBuildPerProject to aggregate.
     */
    where?: LatestBuildPerProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjects to fetch.
     */
    orderBy?: LatestBuildPerProjectOrderByWithRelationInput | LatestBuildPerProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LatestBuildPerProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LatestBuildPerProjects
    **/
    _count?: true | LatestBuildPerProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LatestBuildPerProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LatestBuildPerProjectMaxAggregateInputType
  }

  export type GetLatestBuildPerProjectAggregateType<T extends LatestBuildPerProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateLatestBuildPerProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLatestBuildPerProject[P]>
      : GetScalarType<T[P], AggregateLatestBuildPerProject[P]>
  }




  export type LatestBuildPerProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LatestBuildPerProjectWhereInput
    orderBy?: LatestBuildPerProjectOrderByWithAggregationInput | LatestBuildPerProjectOrderByWithAggregationInput[]
    by: LatestBuildPerProjectScalarFieldEnum[] | LatestBuildPerProjectScalarFieldEnum
    having?: LatestBuildPerProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LatestBuildPerProjectCountAggregateInputType | true
    _min?: LatestBuildPerProjectMinAggregateInputType
    _max?: LatestBuildPerProjectMaxAggregateInputType
  }

  export type LatestBuildPerProjectGroupByOutputType = {
    buildId: string
    projectId: string
    domain: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date
    _count: LatestBuildPerProjectCountAggregateOutputType | null
    _min: LatestBuildPerProjectMinAggregateOutputType | null
    _max: LatestBuildPerProjectMaxAggregateOutputType | null
  }

  type GetLatestBuildPerProjectGroupByPayload<T extends LatestBuildPerProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LatestBuildPerProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LatestBuildPerProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LatestBuildPerProjectGroupByOutputType[P]>
            : GetScalarType<T[P], LatestBuildPerProjectGroupByOutputType[P]>
        }
      >
    >


  export type LatestBuildPerProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    buildId?: boolean
    projectId?: boolean
    domain?: boolean
    isLatestBuild?: boolean
    publishStatus?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["latestBuildPerProject"]>

  export type LatestBuildPerProjectSelectScalar = {
    buildId?: boolean
    projectId?: boolean
    domain?: boolean
    isLatestBuild?: boolean
    publishStatus?: boolean
    updatedAt?: boolean
  }

  export type LatestBuildPerProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }


  export type $LatestBuildPerProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LatestBuildPerProject"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      buildId: string
      projectId: string
      domain: string
      isLatestBuild: boolean
      publishStatus: $Enums.PublishStatus
      updatedAt: Date
    }, ExtArgs["result"]["latestBuildPerProject"]>
    composites: {}
  }


  type LatestBuildPerProjectGetPayload<S extends boolean | null | undefined | LatestBuildPerProjectDefaultArgs> = $Result.GetResult<Prisma.$LatestBuildPerProjectPayload, S>

  type LatestBuildPerProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LatestBuildPerProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LatestBuildPerProjectCountAggregateInputType | true
    }

  export interface LatestBuildPerProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LatestBuildPerProject'], meta: { name: 'LatestBuildPerProject' } }
    /**
     * Find zero or one LatestBuildPerProject that matches the filter.
     * @param {LatestBuildPerProjectFindUniqueArgs} args - Arguments to find a LatestBuildPerProject
     * @example
     * // Get one LatestBuildPerProject
     * const latestBuildPerProject = await prisma.latestBuildPerProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LatestBuildPerProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LatestBuildPerProject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LatestBuildPerProjectFindUniqueOrThrowArgs} args - Arguments to find a LatestBuildPerProject
     * @example
     * // Get one LatestBuildPerProject
     * const latestBuildPerProject = await prisma.latestBuildPerProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LatestBuildPerProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LatestBuildPerProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectFindFirstArgs} args - Arguments to find a LatestBuildPerProject
     * @example
     * // Get one LatestBuildPerProject
     * const latestBuildPerProject = await prisma.latestBuildPerProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LatestBuildPerProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectFindFirstArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LatestBuildPerProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectFindFirstOrThrowArgs} args - Arguments to find a LatestBuildPerProject
     * @example
     * // Get one LatestBuildPerProject
     * const latestBuildPerProject = await prisma.latestBuildPerProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LatestBuildPerProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LatestBuildPerProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LatestBuildPerProjects
     * const latestBuildPerProjects = await prisma.latestBuildPerProject.findMany()
     * 
     * // Get first 10 LatestBuildPerProjects
     * const latestBuildPerProjects = await prisma.latestBuildPerProject.findMany({ take: 10 })
     * 
     * // Only select the `buildId`
     * const latestBuildPerProjectWithBuildIdOnly = await prisma.latestBuildPerProject.findMany({ select: { buildId: true } })
     * 
    **/
    findMany<T extends LatestBuildPerProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LatestBuildPerProject.
     * @param {LatestBuildPerProjectCreateArgs} args - Arguments to create a LatestBuildPerProject.
     * @example
     * // Create one LatestBuildPerProject
     * const LatestBuildPerProject = await prisma.latestBuildPerProject.create({
     *   data: {
     *     // ... data to create a LatestBuildPerProject
     *   }
     * })
     * 
    **/
    create<T extends LatestBuildPerProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectCreateArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LatestBuildPerProjects.
     *     @param {LatestBuildPerProjectCreateManyArgs} args - Arguments to create many LatestBuildPerProjects.
     *     @example
     *     // Create many LatestBuildPerProjects
     *     const latestBuildPerProject = await prisma.latestBuildPerProject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LatestBuildPerProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LatestBuildPerProject.
     * @param {LatestBuildPerProjectDeleteArgs} args - Arguments to delete one LatestBuildPerProject.
     * @example
     * // Delete one LatestBuildPerProject
     * const LatestBuildPerProject = await prisma.latestBuildPerProject.delete({
     *   where: {
     *     // ... filter to delete one LatestBuildPerProject
     *   }
     * })
     * 
    **/
    delete<T extends LatestBuildPerProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectDeleteArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LatestBuildPerProject.
     * @param {LatestBuildPerProjectUpdateArgs} args - Arguments to update one LatestBuildPerProject.
     * @example
     * // Update one LatestBuildPerProject
     * const latestBuildPerProject = await prisma.latestBuildPerProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LatestBuildPerProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectUpdateArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LatestBuildPerProjects.
     * @param {LatestBuildPerProjectDeleteManyArgs} args - Arguments to filter LatestBuildPerProjects to delete.
     * @example
     * // Delete a few LatestBuildPerProjects
     * const { count } = await prisma.latestBuildPerProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LatestBuildPerProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestBuildPerProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LatestBuildPerProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LatestBuildPerProjects
     * const latestBuildPerProject = await prisma.latestBuildPerProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LatestBuildPerProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LatestBuildPerProject.
     * @param {LatestBuildPerProjectUpsertArgs} args - Arguments to update or create a LatestBuildPerProject.
     * @example
     * // Update or create a LatestBuildPerProject
     * const latestBuildPerProject = await prisma.latestBuildPerProject.upsert({
     *   create: {
     *     // ... data to create a LatestBuildPerProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LatestBuildPerProject we want to update
     *   }
     * })
    **/
    upsert<T extends LatestBuildPerProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LatestBuildPerProjectUpsertArgs<ExtArgs>>
    ): Prisma__LatestBuildPerProjectClient<$Result.GetResult<Prisma.$LatestBuildPerProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LatestBuildPerProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectCountArgs} args - Arguments to filter LatestBuildPerProjects to count.
     * @example
     * // Count the number of LatestBuildPerProjects
     * const count = await prisma.latestBuildPerProject.count({
     *   where: {
     *     // ... the filter for the LatestBuildPerProjects we want to count
     *   }
     * })
    **/
    count<T extends LatestBuildPerProjectCountArgs>(
      args?: Subset<T, LatestBuildPerProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LatestBuildPerProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LatestBuildPerProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LatestBuildPerProjectAggregateArgs>(args: Subset<T, LatestBuildPerProjectAggregateArgs>): Prisma.PrismaPromise<GetLatestBuildPerProjectAggregateType<T>>

    /**
     * Group by LatestBuildPerProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestBuildPerProjectGroupByArgs} args - Group by arguments.
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
      T extends LatestBuildPerProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LatestBuildPerProjectGroupByArgs['orderBy'] }
        : { orderBy?: LatestBuildPerProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LatestBuildPerProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLatestBuildPerProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LatestBuildPerProject model
   */
  readonly fields: LatestBuildPerProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LatestBuildPerProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LatestBuildPerProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LatestBuildPerProject model
   */ 
  interface LatestBuildPerProjectFieldRefs {
    readonly buildId: FieldRef<"LatestBuildPerProject", 'String'>
    readonly projectId: FieldRef<"LatestBuildPerProject", 'String'>
    readonly domain: FieldRef<"LatestBuildPerProject", 'String'>
    readonly isLatestBuild: FieldRef<"LatestBuildPerProject", 'Boolean'>
    readonly publishStatus: FieldRef<"LatestBuildPerProject", 'PublishStatus'>
    readonly updatedAt: FieldRef<"LatestBuildPerProject", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LatestBuildPerProject findUnique
   */
  export type LatestBuildPerProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProject to fetch.
     */
    where: LatestBuildPerProjectWhereUniqueInput
  }


  /**
   * LatestBuildPerProject findUniqueOrThrow
   */
  export type LatestBuildPerProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProject to fetch.
     */
    where: LatestBuildPerProjectWhereUniqueInput
  }


  /**
   * LatestBuildPerProject findFirst
   */
  export type LatestBuildPerProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProject to fetch.
     */
    where?: LatestBuildPerProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjects to fetch.
     */
    orderBy?: LatestBuildPerProjectOrderByWithRelationInput | LatestBuildPerProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LatestBuildPerProjects.
     */
    cursor?: LatestBuildPerProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LatestBuildPerProjects.
     */
    distinct?: LatestBuildPerProjectScalarFieldEnum | LatestBuildPerProjectScalarFieldEnum[]
  }


  /**
   * LatestBuildPerProject findFirstOrThrow
   */
  export type LatestBuildPerProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProject to fetch.
     */
    where?: LatestBuildPerProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjects to fetch.
     */
    orderBy?: LatestBuildPerProjectOrderByWithRelationInput | LatestBuildPerProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LatestBuildPerProjects.
     */
    cursor?: LatestBuildPerProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LatestBuildPerProjects.
     */
    distinct?: LatestBuildPerProjectScalarFieldEnum | LatestBuildPerProjectScalarFieldEnum[]
  }


  /**
   * LatestBuildPerProject findMany
   */
  export type LatestBuildPerProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * Filter, which LatestBuildPerProjects to fetch.
     */
    where?: LatestBuildPerProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LatestBuildPerProjects to fetch.
     */
    orderBy?: LatestBuildPerProjectOrderByWithRelationInput | LatestBuildPerProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LatestBuildPerProjects.
     */
    cursor?: LatestBuildPerProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LatestBuildPerProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LatestBuildPerProjects.
     */
    skip?: number
    distinct?: LatestBuildPerProjectScalarFieldEnum | LatestBuildPerProjectScalarFieldEnum[]
  }


  /**
   * LatestBuildPerProject create
   */
  export type LatestBuildPerProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a LatestBuildPerProject.
     */
    data: XOR<LatestBuildPerProjectCreateInput, LatestBuildPerProjectUncheckedCreateInput>
  }


  /**
   * LatestBuildPerProject createMany
   */
  export type LatestBuildPerProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LatestBuildPerProjects.
     */
    data: LatestBuildPerProjectCreateManyInput | LatestBuildPerProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LatestBuildPerProject update
   */
  export type LatestBuildPerProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a LatestBuildPerProject.
     */
    data: XOR<LatestBuildPerProjectUpdateInput, LatestBuildPerProjectUncheckedUpdateInput>
    /**
     * Choose, which LatestBuildPerProject to update.
     */
    where: LatestBuildPerProjectWhereUniqueInput
  }


  /**
   * LatestBuildPerProject updateMany
   */
  export type LatestBuildPerProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LatestBuildPerProjects.
     */
    data: XOR<LatestBuildPerProjectUpdateManyMutationInput, LatestBuildPerProjectUncheckedUpdateManyInput>
    /**
     * Filter which LatestBuildPerProjects to update
     */
    where?: LatestBuildPerProjectWhereInput
  }


  /**
   * LatestBuildPerProject upsert
   */
  export type LatestBuildPerProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the LatestBuildPerProject to update in case it exists.
     */
    where: LatestBuildPerProjectWhereUniqueInput
    /**
     * In case the LatestBuildPerProject found by the `where` argument doesn't exist, create a new LatestBuildPerProject with this data.
     */
    create: XOR<LatestBuildPerProjectCreateInput, LatestBuildPerProjectUncheckedCreateInput>
    /**
     * In case the LatestBuildPerProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LatestBuildPerProjectUpdateInput, LatestBuildPerProjectUncheckedUpdateInput>
  }


  /**
   * LatestBuildPerProject delete
   */
  export type LatestBuildPerProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
    /**
     * Filter which LatestBuildPerProject to delete.
     */
    where: LatestBuildPerProjectWhereUniqueInput
  }


  /**
   * LatestBuildPerProject deleteMany
   */
  export type LatestBuildPerProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LatestBuildPerProjects to delete
     */
    where?: LatestBuildPerProjectWhereInput
  }


  /**
   * LatestBuildPerProject without action
   */
  export type LatestBuildPerProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LatestBuildPerProject
     */
    select?: LatestBuildPerProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LatestBuildPerProjectInclude<ExtArgs> | null
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


  export const FileScalarFieldEnum: {
    name: 'name',
    format: 'format',
    size: 'size',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    meta: 'meta',
    status: 'status',
    isDeleted: 'isDeleted',
    uploaderProjectId: 'uploaderProjectId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name'
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
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pages: 'pages',
    projectId: 'projectId',
    breakpoints: 'breakpoints',
    styles: 'styles',
    styleSources: 'styleSources',
    styleSourceSelections: 'styleSourceSelections',
    props: 'props',
    instances: 'instances',
    deployment: 'deployment',
    publishStatus: 'publishStatus'
  };

  export type BuildScalarFieldEnum = (typeof BuildScalarFieldEnum)[keyof typeof BuildScalarFieldEnum]


  export const AuthorizationTokenScalarFieldEnum: {
    token: 'token',
    projectId: 'projectId',
    name: 'name',
    relation: 'relation',
    createdAt: 'createdAt'
  };

  export type AuthorizationTokenScalarFieldEnum = (typeof AuthorizationTokenScalarFieldEnum)[keyof typeof AuthorizationTokenScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    txtRecord: 'txtRecord',
    status: 'status',
    error: 'error'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const ProjectDomainScalarFieldEnum: {
    projectId: 'projectId',
    domainId: 'domainId',
    createdAt: 'createdAt',
    txtRecord: 'txtRecord',
    cname: 'cname'
  };

  export type ProjectDomainScalarFieldEnum = (typeof ProjectDomainScalarFieldEnum)[keyof typeof ProjectDomainScalarFieldEnum]


  export const ProjectWithDomainScalarFieldEnum: {
    projectId: 'projectId',
    domainId: 'domainId',
    txtRecord: 'txtRecord',
    createdAt: 'createdAt',
    cname: 'cname',
    verified: 'verified',
    userId: 'userId'
  };

  export type ProjectWithDomainScalarFieldEnum = (typeof ProjectWithDomainScalarFieldEnum)[keyof typeof ProjectWithDomainScalarFieldEnum]


  export const LatestBuildPerProjectDomainScalarFieldEnum: {
    domainId: 'domainId',
    buildId: 'buildId',
    projectId: 'projectId',
    isLatestBuild: 'isLatestBuild',
    publishStatus: 'publishStatus',
    updatedAt: 'updatedAt'
  };

  export type LatestBuildPerProjectDomainScalarFieldEnum = (typeof LatestBuildPerProjectDomainScalarFieldEnum)[keyof typeof LatestBuildPerProjectDomainScalarFieldEnum]


  export const LatestBuildPerProjectScalarFieldEnum: {
    buildId: 'buildId',
    projectId: 'projectId',
    domain: 'domain',
    isLatestBuild: 'isLatestBuild',
    publishStatus: 'publishStatus',
    updatedAt: 'updatedAt'
  };

  export type LatestBuildPerProjectScalarFieldEnum = (typeof LatestBuildPerProjectScalarFieldEnum)[keyof typeof LatestBuildPerProjectScalarFieldEnum]


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
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'AuthorizationRelation'
   */
  export type EnumAuthorizationRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorizationRelation'>
    


  /**
   * Reference to a field of type 'AuthorizationRelation[]'
   */
  export type ListEnumAuthorizationRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorizationRelation[]'>
    


  /**
   * Reference to a field of type 'DomainStatus'
   */
  export type EnumDomainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainStatus'>
    


  /**
   * Reference to a field of type 'DomainStatus[]'
   */
  export type ListEnumDomainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainStatus[]'>
    


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

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    name?: StringFilter<"File"> | string
    format?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    description?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    meta?: StringFilter<"File"> | string
    status?: EnumUploadStatusFilter<"File"> | $Enums.UploadStatus
    isDeleted?: BoolFilter<"File"> | boolean
    uploaderProjectId?: StringNullableFilter<"File"> | string | null
    uploaderProject?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    assets?: AssetListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    name?: SortOrder
    format?: SortOrder
    size?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    uploaderProjectId?: SortOrderInput | SortOrder
    uploaderProject?: ProjectOrderByWithRelationInput
    assets?: AssetOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    format?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    description?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    meta?: StringFilter<"File"> | string
    status?: EnumUploadStatusFilter<"File"> | $Enums.UploadStatus
    isDeleted?: BoolFilter<"File"> | boolean
    uploaderProjectId?: StringNullableFilter<"File"> | string | null
    uploaderProject?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    assets?: AssetListRelationFilter
  }, "name">

  export type FileOrderByWithAggregationInput = {
    name?: SortOrder
    format?: SortOrder
    size?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    uploaderProjectId?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"File"> | string
    format?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    description?: StringNullableWithAggregatesFilter<"File"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    meta?: StringWithAggregatesFilter<"File"> | string
    status?: EnumUploadStatusWithAggregatesFilter<"File"> | $Enums.UploadStatus
    isDeleted?: BoolWithAggregatesFilter<"File"> | boolean
    uploaderProjectId?: StringNullableWithAggregatesFilter<"File"> | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    file?: XOR<FileRelationFilter, FileWhereInput>
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    file?: FileOrderByWithRelationInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id_projectId?: AssetIdProjectIdCompoundUniqueInput
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    file?: XOR<FileRelationFilter, FileWhereInput>
  }, "id_projectId">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    projectId?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
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
    files?: FileListRelationFilter
    projectDomain?: ProjectDomainListRelationFilter
    latestBuild?: XOR<LatestBuildPerProjectNullableRelationFilter, LatestBuildPerProjectWhereInput> | null
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
    files?: FileOrderByRelationAggregateInput
    projectDomain?: ProjectDomainOrderByRelationAggregateInput
    latestBuild?: LatestBuildPerProjectOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    id_isDeleted?: ProjectIdIsDeletedCompoundUniqueInput
    domain_isDeleted?: ProjectDomainIsDeletedCompoundUniqueInput
    id_domain?: ProjectIdDomainCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    build?: BuildListRelationFilter
    files?: FileListRelationFilter
    projectDomain?: ProjectDomainListRelationFilter
    latestBuild?: XOR<LatestBuildPerProjectNullableRelationFilter, LatestBuildPerProjectWhereInput> | null
  }, "id" | "domain" | "id_isDeleted" | "domain_isDeleted" | "id_domain">

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
    version?: IntFilter<"Build"> | number
    createdAt?: DateTimeFilter<"Build"> | Date | string
    updatedAt?: DateTimeFilter<"Build"> | Date | string
    pages?: StringFilter<"Build"> | string
    projectId?: StringFilter<"Build"> | string
    breakpoints?: StringFilter<"Build"> | string
    styles?: StringFilter<"Build"> | string
    styleSources?: StringFilter<"Build"> | string
    styleSourceSelections?: StringFilter<"Build"> | string
    props?: StringFilter<"Build"> | string
    instances?: StringFilter<"Build"> | string
    deployment?: StringNullableFilter<"Build"> | string | null
    publishStatus?: EnumPublishStatusFilter<"Build"> | $Enums.PublishStatus
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type BuildOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    deployment?: SortOrderInput | SortOrder
    publishStatus?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type BuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_projectId?: BuildIdProjectIdCompoundUniqueInput
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    version?: IntFilter<"Build"> | number
    createdAt?: DateTimeFilter<"Build"> | Date | string
    updatedAt?: DateTimeFilter<"Build"> | Date | string
    pages?: StringFilter<"Build"> | string
    projectId?: StringFilter<"Build"> | string
    breakpoints?: StringFilter<"Build"> | string
    styles?: StringFilter<"Build"> | string
    styleSources?: StringFilter<"Build"> | string
    styleSourceSelections?: StringFilter<"Build"> | string
    props?: StringFilter<"Build"> | string
    instances?: StringFilter<"Build"> | string
    deployment?: StringNullableFilter<"Build"> | string | null
    publishStatus?: EnumPublishStatusFilter<"Build"> | $Enums.PublishStatus
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id_projectId" | "id">

  export type BuildOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    deployment?: SortOrderInput | SortOrder
    publishStatus?: SortOrder
    _count?: BuildCountOrderByAggregateInput
    _avg?: BuildAvgOrderByAggregateInput
    _max?: BuildMaxOrderByAggregateInput
    _min?: BuildMinOrderByAggregateInput
    _sum?: BuildSumOrderByAggregateInput
  }

  export type BuildScalarWhereWithAggregatesInput = {
    AND?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    OR?: BuildScalarWhereWithAggregatesInput[]
    NOT?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Build"> | string
    version?: IntWithAggregatesFilter<"Build"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
    pages?: StringWithAggregatesFilter<"Build"> | string
    projectId?: StringWithAggregatesFilter<"Build"> | string
    breakpoints?: StringWithAggregatesFilter<"Build"> | string
    styles?: StringWithAggregatesFilter<"Build"> | string
    styleSources?: StringWithAggregatesFilter<"Build"> | string
    styleSourceSelections?: StringWithAggregatesFilter<"Build"> | string
    props?: StringWithAggregatesFilter<"Build"> | string
    instances?: StringWithAggregatesFilter<"Build"> | string
    deployment?: StringNullableWithAggregatesFilter<"Build"> | string | null
    publishStatus?: EnumPublishStatusWithAggregatesFilter<"Build"> | $Enums.PublishStatus
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

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: StringFilter<"Domain"> | string
    domain?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    txtRecord?: StringNullableFilter<"Domain"> | string | null
    status?: EnumDomainStatusFilter<"Domain"> | $Enums.DomainStatus
    error?: StringNullableFilter<"Domain"> | string | null
    ProjectDomain?: ProjectDomainListRelationFilter
    projectWithDomain?: ProjectWithDomainListRelationFilter
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    txtRecord?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    ProjectDomain?: ProjectDomainOrderByRelationAggregateInput
    projectWithDomain?: ProjectWithDomainOrderByRelationAggregateInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    txtRecord?: StringNullableFilter<"Domain"> | string | null
    status?: EnumDomainStatusFilter<"Domain"> | $Enums.DomainStatus
    error?: StringNullableFilter<"Domain"> | string | null
    ProjectDomain?: ProjectDomainListRelationFilter
    projectWithDomain?: ProjectWithDomainListRelationFilter
  }, "id" | "domain">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    txtRecord?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: DomainCountOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Domain"> | string
    domain?: StringWithAggregatesFilter<"Domain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
    txtRecord?: StringNullableWithAggregatesFilter<"Domain"> | string | null
    status?: EnumDomainStatusWithAggregatesFilter<"Domain"> | $Enums.DomainStatus
    error?: StringNullableWithAggregatesFilter<"Domain"> | string | null
  }

  export type ProjectDomainWhereInput = {
    AND?: ProjectDomainWhereInput | ProjectDomainWhereInput[]
    OR?: ProjectDomainWhereInput[]
    NOT?: ProjectDomainWhereInput | ProjectDomainWhereInput[]
    projectId?: StringFilter<"ProjectDomain"> | string
    domainId?: StringFilter<"ProjectDomain"> | string
    createdAt?: DateTimeFilter<"ProjectDomain"> | Date | string
    txtRecord?: StringFilter<"ProjectDomain"> | string
    cname?: StringFilter<"ProjectDomain"> | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
  }

  export type ProjectDomainOrderByWithRelationInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    createdAt?: SortOrder
    txtRecord?: SortOrder
    cname?: SortOrder
    project?: ProjectOrderByWithRelationInput
    domain?: DomainOrderByWithRelationInput
  }

  export type ProjectDomainWhereUniqueInput = Prisma.AtLeast<{
    txtRecord?: string
    projectId_domainId?: ProjectDomainProjectIdDomainIdCompoundUniqueInput
    AND?: ProjectDomainWhereInput | ProjectDomainWhereInput[]
    OR?: ProjectDomainWhereInput[]
    NOT?: ProjectDomainWhereInput | ProjectDomainWhereInput[]
    projectId?: StringFilter<"ProjectDomain"> | string
    domainId?: StringFilter<"ProjectDomain"> | string
    createdAt?: DateTimeFilter<"ProjectDomain"> | Date | string
    cname?: StringFilter<"ProjectDomain"> | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
  }, "projectId_domainId" | "txtRecord">

  export type ProjectDomainOrderByWithAggregationInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    createdAt?: SortOrder
    txtRecord?: SortOrder
    cname?: SortOrder
    _count?: ProjectDomainCountOrderByAggregateInput
    _max?: ProjectDomainMaxOrderByAggregateInput
    _min?: ProjectDomainMinOrderByAggregateInput
  }

  export type ProjectDomainScalarWhereWithAggregatesInput = {
    AND?: ProjectDomainScalarWhereWithAggregatesInput | ProjectDomainScalarWhereWithAggregatesInput[]
    OR?: ProjectDomainScalarWhereWithAggregatesInput[]
    NOT?: ProjectDomainScalarWhereWithAggregatesInput | ProjectDomainScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"ProjectDomain"> | string
    domainId?: StringWithAggregatesFilter<"ProjectDomain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectDomain"> | Date | string
    txtRecord?: StringWithAggregatesFilter<"ProjectDomain"> | string
    cname?: StringWithAggregatesFilter<"ProjectDomain"> | string
  }

  export type ProjectWithDomainWhereInput = {
    AND?: ProjectWithDomainWhereInput | ProjectWithDomainWhereInput[]
    OR?: ProjectWithDomainWhereInput[]
    NOT?: ProjectWithDomainWhereInput | ProjectWithDomainWhereInput[]
    projectId?: StringFilter<"ProjectWithDomain"> | string
    domainId?: StringFilter<"ProjectWithDomain"> | string
    txtRecord?: StringFilter<"ProjectWithDomain"> | string
    createdAt?: DateTimeFilter<"ProjectWithDomain"> | Date | string
    cname?: StringFilter<"ProjectWithDomain"> | string
    verified?: BoolFilter<"ProjectWithDomain"> | boolean
    userId?: StringNullableFilter<"ProjectWithDomain"> | string | null
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    latestBuid?: XOR<LatestBuildPerProjectDomainNullableRelationFilter, LatestBuildPerProjectDomainWhereInput> | null
  }

  export type ProjectWithDomainOrderByWithRelationInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    txtRecord?: SortOrder
    createdAt?: SortOrder
    cname?: SortOrder
    verified?: SortOrder
    userId?: SortOrderInput | SortOrder
    domain?: DomainOrderByWithRelationInput
    latestBuid?: LatestBuildPerProjectDomainOrderByWithRelationInput
  }

  export type ProjectWithDomainWhereUniqueInput = Prisma.AtLeast<{
    projectId_domainId?: ProjectWithDomainProjectIdDomainIdCompoundUniqueInput
    AND?: ProjectWithDomainWhereInput | ProjectWithDomainWhereInput[]
    OR?: ProjectWithDomainWhereInput[]
    NOT?: ProjectWithDomainWhereInput | ProjectWithDomainWhereInput[]
    projectId?: StringFilter<"ProjectWithDomain"> | string
    domainId?: StringFilter<"ProjectWithDomain"> | string
    txtRecord?: StringFilter<"ProjectWithDomain"> | string
    createdAt?: DateTimeFilter<"ProjectWithDomain"> | Date | string
    cname?: StringFilter<"ProjectWithDomain"> | string
    verified?: BoolFilter<"ProjectWithDomain"> | boolean
    userId?: StringNullableFilter<"ProjectWithDomain"> | string | null
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    latestBuid?: XOR<LatestBuildPerProjectDomainNullableRelationFilter, LatestBuildPerProjectDomainWhereInput> | null
  }, "projectId_domainId">

  export type ProjectWithDomainOrderByWithAggregationInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    txtRecord?: SortOrder
    createdAt?: SortOrder
    cname?: SortOrder
    verified?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ProjectWithDomainCountOrderByAggregateInput
    _max?: ProjectWithDomainMaxOrderByAggregateInput
    _min?: ProjectWithDomainMinOrderByAggregateInput
  }

  export type ProjectWithDomainScalarWhereWithAggregatesInput = {
    AND?: ProjectWithDomainScalarWhereWithAggregatesInput | ProjectWithDomainScalarWhereWithAggregatesInput[]
    OR?: ProjectWithDomainScalarWhereWithAggregatesInput[]
    NOT?: ProjectWithDomainScalarWhereWithAggregatesInput | ProjectWithDomainScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"ProjectWithDomain"> | string
    domainId?: StringWithAggregatesFilter<"ProjectWithDomain"> | string
    txtRecord?: StringWithAggregatesFilter<"ProjectWithDomain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectWithDomain"> | Date | string
    cname?: StringWithAggregatesFilter<"ProjectWithDomain"> | string
    verified?: BoolWithAggregatesFilter<"ProjectWithDomain"> | boolean
    userId?: StringNullableWithAggregatesFilter<"ProjectWithDomain"> | string | null
  }

  export type LatestBuildPerProjectDomainWhereInput = {
    AND?: LatestBuildPerProjectDomainWhereInput | LatestBuildPerProjectDomainWhereInput[]
    OR?: LatestBuildPerProjectDomainWhereInput[]
    NOT?: LatestBuildPerProjectDomainWhereInput | LatestBuildPerProjectDomainWhereInput[]
    domainId?: StringFilter<"LatestBuildPerProjectDomain"> | string
    buildId?: StringFilter<"LatestBuildPerProjectDomain"> | string
    projectId?: StringFilter<"LatestBuildPerProjectDomain"> | string
    isLatestBuild?: BoolFilter<"LatestBuildPerProjectDomain"> | boolean
    publishStatus?: EnumPublishStatusFilter<"LatestBuildPerProjectDomain"> | $Enums.PublishStatus
    updatedAt?: DateTimeFilter<"LatestBuildPerProjectDomain"> | Date | string
    projectWithDomain?: XOR<ProjectWithDomainRelationFilter, ProjectWithDomainWhereInput>
  }

  export type LatestBuildPerProjectDomainOrderByWithRelationInput = {
    domainId?: SortOrder
    buildId?: SortOrder
    projectId?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
    projectWithDomain?: ProjectWithDomainOrderByWithRelationInput
  }

  export type LatestBuildPerProjectDomainWhereUniqueInput = Prisma.AtLeast<{
    projectId_domainId?: LatestBuildPerProjectDomainProjectIdDomainIdCompoundUniqueInput
    AND?: LatestBuildPerProjectDomainWhereInput | LatestBuildPerProjectDomainWhereInput[]
    OR?: LatestBuildPerProjectDomainWhereInput[]
    NOT?: LatestBuildPerProjectDomainWhereInput | LatestBuildPerProjectDomainWhereInput[]
    domainId?: StringFilter<"LatestBuildPerProjectDomain"> | string
    buildId?: StringFilter<"LatestBuildPerProjectDomain"> | string
    projectId?: StringFilter<"LatestBuildPerProjectDomain"> | string
    isLatestBuild?: BoolFilter<"LatestBuildPerProjectDomain"> | boolean
    publishStatus?: EnumPublishStatusFilter<"LatestBuildPerProjectDomain"> | $Enums.PublishStatus
    updatedAt?: DateTimeFilter<"LatestBuildPerProjectDomain"> | Date | string
    projectWithDomain?: XOR<ProjectWithDomainRelationFilter, ProjectWithDomainWhereInput>
  }, "projectId_domainId">

  export type LatestBuildPerProjectDomainOrderByWithAggregationInput = {
    domainId?: SortOrder
    buildId?: SortOrder
    projectId?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
    _count?: LatestBuildPerProjectDomainCountOrderByAggregateInput
    _max?: LatestBuildPerProjectDomainMaxOrderByAggregateInput
    _min?: LatestBuildPerProjectDomainMinOrderByAggregateInput
  }

  export type LatestBuildPerProjectDomainScalarWhereWithAggregatesInput = {
    AND?: LatestBuildPerProjectDomainScalarWhereWithAggregatesInput | LatestBuildPerProjectDomainScalarWhereWithAggregatesInput[]
    OR?: LatestBuildPerProjectDomainScalarWhereWithAggregatesInput[]
    NOT?: LatestBuildPerProjectDomainScalarWhereWithAggregatesInput | LatestBuildPerProjectDomainScalarWhereWithAggregatesInput[]
    domainId?: StringWithAggregatesFilter<"LatestBuildPerProjectDomain"> | string
    buildId?: StringWithAggregatesFilter<"LatestBuildPerProjectDomain"> | string
    projectId?: StringWithAggregatesFilter<"LatestBuildPerProjectDomain"> | string
    isLatestBuild?: BoolWithAggregatesFilter<"LatestBuildPerProjectDomain"> | boolean
    publishStatus?: EnumPublishStatusWithAggregatesFilter<"LatestBuildPerProjectDomain"> | $Enums.PublishStatus
    updatedAt?: DateTimeWithAggregatesFilter<"LatestBuildPerProjectDomain"> | Date | string
  }

  export type LatestBuildPerProjectWhereInput = {
    AND?: LatestBuildPerProjectWhereInput | LatestBuildPerProjectWhereInput[]
    OR?: LatestBuildPerProjectWhereInput[]
    NOT?: LatestBuildPerProjectWhereInput | LatestBuildPerProjectWhereInput[]
    buildId?: StringFilter<"LatestBuildPerProject"> | string
    projectId?: StringFilter<"LatestBuildPerProject"> | string
    domain?: StringFilter<"LatestBuildPerProject"> | string
    isLatestBuild?: BoolFilter<"LatestBuildPerProject"> | boolean
    publishStatus?: EnumPublishStatusFilter<"LatestBuildPerProject"> | $Enums.PublishStatus
    updatedAt?: DateTimeFilter<"LatestBuildPerProject"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type LatestBuildPerProjectOrderByWithRelationInput = {
    buildId?: SortOrder
    projectId?: SortOrder
    domain?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type LatestBuildPerProjectWhereUniqueInput = Prisma.AtLeast<{
    projectId_domain?: LatestBuildPerProjectProjectIdDomainCompoundUniqueInput
    AND?: LatestBuildPerProjectWhereInput | LatestBuildPerProjectWhereInput[]
    OR?: LatestBuildPerProjectWhereInput[]
    NOT?: LatestBuildPerProjectWhereInput | LatestBuildPerProjectWhereInput[]
    buildId?: StringFilter<"LatestBuildPerProject"> | string
    projectId?: StringFilter<"LatestBuildPerProject"> | string
    domain?: StringFilter<"LatestBuildPerProject"> | string
    isLatestBuild?: BoolFilter<"LatestBuildPerProject"> | boolean
    publishStatus?: EnumPublishStatusFilter<"LatestBuildPerProject"> | $Enums.PublishStatus
    updatedAt?: DateTimeFilter<"LatestBuildPerProject"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "projectId_domain">

  export type LatestBuildPerProjectOrderByWithAggregationInput = {
    buildId?: SortOrder
    projectId?: SortOrder
    domain?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
    _count?: LatestBuildPerProjectCountOrderByAggregateInput
    _max?: LatestBuildPerProjectMaxOrderByAggregateInput
    _min?: LatestBuildPerProjectMinOrderByAggregateInput
  }

  export type LatestBuildPerProjectScalarWhereWithAggregatesInput = {
    AND?: LatestBuildPerProjectScalarWhereWithAggregatesInput | LatestBuildPerProjectScalarWhereWithAggregatesInput[]
    OR?: LatestBuildPerProjectScalarWhereWithAggregatesInput[]
    NOT?: LatestBuildPerProjectScalarWhereWithAggregatesInput | LatestBuildPerProjectScalarWhereWithAggregatesInput[]
    buildId?: StringWithAggregatesFilter<"LatestBuildPerProject"> | string
    projectId?: StringWithAggregatesFilter<"LatestBuildPerProject"> | string
    domain?: StringWithAggregatesFilter<"LatestBuildPerProject"> | string
    isLatestBuild?: BoolWithAggregatesFilter<"LatestBuildPerProject"> | boolean
    publishStatus?: EnumPublishStatusWithAggregatesFilter<"LatestBuildPerProject"> | $Enums.PublishStatus
    updatedAt?: DateTimeWithAggregatesFilter<"LatestBuildPerProject"> | Date | string
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

  export type FileCreateInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    uploaderProject?: ProjectCreateNestedOneWithoutFilesInput
    assets?: AssetCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    uploaderProjectId?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    uploaderProject?: ProjectUpdateOneWithoutFilesNestedInput
    assets?: AssetUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    uploaderProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileCreateManyInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    uploaderProjectId?: string | null
  }

  export type FileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FileUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    uploaderProjectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateInput = {
    id?: string
    projectId: string
    file: FileCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    file?: FileUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssetCreateManyInput = {
    id?: string
    projectId: string
    name: string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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
    files?: FileCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutProjectsNestedInput
    build?: BuildUpdateManyWithoutProjectNestedInput
    files?: FileUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
    files?: FileUncheckedUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUncheckedUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUncheckedUpdateOneWithoutProjectNestedInput
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
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pages: string
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    deployment?: string | null
    publishStatus?: $Enums.PublishStatus
    project: ProjectCreateNestedOneWithoutBuildInput
  }

  export type BuildUncheckedCreateInput = {
    id?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pages: string
    projectId: string
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    deployment?: string | null
    publishStatus?: $Enums.PublishStatus
  }

  export type BuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    project?: ProjectUpdateOneRequiredWithoutBuildNestedInput
  }

  export type BuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
  }

  export type BuildCreateManyInput = {
    id?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pages: string
    projectId: string
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    deployment?: string | null
    publishStatus?: $Enums.PublishStatus
  }

  export type BuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
  }

  export type BuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
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

  export type DomainCreateInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
    ProjectDomain?: ProjectDomainCreateNestedManyWithoutDomainInput
    projectWithDomain?: ProjectWithDomainCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
    ProjectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutDomainInput
    projectWithDomain?: ProjectWithDomainUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDomain?: ProjectDomainUpdateManyWithoutDomainNestedInput
    projectWithDomain?: ProjectWithDomainUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDomain?: ProjectDomainUncheckedUpdateManyWithoutDomainNestedInput
    projectWithDomain?: ProjectWithDomainUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectDomainCreateInput = {
    createdAt?: Date | string
    txtRecord?: string
    cname: string
    project: ProjectCreateNestedOneWithoutProjectDomainInput
    domain: DomainCreateNestedOneWithoutProjectDomainInput
  }

  export type ProjectDomainUncheckedCreateInput = {
    projectId: string
    domainId: string
    createdAt?: Date | string
    txtRecord?: string
    cname: string
  }

  export type ProjectDomainUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutProjectDomainNestedInput
    domain?: DomainUpdateOneRequiredWithoutProjectDomainNestedInput
  }

  export type ProjectDomainUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDomainCreateManyInput = {
    projectId: string
    domainId: string
    createdAt?: Date | string
    txtRecord?: string
    cname: string
  }

  export type ProjectDomainUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDomainUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectWithDomainCreateInput = {
    projectId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
    domain: DomainCreateNestedOneWithoutProjectWithDomainInput
    latestBuid?: LatestBuildPerProjectDomainCreateNestedOneWithoutProjectWithDomainInput
  }

  export type ProjectWithDomainUncheckedCreateInput = {
    projectId: string
    domainId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
    latestBuid?: LatestBuildPerProjectDomainUncheckedCreateNestedOneWithoutProjectWithDomainInput
  }

  export type ProjectWithDomainUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneRequiredWithoutProjectWithDomainNestedInput
    latestBuid?: LatestBuildPerProjectDomainUpdateOneWithoutProjectWithDomainNestedInput
  }

  export type ProjectWithDomainUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBuid?: LatestBuildPerProjectDomainUncheckedUpdateOneWithoutProjectWithDomainNestedInput
  }

  export type ProjectWithDomainCreateManyInput = {
    projectId: string
    domainId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
  }

  export type ProjectWithDomainUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectWithDomainUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LatestBuildPerProjectDomainCreateInput = {
    buildId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
    projectWithDomain: ProjectWithDomainCreateNestedOneWithoutLatestBuidInput
  }

  export type LatestBuildPerProjectDomainUncheckedCreateInput = {
    domainId: string
    buildId: string
    projectId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectDomainUpdateInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectWithDomain?: ProjectWithDomainUpdateOneRequiredWithoutLatestBuidNestedInput
  }

  export type LatestBuildPerProjectDomainUncheckedUpdateInput = {
    domainId?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectDomainCreateManyInput = {
    domainId: string
    buildId: string
    projectId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectDomainUpdateManyMutationInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectDomainUncheckedUpdateManyInput = {
    domainId?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectCreateInput = {
    buildId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
    project: ProjectCreateNestedOneWithoutLatestBuildInput
  }

  export type LatestBuildPerProjectUncheckedCreateInput = {
    buildId: string
    projectId: string
    domain: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectUpdateInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLatestBuildNestedInput
  }

  export type LatestBuildPerProjectUncheckedUpdateInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectCreateManyInput = {
    buildId: string
    projectId: string
    domain: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectUpdateManyMutationInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectUncheckedUpdateManyInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectNullableRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    name?: SortOrder
    format?: SortOrder
    size?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    uploaderProjectId?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    name?: SortOrder
    format?: SortOrder
    size?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    uploaderProjectId?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    name?: SortOrder
    format?: SortOrder
    size?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    uploaderProjectId?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FileRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type AssetIdProjectIdCompoundUniqueInput = {
    id: string
    projectId: string
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
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

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BuildListRelationFilter = {
    every?: BuildWhereInput
    some?: BuildWhereInput
    none?: BuildWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type ProjectDomainListRelationFilter = {
    every?: ProjectDomainWhereInput
    some?: ProjectDomainWhereInput
    none?: ProjectDomainWhereInput
  }

  export type LatestBuildPerProjectNullableRelationFilter = {
    is?: LatestBuildPerProjectWhereInput | null
    isNot?: LatestBuildPerProjectWhereInput | null
  }

  export type BuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectDomainOrderByRelationAggregateInput = {
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

  export type ProjectIdDomainCompoundUniqueInput = {
    id: string
    domain: string
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

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
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
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    deployment?: SortOrder
    publishStatus?: SortOrder
  }

  export type BuildAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type BuildMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    deployment?: SortOrder
    publishStatus?: SortOrder
  }

  export type BuildMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: SortOrder
    projectId?: SortOrder
    breakpoints?: SortOrder
    styles?: SortOrder
    styleSources?: SortOrder
    styleSourceSelections?: SortOrder
    props?: SortOrder
    instances?: SortOrder
    deployment?: SortOrder
    publishStatus?: SortOrder
  }

  export type BuildSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
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

  export type EnumDomainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusFilter<$PrismaModel> | $Enums.DomainStatus
  }

  export type ProjectWithDomainListRelationFilter = {
    every?: ProjectWithDomainWhereInput
    some?: ProjectWithDomainWhereInput
    none?: ProjectWithDomainWhereInput
  }

  export type ProjectWithDomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    txtRecord?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    txtRecord?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    txtRecord?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type EnumDomainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel> | $Enums.DomainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainStatusFilter<$PrismaModel>
    _max?: NestedEnumDomainStatusFilter<$PrismaModel>
  }

  export type DomainRelationFilter = {
    is?: DomainWhereInput
    isNot?: DomainWhereInput
  }

  export type ProjectDomainProjectIdDomainIdCompoundUniqueInput = {
    projectId: string
    domainId: string
  }

  export type ProjectDomainCountOrderByAggregateInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    createdAt?: SortOrder
    txtRecord?: SortOrder
    cname?: SortOrder
  }

  export type ProjectDomainMaxOrderByAggregateInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    createdAt?: SortOrder
    txtRecord?: SortOrder
    cname?: SortOrder
  }

  export type ProjectDomainMinOrderByAggregateInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    createdAt?: SortOrder
    txtRecord?: SortOrder
    cname?: SortOrder
  }

  export type LatestBuildPerProjectDomainNullableRelationFilter = {
    is?: LatestBuildPerProjectDomainWhereInput | null
    isNot?: LatestBuildPerProjectDomainWhereInput | null
  }

  export type ProjectWithDomainProjectIdDomainIdCompoundUniqueInput = {
    projectId: string
    domainId: string
  }

  export type ProjectWithDomainCountOrderByAggregateInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    txtRecord?: SortOrder
    createdAt?: SortOrder
    cname?: SortOrder
    verified?: SortOrder
    userId?: SortOrder
  }

  export type ProjectWithDomainMaxOrderByAggregateInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    txtRecord?: SortOrder
    createdAt?: SortOrder
    cname?: SortOrder
    verified?: SortOrder
    userId?: SortOrder
  }

  export type ProjectWithDomainMinOrderByAggregateInput = {
    projectId?: SortOrder
    domainId?: SortOrder
    txtRecord?: SortOrder
    createdAt?: SortOrder
    cname?: SortOrder
    verified?: SortOrder
    userId?: SortOrder
  }

  export type ProjectWithDomainRelationFilter = {
    is?: ProjectWithDomainWhereInput
    isNot?: ProjectWithDomainWhereInput
  }

  export type LatestBuildPerProjectDomainProjectIdDomainIdCompoundUniqueInput = {
    projectId: string
    domainId: string
  }

  export type LatestBuildPerProjectDomainCountOrderByAggregateInput = {
    domainId?: SortOrder
    buildId?: SortOrder
    projectId?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type LatestBuildPerProjectDomainMaxOrderByAggregateInput = {
    domainId?: SortOrder
    buildId?: SortOrder
    projectId?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type LatestBuildPerProjectDomainMinOrderByAggregateInput = {
    domainId?: SortOrder
    buildId?: SortOrder
    projectId?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type LatestBuildPerProjectProjectIdDomainCompoundUniqueInput = {
    projectId: string
    domain: string
  }

  export type LatestBuildPerProjectCountOrderByAggregateInput = {
    buildId?: SortOrder
    projectId?: SortOrder
    domain?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type LatestBuildPerProjectMaxOrderByAggregateInput = {
    buildId?: SortOrder
    projectId?: SortOrder
    domain?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type LatestBuildPerProjectMinOrderByAggregateInput = {
    buildId?: SortOrder
    projectId?: SortOrder
    domain?: SortOrder
    isLatestBuild?: SortOrder
    publishStatus?: SortOrder
    updatedAt?: SortOrder
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

  export type ProjectCreateNestedOneWithoutFilesInput = {
    create?: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput
    connect?: ProjectWhereUniqueInput
  }

  export type AssetCreateNestedManyWithoutFileInput = {
    create?: XOR<AssetCreateWithoutFileInput, AssetUncheckedCreateWithoutFileInput> | AssetCreateWithoutFileInput[] | AssetUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutFileInput | AssetCreateOrConnectWithoutFileInput[]
    createMany?: AssetCreateManyFileInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<AssetCreateWithoutFileInput, AssetUncheckedCreateWithoutFileInput> | AssetCreateWithoutFileInput[] | AssetUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutFileInput | AssetCreateOrConnectWithoutFileInput[]
    createMany?: AssetCreateManyFileInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUploadStatusFieldUpdateOperationsInput = {
    set?: $Enums.UploadStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneWithoutFilesNestedInput = {
    create?: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput
    upsert?: ProjectUpsertWithoutFilesInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFilesInput, ProjectUpdateWithoutFilesInput>, ProjectUncheckedUpdateWithoutFilesInput>
  }

  export type AssetUpdateManyWithoutFileNestedInput = {
    create?: XOR<AssetCreateWithoutFileInput, AssetUncheckedCreateWithoutFileInput> | AssetCreateWithoutFileInput[] | AssetUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutFileInput | AssetCreateOrConnectWithoutFileInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutFileInput | AssetUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: AssetCreateManyFileInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutFileInput | AssetUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutFileInput | AssetUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<AssetCreateWithoutFileInput, AssetUncheckedCreateWithoutFileInput> | AssetCreateWithoutFileInput[] | AssetUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutFileInput | AssetCreateOrConnectWithoutFileInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutFileInput | AssetUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: AssetCreateManyFileInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutFileInput | AssetUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutFileInput | AssetUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutAssetsInput = {
    create?: XOR<FileCreateWithoutAssetsInput, FileUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: FileCreateOrConnectWithoutAssetsInput
    connect?: FileWhereUniqueInput
  }

  export type FileUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<FileCreateWithoutAssetsInput, FileUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: FileCreateOrConnectWithoutAssetsInput
    upsert?: FileUpsertWithoutAssetsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutAssetsInput, FileUpdateWithoutAssetsInput>, FileUncheckedUpdateWithoutAssetsInput>
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

  export type FileCreateNestedManyWithoutUploaderProjectInput = {
    create?: XOR<FileCreateWithoutUploaderProjectInput, FileUncheckedCreateWithoutUploaderProjectInput> | FileCreateWithoutUploaderProjectInput[] | FileUncheckedCreateWithoutUploaderProjectInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUploaderProjectInput | FileCreateOrConnectWithoutUploaderProjectInput[]
    createMany?: FileCreateManyUploaderProjectInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type ProjectDomainCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDomainCreateWithoutProjectInput, ProjectDomainUncheckedCreateWithoutProjectInput> | ProjectDomainCreateWithoutProjectInput[] | ProjectDomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutProjectInput | ProjectDomainCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDomainCreateManyProjectInputEnvelope
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
  }

  export type LatestBuildPerProjectCreateNestedOneWithoutProjectInput = {
    create?: XOR<LatestBuildPerProjectCreateWithoutProjectInput, LatestBuildPerProjectUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LatestBuildPerProjectCreateOrConnectWithoutProjectInput
    connect?: LatestBuildPerProjectWhereUniqueInput
  }

  export type BuildUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput> | BuildCreateWithoutProjectInput[] | BuildUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutProjectInput | BuildCreateOrConnectWithoutProjectInput[]
    createMany?: BuildCreateManyProjectInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutUploaderProjectInput = {
    create?: XOR<FileCreateWithoutUploaderProjectInput, FileUncheckedCreateWithoutUploaderProjectInput> | FileCreateWithoutUploaderProjectInput[] | FileUncheckedCreateWithoutUploaderProjectInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUploaderProjectInput | FileCreateOrConnectWithoutUploaderProjectInput[]
    createMany?: FileCreateManyUploaderProjectInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type ProjectDomainUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDomainCreateWithoutProjectInput, ProjectDomainUncheckedCreateWithoutProjectInput> | ProjectDomainCreateWithoutProjectInput[] | ProjectDomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutProjectInput | ProjectDomainCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDomainCreateManyProjectInputEnvelope
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
  }

  export type LatestBuildPerProjectUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<LatestBuildPerProjectCreateWithoutProjectInput, LatestBuildPerProjectUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LatestBuildPerProjectCreateOrConnectWithoutProjectInput
    connect?: LatestBuildPerProjectWhereUniqueInput
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

  export type FileUpdateManyWithoutUploaderProjectNestedInput = {
    create?: XOR<FileCreateWithoutUploaderProjectInput, FileUncheckedCreateWithoutUploaderProjectInput> | FileCreateWithoutUploaderProjectInput[] | FileUncheckedCreateWithoutUploaderProjectInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUploaderProjectInput | FileCreateOrConnectWithoutUploaderProjectInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUploaderProjectInput | FileUpsertWithWhereUniqueWithoutUploaderProjectInput[]
    createMany?: FileCreateManyUploaderProjectInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUploaderProjectInput | FileUpdateWithWhereUniqueWithoutUploaderProjectInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUploaderProjectInput | FileUpdateManyWithWhereWithoutUploaderProjectInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ProjectDomainUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDomainCreateWithoutProjectInput, ProjectDomainUncheckedCreateWithoutProjectInput> | ProjectDomainCreateWithoutProjectInput[] | ProjectDomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutProjectInput | ProjectDomainCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDomainUpsertWithWhereUniqueWithoutProjectInput | ProjectDomainUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDomainCreateManyProjectInputEnvelope
    set?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    disconnect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    delete?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    update?: ProjectDomainUpdateWithWhereUniqueWithoutProjectInput | ProjectDomainUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDomainUpdateManyWithWhereWithoutProjectInput | ProjectDomainUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDomainScalarWhereInput | ProjectDomainScalarWhereInput[]
  }

  export type LatestBuildPerProjectUpdateOneWithoutProjectNestedInput = {
    create?: XOR<LatestBuildPerProjectCreateWithoutProjectInput, LatestBuildPerProjectUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LatestBuildPerProjectCreateOrConnectWithoutProjectInput
    upsert?: LatestBuildPerProjectUpsertWithoutProjectInput
    disconnect?: LatestBuildPerProjectWhereInput | boolean
    delete?: LatestBuildPerProjectWhereInput | boolean
    connect?: LatestBuildPerProjectWhereUniqueInput
    update?: XOR<XOR<LatestBuildPerProjectUpdateToOneWithWhereWithoutProjectInput, LatestBuildPerProjectUpdateWithoutProjectInput>, LatestBuildPerProjectUncheckedUpdateWithoutProjectInput>
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

  export type FileUncheckedUpdateManyWithoutUploaderProjectNestedInput = {
    create?: XOR<FileCreateWithoutUploaderProjectInput, FileUncheckedCreateWithoutUploaderProjectInput> | FileCreateWithoutUploaderProjectInput[] | FileUncheckedCreateWithoutUploaderProjectInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUploaderProjectInput | FileCreateOrConnectWithoutUploaderProjectInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUploaderProjectInput | FileUpsertWithWhereUniqueWithoutUploaderProjectInput[]
    createMany?: FileCreateManyUploaderProjectInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUploaderProjectInput | FileUpdateWithWhereUniqueWithoutUploaderProjectInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUploaderProjectInput | FileUpdateManyWithWhereWithoutUploaderProjectInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ProjectDomainUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDomainCreateWithoutProjectInput, ProjectDomainUncheckedCreateWithoutProjectInput> | ProjectDomainCreateWithoutProjectInput[] | ProjectDomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutProjectInput | ProjectDomainCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDomainUpsertWithWhereUniqueWithoutProjectInput | ProjectDomainUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDomainCreateManyProjectInputEnvelope
    set?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    disconnect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    delete?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    update?: ProjectDomainUpdateWithWhereUniqueWithoutProjectInput | ProjectDomainUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDomainUpdateManyWithWhereWithoutProjectInput | ProjectDomainUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDomainScalarWhereInput | ProjectDomainScalarWhereInput[]
  }

  export type LatestBuildPerProjectUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<LatestBuildPerProjectCreateWithoutProjectInput, LatestBuildPerProjectUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LatestBuildPerProjectCreateOrConnectWithoutProjectInput
    upsert?: LatestBuildPerProjectUpsertWithoutProjectInput
    disconnect?: LatestBuildPerProjectWhereInput | boolean
    delete?: LatestBuildPerProjectWhereInput | boolean
    connect?: LatestBuildPerProjectWhereUniqueInput
    update?: XOR<XOR<LatestBuildPerProjectUpdateToOneWithWhereWithoutProjectInput, LatestBuildPerProjectUpdateWithoutProjectInput>, LatestBuildPerProjectUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutBuildInput = {
    create?: XOR<ProjectCreateWithoutBuildInput, ProjectUncheckedCreateWithoutBuildInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
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

  export type ProjectDomainCreateNestedManyWithoutDomainInput = {
    create?: XOR<ProjectDomainCreateWithoutDomainInput, ProjectDomainUncheckedCreateWithoutDomainInput> | ProjectDomainCreateWithoutDomainInput[] | ProjectDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutDomainInput | ProjectDomainCreateOrConnectWithoutDomainInput[]
    createMany?: ProjectDomainCreateManyDomainInputEnvelope
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
  }

  export type ProjectWithDomainCreateNestedManyWithoutDomainInput = {
    create?: XOR<ProjectWithDomainCreateWithoutDomainInput, ProjectWithDomainUncheckedCreateWithoutDomainInput> | ProjectWithDomainCreateWithoutDomainInput[] | ProjectWithDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectWithDomainCreateOrConnectWithoutDomainInput | ProjectWithDomainCreateOrConnectWithoutDomainInput[]
    createMany?: ProjectWithDomainCreateManyDomainInputEnvelope
    connect?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
  }

  export type ProjectDomainUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<ProjectDomainCreateWithoutDomainInput, ProjectDomainUncheckedCreateWithoutDomainInput> | ProjectDomainCreateWithoutDomainInput[] | ProjectDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutDomainInput | ProjectDomainCreateOrConnectWithoutDomainInput[]
    createMany?: ProjectDomainCreateManyDomainInputEnvelope
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
  }

  export type ProjectWithDomainUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<ProjectWithDomainCreateWithoutDomainInput, ProjectWithDomainUncheckedCreateWithoutDomainInput> | ProjectWithDomainCreateWithoutDomainInput[] | ProjectWithDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectWithDomainCreateOrConnectWithoutDomainInput | ProjectWithDomainCreateOrConnectWithoutDomainInput[]
    createMany?: ProjectWithDomainCreateManyDomainInputEnvelope
    connect?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
  }

  export type EnumDomainStatusFieldUpdateOperationsInput = {
    set?: $Enums.DomainStatus
  }

  export type ProjectDomainUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ProjectDomainCreateWithoutDomainInput, ProjectDomainUncheckedCreateWithoutDomainInput> | ProjectDomainCreateWithoutDomainInput[] | ProjectDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutDomainInput | ProjectDomainCreateOrConnectWithoutDomainInput[]
    upsert?: ProjectDomainUpsertWithWhereUniqueWithoutDomainInput | ProjectDomainUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ProjectDomainCreateManyDomainInputEnvelope
    set?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    disconnect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    delete?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    update?: ProjectDomainUpdateWithWhereUniqueWithoutDomainInput | ProjectDomainUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ProjectDomainUpdateManyWithWhereWithoutDomainInput | ProjectDomainUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ProjectDomainScalarWhereInput | ProjectDomainScalarWhereInput[]
  }

  export type ProjectWithDomainUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ProjectWithDomainCreateWithoutDomainInput, ProjectWithDomainUncheckedCreateWithoutDomainInput> | ProjectWithDomainCreateWithoutDomainInput[] | ProjectWithDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectWithDomainCreateOrConnectWithoutDomainInput | ProjectWithDomainCreateOrConnectWithoutDomainInput[]
    upsert?: ProjectWithDomainUpsertWithWhereUniqueWithoutDomainInput | ProjectWithDomainUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ProjectWithDomainCreateManyDomainInputEnvelope
    set?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    disconnect?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    delete?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    connect?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    update?: ProjectWithDomainUpdateWithWhereUniqueWithoutDomainInput | ProjectWithDomainUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ProjectWithDomainUpdateManyWithWhereWithoutDomainInput | ProjectWithDomainUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ProjectWithDomainScalarWhereInput | ProjectWithDomainScalarWhereInput[]
  }

  export type ProjectDomainUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ProjectDomainCreateWithoutDomainInput, ProjectDomainUncheckedCreateWithoutDomainInput> | ProjectDomainCreateWithoutDomainInput[] | ProjectDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectDomainCreateOrConnectWithoutDomainInput | ProjectDomainCreateOrConnectWithoutDomainInput[]
    upsert?: ProjectDomainUpsertWithWhereUniqueWithoutDomainInput | ProjectDomainUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ProjectDomainCreateManyDomainInputEnvelope
    set?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    disconnect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    delete?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    connect?: ProjectDomainWhereUniqueInput | ProjectDomainWhereUniqueInput[]
    update?: ProjectDomainUpdateWithWhereUniqueWithoutDomainInput | ProjectDomainUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ProjectDomainUpdateManyWithWhereWithoutDomainInput | ProjectDomainUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ProjectDomainScalarWhereInput | ProjectDomainScalarWhereInput[]
  }

  export type ProjectWithDomainUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ProjectWithDomainCreateWithoutDomainInput, ProjectWithDomainUncheckedCreateWithoutDomainInput> | ProjectWithDomainCreateWithoutDomainInput[] | ProjectWithDomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProjectWithDomainCreateOrConnectWithoutDomainInput | ProjectWithDomainCreateOrConnectWithoutDomainInput[]
    upsert?: ProjectWithDomainUpsertWithWhereUniqueWithoutDomainInput | ProjectWithDomainUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ProjectWithDomainCreateManyDomainInputEnvelope
    set?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    disconnect?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    delete?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    connect?: ProjectWithDomainWhereUniqueInput | ProjectWithDomainWhereUniqueInput[]
    update?: ProjectWithDomainUpdateWithWhereUniqueWithoutDomainInput | ProjectWithDomainUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ProjectWithDomainUpdateManyWithWhereWithoutDomainInput | ProjectWithDomainUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ProjectWithDomainScalarWhereInput | ProjectWithDomainScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectDomainInput = {
    create?: XOR<ProjectCreateWithoutProjectDomainInput, ProjectUncheckedCreateWithoutProjectDomainInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectDomainInput
    connect?: ProjectWhereUniqueInput
  }

  export type DomainCreateNestedOneWithoutProjectDomainInput = {
    create?: XOR<DomainCreateWithoutProjectDomainInput, DomainUncheckedCreateWithoutProjectDomainInput>
    connectOrCreate?: DomainCreateOrConnectWithoutProjectDomainInput
    connect?: DomainWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectDomainNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectDomainInput, ProjectUncheckedCreateWithoutProjectDomainInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectDomainInput
    upsert?: ProjectUpsertWithoutProjectDomainInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectDomainInput, ProjectUpdateWithoutProjectDomainInput>, ProjectUncheckedUpdateWithoutProjectDomainInput>
  }

  export type DomainUpdateOneRequiredWithoutProjectDomainNestedInput = {
    create?: XOR<DomainCreateWithoutProjectDomainInput, DomainUncheckedCreateWithoutProjectDomainInput>
    connectOrCreate?: DomainCreateOrConnectWithoutProjectDomainInput
    upsert?: DomainUpsertWithoutProjectDomainInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutProjectDomainInput, DomainUpdateWithoutProjectDomainInput>, DomainUncheckedUpdateWithoutProjectDomainInput>
  }

  export type DomainCreateNestedOneWithoutProjectWithDomainInput = {
    create?: XOR<DomainCreateWithoutProjectWithDomainInput, DomainUncheckedCreateWithoutProjectWithDomainInput>
    connectOrCreate?: DomainCreateOrConnectWithoutProjectWithDomainInput
    connect?: DomainWhereUniqueInput
  }

  export type LatestBuildPerProjectDomainCreateNestedOneWithoutProjectWithDomainInput = {
    create?: XOR<LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput>
    connectOrCreate?: LatestBuildPerProjectDomainCreateOrConnectWithoutProjectWithDomainInput
    connect?: LatestBuildPerProjectDomainWhereUniqueInput
  }

  export type LatestBuildPerProjectDomainUncheckedCreateNestedOneWithoutProjectWithDomainInput = {
    create?: XOR<LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput>
    connectOrCreate?: LatestBuildPerProjectDomainCreateOrConnectWithoutProjectWithDomainInput
    connect?: LatestBuildPerProjectDomainWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutProjectWithDomainNestedInput = {
    create?: XOR<DomainCreateWithoutProjectWithDomainInput, DomainUncheckedCreateWithoutProjectWithDomainInput>
    connectOrCreate?: DomainCreateOrConnectWithoutProjectWithDomainInput
    upsert?: DomainUpsertWithoutProjectWithDomainInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutProjectWithDomainInput, DomainUpdateWithoutProjectWithDomainInput>, DomainUncheckedUpdateWithoutProjectWithDomainInput>
  }

  export type LatestBuildPerProjectDomainUpdateOneWithoutProjectWithDomainNestedInput = {
    create?: XOR<LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput>
    connectOrCreate?: LatestBuildPerProjectDomainCreateOrConnectWithoutProjectWithDomainInput
    upsert?: LatestBuildPerProjectDomainUpsertWithoutProjectWithDomainInput
    disconnect?: LatestBuildPerProjectDomainWhereInput | boolean
    delete?: LatestBuildPerProjectDomainWhereInput | boolean
    connect?: LatestBuildPerProjectDomainWhereUniqueInput
    update?: XOR<XOR<LatestBuildPerProjectDomainUpdateToOneWithWhereWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUpdateWithoutProjectWithDomainInput>, LatestBuildPerProjectDomainUncheckedUpdateWithoutProjectWithDomainInput>
  }

  export type LatestBuildPerProjectDomainUncheckedUpdateOneWithoutProjectWithDomainNestedInput = {
    create?: XOR<LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput>
    connectOrCreate?: LatestBuildPerProjectDomainCreateOrConnectWithoutProjectWithDomainInput
    upsert?: LatestBuildPerProjectDomainUpsertWithoutProjectWithDomainInput
    disconnect?: LatestBuildPerProjectDomainWhereInput | boolean
    delete?: LatestBuildPerProjectDomainWhereInput | boolean
    connect?: LatestBuildPerProjectDomainWhereUniqueInput
    update?: XOR<XOR<LatestBuildPerProjectDomainUpdateToOneWithWhereWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUpdateWithoutProjectWithDomainInput>, LatestBuildPerProjectDomainUncheckedUpdateWithoutProjectWithDomainInput>
  }

  export type ProjectWithDomainCreateNestedOneWithoutLatestBuidInput = {
    create?: XOR<ProjectWithDomainCreateWithoutLatestBuidInput, ProjectWithDomainUncheckedCreateWithoutLatestBuidInput>
    connectOrCreate?: ProjectWithDomainCreateOrConnectWithoutLatestBuidInput
    connect?: ProjectWithDomainWhereUniqueInput
  }

  export type ProjectWithDomainUpdateOneRequiredWithoutLatestBuidNestedInput = {
    create?: XOR<ProjectWithDomainCreateWithoutLatestBuidInput, ProjectWithDomainUncheckedCreateWithoutLatestBuidInput>
    connectOrCreate?: ProjectWithDomainCreateOrConnectWithoutLatestBuidInput
    upsert?: ProjectWithDomainUpsertWithoutLatestBuidInput
    connect?: ProjectWithDomainWhereUniqueInput
    update?: XOR<XOR<ProjectWithDomainUpdateToOneWithWhereWithoutLatestBuidInput, ProjectWithDomainUpdateWithoutLatestBuidInput>, ProjectWithDomainUncheckedUpdateWithoutLatestBuidInput>
  }

  export type ProjectCreateNestedOneWithoutLatestBuildInput = {
    create?: XOR<ProjectCreateWithoutLatestBuildInput, ProjectUncheckedCreateWithoutLatestBuildInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLatestBuildInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLatestBuildNestedInput = {
    create?: XOR<ProjectCreateWithoutLatestBuildInput, ProjectUncheckedCreateWithoutLatestBuildInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLatestBuildInput
    upsert?: ProjectUpsertWithoutLatestBuildInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLatestBuildInput, ProjectUpdateWithoutLatestBuildInput>, ProjectUncheckedUpdateWithoutLatestBuildInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
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

  export type NestedEnumDomainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusFilter<$PrismaModel> | $Enums.DomainStatus
  }

  export type NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel> | $Enums.DomainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainStatusFilter<$PrismaModel>
    _max?: NestedEnumDomainStatusFilter<$PrismaModel>
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

  export type ProjectCreateWithoutFilesInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    user?: UserCreateNestedOneWithoutProjectsInput
    build?: BuildCreateNestedManyWithoutProjectInput
    projectDomain?: ProjectDomainCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFilesInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
    projectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFilesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
  }

  export type AssetCreateWithoutFileInput = {
    id?: string
    projectId: string
  }

  export type AssetUncheckedCreateWithoutFileInput = {
    id?: string
    projectId: string
  }

  export type AssetCreateOrConnectWithoutFileInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutFileInput, AssetUncheckedCreateWithoutFileInput>
  }

  export type AssetCreateManyFileInputEnvelope = {
    data: AssetCreateManyFileInput | AssetCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutFilesInput = {
    update: XOR<ProjectUpdateWithoutFilesInput, ProjectUncheckedUpdateWithoutFilesInput>
    create: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFilesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFilesInput, ProjectUncheckedUpdateWithoutFilesInput>
  }

  export type ProjectUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutProjectsNestedInput
    build?: BuildUpdateManyWithoutProjectNestedInput
    projectDomain?: ProjectDomainUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
    projectDomain?: ProjectDomainUncheckedUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type AssetUpsertWithWhereUniqueWithoutFileInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutFileInput, AssetUncheckedUpdateWithoutFileInput>
    create: XOR<AssetCreateWithoutFileInput, AssetUncheckedCreateWithoutFileInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutFileInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutFileInput, AssetUncheckedUpdateWithoutFileInput>
  }

  export type AssetUpdateManyWithWhereWithoutFileInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutFileInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
  }

  export type FileCreateWithoutAssetsInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    uploaderProject?: ProjectCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutAssetsInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    uploaderProjectId?: string | null
  }

  export type FileCreateOrConnectWithoutAssetsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutAssetsInput, FileUncheckedCreateWithoutAssetsInput>
  }

  export type FileUpsertWithoutAssetsInput = {
    update: XOR<FileUpdateWithoutAssetsInput, FileUncheckedUpdateWithoutAssetsInput>
    create: XOR<FileCreateWithoutAssetsInput, FileUncheckedCreateWithoutAssetsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutAssetsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutAssetsInput, FileUncheckedUpdateWithoutAssetsInput>
  }

  export type FileUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    uploaderProject?: ProjectUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    uploaderProjectId?: NullableStringFieldUpdateOperationsInput | string | null
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
    files?: FileCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectUncheckedCreateNestedOneWithoutProjectInput
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
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pages: string
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    deployment?: string | null
    publishStatus?: $Enums.PublishStatus
  }

  export type BuildUncheckedCreateWithoutProjectInput = {
    id?: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pages: string
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    deployment?: string | null
    publishStatus?: $Enums.PublishStatus
  }

  export type BuildCreateOrConnectWithoutProjectInput = {
    where: BuildWhereUniqueInput
    create: XOR<BuildCreateWithoutProjectInput, BuildUncheckedCreateWithoutProjectInput>
  }

  export type BuildCreateManyProjectInputEnvelope = {
    data: BuildCreateManyProjectInput | BuildCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutUploaderProjectInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    assets?: AssetCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutUploaderProjectInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
    assets?: AssetUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutUploaderProjectInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUploaderProjectInput, FileUncheckedCreateWithoutUploaderProjectInput>
  }

  export type FileCreateManyUploaderProjectInputEnvelope = {
    data: FileCreateManyUploaderProjectInput | FileCreateManyUploaderProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDomainCreateWithoutProjectInput = {
    createdAt?: Date | string
    txtRecord?: string
    cname: string
    domain: DomainCreateNestedOneWithoutProjectDomainInput
  }

  export type ProjectDomainUncheckedCreateWithoutProjectInput = {
    domainId: string
    createdAt?: Date | string
    txtRecord?: string
    cname: string
  }

  export type ProjectDomainCreateOrConnectWithoutProjectInput = {
    where: ProjectDomainWhereUniqueInput
    create: XOR<ProjectDomainCreateWithoutProjectInput, ProjectDomainUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDomainCreateManyProjectInputEnvelope = {
    data: ProjectDomainCreateManyProjectInput | ProjectDomainCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LatestBuildPerProjectCreateWithoutProjectInput = {
    buildId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectUncheckedCreateWithoutProjectInput = {
    buildId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectCreateOrConnectWithoutProjectInput = {
    where: LatestBuildPerProjectWhereUniqueInput
    create: XOR<LatestBuildPerProjectCreateWithoutProjectInput, LatestBuildPerProjectUncheckedCreateWithoutProjectInput>
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
    version?: IntFilter<"Build"> | number
    createdAt?: DateTimeFilter<"Build"> | Date | string
    updatedAt?: DateTimeFilter<"Build"> | Date | string
    pages?: StringFilter<"Build"> | string
    projectId?: StringFilter<"Build"> | string
    breakpoints?: StringFilter<"Build"> | string
    styles?: StringFilter<"Build"> | string
    styleSources?: StringFilter<"Build"> | string
    styleSourceSelections?: StringFilter<"Build"> | string
    props?: StringFilter<"Build"> | string
    instances?: StringFilter<"Build"> | string
    deployment?: StringNullableFilter<"Build"> | string | null
    publishStatus?: EnumPublishStatusFilter<"Build"> | $Enums.PublishStatus
  }

  export type FileUpsertWithWhereUniqueWithoutUploaderProjectInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUploaderProjectInput, FileUncheckedUpdateWithoutUploaderProjectInput>
    create: XOR<FileCreateWithoutUploaderProjectInput, FileUncheckedCreateWithoutUploaderProjectInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUploaderProjectInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUploaderProjectInput, FileUncheckedUpdateWithoutUploaderProjectInput>
  }

  export type FileUpdateManyWithWhereWithoutUploaderProjectInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutUploaderProjectInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    name?: StringFilter<"File"> | string
    format?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    description?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    meta?: StringFilter<"File"> | string
    status?: EnumUploadStatusFilter<"File"> | $Enums.UploadStatus
    isDeleted?: BoolFilter<"File"> | boolean
    uploaderProjectId?: StringNullableFilter<"File"> | string | null
  }

  export type ProjectDomainUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectDomainWhereUniqueInput
    update: XOR<ProjectDomainUpdateWithoutProjectInput, ProjectDomainUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDomainCreateWithoutProjectInput, ProjectDomainUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDomainUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectDomainWhereUniqueInput
    data: XOR<ProjectDomainUpdateWithoutProjectInput, ProjectDomainUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDomainUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectDomainScalarWhereInput
    data: XOR<ProjectDomainUpdateManyMutationInput, ProjectDomainUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectDomainScalarWhereInput = {
    AND?: ProjectDomainScalarWhereInput | ProjectDomainScalarWhereInput[]
    OR?: ProjectDomainScalarWhereInput[]
    NOT?: ProjectDomainScalarWhereInput | ProjectDomainScalarWhereInput[]
    projectId?: StringFilter<"ProjectDomain"> | string
    domainId?: StringFilter<"ProjectDomain"> | string
    createdAt?: DateTimeFilter<"ProjectDomain"> | Date | string
    txtRecord?: StringFilter<"ProjectDomain"> | string
    cname?: StringFilter<"ProjectDomain"> | string
  }

  export type LatestBuildPerProjectUpsertWithoutProjectInput = {
    update: XOR<LatestBuildPerProjectUpdateWithoutProjectInput, LatestBuildPerProjectUncheckedUpdateWithoutProjectInput>
    create: XOR<LatestBuildPerProjectCreateWithoutProjectInput, LatestBuildPerProjectUncheckedCreateWithoutProjectInput>
    where?: LatestBuildPerProjectWhereInput
  }

  export type LatestBuildPerProjectUpdateToOneWithWhereWithoutProjectInput = {
    where?: LatestBuildPerProjectWhereInput
    data: XOR<LatestBuildPerProjectUpdateWithoutProjectInput, LatestBuildPerProjectUncheckedUpdateWithoutProjectInput>
  }

  export type LatestBuildPerProjectUpdateWithoutProjectInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectUncheckedUpdateWithoutProjectInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutBuildInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    user?: UserCreateNestedOneWithoutProjectsInput
    files?: FileCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBuildInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    files?: FileUncheckedCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutProjectInput
    latestBuild?: LatestBuildPerProjectUncheckedCreateNestedOneWithoutProjectInput
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
    files?: FileUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    files?: FileUncheckedUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUncheckedUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectDomainCreateWithoutDomainInput = {
    createdAt?: Date | string
    txtRecord?: string
    cname: string
    project: ProjectCreateNestedOneWithoutProjectDomainInput
  }

  export type ProjectDomainUncheckedCreateWithoutDomainInput = {
    projectId: string
    createdAt?: Date | string
    txtRecord?: string
    cname: string
  }

  export type ProjectDomainCreateOrConnectWithoutDomainInput = {
    where: ProjectDomainWhereUniqueInput
    create: XOR<ProjectDomainCreateWithoutDomainInput, ProjectDomainUncheckedCreateWithoutDomainInput>
  }

  export type ProjectDomainCreateManyDomainInputEnvelope = {
    data: ProjectDomainCreateManyDomainInput | ProjectDomainCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type ProjectWithDomainCreateWithoutDomainInput = {
    projectId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
    latestBuid?: LatestBuildPerProjectDomainCreateNestedOneWithoutProjectWithDomainInput
  }

  export type ProjectWithDomainUncheckedCreateWithoutDomainInput = {
    projectId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
    latestBuid?: LatestBuildPerProjectDomainUncheckedCreateNestedOneWithoutProjectWithDomainInput
  }

  export type ProjectWithDomainCreateOrConnectWithoutDomainInput = {
    where: ProjectWithDomainWhereUniqueInput
    create: XOR<ProjectWithDomainCreateWithoutDomainInput, ProjectWithDomainUncheckedCreateWithoutDomainInput>
  }

  export type ProjectWithDomainCreateManyDomainInputEnvelope = {
    data: ProjectWithDomainCreateManyDomainInput | ProjectWithDomainCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDomainUpsertWithWhereUniqueWithoutDomainInput = {
    where: ProjectDomainWhereUniqueInput
    update: XOR<ProjectDomainUpdateWithoutDomainInput, ProjectDomainUncheckedUpdateWithoutDomainInput>
    create: XOR<ProjectDomainCreateWithoutDomainInput, ProjectDomainUncheckedCreateWithoutDomainInput>
  }

  export type ProjectDomainUpdateWithWhereUniqueWithoutDomainInput = {
    where: ProjectDomainWhereUniqueInput
    data: XOR<ProjectDomainUpdateWithoutDomainInput, ProjectDomainUncheckedUpdateWithoutDomainInput>
  }

  export type ProjectDomainUpdateManyWithWhereWithoutDomainInput = {
    where: ProjectDomainScalarWhereInput
    data: XOR<ProjectDomainUpdateManyMutationInput, ProjectDomainUncheckedUpdateManyWithoutDomainInput>
  }

  export type ProjectWithDomainUpsertWithWhereUniqueWithoutDomainInput = {
    where: ProjectWithDomainWhereUniqueInput
    update: XOR<ProjectWithDomainUpdateWithoutDomainInput, ProjectWithDomainUncheckedUpdateWithoutDomainInput>
    create: XOR<ProjectWithDomainCreateWithoutDomainInput, ProjectWithDomainUncheckedCreateWithoutDomainInput>
  }

  export type ProjectWithDomainUpdateWithWhereUniqueWithoutDomainInput = {
    where: ProjectWithDomainWhereUniqueInput
    data: XOR<ProjectWithDomainUpdateWithoutDomainInput, ProjectWithDomainUncheckedUpdateWithoutDomainInput>
  }

  export type ProjectWithDomainUpdateManyWithWhereWithoutDomainInput = {
    where: ProjectWithDomainScalarWhereInput
    data: XOR<ProjectWithDomainUpdateManyMutationInput, ProjectWithDomainUncheckedUpdateManyWithoutDomainInput>
  }

  export type ProjectWithDomainScalarWhereInput = {
    AND?: ProjectWithDomainScalarWhereInput | ProjectWithDomainScalarWhereInput[]
    OR?: ProjectWithDomainScalarWhereInput[]
    NOT?: ProjectWithDomainScalarWhereInput | ProjectWithDomainScalarWhereInput[]
    projectId?: StringFilter<"ProjectWithDomain"> | string
    domainId?: StringFilter<"ProjectWithDomain"> | string
    txtRecord?: StringFilter<"ProjectWithDomain"> | string
    createdAt?: DateTimeFilter<"ProjectWithDomain"> | Date | string
    cname?: StringFilter<"ProjectWithDomain"> | string
    verified?: BoolFilter<"ProjectWithDomain"> | boolean
    userId?: StringNullableFilter<"ProjectWithDomain"> | string | null
  }

  export type ProjectCreateWithoutProjectDomainInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    user?: UserCreateNestedOneWithoutProjectsInput
    build?: BuildCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutUploaderProjectInput
    latestBuild?: LatestBuildPerProjectCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectDomainInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutUploaderProjectInput
    latestBuild?: LatestBuildPerProjectUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectDomainInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectDomainInput, ProjectUncheckedCreateWithoutProjectDomainInput>
  }

  export type DomainCreateWithoutProjectDomainInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
    projectWithDomain?: ProjectWithDomainCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutProjectDomainInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
    projectWithDomain?: ProjectWithDomainUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutProjectDomainInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutProjectDomainInput, DomainUncheckedCreateWithoutProjectDomainInput>
  }

  export type ProjectUpsertWithoutProjectDomainInput = {
    update: XOR<ProjectUpdateWithoutProjectDomainInput, ProjectUncheckedUpdateWithoutProjectDomainInput>
    create: XOR<ProjectCreateWithoutProjectDomainInput, ProjectUncheckedCreateWithoutProjectDomainInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectDomainInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectDomainInput, ProjectUncheckedUpdateWithoutProjectDomainInput>
  }

  export type ProjectUpdateWithoutProjectDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutProjectsNestedInput
    build?: BuildUpdateManyWithoutProjectNestedInput
    files?: FileUpdateManyWithoutUploaderProjectNestedInput
    latestBuild?: LatestBuildPerProjectUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
    files?: FileUncheckedUpdateManyWithoutUploaderProjectNestedInput
    latestBuild?: LatestBuildPerProjectUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type DomainUpsertWithoutProjectDomainInput = {
    update: XOR<DomainUpdateWithoutProjectDomainInput, DomainUncheckedUpdateWithoutProjectDomainInput>
    create: XOR<DomainCreateWithoutProjectDomainInput, DomainUncheckedCreateWithoutProjectDomainInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutProjectDomainInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutProjectDomainInput, DomainUncheckedUpdateWithoutProjectDomainInput>
  }

  export type DomainUpdateWithoutProjectDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    projectWithDomain?: ProjectWithDomainUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutProjectDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    projectWithDomain?: ProjectWithDomainUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateWithoutProjectWithDomainInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
    ProjectDomain?: ProjectDomainCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutProjectWithDomainInput = {
    id?: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    txtRecord?: string | null
    status?: $Enums.DomainStatus
    error?: string | null
    ProjectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutProjectWithDomainInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutProjectWithDomainInput, DomainUncheckedCreateWithoutProjectWithDomainInput>
  }

  export type LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput = {
    buildId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput = {
    buildId: string
    isLatestBuild: boolean
    publishStatus: $Enums.PublishStatus
    updatedAt: Date | string
  }

  export type LatestBuildPerProjectDomainCreateOrConnectWithoutProjectWithDomainInput = {
    where: LatestBuildPerProjectDomainWhereUniqueInput
    create: XOR<LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput>
  }

  export type DomainUpsertWithoutProjectWithDomainInput = {
    update: XOR<DomainUpdateWithoutProjectWithDomainInput, DomainUncheckedUpdateWithoutProjectWithDomainInput>
    create: XOR<DomainCreateWithoutProjectWithDomainInput, DomainUncheckedCreateWithoutProjectWithDomainInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutProjectWithDomainInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutProjectWithDomainInput, DomainUncheckedUpdateWithoutProjectWithDomainInput>
  }

  export type DomainUpdateWithoutProjectWithDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDomain?: ProjectDomainUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutProjectWithDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDomain?: ProjectDomainUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type LatestBuildPerProjectDomainUpsertWithoutProjectWithDomainInput = {
    update: XOR<LatestBuildPerProjectDomainUpdateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedUpdateWithoutProjectWithDomainInput>
    create: XOR<LatestBuildPerProjectDomainCreateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedCreateWithoutProjectWithDomainInput>
    where?: LatestBuildPerProjectDomainWhereInput
  }

  export type LatestBuildPerProjectDomainUpdateToOneWithWhereWithoutProjectWithDomainInput = {
    where?: LatestBuildPerProjectDomainWhereInput
    data: XOR<LatestBuildPerProjectDomainUpdateWithoutProjectWithDomainInput, LatestBuildPerProjectDomainUncheckedUpdateWithoutProjectWithDomainInput>
  }

  export type LatestBuildPerProjectDomainUpdateWithoutProjectWithDomainInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LatestBuildPerProjectDomainUncheckedUpdateWithoutProjectWithDomainInput = {
    buildId?: StringFieldUpdateOperationsInput | string
    isLatestBuild?: BoolFieldUpdateOperationsInput | boolean
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectWithDomainCreateWithoutLatestBuidInput = {
    projectId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
    domain: DomainCreateNestedOneWithoutProjectWithDomainInput
  }

  export type ProjectWithDomainUncheckedCreateWithoutLatestBuidInput = {
    projectId: string
    domainId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
  }

  export type ProjectWithDomainCreateOrConnectWithoutLatestBuidInput = {
    where: ProjectWithDomainWhereUniqueInput
    create: XOR<ProjectWithDomainCreateWithoutLatestBuidInput, ProjectWithDomainUncheckedCreateWithoutLatestBuidInput>
  }

  export type ProjectWithDomainUpsertWithoutLatestBuidInput = {
    update: XOR<ProjectWithDomainUpdateWithoutLatestBuidInput, ProjectWithDomainUncheckedUpdateWithoutLatestBuidInput>
    create: XOR<ProjectWithDomainCreateWithoutLatestBuidInput, ProjectWithDomainUncheckedCreateWithoutLatestBuidInput>
    where?: ProjectWithDomainWhereInput
  }

  export type ProjectWithDomainUpdateToOneWithWhereWithoutLatestBuidInput = {
    where?: ProjectWithDomainWhereInput
    data: XOR<ProjectWithDomainUpdateWithoutLatestBuidInput, ProjectWithDomainUncheckedUpdateWithoutLatestBuidInput>
  }

  export type ProjectWithDomainUpdateWithoutLatestBuidInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneRequiredWithoutProjectWithDomainNestedInput
  }

  export type ProjectWithDomainUncheckedUpdateWithoutLatestBuidInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateWithoutLatestBuildInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    isDeleted?: boolean
    user?: UserCreateNestedOneWithoutProjectsInput
    build?: BuildCreateNestedManyWithoutProjectInput
    files?: FileCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLatestBuildInput = {
    id?: string
    createdAt?: Date | string
    title: string
    domain: string
    userId?: string | null
    isDeleted?: boolean
    build?: BuildUncheckedCreateNestedManyWithoutProjectInput
    files?: FileUncheckedCreateNestedManyWithoutUploaderProjectInput
    projectDomain?: ProjectDomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLatestBuildInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLatestBuildInput, ProjectUncheckedCreateWithoutLatestBuildInput>
  }

  export type ProjectUpsertWithoutLatestBuildInput = {
    update: XOR<ProjectUpdateWithoutLatestBuildInput, ProjectUncheckedUpdateWithoutLatestBuildInput>
    create: XOR<ProjectCreateWithoutLatestBuildInput, ProjectUncheckedCreateWithoutLatestBuildInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLatestBuildInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLatestBuildInput, ProjectUncheckedUpdateWithoutLatestBuildInput>
  }

  export type ProjectUpdateWithoutLatestBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutProjectsNestedInput
    build?: BuildUpdateManyWithoutProjectNestedInput
    files?: FileUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLatestBuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
    files?: FileUncheckedUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUncheckedUpdateManyWithoutProjectNestedInput
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

  export type AssetCreateManyFileInput = {
    id?: string
    projectId: string
  }

  export type AssetUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
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
    files?: FileUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    build?: BuildUncheckedUpdateManyWithoutProjectNestedInput
    files?: FileUncheckedUpdateManyWithoutUploaderProjectNestedInput
    projectDomain?: ProjectDomainUncheckedUpdateManyWithoutProjectNestedInput
    latestBuild?: LatestBuildPerProjectUncheckedUpdateOneWithoutProjectNestedInput
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
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pages: string
    breakpoints?: string
    styles?: string
    styleSources?: string
    styleSourceSelections?: string
    props?: string
    instances?: string
    deployment?: string | null
    publishStatus?: $Enums.PublishStatus
  }

  export type FileCreateManyUploaderProjectInput = {
    name: string
    format: string
    size: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: string
    status?: $Enums.UploadStatus
    isDeleted?: boolean
  }

  export type ProjectDomainCreateManyProjectInput = {
    domainId: string
    createdAt?: Date | string
    txtRecord?: string
    cname: string
  }

  export type BuildUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
  }

  export type BuildUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
  }

  export type BuildUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: StringFieldUpdateOperationsInput | string
    breakpoints?: StringFieldUpdateOperationsInput | string
    styles?: StringFieldUpdateOperationsInput | string
    styleSources?: StringFieldUpdateOperationsInput | string
    styleSourceSelections?: StringFieldUpdateOperationsInput | string
    props?: StringFieldUpdateOperationsInput | string
    instances?: StringFieldUpdateOperationsInput | string
    deployment?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
  }

  export type FileUpdateWithoutUploaderProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    assets?: AssetUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutUploaderProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    assets?: AssetUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateManyWithoutUploaderProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: StringFieldUpdateOperationsInput | string
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectDomainUpdateWithoutProjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
    domain?: DomainUpdateOneRequiredWithoutProjectDomainNestedInput
  }

  export type ProjectDomainUncheckedUpdateWithoutProjectInput = {
    domainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDomainUncheckedUpdateManyWithoutProjectInput = {
    domainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDomainCreateManyDomainInput = {
    projectId: string
    createdAt?: Date | string
    txtRecord?: string
    cname: string
  }

  export type ProjectWithDomainCreateManyDomainInput = {
    projectId: string
    txtRecord: string
    createdAt: Date | string
    cname: string
    verified: boolean
    userId?: string | null
  }

  export type ProjectDomainUpdateWithoutDomainInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutProjectDomainNestedInput
  }

  export type ProjectDomainUncheckedUpdateWithoutDomainInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDomainUncheckedUpdateManyWithoutDomainInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    cname?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectWithDomainUpdateWithoutDomainInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBuid?: LatestBuildPerProjectDomainUpdateOneWithoutProjectWithDomainNestedInput
  }

  export type ProjectWithDomainUncheckedUpdateWithoutDomainInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBuid?: LatestBuildPerProjectDomainUncheckedUpdateOneWithoutProjectWithDomainNestedInput
  }

  export type ProjectWithDomainUncheckedUpdateManyWithoutDomainInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    txtRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileCountOutputTypeDefaultArgs instead
     */
    export type FileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainCountOutputTypeDefaultArgs instead
     */
    export type DomainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
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
     * @deprecated Use AuthorizationTokenDefaultArgs instead
     */
    export type AuthorizationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorizationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainDefaultArgs instead
     */
    export type DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDomainDefaultArgs instead
     */
    export type ProjectDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectWithDomainDefaultArgs instead
     */
    export type ProjectWithDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectWithDomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LatestBuildPerProjectDomainDefaultArgs instead
     */
    export type LatestBuildPerProjectDomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LatestBuildPerProjectDomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LatestBuildPerProjectDefaultArgs instead
     */
    export type LatestBuildPerProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LatestBuildPerProjectDefaultArgs<ExtArgs>
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
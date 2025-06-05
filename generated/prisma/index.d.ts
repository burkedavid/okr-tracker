
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Cycle
 * 
 */
export type Cycle = $Result.DefaultSelection<Prisma.$CyclePayload>
/**
 * Model Objective
 * 
 */
export type Objective = $Result.DefaultSelection<Prisma.$ObjectivePayload>
/**
 * Model KeyResult
 * 
 */
export type KeyResult = $Result.DefaultSelection<Prisma.$KeyResultPayload>
/**
 * Model ProgressUpdate
 * 
 */
export type ProgressUpdate = $Result.DefaultSelection<Prisma.$ProgressUpdatePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ObjectiveType: {
  COMPANY: 'COMPANY',
  TEAM: 'TEAM',
  PERSONAL: 'PERSONAL'
};

export type ObjectiveType = (typeof ObjectiveType)[keyof typeof ObjectiveType]


export const Status: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  AT_RISK: 'AT_RISK',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  EXTENDED: 'EXTENDED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const MetricType: {
  PERCENTAGE: 'PERCENTAGE',
  NUMBER: 'NUMBER',
  CURRENCY: 'CURRENCY',
  BOOLEAN: 'BOOLEAN'
};

export type MetricType = (typeof MetricType)[keyof typeof MetricType]


export const ReviewType: {
  PROGRESS: 'PROGRESS',
  MID_CYCLE: 'MID_CYCLE',
  END_CYCLE: 'END_CYCLE',
  ANNUAL: 'ANNUAL'
};

export type ReviewType = (typeof ReviewType)[keyof typeof ReviewType]


export const NotificationType: {
  DEADLINE_REMINDER: 'DEADLINE_REMINDER',
  PROGRESS_REQUEST: 'PROGRESS_REQUEST',
  NEW_ASSIGNMENT: 'NEW_ASSIGNMENT',
  REVIEW_REMINDER: 'REVIEW_REMINDER',
  ACHIEVEMENT: 'ACHIEVEMENT',
  ESCALATION: 'ESCALATION'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ObjectiveType = $Enums.ObjectiveType

export const ObjectiveType: typeof $Enums.ObjectiveType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type MetricType = $Enums.MetricType

export const MetricType: typeof $Enums.MetricType

export type ReviewType = $Enums.ReviewType

export const ReviewType: typeof $Enums.ReviewType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cycle`: Exposes CRUD operations for the **Cycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cycles
    * const cycles = await prisma.cycle.findMany()
    * ```
    */
  get cycle(): Prisma.CycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objective`: Exposes CRUD operations for the **Objective** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objectives
    * const objectives = await prisma.objective.findMany()
    * ```
    */
  get objective(): Prisma.ObjectiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyResult`: Exposes CRUD operations for the **KeyResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeyResults
    * const keyResults = await prisma.keyResult.findMany()
    * ```
    */
  get keyResult(): Prisma.KeyResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressUpdate`: Exposes CRUD operations for the **ProgressUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressUpdates
    * const progressUpdates = await prisma.progressUpdate.findMany()
    * ```
    */
  get progressUpdate(): Prisma.ProgressUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Department: 'Department',
    Cycle: 'Cycle',
    Objective: 'Objective',
    KeyResult: 'KeyResult',
    ProgressUpdate: 'ProgressUpdate',
    Review: 'Review',
    Notification: 'Notification',
    Template: 'Template'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "department" | "cycle" | "objective" | "keyResult" | "progressUpdate" | "review" | "notification" | "template"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Cycle: {
        payload: Prisma.$CyclePayload<ExtArgs>
        fields: Prisma.CycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          findFirst: {
            args: Prisma.CycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          findMany: {
            args: Prisma.CycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          create: {
            args: Prisma.CycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          createMany: {
            args: Prisma.CycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          delete: {
            args: Prisma.CycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          update: {
            args: Prisma.CycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          deleteMany: {
            args: Prisma.CycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          upsert: {
            args: Prisma.CycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          aggregate: {
            args: Prisma.CycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycle>
          }
          groupBy: {
            args: Prisma.CycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleCountArgs<ExtArgs>
            result: $Utils.Optional<CycleCountAggregateOutputType> | number
          }
        }
      }
      Objective: {
        payload: Prisma.$ObjectivePayload<ExtArgs>
        fields: Prisma.ObjectiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>
          }
          findFirst: {
            args: Prisma.ObjectiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>
          }
          findMany: {
            args: Prisma.ObjectiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>[]
          }
          create: {
            args: Prisma.ObjectiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>
          }
          createMany: {
            args: Prisma.ObjectiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjectiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>[]
          }
          delete: {
            args: Prisma.ObjectiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>
          }
          update: {
            args: Prisma.ObjectiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>
          }
          deleteMany: {
            args: Prisma.ObjectiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjectiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>[]
          }
          upsert: {
            args: Prisma.ObjectiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectivePayload>
          }
          aggregate: {
            args: Prisma.ObjectiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjective>
          }
          groupBy: {
            args: Prisma.ObjectiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjectiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectiveCountArgs<ExtArgs>
            result: $Utils.Optional<ObjectiveCountAggregateOutputType> | number
          }
        }
      }
      KeyResult: {
        payload: Prisma.$KeyResultPayload<ExtArgs>
        fields: Prisma.KeyResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>
          }
          findFirst: {
            args: Prisma.KeyResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>
          }
          findMany: {
            args: Prisma.KeyResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>[]
          }
          create: {
            args: Prisma.KeyResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>
          }
          createMany: {
            args: Prisma.KeyResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>[]
          }
          delete: {
            args: Prisma.KeyResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>
          }
          update: {
            args: Prisma.KeyResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>
          }
          deleteMany: {
            args: Prisma.KeyResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>[]
          }
          upsert: {
            args: Prisma.KeyResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyResultPayload>
          }
          aggregate: {
            args: Prisma.KeyResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyResult>
          }
          groupBy: {
            args: Prisma.KeyResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyResultCountArgs<ExtArgs>
            result: $Utils.Optional<KeyResultCountAggregateOutputType> | number
          }
        }
      }
      ProgressUpdate: {
        payload: Prisma.$ProgressUpdatePayload<ExtArgs>
        fields: Prisma.ProgressUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          findFirst: {
            args: Prisma.ProgressUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          findMany: {
            args: Prisma.ProgressUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          create: {
            args: Prisma.ProgressUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          createMany: {
            args: Prisma.ProgressUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          delete: {
            args: Prisma.ProgressUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          update: {
            args: Prisma.ProgressUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          deleteMany: {
            args: Prisma.ProgressUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          upsert: {
            args: Prisma.ProgressUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          aggregate: {
            args: Prisma.ProgressUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressUpdate>
          }
          groupBy: {
            args: Prisma.ProgressUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressUpdateCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    department?: DepartmentOmit
    cycle?: CycleOmit
    objective?: ObjectiveOmit
    keyResult?: KeyResultOmit
    progressUpdate?: ProgressUpdateOmit
    review?: ReviewOmit
    notification?: NotificationOmit
    template?: TemplateOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employees: number
    ownedObjectives: number
    contributedObjectives: number
    extendedObjectives: number
    keyResults: number
    progressUpdates: number
    reviews: number
    reviewsReceived: number
    notifications: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | UserCountOutputTypeCountEmployeesArgs
    ownedObjectives?: boolean | UserCountOutputTypeCountOwnedObjectivesArgs
    contributedObjectives?: boolean | UserCountOutputTypeCountContributedObjectivesArgs
    extendedObjectives?: boolean | UserCountOutputTypeCountExtendedObjectivesArgs
    keyResults?: boolean | UserCountOutputTypeCountKeyResultsArgs
    progressUpdates?: boolean | UserCountOutputTypeCountProgressUpdatesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectiveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContributedObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectiveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExtendedObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectiveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKeyResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    children: number
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | DepartmentCountOutputTypeCountChildrenArgs
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CycleCountOutputType
   */

  export type CycleCountOutputType = {
    objectives: number
  }

  export type CycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectives?: boolean | CycleCountOutputTypeCountObjectivesArgs
  }

  // Custom InputTypes
  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleCountOutputType
     */
    select?: CycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeCountObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectiveWhereInput
  }


  /**
   * Count Type ObjectiveCountOutputType
   */

  export type ObjectiveCountOutputType = {
    contributors: number
    children: number
    keyResults: number
    reviews: number
  }

  export type ObjectiveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributors?: boolean | ObjectiveCountOutputTypeCountContributorsArgs
    children?: boolean | ObjectiveCountOutputTypeCountChildrenArgs
    keyResults?: boolean | ObjectiveCountOutputTypeCountKeyResultsArgs
    reviews?: boolean | ObjectiveCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ObjectiveCountOutputType without action
   */
  export type ObjectiveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectiveCountOutputType
     */
    select?: ObjectiveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjectiveCountOutputType without action
   */
  export type ObjectiveCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ObjectiveCountOutputType without action
   */
  export type ObjectiveCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectiveWhereInput
  }

  /**
   * ObjectiveCountOutputType without action
   */
  export type ObjectiveCountOutputTypeCountKeyResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyResultWhereInput
  }

  /**
   * ObjectiveCountOutputType without action
   */
  export type ObjectiveCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type KeyResultCountOutputType
   */

  export type KeyResultCountOutputType = {
    progressUpdates: number
  }

  export type KeyResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressUpdates?: boolean | KeyResultCountOutputTypeCountProgressUpdatesArgs
  }

  // Custom InputTypes
  /**
   * KeyResultCountOutputType without action
   */
  export type KeyResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResultCountOutputType
     */
    select?: KeyResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeyResultCountOutputType without action
   */
  export type KeyResultCountOutputTypeCountProgressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    password: string | null
    role: $Enums.Role | null
    position: string | null
    avatar: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    departmentId: string | null
    managerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    position: string | null
    avatar: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    departmentId: string | null
    managerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    position: number
    avatar: number
    active: number
    createdAt: number
    updatedAt: number
    departmentId: number
    managerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    position?: true
    avatar?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    departmentId?: true
    managerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    position?: true
    avatar?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    departmentId?: true
    managerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    position?: true
    avatar?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    departmentId?: true
    managerId?: true
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
    email: string
    name: string
    password: string
    role: $Enums.Role
    position: string | null
    avatar: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    departmentId: string | null
    managerId: string | null
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
    name?: boolean
    password?: boolean
    role?: boolean
    position?: boolean
    avatar?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    ownedObjectives?: boolean | User$ownedObjectivesArgs<ExtArgs>
    contributedObjectives?: boolean | User$contributedObjectivesArgs<ExtArgs>
    extendedObjectives?: boolean | User$extendedObjectivesArgs<ExtArgs>
    keyResults?: boolean | User$keyResultsArgs<ExtArgs>
    progressUpdates?: boolean | User$progressUpdatesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    position?: boolean
    avatar?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    position?: boolean
    avatar?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    position?: boolean
    avatar?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "position" | "avatar" | "active" | "createdAt" | "updatedAt" | "departmentId" | "managerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    ownedObjectives?: boolean | User$ownedObjectivesArgs<ExtArgs>
    contributedObjectives?: boolean | User$contributedObjectivesArgs<ExtArgs>
    extendedObjectives?: boolean | User$extendedObjectivesArgs<ExtArgs>
    keyResults?: boolean | User$keyResultsArgs<ExtArgs>
    progressUpdates?: boolean | User$progressUpdatesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      manager: Prisma.$UserPayload<ExtArgs> | null
      employees: Prisma.$UserPayload<ExtArgs>[]
      ownedObjectives: Prisma.$ObjectivePayload<ExtArgs>[]
      contributedObjectives: Prisma.$ObjectivePayload<ExtArgs>[]
      extendedObjectives: Prisma.$ObjectivePayload<ExtArgs>[]
      keyResults: Prisma.$KeyResultPayload<ExtArgs>[]
      progressUpdates: Prisma.$ProgressUpdatePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.Role
      position: string | null
      avatar: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
      departmentId: string | null
      managerId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employees<T extends User$employeesArgs<ExtArgs> = {}>(args?: Subset<T, User$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedObjectives<T extends User$ownedObjectivesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedObjectivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributedObjectives<T extends User$contributedObjectivesArgs<ExtArgs> = {}>(args?: Subset<T, User$contributedObjectivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    extendedObjectives<T extends User$extendedObjectivesArgs<ExtArgs> = {}>(args?: Subset<T, User$extendedObjectivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keyResults<T extends User$keyResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$keyResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressUpdates<T extends User$progressUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, User$progressUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly position: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly departmentId: FieldRef<"User", 'String'>
    readonly managerId: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.employees
   */
  export type User$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User.ownedObjectives
   */
  export type User$ownedObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    where?: ObjectiveWhereInput
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    cursor?: ObjectiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * User.contributedObjectives
   */
  export type User$contributedObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    where?: ObjectiveWhereInput
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    cursor?: ObjectiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * User.extendedObjectives
   */
  export type User$extendedObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    where?: ObjectiveWhereInput
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    cursor?: ObjectiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * User.keyResults
   */
  export type User$keyResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    where?: KeyResultWhereInput
    orderBy?: KeyResultOrderByWithRelationInput | KeyResultOrderByWithRelationInput[]
    cursor?: KeyResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyResultScalarFieldEnum | KeyResultScalarFieldEnum[]
  }

  /**
   * User.progressUpdates
   */
  export type User$progressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    cursor?: ProgressUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    parentId: string | null
    headId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    parentId: string | null
    headId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    parentId: number
    headId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    headId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    headId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    headId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    parentId: string | null
    headId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    headId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Department$parentArgs<ExtArgs>
    children?: boolean | Department$childrenArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    headId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Department$parentArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    headId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Department$parentArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    parentId?: boolean
    headId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parentId" | "headId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Department$parentArgs<ExtArgs>
    children?: boolean | Department$childrenArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Department$parentArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Department$parentArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      parent: Prisma.$DepartmentPayload<ExtArgs> | null
      children: Prisma.$DepartmentPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      parentId: string | null
      headId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Department$parentArgs<ExtArgs> = {}>(args?: Subset<T, Department$parentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Department$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Department$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly parentId: FieldRef<"Department", 'String'>
    readonly headId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.parent
   */
  export type Department$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Department.children
   */
  export type Department$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Cycle
   */

  export type AggregateCycle = {
    _count: CycleCountAggregateOutputType | null
    _min: CycleMinAggregateOutputType | null
    _max: CycleMaxAggregateOutputType | null
  }

  export type CycleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CycleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CycleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CycleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CycleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CycleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cycle to aggregate.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cycles
    **/
    _count?: true | CycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleMaxAggregateInputType
  }

  export type GetCycleAggregateType<T extends CycleAggregateArgs> = {
        [P in keyof T & keyof AggregateCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycle[P]>
      : GetScalarType<T[P], AggregateCycle[P]>
  }




  export type CycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleWhereInput
    orderBy?: CycleOrderByWithAggregationInput | CycleOrderByWithAggregationInput[]
    by: CycleScalarFieldEnum[] | CycleScalarFieldEnum
    having?: CycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleCountAggregateInputType | true
    _min?: CycleMinAggregateInputType
    _max?: CycleMaxAggregateInputType
  }

  export type CycleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    startDate: Date
    endDate: Date
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CycleCountAggregateOutputType | null
    _min: CycleMinAggregateOutputType | null
    _max: CycleMaxAggregateOutputType | null
  }

  type GetCycleGroupByPayload<T extends CycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleGroupByOutputType[P]>
            : GetScalarType<T[P], CycleGroupByOutputType[P]>
        }
      >
    >


  export type CycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objectives?: boolean | Cycle$objectivesArgs<ExtArgs>
    _count?: boolean | CycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["cycle"]>
  export type CycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectives?: boolean | Cycle$objectivesArgs<ExtArgs>
    _count?: boolean | CycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cycle"
    objects: {
      objectives: Prisma.$ObjectivePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      startDate: Date
      endDate: Date
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cycle"]>
    composites: {}
  }

  type CycleGetPayload<S extends boolean | null | undefined | CycleDefaultArgs> = $Result.GetResult<Prisma.$CyclePayload, S>

  type CycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CycleCountAggregateInputType | true
    }

  export interface CycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cycle'], meta: { name: 'Cycle' } }
    /**
     * Find zero or one Cycle that matches the filter.
     * @param {CycleFindUniqueArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleFindUniqueArgs>(args: SelectSubset<T, CycleFindUniqueArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CycleFindUniqueOrThrowArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindFirstArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleFindFirstArgs>(args?: SelectSubset<T, CycleFindFirstArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindFirstOrThrowArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cycles
     * const cycles = await prisma.cycle.findMany()
     * 
     * // Get first 10 Cycles
     * const cycles = await prisma.cycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleWithIdOnly = await prisma.cycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleFindManyArgs>(args?: SelectSubset<T, CycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cycle.
     * @param {CycleCreateArgs} args - Arguments to create a Cycle.
     * @example
     * // Create one Cycle
     * const Cycle = await prisma.cycle.create({
     *   data: {
     *     // ... data to create a Cycle
     *   }
     * })
     * 
     */
    create<T extends CycleCreateArgs>(args: SelectSubset<T, CycleCreateArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cycles.
     * @param {CycleCreateManyArgs} args - Arguments to create many Cycles.
     * @example
     * // Create many Cycles
     * const cycle = await prisma.cycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleCreateManyArgs>(args?: SelectSubset<T, CycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cycles and returns the data saved in the database.
     * @param {CycleCreateManyAndReturnArgs} args - Arguments to create many Cycles.
     * @example
     * // Create many Cycles
     * const cycle = await prisma.cycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cycles and only return the `id`
     * const cycleWithIdOnly = await prisma.cycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cycle.
     * @param {CycleDeleteArgs} args - Arguments to delete one Cycle.
     * @example
     * // Delete one Cycle
     * const Cycle = await prisma.cycle.delete({
     *   where: {
     *     // ... filter to delete one Cycle
     *   }
     * })
     * 
     */
    delete<T extends CycleDeleteArgs>(args: SelectSubset<T, CycleDeleteArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cycle.
     * @param {CycleUpdateArgs} args - Arguments to update one Cycle.
     * @example
     * // Update one Cycle
     * const cycle = await prisma.cycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleUpdateArgs>(args: SelectSubset<T, CycleUpdateArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cycles.
     * @param {CycleDeleteManyArgs} args - Arguments to filter Cycles to delete.
     * @example
     * // Delete a few Cycles
     * const { count } = await prisma.cycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleDeleteManyArgs>(args?: SelectSubset<T, CycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cycles
     * const cycle = await prisma.cycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleUpdateManyArgs>(args: SelectSubset<T, CycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cycles and returns the data updated in the database.
     * @param {CycleUpdateManyAndReturnArgs} args - Arguments to update many Cycles.
     * @example
     * // Update many Cycles
     * const cycle = await prisma.cycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cycles and only return the `id`
     * const cycleWithIdOnly = await prisma.cycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CycleUpdateManyAndReturnArgs>(args: SelectSubset<T, CycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cycle.
     * @param {CycleUpsertArgs} args - Arguments to update or create a Cycle.
     * @example
     * // Update or create a Cycle
     * const cycle = await prisma.cycle.upsert({
     *   create: {
     *     // ... data to create a Cycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cycle we want to update
     *   }
     * })
     */
    upsert<T extends CycleUpsertArgs>(args: SelectSubset<T, CycleUpsertArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCountArgs} args - Arguments to filter Cycles to count.
     * @example
     * // Count the number of Cycles
     * const count = await prisma.cycle.count({
     *   where: {
     *     // ... the filter for the Cycles we want to count
     *   }
     * })
    **/
    count<T extends CycleCountArgs>(
      args?: Subset<T, CycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CycleAggregateArgs>(args: Subset<T, CycleAggregateArgs>): Prisma.PrismaPromise<GetCycleAggregateType<T>>

    /**
     * Group by Cycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleGroupByArgs} args - Group by arguments.
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
      T extends CycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleGroupByArgs['orderBy'] }
        : { orderBy?: CycleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cycle model
   */
  readonly fields: CycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objectives<T extends Cycle$objectivesArgs<ExtArgs> = {}>(args?: Subset<T, Cycle$objectivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cycle model
   */
  interface CycleFieldRefs {
    readonly id: FieldRef<"Cycle", 'String'>
    readonly name: FieldRef<"Cycle", 'String'>
    readonly description: FieldRef<"Cycle", 'String'>
    readonly startDate: FieldRef<"Cycle", 'DateTime'>
    readonly endDate: FieldRef<"Cycle", 'DateTime'>
    readonly active: FieldRef<"Cycle", 'Boolean'>
    readonly createdAt: FieldRef<"Cycle", 'DateTime'>
    readonly updatedAt: FieldRef<"Cycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cycle findUnique
   */
  export type CycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle findUniqueOrThrow
   */
  export type CycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle findFirst
   */
  export type CycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cycles.
     */
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle findFirstOrThrow
   */
  export type CycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cycles.
     */
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle findMany
   */
  export type CycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycles to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle create
   */
  export type CycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The data needed to create a Cycle.
     */
    data: XOR<CycleCreateInput, CycleUncheckedCreateInput>
  }

  /**
   * Cycle createMany
   */
  export type CycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cycles.
     */
    data: CycleCreateManyInput | CycleCreateManyInput[]
  }

  /**
   * Cycle createManyAndReturn
   */
  export type CycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * The data used to create many Cycles.
     */
    data: CycleCreateManyInput | CycleCreateManyInput[]
  }

  /**
   * Cycle update
   */
  export type CycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The data needed to update a Cycle.
     */
    data: XOR<CycleUpdateInput, CycleUncheckedUpdateInput>
    /**
     * Choose, which Cycle to update.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle updateMany
   */
  export type CycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cycles.
     */
    data: XOR<CycleUpdateManyMutationInput, CycleUncheckedUpdateManyInput>
    /**
     * Filter which Cycles to update
     */
    where?: CycleWhereInput
    /**
     * Limit how many Cycles to update.
     */
    limit?: number
  }

  /**
   * Cycle updateManyAndReturn
   */
  export type CycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * The data used to update Cycles.
     */
    data: XOR<CycleUpdateManyMutationInput, CycleUncheckedUpdateManyInput>
    /**
     * Filter which Cycles to update
     */
    where?: CycleWhereInput
    /**
     * Limit how many Cycles to update.
     */
    limit?: number
  }

  /**
   * Cycle upsert
   */
  export type CycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The filter to search for the Cycle to update in case it exists.
     */
    where: CycleWhereUniqueInput
    /**
     * In case the Cycle found by the `where` argument doesn't exist, create a new Cycle with this data.
     */
    create: XOR<CycleCreateInput, CycleUncheckedCreateInput>
    /**
     * In case the Cycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleUpdateInput, CycleUncheckedUpdateInput>
  }

  /**
   * Cycle delete
   */
  export type CycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter which Cycle to delete.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle deleteMany
   */
  export type CycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cycles to delete
     */
    where?: CycleWhereInput
    /**
     * Limit how many Cycles to delete.
     */
    limit?: number
  }

  /**
   * Cycle.objectives
   */
  export type Cycle$objectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    where?: ObjectiveWhereInput
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    cursor?: ObjectiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * Cycle without action
   */
  export type CycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
  }


  /**
   * Model Objective
   */

  export type AggregateObjective = {
    _count: ObjectiveCountAggregateOutputType | null
    _avg: ObjectiveAvgAggregateOutputType | null
    _sum: ObjectiveSumAggregateOutputType | null
    _min: ObjectiveMinAggregateOutputType | null
    _max: ObjectiveMaxAggregateOutputType | null
  }

  export type ObjectiveAvgAggregateOutputType = {
    weight: number | null
  }

  export type ObjectiveSumAggregateOutputType = {
    weight: number | null
  }

  export type ObjectiveMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.ObjectiveType | null
    status: $Enums.Status | null
    weight: number | null
    wasMissed: boolean | null
    originalEndDate: Date | null
    extendedDeadline: Date | null
    extensionReason: string | null
    missedReason: string | null
    dateExtended: Date | null
    extendedBy: string | null
    ownerId: string | null
    cycleId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObjectiveMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.ObjectiveType | null
    status: $Enums.Status | null
    weight: number | null
    wasMissed: boolean | null
    originalEndDate: Date | null
    extendedDeadline: Date | null
    extensionReason: string | null
    missedReason: string | null
    dateExtended: Date | null
    extendedBy: string | null
    ownerId: string | null
    cycleId: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObjectiveCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    status: number
    weight: number
    wasMissed: number
    originalEndDate: number
    extendedDeadline: number
    extensionReason: number
    missedReason: number
    dateExtended: number
    extendedBy: number
    ownerId: number
    cycleId: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObjectiveAvgAggregateInputType = {
    weight?: true
  }

  export type ObjectiveSumAggregateInputType = {
    weight?: true
  }

  export type ObjectiveMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    weight?: true
    wasMissed?: true
    originalEndDate?: true
    extendedDeadline?: true
    extensionReason?: true
    missedReason?: true
    dateExtended?: true
    extendedBy?: true
    ownerId?: true
    cycleId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObjectiveMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    weight?: true
    wasMissed?: true
    originalEndDate?: true
    extendedDeadline?: true
    extensionReason?: true
    missedReason?: true
    dateExtended?: true
    extendedBy?: true
    ownerId?: true
    cycleId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObjectiveCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    weight?: true
    wasMissed?: true
    originalEndDate?: true
    extendedDeadline?: true
    extensionReason?: true
    missedReason?: true
    dateExtended?: true
    extendedBy?: true
    ownerId?: true
    cycleId?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObjectiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objective to aggregate.
     */
    where?: ObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objectives to fetch.
     */
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objectives
    **/
    _count?: true | ObjectiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjectiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjectiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectiveMaxAggregateInputType
  }

  export type GetObjectiveAggregateType<T extends ObjectiveAggregateArgs> = {
        [P in keyof T & keyof AggregateObjective]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjective[P]>
      : GetScalarType<T[P], AggregateObjective[P]>
  }




  export type ObjectiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectiveWhereInput
    orderBy?: ObjectiveOrderByWithAggregationInput | ObjectiveOrderByWithAggregationInput[]
    by: ObjectiveScalarFieldEnum[] | ObjectiveScalarFieldEnum
    having?: ObjectiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectiveCountAggregateInputType | true
    _avg?: ObjectiveAvgAggregateInputType
    _sum?: ObjectiveSumAggregateInputType
    _min?: ObjectiveMinAggregateInputType
    _max?: ObjectiveMaxAggregateInputType
  }

  export type ObjectiveGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.ObjectiveType
    status: $Enums.Status
    weight: number | null
    wasMissed: boolean | null
    originalEndDate: Date | null
    extendedDeadline: Date | null
    extensionReason: string | null
    missedReason: string | null
    dateExtended: Date | null
    extendedBy: string | null
    ownerId: string
    cycleId: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ObjectiveCountAggregateOutputType | null
    _avg: ObjectiveAvgAggregateOutputType | null
    _sum: ObjectiveSumAggregateOutputType | null
    _min: ObjectiveMinAggregateOutputType | null
    _max: ObjectiveMaxAggregateOutputType | null
  }

  type GetObjectiveGroupByPayload<T extends ObjectiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectiveGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectiveGroupByOutputType[P]>
        }
      >
    >


  export type ObjectiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    weight?: boolean
    wasMissed?: boolean
    originalEndDate?: boolean
    extendedDeadline?: boolean
    extensionReason?: boolean
    missedReason?: boolean
    dateExtended?: boolean
    extendedBy?: boolean
    ownerId?: boolean
    cycleId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extendedByUser?: boolean | Objective$extendedByUserArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    contributors?: boolean | Objective$contributorsArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    parent?: boolean | Objective$parentArgs<ExtArgs>
    children?: boolean | Objective$childrenArgs<ExtArgs>
    keyResults?: boolean | Objective$keyResultsArgs<ExtArgs>
    reviews?: boolean | Objective$reviewsArgs<ExtArgs>
    _count?: boolean | ObjectiveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objective"]>

  export type ObjectiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    weight?: boolean
    wasMissed?: boolean
    originalEndDate?: boolean
    extendedDeadline?: boolean
    extensionReason?: boolean
    missedReason?: boolean
    dateExtended?: boolean
    extendedBy?: boolean
    ownerId?: boolean
    cycleId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extendedByUser?: boolean | Objective$extendedByUserArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    parent?: boolean | Objective$parentArgs<ExtArgs>
  }, ExtArgs["result"]["objective"]>

  export type ObjectiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    weight?: boolean
    wasMissed?: boolean
    originalEndDate?: boolean
    extendedDeadline?: boolean
    extensionReason?: boolean
    missedReason?: boolean
    dateExtended?: boolean
    extendedBy?: boolean
    ownerId?: boolean
    cycleId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extendedByUser?: boolean | Objective$extendedByUserArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    parent?: boolean | Objective$parentArgs<ExtArgs>
  }, ExtArgs["result"]["objective"]>

  export type ObjectiveSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    weight?: boolean
    wasMissed?: boolean
    originalEndDate?: boolean
    extendedDeadline?: boolean
    extensionReason?: boolean
    missedReason?: boolean
    dateExtended?: boolean
    extendedBy?: boolean
    ownerId?: boolean
    cycleId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObjectiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "status" | "weight" | "wasMissed" | "originalEndDate" | "extendedDeadline" | "extensionReason" | "missedReason" | "dateExtended" | "extendedBy" | "ownerId" | "cycleId" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["objective"]>
  export type ObjectiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extendedByUser?: boolean | Objective$extendedByUserArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    contributors?: boolean | Objective$contributorsArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    parent?: boolean | Objective$parentArgs<ExtArgs>
    children?: boolean | Objective$childrenArgs<ExtArgs>
    keyResults?: boolean | Objective$keyResultsArgs<ExtArgs>
    reviews?: boolean | Objective$reviewsArgs<ExtArgs>
    _count?: boolean | ObjectiveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObjectiveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extendedByUser?: boolean | Objective$extendedByUserArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    parent?: boolean | Objective$parentArgs<ExtArgs>
  }
  export type ObjectiveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extendedByUser?: boolean | Objective$extendedByUserArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    parent?: boolean | Objective$parentArgs<ExtArgs>
  }

  export type $ObjectivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Objective"
    objects: {
      extendedByUser: Prisma.$UserPayload<ExtArgs> | null
      owner: Prisma.$UserPayload<ExtArgs>
      contributors: Prisma.$UserPayload<ExtArgs>[]
      cycle: Prisma.$CyclePayload<ExtArgs>
      parent: Prisma.$ObjectivePayload<ExtArgs> | null
      children: Prisma.$ObjectivePayload<ExtArgs>[]
      keyResults: Prisma.$KeyResultPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.ObjectiveType
      status: $Enums.Status
      weight: number | null
      wasMissed: boolean | null
      originalEndDate: Date | null
      extendedDeadline: Date | null
      extensionReason: string | null
      missedReason: string | null
      dateExtended: Date | null
      extendedBy: string | null
      ownerId: string
      cycleId: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["objective"]>
    composites: {}
  }

  type ObjectiveGetPayload<S extends boolean | null | undefined | ObjectiveDefaultArgs> = $Result.GetResult<Prisma.$ObjectivePayload, S>

  type ObjectiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjectiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjectiveCountAggregateInputType | true
    }

  export interface ObjectiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Objective'], meta: { name: 'Objective' } }
    /**
     * Find zero or one Objective that matches the filter.
     * @param {ObjectiveFindUniqueArgs} args - Arguments to find a Objective
     * @example
     * // Get one Objective
     * const objective = await prisma.objective.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjectiveFindUniqueArgs>(args: SelectSubset<T, ObjectiveFindUniqueArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Objective that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjectiveFindUniqueOrThrowArgs} args - Arguments to find a Objective
     * @example
     * // Get one Objective
     * const objective = await prisma.objective.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjectiveFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjectiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objective that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveFindFirstArgs} args - Arguments to find a Objective
     * @example
     * // Get one Objective
     * const objective = await prisma.objective.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjectiveFindFirstArgs>(args?: SelectSubset<T, ObjectiveFindFirstArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objective that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveFindFirstOrThrowArgs} args - Arguments to find a Objective
     * @example
     * // Get one Objective
     * const objective = await prisma.objective.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjectiveFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjectiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objectives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objectives
     * const objectives = await prisma.objective.findMany()
     * 
     * // Get first 10 Objectives
     * const objectives = await prisma.objective.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectiveWithIdOnly = await prisma.objective.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjectiveFindManyArgs>(args?: SelectSubset<T, ObjectiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Objective.
     * @param {ObjectiveCreateArgs} args - Arguments to create a Objective.
     * @example
     * // Create one Objective
     * const Objective = await prisma.objective.create({
     *   data: {
     *     // ... data to create a Objective
     *   }
     * })
     * 
     */
    create<T extends ObjectiveCreateArgs>(args: SelectSubset<T, ObjectiveCreateArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objectives.
     * @param {ObjectiveCreateManyArgs} args - Arguments to create many Objectives.
     * @example
     * // Create many Objectives
     * const objective = await prisma.objective.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjectiveCreateManyArgs>(args?: SelectSubset<T, ObjectiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Objectives and returns the data saved in the database.
     * @param {ObjectiveCreateManyAndReturnArgs} args - Arguments to create many Objectives.
     * @example
     * // Create many Objectives
     * const objective = await prisma.objective.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Objectives and only return the `id`
     * const objectiveWithIdOnly = await prisma.objective.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjectiveCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjectiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Objective.
     * @param {ObjectiveDeleteArgs} args - Arguments to delete one Objective.
     * @example
     * // Delete one Objective
     * const Objective = await prisma.objective.delete({
     *   where: {
     *     // ... filter to delete one Objective
     *   }
     * })
     * 
     */
    delete<T extends ObjectiveDeleteArgs>(args: SelectSubset<T, ObjectiveDeleteArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Objective.
     * @param {ObjectiveUpdateArgs} args - Arguments to update one Objective.
     * @example
     * // Update one Objective
     * const objective = await prisma.objective.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjectiveUpdateArgs>(args: SelectSubset<T, ObjectiveUpdateArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objectives.
     * @param {ObjectiveDeleteManyArgs} args - Arguments to filter Objectives to delete.
     * @example
     * // Delete a few Objectives
     * const { count } = await prisma.objective.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjectiveDeleteManyArgs>(args?: SelectSubset<T, ObjectiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objectives
     * const objective = await prisma.objective.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjectiveUpdateManyArgs>(args: SelectSubset<T, ObjectiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objectives and returns the data updated in the database.
     * @param {ObjectiveUpdateManyAndReturnArgs} args - Arguments to update many Objectives.
     * @example
     * // Update many Objectives
     * const objective = await prisma.objective.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Objectives and only return the `id`
     * const objectiveWithIdOnly = await prisma.objective.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjectiveUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjectiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Objective.
     * @param {ObjectiveUpsertArgs} args - Arguments to update or create a Objective.
     * @example
     * // Update or create a Objective
     * const objective = await prisma.objective.upsert({
     *   create: {
     *     // ... data to create a Objective
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Objective we want to update
     *   }
     * })
     */
    upsert<T extends ObjectiveUpsertArgs>(args: SelectSubset<T, ObjectiveUpsertArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveCountArgs} args - Arguments to filter Objectives to count.
     * @example
     * // Count the number of Objectives
     * const count = await prisma.objective.count({
     *   where: {
     *     // ... the filter for the Objectives we want to count
     *   }
     * })
    **/
    count<T extends ObjectiveCountArgs>(
      args?: Subset<T, ObjectiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Objective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObjectiveAggregateArgs>(args: Subset<T, ObjectiveAggregateArgs>): Prisma.PrismaPromise<GetObjectiveAggregateType<T>>

    /**
     * Group by Objective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectiveGroupByArgs} args - Group by arguments.
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
      T extends ObjectiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectiveGroupByArgs['orderBy'] }
        : { orderBy?: ObjectiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObjectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Objective model
   */
  readonly fields: ObjectiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Objective.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    extendedByUser<T extends Objective$extendedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Objective$extendedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contributors<T extends Objective$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, Objective$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cycle<T extends CycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDefaultArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Objective$parentArgs<ExtArgs> = {}>(args?: Subset<T, Objective$parentArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Objective$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Objective$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keyResults<T extends Objective$keyResultsArgs<ExtArgs> = {}>(args?: Subset<T, Objective$keyResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Objective$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Objective$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Objective model
   */
  interface ObjectiveFieldRefs {
    readonly id: FieldRef<"Objective", 'String'>
    readonly title: FieldRef<"Objective", 'String'>
    readonly description: FieldRef<"Objective", 'String'>
    readonly type: FieldRef<"Objective", 'ObjectiveType'>
    readonly status: FieldRef<"Objective", 'Status'>
    readonly weight: FieldRef<"Objective", 'Float'>
    readonly wasMissed: FieldRef<"Objective", 'Boolean'>
    readonly originalEndDate: FieldRef<"Objective", 'DateTime'>
    readonly extendedDeadline: FieldRef<"Objective", 'DateTime'>
    readonly extensionReason: FieldRef<"Objective", 'String'>
    readonly missedReason: FieldRef<"Objective", 'String'>
    readonly dateExtended: FieldRef<"Objective", 'DateTime'>
    readonly extendedBy: FieldRef<"Objective", 'String'>
    readonly ownerId: FieldRef<"Objective", 'String'>
    readonly cycleId: FieldRef<"Objective", 'String'>
    readonly parentId: FieldRef<"Objective", 'String'>
    readonly createdAt: FieldRef<"Objective", 'DateTime'>
    readonly updatedAt: FieldRef<"Objective", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Objective findUnique
   */
  export type ObjectiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * Filter, which Objective to fetch.
     */
    where: ObjectiveWhereUniqueInput
  }

  /**
   * Objective findUniqueOrThrow
   */
  export type ObjectiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * Filter, which Objective to fetch.
     */
    where: ObjectiveWhereUniqueInput
  }

  /**
   * Objective findFirst
   */
  export type ObjectiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * Filter, which Objective to fetch.
     */
    where?: ObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objectives to fetch.
     */
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objectives.
     */
    cursor?: ObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objectives.
     */
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * Objective findFirstOrThrow
   */
  export type ObjectiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * Filter, which Objective to fetch.
     */
    where?: ObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objectives to fetch.
     */
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objectives.
     */
    cursor?: ObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objectives.
     */
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * Objective findMany
   */
  export type ObjectiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * Filter, which Objectives to fetch.
     */
    where?: ObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objectives to fetch.
     */
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objectives.
     */
    cursor?: ObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objectives.
     */
    skip?: number
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * Objective create
   */
  export type ObjectiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * The data needed to create a Objective.
     */
    data: XOR<ObjectiveCreateInput, ObjectiveUncheckedCreateInput>
  }

  /**
   * Objective createMany
   */
  export type ObjectiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objectives.
     */
    data: ObjectiveCreateManyInput | ObjectiveCreateManyInput[]
  }

  /**
   * Objective createManyAndReturn
   */
  export type ObjectiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * The data used to create many Objectives.
     */
    data: ObjectiveCreateManyInput | ObjectiveCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objective update
   */
  export type ObjectiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * The data needed to update a Objective.
     */
    data: XOR<ObjectiveUpdateInput, ObjectiveUncheckedUpdateInput>
    /**
     * Choose, which Objective to update.
     */
    where: ObjectiveWhereUniqueInput
  }

  /**
   * Objective updateMany
   */
  export type ObjectiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objectives.
     */
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyInput>
    /**
     * Filter which Objectives to update
     */
    where?: ObjectiveWhereInput
    /**
     * Limit how many Objectives to update.
     */
    limit?: number
  }

  /**
   * Objective updateManyAndReturn
   */
  export type ObjectiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * The data used to update Objectives.
     */
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyInput>
    /**
     * Filter which Objectives to update
     */
    where?: ObjectiveWhereInput
    /**
     * Limit how many Objectives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objective upsert
   */
  export type ObjectiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * The filter to search for the Objective to update in case it exists.
     */
    where: ObjectiveWhereUniqueInput
    /**
     * In case the Objective found by the `where` argument doesn't exist, create a new Objective with this data.
     */
    create: XOR<ObjectiveCreateInput, ObjectiveUncheckedCreateInput>
    /**
     * In case the Objective was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectiveUpdateInput, ObjectiveUncheckedUpdateInput>
  }

  /**
   * Objective delete
   */
  export type ObjectiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    /**
     * Filter which Objective to delete.
     */
    where: ObjectiveWhereUniqueInput
  }

  /**
   * Objective deleteMany
   */
  export type ObjectiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objectives to delete
     */
    where?: ObjectiveWhereInput
    /**
     * Limit how many Objectives to delete.
     */
    limit?: number
  }

  /**
   * Objective.extendedByUser
   */
  export type Objective$extendedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Objective.contributors
   */
  export type Objective$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * Objective.parent
   */
  export type Objective$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    where?: ObjectiveWhereInput
  }

  /**
   * Objective.children
   */
  export type Objective$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
    where?: ObjectiveWhereInput
    orderBy?: ObjectiveOrderByWithRelationInput | ObjectiveOrderByWithRelationInput[]
    cursor?: ObjectiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectiveScalarFieldEnum | ObjectiveScalarFieldEnum[]
  }

  /**
   * Objective.keyResults
   */
  export type Objective$keyResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    where?: KeyResultWhereInput
    orderBy?: KeyResultOrderByWithRelationInput | KeyResultOrderByWithRelationInput[]
    cursor?: KeyResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyResultScalarFieldEnum | KeyResultScalarFieldEnum[]
  }

  /**
   * Objective.reviews
   */
  export type Objective$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Objective without action
   */
  export type ObjectiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objective
     */
    select?: ObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objective
     */
    omit?: ObjectiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectiveInclude<ExtArgs> | null
  }


  /**
   * Model KeyResult
   */

  export type AggregateKeyResult = {
    _count: KeyResultCountAggregateOutputType | null
    _avg: KeyResultAvgAggregateOutputType | null
    _sum: KeyResultSumAggregateOutputType | null
    _min: KeyResultMinAggregateOutputType | null
    _max: KeyResultMaxAggregateOutputType | null
  }

  export type KeyResultAvgAggregateOutputType = {
    targetValue: number | null
    currentValue: number | null
    weight: number | null
  }

  export type KeyResultSumAggregateOutputType = {
    targetValue: number | null
    currentValue: number | null
    weight: number | null
  }

  export type KeyResultMinAggregateOutputType = {
    id: string | null
    description: string | null
    metricType: $Enums.MetricType | null
    targetValue: number | null
    currentValue: number | null
    unit: string | null
    weight: number | null
    objectiveId: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeyResultMaxAggregateOutputType = {
    id: string | null
    description: string | null
    metricType: $Enums.MetricType | null
    targetValue: number | null
    currentValue: number | null
    unit: string | null
    weight: number | null
    objectiveId: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeyResultCountAggregateOutputType = {
    id: number
    description: number
    metricType: number
    targetValue: number
    currentValue: number
    unit: number
    weight: number
    objectiveId: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KeyResultAvgAggregateInputType = {
    targetValue?: true
    currentValue?: true
    weight?: true
  }

  export type KeyResultSumAggregateInputType = {
    targetValue?: true
    currentValue?: true
    weight?: true
  }

  export type KeyResultMinAggregateInputType = {
    id?: true
    description?: true
    metricType?: true
    targetValue?: true
    currentValue?: true
    unit?: true
    weight?: true
    objectiveId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeyResultMaxAggregateInputType = {
    id?: true
    description?: true
    metricType?: true
    targetValue?: true
    currentValue?: true
    unit?: true
    weight?: true
    objectiveId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeyResultCountAggregateInputType = {
    id?: true
    description?: true
    metricType?: true
    targetValue?: true
    currentValue?: true
    unit?: true
    weight?: true
    objectiveId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KeyResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyResult to aggregate.
     */
    where?: KeyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyResults to fetch.
     */
    orderBy?: KeyResultOrderByWithRelationInput | KeyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeyResults
    **/
    _count?: true | KeyResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeyResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyResultMaxAggregateInputType
  }

  export type GetKeyResultAggregateType<T extends KeyResultAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyResult[P]>
      : GetScalarType<T[P], AggregateKeyResult[P]>
  }




  export type KeyResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyResultWhereInput
    orderBy?: KeyResultOrderByWithAggregationInput | KeyResultOrderByWithAggregationInput[]
    by: KeyResultScalarFieldEnum[] | KeyResultScalarFieldEnum
    having?: KeyResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyResultCountAggregateInputType | true
    _avg?: KeyResultAvgAggregateInputType
    _sum?: KeyResultSumAggregateInputType
    _min?: KeyResultMinAggregateInputType
    _max?: KeyResultMaxAggregateInputType
  }

  export type KeyResultGroupByOutputType = {
    id: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue: number
    unit: string | null
    weight: number | null
    objectiveId: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: KeyResultCountAggregateOutputType | null
    _avg: KeyResultAvgAggregateOutputType | null
    _sum: KeyResultSumAggregateOutputType | null
    _min: KeyResultMinAggregateOutputType | null
    _max: KeyResultMaxAggregateOutputType | null
  }

  type GetKeyResultGroupByPayload<T extends KeyResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyResultGroupByOutputType[P]>
            : GetScalarType<T[P], KeyResultGroupByOutputType[P]>
        }
      >
    >


  export type KeyResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    metricType?: boolean
    targetValue?: boolean
    currentValue?: boolean
    unit?: boolean
    weight?: boolean
    objectiveId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    progressUpdates?: boolean | KeyResult$progressUpdatesArgs<ExtArgs>
    _count?: boolean | KeyResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyResult"]>

  export type KeyResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    metricType?: boolean
    targetValue?: boolean
    currentValue?: boolean
    unit?: boolean
    weight?: boolean
    objectiveId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyResult"]>

  export type KeyResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    metricType?: boolean
    targetValue?: boolean
    currentValue?: boolean
    unit?: boolean
    weight?: boolean
    objectiveId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyResult"]>

  export type KeyResultSelectScalar = {
    id?: boolean
    description?: boolean
    metricType?: boolean
    targetValue?: boolean
    currentValue?: boolean
    unit?: boolean
    weight?: boolean
    objectiveId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KeyResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "metricType" | "targetValue" | "currentValue" | "unit" | "weight" | "objectiveId" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["keyResult"]>
  export type KeyResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    progressUpdates?: boolean | KeyResult$progressUpdatesArgs<ExtArgs>
    _count?: boolean | KeyResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeyResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KeyResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KeyResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeyResult"
    objects: {
      objective: Prisma.$ObjectivePayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      progressUpdates: Prisma.$ProgressUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      metricType: $Enums.MetricType
      targetValue: number
      currentValue: number
      unit: string | null
      weight: number | null
      objectiveId: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["keyResult"]>
    composites: {}
  }

  type KeyResultGetPayload<S extends boolean | null | undefined | KeyResultDefaultArgs> = $Result.GetResult<Prisma.$KeyResultPayload, S>

  type KeyResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyResultCountAggregateInputType | true
    }

  export interface KeyResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeyResult'], meta: { name: 'KeyResult' } }
    /**
     * Find zero or one KeyResult that matches the filter.
     * @param {KeyResultFindUniqueArgs} args - Arguments to find a KeyResult
     * @example
     * // Get one KeyResult
     * const keyResult = await prisma.keyResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyResultFindUniqueArgs>(args: SelectSubset<T, KeyResultFindUniqueArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeyResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyResultFindUniqueOrThrowArgs} args - Arguments to find a KeyResult
     * @example
     * // Get one KeyResult
     * const keyResult = await prisma.keyResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyResultFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultFindFirstArgs} args - Arguments to find a KeyResult
     * @example
     * // Get one KeyResult
     * const keyResult = await prisma.keyResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyResultFindFirstArgs>(args?: SelectSubset<T, KeyResultFindFirstArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultFindFirstOrThrowArgs} args - Arguments to find a KeyResult
     * @example
     * // Get one KeyResult
     * const keyResult = await prisma.keyResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyResultFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeyResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyResults
     * const keyResults = await prisma.keyResult.findMany()
     * 
     * // Get first 10 KeyResults
     * const keyResults = await prisma.keyResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyResultWithIdOnly = await prisma.keyResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyResultFindManyArgs>(args?: SelectSubset<T, KeyResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeyResult.
     * @param {KeyResultCreateArgs} args - Arguments to create a KeyResult.
     * @example
     * // Create one KeyResult
     * const KeyResult = await prisma.keyResult.create({
     *   data: {
     *     // ... data to create a KeyResult
     *   }
     * })
     * 
     */
    create<T extends KeyResultCreateArgs>(args: SelectSubset<T, KeyResultCreateArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeyResults.
     * @param {KeyResultCreateManyArgs} args - Arguments to create many KeyResults.
     * @example
     * // Create many KeyResults
     * const keyResult = await prisma.keyResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyResultCreateManyArgs>(args?: SelectSubset<T, KeyResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeyResults and returns the data saved in the database.
     * @param {KeyResultCreateManyAndReturnArgs} args - Arguments to create many KeyResults.
     * @example
     * // Create many KeyResults
     * const keyResult = await prisma.keyResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeyResults and only return the `id`
     * const keyResultWithIdOnly = await prisma.keyResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyResultCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeyResult.
     * @param {KeyResultDeleteArgs} args - Arguments to delete one KeyResult.
     * @example
     * // Delete one KeyResult
     * const KeyResult = await prisma.keyResult.delete({
     *   where: {
     *     // ... filter to delete one KeyResult
     *   }
     * })
     * 
     */
    delete<T extends KeyResultDeleteArgs>(args: SelectSubset<T, KeyResultDeleteArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeyResult.
     * @param {KeyResultUpdateArgs} args - Arguments to update one KeyResult.
     * @example
     * // Update one KeyResult
     * const keyResult = await prisma.keyResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyResultUpdateArgs>(args: SelectSubset<T, KeyResultUpdateArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeyResults.
     * @param {KeyResultDeleteManyArgs} args - Arguments to filter KeyResults to delete.
     * @example
     * // Delete a few KeyResults
     * const { count } = await prisma.keyResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyResultDeleteManyArgs>(args?: SelectSubset<T, KeyResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyResults
     * const keyResult = await prisma.keyResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyResultUpdateManyArgs>(args: SelectSubset<T, KeyResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyResults and returns the data updated in the database.
     * @param {KeyResultUpdateManyAndReturnArgs} args - Arguments to update many KeyResults.
     * @example
     * // Update many KeyResults
     * const keyResult = await prisma.keyResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeyResults and only return the `id`
     * const keyResultWithIdOnly = await prisma.keyResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeyResultUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeyResult.
     * @param {KeyResultUpsertArgs} args - Arguments to update or create a KeyResult.
     * @example
     * // Update or create a KeyResult
     * const keyResult = await prisma.keyResult.upsert({
     *   create: {
     *     // ... data to create a KeyResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyResult we want to update
     *   }
     * })
     */
    upsert<T extends KeyResultUpsertArgs>(args: SelectSubset<T, KeyResultUpsertArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeyResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultCountArgs} args - Arguments to filter KeyResults to count.
     * @example
     * // Count the number of KeyResults
     * const count = await prisma.keyResult.count({
     *   where: {
     *     // ... the filter for the KeyResults we want to count
     *   }
     * })
    **/
    count<T extends KeyResultCountArgs>(
      args?: Subset<T, KeyResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeyResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeyResultAggregateArgs>(args: Subset<T, KeyResultAggregateArgs>): Prisma.PrismaPromise<GetKeyResultAggregateType<T>>

    /**
     * Group by KeyResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyResultGroupByArgs} args - Group by arguments.
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
      T extends KeyResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyResultGroupByArgs['orderBy'] }
        : { orderBy?: KeyResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeyResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeyResult model
   */
  readonly fields: KeyResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeyResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objective<T extends ObjectiveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectiveDefaultArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressUpdates<T extends KeyResult$progressUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, KeyResult$progressUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeyResult model
   */
  interface KeyResultFieldRefs {
    readonly id: FieldRef<"KeyResult", 'String'>
    readonly description: FieldRef<"KeyResult", 'String'>
    readonly metricType: FieldRef<"KeyResult", 'MetricType'>
    readonly targetValue: FieldRef<"KeyResult", 'Float'>
    readonly currentValue: FieldRef<"KeyResult", 'Float'>
    readonly unit: FieldRef<"KeyResult", 'String'>
    readonly weight: FieldRef<"KeyResult", 'Float'>
    readonly objectiveId: FieldRef<"KeyResult", 'String'>
    readonly ownerId: FieldRef<"KeyResult", 'String'>
    readonly createdAt: FieldRef<"KeyResult", 'DateTime'>
    readonly updatedAt: FieldRef<"KeyResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KeyResult findUnique
   */
  export type KeyResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * Filter, which KeyResult to fetch.
     */
    where: KeyResultWhereUniqueInput
  }

  /**
   * KeyResult findUniqueOrThrow
   */
  export type KeyResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * Filter, which KeyResult to fetch.
     */
    where: KeyResultWhereUniqueInput
  }

  /**
   * KeyResult findFirst
   */
  export type KeyResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * Filter, which KeyResult to fetch.
     */
    where?: KeyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyResults to fetch.
     */
    orderBy?: KeyResultOrderByWithRelationInput | KeyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyResults.
     */
    cursor?: KeyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyResults.
     */
    distinct?: KeyResultScalarFieldEnum | KeyResultScalarFieldEnum[]
  }

  /**
   * KeyResult findFirstOrThrow
   */
  export type KeyResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * Filter, which KeyResult to fetch.
     */
    where?: KeyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyResults to fetch.
     */
    orderBy?: KeyResultOrderByWithRelationInput | KeyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyResults.
     */
    cursor?: KeyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyResults.
     */
    distinct?: KeyResultScalarFieldEnum | KeyResultScalarFieldEnum[]
  }

  /**
   * KeyResult findMany
   */
  export type KeyResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * Filter, which KeyResults to fetch.
     */
    where?: KeyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyResults to fetch.
     */
    orderBy?: KeyResultOrderByWithRelationInput | KeyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeyResults.
     */
    cursor?: KeyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyResults.
     */
    skip?: number
    distinct?: KeyResultScalarFieldEnum | KeyResultScalarFieldEnum[]
  }

  /**
   * KeyResult create
   */
  export type KeyResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * The data needed to create a KeyResult.
     */
    data: XOR<KeyResultCreateInput, KeyResultUncheckedCreateInput>
  }

  /**
   * KeyResult createMany
   */
  export type KeyResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyResults.
     */
    data: KeyResultCreateManyInput | KeyResultCreateManyInput[]
  }

  /**
   * KeyResult createManyAndReturn
   */
  export type KeyResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * The data used to create many KeyResults.
     */
    data: KeyResultCreateManyInput | KeyResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyResult update
   */
  export type KeyResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * The data needed to update a KeyResult.
     */
    data: XOR<KeyResultUpdateInput, KeyResultUncheckedUpdateInput>
    /**
     * Choose, which KeyResult to update.
     */
    where: KeyResultWhereUniqueInput
  }

  /**
   * KeyResult updateMany
   */
  export type KeyResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyResults.
     */
    data: XOR<KeyResultUpdateManyMutationInput, KeyResultUncheckedUpdateManyInput>
    /**
     * Filter which KeyResults to update
     */
    where?: KeyResultWhereInput
    /**
     * Limit how many KeyResults to update.
     */
    limit?: number
  }

  /**
   * KeyResult updateManyAndReturn
   */
  export type KeyResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * The data used to update KeyResults.
     */
    data: XOR<KeyResultUpdateManyMutationInput, KeyResultUncheckedUpdateManyInput>
    /**
     * Filter which KeyResults to update
     */
    where?: KeyResultWhereInput
    /**
     * Limit how many KeyResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyResult upsert
   */
  export type KeyResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * The filter to search for the KeyResult to update in case it exists.
     */
    where: KeyResultWhereUniqueInput
    /**
     * In case the KeyResult found by the `where` argument doesn't exist, create a new KeyResult with this data.
     */
    create: XOR<KeyResultCreateInput, KeyResultUncheckedCreateInput>
    /**
     * In case the KeyResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyResultUpdateInput, KeyResultUncheckedUpdateInput>
  }

  /**
   * KeyResult delete
   */
  export type KeyResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
    /**
     * Filter which KeyResult to delete.
     */
    where: KeyResultWhereUniqueInput
  }

  /**
   * KeyResult deleteMany
   */
  export type KeyResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyResults to delete
     */
    where?: KeyResultWhereInput
    /**
     * Limit how many KeyResults to delete.
     */
    limit?: number
  }

  /**
   * KeyResult.progressUpdates
   */
  export type KeyResult$progressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    cursor?: ProgressUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * KeyResult without action
   */
  export type KeyResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyResult
     */
    select?: KeyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyResult
     */
    omit?: KeyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyResultInclude<ExtArgs> | null
  }


  /**
   * Model ProgressUpdate
   */

  export type AggregateProgressUpdate = {
    _count: ProgressUpdateCountAggregateOutputType | null
    _avg: ProgressUpdateAvgAggregateOutputType | null
    _sum: ProgressUpdateSumAggregateOutputType | null
    _min: ProgressUpdateMinAggregateOutputType | null
    _max: ProgressUpdateMaxAggregateOutputType | null
  }

  export type ProgressUpdateAvgAggregateOutputType = {
    value: number | null
  }

  export type ProgressUpdateSumAggregateOutputType = {
    value: number | null
  }

  export type ProgressUpdateMinAggregateOutputType = {
    id: string | null
    value: number | null
    notes: string | null
    evidence: string | null
    keyResultId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type ProgressUpdateMaxAggregateOutputType = {
    id: string | null
    value: number | null
    notes: string | null
    evidence: string | null
    keyResultId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type ProgressUpdateCountAggregateOutputType = {
    id: number
    value: number
    notes: number
    evidence: number
    keyResultId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type ProgressUpdateAvgAggregateInputType = {
    value?: true
  }

  export type ProgressUpdateSumAggregateInputType = {
    value?: true
  }

  export type ProgressUpdateMinAggregateInputType = {
    id?: true
    value?: true
    notes?: true
    evidence?: true
    keyResultId?: true
    createdById?: true
    createdAt?: true
  }

  export type ProgressUpdateMaxAggregateInputType = {
    id?: true
    value?: true
    notes?: true
    evidence?: true
    keyResultId?: true
    createdById?: true
    createdAt?: true
  }

  export type ProgressUpdateCountAggregateInputType = {
    id?: true
    value?: true
    notes?: true
    evidence?: true
    keyResultId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type ProgressUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressUpdate to aggregate.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressUpdates
    **/
    _count?: true | ProgressUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressUpdateMaxAggregateInputType
  }

  export type GetProgressUpdateAggregateType<T extends ProgressUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressUpdate[P]>
      : GetScalarType<T[P], AggregateProgressUpdate[P]>
  }




  export type ProgressUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithAggregationInput | ProgressUpdateOrderByWithAggregationInput[]
    by: ProgressUpdateScalarFieldEnum[] | ProgressUpdateScalarFieldEnum
    having?: ProgressUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressUpdateCountAggregateInputType | true
    _avg?: ProgressUpdateAvgAggregateInputType
    _sum?: ProgressUpdateSumAggregateInputType
    _min?: ProgressUpdateMinAggregateInputType
    _max?: ProgressUpdateMaxAggregateInputType
  }

  export type ProgressUpdateGroupByOutputType = {
    id: string
    value: number
    notes: string | null
    evidence: string | null
    keyResultId: string
    createdById: string
    createdAt: Date
    _count: ProgressUpdateCountAggregateOutputType | null
    _avg: ProgressUpdateAvgAggregateOutputType | null
    _sum: ProgressUpdateSumAggregateOutputType | null
    _min: ProgressUpdateMinAggregateOutputType | null
    _max: ProgressUpdateMaxAggregateOutputType | null
  }

  type GetProgressUpdateGroupByPayload<T extends ProgressUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressUpdateGroupByOutputType[P]>
        }
      >
    >


  export type ProgressUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    notes?: boolean
    evidence?: boolean
    keyResultId?: boolean
    createdById?: boolean
    createdAt?: boolean
    keyResult?: boolean | KeyResultDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    notes?: boolean
    evidence?: boolean
    keyResultId?: boolean
    createdById?: boolean
    createdAt?: boolean
    keyResult?: boolean | KeyResultDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    notes?: boolean
    evidence?: boolean
    keyResultId?: boolean
    createdById?: boolean
    createdAt?: boolean
    keyResult?: boolean | KeyResultDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectScalar = {
    id?: boolean
    value?: boolean
    notes?: boolean
    evidence?: boolean
    keyResultId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type ProgressUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "notes" | "evidence" | "keyResultId" | "createdById" | "createdAt", ExtArgs["result"]["progressUpdate"]>
  export type ProgressUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyResult?: boolean | KeyResultDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyResult?: boolean | KeyResultDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyResult?: boolean | KeyResultDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressUpdate"
    objects: {
      keyResult: Prisma.$KeyResultPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      notes: string | null
      evidence: string | null
      keyResultId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["progressUpdate"]>
    composites: {}
  }

  type ProgressUpdateGetPayload<S extends boolean | null | undefined | ProgressUpdateDefaultArgs> = $Result.GetResult<Prisma.$ProgressUpdatePayload, S>

  type ProgressUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressUpdateCountAggregateInputType | true
    }

  export interface ProgressUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressUpdate'], meta: { name: 'ProgressUpdate' } }
    /**
     * Find zero or one ProgressUpdate that matches the filter.
     * @param {ProgressUpdateFindUniqueArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressUpdateFindUniqueArgs>(args: SelectSubset<T, ProgressUpdateFindUniqueArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressUpdateFindUniqueOrThrowArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindFirstArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressUpdateFindFirstArgs>(args?: SelectSubset<T, ProgressUpdateFindFirstArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindFirstOrThrowArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressUpdates
     * const progressUpdates = await prisma.progressUpdate.findMany()
     * 
     * // Get first 10 ProgressUpdates
     * const progressUpdates = await prisma.progressUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressUpdateFindManyArgs>(args?: SelectSubset<T, ProgressUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressUpdate.
     * @param {ProgressUpdateCreateArgs} args - Arguments to create a ProgressUpdate.
     * @example
     * // Create one ProgressUpdate
     * const ProgressUpdate = await prisma.progressUpdate.create({
     *   data: {
     *     // ... data to create a ProgressUpdate
     *   }
     * })
     * 
     */
    create<T extends ProgressUpdateCreateArgs>(args: SelectSubset<T, ProgressUpdateCreateArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressUpdates.
     * @param {ProgressUpdateCreateManyArgs} args - Arguments to create many ProgressUpdates.
     * @example
     * // Create many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressUpdateCreateManyArgs>(args?: SelectSubset<T, ProgressUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressUpdates and returns the data saved in the database.
     * @param {ProgressUpdateCreateManyAndReturnArgs} args - Arguments to create many ProgressUpdates.
     * @example
     * // Create many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressUpdates and only return the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressUpdate.
     * @param {ProgressUpdateDeleteArgs} args - Arguments to delete one ProgressUpdate.
     * @example
     * // Delete one ProgressUpdate
     * const ProgressUpdate = await prisma.progressUpdate.delete({
     *   where: {
     *     // ... filter to delete one ProgressUpdate
     *   }
     * })
     * 
     */
    delete<T extends ProgressUpdateDeleteArgs>(args: SelectSubset<T, ProgressUpdateDeleteArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressUpdate.
     * @param {ProgressUpdateUpdateArgs} args - Arguments to update one ProgressUpdate.
     * @example
     * // Update one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressUpdateUpdateArgs>(args: SelectSubset<T, ProgressUpdateUpdateArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressUpdates.
     * @param {ProgressUpdateDeleteManyArgs} args - Arguments to filter ProgressUpdates to delete.
     * @example
     * // Delete a few ProgressUpdates
     * const { count } = await prisma.progressUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressUpdateDeleteManyArgs>(args?: SelectSubset<T, ProgressUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressUpdateUpdateManyArgs>(args: SelectSubset<T, ProgressUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressUpdates and returns the data updated in the database.
     * @param {ProgressUpdateUpdateManyAndReturnArgs} args - Arguments to update many ProgressUpdates.
     * @example
     * // Update many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressUpdates and only return the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressUpdate.
     * @param {ProgressUpdateUpsertArgs} args - Arguments to update or create a ProgressUpdate.
     * @example
     * // Update or create a ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.upsert({
     *   create: {
     *     // ... data to create a ProgressUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressUpdate we want to update
     *   }
     * })
     */
    upsert<T extends ProgressUpdateUpsertArgs>(args: SelectSubset<T, ProgressUpdateUpsertArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateCountArgs} args - Arguments to filter ProgressUpdates to count.
     * @example
     * // Count the number of ProgressUpdates
     * const count = await prisma.progressUpdate.count({
     *   where: {
     *     // ... the filter for the ProgressUpdates we want to count
     *   }
     * })
    **/
    count<T extends ProgressUpdateCountArgs>(
      args?: Subset<T, ProgressUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressUpdateAggregateArgs>(args: Subset<T, ProgressUpdateAggregateArgs>): Prisma.PrismaPromise<GetProgressUpdateAggregateType<T>>

    /**
     * Group by ProgressUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateGroupByArgs} args - Group by arguments.
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
      T extends ProgressUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressUpdateGroupByArgs['orderBy'] }
        : { orderBy?: ProgressUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressUpdate model
   */
  readonly fields: ProgressUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyResult<T extends KeyResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeyResultDefaultArgs<ExtArgs>>): Prisma__KeyResultClient<$Result.GetResult<Prisma.$KeyResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressUpdate model
   */
  interface ProgressUpdateFieldRefs {
    readonly id: FieldRef<"ProgressUpdate", 'String'>
    readonly value: FieldRef<"ProgressUpdate", 'Float'>
    readonly notes: FieldRef<"ProgressUpdate", 'String'>
    readonly evidence: FieldRef<"ProgressUpdate", 'String'>
    readonly keyResultId: FieldRef<"ProgressUpdate", 'String'>
    readonly createdById: FieldRef<"ProgressUpdate", 'String'>
    readonly createdAt: FieldRef<"ProgressUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressUpdate findUnique
   */
  export type ProgressUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate findUniqueOrThrow
   */
  export type ProgressUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate findFirst
   */
  export type ProgressUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressUpdates.
     */
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * ProgressUpdate findFirstOrThrow
   */
  export type ProgressUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressUpdates.
     */
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * ProgressUpdate findMany
   */
  export type ProgressUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdates to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * ProgressUpdate create
   */
  export type ProgressUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressUpdate.
     */
    data: XOR<ProgressUpdateCreateInput, ProgressUpdateUncheckedCreateInput>
  }

  /**
   * ProgressUpdate createMany
   */
  export type ProgressUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressUpdates.
     */
    data: ProgressUpdateCreateManyInput | ProgressUpdateCreateManyInput[]
  }

  /**
   * ProgressUpdate createManyAndReturn
   */
  export type ProgressUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressUpdates.
     */
    data: ProgressUpdateCreateManyInput | ProgressUpdateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressUpdate update
   */
  export type ProgressUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressUpdate.
     */
    data: XOR<ProgressUpdateUpdateInput, ProgressUpdateUncheckedUpdateInput>
    /**
     * Choose, which ProgressUpdate to update.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate updateMany
   */
  export type ProgressUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressUpdates.
     */
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ProgressUpdates to update
     */
    where?: ProgressUpdateWhereInput
    /**
     * Limit how many ProgressUpdates to update.
     */
    limit?: number
  }

  /**
   * ProgressUpdate updateManyAndReturn
   */
  export type ProgressUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * The data used to update ProgressUpdates.
     */
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ProgressUpdates to update
     */
    where?: ProgressUpdateWhereInput
    /**
     * Limit how many ProgressUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressUpdate upsert
   */
  export type ProgressUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressUpdate to update in case it exists.
     */
    where: ProgressUpdateWhereUniqueInput
    /**
     * In case the ProgressUpdate found by the `where` argument doesn't exist, create a new ProgressUpdate with this data.
     */
    create: XOR<ProgressUpdateCreateInput, ProgressUpdateUncheckedCreateInput>
    /**
     * In case the ProgressUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateUpdateInput, ProgressUpdateUncheckedUpdateInput>
  }

  /**
   * ProgressUpdate delete
   */
  export type ProgressUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter which ProgressUpdate to delete.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate deleteMany
   */
  export type ProgressUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressUpdates to delete
     */
    where?: ProgressUpdateWhereInput
    /**
     * Limit how many ProgressUpdates to delete.
     */
    limit?: number
  }

  /**
   * ProgressUpdate without action
   */
  export type ProgressUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    score: number | null
  }

  export type ReviewSumAggregateOutputType = {
    score: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    score: number | null
    feedback: string | null
    reviewDate: Date | null
    reviewType: $Enums.ReviewType | null
    objectiveId: string | null
    reviewerId: string | null
    revieweeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    score: number | null
    feedback: string | null
    reviewDate: Date | null
    reviewType: $Enums.ReviewType | null
    objectiveId: string | null
    reviewerId: string | null
    revieweeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    score: number
    feedback: number
    reviewDate: number
    reviewType: number
    objectiveId: number
    reviewerId: number
    revieweeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    score?: true
  }

  export type ReviewSumAggregateInputType = {
    score?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    score?: true
    feedback?: true
    reviewDate?: true
    reviewType?: true
    objectiveId?: true
    reviewerId?: true
    revieweeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    score?: true
    feedback?: true
    reviewDate?: true
    reviewType?: true
    objectiveId?: true
    reviewerId?: true
    revieweeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    score?: true
    feedback?: true
    reviewDate?: true
    reviewType?: true
    objectiveId?: true
    reviewerId?: true
    revieweeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    score: number | null
    feedback: string | null
    reviewDate: Date
    reviewType: $Enums.ReviewType
    objectiveId: string
    reviewerId: string
    revieweeId: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    feedback?: boolean
    reviewDate?: boolean
    reviewType?: boolean
    objectiveId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    feedback?: boolean
    reviewDate?: boolean
    reviewType?: boolean
    objectiveId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    feedback?: boolean
    reviewDate?: boolean
    reviewType?: boolean
    objectiveId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    score?: boolean
    feedback?: boolean
    reviewDate?: boolean
    reviewType?: boolean
    objectiveId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "feedback" | "reviewDate" | "reviewType" | "objectiveId" | "reviewerId" | "revieweeId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objective?: boolean | ObjectiveDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      objective: Prisma.$ObjectivePayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs>
      reviewee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number | null
      feedback: string | null
      reviewDate: Date
      reviewType: $Enums.ReviewType
      objectiveId: string
      reviewerId: string
      revieweeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objective<T extends ObjectiveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectiveDefaultArgs<ExtArgs>>): Prisma__ObjectiveClient<$Result.GetResult<Prisma.$ObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly score: FieldRef<"Review", 'Float'>
    readonly feedback: FieldRef<"Review", 'String'>
    readonly reviewDate: FieldRef<"Review", 'DateTime'>
    readonly reviewType: FieldRef<"Review", 'ReviewType'>
    readonly objectiveId: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly revieweeId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    read: boolean | null
    actionUrl: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    read: boolean | null
    actionUrl: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    read: number
    actionUrl: number
    userId: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    read?: true
    actionUrl?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    read?: true
    actionUrl?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    read?: true
    actionUrl?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    title: string
    message: string
    read: boolean
    actionUrl: string | null
    userId: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    actionUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    actionUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    actionUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    actionUrl?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "message" | "read" | "actionUrl" | "userId" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      title: string
      message: string
      read: boolean
      actionUrl: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly actionUrl: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.ObjectiveType | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.ObjectiveType | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    type: $Enums.ObjectiveType
    content: string
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      type: $Enums.ObjectiveType
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly type: FieldRef<"Template", 'ObjectiveType'>
    readonly content: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    position: 'position',
    avatar: 'avatar',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    departmentId: 'departmentId',
    managerId: 'managerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentId: 'parentId',
    headId: 'headId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const CycleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CycleScalarFieldEnum = (typeof CycleScalarFieldEnum)[keyof typeof CycleScalarFieldEnum]


  export const ObjectiveScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    weight: 'weight',
    wasMissed: 'wasMissed',
    originalEndDate: 'originalEndDate',
    extendedDeadline: 'extendedDeadline',
    extensionReason: 'extensionReason',
    missedReason: 'missedReason',
    dateExtended: 'dateExtended',
    extendedBy: 'extendedBy',
    ownerId: 'ownerId',
    cycleId: 'cycleId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObjectiveScalarFieldEnum = (typeof ObjectiveScalarFieldEnum)[keyof typeof ObjectiveScalarFieldEnum]


  export const KeyResultScalarFieldEnum: {
    id: 'id',
    description: 'description',
    metricType: 'metricType',
    targetValue: 'targetValue',
    currentValue: 'currentValue',
    unit: 'unit',
    weight: 'weight',
    objectiveId: 'objectiveId',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KeyResultScalarFieldEnum = (typeof KeyResultScalarFieldEnum)[keyof typeof KeyResultScalarFieldEnum]


  export const ProgressUpdateScalarFieldEnum: {
    id: 'id',
    value: 'value',
    notes: 'notes',
    evidence: 'evidence',
    keyResultId: 'keyResultId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type ProgressUpdateScalarFieldEnum = (typeof ProgressUpdateScalarFieldEnum)[keyof typeof ProgressUpdateScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    score: 'score',
    feedback: 'feedback',
    reviewDate: 'reviewDate',
    reviewType: 'reviewType',
    objectiveId: 'objectiveId',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    read: 'read',
    actionUrl: 'actionUrl',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ObjectiveType'
   */
  export type EnumObjectiveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ObjectiveType'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'MetricType'
   */
  export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>
    


  /**
   * Reference to a field of type 'ReviewType'
   */
  export type EnumReviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewType'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    position?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departmentId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    employees?: UserListRelationFilter
    ownedObjectives?: ObjectiveListRelationFilter
    contributedObjectives?: ObjectiveListRelationFilter
    extendedObjectives?: ObjectiveListRelationFilter
    keyResults?: KeyResultListRelationFilter
    progressUpdates?: ProgressUpdateListRelationFilter
    reviews?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    notifications?: NotificationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    position?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    department?: DepartmentOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    employees?: UserOrderByRelationAggregateInput
    ownedObjectives?: ObjectiveOrderByRelationAggregateInput
    contributedObjectives?: ObjectiveOrderByRelationAggregateInput
    extendedObjectives?: ObjectiveOrderByRelationAggregateInput
    keyResults?: KeyResultOrderByRelationAggregateInput
    progressUpdates?: ProgressUpdateOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    position?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departmentId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    employees?: UserListRelationFilter
    ownedObjectives?: ObjectiveListRelationFilter
    contributedObjectives?: ObjectiveListRelationFilter
    extendedObjectives?: ObjectiveListRelationFilter
    keyResults?: KeyResultListRelationFilter
    progressUpdates?: ProgressUpdateListRelationFilter
    reviews?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    notifications?: NotificationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    position?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    departmentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    parentId?: StringNullableFilter<"Department"> | string | null
    headId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    parent?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    children?: DepartmentListRelationFilter
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    headId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: DepartmentOrderByWithRelationInput
    children?: DepartmentOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    parentId?: StringNullableFilter<"Department"> | string | null
    headId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    parent?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    children?: DepartmentListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    headId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    parentId?: StringNullableWithAggregatesFilter<"Department"> | string | null
    headId?: StringNullableWithAggregatesFilter<"Department"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type CycleWhereInput = {
    AND?: CycleWhereInput | CycleWhereInput[]
    OR?: CycleWhereInput[]
    NOT?: CycleWhereInput | CycleWhereInput[]
    id?: StringFilter<"Cycle"> | string
    name?: StringFilter<"Cycle"> | string
    description?: StringNullableFilter<"Cycle"> | string | null
    startDate?: DateTimeFilter<"Cycle"> | Date | string
    endDate?: DateTimeFilter<"Cycle"> | Date | string
    active?: BoolFilter<"Cycle"> | boolean
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
    objectives?: ObjectiveListRelationFilter
  }

  export type CycleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    objectives?: ObjectiveOrderByRelationAggregateInput
  }

  export type CycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CycleWhereInput | CycleWhereInput[]
    OR?: CycleWhereInput[]
    NOT?: CycleWhereInput | CycleWhereInput[]
    name?: StringFilter<"Cycle"> | string
    description?: StringNullableFilter<"Cycle"> | string | null
    startDate?: DateTimeFilter<"Cycle"> | Date | string
    endDate?: DateTimeFilter<"Cycle"> | Date | string
    active?: BoolFilter<"Cycle"> | boolean
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
    objectives?: ObjectiveListRelationFilter
  }, "id">

  export type CycleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CycleCountOrderByAggregateInput
    _max?: CycleMaxOrderByAggregateInput
    _min?: CycleMinOrderByAggregateInput
  }

  export type CycleScalarWhereWithAggregatesInput = {
    AND?: CycleScalarWhereWithAggregatesInput | CycleScalarWhereWithAggregatesInput[]
    OR?: CycleScalarWhereWithAggregatesInput[]
    NOT?: CycleScalarWhereWithAggregatesInput | CycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cycle"> | string
    name?: StringWithAggregatesFilter<"Cycle"> | string
    description?: StringNullableWithAggregatesFilter<"Cycle"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    active?: BoolWithAggregatesFilter<"Cycle"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
  }

  export type ObjectiveWhereInput = {
    AND?: ObjectiveWhereInput | ObjectiveWhereInput[]
    OR?: ObjectiveWhereInput[]
    NOT?: ObjectiveWhereInput | ObjectiveWhereInput[]
    id?: StringFilter<"Objective"> | string
    title?: StringFilter<"Objective"> | string
    description?: StringNullableFilter<"Objective"> | string | null
    type?: EnumObjectiveTypeFilter<"Objective"> | $Enums.ObjectiveType
    status?: EnumStatusFilter<"Objective"> | $Enums.Status
    weight?: FloatNullableFilter<"Objective"> | number | null
    wasMissed?: BoolNullableFilter<"Objective"> | boolean | null
    originalEndDate?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extendedDeadline?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extensionReason?: StringNullableFilter<"Objective"> | string | null
    missedReason?: StringNullableFilter<"Objective"> | string | null
    dateExtended?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extendedBy?: StringNullableFilter<"Objective"> | string | null
    ownerId?: StringFilter<"Objective"> | string
    cycleId?: StringFilter<"Objective"> | string
    parentId?: StringNullableFilter<"Objective"> | string | null
    createdAt?: DateTimeFilter<"Objective"> | Date | string
    updatedAt?: DateTimeFilter<"Objective"> | Date | string
    extendedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    contributors?: UserListRelationFilter
    cycle?: XOR<CycleScalarRelationFilter, CycleWhereInput>
    parent?: XOR<ObjectiveNullableScalarRelationFilter, ObjectiveWhereInput> | null
    children?: ObjectiveListRelationFilter
    keyResults?: KeyResultListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ObjectiveOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    weight?: SortOrderInput | SortOrder
    wasMissed?: SortOrderInput | SortOrder
    originalEndDate?: SortOrderInput | SortOrder
    extendedDeadline?: SortOrderInput | SortOrder
    extensionReason?: SortOrderInput | SortOrder
    missedReason?: SortOrderInput | SortOrder
    dateExtended?: SortOrderInput | SortOrder
    extendedBy?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    cycleId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extendedByUser?: UserOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    contributors?: UserOrderByRelationAggregateInput
    cycle?: CycleOrderByWithRelationInput
    parent?: ObjectiveOrderByWithRelationInput
    children?: ObjectiveOrderByRelationAggregateInput
    keyResults?: KeyResultOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ObjectiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObjectiveWhereInput | ObjectiveWhereInput[]
    OR?: ObjectiveWhereInput[]
    NOT?: ObjectiveWhereInput | ObjectiveWhereInput[]
    title?: StringFilter<"Objective"> | string
    description?: StringNullableFilter<"Objective"> | string | null
    type?: EnumObjectiveTypeFilter<"Objective"> | $Enums.ObjectiveType
    status?: EnumStatusFilter<"Objective"> | $Enums.Status
    weight?: FloatNullableFilter<"Objective"> | number | null
    wasMissed?: BoolNullableFilter<"Objective"> | boolean | null
    originalEndDate?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extendedDeadline?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extensionReason?: StringNullableFilter<"Objective"> | string | null
    missedReason?: StringNullableFilter<"Objective"> | string | null
    dateExtended?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extendedBy?: StringNullableFilter<"Objective"> | string | null
    ownerId?: StringFilter<"Objective"> | string
    cycleId?: StringFilter<"Objective"> | string
    parentId?: StringNullableFilter<"Objective"> | string | null
    createdAt?: DateTimeFilter<"Objective"> | Date | string
    updatedAt?: DateTimeFilter<"Objective"> | Date | string
    extendedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    contributors?: UserListRelationFilter
    cycle?: XOR<CycleScalarRelationFilter, CycleWhereInput>
    parent?: XOR<ObjectiveNullableScalarRelationFilter, ObjectiveWhereInput> | null
    children?: ObjectiveListRelationFilter
    keyResults?: KeyResultListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ObjectiveOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    weight?: SortOrderInput | SortOrder
    wasMissed?: SortOrderInput | SortOrder
    originalEndDate?: SortOrderInput | SortOrder
    extendedDeadline?: SortOrderInput | SortOrder
    extensionReason?: SortOrderInput | SortOrder
    missedReason?: SortOrderInput | SortOrder
    dateExtended?: SortOrderInput | SortOrder
    extendedBy?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    cycleId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ObjectiveCountOrderByAggregateInput
    _avg?: ObjectiveAvgOrderByAggregateInput
    _max?: ObjectiveMaxOrderByAggregateInput
    _min?: ObjectiveMinOrderByAggregateInput
    _sum?: ObjectiveSumOrderByAggregateInput
  }

  export type ObjectiveScalarWhereWithAggregatesInput = {
    AND?: ObjectiveScalarWhereWithAggregatesInput | ObjectiveScalarWhereWithAggregatesInput[]
    OR?: ObjectiveScalarWhereWithAggregatesInput[]
    NOT?: ObjectiveScalarWhereWithAggregatesInput | ObjectiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Objective"> | string
    title?: StringWithAggregatesFilter<"Objective"> | string
    description?: StringNullableWithAggregatesFilter<"Objective"> | string | null
    type?: EnumObjectiveTypeWithAggregatesFilter<"Objective"> | $Enums.ObjectiveType
    status?: EnumStatusWithAggregatesFilter<"Objective"> | $Enums.Status
    weight?: FloatNullableWithAggregatesFilter<"Objective"> | number | null
    wasMissed?: BoolNullableWithAggregatesFilter<"Objective"> | boolean | null
    originalEndDate?: DateTimeNullableWithAggregatesFilter<"Objective"> | Date | string | null
    extendedDeadline?: DateTimeNullableWithAggregatesFilter<"Objective"> | Date | string | null
    extensionReason?: StringNullableWithAggregatesFilter<"Objective"> | string | null
    missedReason?: StringNullableWithAggregatesFilter<"Objective"> | string | null
    dateExtended?: DateTimeNullableWithAggregatesFilter<"Objective"> | Date | string | null
    extendedBy?: StringNullableWithAggregatesFilter<"Objective"> | string | null
    ownerId?: StringWithAggregatesFilter<"Objective"> | string
    cycleId?: StringWithAggregatesFilter<"Objective"> | string
    parentId?: StringNullableWithAggregatesFilter<"Objective"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Objective"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Objective"> | Date | string
  }

  export type KeyResultWhereInput = {
    AND?: KeyResultWhereInput | KeyResultWhereInput[]
    OR?: KeyResultWhereInput[]
    NOT?: KeyResultWhereInput | KeyResultWhereInput[]
    id?: StringFilter<"KeyResult"> | string
    description?: StringFilter<"KeyResult"> | string
    metricType?: EnumMetricTypeFilter<"KeyResult"> | $Enums.MetricType
    targetValue?: FloatFilter<"KeyResult"> | number
    currentValue?: FloatFilter<"KeyResult"> | number
    unit?: StringNullableFilter<"KeyResult"> | string | null
    weight?: FloatNullableFilter<"KeyResult"> | number | null
    objectiveId?: StringFilter<"KeyResult"> | string
    ownerId?: StringFilter<"KeyResult"> | string
    createdAt?: DateTimeFilter<"KeyResult"> | Date | string
    updatedAt?: DateTimeFilter<"KeyResult"> | Date | string
    objective?: XOR<ObjectiveScalarRelationFilter, ObjectiveWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    progressUpdates?: ProgressUpdateListRelationFilter
  }

  export type KeyResultOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    unit?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    objectiveId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    objective?: ObjectiveOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    progressUpdates?: ProgressUpdateOrderByRelationAggregateInput
  }

  export type KeyResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KeyResultWhereInput | KeyResultWhereInput[]
    OR?: KeyResultWhereInput[]
    NOT?: KeyResultWhereInput | KeyResultWhereInput[]
    description?: StringFilter<"KeyResult"> | string
    metricType?: EnumMetricTypeFilter<"KeyResult"> | $Enums.MetricType
    targetValue?: FloatFilter<"KeyResult"> | number
    currentValue?: FloatFilter<"KeyResult"> | number
    unit?: StringNullableFilter<"KeyResult"> | string | null
    weight?: FloatNullableFilter<"KeyResult"> | number | null
    objectiveId?: StringFilter<"KeyResult"> | string
    ownerId?: StringFilter<"KeyResult"> | string
    createdAt?: DateTimeFilter<"KeyResult"> | Date | string
    updatedAt?: DateTimeFilter<"KeyResult"> | Date | string
    objective?: XOR<ObjectiveScalarRelationFilter, ObjectiveWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    progressUpdates?: ProgressUpdateListRelationFilter
  }, "id">

  export type KeyResultOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    unit?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    objectiveId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KeyResultCountOrderByAggregateInput
    _avg?: KeyResultAvgOrderByAggregateInput
    _max?: KeyResultMaxOrderByAggregateInput
    _min?: KeyResultMinOrderByAggregateInput
    _sum?: KeyResultSumOrderByAggregateInput
  }

  export type KeyResultScalarWhereWithAggregatesInput = {
    AND?: KeyResultScalarWhereWithAggregatesInput | KeyResultScalarWhereWithAggregatesInput[]
    OR?: KeyResultScalarWhereWithAggregatesInput[]
    NOT?: KeyResultScalarWhereWithAggregatesInput | KeyResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KeyResult"> | string
    description?: StringWithAggregatesFilter<"KeyResult"> | string
    metricType?: EnumMetricTypeWithAggregatesFilter<"KeyResult"> | $Enums.MetricType
    targetValue?: FloatWithAggregatesFilter<"KeyResult"> | number
    currentValue?: FloatWithAggregatesFilter<"KeyResult"> | number
    unit?: StringNullableWithAggregatesFilter<"KeyResult"> | string | null
    weight?: FloatNullableWithAggregatesFilter<"KeyResult"> | number | null
    objectiveId?: StringWithAggregatesFilter<"KeyResult"> | string
    ownerId?: StringWithAggregatesFilter<"KeyResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KeyResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KeyResult"> | Date | string
  }

  export type ProgressUpdateWhereInput = {
    AND?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    OR?: ProgressUpdateWhereInput[]
    NOT?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    id?: StringFilter<"ProgressUpdate"> | string
    value?: FloatFilter<"ProgressUpdate"> | number
    notes?: StringNullableFilter<"ProgressUpdate"> | string | null
    evidence?: StringNullableFilter<"ProgressUpdate"> | string | null
    keyResultId?: StringFilter<"ProgressUpdate"> | string
    createdById?: StringFilter<"ProgressUpdate"> | string
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    keyResult?: XOR<KeyResultScalarRelationFilter, KeyResultWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressUpdateOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    notes?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    keyResultId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    keyResult?: KeyResultOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ProgressUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    OR?: ProgressUpdateWhereInput[]
    NOT?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    value?: FloatFilter<"ProgressUpdate"> | number
    notes?: StringNullableFilter<"ProgressUpdate"> | string | null
    evidence?: StringNullableFilter<"ProgressUpdate"> | string | null
    keyResultId?: StringFilter<"ProgressUpdate"> | string
    createdById?: StringFilter<"ProgressUpdate"> | string
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    keyResult?: XOR<KeyResultScalarRelationFilter, KeyResultWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProgressUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    notes?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    keyResultId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: ProgressUpdateCountOrderByAggregateInput
    _avg?: ProgressUpdateAvgOrderByAggregateInput
    _max?: ProgressUpdateMaxOrderByAggregateInput
    _min?: ProgressUpdateMinOrderByAggregateInput
    _sum?: ProgressUpdateSumOrderByAggregateInput
  }

  export type ProgressUpdateScalarWhereWithAggregatesInput = {
    AND?: ProgressUpdateScalarWhereWithAggregatesInput | ProgressUpdateScalarWhereWithAggregatesInput[]
    OR?: ProgressUpdateScalarWhereWithAggregatesInput[]
    NOT?: ProgressUpdateScalarWhereWithAggregatesInput | ProgressUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    value?: FloatWithAggregatesFilter<"ProgressUpdate"> | number
    notes?: StringNullableWithAggregatesFilter<"ProgressUpdate"> | string | null
    evidence?: StringNullableWithAggregatesFilter<"ProgressUpdate"> | string | null
    keyResultId?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    createdById?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProgressUpdate"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    score?: FloatNullableFilter<"Review"> | number | null
    feedback?: StringNullableFilter<"Review"> | string | null
    reviewDate?: DateTimeFilter<"Review"> | Date | string
    reviewType?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    objectiveId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    objective?: XOR<ObjectiveScalarRelationFilter, ObjectiveWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    reviewDate?: SortOrder
    reviewType?: SortOrder
    objectiveId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    objective?: ObjectiveOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    reviewee?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    score?: FloatNullableFilter<"Review"> | number | null
    feedback?: StringNullableFilter<"Review"> | string | null
    reviewDate?: DateTimeFilter<"Review"> | Date | string
    reviewType?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    objectiveId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    objective?: XOR<ObjectiveScalarRelationFilter, ObjectiveWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    reviewDate?: SortOrder
    reviewType?: SortOrder
    objectiveId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    score?: FloatNullableWithAggregatesFilter<"Review"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Review"> | string | null
    reviewDate?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    reviewType?: EnumReviewTypeWithAggregatesFilter<"Review"> | $Enums.ReviewType
    objectiveId?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    revieweeId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    actionUrl?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    userId?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    type?: EnumObjectiveTypeFilter<"Template"> | $Enums.ObjectiveType
    content?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    type?: EnumObjectiveTypeFilter<"Template"> | $Enums.ObjectiveType
    content?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    description?: StringNullableWithAggregatesFilter<"Template"> | string | null
    type?: EnumObjectiveTypeWithAggregatesFilter<"Template"> | $Enums.ObjectiveType
    content?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DepartmentCreateNestedOneWithoutChildrenInput
    children?: DepartmentCreateNestedManyWithoutParentInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    parentId?: string | null
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput
    children?: DepartmentUpdateManyWithoutParentNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    parentId?: string | null
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    objectives?: ObjectiveCreateNestedManyWithoutCycleInput
  }

  export type CycleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    objectives?: ObjectiveUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objectives?: ObjectiveUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objectives?: ObjectiveUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CycleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectiveCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyResultCreateInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    objective: ObjectiveCreateNestedOneWithoutKeyResultsInput
    owner: UserCreateNestedOneWithoutKeyResultsInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutKeyResultInput
  }

  export type KeyResultUncheckedCreateInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    objectiveId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutKeyResultInput
  }

  export type KeyResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objective?: ObjectiveUpdateOneRequiredWithoutKeyResultsNestedInput
    owner?: UserUpdateOneRequiredWithoutKeyResultsNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutKeyResultNestedInput
  }

  export type KeyResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    objectiveId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutKeyResultNestedInput
  }

  export type KeyResultCreateManyInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    objectiveId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    objectiveId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    createdAt?: Date | string
    keyResult: KeyResultCreateNestedOneWithoutProgressUpdatesInput
    createdBy: UserCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    keyResultId: string
    createdById: string
    createdAt?: Date | string
  }

  export type ProgressUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyResult?: KeyResultUpdateOneRequiredWithoutProgressUpdatesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    keyResultId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateManyInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    keyResultId: string
    createdById: string
    createdAt?: Date | string
  }

  export type ProgressUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    keyResultId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    createdAt?: Date | string
    updatedAt?: Date | string
    objective: ObjectiveCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    objectiveId: string
    reviewerId: string
    revieweeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objective?: ObjectiveUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    objectiveId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    objectiveId: string
    reviewerId: string
    revieweeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    objectiveId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ObjectiveType
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ObjectiveType
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ObjectiveType
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ObjectiveListRelationFilter = {
    every?: ObjectiveWhereInput
    some?: ObjectiveWhereInput
    none?: ObjectiveWhereInput
  }

  export type KeyResultListRelationFilter = {
    every?: KeyResultWhereInput
    some?: KeyResultWhereInput
    none?: KeyResultWhereInput
  }

  export type ProgressUpdateListRelationFilter = {
    every?: ProgressUpdateWhereInput
    some?: ProgressUpdateWhereInput
    none?: ProgressUpdateWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObjectiveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeyResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    position?: SortOrder
    avatar?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    position?: SortOrder
    avatar?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    position?: SortOrder
    avatar?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    headId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    headId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    headId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumObjectiveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectiveType | EnumObjectiveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectiveType[]
    notIn?: $Enums.ObjectiveType[]
    not?: NestedEnumObjectiveTypeFilter<$PrismaModel> | $Enums.ObjectiveType
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CycleScalarRelationFilter = {
    is?: CycleWhereInput
    isNot?: CycleWhereInput
  }

  export type ObjectiveNullableScalarRelationFilter = {
    is?: ObjectiveWhereInput | null
    isNot?: ObjectiveWhereInput | null
  }

  export type ObjectiveCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    weight?: SortOrder
    wasMissed?: SortOrder
    originalEndDate?: SortOrder
    extendedDeadline?: SortOrder
    extensionReason?: SortOrder
    missedReason?: SortOrder
    dateExtended?: SortOrder
    extendedBy?: SortOrder
    ownerId?: SortOrder
    cycleId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjectiveAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type ObjectiveMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    weight?: SortOrder
    wasMissed?: SortOrder
    originalEndDate?: SortOrder
    extendedDeadline?: SortOrder
    extensionReason?: SortOrder
    missedReason?: SortOrder
    dateExtended?: SortOrder
    extendedBy?: SortOrder
    ownerId?: SortOrder
    cycleId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjectiveMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    weight?: SortOrder
    wasMissed?: SortOrder
    originalEndDate?: SortOrder
    extendedDeadline?: SortOrder
    extensionReason?: SortOrder
    missedReason?: SortOrder
    dateExtended?: SortOrder
    extendedBy?: SortOrder
    ownerId?: SortOrder
    cycleId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjectiveSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type EnumObjectiveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectiveType | EnumObjectiveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectiveType[]
    notIn?: $Enums.ObjectiveType[]
    not?: NestedEnumObjectiveTypeWithAggregatesFilter<$PrismaModel> | $Enums.ObjectiveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumObjectiveTypeFilter<$PrismaModel>
    _max?: NestedEnumObjectiveTypeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ObjectiveScalarRelationFilter = {
    is?: ObjectiveWhereInput
    isNot?: ObjectiveWhereInput
  }

  export type KeyResultCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    unit?: SortOrder
    weight?: SortOrder
    objectiveId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyResultAvgOrderByAggregateInput = {
    targetValue?: SortOrder
    currentValue?: SortOrder
    weight?: SortOrder
  }

  export type KeyResultMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    unit?: SortOrder
    weight?: SortOrder
    objectiveId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyResultMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    unit?: SortOrder
    weight?: SortOrder
    objectiveId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyResultSumOrderByAggregateInput = {
    targetValue?: SortOrder
    currentValue?: SortOrder
    weight?: SortOrder
  }

  export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type KeyResultScalarRelationFilter = {
    is?: KeyResultWhereInput
    isNot?: KeyResultWhereInput
  }

  export type ProgressUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    evidence?: SortOrder
    keyResultId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressUpdateAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ProgressUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    evidence?: SortOrder
    keyResultId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    evidence?: SortOrder
    keyResultId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressUpdateSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    reviewDate?: SortOrder
    reviewType?: SortOrder
    objectiveId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    reviewDate?: SortOrder
    reviewType?: SortOrder
    objectiveId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    reviewDate?: SortOrder
    reviewType?: SortOrder
    objectiveId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewTypeFilter<$PrismaModel>
    _max?: NestedEnumReviewTypeFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ObjectiveCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ObjectiveCreateWithoutOwnerInput, ObjectiveUncheckedCreateWithoutOwnerInput> | ObjectiveCreateWithoutOwnerInput[] | ObjectiveUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutOwnerInput | ObjectiveCreateOrConnectWithoutOwnerInput[]
    createMany?: ObjectiveCreateManyOwnerInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type ObjectiveCreateNestedManyWithoutContributorsInput = {
    create?: XOR<ObjectiveCreateWithoutContributorsInput, ObjectiveUncheckedCreateWithoutContributorsInput> | ObjectiveCreateWithoutContributorsInput[] | ObjectiveUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutContributorsInput | ObjectiveCreateOrConnectWithoutContributorsInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type ObjectiveCreateNestedManyWithoutExtendedByUserInput = {
    create?: XOR<ObjectiveCreateWithoutExtendedByUserInput, ObjectiveUncheckedCreateWithoutExtendedByUserInput> | ObjectiveCreateWithoutExtendedByUserInput[] | ObjectiveUncheckedCreateWithoutExtendedByUserInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutExtendedByUserInput | ObjectiveCreateOrConnectWithoutExtendedByUserInput[]
    createMany?: ObjectiveCreateManyExtendedByUserInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type KeyResultCreateNestedManyWithoutOwnerInput = {
    create?: XOR<KeyResultCreateWithoutOwnerInput, KeyResultUncheckedCreateWithoutOwnerInput> | KeyResultCreateWithoutOwnerInput[] | KeyResultUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutOwnerInput | KeyResultCreateOrConnectWithoutOwnerInput[]
    createMany?: KeyResultCreateManyOwnerInputEnvelope
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
  }

  export type ProgressUpdateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProgressUpdateCreateWithoutCreatedByInput, ProgressUpdateUncheckedCreateWithoutCreatedByInput> | ProgressUpdateCreateWithoutCreatedByInput[] | ProgressUpdateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutCreatedByInput | ProgressUpdateCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProgressUpdateCreateManyCreatedByInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ObjectiveUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ObjectiveCreateWithoutOwnerInput, ObjectiveUncheckedCreateWithoutOwnerInput> | ObjectiveCreateWithoutOwnerInput[] | ObjectiveUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutOwnerInput | ObjectiveCreateOrConnectWithoutOwnerInput[]
    createMany?: ObjectiveCreateManyOwnerInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type ObjectiveUncheckedCreateNestedManyWithoutContributorsInput = {
    create?: XOR<ObjectiveCreateWithoutContributorsInput, ObjectiveUncheckedCreateWithoutContributorsInput> | ObjectiveCreateWithoutContributorsInput[] | ObjectiveUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutContributorsInput | ObjectiveCreateOrConnectWithoutContributorsInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput = {
    create?: XOR<ObjectiveCreateWithoutExtendedByUserInput, ObjectiveUncheckedCreateWithoutExtendedByUserInput> | ObjectiveCreateWithoutExtendedByUserInput[] | ObjectiveUncheckedCreateWithoutExtendedByUserInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutExtendedByUserInput | ObjectiveCreateOrConnectWithoutExtendedByUserInput[]
    createMany?: ObjectiveCreateManyExtendedByUserInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type KeyResultUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<KeyResultCreateWithoutOwnerInput, KeyResultUncheckedCreateWithoutOwnerInput> | KeyResultCreateWithoutOwnerInput[] | KeyResultUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutOwnerInput | KeyResultCreateOrConnectWithoutOwnerInput[]
    createMany?: KeyResultCreateManyOwnerInputEnvelope
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
  }

  export type ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProgressUpdateCreateWithoutCreatedByInput, ProgressUpdateUncheckedCreateWithoutCreatedByInput> | ProgressUpdateCreateWithoutCreatedByInput[] | ProgressUpdateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutCreatedByInput | ProgressUpdateCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProgressUpdateCreateManyCreatedByInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepartmentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeesInput, UserUpdateWithoutEmployeesInput>, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ObjectiveUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ObjectiveCreateWithoutOwnerInput, ObjectiveUncheckedCreateWithoutOwnerInput> | ObjectiveCreateWithoutOwnerInput[] | ObjectiveUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutOwnerInput | ObjectiveCreateOrConnectWithoutOwnerInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutOwnerInput | ObjectiveUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ObjectiveCreateManyOwnerInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutOwnerInput | ObjectiveUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutOwnerInput | ObjectiveUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type ObjectiveUpdateManyWithoutContributorsNestedInput = {
    create?: XOR<ObjectiveCreateWithoutContributorsInput, ObjectiveUncheckedCreateWithoutContributorsInput> | ObjectiveCreateWithoutContributorsInput[] | ObjectiveUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutContributorsInput | ObjectiveCreateOrConnectWithoutContributorsInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutContributorsInput | ObjectiveUpsertWithWhereUniqueWithoutContributorsInput[]
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutContributorsInput | ObjectiveUpdateWithWhereUniqueWithoutContributorsInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutContributorsInput | ObjectiveUpdateManyWithWhereWithoutContributorsInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type ObjectiveUpdateManyWithoutExtendedByUserNestedInput = {
    create?: XOR<ObjectiveCreateWithoutExtendedByUserInput, ObjectiveUncheckedCreateWithoutExtendedByUserInput> | ObjectiveCreateWithoutExtendedByUserInput[] | ObjectiveUncheckedCreateWithoutExtendedByUserInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutExtendedByUserInput | ObjectiveCreateOrConnectWithoutExtendedByUserInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutExtendedByUserInput | ObjectiveUpsertWithWhereUniqueWithoutExtendedByUserInput[]
    createMany?: ObjectiveCreateManyExtendedByUserInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutExtendedByUserInput | ObjectiveUpdateWithWhereUniqueWithoutExtendedByUserInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutExtendedByUserInput | ObjectiveUpdateManyWithWhereWithoutExtendedByUserInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type KeyResultUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<KeyResultCreateWithoutOwnerInput, KeyResultUncheckedCreateWithoutOwnerInput> | KeyResultCreateWithoutOwnerInput[] | KeyResultUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutOwnerInput | KeyResultCreateOrConnectWithoutOwnerInput[]
    upsert?: KeyResultUpsertWithWhereUniqueWithoutOwnerInput | KeyResultUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: KeyResultCreateManyOwnerInputEnvelope
    set?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    disconnect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    delete?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    update?: KeyResultUpdateWithWhereUniqueWithoutOwnerInput | KeyResultUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: KeyResultUpdateManyWithWhereWithoutOwnerInput | KeyResultUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: KeyResultScalarWhereInput | KeyResultScalarWhereInput[]
  }

  export type ProgressUpdateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutCreatedByInput, ProgressUpdateUncheckedCreateWithoutCreatedByInput> | ProgressUpdateCreateWithoutCreatedByInput[] | ProgressUpdateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutCreatedByInput | ProgressUpdateCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutCreatedByInput | ProgressUpdateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProgressUpdateCreateManyCreatedByInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutCreatedByInput | ProgressUpdateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutCreatedByInput | ProgressUpdateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ObjectiveCreateWithoutOwnerInput, ObjectiveUncheckedCreateWithoutOwnerInput> | ObjectiveCreateWithoutOwnerInput[] | ObjectiveUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutOwnerInput | ObjectiveCreateOrConnectWithoutOwnerInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutOwnerInput | ObjectiveUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ObjectiveCreateManyOwnerInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutOwnerInput | ObjectiveUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutOwnerInput | ObjectiveUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput = {
    create?: XOR<ObjectiveCreateWithoutContributorsInput, ObjectiveUncheckedCreateWithoutContributorsInput> | ObjectiveCreateWithoutContributorsInput[] | ObjectiveUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutContributorsInput | ObjectiveCreateOrConnectWithoutContributorsInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutContributorsInput | ObjectiveUpsertWithWhereUniqueWithoutContributorsInput[]
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutContributorsInput | ObjectiveUpdateWithWhereUniqueWithoutContributorsInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutContributorsInput | ObjectiveUpdateManyWithWhereWithoutContributorsInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput = {
    create?: XOR<ObjectiveCreateWithoutExtendedByUserInput, ObjectiveUncheckedCreateWithoutExtendedByUserInput> | ObjectiveCreateWithoutExtendedByUserInput[] | ObjectiveUncheckedCreateWithoutExtendedByUserInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutExtendedByUserInput | ObjectiveCreateOrConnectWithoutExtendedByUserInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutExtendedByUserInput | ObjectiveUpsertWithWhereUniqueWithoutExtendedByUserInput[]
    createMany?: ObjectiveCreateManyExtendedByUserInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutExtendedByUserInput | ObjectiveUpdateWithWhereUniqueWithoutExtendedByUserInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutExtendedByUserInput | ObjectiveUpdateManyWithWhereWithoutExtendedByUserInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type KeyResultUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<KeyResultCreateWithoutOwnerInput, KeyResultUncheckedCreateWithoutOwnerInput> | KeyResultCreateWithoutOwnerInput[] | KeyResultUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutOwnerInput | KeyResultCreateOrConnectWithoutOwnerInput[]
    upsert?: KeyResultUpsertWithWhereUniqueWithoutOwnerInput | KeyResultUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: KeyResultCreateManyOwnerInputEnvelope
    set?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    disconnect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    delete?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    update?: KeyResultUpdateWithWhereUniqueWithoutOwnerInput | KeyResultUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: KeyResultUpdateManyWithWhereWithoutOwnerInput | KeyResultUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: KeyResultScalarWhereInput | KeyResultScalarWhereInput[]
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutCreatedByInput, ProgressUpdateUncheckedCreateWithoutCreatedByInput> | ProgressUpdateCreateWithoutCreatedByInput[] | ProgressUpdateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutCreatedByInput | ProgressUpdateCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutCreatedByInput | ProgressUpdateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProgressUpdateCreateManyCreatedByInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutCreatedByInput | ProgressUpdateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutCreatedByInput | ProgressUpdateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type DepartmentCreateNestedOneWithoutChildrenInput = {
    create?: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentCreateNestedManyWithoutParentInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput
    upsert?: DepartmentUpsertWithoutChildrenInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutChildrenInput, DepartmentUpdateWithoutChildrenInput>, DepartmentUncheckedUpdateWithoutChildrenInput>
  }

  export type DepartmentUpdateManyWithoutParentNestedInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutParentInput | DepartmentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutParentInput | DepartmentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutParentInput | DepartmentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutParentInput | DepartmentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutParentInput | DepartmentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutParentInput | DepartmentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ObjectiveCreateNestedManyWithoutCycleInput = {
    create?: XOR<ObjectiveCreateWithoutCycleInput, ObjectiveUncheckedCreateWithoutCycleInput> | ObjectiveCreateWithoutCycleInput[] | ObjectiveUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutCycleInput | ObjectiveCreateOrConnectWithoutCycleInput[]
    createMany?: ObjectiveCreateManyCycleInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type ObjectiveUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<ObjectiveCreateWithoutCycleInput, ObjectiveUncheckedCreateWithoutCycleInput> | ObjectiveCreateWithoutCycleInput[] | ObjectiveUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutCycleInput | ObjectiveCreateOrConnectWithoutCycleInput[]
    createMany?: ObjectiveCreateManyCycleInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type ObjectiveUpdateManyWithoutCycleNestedInput = {
    create?: XOR<ObjectiveCreateWithoutCycleInput, ObjectiveUncheckedCreateWithoutCycleInput> | ObjectiveCreateWithoutCycleInput[] | ObjectiveUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutCycleInput | ObjectiveCreateOrConnectWithoutCycleInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutCycleInput | ObjectiveUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: ObjectiveCreateManyCycleInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutCycleInput | ObjectiveUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutCycleInput | ObjectiveUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type ObjectiveUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<ObjectiveCreateWithoutCycleInput, ObjectiveUncheckedCreateWithoutCycleInput> | ObjectiveCreateWithoutCycleInput[] | ObjectiveUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutCycleInput | ObjectiveCreateOrConnectWithoutCycleInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutCycleInput | ObjectiveUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: ObjectiveCreateManyCycleInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutCycleInput | ObjectiveUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutCycleInput | ObjectiveUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExtendedObjectivesInput = {
    create?: XOR<UserCreateWithoutExtendedObjectivesInput, UserUncheckedCreateWithoutExtendedObjectivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExtendedObjectivesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnedObjectivesInput = {
    create?: XOR<UserCreateWithoutOwnedObjectivesInput, UserUncheckedCreateWithoutOwnedObjectivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedObjectivesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutContributedObjectivesInput = {
    create?: XOR<UserCreateWithoutContributedObjectivesInput, UserUncheckedCreateWithoutContributedObjectivesInput> | UserCreateWithoutContributedObjectivesInput[] | UserUncheckedCreateWithoutContributedObjectivesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutContributedObjectivesInput | UserCreateOrConnectWithoutContributedObjectivesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CycleCreateNestedOneWithoutObjectivesInput = {
    create?: XOR<CycleCreateWithoutObjectivesInput, CycleUncheckedCreateWithoutObjectivesInput>
    connectOrCreate?: CycleCreateOrConnectWithoutObjectivesInput
    connect?: CycleWhereUniqueInput
  }

  export type ObjectiveCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ObjectiveCreateWithoutChildrenInput, ObjectiveUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ObjectiveCreateOrConnectWithoutChildrenInput
    connect?: ObjectiveWhereUniqueInput
  }

  export type ObjectiveCreateNestedManyWithoutParentInput = {
    create?: XOR<ObjectiveCreateWithoutParentInput, ObjectiveUncheckedCreateWithoutParentInput> | ObjectiveCreateWithoutParentInput[] | ObjectiveUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutParentInput | ObjectiveCreateOrConnectWithoutParentInput[]
    createMany?: ObjectiveCreateManyParentInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type KeyResultCreateNestedManyWithoutObjectiveInput = {
    create?: XOR<KeyResultCreateWithoutObjectiveInput, KeyResultUncheckedCreateWithoutObjectiveInput> | KeyResultCreateWithoutObjectiveInput[] | KeyResultUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutObjectiveInput | KeyResultCreateOrConnectWithoutObjectiveInput[]
    createMany?: KeyResultCreateManyObjectiveInputEnvelope
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutObjectiveInput = {
    create?: XOR<ReviewCreateWithoutObjectiveInput, ReviewUncheckedCreateWithoutObjectiveInput> | ReviewCreateWithoutObjectiveInput[] | ReviewUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutObjectiveInput | ReviewCreateOrConnectWithoutObjectiveInput[]
    createMany?: ReviewCreateManyObjectiveInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutContributedObjectivesInput = {
    create?: XOR<UserCreateWithoutContributedObjectivesInput, UserUncheckedCreateWithoutContributedObjectivesInput> | UserCreateWithoutContributedObjectivesInput[] | UserUncheckedCreateWithoutContributedObjectivesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutContributedObjectivesInput | UserCreateOrConnectWithoutContributedObjectivesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ObjectiveUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ObjectiveCreateWithoutParentInput, ObjectiveUncheckedCreateWithoutParentInput> | ObjectiveCreateWithoutParentInput[] | ObjectiveUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutParentInput | ObjectiveCreateOrConnectWithoutParentInput[]
    createMany?: ObjectiveCreateManyParentInputEnvelope
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
  }

  export type KeyResultUncheckedCreateNestedManyWithoutObjectiveInput = {
    create?: XOR<KeyResultCreateWithoutObjectiveInput, KeyResultUncheckedCreateWithoutObjectiveInput> | KeyResultCreateWithoutObjectiveInput[] | KeyResultUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutObjectiveInput | KeyResultCreateOrConnectWithoutObjectiveInput[]
    createMany?: KeyResultCreateManyObjectiveInputEnvelope
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutObjectiveInput = {
    create?: XOR<ReviewCreateWithoutObjectiveInput, ReviewUncheckedCreateWithoutObjectiveInput> | ReviewCreateWithoutObjectiveInput[] | ReviewUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutObjectiveInput | ReviewCreateOrConnectWithoutObjectiveInput[]
    createMany?: ReviewCreateManyObjectiveInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumObjectiveTypeFieldUpdateOperationsInput = {
    set?: $Enums.ObjectiveType
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutExtendedObjectivesNestedInput = {
    create?: XOR<UserCreateWithoutExtendedObjectivesInput, UserUncheckedCreateWithoutExtendedObjectivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExtendedObjectivesInput
    upsert?: UserUpsertWithoutExtendedObjectivesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExtendedObjectivesInput, UserUpdateWithoutExtendedObjectivesInput>, UserUncheckedUpdateWithoutExtendedObjectivesInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedObjectivesInput, UserUncheckedCreateWithoutOwnedObjectivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedObjectivesInput
    upsert?: UserUpsertWithoutOwnedObjectivesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedObjectivesInput, UserUpdateWithoutOwnedObjectivesInput>, UserUncheckedUpdateWithoutOwnedObjectivesInput>
  }

  export type UserUpdateManyWithoutContributedObjectivesNestedInput = {
    create?: XOR<UserCreateWithoutContributedObjectivesInput, UserUncheckedCreateWithoutContributedObjectivesInput> | UserCreateWithoutContributedObjectivesInput[] | UserUncheckedCreateWithoutContributedObjectivesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutContributedObjectivesInput | UserCreateOrConnectWithoutContributedObjectivesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutContributedObjectivesInput | UserUpsertWithWhereUniqueWithoutContributedObjectivesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutContributedObjectivesInput | UserUpdateWithWhereUniqueWithoutContributedObjectivesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutContributedObjectivesInput | UserUpdateManyWithWhereWithoutContributedObjectivesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CycleUpdateOneRequiredWithoutObjectivesNestedInput = {
    create?: XOR<CycleCreateWithoutObjectivesInput, CycleUncheckedCreateWithoutObjectivesInput>
    connectOrCreate?: CycleCreateOrConnectWithoutObjectivesInput
    upsert?: CycleUpsertWithoutObjectivesInput
    connect?: CycleWhereUniqueInput
    update?: XOR<XOR<CycleUpdateToOneWithWhereWithoutObjectivesInput, CycleUpdateWithoutObjectivesInput>, CycleUncheckedUpdateWithoutObjectivesInput>
  }

  export type ObjectiveUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ObjectiveCreateWithoutChildrenInput, ObjectiveUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ObjectiveCreateOrConnectWithoutChildrenInput
    upsert?: ObjectiveUpsertWithoutChildrenInput
    disconnect?: ObjectiveWhereInput | boolean
    delete?: ObjectiveWhereInput | boolean
    connect?: ObjectiveWhereUniqueInput
    update?: XOR<XOR<ObjectiveUpdateToOneWithWhereWithoutChildrenInput, ObjectiveUpdateWithoutChildrenInput>, ObjectiveUncheckedUpdateWithoutChildrenInput>
  }

  export type ObjectiveUpdateManyWithoutParentNestedInput = {
    create?: XOR<ObjectiveCreateWithoutParentInput, ObjectiveUncheckedCreateWithoutParentInput> | ObjectiveCreateWithoutParentInput[] | ObjectiveUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutParentInput | ObjectiveCreateOrConnectWithoutParentInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutParentInput | ObjectiveUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ObjectiveCreateManyParentInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutParentInput | ObjectiveUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutParentInput | ObjectiveUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type KeyResultUpdateManyWithoutObjectiveNestedInput = {
    create?: XOR<KeyResultCreateWithoutObjectiveInput, KeyResultUncheckedCreateWithoutObjectiveInput> | KeyResultCreateWithoutObjectiveInput[] | KeyResultUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutObjectiveInput | KeyResultCreateOrConnectWithoutObjectiveInput[]
    upsert?: KeyResultUpsertWithWhereUniqueWithoutObjectiveInput | KeyResultUpsertWithWhereUniqueWithoutObjectiveInput[]
    createMany?: KeyResultCreateManyObjectiveInputEnvelope
    set?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    disconnect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    delete?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    update?: KeyResultUpdateWithWhereUniqueWithoutObjectiveInput | KeyResultUpdateWithWhereUniqueWithoutObjectiveInput[]
    updateMany?: KeyResultUpdateManyWithWhereWithoutObjectiveInput | KeyResultUpdateManyWithWhereWithoutObjectiveInput[]
    deleteMany?: KeyResultScalarWhereInput | KeyResultScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutObjectiveNestedInput = {
    create?: XOR<ReviewCreateWithoutObjectiveInput, ReviewUncheckedCreateWithoutObjectiveInput> | ReviewCreateWithoutObjectiveInput[] | ReviewUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutObjectiveInput | ReviewCreateOrConnectWithoutObjectiveInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutObjectiveInput | ReviewUpsertWithWhereUniqueWithoutObjectiveInput[]
    createMany?: ReviewCreateManyObjectiveInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutObjectiveInput | ReviewUpdateWithWhereUniqueWithoutObjectiveInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutObjectiveInput | ReviewUpdateManyWithWhereWithoutObjectiveInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput = {
    create?: XOR<UserCreateWithoutContributedObjectivesInput, UserUncheckedCreateWithoutContributedObjectivesInput> | UserCreateWithoutContributedObjectivesInput[] | UserUncheckedCreateWithoutContributedObjectivesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutContributedObjectivesInput | UserCreateOrConnectWithoutContributedObjectivesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutContributedObjectivesInput | UserUpsertWithWhereUniqueWithoutContributedObjectivesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutContributedObjectivesInput | UserUpdateWithWhereUniqueWithoutContributedObjectivesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutContributedObjectivesInput | UserUpdateManyWithWhereWithoutContributedObjectivesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ObjectiveUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ObjectiveCreateWithoutParentInput, ObjectiveUncheckedCreateWithoutParentInput> | ObjectiveCreateWithoutParentInput[] | ObjectiveUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObjectiveCreateOrConnectWithoutParentInput | ObjectiveCreateOrConnectWithoutParentInput[]
    upsert?: ObjectiveUpsertWithWhereUniqueWithoutParentInput | ObjectiveUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ObjectiveCreateManyParentInputEnvelope
    set?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    disconnect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    delete?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    connect?: ObjectiveWhereUniqueInput | ObjectiveWhereUniqueInput[]
    update?: ObjectiveUpdateWithWhereUniqueWithoutParentInput | ObjectiveUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ObjectiveUpdateManyWithWhereWithoutParentInput | ObjectiveUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
  }

  export type KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput = {
    create?: XOR<KeyResultCreateWithoutObjectiveInput, KeyResultUncheckedCreateWithoutObjectiveInput> | KeyResultCreateWithoutObjectiveInput[] | KeyResultUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: KeyResultCreateOrConnectWithoutObjectiveInput | KeyResultCreateOrConnectWithoutObjectiveInput[]
    upsert?: KeyResultUpsertWithWhereUniqueWithoutObjectiveInput | KeyResultUpsertWithWhereUniqueWithoutObjectiveInput[]
    createMany?: KeyResultCreateManyObjectiveInputEnvelope
    set?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    disconnect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    delete?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    connect?: KeyResultWhereUniqueInput | KeyResultWhereUniqueInput[]
    update?: KeyResultUpdateWithWhereUniqueWithoutObjectiveInput | KeyResultUpdateWithWhereUniqueWithoutObjectiveInput[]
    updateMany?: KeyResultUpdateManyWithWhereWithoutObjectiveInput | KeyResultUpdateManyWithWhereWithoutObjectiveInput[]
    deleteMany?: KeyResultScalarWhereInput | KeyResultScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutObjectiveNestedInput = {
    create?: XOR<ReviewCreateWithoutObjectiveInput, ReviewUncheckedCreateWithoutObjectiveInput> | ReviewCreateWithoutObjectiveInput[] | ReviewUncheckedCreateWithoutObjectiveInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutObjectiveInput | ReviewCreateOrConnectWithoutObjectiveInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutObjectiveInput | ReviewUpsertWithWhereUniqueWithoutObjectiveInput[]
    createMany?: ReviewCreateManyObjectiveInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutObjectiveInput | ReviewUpdateWithWhereUniqueWithoutObjectiveInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutObjectiveInput | ReviewUpdateManyWithWhereWithoutObjectiveInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ObjectiveCreateNestedOneWithoutKeyResultsInput = {
    create?: XOR<ObjectiveCreateWithoutKeyResultsInput, ObjectiveUncheckedCreateWithoutKeyResultsInput>
    connectOrCreate?: ObjectiveCreateOrConnectWithoutKeyResultsInput
    connect?: ObjectiveWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutKeyResultsInput = {
    create?: XOR<UserCreateWithoutKeyResultsInput, UserUncheckedCreateWithoutKeyResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyResultsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgressUpdateCreateNestedManyWithoutKeyResultInput = {
    create?: XOR<ProgressUpdateCreateWithoutKeyResultInput, ProgressUpdateUncheckedCreateWithoutKeyResultInput> | ProgressUpdateCreateWithoutKeyResultInput[] | ProgressUpdateUncheckedCreateWithoutKeyResultInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutKeyResultInput | ProgressUpdateCreateOrConnectWithoutKeyResultInput[]
    createMany?: ProgressUpdateCreateManyKeyResultInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type ProgressUpdateUncheckedCreateNestedManyWithoutKeyResultInput = {
    create?: XOR<ProgressUpdateCreateWithoutKeyResultInput, ProgressUpdateUncheckedCreateWithoutKeyResultInput> | ProgressUpdateCreateWithoutKeyResultInput[] | ProgressUpdateUncheckedCreateWithoutKeyResultInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutKeyResultInput | ProgressUpdateCreateOrConnectWithoutKeyResultInput[]
    createMany?: ProgressUpdateCreateManyKeyResultInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObjectiveUpdateOneRequiredWithoutKeyResultsNestedInput = {
    create?: XOR<ObjectiveCreateWithoutKeyResultsInput, ObjectiveUncheckedCreateWithoutKeyResultsInput>
    connectOrCreate?: ObjectiveCreateOrConnectWithoutKeyResultsInput
    upsert?: ObjectiveUpsertWithoutKeyResultsInput
    connect?: ObjectiveWhereUniqueInput
    update?: XOR<XOR<ObjectiveUpdateToOneWithWhereWithoutKeyResultsInput, ObjectiveUpdateWithoutKeyResultsInput>, ObjectiveUncheckedUpdateWithoutKeyResultsInput>
  }

  export type UserUpdateOneRequiredWithoutKeyResultsNestedInput = {
    create?: XOR<UserCreateWithoutKeyResultsInput, UserUncheckedCreateWithoutKeyResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyResultsInput
    upsert?: UserUpsertWithoutKeyResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKeyResultsInput, UserUpdateWithoutKeyResultsInput>, UserUncheckedUpdateWithoutKeyResultsInput>
  }

  export type ProgressUpdateUpdateManyWithoutKeyResultNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutKeyResultInput, ProgressUpdateUncheckedCreateWithoutKeyResultInput> | ProgressUpdateCreateWithoutKeyResultInput[] | ProgressUpdateUncheckedCreateWithoutKeyResultInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutKeyResultInput | ProgressUpdateCreateOrConnectWithoutKeyResultInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutKeyResultInput | ProgressUpdateUpsertWithWhereUniqueWithoutKeyResultInput[]
    createMany?: ProgressUpdateCreateManyKeyResultInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutKeyResultInput | ProgressUpdateUpdateWithWhereUniqueWithoutKeyResultInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutKeyResultInput | ProgressUpdateUpdateManyWithWhereWithoutKeyResultInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutKeyResultNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutKeyResultInput, ProgressUpdateUncheckedCreateWithoutKeyResultInput> | ProgressUpdateCreateWithoutKeyResultInput[] | ProgressUpdateUncheckedCreateWithoutKeyResultInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutKeyResultInput | ProgressUpdateCreateOrConnectWithoutKeyResultInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutKeyResultInput | ProgressUpdateUpsertWithWhereUniqueWithoutKeyResultInput[]
    createMany?: ProgressUpdateCreateManyKeyResultInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutKeyResultInput | ProgressUpdateUpdateWithWhereUniqueWithoutKeyResultInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutKeyResultInput | ProgressUpdateUpdateManyWithWhereWithoutKeyResultInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type KeyResultCreateNestedOneWithoutProgressUpdatesInput = {
    create?: XOR<KeyResultCreateWithoutProgressUpdatesInput, KeyResultUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: KeyResultCreateOrConnectWithoutProgressUpdatesInput
    connect?: KeyResultWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProgressUpdatesInput = {
    create?: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressUpdatesInput
    connect?: UserWhereUniqueInput
  }

  export type KeyResultUpdateOneRequiredWithoutProgressUpdatesNestedInput = {
    create?: XOR<KeyResultCreateWithoutProgressUpdatesInput, KeyResultUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: KeyResultCreateOrConnectWithoutProgressUpdatesInput
    upsert?: KeyResultUpsertWithoutProgressUpdatesInput
    connect?: KeyResultWhereUniqueInput
    update?: XOR<XOR<KeyResultUpdateToOneWithWhereWithoutProgressUpdatesInput, KeyResultUpdateWithoutProgressUpdatesInput>, KeyResultUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type UserUpdateOneRequiredWithoutProgressUpdatesNestedInput = {
    create?: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressUpdatesInput
    upsert?: UserUpsertWithoutProgressUpdatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressUpdatesInput, UserUpdateWithoutProgressUpdatesInput>, UserUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type ObjectiveCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ObjectiveCreateWithoutReviewsInput, ObjectiveUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ObjectiveCreateOrConnectWithoutReviewsInput
    connect?: ObjectiveWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReviewType
  }

  export type ObjectiveUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ObjectiveCreateWithoutReviewsInput, ObjectiveUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ObjectiveCreateOrConnectWithoutReviewsInput
    upsert?: ObjectiveUpsertWithoutReviewsInput
    connect?: ObjectiveWhereUniqueInput
    update?: XOR<XOR<ObjectiveUpdateToOneWithWhereWithoutReviewsInput, ObjectiveUpdateWithoutReviewsInput>, ObjectiveUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumObjectiveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectiveType | EnumObjectiveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectiveType[]
    notIn?: $Enums.ObjectiveType[]
    not?: NestedEnumObjectiveTypeFilter<$PrismaModel> | $Enums.ObjectiveType
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumObjectiveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectiveType | EnumObjectiveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectiveType[]
    notIn?: $Enums.ObjectiveType[]
    not?: NestedEnumObjectiveTypeWithAggregatesFilter<$PrismaModel> | $Enums.ObjectiveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumObjectiveTypeFilter<$PrismaModel>
    _max?: NestedEnumObjectiveTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType
  }

  export type NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewTypeFilter<$PrismaModel>
    _max?: NestedEnumReviewTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    name: string
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DepartmentCreateNestedOneWithoutChildrenInput
    children?: DepartmentCreateNestedManyWithoutParentInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    parentId?: string | null
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutEmployeesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
  }

  export type ObjectiveCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutOwnerInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutOwnerInput, ObjectiveUncheckedCreateWithoutOwnerInput>
  }

  export type ObjectiveCreateManyOwnerInputEnvelope = {
    data: ObjectiveCreateManyOwnerInput | ObjectiveCreateManyOwnerInput[]
  }

  export type ObjectiveCreateWithoutContributorsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutContributorsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutContributorsInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutContributorsInput, ObjectiveUncheckedCreateWithoutContributorsInput>
  }

  export type ObjectiveCreateWithoutExtendedByUserInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutExtendedByUserInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutExtendedByUserInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutExtendedByUserInput, ObjectiveUncheckedCreateWithoutExtendedByUserInput>
  }

  export type ObjectiveCreateManyExtendedByUserInputEnvelope = {
    data: ObjectiveCreateManyExtendedByUserInput | ObjectiveCreateManyExtendedByUserInput[]
  }

  export type KeyResultCreateWithoutOwnerInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    objective: ObjectiveCreateNestedOneWithoutKeyResultsInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutKeyResultInput
  }

  export type KeyResultUncheckedCreateWithoutOwnerInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    objectiveId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutKeyResultInput
  }

  export type KeyResultCreateOrConnectWithoutOwnerInput = {
    where: KeyResultWhereUniqueInput
    create: XOR<KeyResultCreateWithoutOwnerInput, KeyResultUncheckedCreateWithoutOwnerInput>
  }

  export type KeyResultCreateManyOwnerInputEnvelope = {
    data: KeyResultCreateManyOwnerInput | KeyResultCreateManyOwnerInput[]
  }

  export type ProgressUpdateCreateWithoutCreatedByInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    createdAt?: Date | string
    keyResult: KeyResultCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    keyResultId: string
    createdAt?: Date | string
  }

  export type ProgressUpdateCreateOrConnectWithoutCreatedByInput = {
    where: ProgressUpdateWhereUniqueInput
    create: XOR<ProgressUpdateCreateWithoutCreatedByInput, ProgressUpdateUncheckedCreateWithoutCreatedByInput>
  }

  export type ProgressUpdateCreateManyCreatedByInputEnvelope = {
    data: ProgressUpdateCreateManyCreatedByInput | ProgressUpdateCreateManyCreatedByInput[]
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    createdAt?: Date | string
    updatedAt?: Date | string
    objective: ObjectiveCreateNestedOneWithoutReviewsInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    objectiveId: string
    revieweeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
  }

  export type ReviewCreateWithoutRevieweeInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    createdAt?: Date | string
    updatedAt?: Date | string
    objective: ObjectiveCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    objectiveId: string
    reviewerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewCreateManyRevieweeInputEnvelope = {
    data: ReviewCreateManyRevieweeInput | ReviewCreateManyRevieweeInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput
    children?: DepartmentUpdateManyWithoutParentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    position?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departmentId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
  }

  export type ObjectiveUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ObjectiveWhereUniqueInput
    update: XOR<ObjectiveUpdateWithoutOwnerInput, ObjectiveUncheckedUpdateWithoutOwnerInput>
    create: XOR<ObjectiveCreateWithoutOwnerInput, ObjectiveUncheckedCreateWithoutOwnerInput>
  }

  export type ObjectiveUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ObjectiveWhereUniqueInput
    data: XOR<ObjectiveUpdateWithoutOwnerInput, ObjectiveUncheckedUpdateWithoutOwnerInput>
  }

  export type ObjectiveUpdateManyWithWhereWithoutOwnerInput = {
    where: ObjectiveScalarWhereInput
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ObjectiveScalarWhereInput = {
    AND?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
    OR?: ObjectiveScalarWhereInput[]
    NOT?: ObjectiveScalarWhereInput | ObjectiveScalarWhereInput[]
    id?: StringFilter<"Objective"> | string
    title?: StringFilter<"Objective"> | string
    description?: StringNullableFilter<"Objective"> | string | null
    type?: EnumObjectiveTypeFilter<"Objective"> | $Enums.ObjectiveType
    status?: EnumStatusFilter<"Objective"> | $Enums.Status
    weight?: FloatNullableFilter<"Objective"> | number | null
    wasMissed?: BoolNullableFilter<"Objective"> | boolean | null
    originalEndDate?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extendedDeadline?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extensionReason?: StringNullableFilter<"Objective"> | string | null
    missedReason?: StringNullableFilter<"Objective"> | string | null
    dateExtended?: DateTimeNullableFilter<"Objective"> | Date | string | null
    extendedBy?: StringNullableFilter<"Objective"> | string | null
    ownerId?: StringFilter<"Objective"> | string
    cycleId?: StringFilter<"Objective"> | string
    parentId?: StringNullableFilter<"Objective"> | string | null
    createdAt?: DateTimeFilter<"Objective"> | Date | string
    updatedAt?: DateTimeFilter<"Objective"> | Date | string
  }

  export type ObjectiveUpsertWithWhereUniqueWithoutContributorsInput = {
    where: ObjectiveWhereUniqueInput
    update: XOR<ObjectiveUpdateWithoutContributorsInput, ObjectiveUncheckedUpdateWithoutContributorsInput>
    create: XOR<ObjectiveCreateWithoutContributorsInput, ObjectiveUncheckedCreateWithoutContributorsInput>
  }

  export type ObjectiveUpdateWithWhereUniqueWithoutContributorsInput = {
    where: ObjectiveWhereUniqueInput
    data: XOR<ObjectiveUpdateWithoutContributorsInput, ObjectiveUncheckedUpdateWithoutContributorsInput>
  }

  export type ObjectiveUpdateManyWithWhereWithoutContributorsInput = {
    where: ObjectiveScalarWhereInput
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyWithoutContributorsInput>
  }

  export type ObjectiveUpsertWithWhereUniqueWithoutExtendedByUserInput = {
    where: ObjectiveWhereUniqueInput
    update: XOR<ObjectiveUpdateWithoutExtendedByUserInput, ObjectiveUncheckedUpdateWithoutExtendedByUserInput>
    create: XOR<ObjectiveCreateWithoutExtendedByUserInput, ObjectiveUncheckedCreateWithoutExtendedByUserInput>
  }

  export type ObjectiveUpdateWithWhereUniqueWithoutExtendedByUserInput = {
    where: ObjectiveWhereUniqueInput
    data: XOR<ObjectiveUpdateWithoutExtendedByUserInput, ObjectiveUncheckedUpdateWithoutExtendedByUserInput>
  }

  export type ObjectiveUpdateManyWithWhereWithoutExtendedByUserInput = {
    where: ObjectiveScalarWhereInput
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyWithoutExtendedByUserInput>
  }

  export type KeyResultUpsertWithWhereUniqueWithoutOwnerInput = {
    where: KeyResultWhereUniqueInput
    update: XOR<KeyResultUpdateWithoutOwnerInput, KeyResultUncheckedUpdateWithoutOwnerInput>
    create: XOR<KeyResultCreateWithoutOwnerInput, KeyResultUncheckedCreateWithoutOwnerInput>
  }

  export type KeyResultUpdateWithWhereUniqueWithoutOwnerInput = {
    where: KeyResultWhereUniqueInput
    data: XOR<KeyResultUpdateWithoutOwnerInput, KeyResultUncheckedUpdateWithoutOwnerInput>
  }

  export type KeyResultUpdateManyWithWhereWithoutOwnerInput = {
    where: KeyResultScalarWhereInput
    data: XOR<KeyResultUpdateManyMutationInput, KeyResultUncheckedUpdateManyWithoutOwnerInput>
  }

  export type KeyResultScalarWhereInput = {
    AND?: KeyResultScalarWhereInput | KeyResultScalarWhereInput[]
    OR?: KeyResultScalarWhereInput[]
    NOT?: KeyResultScalarWhereInput | KeyResultScalarWhereInput[]
    id?: StringFilter<"KeyResult"> | string
    description?: StringFilter<"KeyResult"> | string
    metricType?: EnumMetricTypeFilter<"KeyResult"> | $Enums.MetricType
    targetValue?: FloatFilter<"KeyResult"> | number
    currentValue?: FloatFilter<"KeyResult"> | number
    unit?: StringNullableFilter<"KeyResult"> | string | null
    weight?: FloatNullableFilter<"KeyResult"> | number | null
    objectiveId?: StringFilter<"KeyResult"> | string
    ownerId?: StringFilter<"KeyResult"> | string
    createdAt?: DateTimeFilter<"KeyResult"> | Date | string
    updatedAt?: DateTimeFilter<"KeyResult"> | Date | string
  }

  export type ProgressUpdateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProgressUpdateWhereUniqueInput
    update: XOR<ProgressUpdateUpdateWithoutCreatedByInput, ProgressUpdateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProgressUpdateCreateWithoutCreatedByInput, ProgressUpdateUncheckedCreateWithoutCreatedByInput>
  }

  export type ProgressUpdateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProgressUpdateWhereUniqueInput
    data: XOR<ProgressUpdateUpdateWithoutCreatedByInput, ProgressUpdateUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProgressUpdateUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProgressUpdateScalarWhereInput
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProgressUpdateScalarWhereInput = {
    AND?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
    OR?: ProgressUpdateScalarWhereInput[]
    NOT?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
    id?: StringFilter<"ProgressUpdate"> | string
    value?: FloatFilter<"ProgressUpdate"> | number
    notes?: StringNullableFilter<"ProgressUpdate"> | string | null
    evidence?: StringNullableFilter<"ProgressUpdate"> | string | null
    keyResultId?: StringFilter<"ProgressUpdate"> | string
    createdById?: StringFilter<"ProgressUpdate"> | string
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    score?: FloatNullableFilter<"Review"> | number | null
    feedback?: StringNullableFilter<"Review"> | string | null
    reviewDate?: DateTimeFilter<"Review"> | Date | string
    reviewType?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    objectiveId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepartmentCreateWithoutChildrenInput = {
    id?: string
    name: string
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DepartmentCreateNestedOneWithoutChildrenInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    parentId?: string | null
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutChildrenInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
  }

  export type DepartmentCreateWithoutParentInput = {
    id?: string
    name: string
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DepartmentCreateNestedManyWithoutParentInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutParentInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput>
  }

  export type DepartmentCreateManyParentInputEnvelope = {
    data: DepartmentCreateManyParentInput | DepartmentCreateManyParentInput[]
  }

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
  }

  export type DepartmentUpsertWithoutChildrenInput = {
    update: XOR<DepartmentUpdateWithoutChildrenInput, DepartmentUncheckedUpdateWithoutChildrenInput>
    create: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutChildrenInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutChildrenInput, DepartmentUncheckedUpdateWithoutChildrenInput>
  }

  export type DepartmentUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUpsertWithWhereUniqueWithoutParentInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutParentInput, DepartmentUncheckedUpdateWithoutParentInput>
    create: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutParentInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutParentInput, DepartmentUncheckedUpdateWithoutParentInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutParentInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutParentInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    parentId?: StringNullableFilter<"Department"> | string | null
    headId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ObjectiveCreateWithoutCycleInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutCycleInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutCycleInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutCycleInput, ObjectiveUncheckedCreateWithoutCycleInput>
  }

  export type ObjectiveCreateManyCycleInputEnvelope = {
    data: ObjectiveCreateManyCycleInput | ObjectiveCreateManyCycleInput[]
  }

  export type ObjectiveUpsertWithWhereUniqueWithoutCycleInput = {
    where: ObjectiveWhereUniqueInput
    update: XOR<ObjectiveUpdateWithoutCycleInput, ObjectiveUncheckedUpdateWithoutCycleInput>
    create: XOR<ObjectiveCreateWithoutCycleInput, ObjectiveUncheckedCreateWithoutCycleInput>
  }

  export type ObjectiveUpdateWithWhereUniqueWithoutCycleInput = {
    where: ObjectiveWhereUniqueInput
    data: XOR<ObjectiveUpdateWithoutCycleInput, ObjectiveUncheckedUpdateWithoutCycleInput>
  }

  export type ObjectiveUpdateManyWithWhereWithoutCycleInput = {
    where: ObjectiveScalarWhereInput
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyWithoutCycleInput>
  }

  export type UserCreateWithoutExtendedObjectivesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExtendedObjectivesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExtendedObjectivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExtendedObjectivesInput, UserUncheckedCreateWithoutExtendedObjectivesInput>
  }

  export type UserCreateWithoutOwnedObjectivesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedObjectivesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedObjectivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedObjectivesInput, UserUncheckedCreateWithoutOwnedObjectivesInput>
  }

  export type UserCreateWithoutContributedObjectivesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContributedObjectivesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContributedObjectivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContributedObjectivesInput, UserUncheckedCreateWithoutContributedObjectivesInput>
  }

  export type CycleCreateWithoutObjectivesInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleUncheckedCreateWithoutObjectivesInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleCreateOrConnectWithoutObjectivesInput = {
    where: CycleWhereUniqueInput
    create: XOR<CycleCreateWithoutObjectivesInput, CycleUncheckedCreateWithoutObjectivesInput>
  }

  export type ObjectiveCreateWithoutChildrenInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutChildrenInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutChildrenInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutChildrenInput, ObjectiveUncheckedCreateWithoutChildrenInput>
  }

  export type ObjectiveCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutParentInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutParentInput, ObjectiveUncheckedCreateWithoutParentInput>
  }

  export type ObjectiveCreateManyParentInputEnvelope = {
    data: ObjectiveCreateManyParentInput | ObjectiveCreateManyParentInput[]
  }

  export type KeyResultCreateWithoutObjectiveInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutKeyResultsInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutKeyResultInput
  }

  export type KeyResultUncheckedCreateWithoutObjectiveInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutKeyResultInput
  }

  export type KeyResultCreateOrConnectWithoutObjectiveInput = {
    where: KeyResultWhereUniqueInput
    create: XOR<KeyResultCreateWithoutObjectiveInput, KeyResultUncheckedCreateWithoutObjectiveInput>
  }

  export type KeyResultCreateManyObjectiveInputEnvelope = {
    data: KeyResultCreateManyObjectiveInput | KeyResultCreateManyObjectiveInput[]
  }

  export type ReviewCreateWithoutObjectiveInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutObjectiveInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    reviewerId: string
    revieweeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutObjectiveInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutObjectiveInput, ReviewUncheckedCreateWithoutObjectiveInput>
  }

  export type ReviewCreateManyObjectiveInputEnvelope = {
    data: ReviewCreateManyObjectiveInput | ReviewCreateManyObjectiveInput[]
  }

  export type UserUpsertWithoutExtendedObjectivesInput = {
    update: XOR<UserUpdateWithoutExtendedObjectivesInput, UserUncheckedUpdateWithoutExtendedObjectivesInput>
    create: XOR<UserCreateWithoutExtendedObjectivesInput, UserUncheckedCreateWithoutExtendedObjectivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExtendedObjectivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExtendedObjectivesInput, UserUncheckedUpdateWithoutExtendedObjectivesInput>
  }

  export type UserUpdateWithoutExtendedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExtendedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutOwnedObjectivesInput = {
    update: XOR<UserUpdateWithoutOwnedObjectivesInput, UserUncheckedUpdateWithoutOwnedObjectivesInput>
    create: XOR<UserCreateWithoutOwnedObjectivesInput, UserUncheckedCreateWithoutOwnedObjectivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedObjectivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedObjectivesInput, UserUncheckedUpdateWithoutOwnedObjectivesInput>
  }

  export type UserUpdateWithoutOwnedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutContributedObjectivesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutContributedObjectivesInput, UserUncheckedUpdateWithoutContributedObjectivesInput>
    create: XOR<UserCreateWithoutContributedObjectivesInput, UserUncheckedCreateWithoutContributedObjectivesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutContributedObjectivesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutContributedObjectivesInput, UserUncheckedUpdateWithoutContributedObjectivesInput>
  }

  export type UserUpdateManyWithWhereWithoutContributedObjectivesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutContributedObjectivesInput>
  }

  export type CycleUpsertWithoutObjectivesInput = {
    update: XOR<CycleUpdateWithoutObjectivesInput, CycleUncheckedUpdateWithoutObjectivesInput>
    create: XOR<CycleCreateWithoutObjectivesInput, CycleUncheckedCreateWithoutObjectivesInput>
    where?: CycleWhereInput
  }

  export type CycleUpdateToOneWithWhereWithoutObjectivesInput = {
    where?: CycleWhereInput
    data: XOR<CycleUpdateWithoutObjectivesInput, CycleUncheckedUpdateWithoutObjectivesInput>
  }

  export type CycleUpdateWithoutObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleUncheckedUpdateWithoutObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectiveUpsertWithoutChildrenInput = {
    update: XOR<ObjectiveUpdateWithoutChildrenInput, ObjectiveUncheckedUpdateWithoutChildrenInput>
    create: XOR<ObjectiveCreateWithoutChildrenInput, ObjectiveUncheckedCreateWithoutChildrenInput>
    where?: ObjectiveWhereInput
  }

  export type ObjectiveUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ObjectiveWhereInput
    data: XOR<ObjectiveUpdateWithoutChildrenInput, ObjectiveUncheckedUpdateWithoutChildrenInput>
  }

  export type ObjectiveUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUpsertWithWhereUniqueWithoutParentInput = {
    where: ObjectiveWhereUniqueInput
    update: XOR<ObjectiveUpdateWithoutParentInput, ObjectiveUncheckedUpdateWithoutParentInput>
    create: XOR<ObjectiveCreateWithoutParentInput, ObjectiveUncheckedCreateWithoutParentInput>
  }

  export type ObjectiveUpdateWithWhereUniqueWithoutParentInput = {
    where: ObjectiveWhereUniqueInput
    data: XOR<ObjectiveUpdateWithoutParentInput, ObjectiveUncheckedUpdateWithoutParentInput>
  }

  export type ObjectiveUpdateManyWithWhereWithoutParentInput = {
    where: ObjectiveScalarWhereInput
    data: XOR<ObjectiveUpdateManyMutationInput, ObjectiveUncheckedUpdateManyWithoutParentInput>
  }

  export type KeyResultUpsertWithWhereUniqueWithoutObjectiveInput = {
    where: KeyResultWhereUniqueInput
    update: XOR<KeyResultUpdateWithoutObjectiveInput, KeyResultUncheckedUpdateWithoutObjectiveInput>
    create: XOR<KeyResultCreateWithoutObjectiveInput, KeyResultUncheckedCreateWithoutObjectiveInput>
  }

  export type KeyResultUpdateWithWhereUniqueWithoutObjectiveInput = {
    where: KeyResultWhereUniqueInput
    data: XOR<KeyResultUpdateWithoutObjectiveInput, KeyResultUncheckedUpdateWithoutObjectiveInput>
  }

  export type KeyResultUpdateManyWithWhereWithoutObjectiveInput = {
    where: KeyResultScalarWhereInput
    data: XOR<KeyResultUpdateManyMutationInput, KeyResultUncheckedUpdateManyWithoutObjectiveInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutObjectiveInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutObjectiveInput, ReviewUncheckedUpdateWithoutObjectiveInput>
    create: XOR<ReviewCreateWithoutObjectiveInput, ReviewUncheckedCreateWithoutObjectiveInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutObjectiveInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutObjectiveInput, ReviewUncheckedUpdateWithoutObjectiveInput>
  }

  export type ReviewUpdateManyWithWhereWithoutObjectiveInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutObjectiveInput>
  }

  export type ObjectiveCreateWithoutKeyResultsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    reviews?: ReviewCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutKeyResultsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutKeyResultsInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutKeyResultsInput, ObjectiveUncheckedCreateWithoutKeyResultsInput>
  }

  export type UserCreateWithoutKeyResultsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKeyResultsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKeyResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKeyResultsInput, UserUncheckedCreateWithoutKeyResultsInput>
  }

  export type ProgressUpdateCreateWithoutKeyResultInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateWithoutKeyResultInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    createdById: string
    createdAt?: Date | string
  }

  export type ProgressUpdateCreateOrConnectWithoutKeyResultInput = {
    where: ProgressUpdateWhereUniqueInput
    create: XOR<ProgressUpdateCreateWithoutKeyResultInput, ProgressUpdateUncheckedCreateWithoutKeyResultInput>
  }

  export type ProgressUpdateCreateManyKeyResultInputEnvelope = {
    data: ProgressUpdateCreateManyKeyResultInput | ProgressUpdateCreateManyKeyResultInput[]
  }

  export type ObjectiveUpsertWithoutKeyResultsInput = {
    update: XOR<ObjectiveUpdateWithoutKeyResultsInput, ObjectiveUncheckedUpdateWithoutKeyResultsInput>
    create: XOR<ObjectiveCreateWithoutKeyResultsInput, ObjectiveUncheckedCreateWithoutKeyResultsInput>
    where?: ObjectiveWhereInput
  }

  export type ObjectiveUpdateToOneWithWhereWithoutKeyResultsInput = {
    where?: ObjectiveWhereInput
    data: XOR<ObjectiveUpdateWithoutKeyResultsInput, ObjectiveUncheckedUpdateWithoutKeyResultsInput>
  }

  export type ObjectiveUpdateWithoutKeyResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutKeyResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type UserUpsertWithoutKeyResultsInput = {
    update: XOR<UserUpdateWithoutKeyResultsInput, UserUncheckedUpdateWithoutKeyResultsInput>
    create: XOR<UserCreateWithoutKeyResultsInput, UserUncheckedCreateWithoutKeyResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKeyResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKeyResultsInput, UserUncheckedUpdateWithoutKeyResultsInput>
  }

  export type UserUpdateWithoutKeyResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKeyResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProgressUpdateUpsertWithWhereUniqueWithoutKeyResultInput = {
    where: ProgressUpdateWhereUniqueInput
    update: XOR<ProgressUpdateUpdateWithoutKeyResultInput, ProgressUpdateUncheckedUpdateWithoutKeyResultInput>
    create: XOR<ProgressUpdateCreateWithoutKeyResultInput, ProgressUpdateUncheckedCreateWithoutKeyResultInput>
  }

  export type ProgressUpdateUpdateWithWhereUniqueWithoutKeyResultInput = {
    where: ProgressUpdateWhereUniqueInput
    data: XOR<ProgressUpdateUpdateWithoutKeyResultInput, ProgressUpdateUncheckedUpdateWithoutKeyResultInput>
  }

  export type ProgressUpdateUpdateManyWithWhereWithoutKeyResultInput = {
    where: ProgressUpdateScalarWhereInput
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyWithoutKeyResultInput>
  }

  export type KeyResultCreateWithoutProgressUpdatesInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    objective: ObjectiveCreateNestedOneWithoutKeyResultsInput
    owner: UserCreateNestedOneWithoutKeyResultsInput
  }

  export type KeyResultUncheckedCreateWithoutProgressUpdatesInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    objectiveId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyResultCreateOrConnectWithoutProgressUpdatesInput = {
    where: KeyResultWhereUniqueInput
    create: XOR<KeyResultCreateWithoutProgressUpdatesInput, KeyResultUncheckedCreateWithoutProgressUpdatesInput>
  }

  export type UserCreateWithoutProgressUpdatesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressUpdatesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressUpdatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
  }

  export type KeyResultUpsertWithoutProgressUpdatesInput = {
    update: XOR<KeyResultUpdateWithoutProgressUpdatesInput, KeyResultUncheckedUpdateWithoutProgressUpdatesInput>
    create: XOR<KeyResultCreateWithoutProgressUpdatesInput, KeyResultUncheckedCreateWithoutProgressUpdatesInput>
    where?: KeyResultWhereInput
  }

  export type KeyResultUpdateToOneWithWhereWithoutProgressUpdatesInput = {
    where?: KeyResultWhereInput
    data: XOR<KeyResultUpdateWithoutProgressUpdatesInput, KeyResultUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type KeyResultUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objective?: ObjectiveUpdateOneRequiredWithoutKeyResultsNestedInput
    owner?: UserUpdateOneRequiredWithoutKeyResultsNestedInput
  }

  export type KeyResultUncheckedUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    objectiveId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProgressUpdatesInput = {
    update: XOR<UserUpdateWithoutProgressUpdatesInput, UserUncheckedUpdateWithoutProgressUpdatesInput>
    create: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressUpdatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressUpdatesInput, UserUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type UserUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ObjectiveCreateWithoutReviewsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extendedByUser?: UserCreateNestedOneWithoutExtendedObjectivesInput
    owner: UserCreateNestedOneWithoutOwnedObjectivesInput
    contributors?: UserCreateNestedManyWithoutContributedObjectivesInput
    cycle: CycleCreateNestedOneWithoutObjectivesInput
    parent?: ObjectiveCreateNestedOneWithoutChildrenInput
    children?: ObjectiveCreateNestedManyWithoutParentInput
    keyResults?: KeyResultCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: UserUncheckedCreateNestedManyWithoutContributedObjectivesInput
    children?: ObjectiveUncheckedCreateNestedManyWithoutParentInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutObjectiveInput
  }

  export type ObjectiveCreateOrConnectWithoutReviewsInput = {
    where: ObjectiveWhereUniqueInput
    create: XOR<ObjectiveCreateWithoutReviewsInput, ObjectiveUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type ObjectiveUpsertWithoutReviewsInput = {
    update: XOR<ObjectiveUpdateWithoutReviewsInput, ObjectiveUncheckedUpdateWithoutReviewsInput>
    create: XOR<ObjectiveCreateWithoutReviewsInput, ObjectiveUncheckedCreateWithoutReviewsInput>
    where?: ObjectiveWhereInput
  }

  export type ObjectiveUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ObjectiveWhereInput
    data: XOR<ObjectiveUpdateWithoutReviewsInput, ObjectiveUncheckedUpdateWithoutReviewsInput>
  }

  export type ObjectiveUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    ownedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutOwnerInput
    contributedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutContributorsInput
    extendedObjectives?: ObjectiveUncheckedCreateNestedManyWithoutExtendedByUserInput
    keyResults?: KeyResultUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutCreatedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyManagerInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
  }

  export type ObjectiveCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectiveCreateManyExtendedByUserInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    ownerId: string
    cycleId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyResultCreateManyOwnerInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    objectiveId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateCreateManyCreatedByInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    keyResultId: string
    createdAt?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    objectiveId: string
    revieweeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyRevieweeInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    objectiveId: string
    reviewerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObjectiveUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectiveUpdateWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateManyWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectiveUpdateWithoutExtendedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutExtendedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateManyWithoutExtendedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyResultUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objective?: ObjectiveUpdateOneRequiredWithoutKeyResultsNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutKeyResultNestedInput
  }

  export type KeyResultUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    objectiveId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutKeyResultNestedInput
  }

  export type KeyResultUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    objectiveId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyResult?: KeyResultUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    keyResultId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    keyResultId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objective?: ObjectiveUpdateOneRequiredWithoutReviewsNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    objectiveId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    objectiveId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objective?: ObjectiveUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    objectiveId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    objectiveId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateManyParentInput = {
    id?: string
    name: string
    headId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    position?: string | null
    avatar?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    managerId?: string | null
  }

  export type DepartmentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DepartmentUpdateManyWithoutParentNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    contributedObjectives?: ObjectiveUncheckedUpdateManyWithoutContributorsNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObjectiveCreateManyCycleInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectiveUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    parent?: ObjectiveUpdateOneWithoutChildrenNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateManyWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectiveCreateManyParentInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ObjectiveType
    status?: $Enums.Status
    weight?: number | null
    wasMissed?: boolean | null
    originalEndDate?: Date | string | null
    extendedDeadline?: Date | string | null
    extensionReason?: string | null
    missedReason?: string | null
    dateExtended?: Date | string | null
    extendedBy?: string | null
    ownerId: string
    cycleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyResultCreateManyObjectiveInput = {
    id?: string
    description: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    unit?: string | null
    weight?: number | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyObjectiveInput = {
    id?: string
    score?: number | null
    feedback?: string | null
    reviewDate: Date | string
    reviewType?: $Enums.ReviewType
    reviewerId: string
    revieweeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutContributedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUpdateManyWithoutOwnerNestedInput
    extendedObjectives?: ObjectiveUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContributedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    ownedObjectives?: ObjectiveUncheckedUpdateManyWithoutOwnerNestedInput
    extendedObjectives?: ObjectiveUncheckedUpdateManyWithoutExtendedByUserNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutCreatedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutContributedObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    position?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObjectiveUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extendedByUser?: UserUpdateOneWithoutExtendedObjectivesNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedObjectivesNestedInput
    contributors?: UserUpdateManyWithoutContributedObjectivesNestedInput
    cycle?: CycleUpdateOneRequiredWithoutObjectivesNestedInput
    children?: ObjectiveUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: UserUncheckedUpdateManyWithoutContributedObjectivesNestedInput
    children?: ObjectiveUncheckedUpdateManyWithoutParentNestedInput
    keyResults?: KeyResultUncheckedUpdateManyWithoutObjectiveNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutObjectiveNestedInput
  }

  export type ObjectiveUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumObjectiveTypeFieldUpdateOperationsInput | $Enums.ObjectiveType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    wasMissed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    originalEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    missedReason?: NullableStringFieldUpdateOperationsInput | string | null
    dateExtended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extendedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyResultUpdateWithoutObjectiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutKeyResultsNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutKeyResultNestedInput
  }

  export type KeyResultUncheckedUpdateWithoutObjectiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutKeyResultNestedInput
  }

  export type KeyResultUncheckedUpdateManyWithoutObjectiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutObjectiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutObjectiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutObjectiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewType?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateManyKeyResultInput = {
    id?: string
    value: number
    notes?: string | null
    evidence?: string | null
    createdById: string
    createdAt?: Date | string
  }

  export type ProgressUpdateUpdateWithoutKeyResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateWithoutKeyResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutKeyResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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
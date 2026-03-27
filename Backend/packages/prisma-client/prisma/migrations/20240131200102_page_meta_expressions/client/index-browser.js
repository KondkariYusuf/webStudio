
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.FileScalarFieldEnum = {
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

exports.Prisma.AssetScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  name: 'name'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  provider: 'provider',
  image: 'image',
  username: 'username',
  createdAt: 'createdAt',
  teamId: 'teamId'
};

exports.Prisma.ClientReferencesScalarFieldEnum = {
  reference: 'reference',
  service: 'service',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  features: 'features',
  images: 'images',
  meta: 'meta',
  createdAt: 'createdAt'
};

exports.Prisma.TransactionLogScalarFieldEnum = {
  eventId: 'eventId',
  userId: 'userId',
  productId: 'productId',
  createdAt: 'createdAt',
  eventData: 'eventData',
  eventType: 'eventType',
  eventCreated: 'eventCreated',
  status: 'status',
  customerId: 'customerId',
  customerEmail: 'customerEmail',
  subscriptionId: 'subscriptionId',
  paymentIntent: 'paymentIntent'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  title: 'title',
  domain: 'domain',
  userId: 'userId',
  isDeleted: 'isDeleted',
  previewImageAssetId: 'previewImageAssetId'
};

exports.Prisma.BuildScalarFieldEnum = {
  id: 'id',
  version: 'version',
  lastTransactionId: 'lastTransactionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  pages: 'pages',
  projectId: 'projectId',
  breakpoints: 'breakpoints',
  styles: 'styles',
  styleSources: 'styleSources',
  styleSourceSelections: 'styleSourceSelections',
  props: 'props',
  dataSources: 'dataSources',
  resources: 'resources',
  instances: 'instances',
  deployment: 'deployment',
  publishStatus: 'publishStatus'
};

exports.Prisma.AuthorizationTokenScalarFieldEnum = {
  token: 'token',
  projectId: 'projectId',
  name: 'name',
  relation: 'relation',
  createdAt: 'createdAt'
};

exports.Prisma.DomainScalarFieldEnum = {
  id: 'id',
  domain: 'domain',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  txtRecord: 'txtRecord',
  status: 'status',
  error: 'error'
};

exports.Prisma.ProjectDomainScalarFieldEnum = {
  projectId: 'projectId',
  domainId: 'domainId',
  createdAt: 'createdAt',
  txtRecord: 'txtRecord',
  cname: 'cname'
};

exports.Prisma.UserProductScalarFieldEnum = {
  userId: 'userId',
  productId: 'productId',
  subscriptionId: 'subscriptionId',
  customerId: 'customerId',
  customerEmail: 'customerEmail'
};

exports.Prisma.ProjectWithDomainScalarFieldEnum = {
  projectId: 'projectId',
  domainId: 'domainId',
  txtRecord: 'txtRecord',
  createdAt: 'createdAt',
  cname: 'cname',
  verified: 'verified',
  userId: 'userId'
};

exports.Prisma.LatestBuildPerProjectDomainScalarFieldEnum = {
  domainId: 'domainId',
  buildId: 'buildId',
  projectId: 'projectId',
  isLatestBuild: 'isLatestBuild',
  publishStatus: 'publishStatus',
  updatedAt: 'updatedAt'
};

exports.Prisma.LatestBuildPerProjectScalarFieldEnum = {
  buildId: 'buildId',
  projectId: 'projectId',
  domain: 'domain',
  isLatestBuild: 'isLatestBuild',
  publishStatus: 'publishStatus',
  updatedAt: 'updatedAt'
};

exports.Prisma.DashboardProjectScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  title: 'title',
  domain: 'domain',
  userId: 'userId',
  previewImageAssetId: 'previewImageAssetId',
  isDeleted: 'isDeleted',
  isPublished: 'isPublished'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UploadStatus = exports.$Enums.UploadStatus = {
  UPLOADING: 'UPLOADING',
  UPLOADED: 'UPLOADED'
};

exports.PublishStatus = exports.$Enums.PublishStatus = {
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

exports.AuthorizationRelation = exports.$Enums.AuthorizationRelation = {
  viewers: 'viewers',
  editors: 'editors',
  builders: 'builders',
  administrators: 'administrators'
};

exports.DomainStatus = exports.$Enums.DomainStatus = {
  INITIALIZING: 'INITIALIZING',
  ACTIVE: 'ACTIVE',
  ERROR: 'ERROR',
  PENDING: 'PENDING'
};

exports.Prisma.ModelName = {
  Team: 'Team',
  File: 'File',
  Asset: 'Asset',
  User: 'User',
  ClientReferences: 'ClientReferences',
  Product: 'Product',
  TransactionLog: 'TransactionLog',
  Project: 'Project',
  Build: 'Build',
  AuthorizationToken: 'AuthorizationToken',
  Domain: 'Domain',
  ProjectDomain: 'ProjectDomain',
  UserProduct: 'UserProduct',
  ProjectWithDomain: 'ProjectWithDomain',
  LatestBuildPerProjectDomain: 'LatestBuildPerProjectDomain',
  LatestBuildPerProject: 'LatestBuildPerProject',
  DashboardProject: 'DashboardProject'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

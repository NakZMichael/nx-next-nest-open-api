/* tslint:disable */
/* eslint-disable */
/**
 * Todos example
 * The todos API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateTodoDto
 */
export interface CreateTodoDto {
    /**
     * 
     * @type {string}
     * @memberof CreateTodoDto
     */
    'title': string;
}
/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * The ID of the Todo
     * @type {string}
     * @memberof Todo
     */
    'id': string;
    /**
     * The title of the todo
     * @type {string}
     * @memberof Todo
     */
    'title': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetData(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetData(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetData(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerAddPost: async (createTodoDto: CreateTodoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTodoDto' is not null or undefined
            assertParamExists('todoControllerAddPost', 'createTodoDto', createTodoDto)
            const localVarPath = `/todo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTodoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all todos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/todo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerAddPost(createTodoDto: CreateTodoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerAddPost(createTodoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all todos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Todo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodoApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerAddPost(createTodoDto: CreateTodoDto, options?: any): AxiosPromise<Todo> {
            return localVarFp.todoControllerAddPost(createTodoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all todos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerFindAll(options?: any): AxiosPromise<Array<Todo>> {
            return localVarFp.todoControllerFindAll(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for todoControllerAddPost operation in TodoApi.
 * @export
 * @interface TodoApiTodoControllerAddPostRequest
 */
export interface TodoApiTodoControllerAddPostRequest {
    /**
     * 
     * @type {CreateTodoDto}
     * @memberof TodoApiTodoControllerAddPost
     */
    readonly createTodoDto: CreateTodoDto
}

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
    /**
     * 
     * @param {TodoApiTodoControllerAddPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerAddPost(requestParameters: TodoApiTodoControllerAddPostRequest, options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).todoControllerAddPost(requestParameters.createTodoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all todos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerFindAll(options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).todoControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }
}



import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { get } from 'lodash';

const config = {
	env: {
		// eslint-disable-next-line no-undef
		API_BASE_URL: process.env.REACT_APP_REPAIR_SEARCH_URL,
	},
};

// for api that don't use any authentication
export const authApi = axios.create({
	baseURL: config.env.API_BASE_URL,
	timeout: 60 * 1000,
});

// this will need tokens to make api call
export const secureApi = axios.create({
	baseURL: config.env.API_BASE_URL,
	timeout: 60 * 1000,
});

const logRequest = (request: AxiosRequestConfig) => {
	const { method, baseURL, url, headers, params } = request;
    console.log('API', 'Request', method, baseURL, url, headers, params); // eslint-disable-line
    console.log('REQUEST', request); // eslint-disable-line
};

const handleSecureRequest = async (config: AxiosRequestConfig) => {
	const { headers = {} } = config;
	// eslint-disable-next-line no-undef
	// @ts-ignore
	headers['X-Api-Key'] = process.env.REACT_APP_REPAIR_SEARCH_API_KEY;
	headers['Content-Type'] = 'application/json';
	logRequest(config);
	return config;
};

const handleResponse = (response: AxiosResponse) => {
	// logRequest(config);
    console.log('API', 'Response', response); // eslint-disable-line
	if (response.data.error === undefined) {
		return get(response, 'data');
	} else {
		throw response;
	}
};

const handleRequestError = (error: AxiosError) => {
    console.log('API - Error', error); // eslint-disable-line
	throw error;
};

const handleResponseError = (error: AxiosError) => {
    console.log('ERROR RESPONSE', error); // eslint-disable-line
	throw error;
};

secureApi.interceptors.request.use(handleSecureRequest, handleRequestError);
secureApi.interceptors.response.use(handleResponse, handleResponseError);

const handleAuthRequest = (config: AxiosRequestConfig) => {
	// @ts-ignore
	config.headers['Content-Type'] = 'application/json; multipart/form-data; charset=utf-8';
	logRequest(config);
	return config;
};

authApi.interceptors.request.use(handleAuthRequest, handleRequestError);
authApi.interceptors.response.use(handleResponse, handleResponseError);

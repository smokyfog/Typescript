import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'

import { parseHeader } from './helpers/headers'

import { createError } from './helpers/error'

export default function xhr(config: AxiosRequestConfig):AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if(responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url, true)

    // 成功的响应
    request.onreadystatechange = function handleload () {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }
      const reponseHeaders = parseHeader(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response: request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: reponseHeaders,
        config,
        request
      }
      handleResponse(response)
    }

    // 失败的响应
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    // 设置超时
    request.ontimeout = function heandleTimeout () {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }

    Object.keys(headers).forEach((name) => {
      if(data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      }
      request.setRequestHeader(name, headers[name])
    })

    request.send(data)

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(`request faild width status code ${response.status}`, config, null, request, response))
      }
    }
  })
}

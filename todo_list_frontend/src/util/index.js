/*
   由zhaojunzhe于2018/9/21创建
*/
import {Modal} from 'antd';
import * as qs from 'qs';
export function smartRequest (url, options) {
  const encodedURL = options.query
  ? `${url}?${qs.stringify(options.query)}`
  : url;
  const enhancedOptions = options;
  enhancedOptions.headers = enhancedOptions.headers || {};
  enhancedOptions.headers['Content-Type'] = 'application/json';
  enhancedOptions.body = JSON.stringify(
    enhancedOptions.body
  );
  return fetch(encodedURL, options).then((res) => {
    console.log(res);
    if (res.status >= 200 && res.status <= 300) {
      return res.text();
    } else {
      if (res.status >= 400 && res.status < 500) {
        Modal.error({content: '客户端错误'});
      } else if (res.status >= 500) {
        Modal.error({content: '服务端错误'})
      }
    }
  })
}

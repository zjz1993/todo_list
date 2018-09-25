/*
   由zhaojunzhe于2018/9/21创建
*/
import {smartRequest} from '../util/index';

export function viewTask(params) {
  return smartRequest('/api/getTask', {
    method: 'GET',
    query: { ...params },
  });
}

export function getFinishTask(params) {
  return smartRequest('/api/getFinishTask', {
    method: 'GET',
    query: { ...params },
  });
}

export function finishTask(params) {
  return smartRequest('/api/finishTask', {
    method: 'GET',
    query: { ...params },
  });
}

export function getTask(params) {
  return smartRequest('/api/task', {
    method: 'GET',
    query: { ...params },
  });
}

export function postTask(params) {
  return smartRequest('/api/task', {
    method: 'POST',
    body: { ...params },
  });
}

export function putTask(params) {
  return smartRequest('/api/putTask', {
    method: 'PUT',
    body: { ...params },
  });
}

export function deleteTask(params) {
  return smartRequest(`/api/deleteTask`, {
    method: 'GET',
    query: { ...params },
  });
}

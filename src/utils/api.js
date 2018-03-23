import fetch from 'isomorphic-fetch';
import config from '../config';

export default function http(endpoint, token, body, options) {
  const header = token ? { Authorization: `Bearer ${token}` } : {};
  return fetch(`${config.API_URL}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...header,
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then(response => response.json())
    .then((json) => {
      if (json.success) return json;
      throw new Error(json.message);
    });
}

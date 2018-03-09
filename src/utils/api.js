import fetch from 'isomorphic-fetch';

export default function http(endpoint, token, body, options) {
  const header = token
    ? { 'Authorization': `Bearer ${token}` }
    : {}
  return fetch(`http://localhost:8000/v1/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...header
    },
    body: JSON.stringify(body),
    ...options
  })
    .then(response => response.json())
    .then(json => {
      if (json.success) return json;
      throw new Error(json.message);
    })
}

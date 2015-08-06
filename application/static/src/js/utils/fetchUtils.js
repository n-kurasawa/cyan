import 'isomorphic-fetch';

export async function get(url) {
  let response = await fetch('http://'+ location.host + url, {
    credentials: 'same-origin',
    method: 'get',
  });

  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }

  return response.json();
}

export async function post(url, body) {
  let response = await fetch('http://'+ location.host + url, {
    credentials: 'same-origin',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }

  return response.json();
}

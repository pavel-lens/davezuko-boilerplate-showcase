
export const fetchApi = (url) => {
  return fetch(url)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        if (response.headers.get('Content-Type') == 'application/json') {
          return response.json()
        } else {
          throw Error('Expected JSON data')
        }
      } else {
        throw Error('Request failed')
      }
    })
}

export const api = {
  icon: '🚀',
  name: 'decrypt.do',
  description: 'Decryption API',
  url: 'https://decrypt.do/api',
  type: 'https://apis.do/crypto',
  endpoints: {
    listCategories: 'https://decrypt.do/api',
    getCategory: 'https://decrypt.do/:type',
  },
  site: 'https://decrypt.do',
  login: 'https://decrypt.do/login',
  signup: 'https://decrypt.do/signup',
  subscribe: 'https://decrypt.do/subscribe',
  repo: 'https://github.com/drivly/decrypt.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://decrypt.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})

const ttl = 1000 * 60 * 60 * 24 // 24 hours
const key = 'token' // local storage key name

export function setToken(token: string) {
  const now = new Date()

  const entry: TokenEntry = {
    token,
    expires: now.getTime() + ttl
  }

  localStorage.setItem(key, JSON.stringify(entry))
}

export function getToken(): Token {
  const entryStringify = localStorage.getItem(key)

  // if the entry doesn't exists, return null
  if (!entryStringify) {
    return null
  }

  const entry: TokenEntry = JSON.parse(entryStringify)

  let now = new Date()

  // compare the expiry time of the entry with current time
  if (now.getTime() > entry.expires) {
    // if the entry expires, delete the entry from local storage
    localStorage.removeItem(key)
    return null
  }

  return entry.token
}

export function deleteToken() {
  localStorage.removeItem(key)
}

export type Token = string | null

type TokenEntry = {
  token: string
  expires: number
}

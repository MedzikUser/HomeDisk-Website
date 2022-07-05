export function setToken(token: string) {
  localStorage.setItem('token', token)
}

export function getToken(): Token {
  return localStorage.getItem('token')
}

export function deleteToken() {
  localStorage.removeItem('token')
}

export type Token = string | null

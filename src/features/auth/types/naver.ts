export interface NaverTokenResponse {
  access_token: string
  refresh_token?: string
  token_type: string
  expires_in: string
  error?: string
  error_description?: string
}

export interface NaverProfileResponse {
  resultcode: string
  message: string
  response?: {
    id: string
    nickname?: string
    name?: string
    email?: string
    profile_image?: string
  }
}

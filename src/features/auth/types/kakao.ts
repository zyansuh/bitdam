export interface KakaoTokenResponse {
  access_token: string
  token_type: string
  refresh_token?: string
  expires_in: number
}

export interface KakaoProfileResponse {
  id: number
  properties?: {
    nickname?: string
    profile_image?: string
    thumbnail_image?: string
  }
  kakao_account?: {
    email?: string
    profile?: {
      nickname?: string
      profile_image_url?: string
      thumbnail_image_url?: string
    }
  }
}

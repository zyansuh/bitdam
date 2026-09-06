export interface AuthUser {
  id: string
  nickname: string
  profileImage?: string
  email?: string
  phone?: string
  birth?: string
  interests?: string[]
  provider: 'kakao' | 'email'
}

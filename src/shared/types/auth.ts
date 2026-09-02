export interface AuthUser {
  id: string
  nickname: string
  profileImage?: string
  email?: string
  provider: 'kakao'
}

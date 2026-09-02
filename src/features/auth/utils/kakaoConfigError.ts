export class KakaoConfigError extends Error {
  readonly title: string

  constructor(title: string, body: string) {
    super(body)
    this.name = 'KakaoConfigError'
    this.title = title
  }
}

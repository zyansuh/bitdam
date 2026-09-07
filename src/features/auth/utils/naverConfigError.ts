export class NaverConfigError extends Error {
  readonly title: string

  constructor(title: string, body: string) {
    super(body)
    this.name = 'NaverConfigError'
    this.title = title
  }
}

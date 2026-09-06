export interface ChatProductRef {
  id: number
  name: string
  price: number
  image: string
  category: string
  abv: number
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
  products?: ChatProductRef[]
}

export interface ChatThread {
  id: string
  title: string
  updatedAt: string
  messages: ChatMessage[]
}

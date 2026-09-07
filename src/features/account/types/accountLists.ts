export interface SavedAddress {
  id: string
  label: string
  name: string
  phone: string
  line: string
  isDefault: boolean
}

export interface SavedPayment {
  id: string
  brand: string
  last4: string
  holder: string
}

export interface SupportReply {
  id: string
  authorName: string
  body: string
  createdAt: string
}

export interface SupportTicket {
  id: string
  userId: string
  userName: string
  title: string
  body: string
  createdAt: string
  status: 'open' | 'answered'
  replies: SupportReply[]
}

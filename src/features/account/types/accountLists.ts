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

export interface SupportTicket {
  id: string
  title: string
  body: string
  createdAt: string
}

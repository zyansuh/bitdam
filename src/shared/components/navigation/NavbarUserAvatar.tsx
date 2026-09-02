import { User } from 'lucide-react'

interface NavbarUserAvatarProps {
  src?: string
  alt: string
}

export default function NavbarUserAvatar({ src, alt }: NavbarUserAvatarProps) {
  if (src) {
    return <img src={src} alt={alt} className="navbar__avatar" referrerPolicy="no-referrer" />
  }

  return <User size={20} strokeWidth={1.5} />
}

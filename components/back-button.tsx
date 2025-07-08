import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  href: string
  text: string
}

export function BackButton({ href, text }: BackButtonProps) {
  return (
    <Link href={href} className="back-button">
      <ArrowLeft className="w-4 h-4" />
      {text}
    </Link>
  )
}

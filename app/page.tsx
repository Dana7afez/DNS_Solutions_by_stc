import { redirect } from 'next/navigation'

export default function HomePage() {
  // Server-side redirect to knowledge base
  redirect('/knowledge-base')
}

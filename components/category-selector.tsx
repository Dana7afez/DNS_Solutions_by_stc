"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, CreditCard, Settings, HelpCircle } from "lucide-react"

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  count: number
  color: string
}

const categories: Category[] = [
  {
    id: "registration",
    name: "Domain Registration",
    icon: <Globe className="w-8 h-8" />,
    count: 18,
    color: "#4f018c",
  },
  {
    id: "billing",
    name: "Renewal & Billing",
    icon: <CreditCard className="w-8 h-8" />,
    count: 7,
    color: "#ff375e",
  },
  {
    id: "dns",
    name: "DNS Management",
    icon: <Settings className="w-8 h-8" />,
    count: 7,
    color: "#00c48c",
  },
  {
    id: "support",
    name: "Technical Support & Troubleshooting",
    icon: <HelpCircle className="w-8 h-8" />,
    count: 4,
    color: "#4f018c",
  },
]

interface CategorySelectorProps {
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function CategorySelector({ selectedCategory, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`category-card border-2 cursor-pointer ${selectedCategory === category.id ? "active" : "border-gray-200"}`}
          onClick={() => onCategoryChange(category.id)}
        >
          <CardContent className="p-8 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              {category.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">{category.name}</h3>
            <span
              className="text-sm px-4 py-2 rounded-full font-medium"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              {category.count} questions
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

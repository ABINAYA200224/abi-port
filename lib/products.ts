import type { Product } from "@/types/product"

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description:
      "Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    category: "electronics",
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description:
      "Track your health and fitness with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "electronics",
    rating: 4.3,
    reviews: 89,
    inStock: true,
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    description:
      "Comfortable and sustainable organic cotton t-shirt available in multiple colors. Perfect for everyday wear.",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
    rating: 4.7,
    reviews: 203,
    inStock: true,
  },
  {
    id: "4",
    name: "Modern Table Lamp",
    description:
      "Elegant modern table lamp with adjustable brightness and USB charging port. Perfect for your home office or bedroom.",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "home",
    rating: 4.4,
    reviews: 67,
    inStock: true,
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    description: "High-quality 50mm prime lens for professional photography. Sharp images with beautiful bokeh effect.",
    price: 599.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "electronics",
    rating: 4.8,
    reviews: 45,
    inStock: true,
  },
  {
    id: "6",
    name: "Yoga Mat Premium",
    description:
      "Non-slip premium yoga mat made from eco-friendly materials. Perfect for yoga, pilates, and home workouts.",
    price: 49.99,
    originalPrice: 69.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "sports",
    rating: 4.6,
    reviews: 156,
    inStock: true,
  },
  {
    id: "7",
    name: "Bestselling Novel",
    description: "Award-winning fiction novel that has captivated readers worldwide. A must-read for book lovers.",
    price: 14.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "books",
    rating: 4.9,
    reviews: 312,
    inStock: true,
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "home",
    rating: 4.5,
    reviews: 98,
    inStock: true,
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockProducts
}

export async function getProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockProducts.find((product) => product.id === id) || null
}

export async function getRecommendedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))
  return mockProducts.slice(0, 4)
}

export async function getPopularProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))
  return mockProducts.sort((a, b) => b.rating - a.rating).slice(0, 4)
}

export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()),
  )
}

import ProductCard from "./ProductCard"
import { getRecommendedProducts } from "@/lib/products"

export default async function RecommendedItems() {
  const products = await getRecommendedProducts()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended for You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover products tailored to your preferences and shopping history
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

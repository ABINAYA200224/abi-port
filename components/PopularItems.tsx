import ProductCard from "./ProductCard"
import { getPopularProducts } from "@/lib/products"

export default async function PopularItems() {
  const products = await getPopularProducts()

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Best-selling products loved by our customers</p>
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

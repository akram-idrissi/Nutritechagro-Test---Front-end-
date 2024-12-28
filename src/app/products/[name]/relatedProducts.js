'use client'


const relatedProducts = [
  {
    id: 1,
    name: 'Broadway Houndstooth ',
    color: 'Brown/Cream',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0415/3819/1512/files/wu03hswh0vaavxwkpune.jpg?v=1722013873',
    price: '145 MAD',
  },
]

export default function RelatedProducts() {

  return (
    <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Customers also bought
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {relatedProducts.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">{product.price}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={product.href}
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Add to bag<span className="sr-only">, {product.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

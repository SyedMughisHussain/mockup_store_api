import { categories } from "../../../data";

const GetCategories = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto">
      <h1 className="py-2 text-black font-bold text-3xl">Get Categories</h1>
      <div className="py-4">
        <div className="py-3 px-4 bg-black text-white">
          <p>[Get] localhost</p>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {categories.map((product, index) => {
          return (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
    )
}

export default GetCategories
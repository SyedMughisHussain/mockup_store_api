
const GetProducts = ({id}) => {
  const jsonData = JSON.stringify([
    {
      "id": "1",
      "title": "Smartphone",
      "price": 599.99,
      "description": "A powerful smartphone with advanced features.",
      "image": "https://images.pexels.com/photos/1884777/pexels-photo-1884777.jpeg",
      "category": "electronics",
      "rating": 4.5,
      "createdAt": "2024-03-26T11:24:06.612Z",
      "updatedAt": "2024-03-26T11:24:06.612Z",
      "__v": 0,
    // ... Other products

    },
    // ... Other products
  ],  null, 2);
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Get All Products</h1>
      <p className="py-5">You can access the list of 20 products by using the <span className="font-bold">/products</span> endpoint.</p>
      <p className="py-5 font-bold" >Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>
          [GET] https://mockupstoreapi.cyclic.app/api/v1/products  
        </p>
      </div>
      <p className="py-5 font-bold" >Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
      <pre>
        <code>{jsonData}</code>
      </pre>
      <p>// ... Other Products</p>
      </div>
    </div>
  );
};

export default GetProducts;

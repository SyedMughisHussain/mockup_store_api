const SortProducts
 = ({ id }) => {
    const jsonData = JSON.stringify(
      [
        {
            "id": "20",
            "title": "Portable Charger",
            "price": 34.99,
            "description": "Charge your devices on-the-go with a portable charger.",
            "image": "https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg",
            "category": "electronics",
            "rating": 4.1,
            "createdAt": "2024-03-26T14:36:19.251Z",
            "updatedAt": "2024-03-26T14:36:19.251Z",
            "__v": 0
          },
      ],
      null,
      2
    );

    return (
      <div id={id}>
        <h1 className="font-bold text-[22px]">Sort Results</h1>
        <p className="py-5">By using the <span className="font-bold">/products</span> endpoint and
        passing <span className="font-bold">sort/-id</span> as a query parameter,
        you can sort your results as in descending order.</p>
        <p className="py-5 font-bold">Request:</p>
        <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
          <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/products?sort=-id</p>
        </div>
        <p className="py-5 font-bold">Response:</p>
        <div className="px-3 py-3 w-[800px] bg-gray-100 ">
          <pre>
            <code>{jsonData}</code>
          </pre>
          <p>/*....*/</p>
        </div>
      </div>
    );
  };
  
  export default SortProducts
  ;
  
import { EditOutlined, SettingOutlined, StarOutlined, SearchOutlined, SwapOutlined } from "@ant-design/icons";

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="py-5 text-black font-bold text-2xl md:text-3xl">
          Features
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FCEAC5] mb-4">
                <EditOutlined />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                All CRUD Operations
              </h2>
              <p className="leading-relaxed text-base">
                Leverage our API to seamlessly perform all CRUD (Create, Read,
                Update, and Delete) operations without any limitations.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#DEFBD0] mb-4">
                <SettingOutlined />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Auth with JWT
              </h2>
              <p className="leading-relaxed text-base">
                Utilize JWT for access and refresh tokens, and securely test
                endpoints with this authentication method.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FAD1DF] mb-4">
                <SearchOutlined />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Filters
              </h2>
              <p className="leading-relaxed text-base">
                Filter products by price, title, and category, enabling the
                creation of sophisticated UIs based on these criteria.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#CFD4FC] mb-4">
                <StarOutlined />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Rest API
              </h2>
              <p className="leading-relaxed text-base">
              The API employs the REST API architecture, the most widely adopted structure in the industry.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FAD1DF] mb-4">
                <SwapOutlined />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Postam and Insomia
              </h2>
              <p className="leading-relaxed text-base">
              We provide files for both Postman and Insomnia, allowing you to easily test each endpoint.
              </p>
            </div>
          </div>
          {/* <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Ramona Falls
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;

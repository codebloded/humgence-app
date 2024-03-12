import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  const properties = [
    {
      id: 1,
      imageSrc: "/property1.jpg",
      title: "Modern Apartment in Downtown",
      location: "New York City",
      price: "$500,000",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      id: 2,
      imageSrc: "/property2.jpg",
      title: "Luxury Villa with Ocean View",
      location: "Los Angeles",
      price: "$1,200,000",
      bedrooms: 4,
      bathrooms: 3,
    },
    // Add more properties as needed
  ];

  return (
    <div>
      <div className="relative overflow-hidden">
        <Navbar />
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 h-full"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
          <p className="mt-4 text-lg">Your hero subtitle or description</p>
        </div>

        {/* Scroll to Start */}
        <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-white z-20">
          <p className="text-lg">Scroll to start</p>
        </div>
      </div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <Image src="/pic.jpg" alt="Image" width={600} height={100} />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex flex-col justify-start gap-4 ">
            <h6 className="text-xl font-bold">About Us</h6>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat tellus sed nibh mattis tincidunt. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed consequat tellus sed nibh
              mattis tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed consequat tellus sed nibh mattis tincidunt.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat tellus sed nibh mattis tincidunt. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed consequat tellus sed nibh
              mattis tincidunt.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <Carousel slides={["pic.jpg", "pic.jpg", "pic.jpg", "pic.jpg"]} />
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md">
                <img
                  src={property.imageSrc}
                  alt={property.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-gray-800 font-bold mt-2">
                    {property.price}
                  </p>
                  <p className="text-gray-600">
                    Bedrooms: {property.bedrooms} | Bathrooms:{" "}
                    {property.bathrooms}
                  </p>
                  <a
                    href="#"
                    className="mt-4 block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

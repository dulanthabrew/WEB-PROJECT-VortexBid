/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSearch,
  faHandHoldingUsd,
  faTrophy,
  faCreditCard,
  faBoxOpen,
  faLock,
  faBolt,
  faHeadset,
  faGlobe,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Data for the page sections
  const features = [
    {
      title: "Secure Bidding",
      description:
        "Top-notch security ensuring your bids are safe and reliable.",
      icon: faLock,
    },
    {
      title: "Fast Transactions",
      description: "Experience instant and smooth transactions with no delays.",
      icon: faBolt,
    },
    {
      title: "24/7 Support",
      description: "Our support team is always available to assist you.",
      icon: faHeadset,
    },
    {
      title: "Global Auctions",
      description: "Access auctions from all over the world with ease.",
      icon: faGlobe,
    },
  ];

  const auctionSteps = [
    {
      step: "1. Register",
      description: "Create a free account to start participating in auctions.",
      icon: faUserPlus,
    },
    {
      step: "2. Browse Auctions",
      description:
        "Explore our extensive list of active auctions and find items.",
      icon: faSearch,
    },
    {
      step: "3. Place Your Bid",
      description: "Pay a 10% upfront fee of the auction value to place a bid.",
      icon: faHandHoldingUsd,
    },
    {
      step: "4. Win the Auction",
      description:
        "The highest bidder at the end wins! You'll have 24 hours to pay.",
      icon: faTrophy,
    },
    {
      step: "5. Complete Payment",
      description: "Finalize your purchase. Your upfront fee will be refunded.",
      icon: faCreditCard,
    },
    {
      step: "6. Receive Your Item",
      description: "After payment, we ship your new item directly to you!",
      icon: faBoxOpen,
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      feedback:
        "VortexBid is by far the best auction platform. I've won incredible items and the process was seamless.",
    },
    {
      name: "Samantha Lee",
      feedback:
        "Professional, secure, and easy to use. VortexBid exceeded my expectations with its clean interface.",
    },
    {
      name: "Chris Martin",
      feedback:
        "Great experience from start to finish. Fast transactions and excellent customer support.",
    },
  ];

  const featuredItems = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Vintage Leather Watch",
      currentBid: 350,
      timeLeft: "1d 4h 30m",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Antique Silver Vase",
      currentBid: 820,
      timeLeft: "2d 1h 15m",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Modern Art Print",
      currentBid: 150,
      timeLeft: "18h 5m",
    },
  ];

  return (
    <div className="bg-gray-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661547944387-96fffefa0b8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Discover, Bid, and Win
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The ultimate platform for secure, global auctions. Your next
            treasure awaits.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/signup"
              className="mt-8 inline-block px-8 py-3 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 transition-colors duration-300 text-lg shadow-lg"
            >
              Browse Auctions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Auctions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Auctions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center text-gray-600 mb-4">
                    <p>Current Bid:</p>
                    <p className="text-xl font-bold text-sky-600">
                      ${item.currentBid}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <p>Time Left:</p>
                    <p>{item.timeLeft}</p>
                  </div>
                  <button className="w-full py-2 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-900 transition-colors">
                    Place Bid
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Simple Steps to Win
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Our auction process is designed to be straightforward and
            user-friendly. Follow these steps to secure your item.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {auctionSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="p-6 bg-white rounded-lg shadow-md text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-3xl text-sky-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose VortexBid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="mx-auto mb-6 text-sky-600 text-5xl"
                />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-sky-300 text-3xl mb-4"
                />
                <p className="text-lg italic text-gray-700 mb-6 flex-grow">
                  "{testimonial.feedback}"
                </p>
                <p className="text-lg font-bold text-slate-800 text-right">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

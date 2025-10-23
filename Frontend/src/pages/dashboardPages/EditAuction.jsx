import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthNotification from "../../components/screens/AuthNotification";

const EditAuction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [message_ok, setMessage_ok] = useState(true);
  const [error, setError] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    auctionImage: "",
    auctionCategory: "",
    startTime: "",
    endTime: "",
    startingBid: "",
  });

  // Categories for dropdown
  const categories = [
    "Art and Antiques",
    "Fashion and Accessories",
    "Home and Garden",
    "Electronics and Gadgets",
    "Vehicles",
    "Collectibles",
    "Sports and Outdoors",
    "Toys and Games",
    "Books and Media",
    "Photography",
    "Crafts and Hobbies",
    "Real Estate",
    "Wine and Spirits",
    "Tickets and Experiences",
    "Health and Beauty",
  ];

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/auctions/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch auction");
        }

        const data = await response.json();
        if (data.success) {
          const auctionData = data.data.auction;
          setAuction(auctionData);
          
          // Format dates for input fields
          const startDate = new Date(auctionData.startTime).toISOString().slice(0, 16);
          const endDate = new Date(auctionData.endTime).toISOString().slice(0, 16);
          
          setFormData({
            title: auctionData.title || "",
            description: auctionData.description || "",
            auctionImage: auctionData.auctionImage || "",
            auctionCategory: auctionData.auctionCategory || "",
            startTime: startDate,
            endTime: endDate,
            startingBid: auctionData.startingBid || "",
          });
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setMessage("Failed to load auction details.");
        setMessage_ok(false);
        setLoading(false);
      }
    };

    fetchAuction();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:5000/api/auctions/upload-image', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({
          ...prev,
          auctionImage: `http://localhost:5000/uploads/${data.data.fileName}`
        }));
        setMessage("Image uploaded successfully!");
        setMessage_ok(true);
      }
    } catch (err) {
      setMessage("Failed to upload image.");
      setMessage_ok(false);
    }
    setSaving(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch('http://localhost:5000/api/auctions/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          auctionId: parseInt(id),
          title: formData.title,
          description: formData.description,
          auctionImage: formData.auctionImage,
          auctionCategory: formData.auctionCategory,
          startTime: new Date(formData.startTime).toISOString(),
          endTime: new Date(formData.endTime).toISOString(),
          startingBid: parseFloat(formData.startingBid),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Auction updated successfully!");
        setMessage_ok(true);
        setTimeout(() => {
          navigate('/myauctions');
        }, 2000);
      } else {
        setMessage(data.message || "Failed to update auction.");
        setMessage_ok(false);
      }
    } catch (err) {
      setMessage("Failed to update auction.");
      setMessage_ok(false);
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading auction details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <AuthNotification message={message} message_ok={message_ok} />
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <AuthNotification message={message} message_ok={message_ok} />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Edit Auction</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Auction Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="auctionCategory" className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="auctionCategory"
              name="auctionCategory"
              value={formData.auctionCategory}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Auction Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formData.auctionImage && (
              <div className="mt-2">
                <img
                  src={formData.auctionImage}
                  alt="Auction preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Starting Bid */}
          <div>
            <label htmlFor="startingBid" className="block text-sm font-medium text-gray-700 mb-2">
              Starting Bid ($) *
            </label>
            <input
              type="number"
              id="startingBid"
              name="startingBid"
              value={formData.startingBid}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Start Time */}
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2">
              Start Time *
            </label>
            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* End Time */}
          <div>
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-2">
              End Time *
            </label>
            <input
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {saving ? "Updating..." : "Update Auction"}
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/myauctions')}
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAuction;

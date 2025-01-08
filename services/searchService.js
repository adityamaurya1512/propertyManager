const Property = require('../models/Property');
const PropertyAssociation = require('../models/PropertyAssociation');

// Search Properties
exports.searchProperties = async (criteria) => {
  const { priceRange, location, type } = criteria;
  let query = {};

  if (priceRange) {
    query.price = { $gte: priceRange.min, $lte: priceRange.max };
  }
  if (location) {
    query.location = new RegExp(location, 'i');
  }
  if (type) {
    query.type = type;
  }

  return await Property.find(query)
    .sort({ price: 1 })  // Sorting by price (ascending)
    .limit(10)  // Pagination limit (can be dynamic)
    .exec();
};

// Shortlist Property
exports.shortlistProperty = async (userId, propertyId) => {
  const property = new PropertyAssociation({
    userId: userId,
    propertyId: propertyId,
    isActive: true,
    isShortlisted: true
  });
  const response = await property.save();
   if(response)
  return true;
};

// Get Shortlisted Properties
exports.getShortlistedProperties = async (userId) => {
  
  const shortlistedProperties = await PropertyAssociation.find(
    { userId: userId, isShortlisted: true },
    { propertyId: 1, _id: 0 }
  );
  return shortlistedProperties
};

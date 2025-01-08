const Property = require('../models/Property');
const User = require('../models/User');
// Add Property
exports.addProperty = async (userId, location, price, type,name,status) => {
  const newProperty = new Property({
    userId,
    location,
    price,
    type,
    name,
    status
  });

  await newProperty.save();
  return newProperty;
};

// Update Property Status
exports.updatePropertyStatus = async (propertyId, status,userId) => {
  const user = await User.findById(userId);
  console.log(userId)
  if (!user) {
    throw new Error('User not found');
  }
  const property = await Property.findById(propertyId);
  if (property) {
    property.status = status;
    property.updatedAt = Date.now();
    await property.save();
    return true;
  }
  return false;
};

// Get User Properties
exports.getUserProperties = async (userId,page,limit) => {
  const offset = (page - 1) * limit;
  return await Property.find({ userId }).skip(offset)
  .limit(limit).exec();
  
};

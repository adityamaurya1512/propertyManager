const { addProperty, updatePropertyStatus, getUserProperties } = require('../services/propertyManager');

// Add Property
exports.addProperty = async (req, res) => {
  try {
    const { userId, location, price, type,name,status } = req.body;
    const newProperty = await addProperty(userId, location, price, type,name,status);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Property Status
exports.updatePropertyStatus = async (req, res) => {
  try {
    const { propertyId, status,userId } = req.body;
    const updated = await updatePropertyStatus(propertyId, status,userId);
    if (updated) {
      res.status(200).json({ message: 'Property status updated successfully' });
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get User Properties
exports.getUserProperties = async (req, res) => {
  try {
    const { userId } = req.params;
    const{page,limit}=req.query
    const properties = await getUserProperties(userId,page,limit);
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

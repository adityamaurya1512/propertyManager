const { searchProperties, shortlistProperty, getShortlistedProperties } = require('../services/searchService');

// Search Properties
exports.searchProperties = async (req, res) => {
  try {
    // Extract query parameters from the request
    const { minPrice, maxPrice, location, type } = req.query;

    // Build the criteria object
    const criteria = {
      priceRange: {
        min: minPrice ? parseInt(minPrice) : 0,
        max: maxPrice ? parseInt(maxPrice) : Infinity,
      },
      location: location || null,
      type: type || null,
    };

    // Call the searchProperties function with the criteria
    const properties = await searchProperties(criteria);

    // Send the response
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Shortlist Property
exports.shortlistProperty = async (req, res) => {
  try {
    const { userId, propertyId } = req.body;
    const result = await shortlistProperty(userId, propertyId);
    if (result) {
      res.status(200).json({ message: 'Property shortlisted successfully' });
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Shortlisted Properties
exports.getShortlistedProperties = async (req, res) => {
  try {
    const { userId } = req.params;
    const shortlisted = await getShortlistedProperties(userId);
    res.status(200).json(shortlisted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

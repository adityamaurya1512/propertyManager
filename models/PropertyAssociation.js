const mongoose = require('mongoose');
const propertyAssociationSchema = new mongoose.Schema({
 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  isActive: {
    type: Boolean,
   
  },
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  isShortlisted:{type:Boolean},
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('propertyAssociation', propertyAssociationSchema);

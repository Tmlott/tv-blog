const Tv = require('./Tv');
const Review = require('./Review');
const User = require('./User')

// TODO
// Need TV and Review Assocations
// TV hasMany Review
// Review belongTo TV

Tv.hasMany(Review, {
    foreignKey: 'tv_id',
});

Review.belongsTo(Tv, {
    foreignKey: 'tv_id',
    onDelete: 'SET NULL'
});

// TODO 
// User HasMany Review 
// Review belong to user
// Tv hasmany Review
// review belongto tv?

// User.hasMany(Review, {
//     foreignKey: 'id'
// });

// Review.belongsTo(User, {
//     foreignKey: 'id',
//     onDelete: 'SET NULL'
// });


module.exports = { Tv, Review, User };
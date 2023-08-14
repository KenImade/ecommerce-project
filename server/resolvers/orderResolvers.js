const path = require('path')
const Order = require(path.join(__dirname, '..', 'models', 'orderModel'));

const orderResolvers = {
    Mutation: {
        addOrder: async (_, { user, items, total }) => {
            const order = new Order({
                user,
                items,
                total,
            });
            await order.save();
            return order;
        },
    },
};

module.exports = orderResolvers;
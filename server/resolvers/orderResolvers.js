const Order = require("../models/orderModel");

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
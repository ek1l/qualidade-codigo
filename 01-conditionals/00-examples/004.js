function processOrder(order) {
    // Step 1: Validate the order
   const verifyOrder =  order.some(({customerId, items}) => {
        return customerId === undefined || items === undefined 
    })
     if(verifyOrder) {
        throw new Error(`Invalid order missing customerId or items`)
     }
    

    
    

    // Step 2: Calculate the total cost of the order
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        total += item.quantity * item.price;
    }

    // Step 3: Apply any discounts
    if (order.customerId === 'LOYALTY') {
        total *= 0.9;
    }

    // Step 4: Place the order
    const orderNumber = placeOrder(order);

    // Step 5: Send a confirmation email
    sendEmail(order.customerId, `Your order ${orderNumber} has been placed!`);
}

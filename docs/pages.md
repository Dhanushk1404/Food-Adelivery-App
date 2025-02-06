# User-Facing Pages

1. Home (/)

Displays a list of food items with images, names, descriptions, and prices.

Users can add items to the cart.

Optional: Filters (e.g., Veg/Non-Veg, Price Range).

2. Login (/login)

Allows users to sign in with email & password.

Option to reset password if forgotten.

Redirects to Home or Cart after successful login.

3. Register (/register)

Allows new users to create an account.

Requires name, email, phone number, and password.

Redirects to Home after successful registration.

4. Cart (/cart)

Displays selected food items with quantities & total price.

Users can increase/decrease quantity or remove items.

"Proceed to Checkout" button.

5. Checkout (/checkout)

Shows order summary, delivery address, and payment options.

Users can enter a new address or select a saved one.

Payment methods: Cash on Delivery, UPI, Card, etc.

"Place Order" button to confirm.

6. Order History (/orders)

Displays previous orders with details (items, price, date).

Users can reorder past items with one click.

Shows order status (Delivered, Cancelled, Pending).

7. Order Tracking (/order/:id)

Shows real-time order status (e.g., "Preparing", "Out for Delivery").

Basic order details like estimated delivery time.

8. Profile (/profile)

Displays user details (name, email, phone number).

Users can update address & payment preferences.

Logout button to sign out.

Admin Pages (For Shop Owner)

9. Admin Panel (/admin)

Manage menu (Add/Edit/Delete food items).

View & manage new/pending orders.

Apply discounts & offers to menu items.

10. Additional Features (Optional)

404 Page (*) → Redirects users to a "Page Not Found" if they enter an invalid URL.

Protected Routes → Admin pages should be accessible only to logged-in shop owners.


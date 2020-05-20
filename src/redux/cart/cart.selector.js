import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartDetail = url =>
    createSelector(
        [selectCartItems],
        cartItems => {
            var obj = {};

            cartItems.map((cartitem) => {
                cartitem.items.map((item) => {
                    if (item.id === url) {
                        obj = item;
                    }
                    return item;
                })
            })
            return obj;
        }
    )

export const selectCartCollections = url =>
    createSelector(
        [selectCartItems],
        cartItems => {
            var obj = {}

            cartItems.find(cartitem => {
                if (cartitem.routename === url) {
                    obj = cartitem;
                }
            })

            var items = obj.items;
            return items;
        }
    )

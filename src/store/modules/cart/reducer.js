const cartReducer = (
    state = JSON.parse(localStorage.getItem("cart")) || [],
    action
  ) => {
    console.log("CART", action);
  
    switch (action.type) {
      case "@cart/ADD":
        const { product } = action;
  
        return [...state, product];
  
      case "@cart/REMOVE":
        const { list } = action;
  
        return list;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
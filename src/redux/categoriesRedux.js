
//selectors
export const getAllCategories = state => state.categories;

//actions
const createActionName = actionName => `app/categories/${actionName}`;


//action creators


const categoriesReducer = (statePart = [], action) => {
  switch (action.type){
      default:
        return statePart;
  };
};

export default categoriesReducer;
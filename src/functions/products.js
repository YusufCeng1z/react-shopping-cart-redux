const apiUrl = 'https://dummyjson.com/products/';

export const getAllProducts = async () => {
  try {
    const response = await fetch(apiUrl + 'category/smartphones');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products; 
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};


export const getProductInfo = async(id,value) => {
  try {
    const response = await fetch(apiUrl + id);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return {...data,value} ; 
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
}



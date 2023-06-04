export const load = async ({fetch}) =>{
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        return data;
    }
    return {
        props:fetchProducts(),
    }
}
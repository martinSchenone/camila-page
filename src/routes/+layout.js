export const load = async ({fetch}) =>{
    const fetchProducts = async () => {
        const res = await fetch('/data.json')
        const data = await res.json();
        return data;
    }
    return {
        props:fetchProducts(),
    }
}
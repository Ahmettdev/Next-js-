export default async function ProductsPage() {

    const Products = await fetch("https://fakestoreapi.com/products");
    
    const products = await Products.json();
    // console.log(products)

    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product: any) => (
                <div key={product.id} className="border p-4 rounded">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <img src={product.image} alt={product.title} className="w-full h-48 object-contain mt-2" />
                </div>
            ))}
        </div>
    );
}
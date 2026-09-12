function ProductList(){
    const products=[
        {id:1,name:"Laptop",price:50000,category: "Electronics"},
         {id:2,name:"Iphone",price:78000,category:"Electronics"},
          {id:3,name:"Table",price:25000,category:"Furniture"},
           {id:4,name:"Fan",price:4000,category:"Furniture"},

    ];
    return(
        <div>
            <h1>PRODUCT LIST</h1>
            {products.map((p)=>(
                <div key={p.id}>
                    <h3>NAME:{p.name}</h3>
                    <h3>PRICE: $ {p.price}</h3>
                    <h3>CATEGORY: {p.category}</h3>
                        {p.price>60000 &&(<p>PREMIUM PRODUCT</p>)}
                        {p.price>50000 ? "Expensive":"affordable"}
                    </div>
            ))}
        </div>
    );
}
export default ProductList;
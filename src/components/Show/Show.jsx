import { useState } from "react";

const Show = ({ selectProduct, productPrice }) => {
    console.log(selectProduct);
    const [total, setTotal] = useState(0)
    const handleClick = () => {
        setTotal(productPrice - 150)
    }
    return (
        <div className="">
            <div className="bg-[#0D0D0D] mb-5 border-2 border-[#434343]">
                <h2 className="text-3xl underline underline-offset-1 font-medium text-center py-5 text-white">Selected-V</h2>
                <div className="px-6 pb-5 text-slate-300 text-lg">
                    {
                        selectProduct.map((product, index) => (
                            <li key={product.id} className="list-none mb-2">{index + 1}. {product.name}</li>
                        ))
                    }
                </div>
            </div>
            <div className=" bg-[#0D0D0D] px-5 border-2 border-[#434343]">
                <h2 className="text-3xl underline underline-offset-1 font-medium text-center py-8 text-white" >Budget</h2>
                <h2 className="text-white text-2xl font-medium mb-3">DisCount: $ 150</h2>
                <h2 className="text-white text-2xl font-medium mb-3">Products:  {selectProduct.length}</h2>
                <h2 className="text-white text-2xl font-medium mb-3">Price: {productPrice}</h2>
                <button onClick={handleClick} className="w-full py-3 rounded-md mt-3 mb-5 bg-[#015196] text-xl text-white font-medium hover:bg-slate-800">Calculate Total</button>
                <h1 className="text-white text-2xl font-medium pb-10">Total Price: ${total}</h1>

            </div>
        </div>
    );
};

export default Show;
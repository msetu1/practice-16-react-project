import { useState } from "react";
import Card from "../Card/Card";
import Show from "../Show/Show";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Products = () => {
    const [products, setProducts] = useState([])
    const [selectProduct, setSelectProduct] = useState([])
    const [productPrice, setProductPrice] = useState(0)

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleSelectBtn = (product) => {
        const isExist = selectProduct.find(item => (item.id === product.id))
        let productPrice = product.price;
        if (isExist) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else {
            selectProduct.forEach(item => (
                productPrice = productPrice + item.price
            ))

            setProductPrice(productPrice);
            setSelectProduct([...selectProduct, product])
        }
    }

    return (
        <div className="bg-[#151515]">
            <h2 className="text-center py-10 text-4xl font-bold text-white">My Website</h2>
            <div className="flex w-11/12 mx-auto gap-4">
                <div className="w-9/12 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
                    {
                        products.map(product => <Card
                            key={product.id}
                            product={product}
                            handleSelectBtn={handleSelectBtn}
                        ></Card>)
                    }
                </div>
                <div className="w-3/12">
                    <Show

                        productPrice={productPrice}
                        selectProduct={selectProduct}
                    ></Show>
                </div>
            </div>
        </div>
    );
};

export default Products;
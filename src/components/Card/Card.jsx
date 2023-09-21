
const Card = ({ product, handleSelectBtn }) => {
    const { name, image, price, description } = product;

    return (
        <div className=" bg-[#0D0D0D] border-2 border-[#434343] card rounded-md ">
            <div className="">
                <img src={image} alt="" className=" rounded-md w-full h-[224px]" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className=" text-2xl font-bold my-4 text-white">{name}</h2>
                <p className="text-white">{description}</p>
                <h2 className="text-4xl font-semibold my-5 text-[#FF5E19]"><span className="text-white">Price:</span> ${price}</h2>
                <button onClick={() => handleSelectBtn(product)} className="btn w-full bg-[#015196] hover:bg-slate-800 text-xl text-white font-medium">Select</button>
            </div>
        </div>
    );
};

export default Card;
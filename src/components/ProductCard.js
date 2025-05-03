import Image from "next/image";

export default function ProductCard({title, price, description, image}) {
    console.log(image);
    return (
        <div className="h-[560px] w-[300px] shadow-2xl rounded-2xl overflow-hidden">
            <Image src={image} width={300} height={300} alt="product"/>
            <h1 className="m-2 font-semibold font-serif h-12">{title}</h1>
            <p className="m-2">{price}$</p>
            <p className="m-2 overflow-auto h-26">{description}</p>
            <div className="flex flex-row justify-end gap-2 text-white mt-3 mr-3">
                <button className="bg-sky-500 hover:bg-sky-700 p-2 rounded-md">View Details</button>
                <button className="bg-green-500 hover:bg-green-700 p-2 rounded-md">Add to Cart</button>
            </div>
        </div>
    );
}
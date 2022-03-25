import { NextPage } from "next";

import { ProductProps } from "../types/DomainProps";

type ProductProp = {
    product: ProductProps
}
const Product: NextPage<ProductProp> = ({ product: { title, image_url, category: { description } } }) => {
    return (
        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img className="object-cover w-full rounded-md h-72 xl:h-80" src={image_url} alt="T-Shirt" />
                <h4 className="mt-2 text-base font-medium text-gray-700 dark:text-gray-200">{title}</h4>
                <p className="text-sm text-left text-blue-500">{description}</p>
                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    <span className="mx-1">Download</span>
                </button>
            </div>
        </div>
    )
}

export default Product;
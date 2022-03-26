import { NextPage } from "next";
import { useRouter } from "next/router";

import { ProductProps } from "../types/DomainProps";

type ProductProp = {
    product: ProductProps
}
const Product: NextPage<ProductProp> = ({ product: { title, image_url, slug, category: { description } } }) => {

    const router = useRouter();

    return (
        <div onClick={() => {
            router.push(`/books/${slug}`)
        }} className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img className="object-cover w-full rounded-md h-72 xl:h-80" src={image_url} alt="T-Shirt" />
                <h4 className="mt-2 text-base font-medium text-gray-700 dark:text-gray-200">{title}</h4>
                <p className="text-sm text-left text-blue-500">{description}</p>
            </div>
        </div>
    )
}

export default Product;
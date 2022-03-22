import { NextPage } from "next";

type ProductProps = {
    title: string,
    category: string,
    image_url: string,
    file_url: string
}

const Product: NextPage = () => {
    return (
        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img className="object-cover w-full rounded-md h-72 xl:h-80" src={`https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80`} alt="T-Shirt" />
                    <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Quem Pensa Enriquece</h4>
                    <p className="text-blue-500">Educação Financeira</p>
                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <span className="mx-1">Download</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;
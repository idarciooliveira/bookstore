import type { GetServerSideProps } from 'next'
import { ProductProps } from '../../types/DomainProps';

import Layout from '../../components/Layout';
import api from '../../services/api';

type BookDetailProps = {
    searchQuery: string
    product: ProductProps
}

const BookDetail = ({ product }: BookDetailProps) => {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-white-500 tracking-widest">{product.category.description}</h2>
                            <h1 className="text-white-900 text-3xl title-font font-medium mb-4">{product.title}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                            </div>
                            <p className="leading-relaxed mb-4">{product.description}</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Autor</span>
                                <span className="ml-auto text-white-900">{product.author}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Páginas</span>
                                <span className="ml-auto text-white-900">{product.pageNumber}</span>
                            </div>
                            <div className="flex">
                                <button className="w-full mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Download</button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image_url} />
                    </div>
                </div>
            </section>
        </>
    )
}

BookDetail.layout = Layout;

export default BookDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { slug } = query
    const { data } = await api.get<ProductProps[]>(`/products?slug=${slug}`)

    return {
        props: {
            product: data[0]
        }
    }
}

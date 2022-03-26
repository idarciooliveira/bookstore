import type { GetServerSideProps } from 'next'
import { ProductProps } from '../../types/DomainProps';

import Layout from '../../components/Layout';
import Product from '../../components/Product';
import api from '../../services/api';

type SearchProps = {
    searchQuery: string
    products: ProductProps[]
}

const Search = ({ products, searchQuery }: SearchProps) => {
    return (
        <>
            <p className='text-xl text-white'>Resultados Encontrados: {products.length}</p>
            <p className='text-xl text-white'> {`'${searchQuery}'`}</p>
            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
                {products && products.map(product => (
                    <Product key={product.slug} product={product} />
                ))}
            </div>
        </>
    )
}

Search.layout = Layout;

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { slug } = query
    const { data } = await api.get<ProductProps>(`/products?title_like=${slug}`)

    return {
        props: {
            searchQuery: slug,
            products: data
        }
    }
}

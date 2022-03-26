import type { GetServerSideProps } from 'next'
import { ProductProps } from '../../types/DomainProps';

import Layout from '../../components/Layout';
import Product from '../../components/Product';
import api from '../../services/api';

type SearchResultProps = {
    products: ProductProps[]
}

const SearchResult = ({ products }: SearchResultProps) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
                {products.length > 0 ? products.map(product => (
                    <Product key={product.slug} product={product} />
                )) : <p className='text-xl text-white'>
                    Nenhum livro encontrado...
                </p>}
            </div>
        </>
    )
}

SearchResult.layout = Layout;

export default SearchResult;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { slug } = query;

    const { data } = await api.get<ProductProps>(`/products?category.slug=${slug}`)

    return {
        props: {
            products: data
        }
    }
}

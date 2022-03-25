import type { GetServerSideProps, NextPage } from 'next'
import Product from '../../components/Product';
import api from '../../services/api';
import { ProductProps } from '../../types/DomainProps';

type HomeProps = {
    products: ProductProps[]
}

const SearchResult: NextPage<HomeProps> = ({ products }) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
                {products && products.map(product => (
                    <Product key={product.slug} product={product} />
                ))}
            </div>
        </>
    )
}

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

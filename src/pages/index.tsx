import type { GetServerSideProps } from 'next'
import { ProductProps } from '../types/DomainProps';

import Layout from '../components/Layout';
import Product from '../components/Product';
import api from '../services/api';

type HomeProps = {
  products: ProductProps[]
}

const Home = ({ products }: HomeProps) => {
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

Home.layout = Layout;

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ }) => {

  const { data } = await api.get<ProductProps>('/products')

  return {
    props: {
      products: data
    }
  }
}

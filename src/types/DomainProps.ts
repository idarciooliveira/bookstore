
export type ProductProps = {
    id: string,
    slug: string,
    title: string,
    description: string,
    author: string,
    category: categoryProps,
    pageNumber: number,
    uploadAt: string,
    image_url: string
}

export type categoryProps = {
    id: string,
    description: string,
    slug: string
}
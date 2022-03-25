import Link from "next/link";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import api from "../services/api";
import { categoryProps } from "../types/DomainProps";




const SideBar: NextPage = () => {

    const [categories, setCategories] = useState<categoryProps[]>();

    useEffect(() => {
        api.get<categoryProps[]>('/categories').then(response => {
            setCategories(response.data)
        })
    }, [])

    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            {categories && categories.map(category => (
                <Link href={'/'} key={category.id}>
                    <a className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">{category.description}</a>
                </Link>
            ))}
        </div>
    )
}

export default SideBar;


import { NextPage } from "next";
import Link from "next/link";

const SideBar: NextPage = () => {
    return (
        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            <Link href={'/'}>
                <a className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets e Coats</a>
            </Link>
            <Link href={'/'}>
                <a className="block font-medium text-gray-500 dark:text-blue-300 hover:underline">Jackets e Coats</a>
            </Link>
            <Link href={'/'}>
                <a className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets e Coats</a>
            </Link>
        </div>
    )
}

export default SideBar
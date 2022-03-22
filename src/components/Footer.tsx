import type { NextPage } from 'next'
import Link from 'next/link';

const Footer: NextPage = () => {
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="text-center">
                    <Link href={'/'}>
                        <a className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Bookstore</a>
                    </Link>
                    <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">A sua plataforma de partilha de livros digitais para Angolanos.</p>
                </div>

                <hr className="my-10 border-gray-200 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-400">© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <a href="#" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                        <a href="#" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                        <a href="#" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage(){

    return (
    <Fragment>
    <h1> News Page</h1>
    <ul>
        <li>
            <Link  href='/news/1'>football</Link>
        </li>
        <li>
            <Link  href='/news/2'>cricket</Link>
        </li>
        <li>
            <Link  href='/news/3'>volleyball</Link>
        </li>
        <li>
            <Link  href='/news/4'>dance</Link>
        </li>
    </ul>
    </Fragment>
    
    )
}

export default NewsPage;
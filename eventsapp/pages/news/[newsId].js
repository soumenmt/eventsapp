import { useRouter } from "next/router";

function DetailPage(){

    const router = useRouter();
    console.log(router.query.newsId);
    // fetch data from DB for this news id

    return <h1> Details Page</h1>
}

export default DetailPage;
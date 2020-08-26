import { withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'


const Xiaojiejie = ({router})=>{
    return (
        <>
            <div>{router.query.name} is coming.</div>
    <dvi>{list}</dvi>
            <Link href="/"><a>return home</a></Link>
        </>
    )
}

// Xiaojiejie.getInitialProps = async ()=>{
//     const promise = new Promise((resolve)=>{
//         axios('https://easy-mock.com/mock/5f3473f7770a651334254e79/ReactDemo01/xiaojiejie').then(
//             (res)=>{
//                 console.log('data result::', res)
//                 resolve(res.data.data)
//             }

//         )
//     })
//     return await promise
// }

export default withRouter(Xiaojiejie)
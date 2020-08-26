import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

//routeChangestart
//routeChangecomplete
//beforeHistoryChange
//routerChangeError
//hashChangeStart
//hashChangeComplete

const Home = () => {

   // Router.events.on('')
    function gotoXiaojeijie(){
        Router.push({
            pathname:'/xiaojiejie',
            query:{name:'gakki'}

        })
    }
  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href={{pathname:'/xiaojiejie'}}><a>gakki</a></Link><br/>
        <Link href="/xiaojiejie?name=苍井空"><a>hanako</a></Link>
      </div>
      <div>
          <button onClick={gotoXiaojeijie}>choose gakki</button>
      </div>
    </>
  )

}
export default Home
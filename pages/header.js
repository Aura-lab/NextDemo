import Myheader from '../components/myHeader'
import {Button} from 'antd'


import '../static/test.css'
function Header(){ 
    return (
        <>
            <Myheader />
            <div>JSPang.com</div>
            <div><Button>我是按钮</Button></div>

        </> 
    )
}
export default Header
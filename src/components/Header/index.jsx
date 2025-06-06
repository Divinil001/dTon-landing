import React, {useState} from "react"
import {dton_logo} from './logo'
import {Flex, Typography} from "antd"
import Lottie from "react-lottie"
import {ConnectAndTry} from "../Buttons"
import {useWindowSize} from '../../helpers/useWindowSize'
import {MenuOutlined, CloseOutlined} from '@ant-design/icons'

const BURGER_BREAKPOINT = 835

const linkStyle = {
    fontSize: 16,
    margin: '0 15px',
    color: '#FFFFFF'
}
const mobileMenuStyle = {
    height: '90vh',
    backgroundColor: '#101014',
    paddingTop: 24,
    width: '100%',
    overflow: 'hidden'
}

// Docs
// GraphQL
// API Keys
// Explorer
// Status
// Support
// About us
// Testnet

const iconStyle = {fontSize: 24, color: '#fff'}

const Links = ({mobile, style}) => {
    return <Flex vertical={mobile} gap={30} style={style}>
        <Typography.Link href="https://docs.dton.io/" style={linkStyle}>
            Docs
        </Typography.Link>
        <Typography.Link href="https://dton.io/graphql/" style={linkStyle}>
            GraphQL
        </Typography.Link>
        <Typography.Link href="https://t.me/dtontech_bot" style={linkStyle}>
            API Keys
        </Typography.Link>
        <Typography.Link href="https://blog.dton.io/" style={linkStyle}>
            Blog
        </Typography.Link>
        <Typography.Link href="https://tech.dton.io/status" style={linkStyle}>
            Status
        </Typography.Link>
        <Typography.Link href="https://t.me/dtontech" style={linkStyle}>
            Support
        </Typography.Link>
    </Flex>
}
export const HeaderBlock = () => {

    const {width} = useWindowSize()
    const isMobileHeader = width < BURGER_BREAKPOINT
    const [showMenu, setShowMenu] = useState(false)
    const mobileHiddenStyle = {display: isMobileHeader ? 'none' : 'block'}
    const mobileVisibleStyle = {display: !isMobileHeader ? 'none' : 'flex'}
    const BurgerIcon = !showMenu ? MenuOutlined : CloseOutlined

    return <>
        <Flex
            justify='space-between'
            align="center"
            style={{paddingTop: 16}}
        >
            <Flex align='baseline'
                  style={{cursor: 'pointer'}}
                  gap={8} onClick={() => window.open('/', '_self')}>
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: dton_logo,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                        height={35}
                        width={40}/>
                <div style={{color: '#FFFFFF', margin: 0, fontSize: '30px', fontWeight: 600}}>
                    dTon
                </div>
            </Flex>
            <Links style={mobileHiddenStyle}/>
            <ConnectAndTry style={mobileHiddenStyle} size="small"/>
            <BurgerIcon onClick={() =>
                setShowMenu(prev => !prev)} style={{...mobileVisibleStyle, ...iconStyle}}/>

        </Flex>
        {showMenu && <Flex vertical justify='space-between'
                           style={{
                               ...mobileVisibleStyle,
                               ...mobileMenuStyle
                           }}>
            <Links mobile/>
            <ConnectAndTry style={{alignSelf: 'center', color: '#FFF', width: '100%', fontSize: 18, fontWeight: 500}}/>
        </Flex>}
    </>
}

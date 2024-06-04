import { Flex, Space, Typography } from "antd"
import { assetImage, products } from "./products"
import advIcon from '../../assets/icons/adv.svg'
import { BookCall, OpenTheDocumentation, StartUsing } from "../Buttons"
import { Lib } from "./Lib"

const Buttons = () => {
    return <Space wrap='wrap' align="center" style={{ alignItems: 'center', justifyContent:'center', marginTop: 15}}>
            <BookCall size="small"/>
            <OpenTheDocumentation size="small"/>
            <StartUsing/>
            </Space>}

export const ProductBlock = ({active}) => {
    const info = products.find(item => item.id === active)?.info
    
    if(active === 5) {
        return <Flex gap={20} align='center' flex={1} vertical>
            {info.libs.map(Lib)}
            <Buttons/>
        </Flex>
        
    }
    
    const {title, advantages, image} = info;

return <Flex vertical flex={1} align="center">
    <Typography.Title level={2} style={{margin: '0 0 0 15px'}}>
    {title}
    </Typography.Title>
    <Flex style={{marginBottom: 10}}>
    {advantages.map(item => {
        return <Flex key={item} justify="center" align="center" style={{margin: '0 15px'}}>
            <img src={advIcon} style={{width: 24, marginRight: 8}}/>
            <Typography style={{
                fontSize: 16,
                fontWeight: 400
            }}>
                {item}
            </Typography>
        </Flex>
    })}
    </Flex>
    <img style={{
        objectFit: 'contain',
    }} src={assetImage(image)}/>
    <Buttons/>
</Flex>
}

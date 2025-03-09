import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const WithDataLoader = () => {
    return (
        <span className='page-loader mt-2'>
            <Spin indicator={<LoadingOutlined spin />} />
        </span>
    )
}

export default WithDataLoader;

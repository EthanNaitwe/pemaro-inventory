import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import PropTypes from "prop-types";

const WithDataLoader = ({ classname }) => {
    return (
        <span className={`page-loader mt-2 ${classname || ''}`}>
            <Spin size="small" indicator={<LoadingOutlined spin />} />
        </span>
    )
}

WithDataLoader.propTypes = {
    classname: PropTypes.node.isRequired,
};
export default WithDataLoader;

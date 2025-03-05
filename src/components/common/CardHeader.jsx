import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

const CardHeader = ({ title, btnTitle, btnClick }) => {
    return (
        <div className='card-header pb-0 d-flex justify-content-between align-items-center'>
            <h4 className='card-title mb-0'>{title}</h4>
            {!isEmpty(btnTitle) && <div className='page-btn'>
                <button className='btn card-btn' onClick={btnClick}>
                    {btnTitle}
                </button>
            </div>}
        </div>
    )
}

CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    btnClick: PropTypes.func,
    btnTitle: PropTypes.string,
};
export default CardHeader;

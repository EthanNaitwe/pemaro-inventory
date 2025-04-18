const Error404 = () => {
    return (
        <div className='error-box'>
            <h1>404</h1>
            <h3 className='h2 mb-3'>
                {/* <i className='fas fa-exclamation-circle'></i> */}
                Ooops!!
            </h3>
            <p className='h4 font-weight-normal'>
                Please contact the Nile Suites help desk
            </p>
            <span className='btn btn-primary'>
                WhatsApp
            </span>
        </div>
    )
}

export default Error404;

import React, {lazy, Suspense} from 'react';
import Loader from 'react-loader-spinner';

const HeaderList = lazy(() => import('./headerList/HeaderList' /* webpackChunkName: 'header-list' */));

const Header = () => {
    return (
        <header>
            <Suspense fallback={<Loader type="ThreeDots"
                                        color="#000000"
                                        height={70}
                                        width={70}
                                        timeout={3000}
                                />}>
                <HeaderList/>
            </Suspense>
        </header>
    );
};

export default Header;
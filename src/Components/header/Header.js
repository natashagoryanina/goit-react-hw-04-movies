import React, {lazy, Suspense} from 'react';
import Loader from 'react-loader-spinner';
import HeaderContainer from './HeaderStyled';

const HeaderList = lazy(() => import('./headerList/HeaderList' /* webpackChunkName: 'header-list' */));

const Header = () => {
    return (
        <HeaderContainer>
            <Suspense fallback={<Loader type="ThreeDots"
                                        color="#000000"
                                        height={70}
                                        width={70}
                                        timeout={3000}
                                />}>
                <HeaderList/>
            </Suspense>
        </HeaderContainer>
    );
};

export default Header;
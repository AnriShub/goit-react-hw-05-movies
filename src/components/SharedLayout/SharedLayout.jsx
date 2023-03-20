import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';

export const SharedLayout = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className={css.Container}>
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </>
    );
}
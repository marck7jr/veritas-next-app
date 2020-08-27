import styles from './content.module.scss';
import { ReactNode } from 'react';

type ContentProps = {
    children: ReactNode
}

const Content = ({children}: ContentProps) => {

    return (
        <>
            <div className={styles.content}>
                {children}
            </div>
        </>
    );
};

export default Content;
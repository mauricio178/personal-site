import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './styles.module.scss'

interface SkeletonProps {
    localUsed: string
}

function skeletonVariants(skeletonType: string) {
    switch (skeletonType) {
        case "page-top":
            return (
                <SkeletonTheme baseColor="transparent" highlightColor="white">
                    <div className={styles.container}>
                        <Skeleton duration={2} className={styles.skeleton_medium} />
                        <Skeleton duration={3} className={styles.skeleton_big} />
                        <Skeleton duration={3} className={styles.skeleton_small} />
                    </div>
                </SkeletonTheme>
            );
        case "button":
            return (
                <SkeletonTheme baseColor="transparent" highlightColor="white">
                    <div className={styles.container_button}>
                        <Skeleton duration={1} className={styles.skeleton_button} />
                    </div>
                </SkeletonTheme>
            );
    }
}

export function SkeletonComponent(props: SkeletonProps) {
    return (
        <>
            {skeletonVariants(props.localUsed)}
        </>
    )
}

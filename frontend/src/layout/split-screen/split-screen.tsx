import { classnames } from "@aloha/utilities";
import * as styles from './split-screen.css';

type Props = {
    className?: any,
    leftContent: any,
    rightContent: any,
    // leftContent: React.ReactNode,
    // rightContent: React.ReactNode,
}


export const SplitScreen: React.FC<Props> = ({  
    className,
    leftContent,
    rightContent,
    ...props
}) => {
   
    return(
        <>
        <div className={styles.splitScreen} {...props}>
            <div className={styles.wrapper}>
                <div className={styles.leftContent}>
                    {leftContent}
                </div>
                <div className={styles.rightContent}>
                    {rightContent}
                </div>
            </div>
        </div>
        </>
    )
}

export default SplitScreen;


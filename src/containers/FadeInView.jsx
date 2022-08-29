import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function FadeInView({ children, duration, distance }) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start('visible');
        }
    }, [control, inView]);

    return(
        <motion.div
            style={{ zIndex: 0 }}
            ref={ref}
            animate={control}
            initial={'hidden'}
            transition={{duration: duration, ease: 'easeInOut'}}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: distance }
            }}
        >
            {children}
        </motion.div>
    );
}
FadeInView.defaultProps = {
    distance: '100px'
};

export default FadeInView;
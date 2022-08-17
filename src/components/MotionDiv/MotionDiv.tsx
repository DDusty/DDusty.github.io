import { motion } from "framer-motion";
import React from "react";

const MotionDiv = ({children, delay, direction, time, initial, style, className}: any): JSX.Element => {
    
    const upPageMotion = {
        initial: { opacity: 0, transform: 'translate3d(0,10%,0)'},
        animate:{opacity: 1, transform: 'translate3d(0,0%,0)', transition: {duration: time ? time : 0.2, delay: delay ? delay : 0}},
        exit:{ opacity: 0, transform: 'translate3d(0,10%,0)', transition: {duration: time ? time : 0.2,  delay: delay ? (delay / 3) : 0}}
    };
    
    const downPageMotion = {
        initial: { opacity: 0, transform: 'translate3d(0,-10%,0)'},
        animate:{opacity: 1, transform: 'translate3d(0,0%,0)', transition: {duration: time ? time : 0.2, delay: delay ? delay : 0}},
        exit:{ opacity: 0, transform: 'translate3d(0,-10%,0)', transition: {duration: time ? time : 0.2, delay: delay ? (delay / 3) : 0}},
    };

    const leftPageMotion = {
        initial: { opacity: 0, transform: 'translate(5%)'},
        animate:{opacity: 1, transform: 'translate(0%)', transition: {duration: time ? time : 0.2, delay: delay ? delay : 0}},
        exit:{ opacity: 0, transform: 'translate(5%)', transition: {duration: time ? time : 0.2,  delay: delay ? (delay / 3) : 0}},
    };

    const rightPageMotion = {
        initial: { opacity: 0, transform: 'translate(-5%)'},
        animate:{opacity: 1, transform: 'translate(0%)', transition: {duration: time ? time : 0.2, delay: delay ? delay : 0}},
        exit:{ opacity: 0, transform: 'translate(-5%)', transition: {duration: time ? time : 0.2,  delay: delay ? (delay / 3) : 0}},
    };

    const getPageMotion = () => {
        switch(direction) {
            case "UP":
                return upPageMotion
            case "SIDE":
                return leftPageMotion
            case "LEFT":
                return leftPageMotion
            case "RIGHT":
                return rightPageMotion
            case "DOWN":
                return downPageMotion
            default:
                return upPageMotion
          }
    }

    return (
		<motion.div 
		initial={initial ? initial : "initial"} animate="animate" exit="exit" variants={getPageMotion()}
        layout
        className={className}
        style={style}
        transition={{
            duration: time ? time : 0.2,
            delay: delay ? delay : 0
		}}
		> 
        {children}
      </motion.div>
    );
  }

export default MotionDiv;
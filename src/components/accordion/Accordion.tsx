import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {HiChevronDown} from 'react-icons/hi';
import {HiChevronUp} from 'react-icons/hi';

const Accordion = ({ title, content, active, i, expanded, setExpanded } : any) => {
  const isOpen = i === expanded;

  return (
    // <div className="accordion-item">
    //   <div className={active ? "accordion-title accordion-active" : "accordion-title"}>
    //     <h2>{title}</h2>
    //     {active ? '-' : '+'}
    //   </div>
    //   {active && <div className="accordion-content">{content}</div>}
    // </div>
    <>
     <div className="accordion-item">
      <div onClick={() => setExpanded(isOpen ? false : i)} className={isOpen ? "accordion-title accordion-active" : "accordion-title"}>
        <h2>{title}</h2>
        {isOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
     </div>
    
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
             <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
              className="content-placeholder"
            >
              <div className="accordion-content">{content}</div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Accordion;
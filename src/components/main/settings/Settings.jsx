import '../content.scss';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Settings(){

    const onHoverEffect = {scale: 1.02, color: '#ff0000'}

    return(
        <>
            <motion.div className="pad-block">
                <motion.h1>Настройки</motion.h1>
                <motion.div whileHover={onHoverEffect} className="setting">
                    <h3>Сменить пароль</h3>
                </motion.div>
                <motion.div whileHover={onHoverEffect} className="setting">
                    <h3>Уведомления</h3>
                </motion.div>
                <motion.div whileHover={onHoverEffect} className="setting">
                    <h3>Обратная связь</h3>
                </motion.div>
            </motion.div>
        </>
    );
}
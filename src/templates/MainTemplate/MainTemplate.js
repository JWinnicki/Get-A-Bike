import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import ModalContent from '../../components/ModalContent/ModalContent';




const MainTemplate = ({children}) => {
    return (
        <>
            <Modal>
                <ModalContent />
            </Modal>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MainTemplate;
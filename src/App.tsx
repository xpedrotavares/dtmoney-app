import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
    function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
    }
  
    function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
    }

  return (
    <>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}




// Quando eu uso uma importação com export default, quem define o nome do componente é quem o está importando, por isso é bom usar só export que nos obriga a usar o nome do component que foi definido na origem
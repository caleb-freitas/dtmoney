import Modal from "react-modal"
import { Container } from "./styles"

export interface NewTransactionModelProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModelProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transacao</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input placeholder="Category" />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  )
}

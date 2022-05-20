import Modal from "react-modal"

export interface NewTransactionModelProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModelProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transacao</h2>
    </Modal>
  )
}
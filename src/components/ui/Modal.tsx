import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay obscurcissant toute la page, y compris la bannière */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-label="Fermer la modale"
      />
        <button
          className="absolute top-2 right-2 text-white/80 hover:text-pink-400 text-2xl font-bold z-20"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        {children}
    </div>
  );
}

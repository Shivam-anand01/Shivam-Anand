import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import './UI.css';

export default function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container">
      <div className={`toast toast-${type}`}>
        {type === 'success' ? (
          <CheckCircle2 size={18} color="var(--success)" />
        ) : (
          <AlertCircle size={18} color="var(--danger)" />
        )}
        <span>{message}</span>
        <button
          onClick={onClose}
          aria-label="Close notification"
          style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

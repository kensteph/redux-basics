import { useDispatch } from 'react-redux';
import { hide } from '../app/features/modalSlice';
import { clearCart } from '../app/features/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              // Clear the cart
              dispatch(clearCart());
              // Hide the modal
              dispatch(hide());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(hide())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;

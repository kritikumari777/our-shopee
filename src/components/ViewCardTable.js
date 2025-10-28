import { decreaseQty, increaseQty, removeFromCart } from '@/store/cartSlice'
import ButtonComp from './ButtonComp'
import { TEXTS } from '@/app/constants/texts'

const ViewCardTable = ({ cartItems, dispatch }) => {
    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead className="table-light">
                    <tr>
                        <th>{TEXTS.TABLE_PRODUCT}</th>
                        <th>{TEXTS.TABLE_TITLE}</th>
                        <th>{TEXTS.TABLE_PRICE}</th>
                        <th>{TEXTS.TABLE_QUANTITY}</th>
                        <th>{TEXTS.TABLE_SUBTOTAL}</th>
                        <th>{TEXTS.TABLE_REMOVE}</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width="60"
                                    className="rounded"
                                />
                            </td>
                            <td>{item.title}</td>
                            <td>₹{item.price}</td>
                            <td>
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <ButtonComp
                                        label="–"
                                        onClick={() => dispatch(decreaseQty(item.id))}
                                        className="btn-outline-secondary"
                                        disabled={item.quantity === 1}
                                    />
                                    <span>{item.quantity}</span>
                                    <ButtonComp
                                        label="+"
                                        onClick={() => dispatch(increaseQty(item.id))}
                                        className="btn-outline-secondary"
                                    />
                                </div>
                            </td>
                            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <ButtonComp
                                    label={TEXTS.TABLE_REMOVE}
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="btn-danger"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewCardTable
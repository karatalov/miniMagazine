import React, { useContext } from 'react'
import { AuthContext } from '../../ThemeContext/RootContext'
import './Basket.scss'

const Basket = () => {
	const { basket, setBasket } = useContext(AuthContext)

	const increment = (id) => {
		const updated = basket.map((el) =>
			el.id === id ? { ...el, count: el.count + 1 } : el
		)
		localStorage.setItem('product', JSON.stringify(updated))
		setBasket(updated)
	}

	const decrement = (id) => {
		const updated = basket
			.map((el) => (el.id === id ? { ...el, count: el.count - 1 } : el))
			.filter((el) => el.count > 0)

		localStorage.setItem('product', JSON.stringify(updated))
		setBasket(updated)
	}
	const totalCount = basket.reduce((acc, el) => acc + el.count, 0)
	const totalPrice = basket.reduce((acc, el) => acc + el.count * el.price, 0)

	return (
		<div id='basket'>
			<div className='container'>
				<div className='basket--top'>
					<h2>Общее количество: {totalCount}</h2>
					<h4>Общая сумма: {totalPrice.toFixed(2)} $</h4>
				</div>
				<div className='basket'>
					{basket.length ? (
						<>
							{basket.map((el) => (
								<div className='basket--card' key={el.id}>
									<img src={el.image} alt='img' />
									<h2>{el.title}</h2>
									<h3>{el.price} $</h3>
									<div className='basket--card__counter'>
										<button onClick={() => decrement(el.id)}>-</button>
										<p>{el.count} x</p>
										<button onClick={() => increment(el.id)}>+</button>
									</div>
								</div>
							))}
						</>
					) : (
						<div className='basket--empty'>
							<h6>Ваша корзина пуста</h6>
							<img
								src='https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-empty-shopping-cart-store-icon-png-image_5624129.png'
								alt='empty'
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Basket

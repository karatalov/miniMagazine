import React, { useContext } from 'react'
import { dataProducts } from '../../Data/Data'
import './Hero.scss'
import { AuthContext } from '../../ThemeContext/RootContext'
import { ToastContainer, toast } from 'react-toastify'

const Hero = () => {
	const { setBasket } = useContext(AuthContext)

	function success() {
		toast.success('Успешно добавлено в корзину!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'dark',
		})
	}

	function addLocalStorageProduct(item) {
		let stored = JSON.parse(localStorage.getItem('product')) || []
		const existing = stored.find((el) => el.id === item.id)

		let updated
		if (existing) {
			updated = stored.map((el) =>
				el.id === item.id ? { ...el, count: el.count + 1 } : el
			)
		} else {
			updated = [...stored, { ...item, count: 1 }]
		}

		localStorage.setItem('product', JSON.stringify(updated))
		setBasket(updated)
		success()
	}

	return (
		<div id='hero'>
			<ToastContainer />
			<div className='container'>
				<h1>Welcome To My Products</h1>
				<div className='hero'>
					{dataProducts.map((product) => (
						<div className='hero--card' key={product.id}>
							<img src={product.image} alt='' />
							<h2>{product.title}</h2>
							<h4>{product.price} $</h4>
							<button onClick={() => addLocalStorageProduct(product)}>
								Добавить в корзину
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Hero

import React from 'react';

const Type = {
	SALE: 'sale',
	NEW: 'new',
};

const products = [
	{
		id: 1,
		title: 'lorem1',
		price: 500,
		type: Type.SALE,
	},
	{
		id: 1,
		title: 'lorem1',
		price: 500,
		type: Type.NEW,
	},
	{
		id: 1,
		title: 'lorem1',
		price: 500,
		type: Type.SALE,
	},
];

const getComponentByType = (type, product) => {
	// паттерн "контейнер" . Перебираем условия по типу и возвращаем нужный ком-т
	switch (type) {
		case Type.SALE:
			return <SaleProduct product={product} />;

		case Type.NEW:
			return <NewProduct product={product} />;
	}
	return;
};

const ProxyComponent = () => {
	// Это не прокси компонент. Просто название к-та
	return (
		<ul>
			{products.map((product, i) => {
				return (
					<li key={i}>
						{/* <NewProduct className={'product-in-list'} product={product} /> */}
						{getComponentByType(product.type, product)}{' '}
						{/* Используем контейнер(добавляем нужный ком-т взависимости от типа) */}
					</li>
				);
			})}
		</ul>
	);
};

// С помощью паттерна прокси избегается ветвление к-тов.Так же происходит разделение ответственности
// Ниже - это прокси компоненты
const NewProduct = (props) => {
	const { className = '', ...restProps } = props; // Что бы класс, переданный выше со списка из "ProxyComponent" не затёр другие классы извлекаем его c дестр-цией.
	// так же отдельно пересобираем props (...restProps)

	return (
		<Product
			className={`product_new ${className}`}
			{...restProps}
		/> /* в нём создаём св-во с конкретным классом  и прокидываем пропсы от родителя просто как есть */
		// Тут, в прокси, может быть например, условие по классам (className={props.product.type === Type.NEW ? `product_new ${className}` : `${className}`})
	);
};

const SaleProduct = (props) => {
	const { className = '', ...restProps } = props;

	return <Product className={`product_sale ${className}`} {...restProps} />;
};

const Product = ({ product, className }) => {
	return (
		<article className={`product ${className}`}>
			<p>{product.id}</p>
			<p>{product.title}</p>
			<p>{product.price}</p>
		</article>
	);
};

export default ProxyComponent;

// const ProxyComponent = () => {
// 	return (
// 		<ul>
// 			{products.map((product, i) => {
// 				return (
// 					<li>
// 						<article className={`product ${product.type === Type.SALE ? 'product_sale' : 'product_new'}`} key={i}>
// 							<p>{product.id}</p>
// 							<p>{product.title}</p>
// 							<p>{product.price}</p>
// 						</article>
// 					</li>
// 				)
// 			})}
// 		</ul>
// 	)
// }

// export default ProxyComponent

import React, { useEffect, useState } from 'react';

const Modal = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const closeModalWindow = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (target.closest('.modal-window')) return;
		if (target.closest('.modal-button')) return;
		setModalVisible(false);
	};

	useEffect(() => {
		if (modalVisible) document.addEventListener('click', closeModalWindow);

		return () => document.removeEventListener('click', closeModalWindow);
	}, [modalVisible]);

	const modalButtonClickHandle = () => {
		setModalVisible((prevState) => !prevState);
	};

	return (
		<>
			{modalVisible && (
				<div
					className="modal-window"
					style={{
						position: 'absolute',
						top: '185%',
						left: '50%',
						padding: '43px 53px',
						transform: 'translate(-50%, -50%)',
						borderRadius: '10px',
						backgroundColor: '#fff',
						textAlign: 'center',
						color: 'black',
					}}>
					This is Modal
				</div>
			)}
			<button
				className="modal-button"
				style={{
					display: 'block',
					margin: '24px auto 0 auto',
					padding: '4px 8px',
					backgroundColor: 'lightcoral',
					borderRadius: '7px',
					boxShadow: 'none',
					border: 'none',
				}}
				onClick={modalButtonClickHandle}>
				Open Modal
			</button>
		</>
	);

	// const [isVisibleModal, setIsVisibleModal] = useState(false);
	// const modalCloseByBodyClickHandle = (e: MouseEvent) => {
	// 	const target = e.target as HTMLElement;
	// 	if (target.closest('button')) return;
	// 	if (target.closest('.modal')) return;
	// 	document.removeEventListener('click', modalCloseByBodyClickHandle);
	// 	setIsVisibleModal(false);
	// };
	// const modalShowHandle = () => {
	// 	setIsVisibleModal((prevState) => !prevState);
	// };
	// useEffect(() => {
	// 	document.addEventListener('click', modalCloseByBodyClickHandle);
	// 	return () => removeEventListener('click', modalCloseByBodyClickHandle);
	// }, [isVisibleModal]);
	// return (
	// 	<>
	// 		loremsefsefsef
	// 		<div style={{ position: 'relative' }}>Modal page</div>
	// 		{isVisibleModal && (
	// 			<div
	// 				className="modal"
	// 				style={{
	// 					position: 'absolute',
	// 					top: '150%',
	// 					left: '50%',
	// 					transform: 'translate(-50%, -50%)',
	// 					width: '200px',
	// 					backgroundColor: '#fff',
	// 					color: 'black',
	// 					padding: '50px',
	// 					borderRadius: '10px',
	// 				}}
	// 			>
	// 				This is Modal
	// 			</div>
	// 		)}
	// 		<button type="button" onClick={modalShowHandle}>
	// 			show/close modal
	// 		</button>
	// 	</>
	// );
};

export default Modal;

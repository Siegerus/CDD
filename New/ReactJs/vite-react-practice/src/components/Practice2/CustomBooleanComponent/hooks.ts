import React, { useState } from 'react';

export const useBoolean = (initialState: boolean) => {
	const [isActive, setIsActive] = useState<boolean>(initialState);

	return {
		isActive,
		toggleState: () => setIsActive((prevState) => !prevState),
		stateToFalse: () => setIsActive(false),
	};
};

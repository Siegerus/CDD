import React, {
	ChangeEvent,
	FormEvent,
	AnimationEvent,
	useState,
	useEffect,
	ReactNode,
	useRef,
	PropsWithChildren,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Sandbox.module.scss';

const ITEMS = [
	{ id: uuidv4(), name: 'local', value: '' },
	{ id: uuidv4(), name: 'global', value: '' },
	{ id: uuidv4(), name: 'global', value: '' },
	{ id: uuidv4(), name: 'local', value: '' },
];

const Sandbox = () => {};

export default Sandbox;

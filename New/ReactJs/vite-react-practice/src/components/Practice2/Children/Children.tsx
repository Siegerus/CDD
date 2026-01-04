import { PropsWithChildren, ReactNode } from 'react';
import styles from './children.module.scss';

type Props = {};

const Children = (props: Props) => {
	return (
		<>
			<Button>
				<span>This is span Button! </span>
			</Button>
			<Button>
				<p>This is p Button! </p>
			</Button>
			<Button>
				<div>This is div Button! </div>
			</Button>
		</>
	);
};

export default Children;

type ButtonProps = PropsWithChildren<{}>;

const Button = ({ children }: ButtonProps) => {
	console.log(children);
	return <button className={styles.myButton}>{children}</button>;
};

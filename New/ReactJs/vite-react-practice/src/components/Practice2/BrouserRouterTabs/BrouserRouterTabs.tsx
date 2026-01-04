import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './BrouserRouterTabs.module.scss';

type HeadlineProps = {
	tabs: {
		title: string;
		link: string;
		content: string;
		isIndexed: boolean;
	}[];
};

const BrouserRouterTabs = ({ tabs }: HeadlineProps) => {
	return (
		<div className={styles.wrapper}>
			<div>
				{tabs.map((tab, i) => {
					const keyValue = `${tab.title}-${i}`;
					return (
						<Link
							to={tab.isIndexed ? '.' : tab.link}
							className={styles.tab}
							key={keyValue}>
							{tab.title}
						</Link>
					);
				})}
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};

type TabProps = {
	[key: string]: string;
};

export const Tab = ({ content }: TabProps) => {
	return <p>{content}</p>;
};

export default BrouserRouterTabs;

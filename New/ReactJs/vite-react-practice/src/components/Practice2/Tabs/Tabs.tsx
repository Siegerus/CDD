import React, { useState } from 'react';
import styles from './Tabs.module.scss';

type Tab = {
	id: number;
	name: string;
	isActive: boolean;
};

type TabContent = {
	id: number;
	text: string;
};

const TABS: Tab[] = [
	{ id: 1, name: 'Tab - 1', isActive: true },
	{ id: 2, name: 'Tab - 2', isActive: false },
	{ id: 3, name: 'Tab - 3', isActive: false },
];

const TABS_CONTENT: TabContent[] = [
	{
		id: 1,
		text: `#1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam,
    reprehenderit soluta, sunt architecto eveniet recusandae minima aliquam
    qui harum, sit aspernatur velit similique excepturi! Magnam corrupti
    reprehenderit rem, laboriosam facilis magni! Harum illum voluptatem
    cupiditate corrupti ullam veritatis sapiente.`,
	},
	{
		id: 2,
		text: `#2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam,
    reprehenderit soluta, sunt architecto eveniet recusandae minima aliquam
    qui harum, sit aspernatur velit similique excepturi! Magnam corrupti
    reprehenderit rem, laboriosam facilis magni! Harum illum voluptatem
    cupiditate corrupti ullam veritatis sapiente.`,
	},
	{
		id: 3,
		text: `#3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam,
    reprehenderit soluta, sunt architecto eveniet recusandae minima aliquam
    qui harum, sit aspernatur velit similique excepturi! Magnam corrupti
    reprehenderit rem, laboriosam facilis magni! Harum illum voluptatem
    cupiditate corrupti ullam veritatis sapiente.`,
	},
];

// Tabs Main
const Tabs = () => {
	const [tabs, setTabs] = useState(TABS);

	const tabClickHandle = (idx: number) => {
		setTabs(
			TABS.map((tab, i) => {
				return idx === i
					? { ...tab, isActive: true }
					: { ...tab, isActive: false };
			})
		);
	};
	const activeTab = tabs.filter((tab) => tab.isActive === true);

	const filteredContents = TABS_CONTENT.filter(
		(content) => activeTab[0].id === content.id
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.headline}>
				{tabs.map((tab, i) => {
					const keyValue = `${i}-${tab.name}`;
					return (
						<Tab
							name={tab.name}
							key={keyValue}
							isActive={tab.isActive}
							onTabClickHandle={tabClickHandle}
							idx={i}
						/>
					);
				})}
			</div>
			{filteredContents.map((content, i) => {
				const KeyValue = `${content.id}--${i}`;
				return <Content key={KeyValue} text={content.text} />;
			})}
		</div>
	);
};

export default Tabs;
// ------------------

// Tab
type tabProps = Omit<Tab, 'id'> & {
	idx: number;
	onTabClickHandle: (idx: number) => void;
};

const Tab = ({ name, isActive, onTabClickHandle, idx }: tabProps) => {
	return (
		<button
			className={
				isActive
					? `${styles.tabButton} ${styles.tabButton_active}`
					: `: ${styles.tabButton}`
			}
			onClick={() => onTabClickHandle(idx)}>
			{name}
		</button>
	);
};
// ------------------

// Content
type ContentProps = {
	text: string;
};

const Content = ({ text }: ContentProps) => {
	return <div className={styles.content}>{text}</div>;
};
// --------------------

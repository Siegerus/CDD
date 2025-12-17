import React, { useRef, useState, useEffect, MutableRefObject } from 'react';
import styles from './Tabs.module.scss';

type Tab = {
	id: number;
	name: string;
	isActive: boolean;
};

type TabContent = {
	id: number;
	text: string;
	isVisibleContent: boolean;
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
		isVisibleContent: false,
	},
	{
		id: 2,
		text: `#2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam,
    reprehenderit soluta, sunt architecto eveniet recusandae minima aliquam
    qui harum, sit aspernatur velit similique excepturi! Magnam corrupti
    reprehenderit rem, laboriosam facilis magni! Harum illum voluptatem
    cupiditate corrupti ullam veritatis sapiente.`,
		isVisibleContent: false,
	},
	{
		id: 3,
		text: `#3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam,
    reprehenderit soluta, sunt architecto eveniet recusandae minima aliquam
    qui harum, sit aspernatur velit similique excepturi! Magnam corrupti
    reprehenderit rem, laboriosam facilis magni! Harum illum voluptatem
    cupiditate corrupti ullam veritatis sapiente.`,
		isVisibleContent: false,
	},
];

// Tabs Main
const Tabs = () => {
	const [tabs, setTabs] = useState(TABS);
	const [fadeIn, setFadeIn] = useState();

	const tabContentRef = useRef<HTMLDivElement | null>(null);

	const tabClickHandle = (idx: number) => {
		setTabs(
			TABS.map((tab, i) => {
				return idx === i
					? { ...tab, isActive: true }
					: { ...tab, isActive: false };
			})
		);
	};
	//  useEffect для добавления класса видимости
	// useEffect(() => {
	// 	if (
	// 		tabContentRef.current &&
	// 		!tabContentRef.current.classList.contains(styles.content_active)
	// 	)
	// 		tabContentRef.current.classList.add(styles.content_active);

	// 	return () => {};
	// }, [tabs]);

	// Первый способ отфильтровать нужные элементы
	// const activeTab = tabs.filter((tab) => tab.isActive === true);
	// const filteredContents = TABS_CONTENT.filter(
	// 	(content) => activeTab[0].id === content.id
	// );

	// Второй способ отфильтровать нужные элементы и изменить свойства фильтруемых объектах элементов массива
	const filteredContents = TABS_CONTENT.map((tabContent, i) => {
		if (tabs[i].isActive) {
			return {
				...tabContent,
				isVisibleContent: true,
			};
		}
	});

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
				const KeyValue = `${content?.id}--${i}`;
				return (
					<Content
						key={KeyValue}
						text={content?.text}
						isVisibleContent={content?.isVisibleContent}
						tabContentRef={tabContentRef}
					/>
				);
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
	text: string | undefined;
	isVisibleContent: boolean | undefined;
	tabContentRef: MutableRefObject<HTMLDivElement | null>; // Специальный тип, может понадобиться для useRef импортируется React
};
const Content = ({ text, isVisibleContent, tabContentRef }: ContentProps) => {
	const targetClassName = [];
	targetClassName.push(styles.content);
	console.log(targetClassName);

	return (
		<div
			className={
				// styles.content
				isVisibleContent // Видимость по св-ву isVisibleContent в массиве объектов
					? `${styles.content} ${styles.content_active}`
					: styles.content
			}
			/* ref={isVisibleContent ? tabContentRef : null} */
		>
			{/* Видимость через ссылку ref и добавление класса в useEffect */}
			{text}
		</div>
	);
};
// --------------------

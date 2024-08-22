import { useEffect, useState } from 'react';
import styles from './modal.module.scss';
export default function Modal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { ym} = useMetrika();

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setIsOpen(false);
				console.log('Нажали кнопку ESC');
			}
		};
		document.addEventListener('keydown', handleEsc);
	}, []);

	return (
		<div className={styles.wrapper}>
			<button onClick={() => ym('reachGoal', 'buy')}>Совершить покупку</button>
			<div className={styles.modal}>
				{isOpen && (
					<div className={styles.container}>
						<button onClick={
							() => setIsOpen(false)				
							}>
							Закрыть модальное окно
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

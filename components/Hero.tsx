'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { useState } from 'react';

const Hero = () => {
	const handleScroll = () => {};
	const [count, setCount] = useState(0);

	function incrementby2() {
		setCount(count + 2);
		console.log('fn 1');
	}
	function incrementby4() {
		setCount((count) => count + 4);
		console.log('fn 2');
	}
	console.log(count);

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">Find, book, or rent a car -- quickly and easily!</h1>
				<p className="hero__subtitle">
					Streamline your car rental experience with out effortless booking process.
				</p>
				<CustomButton
					title="Explore Cars"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={() => {
						incrementby2();

						incrementby4();
					}}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image src="/hero.png" alt="hero" fill className="object-contain" />
				</div>
				<div className="hero__image-overlay" />
			</div>
		</div>
	);
};

export default Hero;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
	const [code, setCode] = useState<number[]>([]);
	const [message, setMessage] = useState<string>("");
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [currentTheme, setCurrentTheme] = useState<string>("fortnite");
	const maxLength = 6;
	const correctOTP = [1, 2, 3, 4, 5, 1]; // Demo OTP: 123451

	const themeConfig: Record<string, { images: string[]; logo: string }> = {
		fortnite: {
			images: [
				"",
				"/banana-boy.png",
				"/black-cat.png",
				"/blond-cowboy.png",
				"/burger-head.png",
				"/pink-mush.png",
				"/spiky-head.png",
			],
			logo: "/LEGO_Fortnite_logo.svg",
		},
		"star-wars": {
			images: [
				"",
				"/princess-lea.png",
				"/r2d2.png",
				"/obi-wan.png",
				"/c3p0.png",
				"/darth-veder.png",
				"/yoda.png",
			],
			logo: "/LEGO_star_wars.jpg",
		},
	};

	const minifigImages =
		themeConfig[currentTheme]?.images || themeConfig.fortnite.images;
	const themeLogo =
		themeConfig[currentTheme]?.logo || themeConfig.fortnite.logo;

	useEffect(() => {
		const savedTheme = localStorage.getItem("mfa-theme");
		if (savedTheme && themeConfig[savedTheme]) {
			setCurrentTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		if (isSuccess) {
			const audio = new Audio("/victory-royale.mp3");
			audio.play().catch((error) => {
				console.log("Audio playback failed:", error);
			});
		}
	}, [isSuccess]);

	const handleImageClick = (value: number) => {
		if (code.length < maxLength) {
			setCode([...code, value]);
			setMessage("");
		}
	};

	const handleClear = () => {
		setCode([]);
		setMessage("");
		setIsSuccess(false);
	};

	const handleSubmit = () => {
		const enteredCode = code.join("");
		const correctCode = correctOTP.join("");

		if (enteredCode === correctCode) {
			setIsSuccess(true);
		} else {
			setIsSuccess(false);
			setMessage("✗ Incorrect OTP. Please try again.");
		}
	};

	const handleLogout = () => {
		setCode([]);
		setMessage("");
		setIsSuccess(false);
	};

	// Success Screen
	if (isSuccess) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
				<main className="bg-white p-16 rounded-lg shadow-xl max-w-2xl w-full text-center">
					<div className="mb-6">
						<div className="flex justify-center mb-6">
							<Image
								src="/bannana-dance.gif"
								alt="Success"
								width={150}
								height={150}
								className=""
								unoptimized
							/>
						</div>
						<h1 className="text-3xl font-bold text-gray-800 mb-10">
							Welcome Back!
						</h1>
						<div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-10">
							<p className="text-gray-800 font-bold text-2xl leading-relaxed">
								"Never share your real name, school, or location. Protect it
								like rare loot from your pack."
							</p>
						</div>
					</div>

					<button
						onClick={handleLogout}
						className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors"
					>
						Logout
					</button>
				</main>
			</div>
		);
	}

	return (
		<div
			className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
				currentTheme === "star-wars"
					? "hyperspace-bg"
					: "bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 animate-gradient"
			}`}
		>
			{/* Star Wars Hyperspace Effect */}
			{currentTheme === "star-wars" ? (
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{[...Array(100)].map((_, i) => (
						<div
							key={i}
							className="star"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								width: `${Math.random() * 3 + 2}px`,
								height: `${Math.random() * 60 + 30}px`,
								animationDelay: `${Math.random() * 4}s`,
								animationDuration: `${Math.random() * 2 + 3}s`,
							}}
						/>
					))}
				</div>
			) : (
				/* Floating LEGO bricks background for Fortnite */
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div
						className="absolute top-10 left-10 w-16 h-16 bg-red-500 opacity-20 rounded-lg animate-float-rotate"
						style={{ animationDelay: "0s" }}
					></div>
					<div
						className="absolute top-1/4 right-20 w-12 h-12 bg-blue-500 opacity-20 rounded-lg animate-spin-slow"
						style={{ animationDelay: "1s" }}
					></div>
					<div
						className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-500 opacity-20 rounded-lg animate-float"
						style={{ animationDelay: "2s" }}
					></div>
					<div
						className="absolute top-1/2 right-1/3 w-14 h-14 bg-green-500 opacity-20 rounded-lg animate-bounce-subtle"
						style={{ animationDelay: "1.5s" }}
					></div>
					<div
						className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500 opacity-20 rounded-lg animate-float-rotate"
						style={{ animationDelay: "0.5s" }}
					></div>
					<div
						className="absolute top-1/3 left-1/2 w-10 h-10 bg-pink-500 opacity-20 rounded-lg animate-spin-slow"
						style={{ animationDelay: "2.5s" }}
					></div>
					<div
						className="absolute top-20 right-1/4 w-14 h-14 bg-orange-500 opacity-20 rounded-lg animate-float"
						style={{ animationDelay: "0.8s" }}
					></div>
					<div
						className="absolute bottom-1/3 right-1/2 w-12 h-12 bg-teal-500 opacity-20 rounded-lg animate-bounce-subtle"
						style={{ animationDelay: "1.8s" }}
					></div>
					<div
						className="absolute top-2/3 left-20 w-16 h-16 bg-indigo-500 opacity-20 rounded-lg animate-float-rotate"
						style={{ animationDelay: "2.2s" }}
					></div>
					<div
						className="absolute bottom-20 left-1/3 w-10 h-10 bg-cyan-500 opacity-20 rounded-lg animate-spin-slow"
						style={{ animationDelay: "3s" }}
					></div>
				</div>
			)}
			<main className="bg-white p-12 rounded-lg shadow-2xl max-w-2xl w-full relative z-10">
				<div className="flex justify-center mb-6">
					<Image
						src={themeLogo}
						alt="Theme Logo"
						width={300}
						height={100}
						className="object-contain animate-pulse-scale"
					/>
				</div>
				<h1 className="text-4xl font-bold text-center mb-10 mt-6">
					Enter your secret
				</h1>
				{/* Success/Error Message */}
				{message && (
					<div
						className={`mb-4 p-3 rounded-lg text-center font-semibold ${
							isSuccess
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{message}
					</div>
				)}
				{/* OTP Display */}
				<div className="flex justify-center gap-3 mb-15">
					{Array.from({ length: maxLength }).map((_, index) => (
						<div
							key={index}
							className="w-20 h-20 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xl font-semibold overflow-hidden"
						>
							{code[index] !== undefined ? (
								<Image
									src={minifigImages[code[index]]}
									alt={`Selected ${code[index]}`}
									width={80}
									height={80}
									className="rounded-lg object-cover w-full h-full"
								/>
							) : (
								""
							)}
						</div>
					))}
				</div>{" "}
				{/* Image Grid */}
				<div className="grid grid-cols-3 gap-4 mb-6 justify-items-center mb-15">
					{minifigImages.slice(1).map((img, index) => (
						<button
							key={index}
							onClick={() => handleImageClick(index + 1)}
							className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px] hover:scale-110 active:scale-95 transition-transform duration-200"
							disabled={code.length >= maxLength}
							aria-label={`${index + 1}`}
						>
							<Image
								src={img}
								alt=""
								width={100}
								height={100}
								className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
							/>
						</button>
					))}
				</div>
				{/* Action Buttons */}
				<div className="flex gap-3">
					<button
						onClick={handleClear}
						className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all hover:scale-105 active:scale-95"
					>
						Clear
					</button>
					<button
						onClick={handleSubmit}
						disabled={code.length !== maxLength}
						className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all hover:scale-105 active:scale-95"
					>
						Submit
					</button>
				</div>
			</main>
		</div>
	);
}

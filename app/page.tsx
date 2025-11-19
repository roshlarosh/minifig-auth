"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
	const [code, setCode] = useState<number[]>([]);
	const [message, setMessage] = useState<string>("");
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const maxLength = 6;
	const correctOTP = [1, 2, 3, 4, 5, 1]; // Demo OTP: 123451

	const minifigImages = [
		"",
		"/banana-boy.png",
		"/black-cat.png",
		"/blond-cowboy.png",
		"/burger-head.png",
		"/pink-mush.png",
		"/spiky-head.png",
	];

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
						<h1 className="text-3xl font-bold text-gray-800 mb-2">
							Welcome Back!
						</h1>
						<div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-2">
							<p className="text-gray-800 font-bold text-lg leading-relaxed">
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
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<main className="bg-white p-12 rounded-lg shadow-lg max-w-2xl w-full">
				<div className="flex justify-center mb-6">
					<Image
						src="/LEGO_Fortnite_logo.svg"
						alt="LEGO Fortnite"
						width={300}
						height={100}
						className="object-contain"
					/>
				</div>
				<h1 className="text-2xl font-bold text-center mb-2">Image OTP</h1>
				<p className="text-gray-600 text-center mb-6">
					Click the images in sequence to enter your code
				</p>

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
				<div className="flex justify-center gap-2 mb-8">
					{Array.from({ length: maxLength }).map((_, index) => (
						<div
							key={index}
							className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xl font-semibold overflow-hidden"
						>
							{code[index] !== undefined ? (
								<Image
									src={minifigImages[code[index]]}
									alt={`Selected ${code[index]}`}
									width={48}
									height={48}
									className="rounded-lg object-cover w-full h-full"
								/>
							) : (
								""
							)}
						</div>
					))}
				</div>

				{/* Image Grid */}
				<div className="grid grid-cols-3 gap-4 mb-6 justify-items-center">
					<button
						onClick={() => handleImageClick(1)}
						className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px]"
						disabled={code.length >= maxLength}
						aria-label="1"
					>
						<Image
							src="/banana-boy.png"
							alt=""
							width={100}
							height={100}
							className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
							alt=""
						/>
					</button>
					<button
						onClick={() => handleImageClick(2)}
						className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px]"
						disabled={code.length >= maxLength}
						aria-label="2"
					>
						<Image
							src="/black-cat.png"
							alt=""
							width={100}
							height={100}
							className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
						/>
					</button>
					<button
						onClick={() => handleImageClick(3)}
						className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px]"
						disabled={code.length >= maxLength}
						aria-label="3"
					>
						<Image
							src="/blond-cowboy.png"
							alt=""
							width={100}
							height={100}
							className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
						/>
					</button>
					<button
						onClick={() => handleImageClick(4)}
						className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px]"
						disabled={code.length >= maxLength}
						aria-label="4"
					>
						<Image
							src="/burger-head.png"
							alt=""
							width={100}
							height={100}
							className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
						/>
					</button>
					<button
						onClick={() => handleImageClick(5)}
						className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px]"
						disabled={code.length >= maxLength}
						aria-label="5"
					>
						<Image
							src="/pink-mush.png"
							alt=""
							width={100}
							height={100}
							className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
						/>
					</button>
					<button
						onClick={() => handleImageClick(6)}
						className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-[100px] h-[100px]"
						disabled={code.length >= maxLength}
						aria-label="6"
					>
						<Image
							src="/spiky-head.png"
							alt=""
							width={100}
							height={100}
							className="rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer w-full h-full"
						/>
					</button>
				</div>

				{/* Action Buttons */}
				<div className="flex gap-3">
					<button
						onClick={handleClear}
						className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors"
					>
						Clear
					</button>
					<button
						onClick={handleSubmit}
						disabled={code.length !== maxLength}
						className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
					>
						Submit
					</button>
				</div>
			</main>
		</div>
	);
}

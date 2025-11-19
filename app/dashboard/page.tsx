"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const [selectedTheme, setSelectedTheme] = useState("fortnite");
	const router = useRouter();

	const handleSaveChanges = () => {
		localStorage.setItem("mfa-theme", selectedTheme);
		router.push("/");
	};

	const themes = [
		{
			id: "fortnite",
			logo: "/LEGO_Fortnite_logo.svg",
			name: "LEGO Fortnite",
			tip: "fortnite",
			enabled: true,
			images: [
				"/banana-boy.png",
				"/black-cat.png",
				"/blond-cowboy.png",
				"/burger-head.png",
				"/pink-mush.png",
				"/spiky-head.png",
			],
		},
		{
			id: "star-wars",
			logo: "/LEGO_star_wars.jpg",
			name: "LEGO Star Wars",
			tip: "star-wars",
			enabled: true,
			images: [
				"/princess-lea.png",
				"/r2d2.png",
				"/obi-wan.png",
				"/c3p0.png",
				"/darth-veder.png",
				"/yoda.png",
			],
		},
		{
			id: "disney",
			logo: "/LEGO_Disney.svg",
			tip: "disney",
			name: "LEGO Disney",
			enabled: false,
			images: [],
		},
		{
			id: "city",
			logo: "/LEGO_City.jpg",
			tip: "city",
			name: "LEGO City",
			enabled: false,
			images: [],
		},
	];

	const currentTheme = themes.find((theme) => theme.id === selectedTheme);

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl font-bold text-gray-800 mb-2">
						Multi-Factor Authentication Settings
					</h1>
					<p className="text-gray-600 mb-8">
						Choose your preferred theme for image-based authentication
					</p>
					{/* Info Box */}
					<div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-10">
						<div className="flex">
							<div className="flex-shrink-0">
								<svg
									className="h-5 w-5 text-blue-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="ml-3">
								<p className="text-2xl text-blue-700">
									<strong>How it works:</strong> When you log in, you'll click
									on the minifigures in the correct sequence to authenticate
									your account. Each theme has unique characters to choose from.
								</p>
							</div>
						</div>
					</div>

					{/* Theme Selection */}
					<div className="mb-10">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">
							Select Theme
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{themes.map((theme) => (
								<button
									key={theme.id}
									onClick={() => theme.enabled && setSelectedTheme(theme.id)}
									disabled={!theme.enabled}
									className={`p-6 rounded-lg border-2 transition-all ${
										selectedTheme === theme.id
											? "border-blue-500 bg-blue-50"
											: theme.enabled
												? "border-gray-300 hover:border-gray-400"
												: "border-gray-200 bg-gray-50 cursor-not-allowed opacity-50"
									}`}
								>
									<div className="flex justify-center mb-4">
										<Image
											src={theme?.logo}
											alt={`${theme.name} Logo`}
											width={150}
											height={150}
											className=""
										/>
									</div>
									{selectedTheme === theme.id && (
										<div className="flex items-center justify-center text-blue-600 text-sm font-semibold">
											<svg
												className="w-5 h-5 mr-1"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
											Active
										</div>
									)}
									{!theme.enabled && (
										<span className="text-xs text-gray-500 font-semibold">
											Coming Soon
										</span>
									)}
								</button>
							))}
						</div>
					</div>

					{/* Preview Section */}
					<div className="border-t pt-8">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">
							Theme Preview
						</h2>
						<div className="bg-gray-50 rounded-lg p-8">
							<h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">
								{currentTheme?.name} Minifigures
							</h3>

							{currentTheme?.images.length ? (
								<div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
									{currentTheme.images.map((img, index) => (
										<div
											key={index}
											className="flex flex-col items-center gap-2"
										>
											<div className="w-28 h-28 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg">
												<Image
													src={img}
													alt={`Minifig ${index + 1}`}
													width={112}
													height={112}
													className="w-full h-full object-cover"
												/>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="text-center text-gray-500 py-12">
									<p>No preview available for this theme yet.</p>
								</div>
							)}
						</div>
					</div>
					{/* Security Facts */}
					{selectedTheme === "fortnite" ? (
						<div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-2 mt-4 mb-10">
							<p className="text-gray-800 font-bold text-2xl leading-relaxed">
								"Fortify your defenses with Fortnite! Select us to ensure your
								account is as secure"
							</p>
						</div>
					) : (
						<div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-2 mt-4 mb-10">
							<p className="text-gray-800 font-bold text-2xl leading-relaxed">
								“The Force is strong with those who protect their secrets. Keep
								your passwords safe and private, young ones—never share them,
								not even with a droid or close friend!”
							</p>
						</div>
					)}

					{/* Action Buttons */}
					<div className="mt-8 flex gap-4">
						<button
							onClick={handleSaveChanges}
							className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
						>
							Save Changes
						</button>
						<button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

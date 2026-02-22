"use client";

import Link from "next/link";

export type SlideEntry = { slug: string; datetime: Date; title: string; url: string };

export function SlideLink({ slug, datetime, title, url }: { slug: string; datetime: string; title: string; url: string }) {
	return (
		<li>
			<Link
				href={`/slides/${encodeURIComponent(slug)}/`}
				className="block p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800/50"
			>
				<span className="font-semibold">{title}</span>
				<span className="block text-sm text-gray-500 mt-1">{datetime}</span>
				<span
					className="block text-sm text-blue-500 hover:underline mt-1 truncate"
					onClick={(e) => {
						e.preventDefault();
						window.open(url, "_blank", "noopener,noreferrer");
					}}
				>
					{url}
				</span>
			</Link>
		</li>
	);
}

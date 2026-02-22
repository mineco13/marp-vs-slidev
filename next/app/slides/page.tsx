import { readdir, stat } from "fs/promises";
import path from "path";
import { SlideEntry, SlideLink } from "./slide-link";

export const dynamic = "force-dynamic";

export default async function SlidesPage() {
	const entries = await generateSlideEntries();
	return (
		<main className="min-h-screen p-8 max-w-2xl mx-auto">
			<h1 className="text-3xl font-bold mb-8">Slides</h1>
			{entries.length === 0 ? (
				<p className="text-gray-500">No slides found.</p>
			) : (
				<ul className="space-y-3">
					{entries.map(({ slug, datetime, title, url }) => (
						<SlideLink slug={slug} datetime={datetime.toISOString()} title={title} url={url} key={slug} />
					))}
				</ul>
			)}
		</main>
	);
}

async function generateSlideEntries(): Promise<SlideEntry[]> {
	try {
		const dir = process.env.SLIDES_DIR!;
		const entries = await readdir(dir, { withFileTypes: true });
		const slides = await Promise.all(
			entries
				.filter((e) => e.isDirectory())
				.map(async (e) => {
					const { birthtime } = await stat(path.join(dir, e.name));
					return { ...parseSlug(e.name), datetime: birthtime };
				}),
		);
		return slides.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
	} catch (e) {
		console.error(e);
		return [];
	}
	function parseSlug(slug: string): Omit<SlideEntry, "datetime"> {
		const [title, encoded] = slug.split(" ");
		return { slug, title, url: Buffer.from(encoded, "base64url").toString() };
	}
}

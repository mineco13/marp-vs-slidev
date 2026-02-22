import { NextRequest, NextResponse } from "next/server";
import { readFile, access } from "fs/promises";
import path from "path";
import mime from "mime";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string; path?: string[] }> }) {
	// TODO: Add authentication check
	const SLIDES_DIR = process.env.SLIDES_DIR!;

	const { slug, path: pathSegments } = await params;
	const filePath = path.resolve(path.join(SLIDES_DIR, slug, ...(pathSegments?.length ? pathSegments : ["index.html"])));
	if (!filePath.startsWith(SLIDES_DIR)) {
		return new NextResponse("Forbidden", { status: 403 });
	}

	try {
		await access(filePath);
		const content = await readFile(filePath);
		return new NextResponse(content, {
			headers: { "Content-Type": mime.getType(filePath) || "application/octet-stream" },
		});
	} catch {
		return new NextResponse("Not Found", { status: 404 });
	}
}
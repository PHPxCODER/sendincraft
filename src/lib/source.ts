import { loader } from "fumadocs-core/source";
import { docsfr } from "../../.source";

export const source = loader({
	baseUrl: "/docs",
	source: docsfr.toFumadocsSource(),
});
interface ImportMetaEnv {
	readonly VITE_YOUR_URL: string;
	readonly VITE_REALM: string;
	readonly VITE_CLIENT_ID: string;
	readonly VITE_TEST_CONST: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}

import { component$ } from '@builder.io/qwik';

export const Moon = component$(() => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="h-6 w-6 text-gray-900 dark:text-gray-100"
		>
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
		</svg>
	);
});

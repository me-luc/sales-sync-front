import { IconProps } from '@/types';

export function SearchIcon({ className, size }: IconProps) {
	const width = size ? size : '28';
	return (
		<svg
			className={className}
			width={width}
			height={width}
			viewBox='0 0 28 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M23.6134 12.5928C23.6134 14.6879 22.9921 16.7359 21.8282 18.4779C20.6642 20.2199 19.0099 21.5776 17.0743 22.3793C15.1387 23.1811 13.0088 23.3909 10.954 22.9821C8.89921 22.5734 7.01174 21.5645 5.53031 20.0831C4.04887 18.6017 3.04 16.7142 2.63128 14.6594C2.22255 12.6046 2.43232 10.4747 3.23407 8.53913C4.03582 6.60354 5.39353 4.94917 7.13551 3.78521C8.87749 2.62126 10.9255 2 13.0206 2C14.4116 2 15.7891 2.27399 17.0743 2.80633C18.3595 3.33867 19.5272 4.11893 20.5108 5.10257C21.4945 6.0862 22.2747 7.25395 22.8071 8.53913C23.3394 9.82431 23.6134 11.2018 23.6134 12.5928V12.5928Z'
				stroke='#333333'
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M26.2611 25.8333L20.501 20.0732'
				stroke='#333333'
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

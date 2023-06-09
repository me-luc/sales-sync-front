import styled from 'styled-components';
import { Lato } from 'next/font/google';
import React from 'react';

interface ProductInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
	highlight?: boolean;
}

export function ProductInput({
	title,
	highlight = false,
	...props
}: ProductInputProps) {
	return (
		<>
			<StyledContainer>
				<InputTitle>{title}</InputTitle>
				<Input highlight={highlight} {...props} />
			</StyledContainer>
			<Line />
		</>
	);
}

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;

	&:first-child {
		background-color: red;
	}
`;

const InputTitle = styled.h4`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 125%;
	text-align: left;
	letter-spacing: 0.75px;
	margin-bottom: 10px;

	color: var(--tertiery-text-color);
`;

const Line = styled.div`
	height: 0.5px;
	width: 100%;
	background: #cbd7e1;
	margin: 20px 0;
`;

interface InputProps {
	highlight?: boolean;
}

const Input = styled.input<InputProps>`
	width: 100%;
	height: 40px;
	background-color: var(--base-color);
	font-weight: 700;
	font-size: 16px;
	line-height: 125%;
	text-align: left;
	letter-spacing: 0.75px;
	outline: none;
	color: ${({ highlight }) => highlight && 'var(--accent-color)'};

	padding: 5px 15px;

	&::placeholder {
		font-size: 16px;
		color: var(--placeholder-color);
	}

	&[type='file'] {
		background-color: red;
	}
`;

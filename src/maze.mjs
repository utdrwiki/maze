import { randomBytes } from "node:crypto";

const random = () => randomBytes(6).toString('base64url');

export default async function handler(request) {
	return new Response(
		`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>&nbsp;</title>
	<style>
	body {
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABEAQMAAAAsmCBjAAAABlBMVEUKCjQODkWjrlhlAAAAIElEQVR42u3NNwEAAAjEQPyLpnqgf6bbQpF4ZQQ7nqAC5yZSvIG4hAoAAAAASUVORK5CYII=");
		display: grid;
		margin: 0;
		min-height: 100vh;
		overflow: hidden;
		place-items: center;
	}
	div {
		height: 480px;
		position: relative;
		width: 640px;
	}
	a {
		display: block;
		color: transparent;
		height: 96px;
		position: absolute;
		width: 96px;
	}
	.a {
		left: 0;
		top: 224px;
	}
	.b {
		left: 281px;
		top: 0;
	}
	.c {
		left: 544px;
		top: 224px;
	}
	.d {
		left: 281px;
		top: 384px;
	}
	</style>
</head>
<body>
	<div>
		<img
			width="640"
			height="480"
			alt="You used the machine."
			src="data:image/png;base64,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"
		>
		<a class="a" href="/${random()}">A</a>
		<a class="b" href="/${random()}">B</a>
		<a class="c" href="/${random()}">C</a>
		<a class="d" href="/${random()}">D</a>
	</div>
</body>
</html>`,
		{
			headers: {
				'Cache-Control': 'no-store, max-age=0',
				'Content-Type': 'text/html; charset=UTF-8',
			}
		}
	);
}

//Дискриминант
function Discr (a, b, c) {
	var D = Math.pow(b,2)-4*a*c;
	return D;
}
//Теорема Пифагора
function findСAtteorPifag (a, b) {
	var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	return c;
}

function findAAtteorPifag (b, c) {
	var a = Math.sqrt(Math.pow(c, 2) + Math.pow(b, 2));
	return a;
}

function findBAtteorPifag (a, c) {
	var b = Math.sqrt(Math.pow(c, 2) + Math.pow(a, 2));
	return b;
}
//Теорема Косинусов
function TeorCOS (b, c, alpha) {
	var a = Math.sqrt( Math.pow(b, 2) + Math.pow(c, 2) - 2*b*c*Math.cos(alpha));
	return a;
}
//Теорема синусов
function TeorSINfindA (b, alpha, beta) {
	var a = (b * Math.sin(alpha))/ Math.sin(beta);
	return a;
}

function TeorSINfindB (a, alpha, beta) {
	var a = (a * Math.sin(beta))/ Math.sin(alpha);
	return a;
}

function TeorSINfindSINalpha (a, b, beta) {
	var alpha = (a * Math.sin(beta))/ b;
	return alpha;
}

function TeorSINfindSINbeta (a, b, alpha) {
	var beta = (b * Math.sin(alpha))/ a;
	return beta;
}
//Площадь треугольника
function StreAtStor (a, b, gamma) {
	var S = 0.5*a*b*Math.sin(gamma);
	return S;
}

function StreAtGeron (a, b, c) {
	var p = (a + b + c)/2;
	var S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	return S;
}

function StreAtRadius (a, b, c, R) {
	var S = (a*b*c)/(4*R);
	return S;
}
//Радиус вписаной и описаной окр.
function RadiusOUT (a, n) {
	var R = a / (2*Math.sin(180/n));
	return R;
}

function RadiusIN (a, n) {
	var R = a / (2*Math.tan(180/n));
	return R;
}
//Окружности
function DlinOkrMin (R) {
	var pi = 3.14;
	var C = 2*pi*R;
	return C;
}

function DlinOkrMax (R) {
	var pi = 3.141592653589793238462643383279;
	var C = 2*pi*R;
	return C;
}

function DlinDugMin (R, n) {
	var pi = 3.14;
	var l = (pi*R*n)/180;
	return l;
}

function DlinDugMax (R, n) {
	var pi = 3.141592653589793238462643383279;
	var l = (pi*R*n)/180;
	return l;
}

function SCrugMin (R, n) {
	var pi = 3.14;
	var S = pi*Math.pow(R, 2);
	return S;
}

function SCrugMax (R, n) {
	var pi = 3.141592653589793238462643383279;
	var S = pi*Math.pow(R, 2);
	return S;
}

function SSectorMin (R, n) {
	var pi = 3.14;
	var S = (pi*Math.pow(S, 2)*n)/360;
	return S;
}

function SSectorMax (R, n) {
	var pi = 3.141592653589793238462643383279;
	var S = (pi*Math.pow(S, 2)*n)/360;
	return S;
}
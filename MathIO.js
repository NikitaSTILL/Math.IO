/*МАТЕМАТИКА*/

//Дискриминант
function Discr (a, b, c) {
	var D = Math.pow(b,2)-4*a*c;
	return D;
}
//Теорема Пифагора
function findСAtteorPifag (a, b) {
	var c = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
	return c;
}

function findAAtteorPifag (b, c) {
	var a = Math.sqrt(Math.pow(c, 2) + Math.pow(b, 2));
	return a;
}

function findBAtteorPifag (a, c) {
	var b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
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

/*ФИЗИКА*/

function PhysFInWorld (m1, m2, R) {
	var G = 0.0000000000667;
	var F = G*((m1*m2)/Math.pow(R, 2));
	return F;
}

function PhysFreeFall (m1, m2, R) {
	var g = 9.8;
	var S = (g*Math.pow(t, 2))/2;
	return S;
}

function PhysEkin (m, V) {
	var Ek = (m*Math.pow(V, 2)/2);
	return Ek;
}

function PhysEpot (m, h) {
	var g = 9.8;
	var Ep = m*g*h;
	return Ep;
}

function PhysStickLengthFindF1 (l1, F2, l2) { //F1*l1=F2*l2
	var F1 = (F2*l2)/l1;
	return F1;
}

function PhysStickLengthFindF2 (F1, l1,  l2) { //F1*l1=F2*l2
	var F2 = (F1*l1)/l2;
	return F2;
}

function PhysStickLengthFindl1 (F1, F2, l2) { //F1*l1=F2*l2
	var l1 = (F2*l2)/F1;
	return l1;
}

function PhysStickLengthFindl2 (F1, l1, F2) { //F1*l1=F2*l2
	var l2 = (F1*l1)/F2;
	return l2;
}

function PhysKPD (Ap, Az) {
	var KPD = (Ap/Az)*100;
	return KPD;
}

function PhysLawPaskal (Ap, Az, type) {
	var ro = 1000;

	if(type == water){
		ro = 1000;
	}

	if(type == benzin){
		ro = 710;
	}

	if(type == spirt){
		ro = 800;
	}

	if(type == kerosin){
		ro = 800;
	}

	if(type == caroil){
		ro = 900;
	}

	if(type == milkcell){
		ro = 1030;
	}

	if(type == watermors){
		ro = 1030;
	}

	if(type == rtut){
		ro = 13600;
	}

	if(type == woodsosn){
		ro = 400;
	}

	if(type == parafin){
		ro = 900;
	}

	if(type == alum){
		ro = 2700;
	}

	if(type == mramor){
		ro = 2700;
	}

	if(type == zink){
		ro = 7100;
	}

	if(type == stail){
		ro = 7800;
	}

	if(type == cuprum){
		ro = 8900;
	}

	if(type == svin){
		ro = 11350;
	}
	var g = 9.8;

	var p = ro*g*h;
	return p;
}

function PhysLawArhimeda (Vpog, type) {
	var ro = 1000;

	if(type == water){
		ro = 1000;
	}

	if(type == benzin){
		ro = 710;
	}

	if(type == spirt){
		ro = 800;
	}

	if(type == kerosin){
		ro = 800;
	}

	if(type == caroil){
		ro = 900;
	}

	if(type == milkcell){
		ro = 1030;
	}

	if(type == watermors){
		ro = 1030;
	}

	if(type == rtut){
		ro = 13600;
	}

	if(type == woodsosn){
		ro = 400;
	}

	if(type == parafin){
		ro = 900;
	}

	if(type == alum){
		ro = 2700;
	}

	if(type == mramor){
		ro = 2700;
	}

	if(type == zink){
		ro = 7100;
	}

	if(type == stail){
		ro = 7800;
	}

	if(type == cuprum){
		ro = 8900;
	}

	if(type == svin){
		ro = 11350;
	}
	var g = 9.8;

	var Fa = ro*g*Vpog;
	return Fa;
}

function faktorial (n) { 
	if (n != null) {
	function factor(n) {
		var x = 1;
		var i = 2;

		while(i <= n) {
		x = x * i;
		i++;
		}

		return x;
	}

	if (n < 0) {
		while (n < 0){
		n = prompt("Введите число больше либо равно нулю для вычисления факториала n!, где n >= 0. Факториала отрицательного числа не существует.", 0);
		}

		//document.write(factor(n));
		return factor(n);
	}

	else {
		//alert("0");//document.write(factor(n));
		return factor(n);
	}

	} 
	
}

function VectSumm2D (ax, bx, ay, by) {
	var mass1 = [ax,ay];
	var mass2 = [bx,by];
	var c = [0,0];
	c[0] = mass1[0] + mass2[0];
	c[1] = mass1[1] + mass2[1];
	return c;
}

function VectSumm3D (ax, bx, ay, by, az, bz) {
	var mass1 = [ax,ay,az];
	var mass2 = [bx,by,bz];
	var c = [0,0,0];
	c[0] = mass1[0] + mass2[0];
	c[1] = mass1[1] + mass2[1];
	c[2] = mass1[2] + mass2[2];
	return c;
}

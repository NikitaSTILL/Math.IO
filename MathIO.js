/*Константы*/

var G = 0.0000000000667;
var PHYSg = 9.8;

var ro = {
	'water' : 1000,
	'benzin' : 710,
	'spirt' : 800,
	'kerosin' : 800,
	'caroil' : 900,
	'milkcell' : 1030,
	'watermors' : 1030,
	'rtut' : 13600,
	'woodsosn' : 400,
	'parafin' : 900,
	'alum' : 2700,
	'mramor' : 2700,
	'zink' : 7100,
	'stail' : 7800,
	'cuprum' : 8900,
	'svin' : 11350
}

/*----------*/

function RoEdit(type) {
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
	return ro;
}

var MIO = {
	'M' : {
		'Di' : function (a, b, c) {
			return Math.pow(b,2)-4*a*c;
		},

		'teoPif' : {
			'fA' : function (b, c) {
				return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
			},
			'fB' : function (a, c) {
				return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
			},
			'fC' : function (a, b) {
				return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
			}
		},

		'tCos' : function (b, c, alpha) {
			return Math.sqrt( Math.pow(b, 2) + Math.pow(c, 2) - 2*b*c*Math.cos(alpha));
		},

		'tSin' : {
			'fA' : function (b, alpha, beta) {
				return (b * Math.sin(alpha))/ Math.sin(beta);
			},
			'fB' : function (a, alpha, beta) {
				return (a * Math.sin(beta))/ Math.sin(alpha);
			},
			'fAlpha' : function (a, b, beta) {
				return (a * Math.sin(beta))/ Math.sin(alpha);
			},
			'fBeta' : function (a, b, alpha) {
				return (b * Math.sin(alpha))/ a;
			}
		},

		'STri' : {
			'TwSt' : function (a, b, gamma) {
				return 0.5*a*b*Math.sin(gamma);
			},
			'Geron' : function (a, b, c) {
				var p = (a + b + c)/2;
				return Math.sqrt(p*(p-a)*(p-b)*(p-c));
			},
			'Rad' : function (a, b, c, R) {
				return (a*b*c)/(4*R);
			}
		},
		//Math.PI
		'DlinCir' : function () {
			return 2*Math.PI*R;
		},

		'DlinDug' : function () {
			return (Math.PI*R*n)/180;
		},

		'S' : {
			'Crug' : function (R, n) {
				return Math.PI*Math.pow(R, 2);
			},
			'Sect' : function (R, n) {
				return (Math.PI*Math.pow(S, 2)*n)/360;
			}
		},

		'Fact' : function (n) {
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
		},

		'Vect' : {
			'Summ' : {
				'2D' : function (ax, bx, ay, by) {
					var mass1 = [ax,ay];
					var mass2 = [bx,by];
					var c = [0,0];
					c[0] = mass1[0] + mass2[0];
					c[1] = mass1[1] + mass2[1];
					return c;
				},
				'3D' : function (ax, bx, ay, by, az, bz) {
					var mass1 = [ax,ay,az];
					var mass2 = [bx,by,bz];
					var c = [0,0,0];
					c[0] = mass1[0] + mass2[0];
					c[1] = mass1[1] + mass2[1];
					c[2] = mass1[2] + mass2[2];
					return c;
				}
			},

			'Diff' : {
				'2D' : function (ax, bx, ay, by) {
					var mass1 = [ax,ay];
					var mass2 = [bx,by];
					var c = [0,0];
					c[0] = mass1[0] - mass2[0];
					c[1] = mass1[1] - mass2[1];
					return c;
				},
				'3D' : function (ax, bx, ay, by, az, bz) {
					var mass1 = [ax,ay,az];
					var mass2 = [bx,by,bz];
					var c = [0,0,0];
					c[0] = mass1[0] - mass2[0];
					c[1] = mass1[1] - mass2[1];
					c[2] = mass1[2] - mass2[2];
					return c;
				}
			},

			'Scal' : {
				'2D' : function (ax, ay, count) {
					var mass1 = [ax,ay];
					var c = [0,0];
					c[0] = mass1[0] * count;
					c[1] = mass1[1] * count;
					return c;
				},
				'3D' : function (ax, ay, az, count) {
					var mass1 = [ax,ay,az];
					var c = [0,0,0];
					c[0] = mass1[0] * count;
					c[1] = mass1[1] * count;
					c[2] = mass1[2] * count;
					return c;
				}
			},

			'Len' : {
				'2D' : function (ax, ay, count) {
					var a = 0;
					var c = 0;
					c = Math.sqrt(Math.pow(ax,2) + Math.pow(ay,2));
					return c;
				},
				'3D' : function (ax, ay, az, count) {
					var a = 0;
					var c = 0;
					c = Math.sqrt(Math.pow(ax,2) + Math.pow(ay,2) + Math.pow(az,2));
					return c;
				}
			},

			'Mult' : {
				'2D' : function (ax, bx, ay, by) {
					var mass1 = [ax,ay];
					var mass2 = [bx,by];
					var summ = [0,0];
					var c = 0;
					summ[0] = mass1[0] * mass2[0];
					summ[1] = mass1[1] * mass2[1];
					c = summ[0] + summ[1];
					return c;
				},
				'3D' : function (ax, ay, bx, by, cx, cy) {
					var mass1 = [ax,ay];
					var mass2 = [bx,by];
					var mass2 = [cx,cy];
					var summ = [0,0,0];
					var c = 0;
					summ[0] = mass1[0] * mass2[0];
					summ[1] = mass1[1] * mass2[1];
					summ[2] = mass3[2] * mass3[2];
					c = summ[0] + summ[1] + summ[2];
					return c;
				}
			}
		}
	},

	'Ph' : {
		'InWor' : function (m1, m2, R) {
			return G*((m1*m2)/Math.pow(R, 2));
		},

		'FreeFall' : function (m1, m2, R) {
			return (PHYSg*Math.pow(t, 2))/2;
		},

		'Ekin' : function (m, V) {
			return (m*Math.pow(V, 2)/2);
		},

		'Epot' : function (m, h) {
			return m*PHYSg*h;
		},

		'StLen' : {
			'Ff1' : function () {return (F2*l2)/l1;},
			'Ff2' : function () {return (F1*l1)/l2;},
			'Fl1' : function () {return (F2*l2)/F1;},
			'Fl2' : function () {return (F1*l1)/F2;}
		},

		'KPD' : function (Ap, Az) {
			return (Ap/Az)*100;
		},

		'LawPas' : function (h, type) {

			return RoEdit(type)*PHYSg*h;
		},

		'LawArh' : function (Vpog, type) {
			return RoEdit(type)*PHYSg*Vpog;
		}
	}
	
}

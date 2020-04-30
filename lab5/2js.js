function IsStrap(strap){
	var Pattern1=true;
	var Pattern2=true;
	var Pattern3=true;
	var Pattern4=true;
	for(i = 0; i < strap.length; ++i){
		contr = true;
		for(j = 1; j < strap[i].length; ++j)

		{
			if(strap[i][j]!==strap[i][j-1]) 
				contr= false;
		}

		if(contr === false){
			Pattern1 = false;
		}
	
	}
	for(j = 0; j < strap[0].length; ++j){
		contr = true;

		for(i = 1; i < strap.length; ++i){
			if(strap[i][j] !== strap[i-1][j]) contr = false;
		}

		if(contr === false){
			Pattern2 = false;
		}

	}

	for(i = 0; i < strap.length; ++i){
		for(j = 0; j < strap[0].length; ++j){
			str = "";
			for(l = 0; l < strap[0].length-j && l < strap.length-i; ++l){
				str=str +  strap[i+l][j+l];
			}
			if((str.split(str[0]).length - 1)!== str.length){
				Pattern3=false;
			}
		}
		
	}
	for(i = 0; i < strap.length; ++i){
		for(j = strap[0].length-1; j >= 0 ; --j){
			str = "";
			for(l = 0; l < strap.length-i && j-l>=0; ++l){
				str=str + strap[i+z][j-z];
			}
			if((str.split(str[0]).length - 1)!== str.length){
				Pattern4=false;
			}
		}
		
	}
	return Pattern1||Pattern2||Pattern3||Pattern4;
}

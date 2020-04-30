function my_funck(obj){
	var alfavit="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),musor='-_=+/|1234567890!№#;%:?*().,',ekran="",STRING,sumZdvig,zdvig,i=0;
	if(typeof obj=="object")
	{
		sumZdvig=obj.shift;
		STRING=obj.msg.toLowerCase();
	} 
	else
	{
		return;
	}
	if(typeof STRING==="string" || typeof(STRING+"")==="string")
	{
		zdvig=alfavit.slice(shiftAmount);
		zdvig=zdvig+alfavit.slice(0,sumZdvig);
		zdvig=zdvig+musor;
		alfavit=alfavit + musor;
		for(i=0; i<STRING.length; i++){
			var NUMBER=alphabet.indexOf(STRING[i]);

			ekran= ekran + zdvig[NUMBER];
		}
	} 
	else
	{
		return;
	};

	return ekran;
}
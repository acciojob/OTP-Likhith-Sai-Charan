//your JS code here. If required.
const codes=document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code,idx)=>{
	code.addEventListener('input',(e)=>{
		const val=e.target.value;
		if(val.length>1){
			e.target.value=val.charAt(0);
		}

		if(val!=='' && idx<codes.length-1){
			codes[idx+1].focus();
		}
	});

	code.addEventListener('keydown',(e)=>{
		if(e.key === 'Backspace'){
			if(e.target.value==='' && idx>0){
				codes[idx-1].focus();
				codes[idx-1].value='';
			}
		}else if(e.key>='0' && e.key<='9'){}
		else if(e.key!=='Tab'){
			e.preventDefault();
		}
	});
});
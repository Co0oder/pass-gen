function RC4(key){;
	Keystream = PRGA( KSA(key) )
	return Keystream 
}

function KSA(key){
	key = string_to_byte_array(key)
	let S = []
	for (let i = 0; i < 256; i++) { S[i]=i }
	
	j=0
	for (let i = 0; i < 256; i++) {
		j = (j + S[i] + key[i%key.length])%16;
		swap(S,i,j)
	}
	return S
}

function* PRGA(S){
	i=0
	j=0
	while(true){
		i = (i + 1)%256 
		j = (j + S[i]) % 256 
		swap(S,i,j) 
		yield S[(S[i] + S[j]) % 256]
	}
}

function string_to_byte_array(str){ 
	arr = []
	for (let i = 0; i < str.length; i++) {
		arr[i] = (str.charAt(i).charCodeAt());
	}
	return arr
}

function swap(s, i,j){
	x = s[i];
	s[i] = s[j];
	s[j] = x;
}

function* encrypt(generator,text){
	plaintext = string_to_byte_array(text)
	for (let i=0; i<16; i++){
		yield (plaintext[i]^generator.next().value)
	};
}


const alphabets = {
    latin: 'abcdefghijklmnopqrstuvwxyz',
    cyrillic: 'абвгґдеёєэжзиыіїйклмнопрстуфхцчшщьъюя',
	numbers: '0123456789',
    specsimbols: '-()\"\'#/@;:<>{}`+=~|.!?,$%^&*[]'
}

function LowerUpperCaser(options) {
	isUppercase = options.uppercase,
	isChange = options.uppercase && options.lowercase

	return function(char) {
		if(isUppercase) {
			char = char.toUpperCase();
		}
		if(isChange) {
			isUppercase = !isUppercase;
		}
		return char
	}
}

function countShoftPoints(string){
	return string.split('').reduce((acc, char) => acc+= char.charCodeAt(0) , 0) % 16;
}

function shift(str,n){
	chars = str.split('');
	for(i=0;i<n;i++) chars.unshift(chars.pop());
	return chars.join('');
}

function generatePasword(PRString, options) {
	const alphabetByOptions = [
		alphabets.link,
		options.latin ? alphabets.latin : null,
		options.cyrillic ? alphabets.cyrillic : null,
		options.specsimbols ? alphabets.specsimbols : null,
		options.numbers ? alphabets.numbers : null
	].filter(e => !!e);

	let password = ''; 
	const PRSarray = PRString.split(' ').filter(e => !!e);
	const caseChanger = LowerUpperCaser(options);
	for(let [index, number] of PRSarray.entries()) {
		const tempAlphabet = alphabetByOptions[index%alphabetByOptions.length];
		password += caseChanger(tempAlphabet[+number% tempAlphabet.length]);
	}

	const shiftPoints = countShoftPoints(alphabets.link);
	const shiftedPassword = shift(password, shiftPoints);
	return shiftedPassword; 

}




function enc(link,secret, options) {
	let kayString = '';
    KS = RC4(secret);
	kay = RC4(secret);
    cipher = encrypt(KS,link)
    generator = cipher.next()
    

    while(!generator.done){
		const value = kay.next().value;
		kayString += ' ' + value;
        generator = cipher.next()
    }
	alphabets.link = link.replace(/[^a-zA-Z]+/g, '');
	const password = generatePasword(kayString,options)
    return password;
}
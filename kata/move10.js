const alpha = 'abcdefghijklmnopqrstuvwxyz';
const map   = 'klmnopqrstuvwxyzabcdefghij';
const moveTen = s => [...s].map(x => map[alpha.indexOf(x)]).join('');


function whichPostcode(postcode){
  postcode = postcode.trim();
  if(/^[a-z]{1,2}\d\d? \d[a-z]{2}$/i.test(postcode))return 'GB'
    
  if (/^\d\d\d \d\d$/i.test(postcode)) return 'SK'
  return 'Not valid'
}
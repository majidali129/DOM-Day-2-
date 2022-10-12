let body = document.body;
body.style.width = "100%"
body.style.height = "100vh"
let container = document.createElement("div")
body.appendChild(container)
container.className = "Container";
container.style.width = "100%"
container.style.height = "100vh"
// container.style.border = "1px solid green"
container.style.position = "relative"


let country_container = document.createElement("div")
container.appendChild(country_container)
country_container.style.width = "70%"
// country_container.style.border = '1px solid red'
country_container.style.margin = "auto"
country_container.style.position = "absolute"
country_container.style.top = '5%'
country_container.style.left = "50%"
country_container.style.transform = "translateX(-50%)"
country_container.style.padding = "2em"
country_container.style.display = 'flex'
country_container.style.alignItems = 'center'
// country_container.style.flexWrap = 'wrap'
country_container.style.justifyContent = 'center'
country_container.style.flexDirection = 'column'

let intor_section = document.createElement("div")
country_container.appendChild(intor_section)
// intor_section.style.border = "1px solid green"
intor_section.style.padding = "0.5em 1em"
intor_section.style.display = "flex"
intor_section.style.alignItems = "center"
intor_section.style.justifyContent = "center"
intor_section.style.flexDirection = "column"

let title = document.createElement("h2");
intor_section.appendChild(title)
title.style.fontSize = "3.5vw"
title.innerHTML = "WORLD COUNTRIES LIST"

let countriesInfo = document.createElement("p");
intor_section.appendChild(countriesInfo)
countriesInfo.innerHTML = "Total Number Of Countries: 193"
countriesInfo.style.fontSize = '3vw'

let reminder = document.createElement('p')
intor_section.appendChild(reminder)
reminder.innerHTML = "30DaysOfJavaScript:Dom-Day-2"
reminder.style.fontSize = '2vw'

let author = document.createElement('p')
intor_section.appendChild(author)
author.innerHTML = "Author: Asabeneh Yetayeh"
author.style.marginTop = "0.2em"
author.style.fontSize = '1.5vw'

let country_wrapper = document.createElement('div');
country_container.appendChild(country_wrapper)
// country_wrapper.style.border = '1px solid green'
// country_wrapper.style.padding = '2em'
country_wrapper.style.width = '100%'
country_wrapper.style.display = 'flex'
country_wrapper.style.alignItems = 'center'
country_wrapper.style.justifyContent = 'center'
country_wrapper.style.flexWrap = 'wrap'
// country_wrapper.style.


const countriesArray = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
for(let i=0; i<=countriesArray.length; i++){
    let country_box = document.createElement('div');


    country_wrapper.appendChild(country_box)
    // country_box.style.border = '1px solid gray'
    country_box.style.boxShadow = '0px 0px 4px #00000022'
    country_box.style.width = '110px'
    country_box.style.height = '80px'
    country_box.style.margin = '0.5em 0.5em'
    country_box.style.display = 'flex'
    country_box.style.alignItems = 'center'
    country_box.style.justifyContent = 'center'

    country_box.innerHTML = countriesArray[i]
    country_box.style.textAlign = 'center';
}




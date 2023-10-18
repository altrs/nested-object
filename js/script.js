// https://editor.p5js.org/jsy360/sketches/u5kNlGh0-
let divElement;
let computers = [];
let routers = [];
let servers = [];
let webbrowers = [];
let webcrawlers = [];
let intranets = [];
let cn = false;

const spiralURLs = [
  'assets/s1.png',
  'assets/s2.png',
  'assets/s3.png',
  'assets/s4.png',
  'assets/s5.png',
  'assets/s6.png',
];

function show() {
    document.querySelectorAll('.inter').forEach(function(element) {element.style.display = "block";});
    document.getElementById('createInternet').style.display = "none";
    divElement = document.getElementById('internet');
	divWidth = divElement.offsetWidth;
	divHeight = divElement.offsetHeight;
}

//TERMINAL COMMANDS TERMINAL COMMANDS TERMINAL COMMANDS TERMINAL COMMANDS 
//TERMINAL COMMANDS TERMINAL COMMANDS TERMINAL COMMANDS TERMINAL COMMANDS 

let serverOrganizer = false;
let gifElements = [];

$('#commandDiv').terminal({

  help: function() {
  	this.echo('COMMANDS:' +
  				'\n help : see list of commands and about information' +
  				'\n add computer [name] : adds computer with specific name' + 
  				'\n add router [name] : adds router with specific name' +
  				'\n add server [name] : adds server with specific name' +
  				'\n add webbrowser [name] : adds webbrowser with specific name' +
  				'\n add webcrawler [name] : adds webcrawler with specific name' +
  				'\n add intranet [name] : adds intranet with specific name' +
  				'\n internet status : shows internet element quantities' +
  				'\n\n Resources to learn about the internet: ' +
  				'\n https://www.youtube.com/watch?v=7_LPdttKXPc' +
				'\n https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo'+
				'\n https://csperkins.org/research/index.html' + 
				'\n https://do1.dr-chuck.net/net-intro/EN_us/net-intro.pdf'
  			);
  },

  add: function(element, name){
  	if(element == 'server'){
  		this.echo('added server: ' + name);
  		serverNotifications();
  		servers.push(name);
  		loadRandomGif();
  	}else if(element == 'webbrowser'){
  		this.echo('added web browser: ' + name);
  		webbrowers.push(name);
  		browserCreated = true;
  		createGifGrid();
  		if(serverOrganizer == false){
  			serverOrganizer = true;
  			setInterval(createGifGrid, 6000);
  		}
  	}else if(element == 'computer'){
  		computers.push(name);
  		this.echo('added computer: ' + name);
  		// if(cn == false){compNotifications();}
  		compNotifications();
  		console.log("computers: " + computers.length);
  		addComputer();
  	}
  	else if(element == 'router'){
  		routers.push(name);
  		this.echo('added router: ' + name);
  		setInterval(jitterSpirals, 50);
  	}
  	else if(element == 'webcrawler'){
  		webcrawlers.push(name);
  		this.echo('added webcrawler: ' + name);
  		setInterval(updateGifPositions, 5000);
  		addCrawler();
  		setInterval(crawlerNotification, 2000);
  	}
  	else if(element == 'intranet'){
  		intranets.push(name);
  		this.echo('added intranet: ' + name);
  	}
  	else{
  		this.echo('what');
  	}
  },

  set: function(webbrowser, name){
  	this.echo('setting web browser');
  	 shuffleArray(gifElements);
  	 updateGifPositions();
  },

  internet: function(task){
  	if(task == "status"){
  		this.echo('Servers: ' + servers.length +
  					'\nComputers: ' + computers.length +
  					'\nRouters: ' + routers.length +
  					'\nWebbrowers: ' + webbrowers.length +
  					'\nWebcrawlers: ' + webcrawlers.length + 
  					'\nIntranets: ' + intranets.length
  					);
  	}
  }

}, {greetings: 'Welcome. Type \'help\' for command list'});

//OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT
//OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT OUTPUT
let outputDiv = document.getElementById("output");

function compNotifications () {
	cn = true;
	setInterval(async function () {
		let output = document.createElement("p");
		let rand = Math.floor(Math.random() * computers.length);

		var message = ""
		const response = await fetch("assets/search.txt");
		const text = await response.text();
		const lines = text.split('\n');
		const randomIndices = getRandomIndices(lines.length, 3);
		console.log("LINE: " + lines[randomIndices[0]]);

		output.innerHTML = computers[rand] + " is searching: " + lines[randomIndices[0]];
		outputDiv.append(output);
		outputDiv.scrollBy(0, 50);
	  }, 5000);
}

function serverNotifications(){
	let randTime = Math.floor(Math.random() * 3000) + 1000;
	let output = document.createElement("p");
	let rand = Math.floor(Math.random() * servers.length);

	setInterval(function(){
		output.innerHTML = "content has been uploaded to " + servers[rand];
		outputDiv.append(output);
		outputDiv.scrollBy(0, 50);
	},randTime);

}

function crawlerNotification(){
	let randTime = Math.floor(Math.random() * 3000) + 1000;
	let output = document.createElement("p");
	let rand = Math.floor(Math.random() * webcrawlers.length);

	setInterval(function(){
		output.innerHTML = "Webcrawler " + webcrawlers[rand] + " has indexed some pages";
		outputDiv.append(output);
		outputDiv.scrollBy(0, 50);
	},randTime);
}

function getRandomIndices(max, count) {
  const indices = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indices.includes(randomIndex)) {indices.push(randomIndex);}
  }
  return indices;
}

//SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS
//SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS SPIRALS
let spirals = [];

function addComputer() {
    let spiral = document.createElement('img');
    spiral.className = 'spiral';

    let randomSize = Math.random() * 70 + 40;
    let randomIndex = Math.floor(Math.random() * spiralURLs.length);
    spiral.src = spiralURLs[randomIndex];

    spiral.style.position = 'absolute';
    spiral.style.animation = 'rotate 5s linear infinite';
    spiral.style.left = getRandomPosition(divWidth) + 'px';
    spiral.style.top = getRandomPosition(divHeight) + 'px';
    spiral.style.width = randomSize + 'px';
    spiral.style.height = randomSize + 'px';
    divElement.appendChild(spiral);

    spirals.push(spiral);
}

function jitterSpirals() {
    const jitterAmount = 10;

    for (const spiral of spirals) {
        let currentLeft = parseFloat(spiral.style.left);
        let currentTop = parseFloat(spiral.style.top);
        spiral.style.left = (currentLeft + getRandomJitter(jitterAmount)) + 'px';
        spiral.style.top = (currentTop + getRandomJitter(jitterAmount)) + 'px';
    }
}

function getRandomJitter(jitterAmount) {
    return Math.random() * 2 * jitterAmount - jitterAmount;
}

//CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER
//CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER CRAWLER
let deg = 0;
let x = 0;
let y = 0;

function addCrawler() {
  let bug = document.createElement('img');
  bug.className = 'bug';
  bug.src = 'assets/bug.png';
  bug.style.position = 'absolute';
  bug.style.left = '0px';
  bug.style.top = '0px';
  bug.style.width = '10px';
  bug.style.height = '10px';
  divElement.appendChild(bug);

  const x = parseFloat(bug.style.width);
  const y = parseFloat(bug.style.height);

  bug.style.left = Math.floor(Math.random() * (divWidth - x)) + 'px';
  bug.style.top = Math.floor(Math.random() * (divHeight - y)) + 'px';

  function moveBug() {
    const moveX = (Math.random() - 0.5) * 50;
  	const moveY = (Math.random() - 0.5) * 50;

    let currentLeft = parseFloat(bug.style.left);
    let currentTop = parseFloat(bug.style.top);

    let newLeft = currentLeft + moveX;
    let newTop = currentTop + moveY;

    if (newLeft < 0) {newLeft = 0;}
    if (newTop < 0) {newTop = 0;}
    if (newLeft + x > divWidth) {newLeft = divWidth - x;}
    if (newTop + y > divHeight) {newTop = divHeight - y;}

    bug.style.left = newLeft + 'px';
    bug.style.top = newTop + 'px';
  }

	setInterval(moveBug, 300);
	setInterval(function(){
		deg = deg + 20;
		bug.style.rotate = deg + "deg";
	}, 300);
}



//GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS
//GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS
let url = 'https://api.giphy.com/v1/gifs/trending?api_key=QwkFrgMs6TNqKfabcO28qfSt94Pgnehv';
let divWidth;
let divHeight;
let browserCreated = false;

function loadRandomGif() {
    // let divElement = document.getElementById('internet');
    // divWidth = divElement.offsetWidth;
    // divHeight = divElement.offsetHeight;

    let gif = document.createElement('img');
    getRandomGifSource((gifSrc) => {
    	gif.className = 'gif';
        gif.src = gifSrc;
        gif.style.position = 'absolute';
        gif.style.left = getRandomPosition(divWidth) + 'px';
        gif.style.top = getRandomPosition(divHeight) + 'px';
        gif.style.width = '30px';
        gif.style.height = '30px';
        divElement.appendChild(gif);
    });
}

function getRandomGifSource(callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let randomIndex = Math.floor(Math.random() * data.data.length);
            let gifUrl = data.data[randomIndex].images.original.url.replace('&ct=g', '');
            callback(gifUrl);
        })
        .catch((error) => {
            console.error('Failed to fetch GIF data:', error);
        });
}

function getRandomPosition(max) {return Math.floor(Math.random() * max);}

function createGifGrid() {
    let divElement = document.getElementById('internet');
    // gifElements = divElement.getElementsByTagName('img');
    gifElements = Array.from(divElement.getElementsByTagName('img'));

    const gridSize = Math.ceil(Math.sqrt(gifElements.length));
    const spacing = 10;

    let gridX = 0;
    let gridY = 0;

    for (let i = 0; i < gifElements.length; i++) {
        const gif = gifElements[i];

        const x = gridX * (gif.width + spacing);
        const y = gridY * (gif.height + spacing);

        gif.style.left = x + 'px';
        gif.style.top = y + 'px';

        gridX++;
        if (gridX >= gridSize) {
            gridX = 0;
            gridY++;
        }
    }
}

function updateGifPositions() {
  const gridSize = Math.ceil(Math.sqrt(gifElements.length));
  const spacing = 10;

  let gridX = 0;
  let gridY = 0;

  for (let i = 0; i < gifElements.length; i++) {
    const gif = gifElements[i];

    const x = gridX * (gif.width + spacing);
    const y = gridY * (gif.height + spacing);

    gif.style.left = x + 'px';
    gif.style.top = y + 'px';

    gridX++;
    if (gridX >= gridSize) {
      gridX = 0;
      gridY++;
    }
  }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT
//OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT OBJECT
const internet = {

	internet_layers: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer', 'Presentation Layer', 'Application Layer'],
	internet_exchange_points: 600, //approximate apparently
	switches: undefined, //a really big number that I'm unsure about
	servers: [], //to be filled dynamically
	routers:[],
	computers: [],
	packets: [],
	users_worldwide: 5300000000,
	amount_of_websites: 1130000000,
	internet_birthday: 'January 1, 1983',
	major_applications: ['Communication', 'Web Browsing', 'Social Media', 'E-commerce, Entertainment and Streaming', 'Cloud Computing Services'],

	addServer: function(ip_address, name, files) {
		let server = {
			ip_address: ip_address,
			name: name,
			webpages: {
			  files: files || [],
			},
		}
		internet.servers.push(server);
		internet.servers.forEach((element, index) => {
			console.log("Servers: " + internet.servers[index].name);
		});
	},

	addRouter: function(name, wanPorts, ethernetPorts, firewall, wirelessAccessPoint) {
		let router = {
			name: name,
			ports: {
				wan: wanPorts || [],
				ethernet: ethernetPorts || [],
			},
			firewall: true,
			wireless_access_point: true,
		};
		internet.routers.push(router);
		internet.routers.forEach((element, index) => {
			console.log("Routers: " + internet.routers[index].name);
		});
	},

	addComputer: function(ip, mac){
		let computer = {
			ip_address: ip,
			mac_address: mac,
		};
		internet.computers.push(computer);
		internet.computers.forEach((element, index) => {
			console.log("Computers: " + internet.computers[index].ip_address);
		});
	},

	addPacketUDP: function(hop_count, tracedRoute, ip_header, application, port, checksum, data){
		let packet = {
			hop_count: hop_count,
			hop_limit: 128,
			traced_route: tracedRoute, //array
			ip_header: ip_header,
			udp_header: {
				intended_application: application,
				port_number: port,
				checksum: checksum,
				checksum: function() {
					console.log("checking data sum");
				},
			},
			data_payload: data,
		}
	},

	addPacketTCP: function(hop_count, tracedRoute, ip_header, application, port, checksum, sequence_num, data){
		let packet = {
			hop_count: hop_count,
			hop_limit: 128,
			traced_route: tracedRoute,
			ip_header: ip_header,
			tcp_header: {
				intended_application: application,
				port_number: port,
				checksum: checksum,
				sequence_number: sequence_num,
				ack: false,
				checksum: function(packet) {
					console.log("checking data sum");
				},
				acknowledge: function(packet) {
					this.ack = true;
				},
			},
			data_payload: data,
		};
	},

	dns_registry: {
		dns_root_servers: 13,
		top_level_domains: ['.com', '.net', '.org', '.int', '.edu', '.gov', '.mil'], 
		second_level_domains: [],
		sub_domains: [],
		addDomain: function(domain, level){
			console.log("Adding " + domain + " to " + level); //add actual functionality?
		},
	},

	world_wide_web: {
		web_browsers: ['Google Chrome', 'Firefox', 'Safari', 'Opera', 'Microsoft Edge', 'Internet Explorer', 'Flock', 'Netscape'],
		hyperlinks: {
			address: undefined,
			url: undefined,
			https: undefined, //true or false
			http: undefined, //true or false
		},
		webcrawler: {
			known_sites: [],
			index:[],
		},
		webcrawler: function(){
			console.log("Webcrawler is crawling");
			known_sites.forEach((element, index) => {
				console.log('Checking content of: ' + element);
				console.log('Adding to index');
			});
		},
	},

	check_DNS_registry: function (newDNS) {
		console.log('Consulting DNS Registry');
		second_level_domains.forEach((element, index) => {
			if(newDNS == element){console.log('domain name taken.')}
			else{
				second_level_domains.append(newDNS);
				console.log('Domain registered');
			}
		});
	},

	connect_to_website: function (siteName) {
		console.log("Connecting to " + siteName);
	}

};

internet.addRouter('My Router', ['WAN3'], ['Eth3', 'Eth4'], true, true);
internet.addServer('102.453.12', 'myweb', ['index.html', 'style.css']);
internet.addComputer('102.453.12', '13.356.543');


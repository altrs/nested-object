// https://editor.p5js.org/jsy360/sketches/u5kNlGh0-

function show() {
    document.querySelectorAll('.inter').forEach(function(element) {element.style.display = "block";});
    document.getElementById('createInternet').style.display = "none";
}

$('#commandDiv').terminal({

  hello: function(what) {
  	this.echo('Hello, ' + what + '. Welcome to this terminal.');
  },

  add: function(element, name){
  	if(element == 'server'){
  		this.echo('added server');
  		loadRandomGif();
  	}else if(element == 'webbrowser'){
  		this.echo('added web browser');
  		createGifGrid();
  	}
  	else{
  		this.echo('what');
  	}
  },


}, {greetings: 'Welcome. Type \'help\' for command list'});



//GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS
//GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS GIFS
let url = 'https://api.giphy.com/v1/gifs/trending?api_key=QwkFrgMs6TNqKfabcO28qfSt94Pgnehv';
let divWidth;
let divHeight;

function loadRandomGif() {
    let divElement = document.getElementById('internet');
    divWidth = divElement.offsetWidth;
    divHeight = divElement.offsetHeight;

    let gif = document.createElement('img');
    getRandomGifSource((gifSrc) => {
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
    let gifElements = divElement.getElementsByTagName('img');

    // Define the grid dimensions and spacing
    const gridSize = Math.ceil(Math.sqrt(gifElements.length)); // Square grid
    const spacing = 10; // Adjust as needed

    let gridX = 0;
    let gridY = 0;

    for (let i = 0; i < gifElements.length; i++) {
        const gif = gifElements[i];

        // Calculate the position within the grid
        const x = gridX * (gif.width + spacing);
        const y = gridY * (gif.height + spacing);

        // Set the position of the GIF
        gif.style.left = x + 'px';
        gif.style.top = y + 'px';

        // Increment grid coordinates
        gridX++;
        if (gridX >= gridSize) {
            gridX = 0;
            gridY++;
        }
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


const internet = {

	internet_layers: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer', 'Presentation Layer', 'Application Layer'],
	internet_exchange_points: 600, //approximate
	switches: undefined, //a really big number
	routers: [],

	server: {
		ip_address: '',
		name: '',
		webpages: {
		  files: [],
		},
	},

	addRouter: function(name, wanPorts, ethernetPorts, firewall, wirelessAccessPoint) {
		let router = {
			name: name,
			ports: {
				wan: [],
				ethernet: [],
			},
			firewall: true,
			wireless_access_point: true,
		};
		internet.routers.push(router);
		internet.routers.forEach((element, index) => {
			console.log("Routers: " + internet.routers[index].name);
		});
	},

	computer: {
		ip_address: undefined,
		mac_address: undefined,
	},

	packet: {
		hop_count: 0,
		hop_limit: 128,
		traced_route: [],
		ip_header: '',
		udp_header: {
			intended_application: undefined,
			port_number: undefined,
			checksum: undefined,
			checksum: function() {
				console.log("checking data sum");
			},
		},
		tcp_header: {
			intended_application: undefined,
			port_number: undefined,
			checksum: undefined,
			sequence_number: undefined,
			ack: undefined,
			checksum: function() {
				console.log("checking data sum");
			},
			acknowledge: function() {
				this.ack = true;
			},
		},
		data_payload: {},
	},

	dns_registry: {
		dns_root_servers: 13,
		top_level_domains: ['.com', '.net', '.org', '.int', '.edu', '.gov', '.mil'], 
		second_level_domains: [],
		sub_domains: [],
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


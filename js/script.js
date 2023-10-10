const internet = {

  server: {
    ip_address: '',
    name: '',
    webpages: {
      files: [],
    },
  },

  router: {
    ports: {
      wan: [],
      ethernet: [],
    },
    firewall: true,
    wireless_access_point: true;
  },

  computer: {
  	ip_address: undefined,
  	mac_address: undefined,
  },

  packet: {
  	hop_count: 0,
  	hop_limit: 128,
  	traced_route: [];
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
  	dns_root_servers: 13;
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
  	webcrawler: function(){
  		console.log("Webcrawler is crawling");
  	},
  },

  internet_layers: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer', 'Presentation Layer', 'Application Layer'],
  internet_exchange_points: 600, //approximate
  switches: undefined, //a really big number

  check_DNS_registry: function () {

  }

  congestion_control: function () {

  }

  packet_switch: function () {

  }

  connect_to_website: function () {

  }

};

// Content of this configuration file was sourced from: https://developer.genesys.cloud/commdigital/digital/webchat/widget-version2

window._genesys = {
	widgets: {
		
	    main: {
	      preload: ['webchat'],
	    },

		webchat: {
			transport: {
				type: 'purecloud-v2-sockets',
				dataURL: 'https://api.usw2.pure.cloud', // replace with API URL matching your region
				deploymentKey: 'VALID KEY IN REAL VERSION OF FILE', // replace with your Deployment ID
				orgGuid: 'VALID ORG ID IN REAL VERSION OF FILE', // replace with your Organization ID
				interactionData: {
					routing: {
						targetType: 'QUEUE',
						targetAddress: 'CH_ChatTest',
						priority: 2
					}
				}
			}
		},
		
		webchat: {
		    chatButton: {
		      enabled: true, // (boolean) Enable/disable chat button on screen.
		    }
		}
//
//		userData: {
//			addressStreet: '64472 Brown Street',
//			addressCity: 'Lindgrenmouth',
//			addressPostalCode: '50163-2735',
//			addressState: 'FL',
//			phoneNumber: '1-916-892-2045 x293',
//			phoneType: 'Cell',
//			customerId: '59606',
			// These fields should be provided via advanced configuration
			// firstName: 'Praenomen',
			// lastName: 'Gens',
			// email: 'praenomen.gens@calidumlitterae.com',
			// subject: 'Chat subject'
//		}
	}
};

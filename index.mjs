// ORIGINAL OUTDATED CODE FROM GENERALMATHS FOR BARE SERVER
// import Server from 'bare-server-node';
// import http from 'http';
// import nodeStatic from 'node-static';
// 
// const bare = new Server('/bare/', '');
// 
// const serve = new nodeStatic.Server('static/');
// const fakeServe = new nodeStatic.Server('BlacklistServe/');
// 
// const server = http.createServer();
// 
// server.on('request', (request, response) => {
//     const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
// Code from NebulaServices used to lie blockers
//    var isLS = ip.startsWith('34.216.110') || ip.startsWith('54.244.51') || ip.startsWith('54.172.60') || ip.startsWith('34.203.250') || ip.startsWith('34.203.254');
// 
//     if (isLS)
//         fakeServe.serve(request, response);
//     else {
//         if (bare.route_request(request, response))
//             return true;
// 
//         serve.serve(request, response);
//     }
// });
// 
// server.on('upgrade', (req, socket, head) => {
//     if (bare.route_upgrade(req, socket, head))
//         return;
//     socket.end();
// });
// 
// server.listen(8080);



// NEW BARE SERVER CODE
import createBareServer from '@tomphttp/bare-server-node';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import serveStatic from 'serve-static';
import nodeStatic from 'node-static';

const httpServer = createServer();

const bareServer = createBareServer('/bare/');

const fakeServe = serveStatic(fileURLToPath(new URL('BlackServe/', import.meta.url)),{fallthrough: false,});
const serve = serveStatic(
	fileURLToPath(new URL('static/', import.meta.url)),
	{
		fallthrough: false,
	}
);

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		serve(req, res, (err) => {
			res.writeHead(err?.statusCode || 500, {
				'Content-Type': 'text/plain',
			});
			res.end(err?.stack);
		});
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	console.log('HTTP server listening');
});

httpServer.listen({
	port: 8080,
});

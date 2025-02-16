/* load mserver library */
const mserver=require('@9r3i/mserver').mserver;

/* setup port, host and root directory */
const port   = 8000;
const host   = 'localhost';
const root   = __dirname+'/www';

/* start the server */
new mserver(8000,'localhost',__dirname+'/www').start();

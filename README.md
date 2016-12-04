# changeDetection
Scrapes url, alerts user if something changed! 

currently only works for a website my co-worker asked me to set up alerts for  : http://fp37.a2zinc.net/clients/CASBO/CASBO2017/public/eventmap.aspx?shmode=E


to test it out: 
clone repo
run npm install
set up env variables in .bash_profile
for smtp, choose 'gmail', and enter your username and password as the values for the User and Password keys.
type in - node index.js (with above link(for now!)) and user whom you would like to e-mail


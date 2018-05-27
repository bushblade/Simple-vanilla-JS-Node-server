## Simple vanilla NodeJS server

This server is so far a static replacement for my apache server, to run it node needs permission to run on port 80. Do not run as root instead use:-
```
sudo setcap cap_net_bind_service=+ep /bin/node
```
Instead of using a template engine I am experimenting with using es6 template literal syntax async/await to render a string and ``res.send()`` instead of rendering with a template engine.

I am plan on using functional composition where possible instead of the inheritance model.
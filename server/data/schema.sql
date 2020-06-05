CREATE TABLE hosts(ipaddr text primary key, hostname text, os text);
CREATE TABLE containers(name text primary key, desc text);
CREATE TABLE databases(name text primary key, user text, password text, type text, schema text, ipaddr text, port int, hostname text, desc text);
CREATE TABLE components(name text primary key, layer text, healthurl text, port int, mode text, hosting text);
CREATE TABLE components_hosts(component text, host text, primary key (component, host));
CREATE TABLE components_containers(component text, container text, primary key (component, container));
CREATE TABLE components_databases(component text, database text, primary key (component, database));
CREATE TABLE components_components(component1 text, component2 text, primary key (component1, component2));
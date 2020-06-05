function getSeperator(txt) {
    let seperator = '=';
    if (txt.indexOf('%') !== -1) {
        seperator = 'like';
    }
    return seperator;
}

export function buildHostsQuery(host) {
    let _query = '';
    if (host) {
        if (host.ipaddr) {
            _query = ` ipaddr ${getSeperator(host.ipaddr)} "${host.ipaddr}" `;
        }
        if (host.hostname) {
            if (_query) _query += ' and ';
            _query += ` hostname ${getSeperator(host.hostname)} "${host.hostname}" `;
        }
        if (host.os) {
            if (_query) _query += ' and ';
            _query += ` os ${getSeperator(host.os)} "${host.os}" `;
        }
    }
    return _query;
}
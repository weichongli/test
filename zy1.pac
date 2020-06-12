function FindProxyForURL(url, host) {

    if(isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "119.90.52.186", "255.255.255.255") ||
        isInNet(host, "100.64.0.0", "255.192.0.0")) return "DIRECT";

    return "PROXY 100.100.0.1:1228";
}


export default {
	myFun1 () {
		const data=Table2.tableData;

		const transformedData = data.map(item => ({
    virtual_server: item.virtual_server,
    port: item.port,
    sat: item.SAT,
    ipProtocol: item.protocol,
    pool: {
        pool_name: item.pool_name,
        node_ips: item.node_ips.split(/,\s*/).filter(ip => ip !== ''),
        health_monitor_name: item.health_monitor_name.join(", ")
    },
    real_username: appsmith.user.username,
    type: "service"
}));
		
		return transformedData;
	
	}
}
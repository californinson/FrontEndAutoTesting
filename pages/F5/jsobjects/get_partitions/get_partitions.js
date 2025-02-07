export default {
	async getPartitions () {
		if (Input5Copy.text.length > 0 && Input7Copy.text.length > 0 && Input8Copy.text.length > 0) {
    	return f5_partitions.run().data.partitions;
		}
	}
}
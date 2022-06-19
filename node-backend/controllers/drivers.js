import fs from "fs";

export const getDrivers = async(req, res) => {

    const startIdx = req.query.pageIndex   * req.query.pageSize;
    const endIdx = (req.query.pageIndex+1)  * req.query.pageSize;
    try {
        fs.readFile('./index.get.json', 'utf8' , (err, data) => {
            const paginated = JSON.parse(data).slice(startIdx, endIdx);
            const response = {data: paginated, metadata: {pagination: {total: JSON.parse(data).length}}}
            res.status(200).send(response);
        });
    } catch (error) {
        await res.status(404).json({message: error.message});
    }
}



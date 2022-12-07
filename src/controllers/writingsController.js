const { writingsService } = require('../services');
const { catchAsync } = require('../utils/err');

const searchTitle = catchAsync(async (req, res) => {
    const { searchWord } = req.query;
    if (!searchWord) {
        return res.status(204).end();
    }

    const result = await writingsService.searchTitle(searchWord);
    return res.status(200).json({ result });
});

const getWritings = catchAsync(async (req, res) => {
    const { price, cate_id, limit, offset } = req.query;

    const result = await writingsService.getWritings(price, cate_id, limit, offset);

    return res.status(200).json({ result });
});

const getwritingInfo = catchAsync(async (req, res) => {
    const { writings_id } = req.params;
    if (isNaN(writings_id)) {
        throw new CustomError('BAD_REQUEST', 400);
    }
    const writing = await writingsService.getwritingInfo(writings_id);

    return res.status(200).json({ writing });
});

module.exports = { searchTitle, getWritings, getwritingInfo };

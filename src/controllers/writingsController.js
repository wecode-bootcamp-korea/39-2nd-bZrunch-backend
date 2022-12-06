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

const getAllWritings = catchAsync(async (req, res) => {
    const { price, limit, offset } = req.query;

    const result = await writingsService.getAllWritings(price, limit, offset);

    return res.status(200).json({ result });
});

module.exports = { searchTitle, getAllWritings };

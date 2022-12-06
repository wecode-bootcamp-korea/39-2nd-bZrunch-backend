const { appDataSource } = require('./data-source');

const searchTitle = async (searchWord) => {
    const word = {
        toSqlString: function () {
            return searchWord;
        },
    };
    const result = await appDataSource.query(
        `
        SELECT
            title
        FROM 
            writings
        WHERE 
            title LIKE "%?%";
        `,
        [word]
    );

    return result;
};

const getAllWritings = async (price, limit, offset) => {
    const limitOffset = setLimitOffset(limit, offset);
    const whereList = makeWhereList(price);
    const result = await appDataSource.query(
        `
        SELECT
          w.id,
          w.title,
          w.content,
          w.header_image,
          w.price,
        (
          SELECT
            u.name
          FROM
            users u
          WHERE
            u.id = w.user_id
        ) as authors
        FROM writings w
        ?
        ORDER BY w.created_at ASC
        ?
        `,
        [whereList, limitOffset]
    );
    return result;
};

const setLimitOffset = (limit, offset) => {
    if (!limit) limit = 10;
    if (!offset) offset = 0;
    return {
        toSqlString: function () {
            return `LIMIT ${limit} OFFSET ${offset}`;
        },
    };
};

const makeWhereList = (price) => {
    const startLine = `WHERE `;
    const priceFilter = [`w.id IS NOT NULL`];
    if (price) {
        priceFilter.push(`w.price = ${price}`);
    }
    const body = priceFilter.join(' AND ');
    const combined = startLine + body;
    return {
        toSqlString: function () {
            return combined;
        },
    };
};

module.exports = { searchTitle, getAllWritings };

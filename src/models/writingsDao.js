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

const getWritings = async (price, cate_id, limit, offset) => {
    const limitOffset = setLimitOffset(limit, offset);
    const whereList = makeWhereList(price, cate_id);
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

const makeWhereList = (price, cate_id) => {
    const startLine = `WHERE `;
    const filter = [`w.id IS NOT NULL`];
    if (cate_id) {
        filter.push(`w.category_id = ${cate_id}`);
    }
    if (price) {
        filter.push(`w.price = ${price}`);
    }
    const body = filter.join(' AND ');
    const combined = startLine + body;
    return {
        toSqlString: function () {
            return combined;
        },
    };
};

module.exports = { searchTitle, getWritings };
